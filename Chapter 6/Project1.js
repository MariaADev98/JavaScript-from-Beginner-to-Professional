//создание рекурсивной функции

let fPro = function counter(i){
    console.log(i)
    if(i<10){
        return counter(i+1)
    }
    return
}
fPro(0)