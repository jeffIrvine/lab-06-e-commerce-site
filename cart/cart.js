import { beers } from '../data.js';
import { beerCartRender } from '../cart/cartRenderUtil.js';
import { findById } from '../utils.js';
import { calcTotal } from '../cart/cart-utils.js';
import { getFromLocalStorage, CART } from '../renderUtils.js';


// import { getFromLocalStorage, CART } from '../renderUtils.js'
const orderButton = document.getElementById('order-button');
const table = document.querySelector('tbody');
const cart = getFromLocalStorage(CART) || [];

for (let i = 0; i < cart.length; i++) {
    const beer = cart[i];


    const tr = beerCartRender(beer);
    table.appendChild(tr);
}

const total = calcTotal(cart, beers);

const totalCell = document.querySelector('.total');

totalCell.textContent = `Total: $${total}`;


orderButton.addEventListener('click', () => {
    const stringyCart = JSON.stringify(cart, true, 2);
    alert(stringyCart);

    localStorage.clear();
    window.location.href = '../index.html';
});
























// export const cart = [{
//     id: 'pbrTall',
//     quantity: 36,
// }, {
//     id: 'fire805Tall',
//     quantity: 3,
// }, {
//     id: 'bastardTall',
//     quantity: 1,
// }, {
//     id: 'rainierTall',
//     quantity: 1,
// }, {
//     id: 'easyJackTall',
//     quantity: 1,
// }];




