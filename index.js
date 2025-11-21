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
/////////////////////////////////////////////////////////////////
function calc(a, b, operator) {
    if (operator === '+') {
        return a + b;
    }
    if (operator === '-') {
        return a - b;
    }
    if (operator === '*') {
        return a * b;
    }
    if (operator === '/') {
        return a / b;
    }
    return 0;
}

console.log('50 + 35 = ', calc(50, 35, '+'));
console.log('57 - 24 = ', calc(57, 24, '-'));
console.log('146 × 456 = ', calc(146, 456, '*'));
console.log('111 ÷ 36 = ', calc(111, 36, '/'));
/////////////////////////////////////////////////////////////////
//1
const nam = ['name1', 'name2', 'name3'];
const age = [12, 22, 32];
const bool = [true, true, false];
//2
const fruits = ['яблоко', 'банан', 'апельсин'];
console.log(fruits[0]);
console.log(fruits[2]);
//3
const book = {
    title: 'сигма',
    author: 'Ептин Е Б',
    year: 1980
};
console.log('Книга:', book);
console.log('Название:', book.title);
console.log('Автор:', book.author);
console.log('Год:', book.year);
//4
const user1 = {
    name: 'Аферист',
    age: 2
};
console.log(user1);
//5
const chavo = [
    { name: 'name1', age: 12 },
    { name: 'name2', age: 22 },
    { name: 'name3', age: 32 },
];
for (let i = 0; i < chavo.length; i++) {
    console.log('Имя: ' + chavo[i].name + ', Возраст: ' + chavo[i].age);
}
//6
const number = [1, 2, 3];
number.push(4);
console.log(number);
//7
const num1 = [1, 2, 3, 4];
const umn = num1.map((num) => num * 10);
console.log(umn);
//8
const age1 = [12, 1238, 1, 3, 10];
const adults = age1.filter((age) => age >= 18);
console.log(adults);
//9
const chavov = [
    { name: 'name1', age: 12 },
    { name: 'name2', age: 22 },
    { name: 'name3', age: 32 },
];
const namem = 'name3';
const user = chavov.find((u) => u.name === namem);
if (user) {
    console.log('Найден: ' + user.name + ', ' + user.age + ' лет');
}
if (!user) {
    console.log('Пользователь не найден');
}
//10
const number1 = [1, 32, -12, 3, 27, 1];
const pos = number1.filter((num) => num > 0).map((num) => num * 2);
console.log(pos);
//11
const sort1 = [21, 2, 1, 0];
const def = [...sort1].sort();
console.log('По умолчанию:', def);
const asc = [...sort1].sort((a, b) => a - b);
console.log('Возрастание:', asc);
const des = [...sort1].sort((a, b) => b - a);
console.log('Убывание:', des);
/////////////////////////////////////////////////////////////////
//2
const products = [
    { name: 'Ноутбук', price: 50000, inStock: true },
    { name: 'Мышь', price: 1500, inStock: false },
    { name: 'Клавиатура', price: 3000, inStock: true },
    { name: 'Монитор', price: 20000, inStock: true },
    { name: 'Наушники', price: 5000, inStock: false }
];

const availableProducts = products.filter(product => product.inStock);
console.log('Товары в наличии:');
availableProducts.forEach(product => {
    console.log(`- ${product.name}: ${product.price} руб`);
});

const availablePrices = availableProducts.map(product => product.price);
console.log('Цены товаров в наличии:', availablePrices.join(', '));

let totalSum = 0;
for (let i = 0; i < availableProducts.length; i++) {
    totalSum += availableProducts[i].price;
}
console.log(`Общая сумма товаров в наличии: ${totalSum} руб`);

const sortedAvailableProducts = [...availableProducts].sort((a, b) => a.price - b.price);
console.log('Отсортированные товары в наличии (от дешёвых к дорогим):');
sortedAvailableProducts.forEach(product => {
    console.log(`- ${product.name}: ${product.price} руб`);
});
/////////////////////////////////////////////////////////////////
//
async function loadPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error('Ошибка при загрузке постов:', error);
        return [];
    }
}

async function loadPostById(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const post = await response.json();
        return post;
    } catch (error) {
        console.error('Ошибка при загрузке поста:', error);
        return null;
    }
}

async function loadUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Ошибка при загрузке пользователей:', error);
        return [];
    }
}

async function main() {
    console.log('=== Загрузка постов ===');
    const posts = await loadPosts();
    
    if (posts.length > 0) {
        const firstPost = posts[0];
        console.log('Первый пост:');
        console.log('ID:', firstPost.id);
        console.log('Заголовок:', firstPost.title);
        console.log('Текст:', firstPost.body);
        console.log('---');
    }

    console.log('=== Загрузка поста по ID ===');
    const postById = await loadPostById(1);
    if (postById) {
        console.log('Пост с ID 1:', postById.title);
    }
    console.log('---');

    console.log('=== Пользователи с именами длиннее 10 символов ===');
    const users = await loadUsers();
    const longNameUsers = users.filter(user => user.name.length > 10);
    longNameUsers.forEach(user => {
        console.log('Имя:', user.name);
    });
    console.log('---');

    console.log('=== Тексты всех постов ===');
    const allPosts = await loadPosts();
    const postBodies = allPosts.map(post => post.body);
    console.log('Тексты постов:', postBodies);
    console.log('---');

    console.log('=== Поиск поста с заголовком "qui est esse" ===');
    const targetPost = allPosts.find(post => post.title === "qui est esse");
    if (targetPost) {
        console.log('Найден пост:');
        console.log('ID:', targetPost.id);
        console.log('Заголовок:', targetPost.title);
        console.log('Текст:', targetPost.body);
    } else {
        console.log('Пост не найден');
    }
}

main();
/////////////////////////////////////////////////////////////////