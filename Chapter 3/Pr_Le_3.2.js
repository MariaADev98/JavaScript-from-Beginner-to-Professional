let buy = ['Milk', 'Bread', 'Apples']
buy.splice(1, 1, 'Bananas', 'Eggs');
buy.pop();

buy.sort();
buy.splice(1, 0, 'Carrots', 'Lettuce')

let newList = ['Juice', 'Pop']
let finalList = buy.concat(newList, newList)
//console.log(finalList.lastIndexOf('Pop'))
console.log(finalList)



//console.log(buy)



//let findIndex = buy.indexOf('Milk');
//console.log(findIndex);

