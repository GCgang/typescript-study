/**
 * 함수 타입 정의
 */

// 반환값은 생략해도 자동으로 추론된다
function func(a: number, b: number): number {
  return a + b;
}

/**
 * 화살표 함수 타입 정의하기
 */

const add = (a: number, b: number): number => a + b;

/**
 * 매개변수 기본값 설정하기
 */

function introduce1(name = '안현준') {
  console.log(`name : ${name}`);
}

/**
 * 선택적 매개변수 설정하기
 */

// tail 같은 선택적 매개변수의 타입은 현재 number | undefined로 추론된다
function introduce2(name = '안현준', tall?: number) {
  console.log(`name : ${name}`);
  console.log(`tall : ${tall}`);
}

introduce2('안현준', 100);
introduce2('안현준');

/**
 * 타입 좁히기
 */

function introduce3(name = '안현준', tall?: number) {
  console.log(`name : ${name}`);
  if (typeof tall === 'number') {
    console.log(`tall : ${tall + 80}`);
  }
}

introduce3('안현준', 100);
introduce3('안현준');

/**
 *  나머지 매개변수
 */

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}
console.log(getSum(1, 2, 3));

function getSum2(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}
console.log(getSum2(1, 2, 3));
