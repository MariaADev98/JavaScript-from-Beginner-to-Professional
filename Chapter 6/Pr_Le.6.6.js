function check(nr){
    console.log(nr)
    if(nr===0){
        return 1;
    }
    else{
        return nr * check(--nr)
    }
}
console.log(check(5))