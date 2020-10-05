// IMPORT MODULES under test here:
import { soulRender } from '../utils.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    const souls = {
        id:'sunniScientist',
        title: '14th century Islamic Scientist',
        name: 'Ala al-Dīn Ali ibn Muhammed',
        description: 'Developed astronomical physics providing proof of the earth\'s rotation.',
        img: 'sunniScientist.jpg',
        price: 400000000,
        catagory: '14th Century',
        corrupted: false,
    };
    // Set up your arguments and expectations
    const expected = '<li class="souls"><p class="title">14th century Islamic Scientist</p><p class="name">Ala al-Dīn Ali ibn Muhammed</p><img src="../assets/sunniScientist.jpg" alt="Sunni Scientist"><p class="description">Developed astronomical physics providing proof of the earth\'s rotation.</p><p class="price">$400,000,000</p><div>Corrupted:</div><p class="corrupted">False</p><button>Add to soul container</button></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = soulRender(souls);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

