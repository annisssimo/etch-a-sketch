
const squareContainer = document.querySelector('.square-container');
const changeNumberButton = document.querySelector('button');
changeNumberButton.addEventListener('click', () => {
    askUserNumber();
});

let userNumber = 16;

function askUserNumber () {
    const userNumber = prompt('Insert a number of squares per side (should be less than 100): ');
    if (userNumber > 100 || userNumber <= 0 || isNaN(userNumber)) {
        alert("Неверный ввод");
        return;
    }
    calculateSquareSide(userNumber);
    createGrid(userNumber);
}


function calculateSquareSide(userNumber) {
    const squareSide = 480 / userNumber;
    return squareSide;
}


function createGrid(userNumber) {
    squareContainer.innerHTML = '';
    const squareSide = calculateSquareSide(userNumber);
    for (let i = 0; i < userNumber * userNumber; i++) {
    const innerSquare = document.createElement('div');
    innerSquare.style.cssText = `height: ${squareSide}px; width: ${squareSide}px;`;
    innerSquare.classList.add('inner-square');
    squareContainer.appendChild(innerSquare);
    innerSquare.addEventListener('mouseover', 
    e => e.target.classList.add('my-colour-class')
    );
    }
}

createGrid(userNumber);