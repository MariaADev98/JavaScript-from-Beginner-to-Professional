let arr = []
let value = 10
for(let x=0; x<value; x++){
    let temp = []
    for(let y = 0; y<value; y++){
        temp.push(x*y)
    }
    arr.push(temp)
}
console.log(arr)

