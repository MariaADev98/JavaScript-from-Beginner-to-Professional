let mycar = {
    make: 'Škoda', 
    model: 'Karoq', 
    series: 6875875, 
    color: 'white', 
    forSale: false
}

let propcolor = 'color';
mycar[propcolor] = 'black';
propcolor = 'forSale';
mycar[propcolor] = true;

console.log(mycar.make + ' ' + mycar.model);
console.log(mycar.forSale);