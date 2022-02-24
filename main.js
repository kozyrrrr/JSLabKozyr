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
// Предположение: "сыры"
// Фактический: "сыры"

"сыр" - "ы"
// Предположение: NaN
// Фактический: NaN

"2" + "4"
// Предположение: "24"
// Фактический: "24"

"2" - "4"
// Предположение: -2
// Фактический: -2

"Сэм" + 5
// Предположение: "Сэм5"
// Фактический: "Сэм5"


"Сэм" - 5
// Предположение: NaN
// Фактический: NaN

99 * "шары"
// Предположение: NaN
// Фактический: NaN

// Задача №2 Прямоугольник
// let a = 2;
// let b = 3;
// console.log(a,b);
// console.log(2*(a+b));
// console.log(a*b);
// console.log((2*(a+b))/(a*b));
// //Задача №3 Конвертация единиц измерения
 let degreesC = 25;
 let degreesF = 66.2;
 console.log(`${degreesC}°C соответствует ${(degreesC*(9/5)+32)}°F`)
 console.log(`${degreesF}°F соответствует ${Math.round(((degreesF-32)*(5/9)))}°C`)
// Задача №4 Високосный год
// let date = prompt("Введите год", "Год");
// !(date % 4) ? (!(date %100) ? alert(true): alert(false)): alert(false)
// Задача №5 Проверка
// let num1 = 3;
// let num2 = 10;
// if ((num1 == 10 || num2 == 10) || num1+num2==10 ) console.log(true);
// Задача №6 Считаем овец
// let userNumber = prompt("Введите число", "число");
// let i=2;
// oldAnswer = 1 + " " + "овечка";
// while (i <= userNumber){
//     answer = oldAnswer + "..." + i + " " + "овечка" + "...";
//    oldAnswer = answer;
//    i++;
// }
// console.log(answer);
// Задача №7 Четное-нечетное
// for (let i = 0;i <= 15;i++){
//     if (i % 2 == 0) {
//         console.log(i + " " + "четное");
//     }
//     else {
//         console.log(i + " " + "нечетное");
//     }
// }
// // Задача №8 Елка к новому году
// ВАРИАНТ 1 без разделения строк
// let i = 1,  char1 = '*', char2 = '##';
// for(i ; i <= 6; i++){
//     console.log(char1);
//     char1 = char1 + "*" + "*";
//     console.log(char2);
//     char2 = char2 + "#" + "#";
// }
// ВАРИАНТ 2 с разделением строки
let i = 0 , j = 0, str = "", char1 = '*', char2 = '##';
for (i;i <= 5;i++) {
    for (j;j <= i;j++) {
        str = str + char1 + "\n" + char2 + "\n";
    } 
    char2 = char2 + "#" + "#";
    char1 = char1 + "*" + "*";
}
console.log(str);
//  Задача №9 Сортировка
// let num1 = -15;
// let num2 = -12;
// let num3 = 2;
// let maxNum, midlleNum, minNum;
// if (num1>num2){
//     midlleNum = num1;
//     minNum = num2;
// } else{
//     midlleNum = num2;
//     minNum = num1;
// }
// if (midlleNum>num3){
//     maxNum =  midlleNum;
//     if(minNum>num3){
//         midlleNum = minNum;
//         minNum=num3;
//     } else{
//         midlleNum = num3;
// } 
// } else maxNum = num3;
// console.log(minNum, midlleNum,maxNum); // опустим момент с одинаковыми числами
// Задача №10 Максимальное значение
// let num1 = 2, num2 = -3, num3 = 4, num4 = -6, num5 = 9, maxNum;
// if (num1>num2 && num1>num3 && num1>num4 && num1>num5)
// {
//   maxNum = num1;
// }
// else if (num2>num1 && num2>num3 && num2>num4 && num2>num5)
// {
//     maxNum = num2;
// }
// else if (num3>num1 && num3>num2 && num3>num4 && num3>num5)
// {
//     maxNum = num3;
// }
// else if (num4>num1 && num4>num2 && num4>num3 && num4>num5)
// {
//     maxNum = num4;
// }
// else
// {
//     maxNum = num5;
// }
// console.log(maxNum);