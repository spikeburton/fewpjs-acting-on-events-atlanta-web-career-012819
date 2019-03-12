// Your code here
const dodger = document.getElementById('dodger');

document.addEventListener('keydown', (e) => {
  if (e.which === 37) {
    // Left key was pressed; move dodger left
    moveDodgerLeft();
  } else if (e.which === 39) {
    // Right key was pressed; move dodger right
    moveDodgerRight();
  }
})

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10)

  if(left > 0) dodger.style.left = `${left-1}px`;
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10)

  if(left + 40 < 400) dodger.style.left = `${left+1}px`;
}
