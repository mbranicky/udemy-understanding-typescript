/**
 * Basic type definitions and definnition rules
 */
let myString: string;
// anyType = 24; // won't compile
myString = "23";

let myName: string = "Marek";

let hobbies: any[] = ["Cooking", "Crossfit"];
hobbies = [12, 123, 123]; // once array is initialized to be array of string
// we can't change it's type to number, unless <any> is used

// Tuples are Arrays with mixed types, order of types matters
let tupleAddres: [string, number] = ["Olympijska", 8];

// enum - make numbers more expressive
enum Color {
  Grey = 5, // if number is not manually assigned, then 0 is used initially
  Green,
  Blue,
}

let myColor: Color = Color.Green;
console.log(myColor); // prints 6

// any
let car: any = "BMW";
car = { brand: "BMW" };

// functions
function returnMyName(): string { // <- function with string as return type
  return myName;
}

// void
function sayHello(): void { // <- no return is allowed
  console.log("hello");
  // return myColor;
}

// argument types
function multiply(val1: number, val2: number): string {
  return "" + val1 * val2;
}

// function types
let myMultiply: (a: number, b: number) => string; // definition of function type (parameters and return type)
myMultiply = multiply; // assignment of existing function to variable (types match)
console.log(myMultiply(4, 5));

// object types
let userData: { name: string, age: number } = {
  age: 41,
  name: "Marek",
};

// type definition (not recommended, better to use Interface)
type Person = { name: string, age: number };
let userData2 : Person = { name: 'Fedor', age: 123};

// type 'never', it's not type 'void'
function error(): never {
  throw Error("This function never returns anything");
}

// union types (it's like logical OR between types)
let bothTypes : string | number = "23" // or 57
// bothTypes = true; <- won't compile

/**
 * **************************************************************
 */

/** 
 * Definition and simple usage of types (BankAccount and Client)
*/
type BankAccount = { money: number, deposit: (value: number) => void };

let bankAccount: BankAccount = {
  money: 2000,
  deposit(value: number): void {
      this.money += value;
  }
};

type Client = {
  name: string,
  bankAccount: BankAccount,
  hobbies: Array<string> // string[]
};

let myself: Client = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);

/**
 * **************************************************************
 */

 /**
  * ES6 Features and their usages
  */
 // arrow functions with default parameters (value 5)
const countDown = (start: number = 5) => {
  while(start > 0) {
    console.log(start);
    start--;
  }
}

countDown();
// or countDown(10);


// SPREAD operator
const nums: number[] = [1,5,9,34]; // this is an Array of number but array is an Object
// if we need to SPREAD the array to the LIST of values, we could use the SPREAD (...) operators
console.log(Math.max(...nums)); // normally max function expects a LIST of values, not an Array

// REST operator does the opposite of Spread one
// it combines  the given arguments in an array
function makeArray(name: string, ...nums: number[]): void {
  console.log(nums);
}

makeArray("test", 1,3,45,67);

// DESTRUCTURING arrays
const myhobbies = ['crossfit','netflix', 'sex'];
const [hobby1, hobby2] = myhobbies; // one liner to extract specific items from array
console.log(hobby1, hobby2); // => crossfit netflix

// DESTRUCTURING objects
let userData1 = {user: 'Mark', age: 23};
const { user, age } = userData1;
console.log(user, age); // => Mark 23
// or we can use alias for keys
const { user: userName, age: userAge } = userData1;
console.log(userName, userAge); // => Mark 23

/**
 * Namespaces - allows to group certain code parts into logical groups
 */

namespace MyCode {
  const PI: number = 3.14;

  // only exported variables are visible from outside
  export const calCircumference = (diameter: number): number => {
    return diameter * PI;
  }
  
  export const calcRectangle = (width: number, height: number): number => {
    return width * height;
  }
}

console.log(MyCode.calcRectangle(5,2));

// this doesn't work:
// console.log(calcRectangle(5,2));
// console.log(MyCode.PI);

/**
 * **************************************************************
 */

 /**
  * TypeScript Class and its definitions
  */
class PersonClass {

  name: string; // Public by default
  private type: string; // Private so not visible from outside
  protected age: number; // protected, so visible from inherited classes and from inside

  // constructor function to be used when 'new' creation of object takes place
  // 'userName' is expected parameter and it automatically creates and assign an object property, can be even private or protected
  constructor(name: string, public userName: string) {
    this.name = name;
    this.type = "human";
    this.age = 27;
  }  
}

const person12: PersonClass = new PersonClass("Marek", "marek_branicky");
console.log(person12);
console.log(person12.userName); // -> marek_branicky 

/**
 * **************************************************************
 */

/**
 * Class inheritance
 */
class Marek extends PersonClass {
  // I can override property definition 
  // or I can define its value if possible via constructor
  // -> name = "Marek"; 

  constructor(username: string) {
    super("Marek", username);
    this.age = 41; // I can re-define public and protected properties directly, but not private
  }
}

const marek = new Marek("marecek");
console.log(marek);
/**
 * **************************************************************
 */

/**
 * Properties Getters & Setters
 */
class Plant {
  // I want to have controlled access to this private property
  private _species: string = "";

  // GETTER for property _species
  get species(): string {
    return this._species;
  }

  // SETTER for property _species
  // if setter is omitted, the private property become read-only
  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = "Default";
    }
  }
}

const plant = new Plant();
console.log(plant.species); // access using getter
plant.species = "Tul"; // setting using setter
console.log(plant.species); // -> Default
/**
 * **************************************************************
 */

/** 
 * Class static Properties & Methods
 */ 
class Helpers {  
  // static members are accessible without having an instance of class
  static PI: number = 3.14
  static calcCircumference(diameter: number) {
    return this.PI * diameter;
  }

}

console.log(Helpers.PI); // -> 3.14
console.log(Helpers.calcCircumference(2)); // -> 6.28
/**
 * **************************************************************
 */

/** 
 * ABSTRACT CLASS -> cannot be instantiated, only inherited
 */ 
abstract class Project {
  projectName: string = "Default"; // can have public props though
  budget: number;

  constructor(budget: number) {
    this.budget = budget;
  }

  // abstract method must be implemented in inherited class
  abstract changeProjectName(name: string): void;

  calculateBudget(): number {
    return this.budget * 2;
  }
}
// -- concrete class
class MyProject extends Project {

  changeProjectName(name: string) {
    this.projectName = name;
  }
}

const myProject = new MyProject(2000);
console.log(myProject);
myProject.changeProjectName("X-Files");
console.log(myProject);
console.log(myProject.calculateBudget());
/**
 * **************************************************************
 */

/** 
 * READ-ONLY properties
 */ 
class ReadOnly {
  // public but read-only property
  public readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

console.log(new ReadOnly("Igor").name); // -> Igor
// can't do this, won't compile
// new ReadOnly("Igor").name = "someone";
/**
 * **************************************************************
 */