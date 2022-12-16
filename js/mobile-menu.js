
// let modal = document.getElementsByClassName(".js-menu-container");
// let openButton = document.getElementsByClassName(".js-open-menu");
// let closeButton = document.getElementsByClassName(".js-close-menu");
// (
//     () => { 
//         const refs = {
//             openButton: document.getElementsByClassName(".js-open-menu"),
//             closeButton: document.getElementsByClassName(".js-close-menu"),
//             modal: document.getElementsByClassName(".js-menu-container"),
//         };

//         refs.openButton.addEventListener("click", toggleMenu);
//         refs.closeButton.addEventListener("click", toggleMenu);

//         function toggleMenu() { 
//             refs.modal.classList.toggle('is-open');
//             document.body.style.overflow = 'auto'; 
//         }
//     }
// )

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();