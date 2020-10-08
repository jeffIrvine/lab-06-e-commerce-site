import { beers } from '../data.js';
import { beerRender } from '../renderUtils.js';

const ul = document.querySelector('#list');

for (let i = 0; i < beers.length; i++) {
    const beer = beers[i];

    const li = beerRender(beer);

    ul.appendChild(li);
}