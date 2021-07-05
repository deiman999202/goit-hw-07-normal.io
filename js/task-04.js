const refs = {
    value: document.getElementById('value'),
    increment: document.querySelector('[data-action="increment"]'),
    decrement: document.querySelector('[data-action="decrement"]'),
}

refs.increment.addEventListener('click', onClickIncrement);
refs.decrement.addEventListener('click', onClickDecrement);

let i = refs.value.textContent;

function onClickIncrement() {
    i++;
    value.textContent = i;
}

function onClickDecrement() {
    i--;
    value.textContent = i;
}