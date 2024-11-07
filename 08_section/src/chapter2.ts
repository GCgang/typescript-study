/**
 * keyof & typeof
 */

interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: '안현준',
  age: 28,
};

console.log(getPropertyKey(person, 'name')); // '안현준'
console.log(getPropertyKey(person, 'age')); // 28

type Person2 = typeof person2;

const person2 = {
  name: '홍길동',
  age: '100',
};

function getPropertyKey2(person: Person2, key: keyof typeof person) {
  return person[key];
}

console.log(getPropertyKey2(person2, 'name')); // '홍길동'
console.log(getPropertyKey2(person2, 'age')); // 100
