import { cart } from '../cart/cart.js';
import { getLocalStorageBeers } from '../utils.js';
import { calcTotal } from '../cart/cart-utils.js';
import { beerCartRender } from '../cart/cartRenderUtil.js';

const localStorageBeers = getLocalStorageBeers();

const table = document.querySelector('tbody');

for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    
    const tr = beerCartRender(item);
    table.appendChild(tr);
}

const totalCell = document.querySelector('.order-total');
const total = calcTotal(cart, localStorageBeers);
totalCell.textContent = `Total: $${total}`;