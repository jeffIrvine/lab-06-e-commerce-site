// import { beers } from '../data.js';
// import { cart } from '../cart/cart.js';
// import { calcLineItem, findById } from '../utils.js';


// export function beerCartRender(cartItem) {
//     const tr = document.createElement('tr');
//     const tdTitle = document.createElement('td');
//     const tdPrice = document.createElement('td');
//     const tdQuantity = document.createElement('td');
//     const tdTotal = document.createElement('td');
    

//     tdQuantity.textContent = cartItem.quantity;    

    
//     const beersData = findById(cart, cart.id);
//     console.log(beersData);
    
//     const price = (beersData.price).toFixed(2);
//     const name = beersData.name;
//     const total = calcLineItem(cartItem.quantity, price);
    
//     tdPrice.textContent = `$${price}`;
//     tdTitle.textContent = name;
//     tdTotal.textContent = `$${total}`;

//     tr.append(tdTitle, tdPrice, tdQuantity, tdTotal);
//     return tr;
// }