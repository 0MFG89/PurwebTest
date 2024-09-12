// Burger

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.menu__close');

const openMenu = () => menu.classList.add('visible');
const closeMenu = () => menu.classList.remove('visible');
burger.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);

// Modal

const modal = document.querySelector('.modal');
const contactForm = document.querySelector('.modal__contact-form');
const thanks = document.querySelector('.modal__thanks');
const openButtons = document.querySelectorAll('.open_modal');
const modalCloseButtons = document.querySelectorAll('.modal_close');
const contactError = document.querySelector('.modal__error');
const errorName = document.getElementById('error_name');
const errorEmail = document.getElementById('error_email');
const errorPhone = document.getElementById('error_phone');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

const openModal = () => modal.classList.add('visible');
const closeModal = () => {
   modal.classList.remove('visible');
   !contactForm.classList.contains('visible') && 
      contactForm.classList.add('visible');
   thanks.classList.contains('visible') &&
      thanks.classList.remove('visible');
   errorName.classList.remove('visible');
   errorEmail.classList.remove('visible');
   errorPhone.classList.remove('visible');
   contactError.classList.remove('visible');
   nameInput.value = "";
   emailInput.value = "";
   phoneInput.value = "";
};
openButtons.forEach(b => b.addEventListener('click', openModal));
modalCloseButtons.forEach(b => b.addEventListener('click', closeModal));

// Contact Form

const contactButton = document.querySelector('.contact_button');


const contact = (e) => {
   e.preventDefault();
   errorName.classList.remove('visible');
   errorEmail.classList.remove('visible');
   errorPhone.classList.remove('visible');
   contactError.classList.remove('visible');
   if (!nameInput.value ||
       !emailInput.value ||
       !phoneInput.value
   ) {
      !nameInput.value && errorName.classList.add('visible');
      !emailInput.value && errorEmail.classList.add('visible');
      !phoneInput.value && errorPhone.classList.add('visible');
      contactError.classList.add('visible');
      return;
   }
   contactForm.classList.remove('visible');
   thanks.classList.add('visible');
};

contactButton.addEventListener('click', contact);

// Contact Form Phone mask and validation

const flag = document.querySelector('#flag>img');

const phoneInputNumbers = (input) => {
   return input.value.replace(/\D/g, "");
}

const onPhoneInput = (e) => {
   const input = e.target;
   let inputNumbers = phoneInputNumbers(input);
   let resultValue = "";
   let selectionStart = input.selectionStart;

   if (!inputNumbers) 
      return input.value = "";

   if (input.value.length !== selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
         input.value = resultValue;
      }
      return;
   }

   if (['7', '8', '9'].includes(inputNumbers[0])) {
      console.log(flag.src)
      flag.src = "./src/WebSite/imgs/russia.webp"

      if (inputNumbers[0] === '9')
         inputNumbers = "7" + inputNumbers;
      let firstSymbols = inputNumbers[0] === '8' ? '8' : '+7';
      resultValue = firstSymbols + ' ';
      if (inputNumbers.length > 1) {
         resultValue += '(' + inputNumbers.substring(1, 4);
      }
      if (inputNumbers.length > 4) {
         resultValue += ') ' + inputNumbers.substring(4, 7);
      }
      if (inputNumbers.length > 7) {
         resultValue += '-' + inputNumbers.substring(7, 9);
      }
      if (inputNumbers.length > 9) {
         resultValue += '-' + inputNumbers.substring(9, 11);
      }
   } else {
      return input.value = '+' + inputNumbers;
   }
   input.value = resultValue;
};

const onPhoneKeydown = (e) => {
   const input = e.target;
   const inputNumbers = phoneInputNumbers(input);
   if (e.keyCode === 8 && inputNumbers.length === 1) {
      flag.src = "./src/WebSite/imgs/usa.png"
      input.value = "";
   } 
};

const onPhonePaste = (e) => {
   const input = e.target;
   let inputNumbers = phoneInputNumbers(input);
   let pasted = e.clipboardData || window.clipboardData;

   if (!pasted) return;
   let pastedText = pasted.getData("Text");
   if (/\D/g.test(pastedText)) {
      input.value = inputNumbers;
   }
}

phoneInput.addEventListener('input', onPhoneInput);
phoneInput.addEventListener('keydown', onPhoneKeydown);
phoneInput.addEventListener('paste', onPhonePaste);