/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>; // string | number
let d: StringNumberSwitch<boolean | number | string>; // string | number

/**
 * 실용 예제
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>; // number | boolean

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>; // string
