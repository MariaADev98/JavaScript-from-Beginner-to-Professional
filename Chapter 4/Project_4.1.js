let frN = prompt('Enter your name');
let message;
switch(frN){
    case 'Anna':
    case 'John':
    case 'Luisa':
    case 'Misha':
    message = frN + ' is my friend';
    break;
    default:
    message = 'I dont know ' + frN
}
console.log(message)