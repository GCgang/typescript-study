/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 말한다.
 */

// instanceof 타입 가드
function func(value: number | string | Date | null) {
  if (typeof value === 'number') {
    console.log(value.toFixed());
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  }
}

// in 타입 가드
type Person = {
  name: string;
  age: number;
};

function func1(value: number | string | Date | null | Person) {
  if (typeof value === 'number') {
    console.log(value.toFixed());
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && 'age' in value) {
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
}
