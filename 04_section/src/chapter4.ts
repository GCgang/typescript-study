/**
 * 함수 오버로딩
 * 하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 문법
 */

// 자바스크립트에는 함수 오버로딩이 없고 타입스크립트에서 가능하다
// 오버로드 시그니쳐를 선언해야 한다
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 구현 시그니쳐
function func(a: number, b?: number, c?: number) {
  if (typeof b === 'number' && typeof c === 'number') {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// 함수 호출시 오버로드 시그니쳐를 따른다

func(1);
func(1, 2, 3);
