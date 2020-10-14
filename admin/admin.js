import { getLocalStorageBeers } from '../utils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const id = data.get('id');
    const name = data.get('name');
    const description = data.get('description');
    const image = data.get('image');
    const price = data.get('price');
    
    const newBeer = {
        id: id,
        name: name,
        description: description,
        image: image,
        price: price
    };

    const localStorageBeers = getLocalStorageBeers();

    localStorageBeers.push(newBeer);

    const stringyLocalBeers = JSON.stringify(localStorageBeers);
    localStorage.setItem('PRODUCTS', stringyLocalBeers);
});