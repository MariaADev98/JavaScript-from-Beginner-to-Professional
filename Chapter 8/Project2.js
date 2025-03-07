// const endDate = 'Oct 27 2034'

// function countdown(){
//     const total = Date.parse(endDate) - new Date()
//     const days = Math.floor(total / (1000 * 60 * 60 * 24))
//     const hrs = Math.floor((total / ((1000 * 60 * 60)) % 24))
//     const mins = Math.floor((total / 1000) % 60)
//     const secs = Math.floor((total / 1000) % 60)
//     return{
//         days, 
//         hrs, 
//         mins, 
//         secs
//     }


// }
// function update(){
//     const temp = countdown()
//     let output = ''
//     for(const property in temp){
//         output +=(`${property}: ${temp[property]}`)
//     }
//     console.log(output)
//     console.log(update, 1000)
// }
// update()

const endDate = 'Oct 27 2034';

function countdown() {
    const total = Date.parse(endDate) - new Date();
    if (total <= 0) {
        return {
            days: 0,
            hrs: 0,
            mins: 0,
            secs: 0,
            expired: true
        };
    }

    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((total / (1000 * 60)) % 60);
    const secs = Math.floor((total / 1000) % 60); // Исправлено: теперь секунды считаются корректно
    return { days, hrs, mins, secs };
}

function update() {
    const temp = countdown();
    let output = '';
    for (const property in temp) {
        if (temp.hasOwnProperty(property)) {
            output += `${property}: ${String(temp[property]).padStart(2, '0')} `;
        }
    }
    console.log(output.trim());
}

setInterval(update, 1000); // Запускаем обновление каждую секунду
update(); // Выполняем сразу при загрузке