(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-1-open]'),
    openModalBtnheader: document.querySelector('[data-modal-1-open-header]'),
    closeModalBtn: document.querySelector('[data-modal-1-close]'),
    modal: document.querySelector('[data-modal-1]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnheader.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
