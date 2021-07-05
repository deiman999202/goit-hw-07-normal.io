const refs = {
    input: document.getElementById('validation-input'),
}


const validLength = Number.parseInt(refs.input.dataset.length);
console.log(validLength)

refs.input.addEventListener('blur', onCheckValidInput);

function onCheckValidInput() {
    if (refs.input.value.length === validLength) {
        refs.input.classList.remove('invalid');
        refs.input.classList.add('valid');
    } else {
        refs.input.classList.remove('valid');
        refs.input.classList.add('invalid');
    }
}