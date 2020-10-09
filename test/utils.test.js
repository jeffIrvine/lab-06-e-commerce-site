import { findById } from '../utils.js';
import { beerRender } from '../renderUtils.js';
import { calcLineItem, calcTotal } from '../cart/cart-utils.js';
import { beers, cart } from '../data.js';
import { beerCartRender } from '../cart/cartRenderUtil.js';



const test = QUnit.test;

test('time to test a function', (expect) => {

    const beers = {
        id:'pbrTall',
        name: 'Pabst Blue Ribbon',
        description: 'ABV: 4.8% crisp classic lager',
        image: 'pbr.jpg',
        price: 2,
        category: 'lager',
    };

    const expected = '<li class="beers"><p class="name">Pabst Blue Ribbon</p><img src="../assets/pbr.jpg"><p class="description">ABV: 4.8% crisp classic lager</p><p class="price">$2.00</p><button>Add to beer container</button></li>';
    

    const actual = beerRender(beers);


    expect.equal(actual.outerHTML, expected);
});


test('testing my findById', (expect) => {

    const expected = {
        id:'pbrTall',
        name: 'Pabst Blue Ribbon',
        description: 'ABV: 4.8 crisp classic lager',
        image: 'pbr.jpg',
        price: 2,
        category: 'lager',
    };

    const actual = findById(beers, expected.id);

    expect.deepEqual(actual, expected);
});


test('testing my calcLineItem function', (expect) => {

    const expected = 72;

    const actual = calcLineItem(cart[0].quantity, beers[0].price);
 
    expect.equal(actual, expected);
});


test('testing my calcTotal', (expect) => {
    const cart = [{
        id: 'pbrTall',
        quantity: 36,
    }];
    const expected = 72;

    const actual = calcTotal(cart, beers);

    expect.equal(actual, expected);
});


test('testing my beerCartRender', (expect) => {

    const cart = {
        id: 'pbrTall',
        quantity: 36,
    };

    const expected = '<tr><td>Pabst Blue Ribbon</td><td>$2.00</td><td>36</td><td>$72.00</td></tr>';

    const actual = beerCartRender(cart);

    expect.equal(actual.outerHTML, expected);
});


test('testing my addProduct', (expect) => {

    const cart = {
        id: 'pbrTall',
        quantity: 36,
    };

    const expected = '<tr><td>Pabst Blue Ribbon</td><td>$2.00</td><td>36</td><td>$72.00</td></tr>';

    const actual = beerCartRender(cart);

    expect.equal(actual.outerHTML, expected);
});








