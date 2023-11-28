
let userNumber = 16;
let isClicked = false;
let selectedColor = 'pink';

const squareContainer = document.querySelector('.square-container');
const changeNumberButton = document.querySelector('#change-number-button');
const changeModeButton = document.querySelector('#change-mode-button');
const chooseColorButton = document.querySelector('#colorPicker');
const clearButton = document.querySelector('#clear-button');

clearButton.addEventListener('click', () => {
   clearSquareContainer();
});

chooseColorButton.addEventListener('input', () => {
    selectedColor = colorPicker.value;
});

changeNumberButton.addEventListener('click', () => {
    askUserNumber();
});


changeModeButton.addEventListener('click', () => {
    if (!isClicked) {
        changeModeButton.textContent = 'Multicolor';
        changeModeButton.style.backgroundColor = 'rgb(240, 110, 255)';
        createMultiColorGrid(userNumber);    
    }

    else {
        changeModeButton.textContent = 'Single color';
        changeModeButton.style.backgroundColor = 'aqua';
        createSingleColorGrid(userNumber);
    }
    isClicked = !isClicked;
});

function clearSquareContainer() {
    const gridItems = document.querySelectorAll('.inner-square');
    gridItems.forEach((item) => {
    item.style.backgroundColor = 'rgb(237, 255, 253)';
  });
}

function askUserNumber () {
    const userNumber = prompt('Insert a number of squares per side (should be less than 100): ');
    if (userNumber > 100 || userNumber <= 0 || isNaN(userNumber)) {
        alert("Неверный ввод");
        return;
    }
    calculateSquareSide(userNumber);
    if(changeModeButton.textContent === 'Multicolor') createMultiColorGrid(userNumber);
    else if (changeModeButton.textContent === 'Single color') createSingleColorGrid(userNumber);
}


function calculateSquareSide(userNumber) {
    const squareSide = 480 / userNumber;
    return squareSide;
}


function createSingleColorGrid(userNumber) {
    squareContainer.innerHTML = '';
    const squareSide = calculateSquareSide(userNumber);
    for (let i = 0; i < userNumber * userNumber; i++) {
        const innerSquare = document.createElement('div');
        innerSquare.style.cssText = `height: ${squareSide}px; width: ${squareSide}px;`;
        innerSquare.classList.add('inner-square');
        squareContainer.appendChild(innerSquare);
        innerSquare.addEventListener('mousemove', () => innerSquare.style.backgroundColor = selectedColor);
    }
}


function createMultiColorGrid(userNumber) {
    squareContainer.innerHTML = '';
    const squareSide = calculateSquareSide(userNumber);
    
    for (let i = 0; i < userNumber * userNumber; i++) {
        const innerSquare = document.createElement('div');
        innerSquare.style.cssText = `height: ${squareSide}px; width: ${squareSide}px;`;
        innerSquare.classList.add('inner-square');
        squareContainer.appendChild(innerSquare);
       
        let hasBeenColored = false;
       
        innerSquare.addEventListener('mousemove', () => {
            if(!hasBeenColored) {
            innerSquare.style.backgroundColor = chooseRandomColor();
            hasBeenColored = true;
            }
        });
    }
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function chooseRandomColor() {
    const arrayRandomNumbers = [];
        for (let i = 0; i < 3; i++) {
            const randomNumber = randomInteger(0, 255);
            arrayRandomNumbers.push(randomNumber);
        }
    return "rgb("+ arrayRandomNumbers.join() + ")";
}

createSingleColorGrid(userNumber);