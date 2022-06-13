(() => {
  const menuBtnRef = document.querySelector('[data-mob-menu-open]');

  const mobileMenuRef = document.querySelector('[data-menu]');
  const btn = document.querySelector('[data-mob-menu-close]');

  btn.addEventListener('click', function onClick(event) {
    mobileMenuRef.classList.remove('is-open');
  });

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.add('is-open');
  });
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-mob]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
