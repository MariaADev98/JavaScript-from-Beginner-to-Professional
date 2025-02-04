arr = [];

for(let i=0; i<10; i++){
    let val1 = 5 * i
    let val2 = i * i
    let res = cal(val1, val2, '+')
    arr.push(res);

 }
 console.log(arr)

 function cal(a, b, op){
    if(op =='-'){
        return a - b;
    }else{
        return a +b 
    }
    
 }
