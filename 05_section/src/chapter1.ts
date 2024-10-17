/**
 * interface
 */

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: '안현준',
  age: 28,
};

/**
 * 선택적 프로퍼티
 */

interface Person2 {
  name: string;
  age?: number;
}

const person2: Person2 = {
  name: '안현준',
  // age: 28,
};

/**
 * 읽기전용 프로퍼티
 */

interface Person3 {
  readonly name: string;
  age?: number;
}

const person3: Person3 = {
  name: '안현준',
  // age: 28,
};

// person3.name = '홍길동'; // X

/**
 * 메서드 타입 정의하기
 */

interface Person4 {
  readonly name: string;
  age: number;
  sayHi: () => void; // 함수 타입 표현식을 이용해 정의
  sayBye(): void; // 호출 시그니쳐를 이용해 메서드의 타입을 정의
}

/**
 * 메서드 오버로딩
 */
interface Person5 {
  readonly name: string;
  age: number;
  sayHi: () => void; // 함수 타입 표현식을 이용해 정의
  // sayHi: (a: number, b: number) => void; // 함수 타입 표현식을 이용해 오버로딩 구현 불가능
  sayBye(): void; // 호출 시그니쳐를 이용해 메서드의 타입을 정의
  sayBye(a: number, b: number): void; // 호출 시그니쳐를 이용해  오버로딩 구현 가능
}

/**
 * 하이브리드 타입
 */

interface Func2 {
  (a: number): string;
  b: boolean;
}

const func: Func2 = (a) => 'hello';
func.b = true;
