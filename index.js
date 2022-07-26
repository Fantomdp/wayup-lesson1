/* 
    Задание 1:

    Вам необходимо поделиться информацией о вашем родном городе. Все данные необходимо записать в отдельную переменную.
    Информация о городе: 
    - Название города (строка)
    - В какой стране находится этот город (строка)
    - Численность населения (число)
    - Есть ли футбольный стадион (boolean [ true(да) / false(нет) ])
*/
console.log("***Задача 1***");
let city = "Dnipro";
let country = "Ukraine";
let population = 1000000;
let footStadion = true;

console.log("Название города - ",`${city}`);
console.log("В какой стране находится этот город - ",`${country}`);
console.log("Численность населения - ",`${population}`,"человек");
console.log("Есть ли футбольный стадион - ",`${footStadion}`);

/* 
    Задание 2:
    
    Напишите скрипт, который находит площадь прямоугольника

    - высота 40см
    - ширина 70см

    ps: каждая сущность должна находиться в отдельной переменной
*/
console.log("***Задача 2***");
const sizeHeight = 40;
const sizeWight = 70;

resSquare = sizeHeight * sizeWight;

console.log("Высота = ",`${sizeHeight}`,"см.");
console.log("Ширина = ",`${sizeWight}`,"см.");
console.log("Площадь прямоугольника = ",`${resSquare}`,"кв.см.");

/* 
    Задание 3:
    
    Два автомобиля одновременно выехали навстречу друг другу из двух городов и встретились через 2 часа.
    Первый ехал со скоростью 95км/ч, а второй 114км/ч.

    Цель: Выяснить на каком расстоянии находятся города друг от друга и после всех вычеслений записать результат в переменную.

    Исходные данные: 
    time = 2;
    speedOfFirst = 95;
    speedOfSecond = 114;

*/
console.log("***Задача 3***");

const time = 2;
const speedOfFirst = 95;
const speedOfSecond = 114;

let distanceOfFirst = speedOfFirst * time;
let distanceOfSecond = speedOfSecond * time;
let distance = distanceOfFirst + distanceOfSecond;

console.log("Расстояние между городами - ",`${distance}`,"км.");
/* 
    Задание 4:
    
    Перед вами код:
    const randomNumber = Math.floor(Math.random() * 100);

    Этот код при каждом обновлении страницы генерирует случайное число и записывает его в переменную randomNumber.

    Напишите условную конструкцию, со следующими данными:
    - если randomNumber меньше 20, то выведите в консоль сообщение : "randomNumber меньше 20"
    - если randomNumber больше 50, то выведите в консоль сообщение : "randomNumber больше 50"
    - если ни один из вариантов не совпал, то выведите в консоль сообщение : "randomNumber больше 20, и меньше 50"
*/
console.log("***Задача 4***");
const randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

if (randomNumber < 20) {
    console.log("randomNumber меньше 20");
} else if (randomNumber > 50) {
    console.log("randomNumber больше 50");
} else {
    console.log("randomNumber больше 20, и меньше 50");
}

/* 
    Задание 5:
    
    Условную конструкцию из задания 4, перепишите с помощью Switch Case
*/
console.log("***Задача 5***");

const randomNumber2 = Math.floor(Math.random() * 100);
console.log(randomNumber2);

switch(true) {
    case (randomNumber2 < 20) :
        console.log("randomNumber2 меньше 20");
        break; 
    case (randomNumber2 > 50) :
        console.log("randomNumber2 больше 50");
        break;
    default :
        console.log("randomNumber2 больше 20, и меньше 50");  
}


