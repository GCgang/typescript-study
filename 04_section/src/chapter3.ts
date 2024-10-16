/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

// 다운 캐스팅 안됨
a = b; // o
// b = a; // x

//기준2. 매개변수가 호환되는가
// 2-1 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = () => {};
let d: D = () => {};

// 업 캐스팅 안됨
// c = d;
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {};
let dogFunc = (dob: Dog) => {};

// 업 캐스팅 안됨

// animalFunc = dogFunc;
// let testFunc = (animal: Animal) => {
//   console.log(animal.name);
//   console.log(animal.color);
// };

dogFunc = animalFunc;
let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2 같읕 타입의 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// 매개변수 개수가 작은거에 큰거를 넣는건 안됨
// func2 = func1;
