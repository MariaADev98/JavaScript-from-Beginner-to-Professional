// let dateRandom = new Date()
// console.log(dateRandom)


let future = new Date(2028, 5, 15);
console.log(future);

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 
    'November', 'December'];
let day =  future.getDate();
let month = future.getMonth();
let year = future.getFullYear();
let myDate = `${month[month-1]} ${day} ${year}`;
console.log(myDate);