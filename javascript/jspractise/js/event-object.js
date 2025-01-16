const userInput = document.querySelector('#username');
const inputValue = document.querySelector('#values');

// userInput.addEventListener('click', () => {
//     console.log('input click');
// });


// userInput.addEventListener('dblclick', () => {
//     console.log('input Double click');
// });


userInput.addEventListener('input', (event) => {
    console.log(event);
});

