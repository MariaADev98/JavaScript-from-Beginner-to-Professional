let myTable = []
let rows = 4
let cols = 7
let counter = 0 
for (let y = 0;y<rows; y ++){
    let tempTable = [];
    for( let x = 0; x < cols; x++){
        counter++;
        tempTable.push(counter);
    }
    myTable.push(tempTable)
}
console.table(myTable)