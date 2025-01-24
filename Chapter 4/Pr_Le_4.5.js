let prize = prompt('Select a number from 0-10?');
prize = Number(prize);
let output = 'My selection: ';
switch(prize){
    case 0:
        output +='Gold ';
    case 1:
        output +='Coin ';
        break;
    case 2:
        output +='Big ';
     
    case 3:
        output +='Box of ';
    case 4:
        output +='Silver';
    case 5:
        output +='Bricks';
        break;
    default:
        output += "Sorry, try again"
}
console.log(output);
