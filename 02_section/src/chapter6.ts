// any 타입
let anyVar: any = 10;
anyVar = 'hello';

anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;

let num: number = 10;
num = anyVar;

// unknown 타입
let unknownVar: unknown;

unknownVar = '';
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar; // 오류 !
// unknownVar * 2; // 오류!

// 특정 타입임을 보장할 수 있게 되면 해당값의 타입이 자동으로 바뀐다
if (typeof unknownVar === 'number') {
  // 이 조건이 참이된다면 unknownVar는 number 타입으로 볼 수 있음
  unknownVar * 2;
}
