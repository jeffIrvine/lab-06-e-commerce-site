
import { beers } from './data.js';
import { cart } from './cart/cart.js';


export function beerRender(beers) {
    const li = document.createElement('li');
    li.classList.add('beers');

    
    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = beers.name;
    li.appendChild(name);
    
    const image = document.createElement('img');
    image.src = `../assets/${beers.image}`;
    li.appendChild(image);
    
    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = beers.description;
    li.appendChild(description);
    
    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `${beers.price.toLocaleString('en-US', { style:'currency', currency:'USD' })}`;
    li.appendChild(price);
    
    const button = document.createElement('button');
    button.textContent = 'Add to beer container';
    li.appendChild(button);
    
    
    return li;
}

export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        if (item.id === someId) {
            return item;
        }
    }
}

export function calcTotal(cartArray){
    let accumulator = 0;
    for (let i = 0; i < cartArray.length; i++) {
        const item = cartArray[i];
        const actualItem = findById(beers, item.id);
        const subTotal = actualItem.price * item.quantity;
        accumulator = accumulator + subTotal;
        console.log(accumulator);
    }
    return accumulator;
}
