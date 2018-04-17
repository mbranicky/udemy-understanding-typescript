/**
 * DECORATORS - are basically functions managed by TypeScript. So they can get different parameters.
 */

/**
 *  CLASS type of Decorator, receives a constructor function as first argument
 */
const Logger = (constructorFn: Function) => {
  console.log(constructorFn);
};

@Logger
export class DecoratedPerson {
  constructor() {
    console.log("Hi from Decorated Person constructor");
  }
}

/**
 * Advanced example of Decorator usage
 */
const Printable = (constructorFn: Function) => {
  // here we add a new 'print' function to the prototype of given constructor function
  constructorFn.prototype.print = function() {
    console.log(this);
  };
};

@Printable
export class PrintableCar {
  name: string = "BWM";
  model: string = "X3";
}

/**
 * METHOD type of decorator - a function which can be used as method decorator
 */
// Editable is in this case a factory method
const Editable = (value: boolean) => {
  // in fact this return value is the method decorator
  // http://www.typescriptlang.org/docs/handbook/decorators.html
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log("Editable METHOD decorator called. TARGET: ", target, ", PROP KEY: ", propertyKey, " DESCRIPTOR: ", descriptor);
    descriptor.writable = value; // this way we can set whether the decorated method definition will be replaceable
  };
};

export class EditableProject {
  @Editable(false)
  calcBudget(): number {
    return 2000;
  }
}

/**
 * PROPERTY type of decorator - can't get PropertyDescriptor as parameter but still can return it.
 */
const WritableProperty = (value: boolean) => {
  return (target: any, propertyKey: string): PropertyDescriptor => {
    console.log("Writeable PROPERTY decorator called. TARGET: ", target, ", PROP KEY: ", propertyKey);
    const newPropDescr: PropertyDescriptor = {
      writable: value
    }
    return newPropDescr;
  }
}

/**
 * PARAMETER type of decorator
 */
const PrintInfoDecorator = (target: any, methodName: string, paramIndex: number) => {
  console.log("Parameter decorator, TARGET: ", target, " METHOD NAME: ", methodName, " PARAM INDEX: ", paramIndex);
}

export class Course {
  printStudents(mode: string, @PrintInfoDecorator printAll: boolean) {
    if (printAll) {
      console.info(10000);
    } else {
      console.log(100);
    }
  }
}
