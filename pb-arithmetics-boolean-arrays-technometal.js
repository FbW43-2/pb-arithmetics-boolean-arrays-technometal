//1.

let snackServings = 5;
let guests = 8;

//2.

console.log(snackServings + guests + " - Punto 2");

//3.
console.log(snackServings - guests + " - Punto 3");
console.log(guests - snackServings + " - Punto 3");

//4.

console.log(snackServings * guests + " - Punto 4");

//5.

console.log(snackServings / guests + " - Punto 5");

//6.

let drinks = 10;
let resultOne = ((snackServings * guests) / drinks);
console.log(resultOne + " - Punto 6");

//7.

let monkeys = 15;
let bananas = 9;
console.log(monkeys / bananas + " - Punto 7");

//8.

let monkeyfights = 20;
let resultTwo = ((monkeys + bananas) * monkeyfights);
console.log(resultTwo + " - Punto 8");

//9.

monkeys++;
console.log(monkeys + " - Punto 9");

//10.

bananas--;
console.log(bananas + " - Punto 10");

//11.

let happiness = (bananas - monkeys);
console.log(happiness + " - Punto 11");

console.log(happiness + monkeyfights + " - Punto 11");

//12.

console.log(resultOne % resultTwo + " - Punto 12");


//Exercise 2 (optional + weekend)

/*
```javascript
let firstName, givenName;
firstName = 'Stacey';
let name = givenName || firstName || 'John'; 
console.log(name);
```  || takes the first possible value*/


//Exercise 3 (optional + weekend)

//1.

let myArray = ["Nacho", "Rocco", "Ron", "Roberto", "Jordi"];

for (let i=0; i < myArray.length; i++) {
    console.log(myArray[i]);
};

//2.

let thirdElement = myArray[2];
console.log(thirdElement);

//3.

myArray[3] = "Torbe";
for (let i=0; i < myArray.length; i++) {
    console.log(myArray[i]);
};




//Exercise 4 (optional + weekend)

//Q1

let TotalSales = 6450;
let ticket = 15;

let ticketNumberSold = TotalSales / ticket;
console.log(ticketNumberSold);


//Q2

let SylviaIncomePerWeek = 500;
let YearWeeks = 52;

let TotalYearIncome = SylviaIncomePerWeek * YearWeeks;
console.log(TotalYearIncome);


//Q3

let Percentage = (17 * 100) / 30;
console.log(Percentage+"%");

//Q4

let SquareSide = 4.75;
let SquarePerimeter = SquareSide * 4;
console.log(SquarePerimeter);


//Q5

let TriangleSide1 = 5;
let TriangleSide2 = 6;
let TriangleSide3 = 7;

let TrianglePerimeter = TriangleSide1 + TriangleSide2 + TriangleSide3;
console.log(TrianglePerimeter);


//Q6

SquareSide = 5;
let SquareArea = SquareSide * SquareSide;
console.log(SquareArea);


//Q7

let TriangleArea = (4.899 * 6) / 2;
console.log(TriangleArea);


//Q8

let CubeSide = 5;
let CubeVolume = CubeSide * CubeSide * CubeSide;
console.log(CubeVolume);


//Q9

let bill1 = 22.35;
let PercentageTip1 = bill1 + (bill1 * 0.10)
console.log(PercentageTip1);

let bill2 = 26.67;
let PercentageTip2 = bill2 + (bill2 * 0.15)
console.log(PercentageTip2);

let bill3 = 35.92;
let PercentageTip3 = bill3 + (bill3 * 0.15)
console.log(PercentageTip3);


//Q10

let NoemyHours = 8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4;
let NoemyAverage = NoemyHours / 10;
console.log(NoemyAverage);


//Q11

let AverageScoreFive = (75 + 70 + 85 + 90 + 100) / 5;
console.log(AverageScoreFive);

let AverageSix = (85 * 6) - (75 + 70 + 85 + 90 + 100);
console.log(AverageSix);


//Q12

let AverageNineAssessments = (80 * 9) - (78 * 8);
console.log(AverageNineAssessments);



