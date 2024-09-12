// Cookies

const cookies = document.querySelector('.cookies');
const closeCookieButton = document.querySelector('.cookies__close');
const cookiesAcceptButton = document.querySelector('.cookies_accept');
const cookiesDeclineButton = document.querySelector('.cookies_decline');

const openCookies = () => {
   cookies.classList.add('visible');
   var cookieOpacity = 0;
   let increment = 0.1;
   let interval = setInterval(() => {
      cookies.style.opacity = cookieOpacity;
      cookieOpacity += increment;
      if (cookieOpacity > 1) {
         clearInterval(interval);
      }
   }, 100);
};
const closeCookies = () => cookies.classList.remove('visible');

window.onload = openCookies;
closeCookieButton.addEventListener('click', closeCookies);
cookiesAcceptButton.addEventListener('click', closeCookies);
cookiesDeclineButton.addEventListener('click', closeCookies);