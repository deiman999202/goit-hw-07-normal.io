// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
    // после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.getElementById('ingredients');

const ingredientArr = []

ingredients.forEach(ingredient => {
    let tempLiEl = document.createElement('li');
    tempLiEl.textContent = ingredient;
    ingredientArr.push(tempLiEl);
})

ingredientsEl.append(...ingredientArr)
 