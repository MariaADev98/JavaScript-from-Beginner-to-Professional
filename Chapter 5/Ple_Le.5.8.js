let vb = ''
let skip = 5
for (let i=0; i<10; i++){
    if (i === skip){
        continue
    }
    vb +=i
}
console.log(vb)