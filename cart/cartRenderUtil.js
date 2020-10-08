import { beers } from '../data.js';
import { calcLineItem } from '../cart/cart-utils.js';
import { findById } from '../utils.js';


export function beerCartRender(cartItem) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdTotal = document.createElement('td');

    tdQuantity.textContent = cartItem.quantity;

    const beerData = findById(beers, cartItem.id);

    const price = (beerData.price).toFixed(2);
    const name = beerData.name;

    tdPrice.textContent = `$${price}`;
    tdName.textContent = name;

    const total = calcLineItem(cartItem.quantity, beerData.price).toFixed(2);
    
    tdTotal.textContent = `$${total}`;

    tr.append(tdName, tdPrice, tdQuantity, tdTotal);

    return tr;
}



