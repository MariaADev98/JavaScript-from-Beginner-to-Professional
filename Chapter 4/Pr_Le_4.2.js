let age = prompt('How old are you?');

age = Number(age);
let message;

if(age >= 21){
    message = 'Allow entry into the establishment and purchase of alcohol';
} else if(age >= 19){
    message = 'Allow entry into the establishment and prohibit the purchase of alcohol';
} else {
    message = 'Deny entry'
}
console.log(message);