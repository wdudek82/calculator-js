import './sass/style.sass';


let io = document.getElementById('io');

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

zero.addEventListener('click', () => io.value += 0);
one.addEventListener('click', () => io.value += 1);
two.addEventListener('click', () => io.value += 2);
three.addEventListener('click', () => io.value += 3);
four.addEventListener('click', () => io.value += 4);
five.addEventListener('click', () => io.value += 5);
six.addEventListener('click', () => io.value += 6);
seven.addEventListener('click', () => io.value += 7);
eight.addEventListener('click', () => io.value += 8);
nine.addEventListener('click', () => io.value += 9);
