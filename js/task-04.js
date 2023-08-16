const counter = document.querySelector('#counter');
const valueEl = document.querySelector('#value');
const decrementBtn = counter.querySelector('[data-action="decrement"]');
const incrementBtn = counter.querySelector('[data-action="increment"]');

let counterValue = 0;

function updateValue() {
    valueEl.textContent = counterValue;
}

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    updateValue();
});

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    updateValue();
});

updateValue();
