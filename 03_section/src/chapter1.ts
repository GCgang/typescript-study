let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // ok
// num2 = num1; // error

// unknown
let u1: unknown = 1; // number -> unknown
let u2: unknown = 'hello'; // string -> unknown
let u3: unknown = true; // boolean -> unknown
let u4: unknown = null; // null -> unknown
let u5: unknown = undefined; // undefined -> unknown
let u6: unknown = []; // Array -> unknown
let u7: unknown = {}; // Object -> unknown
let u8: unknown = () => {}; // Function -> unknown

// never
function throwError(): never {
  throw new Error('This is an error');
}
let neverVar: never = throwError();

let n1: number = neverVar; // never -> number
let n2: string = neverVar; // never -> string
let n3: boolean = neverVar; // never -> boolean
let n4: null = neverVar; // never -> null
let n5: undefined = neverVar; // never -> undefined
let n6: [] = neverVar; // never -> Array
let n7: {} = neverVar; // never -> Object

// void
function noReturnFuncA(): void {
  return undefined;
}

function noReturnFuncB(): void {
  return;
}

function noReturnFuncC(): void {}

let voidVar: void;

voidVar = undefined; // undefined -> void (ok)

voidVar = neverVar; // never -> void (ok)

// any
let anyValue: any;

let num: number = anyValue; // any -> number (다운 캐스트)
let str: string = anyValue; // any -> string (다운 캐스트)
let bool: boolean = anyValue; // any -> boolean (다운 캐스트)

anyValue = num; // number -> any (업 캐스트)
anyValue = str; // string -> any (업 캐스트)
anyValue = bool; // boolean -> any (업 캐스트)
