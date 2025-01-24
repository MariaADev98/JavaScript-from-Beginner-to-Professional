let val = prompt('Enter the number');
val = Number(val)
let num = 100;
let message = 'nothing';
if(val>num){
    message = val + ' was greater than ' + num;
} else if(val == num){
    message = val + ' was equal to ' + num;
} else {
    meassage = val + " is less than " + num;
}

console.log(message);
console.log(message);