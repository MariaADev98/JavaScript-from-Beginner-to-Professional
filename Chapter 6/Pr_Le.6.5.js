let num = 1000

function IIFE (){
    let num = 2000
    console.log(num)

}
IIFE()

let result = (function(){
    result = 5000
    return result
})
result()
console.log(result)




let message = function(text) {
    message = text; // Присваиваем переданное значение переменной message
    console.log(`Значение переменной: ${message}`);
};
message()








// (function(){
//     let num = 1000
//     num = 2000
//     console.log(num);
// })();