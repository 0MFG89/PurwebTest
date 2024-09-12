import Slider from "./Slider.js";

class Initialize {
   input;
   button;
   wrapper
   container;
   dotsContainer;
   gap;
   images;

   constructor(gap) {
      this.input = document.getElementById('images');
      this.button = document.getElementById('submit');
      this.container = document.querySelector('.slider__container');
      this.dotsContainer = document.querySelector('.dots');
      this.wrapper = document.querySelector('.slider__wrapper');
      this.gap = gap;
      this.images = 0;
   }

   init() {
      this.wrapper.style.display = 'none';
      this.button.addEventListener('click', () => this.submit());
   }

   update() {
      this.wrapper.style.display = 'flex';
      this.createList();
      this.createDots();
      this.container.style.translate = `${this.translate(1)}px 0`;
      new Slider(this.images, this.gap).init();
   }

   submit() {
      const value = +this.input.value;
      if (value < 1 || value > 10) return;
      this.images = value;
      this.update();
   }

   translate(slide) {
      const containerWidth = this.container.clientWidth;
      return -(containerWidth+this.gap)*slide;
   }

   createList() {
      this.container.innerHTML = '';
      const imagesArr = [];
      for (let i = 1; i <= this.images; i++) {
         let li = `<li class="slider__slide">${i}</li>`;
         imagesArr.push(li);
      }
      imagesArr.unshift(imagesArr[imagesArr.length-1]);
      imagesArr.push(imagesArr[1]);
      this.container.innerHTML = imagesArr.join('');
   }

   createDots() {
      for (let i = 1; i <= this.images; i++) {
         let dot = document.createElement('button');
         dot.id = i;
         dot.classList.add('dot');
         if (i === 1) dot.classList.add('active');
         this.dotsContainer.append(dot);
      }
   }
}

export default Initialize;