/**
 * 선언 합침(Declaration Merging)
 */

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: '안현준',
  age: 28,
};

/**
 * 주의할 점
 * 동일한 이름의 프로퍼티를 서로 다른 타입으로 정의하면 오류가 발생
 */

interface Person {
  name: string;
}

// interface Person {
//   name: number; // X
//   age: number;
// }
