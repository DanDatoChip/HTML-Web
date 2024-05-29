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


