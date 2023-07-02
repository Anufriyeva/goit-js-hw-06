const valueElement = document.querySelector("#value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);

function decrement() {
    valueElement.textContent = counterValue -= 1;
}

function increment() {
    valueElement.textContent = counterValue += 1;
}