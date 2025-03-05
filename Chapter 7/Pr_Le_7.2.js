class Person{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;

    };

    fullname(){
        return this.firstname + ' '+ this.lastname;
    }
}
let person1 = new Person('Masha', 'Bul')
let person2 = new Person('Misha', 'Mal')
console.log(person1.fullname())
console.log(person2.fullname())


