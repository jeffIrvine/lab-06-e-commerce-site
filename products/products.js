import { getLocalStorageBeers } from '../utils.js';
import { beerRender } from '../renderUtils.js';

const localStorageBeers = getLocalStorageBeers();
const ul = document.querySelector('#list');

for (let i = 0; i < localStorageBeers.length; i++) {
    const beer = localStorageBeers[i];

    const li = beerRender(beer);

    ul.appendChild(li);
}