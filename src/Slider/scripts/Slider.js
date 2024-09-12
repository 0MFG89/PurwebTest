class Slider {
   container;
   dots;
   leftButton;
   rightButton;
   images;
   curSlide;
   gap;

   constructor(images, gap) {
      this.container = document.querySelector('.slider__container');
      this.dots = document.querySelectorAll('.dot');
      this.leftButton = document.getElementById('left');
      this.rightButton = document.getElementById('right');
      this.images = images;
      this.curSlide = 1;
      this.gap = gap;
   }

   init() {
      this.leftButton.addEventListener('click', () => this.prevSlide());
      this.rightButton.addEventListener('click', () => this.nextSlide());
      this.dots.forEach(d => d.addEventListener('click', (e) => this.dotHandler(e)));
   }

   translate(slide) {
      const containerWidth = this.container.clientWidth;
      return -(containerWidth+this.gap)*slide;
   }

   animate(to, slide, ms, dotId) {
      let shift;
      const curTranslate = +this.container.style.translate.slice(0, -2);
      if (to > curTranslate) shift = 10;
      else shift = -10;
      
      this.leftButton.disabled = true;
      this.rightButton.disabled = true;
      this.dots.forEach(d => d.disabled = true);
      
      const interval = setInterval(() => {
         const containerTranslate = +this.container.style.translate.slice(0, -2);
         this.container.style.translate = `${containerTranslate + shift}px 0`
         const curContainerTranslate = +this.container.style.translate.slice(0, -2);
         
         if (curContainerTranslate === to) {
            clearInterval(interval);
            if (slide < 1) {
               this.curSlide = this.images;
               this.container.style.translate = `${this.translate(this.curSlide)}px 0`;
            }
   
            if (slide > this.images) {
               this.curSlide = 1;
               this.container.style.translate = `${this.translate(this.curSlide)}px 0`;
            }
   
            this.leftButton.disabled = false;
            this.rightButton.disabled = false;
            this.dots.forEach(d => d.disabled = false);
         }
      }, ms);
   }

   prevSlide() {
      this.animate(this.translate(--this.curSlide), this.curSlide, 10, this.curSlide+1);
      if (this.curSlide === 0) {
         this.dots[this.dots.length - 1].classList.add('active');
         this.dots[0].classList.remove('active');
      } else {
         this.dots[this.curSlide-1].classList.add('active');
         this.dots[this.curSlide].classList.remove('active');
      }
   }

   nextSlide() {
      this.animate(this.translate(++this.curSlide), this.curSlide, 10, this.curSlide-1);
      if (this.curSlide === this.images+1) {
         console.log(1)
         this.dots[0].classList.add('active');
         this.dots[this.dots.length - 1].classList.remove('active');
      } else {
         this.dots[this.curSlide-1].classList.add('active');
         this.dots[this.curSlide-2].classList.remove('active');
      }
   }

   moveTo(id) {
      this.animate(this.translate(this.curSlide), this.curSlide, 5, id);
   }

   dotHandler(e) {
      const dot = e.target;
      const id = +dot.id;
      if (id === this.curSlide) return;
      this.dots[this.curSlide-1].classList.remove('active');
      dot.classList.add('active');
      this.curSlide = id;
      this.moveTo(id);
   }
}

export default Slider;