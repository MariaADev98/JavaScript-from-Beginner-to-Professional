let max_lenght = 5;
let rannumber = Math.floor(Math.random() * max_lenght) + 1;
//console.log(rannumber)
let correct = false;
while(!correct){
    let guess = prompt('Guess anumber 1 - ' + max_lenght);
    guess = Number(guess)
    if(guess == rannumber){
        correct = true;
        console.log('You got it ' + rannumber);
    } else if(guess > rannumber){
        console.log('Too high');
    } else{
        console.log('To Low')
    }
        
    
}
