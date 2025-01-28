let mark = {
    model: 'Skoda', 
    make: 'Rapid', 
    year: 2024, 
    color: 'white'
}
for(let prop in mark){
    console.log(mark[prop])
}


let arr = ['Skoda', 'Rapid', 'white']
 for(let i = 0; i<arr.length; i++){
    console.log(i, arr[i])
 }

 for(ca in arr){
    console.log(ca, arr[ca])
 }