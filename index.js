console.log(1);
//practic 1
//1
var string = 'Privet';
var nomer = 69;
var shtoto = false;
//2
var variable = 5;
variable = "текст";
variable = true;
var empty = null;
function show() {
    console.log("...");
}
show();
//practic 2
var count = 0;
console.log(count);
count = 99;
console.log(count);
//practic 3
//1
var a = 25;
var b = 4;
var sum = a + b;
if (sum % 2 === 0) {
    console.log("Число " + sum + " чётное");
}
if (sum % 2 != 0) {
    console.log("Число " + sum + " нечётное");
}
//2
var sc = 0;
sc += 1;
sc += 1;
sc += 1;
sc -= 1;
sc -= 1;
console.log(sc);
//3
var wallet = 1000;
wallet += 200;
wallet *= 0.7;
wallet /= 2;
console.log(wallet);
//practic 4
//1
var speed = 80;
var isRoadClear = false;
if (speed <= 60 || !isRoadClear) {
    console.log('Можно ехать');
}
if (speed >= 80 && isRoadClear) {
    console.log('Опасно');
}
//2
var hk = true;
var knowsPassword = false;
if (hk && knowsPassword) {
    console.log("Полный доступ");
}
if ((hk && !knowsPassword) || (!hk && knowsPassword)) {
    console.log("Ограниченный доступ");
}
if (!hk && !knowsPassword) {
    console.log("Доступ запрещён");
}
//practic 5
//1
var sum1 = 0;
for (var i = 1; i <= 10; i++) {
    sum1 += i;
}
console.log(sum1);
//2
var A = 5;
var res = 1;
for (var i = 1; i <= 10; i++) {
    res = A * i;
    console.log(A + "×" + i + "=" + res);
}
//3
var n = 6;
var fac = 1;
for (var i = 1; i <= n; i++) {
    fac *= i;
}
console.log(fac);
// Практика Функции
//1
function add(a, b) {
    return a + b;
}
console.log(add(3, 5));
console.log(add(24, 35));
console.log(add(-44, 4));
//2
function greet(name) {
    if (name === void 0) { name = "Имя"; }
    console.log("Здраствуйте, " + name + "!");
}
greet("Красавчик");
//3
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(6));
console.log(isEven(8));
//4
function sq(num) {
    return num * num;
}
console.log(sq(5));
console.log(sq(3));
//5
function sravn(a, b) {
    if (a > b) {
        return "первое число больше";
    }
    if (b > a) {
        return "второе число больше";
    }
    return "равны";
}
console.log(sravn(15, 25));
console.log(sravn(2, 8));
console.log(sravn(3, 4));

/////////////////////////////////////////////////////////////////
var Age1 = 23;
if (Age1 < 18) {
    console.log('Доступ запрещён!');
}
if (Age1 >= 18) {
    console.log('Доступ разрешен!');
    for (var i = 1; i <= 10; i++) {
        console.log(Age1 + ' x ' + i, '= ' + Age1 * i);
    }
}