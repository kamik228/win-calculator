let a = '';//first number
let b = '';//second number
let sign = '';//знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['/', 'sqrt', '*', '%', '-', '1/x', '+'];

//экран
const out = document.querySelector('.calc-screen p');

// hi computer sience
//AC
function clearAll() {
    a = '';//first number
    b = '';//second number
    sign = '';//знак операции
    finish = false;
    out.textContent = 0
}

document.querySelector(".ac").onclick = clearAll;
document.querySelector(".buttons, .top-buttons, .left-buttons").onclick = (event) => {
    //нажата не кнопка
    if (!event.target.classList.contains('btn')) return;
    //нажата кнопка C
    if (event.target.classList.contains('c')) return;

    out.textContent = '';
    //получаю нажатую кнопку
    const key = event.target.textContent

    //если нажата кнопка 0-9 или .
    if (digit.includes(key)) {
        a += key;
        console.log(a, b, sign);
    }
}