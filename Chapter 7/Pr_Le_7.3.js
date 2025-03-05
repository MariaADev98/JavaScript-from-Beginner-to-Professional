class Animals{
    constructor(breed, sounds){
        this.breed = breed;
        this.sounds = sounds;

}
speak(){
    console.log(this.breed + ' ' + this.sounds);
 }
}
Animals.prototype.eat = function(){
    return this.breed + ' is eating';

}
let mouse = new Animals('mouse', 'pipipi')
let cat = new Animals('cat', 'meow');
mouse.speak();
console.log(cat.eat())
console.log(cat)