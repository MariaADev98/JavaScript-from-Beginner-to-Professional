let arr = ['Rock', 'Paper', 'Scissors'];
let player = Math.floor(Math.random() * 3);
let computer = Math.floor(Math.random() * 3);
let message = 'player ' + arr[player] + ' vs computer ' + arr[computer] + ' ';
if(player == computer){
    message += "it's a tie";
} else if (player > computer) {
    if (computer == 0 && player == 2) {
        message += 'Computer Wins';
    } else {
        message += 'Player Wins'
    }
} else {
    if (computer == 2 && player ==0){
        message += 'Player Wins';
    } else {
        message += 'Computer Wins'
    }
}
console.log(message);
