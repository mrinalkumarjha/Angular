# Typescript is nothing but it is sugercoated object oriented programming, strongly typed langulage over javascript. It is superset of javascript.

1: No js file is generated for interface in typescript. Interface is contract and it is used only in coding phase. 

#

export class Ingredient {
// First way of creating property and constructor.

    // public name: string;
    // public amount: number;

    // constructor(name:string, amount:number){
    //     this.name = name;
    //     this.amount = amount;
    // }

    // second way. following code is same as above.
    constructor(public name:string, public amount:number){
        // this will automaticaly assign value to property. this is shorthand syntax of above.
    }
}
