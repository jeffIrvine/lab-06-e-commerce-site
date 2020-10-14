import { getLocalStorageBeers } from '../utils.js';
import { beerCartRender } from './cartRenderUtil.js';
import { calcTotal } from '../cart/cart-utils.js';
import { getFromLocalStorage } from '../renderUtils.js';


const CART = 'CART';

const localStorageBeers = getLocalStorageBeers();

const orderButton = document.getElementById('order-button');
const table = document.querySelector('tbody');
const cart = getFromLocalStorage(CART) || [];

for (let i = 0; i < cart.length; i++) {
    const beer = cart[i];
    
    const tr = beerCartRender(beer);
    table.appendChild(tr);
}

const total = calcTotal(cart, localStorageBeers);

const totalCell = document.querySelector('.total');

totalCell.textContent = `Total: $${total}`;


orderButton.addEventListener('click', () => {
    const stringyCart = JSON.stringify(cart, true, 2);
    alert(stringyCart);

    localStorage.clear();
    window.location.href = '../index.html';
});