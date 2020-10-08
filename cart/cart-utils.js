import { findById } from '../utils.js';


export function calcLineItem(quantity, price) {
    return quantity * price;
}

export function calcTotal(cart, beer){
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const item = findById(beer, lineItem.id);
        const lineTotal = calcLineItem(lineItem.quantity, item.price);
        orderTotal += lineTotal;
    }
    return orderTotal;
}