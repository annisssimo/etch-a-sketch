
const squareContainer = document.querySelector('.square-container');

let n = 16 * 16;
for (let i = 0; i < n; i++) {
const innerSquare = document.createElement('div');
innerSquare.classList.add('inner-square');
squareContainer.appendChild(innerSquare);
innerSquare.addEventListener('mouseover', 
  e => e.target.classList.add('my-colour-class')
)
}
