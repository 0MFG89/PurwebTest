import Initialize from "./Initialize.js";
import Slider from './Slider.js';

const inititalize = new Initialize(30);
const slider = new Slider(inititalize.images, inititalize.translate);
inititalize.init();

const container = document.querySelector('.slider__container');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
const imagesInput = document.getElementById('images');
const submitImages = document.getElementById('submit');

let curSlide = 1;
let images = 0;

const translate = (slide) => {
   var gap = 30; //px
   var containerWidth = container.clientWidth;
   return -(containerWidth+gap)*slide;
};

/*const createList = () => {
   const imagesArr = [];
   for (let i = 1; i <= images; i++) {
      let li = `<li class="slider__slide">${i}</li>`;
      imagesArr.push(li);
   }
   imagesArr.unshift(imagesArr[imagesArr.length-1]);
   imagesArr.push(imagesArr[1]);
   container.innerHTML = imagesArr.join('');
}

const init = () => {
   if (!images) {
      document.querySelector('.slider__wrapper').style.display = 'none';
      return;
   }
   createList();

   container.style.translate = `${translate(curSlide)}px 0`;
};

const submit = (e) => {
   const value = imagesInput.value;
   if (value < 1 || value > 10) return;
   images = value;
   init();
}*/

/*const animate = (to, slide) => {
   let shift;
   const curTranslate = +container.style.translate.slice(0, -2);
   if (to > curTranslate) shift = 10;
   else shift = -10;
   
   leftButton.disabled = true;
   rightButton.disabled = true;
   
   const interval = setInterval(() => {
      const containerTranslate = +container.style.translate.slice(0, -2);
      container.style.translate = `${containerTranslate + shift}px 0`
      const curContainerTranslate = +container.style.translate.slice(0, -2);
      
      if (curContainerTranslate === to) {
         clearInterval(interval);
         if (slide < 1) {
            curSlide = images;
            container.style.translate = `${translate(curSlide)}px 0`;
         }

         if (slide > images) {
            curSlide = 1;
            container.style.translate = `${translate(curSlide)}px 0`;
         }

         leftButton.disabled = false;
         rightButton.disabled = false;
      }
   }, 10);
}

const prevSlide = () => {
   if (curSlide < 1) {
      animate(0, curSlide);
   } else {
      animate(translate(--curSlide), curSlide);
   }
};

const nextSlide = () => {
   if (curSlide > images) {
      animate(translate(images + 1), curSlide);
   } else {
      animate(translate(++curSlide), curSlide);
   }
};

leftButton.addEventListener('click', prevSlide);
rightButton.addEventListener('click', nextSlide);*/
//submitImages.addEventListener('click', submit);