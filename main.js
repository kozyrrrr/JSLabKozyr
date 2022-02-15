// ЗАДАЧА 1

typeof(9)
// Предположение: nubmer
// Фактический: number

typeof(1.2)
// Предположение: number
// Фактический: number

typeof(NaN)
// Предположение:number
// Фактический: number

typeof("Hello World")
// Предположение: string
// Фактический: string

typeof(true)
// Предположение: boolean
// Фактический: boolean

typeof(2 != 1)
// Предположение: boolean
// Фактический: boolean


"сыр" + "ы"
// Предположение: string
// Фактический: string

"сыр" - "ы"
// Предположение: string
// Фактический: number

"2" + "4"
// Предположение: string
// Фактический: string

"2" - "4"
// Предположение: string 
// Фактический: number

"Сэм" + 5
// Предположение: string
// Фактический: string

"Сэм" - 5
// Предположение: number
// Фактический: number

99 * "шары"
// Предположение: number
// Фактический: number

// Задача №2 Прямоугольник
console.log("------------------------");
let a = 2;
let b = 3;
console.log(a,b);
console.log(2*(a+b));
console.log(a*b);
console.log((2*(a+b))/(a*b));
console.log("------------------------");
//Задача №3 Конвертация единиц измерения
let degreesC = 25;
let degreesF = 66.2;
console.log(degreesC +"°C" +" "+ "соответствует" + " " + (degreesC*(9/5)+32) +"°F" )
console.log(degreesF +"°F" +" "+ "соответствует" + " " + Math.round(((degreesF-32)*(5/9))) +"°C" )
console.log("------------------------");
// Задача №4 Високосный год
// let date = prompt("Введите год", "Год");
// !(date % 4) ? (!(date %100) ? alert(true): alert(false)): alert(false)
// Задача №5 Проверка
let num1 = 3;
let num2 = 10;
if ((num1 == 10 || num2 == 10) || num1+num2==10 ) console.log(true);
console.log("------------------------");
// Задача №6 Считаем овец
// let userNumber = prompt("Введите число", "число");
// let i=1;
// console.log(
//     while(i<=userNumber)
// );
// Задача №7 Четное-нечетное
for (let i =0;i<=15;i++){
    if (i % 2 == 0) {
        console.log(i + " " + "четное");
    }
    else {
        console.log(i + " " + "нечетное");
    }
}
console.log("------------------------");
// Задача №8 Елка к новому году
for (let i = 1; i<7;i++){
    for (let j =2; j<8;j++){
        console.log()
    }
}

