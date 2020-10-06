import { souls } from '../data.js';
import { soulRender } from '../utils.js';

const ul = document.querySelector('#list');

for (let i = 0; i < souls.length; i++) {
    const soul = souls[i];

    const li = soulRender(soul);

    ul.appendChild(li);
}