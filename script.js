var result = '';
var memory = '';
var numbers = document.querySelectorAll('#number');
var operators = document.querySelectorAll('#operator');
var allMemory = document.querySelectorAll('#memory');

Array.prototype.forEach.call(numbers, function (number) {
    number.onclick = add;
});
Array.prototype.forEach.call(operators, function (operator) {
    operator.onclick = add;
});
Array.prototype.forEach.call(allMemory, function (memory) {
    memory.onclick = memo;
});

hover.onmouseover = hover.onmouseout = handler;
function handler(event) {
    if (event.type == 'mouseover')
        event.target.style.opacity = "0.6";
    if (event.type == 'mouseout')
        event.target.style.opacity = '';
}

document.addEventListener('keypress', function (event) {
    switch (event.key) {
        case '0': result = result.toString() + '0'; break;
        case '1': result = result.toString() + '1'; break;
        case '2': result = result.toString() + '2'; break;
        case '3': result = result.toString() + '3'; break;
        case '4': result = result.toString() + '4'; break;
        case '5': result = result.toString() + '5'; break;
        case '6': result = result.toString() + '6'; break;
        case '7': result = result.toString() + '7'; break;
        case '8': result = result.toString() + '8'; break;
        case '9': result = result.toString() + '9'; break;
        case '+': result = result.toString() + '+'; break;
        case '-': result = result.toString() + '-'; break;
        case '*': result = result.toString() + '*'; break;
        case '/': result = result.toString() + '/'; break;
        case '.': result = result.toString() + '.'; break;
        case '=': calc(); break;
        case 'Enter': calc(); break;
        case 'Escape': clear(); break;
        default:
            return;
    }
    document.querySelector('#current').innerHTML = result;
    console.log(result);
});

function add(e) {
    if (e.target.innerHTML == '=') {
        calc();
        return;
    }
    let newResult = e.target.innerText.toString();
    if (e.target.innerText == '÷')
        newResult = '/';
    if (e.target.innerText == '×')
        newResult = '*';
    result = result.toString() + newResult;
    document.querySelector('#current').innerHTML = result;
    console.log(result);
};

function memo(e) {
    if (result.toString() == '') {
        if (memory.toString() == '')
            memory = '0';
        document.querySelector('#result').innerHTML = 'M = ' + memory;
        console.log('memory = ' + memory);
        return;
    }
    calc();
    if (e.target.innerText == 'M+')
        memory = memory.toString() + '+' + result;
    else
        memory = memory.toString() + '-' + result;
    memory = eval(memory);
    console.log('memory = ' + memory);
}

function calc(e) {
    result = eval(result);
    console.log('result = ' + result);
    document.querySelector('#result').innerHTML = result;
};

document.getElementById('clear').addEventListener('click', function () {
    clear();
});

function clear() {
    result = '';
    document.querySelector('#result').innerHTML = '';
    document.querySelector('#current').innerHTML = '0';
};