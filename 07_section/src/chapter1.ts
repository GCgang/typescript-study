/**
 * 제네릭
 */

// 제네릭 함수
function func<T>(value: T): T {
  return value;
}

let num = func(4);
let bool = func(true);
let str = func('string');

// 명시적으로 타입 정하기
let arr = func<[number, number, number]>([1, 2, 3]);
