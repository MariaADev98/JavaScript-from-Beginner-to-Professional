//Использование функции setTimeout()

const one = () => console.log('one');
const two = () => console.log('two');
const tree = () => {
    console.log('tree');
    one()
    two()
}
const four = () =>{
    console.log('four');
    setTimeout(one, 0);
    tree();
}
four()