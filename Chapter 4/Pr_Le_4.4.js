let randomNumber = Math.floor(Math.random() * 6);
let answer = 'Something went wrong?';
let question = prompt('Ask me anything?');

switch(randomNumber){
    case 0:
        answer = 'It takes more work';
        break;
    case 1:
        answer = 'Im proud of you, keep moving forward';
        break;
    case 2:
        answer = "I believe in you, don't give up";
        break;
    case 3:
        answer = 'It takes more effort';
        break;    
     default:
        answer = 'I dont now about that'   
}
let output = 'You asked me: "' + question + '" I think that ' + answer;
console.log(output);

