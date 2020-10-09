import { PRODUCTS } from '../constants.js';
import { beers as hardCodedBeers } from '../data.js';


export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        if (item.id === someId) {
            return item;
        }
    }
}


export function getLocalStorageBeers() {
    let localStorageBeers = JSON.parse(localStorage.getItem(PRODUCTS));

    if (!localStorageBeers) {
        const stringyBeers = JSON.stringify(hardCodedBeers);

        localStorage.setItem(PRODUCTS, stringyBeers);
        localStorageBeers = hardCodedBeers;
    }
    return localStorageBeers;
}