class costCalc{
    #position1 = 20;
    #position2 = 40;


    constructor(val1, val2){
        this.val1 = val1;
        this.val2 = val2;
    }
    calTotal(){
        return(this.val1 * this.#position1) + (this.val2 * this.#position2);
    }
    get total(){
        return this.calTotal();
}
}
const val1 = new costCalc(4, 9);
const val2 = new costCalc(3, 8);
const val3 = new costCalc(2, 7);
console.log(val1.total);
console.log(val2.total);
console.log(val3.total);