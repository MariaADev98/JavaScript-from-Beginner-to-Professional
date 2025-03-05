class employeesControl{
    constructor(name, surname, experience){
        this.name = name;
        this.surname = surname;
        this.experience = experience;
}}
const person1 = new employeesControl('Anna', 'K', 10);
const person2 = new employeesControl('Ivan', 'K', 9);
const workes = [person1, person2];

employeesControl.prototype.details = function(){
    return this.name + ' ' + this.surname + ' has worked her ' + this.experience + ' years';

}
workes.forEach((person) => {console.log(person.details());

})
