import { findById } from '../utils.js';
import { beerRender } from '../renderUtils.js';
import { cart } from '../cart/cart.js';
import { calcLineItem, calcTotal } from '../cart/cart-utils.js';
import { beers } from '../data.js';
import { beerCartRender } from '../cart/cartRenderUtil.js';



const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    const beers = {
        id:'pbrTall',
        name: 'Pabst Blue Ribbon',
        description: 'ABV: 4.8% crisp classic lager',
        image: 'pbr.jpg',
        price: 2,
        category: 'lager',
    };
    // Set up your arguments and expectations
    const expected = '<li class="beers"><p class="name">Pabst Blue Ribbon</p><img src="../assets/pbr.jpg"><p class="description">ABV: 4.8% crisp classic lager</p><p class="price">$2.00</p><button>Add to beer container</button></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = beerRender(beers);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});


test('testing my findById', (expect) => {
    //Arrange
    const expected = {
        id:'pbrTall',
        name: 'Pabst Blue Ribbon',
        description: 'ABV: 4.8 crisp classic lager',
        image: 'pbr.jpg',
        price: 2,
        category: 'lager',
    };
    // Set up your arguments and expectations
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(beers, expected.id);

    //Expect
    // Make assertions about what is expected versus the actual result
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
    // Set up your arguments and expectations
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcTotal(cart, beers);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('testing my beerCartRender', (expect) => {

    const cart = {
        id: 'pbrTall',
        quantity: 36,
    };

    const expected = '<tr><td>Pabst Blue Ribbon</td><td>$2.00</td><td>36</td><td>$72.00</td></tr>';
    // Set up your arguments and expectations
    // Call the function you're testing and set the result to a const
    const actual = beerCartRender(cart);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});








