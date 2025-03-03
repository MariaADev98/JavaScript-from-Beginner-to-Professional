let start = 10
function num(val){
    console.log(val)
if(val <1) {
    return;
}
return num(val - 1)
}
num(start);
function num2(val){
    console.log(val)
    if(val>0){
        val--;
        return num2(val)
    }
    return;
}
num2(start)







    
