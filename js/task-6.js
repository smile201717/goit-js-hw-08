function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const input = document.querySelector('input');
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  createButton.addEventListener('click', () => createBoxes(Number(input.value)));
  destroyButton.addEventListener('click', destroyBoxes);

  function createBoxes(amount) {
    if (amount < 1 || amount > 100 || isNaN(amount)) {
      alert('Please enter a number between 1 and 100.');
      return;
    }

    destroyBoxes();

    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.classList.add('box');
      boxesContainer.appendChild(box);
      size += 10;
    }

    input.value = '';
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }
