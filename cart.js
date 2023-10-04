const catalogCart = document.querySelectorAll('.catalog-card');
const productsBtn = document.querySelectorAll('.catalog__button');
const cartProductsList = document.querySelector('.cart-content__list');
const cart = document.querySelector('.cart');
const cartQuantity = document.querySelector('.cart__quantity');
let modalQuantity = document.querySelector('.catalog-modal__quantity span');
const fullprce = document.querySelector('.fullprce');
const productsForm = document.querySelector('.catalog-form');
const catalogFullprice = document.querySelectorAll('.catalog__fullprice');
const catalogMinus = document.querySelector('.catalog__minus');
const catalogSum = document.querySelector('.catalog__sum');
const catalogPlus = document.querySelectorAll('.catalog__plus');
const catalogPrice = document.querySelectorAll('.catalog__price');
let price = 0;
let productsArray = [];
let contPrice = 1;

catalogCart.forEach(el => {
    let count = el.querySelector('.catalog__price').textContent.replace(/[^0-9]/g,"");
    let cartPrice = el.querySelector('.catalog__fullprice');
    let summ = el.querySelector('.catalog__sum');
    let plus = el.querySelector('.catalog__plus');
    let minus = el.querySelector('.catalog__minus');
    cartPrice.textContent = parseInt(count) * parseInt(summ.textContent) + ' ₽'; 
    plus.addEventListener('click', () => {
        summ.textContent = parseInt(summ.textContent) + 1;
        cartPrice.textContent = parseInt(count) * parseInt(summ.textContent) + ' ₽';
    })
    minus.addEventListener('click', () => {
        if (summ.textContent > 1) {
            summ.textContent = parseInt(summ.textContent) - 1;
            cartPrice.textContent = parseInt(cartPrice.textContent) - count + ' ₽';
        } 
        
    })
})


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

const printQuantity = () => {
    let length = cartProductsList.querySelector('.simplebar-content').children;
    let summ = document.querySelectorAll('.summ-catalog');
    let summpc = 0;
    summ.forEach(el => {
        summpc += parseInt(el.textContent);
    })
    cartQuantity.textContent = summpc;
    modalQuantity.textContent = summpc;
    // cartQuantity.textContent = '(' + length.length + ')';
    length.length > 0 ? cart.classList.add('active') : cart.classList.remove('active');
}

const generateCartProduct = (img, title, price, fullPrice, count, id) => {
    return `
    <li class="cart-content__item" data-id="${id}">
    <article class="cart-content__product cart-product">
        <img src="${img}" alt="Блокноты" class="cart-content__img">
        <div class="cart-product__text cart-product__text_style">
            <h3 class="cart-product__title">${title}</h3>
            <div class="catalog__count">
                <span class="catalog__fullprice">${normalPrice(fullPrice)} &#8381</span>
                
                <span class="catalog__sum summ-catalog">${count} шт</span>
            </div>
            <span class="cart-product__price">Цена за шт ${normalPrice(price)} &#8381</span>
        </div>
        <button class="cart-product__delete" aria-label="Удалить товар">Del</button>
    </article>
</li>
    `;
};

const deleteProducts = (productParent) => {
    let id = productParent.dataset.id;
    document.querySelector(`.catalog__card[data-id="${id}"]`).querySelector('.catalog__button').disabled = false;
    let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.catalog__fullprice').textContent));
    minusFullPrice(currentPrice);
    printFullPrice(fullprce);
    productParent.remove();
    printQuantity();
}

productsBtn.forEach(el => {
    el.closest('.catalog__card').setAttribute('data-id', randomId());
    el.addEventListener('click', (e) => {
        let self = e.currentTarget;
        let parent = self.closest('.catalog__card');
        let id = parent.dataset.id;
        let img = parent.querySelector('.catalog__img').getAttribute('src');
        let title = parent.querySelector('.catalog__cards-title').textContent;
        let fullPrice = parseInt(priceWithoutSpaces(parent.querySelector('.catalog__fullprice').textContent.replace(/[^0-9]/g,"")));
        let count = parent.querySelector('.catalog__sum').textContent;
        let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.catalog__price').textContent.replace(/[^0-9]/g,"")));
        plusFullPrice(fullPrice);
        printFullPrice(fullprce);
        cartProductsList.querySelector('.simplebar-content')
        .insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceNumber, fullPrice, count, id));
        printQuantity();

        self.disabled = true;
    })
});

cartProductsList.addEventListener('click', (e) => {
    if (e.target.classList.contains('cart-product__delete')) {
        deleteProducts(e.target.closest('.cart-content__item'))
    }
});

const modal = document.querySelector('.catalog-modal');
const modalThanks = document.querySelector('.modal-thanks');
const modalThanksBtn = document.querySelector('.modal-thanks__btn');
const modalAnimation = document.querySelector('.modal-animation');
const close = document.querySelector('.catalog-modal__close');
const cartContentBtn = document.querySelector('.cart-content__btn');
const catalogModalBtn = document.querySelector('.catalog-modal__btn');

// catalogModalBtn.addEventListener('click', () => {
//     modal.classList.remove('modal--active');
    
// })

cartContentBtn.addEventListener('click', () => {
    modal.classList.add('modal--active');
    let productsList = document.querySelectorAll('.cart-content__item');
    
    let modalSumm = document.querySelector('.catalog-modal__summ span');
    // let length = productsList.length;
    let fullprice = fullprce.textContent;
    // modalQuantity.textContent = `${length} шт`;
    modalSumm.textContent = `${normalPrice(fullprice)}`;
    productsList.forEach((item) => {
        let title = item.querySelector('.cart-product__title').textContent;
        let fullPrc = item.querySelector('.catalog__fullprice').textContent;
        let price = item.querySelector('.cart-product__price').textContent;
        let summ = item.querySelector('.catalog__sum').textContent;
        let obj = {};
        obj.title = title;
        obj.fullPrc = fullPrc;
        obj.price = price;
        obj.summ = summ;
        productsArray.push(obj)
    })
    
});

modalThanksBtn.addEventListener('click', () => {
    modalThanks.classList.remove('modal--active');
})

close.addEventListener('click', () => {
    modal.classList.remove('modal--active');
});

modal.addEventListener('click', (e) => {
    let modalItem = e.target;
    if (modal === modalItem) {
        modal.classList.remove('modal--active');
    }
});
modalThanks.addEventListener('click', (e) => {
    let modalItem = e.target;
    if (modalThanks === modalItem) {
        modalThanks.classList.remove('modal--active');
    }
});

new window.JustValidate('.catalog-form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 20,
        },

    },
    messages: {
        name: {
            required: 'Введите имя',
            minLength: 'Введите 2 или более символов',
            maxLength: 'Не более 20 символов',
        },
        email: {
            required: 'Введите Email',
            email: 'Введите корректный Email',
        }
    },
    submitHandler: function (thisForm) {
        let formData = new FormData(thisForm);
        let xhr = new XMLHttpRequest();
        let formFullprce = document.querySelector('.catalog-modal__summ').textContent;
        formData.append('Товары', JSON.stringify(productsArray));
        formData.append('Цена', formFullprce);
        console.log(thisForm);

        xhr.onreadystatechange = function () {
            modalAnimation.classList.add('modal--active');
            modal.classList.remove('modal--active');
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    productsBtn.forEach(el => {
                        el.disabled = false;
                    })
                    console.log('Отправлено');
                    document.querySelector('.simplebar-content').innerHTML = "";
                    modalAnimation.classList.remove('modal--active');
                    modalThanks.classList.add('modal--active');
                    printQuantity();
                }
            }
        }
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
        thisForm.reset();
    }
});




