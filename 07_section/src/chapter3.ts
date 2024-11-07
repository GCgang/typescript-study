/**
 * map 메서드 타입 정의 해보기
 */

const arr = [1, 2, 3];
const newArr = arr.map((item) => item + 1);
console.log(newArr);

function map<T, U>(arr: T[], callback: (item: T) => U) {
  const newArr = [];
  for (const el of arr) {
    newArr.push(callback(el));
  }
  return newArr;
}

console.log(map(arr, (item) => item + 1));
console.log(map(['hi', 'hello'], (item) => item.toUpperCase()));
console.log(map(['123', '456'], (item) => parseInt(item)));

/**
 * forEach 메서드 타입 정의 해보기
 */

const arr2 = [1, 2, 3.1415];
arr2.forEach((item) => console.log(item));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (const el of arr) {
    callback(el);
  }
}

forEach(arr2, (item) => console.log(item.toFixed(2)));
forEach(['123', '456'], (item) => console.log(item));
