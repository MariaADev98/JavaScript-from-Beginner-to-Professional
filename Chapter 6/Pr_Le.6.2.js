let name = ['Good', 'Bestes', 'Cool']
 
function sayName(){
    let question = prompt("What's your name?");
    let name2 = Math.floor(Math.random() * name.length);
    console.log(name[name2] + " " + question);
 }

 sayName()
