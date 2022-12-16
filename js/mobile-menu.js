
let modal = document.getElementsByClassName(".js-menu-container");
let openButton = document.getElementsByClassName(".js-open-menu");
let closeButton = document.getElementsByClassName(".js-close-menu");
(
    () => { 
        const refs = {
            openButton: document.getElementsByClassName(".js-open-menu"),
            closeButton: document.getElementsByClassName(".js-close-menu"),
            modal: document.getElementsByClassName(".js-menu-container"),
        };

        refs.openButton.addEventListener("click", toggleMenu);
        refs.closeButton.addEventListener("click", toggleMenu);

        function toggleMenu() { 
            refs.modal.classList.toggle('is-open');
            document.body.style.overflow = 'auto'; 
        }
    }
)