// Pegando o número que será decrementado e incrementado.
let numberSpan = document.getElementById("currentNumber");
let currentNumber = 0;

// Pegando os botões que vão decrementar e incrementar.
let addBtn = document.getElementById("add");
let subtractBtn = document.getElementById("subtract");

// Incrementando um número.
addBtn.addEventListener("click", () => {
    currentNumber++;
    numberSpan.innerHTML = currentNumber;
    numberSpan.style.color = "#00a000";
})

// Decrementando um número.
subtractBtn.addEventListener("click", () => {
    if (currentNumber > 0) {
        currentNumber--;
        numberSpan.innerHTML = currentNumber;
        if (currentNumber !== 0) {
            numberSpan.style.color = "#ff4040";
        } else {
            numberSpan.style.color = "black";
        }
    }
})

// Criando o botão de reset.
function createResetButton() {
    let btn = document.createElement("button");
    let text = document.createTextNode("Reset");
    btn.setAttribute("id", "reset");
    btn.appendChild(text);
    btn.addEventListener("click", () => {
        currentNumber = 0;
        numberSpan.innerHTML = currentNumber;
        numberSpan.style.color = "black";
    })
    document.body.appendChild(btn); 
}

createResetButton();