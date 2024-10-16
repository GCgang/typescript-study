/**
 * 함수 타입 표현식 (Function Type Expression)
 */

type Add = (a: number, b: number) => number;
const addFunc: Add = (a, b) => a + b;

type Operation = (a: number, b: number) => number;
const add: (a: number, b: number) => number = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const mul: Operation = (a, b) => a * b;
const div: Operation = (a, b) => a / b;

/**
 * 호출 시그니처(콜 시그니처)
 */

type Operation2 = {
  (a: number, b: number): number;
  name: string; // 호출 시그너쳐 아래에 프로퍼티를 추가 정의(하이브리드 타입)
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const mul2: Operation2 = (a, b) => a * b;
const div2: Operation2 = (a, b) => a / b;

add2.name;
