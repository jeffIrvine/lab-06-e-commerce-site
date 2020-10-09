import { PRODUCTS } from '../constants.js';
import { beers } from '../data.js';
import { setInLocalStorage } from './renderUtils.js';


export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        if (item.id === someId) {
            return item;
        }
    }
}
export function addBeers(myObject) {

    const productArray = getLocalStorageBeers(PRODUCTS);
    productArray.push(myObject);

    setInLocalStorage(PRODUCTS, productArray);
}

export function getLocalStorageBeers() {
    let localStorageBeers = JSON.parse(localStorage.getItem(PRODUCTS));

    if (!localStorageBeers) {
        const stringyBeers = JSON.stringify(beers);

        localStorage.setItem(PRODUCTS, stringyBeers);
        localStorageBeers = beers;
    }
    return localStorageBeers;
}
