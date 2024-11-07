// 타입  변수 응용

/**
 * 사례 1
 */

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap('1', 2);

/**
 * 사례 2
 */
function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
let str = returnFirstValue(['hello', 'world']);
let test = returnFirstValue([1, 'hello', 'world']); // number | string

/**
 * 사례 3
 */

function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num2 = returnFirstValue2([0, 1, 2]);
let str2 = returnFirstValue2(['hello', 'world']);
let test2 = returnFirstValue2([1, 'hello', 'world']); // number

/**
 * 사례 4
 */

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength('12345');
let var3 = getLength({ length: 10 });
// let var4 = getLength(10); // length 프로퍼티가 없으므로 에러
