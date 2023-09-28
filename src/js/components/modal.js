const modal = document.querySelector('.catalog-modal');
const close = document.querySelector('.catalog-modal__close');
const cartContentBtn = document.querySelector('.cart-content__btn');

cartContentBtn.addEventListener('click', () => {
    modal.classList.add('modal--active');
});

close.addEventListener('click', () => {
    modal.classList.remove('modal--active');
});

modal.addEventListener('click', (e) => {
    let modalItem = e.target;
    if (modal === modalItem) {
        modal.classList.remove('modal--active');
    }
})

