goods = []

good1 = {
    nameGood: 'iphone', 
    model: 10, 
    cost: 40000, 
    count: 20 
}

good2 = {
    nameGood: 'iphone', 
    model: 13, 
    cost: 60000, 
    count: 10 
}

good3 = {
    nameGood: 'iphone', 
    model: 7, 
    cost: 20000, 
    count: 5 
}
goods.push(good1, good2, good3)
console.log(goods);
console.log(goods[2].count)