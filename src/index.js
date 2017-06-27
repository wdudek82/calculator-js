import './sass/style.sass';

let state = {
    result: document.getElementById('result'),
};

let zero = document.getElementById('0');
let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let seven = document.getElementById('7');
let eight = document.getElementById('8');
let nine = document.getElementById('9');

let clear = document.getElementById('clear');
let back = document.getElementById('back');

let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let dot = document.getElementById('dot');
let equal = document.getElementById('equal');

zero.addEventListener('click', () => {
    state.result.value += 0
});
one.addEventListener('click', () => {
    state.result.value += 1
});
two.addEventListener('click', () => {
    state.result.value += 2
});
three.addEventListener('click', () => {
    state.result.value += 3
});
four.addEventListener('click', () => {
    state.result.value += 4
});
five.addEventListener('click', () => {
    state.result.value += 5
});
six.addEventListener('click', () => {
    state.result.value += 6
});
seven.addEventListener('click', () => {
    state.result.value += 7
});
eight.addEventListener('click', () => {
    state.result.value += 8
});
nine.addEventListener('click', () => {
    state.result.value += 9
});

clear.addEventListener('click', () => state.result.value = '');
back.addEventListener('click', () => state.result.value = state.result.value.slice(0, -1));

plus.addEventListener('click', () => {
    state.result.value += '+';
});
minus.addEventListener('click', () => {
    state.result.value += '-';
});
multiply.addEventListener('click', () => {
    state.result.value += '*';
});
divide.addEventListener('click', () => {
    state.result.value += '/';
});
dot.addEventListener('click', () => {
    state.result.value += '.';
});
equal.addEventListener('click', () => {
    state.result.value = state.result.value.replace(/^[*+-/]+|[*+-/]+$/g, '');

    state.result.value = eval(state.result.value);
    state.result.value = state.result.value === '0' ? null : state.result.value;
});
