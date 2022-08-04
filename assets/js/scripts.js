// Pegando o número que será decrementado e incrementado.
let numberSpan = document.getElementById("currentNumber");
let currentNumber = 0;

// Pegando os botões que vão decrementar e incrementar.
let addBtn = document.getElementById("add");
let subtractBtn = document.getElementById("subtract");

// Incrementando um número.
addBtn.addEventListener("click", () => {
    currentNumber += 1;
    numberSpan.innerHTML = currentNumber;
})

// Decrementando um número.
subtractBtn.addEventListener("click", () => {
    if (currentNumber > 0) {
        currentNumber--;
        numberSpan.innerHTML = currentNumber;
    }
})