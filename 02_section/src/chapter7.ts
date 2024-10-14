// void
function fun1(): void {
  console.log('hello');
}

let a: void;
a = undefined;
// "strictNullChecks: false" 일 경우 null을 담을 수 있음
// a = null;

// never
function fun2(): never {
  while (true) {}
}

function fun3(): never {
  throw new Error();
}

let anyVar: any;

let b: never;
// b = 1; // 오류
// b = null; // 오류
// b = undefined; // 오류
// b = anyVar; // 오류
