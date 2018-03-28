/**
 * Simple generic is based on type Any
 */
export const simpleEcho = (data: any): any => {
  return data;
}

/**
 * Better as use Any is use Generic types. The <T> references the type which is expected to be returned.
 */
export function betterEcho<T>(data: T) {
  return data;
}

/**
 * Built-in Generics
 */
export const testNumbers: Array<number> = [1, 3, 5, 6];
testNumbers.push(34);
// testNumbers.push("hello"); // Argument of type '"hello"' is not assignable to parameter of type 'number'.

/**
 * Generic Arrays
 */
export function printAll<T>(map: T[]) {
  map.forEach(item => console.log(item));
}

/**
 * Generic Types, in this case I define generic function as a type
 */
const betterEcho2: <T>(data: T) => T = <T>(data: T) => {
  return data;
};

/**
 * Generic Class
 */
export class SimpleMath<T extends number> {
  baseValue: T;
  multiplyValue: T;
  calculate(): number {
    return this.baseValue * this.multiplyValue;
  }
}

/**
 * Exercise - generic map:
 */
export class GenericMap<T> {

  private map: {[key: string]: T} = {}

  // should create a new key-value pair
  public setItem(key: string, item: T): void {
    this.map[key] = item;
  }
  // should remove all key-value pairs
  public clear(): void {
    this.map = {};
  }
  // should output key-value pairs
  public printMap(): void {
    for (let key in this.map) {
      console.log(key, this.map[key]);
    }
  }
  // should retrieve the value of the provided key
  public getItem(key: string): T {
    return this.map[key];
  }
}
