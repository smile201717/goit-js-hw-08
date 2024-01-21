const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', updateName);

function updateName() {
    const trimName = nameInput.value.trim();
    const changeName = trimName || 'Anonymous';
    nameOutput.textContent = changeName;
}