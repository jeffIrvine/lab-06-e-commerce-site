// import { cart } from './cart/cart';
import { findById } from './utils.js';
import { CART } from './constants.js';


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
    button.textContent = 'Add to my six pack!';

    button.addEventListener('click', () => {

        const cart = getFromLocalStorage('CART') || [];
        const itemInCart = findById(cart, beers.id);

        if (itemInCart === undefined) {
            const newCartItem = {
                id: beers.id,
                quantity: 1
            };
            cart.push(newCartItem);
        } else {
            itemInCart.quantity++;
        }
        setInLocalStorage(CART, cart);
    });

    li.appendChild(button);
    
    return li;
}

export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);

    return JSON.parse(item);
}

export function setInLocalStorage(key, value) {
    const stringyItem = JSON.stringify(value);

    localStorage.setItem(key, stringyItem);

    return value;
}
