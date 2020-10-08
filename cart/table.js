import { cart } from '../cart/cart.js';
import { beers } from '../data.js';
import { calcTotal } from '../cart/cart-utils.js';
import { beerCartRender } from '../cart/cartRenderUtil.js';

const table = document.querySelector('tbody');

for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    
    const tr = beerCartRender(item);
    table.appendChild(tr);
}

const totalCell = document.querySelector('.order-total');
const total = calcTotal(cart, beers);
totalCell.textContent = `Total: $${total}`;