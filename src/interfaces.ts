/**
 * INTERFACE - defines a CONTRACT between an object definition and its clients.
 */

export interface NamedPerson {
  firstName: string; // mandatory property
  age?: number; // optional property
  [propName: string]: any; // property of unknown name and type
  greetHim(lastName: string): void; // here we force the implementing object to have this method implemented
}

export const greet = (person: NamedPerson): void => {
  console.log("Hello", person.firstName);
};

export const changeName = (person: NamedPerson, name: string): void => {
  person.firstName = name;
  console.log("Person's name changed to", name);
};

// Class implementing a given contract
class MyNamedPerson implements NamedPerson {
  firstName: string = "";
  greetHim = (lastName: string): void => {
    console.log("Hello Mr.", lastName);
  };
}

/**
 * INTERFACE for Function Type - defines contract for functions
 */
export interface DoubleValueFunc {
  (num1: number, num2: number): number;
}

// Interface inheritance
interface AgedPerson extends NamedPerson {
  age: number; // here we override the optionality of age property from NamedPerson
}
