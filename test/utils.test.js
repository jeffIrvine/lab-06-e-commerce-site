import { beerRender, findById, calcLineItem } from '../utils.js';
import { cart } from '../cart/cart.js';
import { beers } from '../data.js';
// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    const beers = {
        id:'pbrTall',
        name: 'Pabst Blue Ribbon',
        description: 'ABV: 4.8% crisp classic lager',
        image: 'pbr.jpg',
        price: 2,
        catagory: 'lager',
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
        catagory: 'lager',
    };
    // Set up your arguments and expectations
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(beers, expected.id);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});


test('testing my calcLineItem', (expect) => {
    //Arrange 
    const expected = 72;
    // Set up your arguments and expectations
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcLineItem(cart[0].quantity, beers[0].price);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});