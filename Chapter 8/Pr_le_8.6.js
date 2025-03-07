console.log(Math.PI)
console.log(Math.ceil(5.7))
console.log(Math.random())
console.log(Math.floor(Math.random()*11))
console.log(Math.floor(Math.random()*101))

function generation(min, max){
    return Math.floor(Math.random()*(max - min +1)) + min

}
for(let x = 0; x<100; x++){
    console.log(generation(1, 100))
}
