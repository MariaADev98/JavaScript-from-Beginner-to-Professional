//1 дюйм равен 2, 54 см
//1 фунт равен 2, 2046 кг
let inches = 74;
let pounds = 216;
let weight = pounds / 2.2046; //in kg
let height = inches * 2.54; //in sm
console.log(weight, height);
let bmi = weight/(height/100*height/100);
console.log(bmi);

