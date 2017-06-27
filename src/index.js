import './sass/style.sass';

let result = document.getElementById('result');

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
    result.value += 0
});
one.addEventListener('click', () => {
    result.value += 1
});
two.addEventListener('click', () => {
    result.value += 2
});
three.addEventListener('click', () => {
    result.value += 3
});
four.addEventListener('click', () => {
    result.value += 4
});
five.addEventListener('click', () => {
    result.value += 5
});
six.addEventListener('click', () => {
    result.value += 6
});
seven.addEventListener('click', () => {
    result.value += 7
});
eight.addEventListener('click', () => {
    result.value += 8
});
nine.addEventListener('click', () => {
    result.value += 9
});

clear.addEventListener('click', () => result.value = '');
back.addEventListener('click', () => result.value = result.value.slice(0, -1));

plus.addEventListener('click', () => {
    result.value += '+';
});
minus.addEventListener('click', () => {
    result.value += '-';
});
multiply.addEventListener('click', () => {
    result.value += '*';
});
divide.addEventListener('click', () => {
    result.value += '/';
});
dot.addEventListener('click', () => {
    result.value += '.';
});
equal.addEventListener('click', () => {
    result.value = result.value.replace(/^[*+-/]+|[*+-/]+$/g, '');

    result.value = eval(result.value);
    result.value = result.value === '0' ? null : result.value;
});
