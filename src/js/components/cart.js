const productsBtn = document.querySelectorAll('.catalog__button');
const cartProductsList = document.querySelector('.cart-content__list');
const cart = document.querySelector('.cart');
const cartQuantity = document.querySelector('.cart__quantity');
const fullprce = document.querySelector('.fullprce');
let price = 0;

const randomId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const priceWithoutSpaces = (str) => {
    return str.replace(/\s/g, '');
};

const normalPrice = (str) => {
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

const plusFullPrice = (currentPrice) => {
    return price += currentPrice;
}
const minusFullPrice = (currentPrice) => {
    return price -= currentPrice;
};

const printFullPrice = (sum) => {
    sum.textContent = `${normalPrice(price)} ₽`
};

const score = (str) => {
    str.textContent = contPrice +=1;
}

const printQuantity = () => {
    let length = cartProductsList.querySelector('.simplebar-content').children.length;
    cartQuantity.textContent = '(' + length + ')';
    length > 0 ? cart.classList.add('active') : cart.classList.remove('active');
}

const generateCartProduct = (img, title, price, descr, id) => {
    return `
        <li class="cart-content__item" data-id="${id}">
            <article class="cart-content__product cart-product">
                <img src="${img}" alt="Блокноты" class="cart-content__img">
                <div class="cart-product__text">
                    <h3 class="cart-product__title">${title}</h3>
                    <span class="cart-product__descr">${descr}</span>
                    <span class="cart-product__price">${normalPrice(price)} &#8381</span>
                </div>
                <button class="cart-product__delete" aria-label="Удалить товар">Del</button>
            </article>
        </li>
    `;
};

const catalogPrice = document.querySelector('.catalog__price');
const catalogMinus = document.querySelector('.catalog__minus');
const catalogSum = document.querySelector('.catalog__sum');
const catalogPlus = document.querySelector('.catalog__plus');
let contPrice = 0;

// catalogPlus.addEventListener('click', () => {
//     let countSumm = parseInt(priceWithoutSpaces(catalogPrice.textContent));
//     plusFullPrice(countSumm);
//     // printFullPrice(catalogPrice);
//     score(catalogSum)
//     catalogPrice.textContent = countSumm * catalogSum.textContent;
    
//     // console.log(catalogSum.textContent);
// })


const deleteProducts = (productParent) => {
    let id = productParent.dataset.id;
    document.querySelector(`.catalog__card[data-id="${id}"]`).querySelector('.catalog__button').disabled = false;
    let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.cart-product__price').textContent));
    minusFullPrice(currentPrice);
    printFullPrice(fullprce);
    productParent.remove();
    printQuantity();
    
}

productsBtn.forEach(el => {
    el.closest('.catalog__card').setAttribute('data-id', randomId());
    el.addEventListener('click', (e)=> {
        let self = e.currentTarget;
        let parent = self.closest('.catalog__card');
        let id = parent.dataset.id;
        let img = parent.querySelector('.catalog__img').getAttribute('src');
        let title = parent.querySelector('.catalog__cards-title').textContent;
        let descr = parent.querySelector('.catalog__descr').textContent;
        let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.catalog__price').textContent));
        plusFullPrice(priceNumber);
        printFullPrice(fullprce);
        cartProductsList.querySelector('.simplebar-content').insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceNumber, descr, id));
        printQuantity();
        
        self.disabled = true;
    })
});

cartProductsList.addEventListener('click', (e) => {
    if (e.target.classList.contains('cart-product__delete')) {
        deleteProducts(e.target.closest('.cart-content__item'))
    }
});


