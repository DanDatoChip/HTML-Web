// ------------------------------------------------------------------------- LAB 5 -----------------------------------------------------------------------------------------
function processArray() {
    const arrayLength = document.getElementById('arrayLength').value;
    if (arrayLength <= 0) {
        alert('Будь ласка, введіть позитивне число.');
        return;
    }

    // Створення одновимірного масиву з випадковими числами
    const arr = Array.from({ length: arrayLength }, () => Math.floor(Math.random() * 100));
    const resultDiv = document.getElementById('result');

    // Знаходження суми елементів з парними індексами
    const sumEvenIndices = arr.reduce((sum, current, index) => (index % 2 === 0 ? sum + current : sum), 0);

    // Знаходження максимального елемента та його індекса
    const maxElement = Math.max(...arr);
    const maxIndex = arr.indexOf(maxElement);

    // Знаходження мінімального елемента та його індекса серед елементів з непарними індексами
    const oddIndexedElements = arr.filter((_, index) => index % 2 !== 0);
    const minElement = Math.min(...oddIndexedElements);
    const minIndex = arr.indexOf(minElement);

    // Сортування масиву у порядку зростання
    const sortedArray = [...arr].sort((a, b) => a - b);

    // Вивід результатів
    resultDiv.innerHTML = `
        <p>Вхідний масив: [${arr.join(', ')}]</p>
        <p>Сума елементів з парними індексами: ${sumEvenIndices}</p>
        <p>Максимальний елемент: ${maxElement}, його індекс: ${maxIndex}</p>
        <p>Мінімальний елемент серед елементів з непарними індексами: ${minElement}, його індекс: ${minIndex}</p>
        <p>Вихідний масив (упорядкований): [${sortedArray.join(', ')}]</p>
    `;
}

// ------------------------------------------------------------------------- LAB 6 -----------------------------------------------------------------------------------------

// ------------------------------------------------------------------------- ЗАВДАННЯ №2 -----------------------------------------------------------------------------------------

function swapInputs() {
    input1 = document.getElementById('input1').value;
    input2 = document.getElementById('input2').value;
  temp1 = input1;
  temp2 = input2; 
  document.getElementById('input1').value = temp2;
  document.getElementById('input2').value = temp1;

}

// ------------------------------------------------------------------------- ЗАВДАННЯ №4 -----------------------------------------------------------------------------------------

function Lower() {
  let square = document.getElementById("square");
  let size = parseInt(square.style.width);
  if (size > 15) {
    size -= 15;
    square.style.width = size + "px";
    square.style.height = size + "px";
  }
}

function Higher() {
  let square = document.getElementById("square");
  let size = parseInt(square.style.width);
  size += 15;
  square.style.width = size + "px";
  square.style.height = size + "px";
}

// ------------------------------------------------------------------------- ЗАВДАННЯ №6 -----------------------------------------------------------------------------------------

function doubleListValues() {
  const myList = document.getElementById('myList');
  const doubleButton = document.getElementById('doubleButton');
  const listItems = myList.querySelectorAll('li');
  for (const item of listItems) {
    const currentValue = parseInt(item.textContent);
    const newValue = currentValue * 2;
    item.textContent = newValue;
  }
}

// ------------------------------------------------------------------------- ЗАВДАННЯ №7 -----------------------------------------------------------------------------------------

function processCategories() {
  const categoriesList = document.getElementById('categories');
  const categoryItems = categoriesList.querySelectorAll('.item');
  console.log('Кількість категорій:', categoryItems.length);
  categoryItems.forEach(categoryItem => {
    const categoryTitle = categoryItem.querySelector('h2').textContent;
    const categoryItemsCount = categoryItem.querySelectorAll('li').length;
    console.log(`Категорія: ${categoryTitle}`);
    console.log(`Кількість елементів: ${categoryItemsCount}`);
    console.log('----------------------------------');
  });
}


// ------------------------------------------------------------------------- ЗАВДАННЯ №8 -----------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login-form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Щоб уникнути перезавантаження сторінки

    const emailInput = loginForm.elements["email"];
    const passwordInput = loginForm.elements["password"];

    // Перевірка на заповненість полів
    if (!emailInput.value.trim() || !passwordInput.value.trim()) {
      alert("All form fields must be filled in");
      return;
    }

    // Створення об'єкта з даними форми
    const formData = {
      email: emailInput.value.trim(),
      password: passwordInput.value.trim(),
    };

    // Виведення об'єкта з даними у консоль
    console.log(formData);

    // Очищення значень полів форми
    loginForm.reset();
  });
});


// ------------------------------------------------------------------------- ЗАВДАННЯ №9 -----------------------------------------------------------------------------------------

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

function ChangeColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  const spanElement = document.querySelector('.color');
  spanElement.textContent = newColor;
};


// ------------------------------------------------------------------------- ЗАВДАННЯ №10 -----------------------------------------------------------------------------------------

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; 
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);

    width += 10;
    height += 10;
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; 
}


function Create() {
  const amountInput = document.querySelector('input[type="number"]');
  const amount = parseInt(amountInput.value);
  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert('Введіть число від 1 до 100');
    return;
  }
  createBoxes(amount);
  amountInput.value = ''; 
};
