// IMPORT MODULES under test here:
import { beerRender } from '../utils.js';
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

//  alt="Islamic Scientist"