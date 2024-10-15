/**
 * 타입 단언(type assertion)
 */

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num = 10 as never;

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = '';
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '진도',
} as Dog;

let num1 = 10 as never; // ✅
let num2 = 10 as unknown; // ✅

// let num3 = 10 as string; // ❌

/**
 * 다중 단언
 */

let num3 = 10 as unknown as string;

/**
 * const 단언
 */

let num4 = 10 as const;
// 10 Number Literal 타입으로 단언됨

let cat = {
  name: '야옹이',
  color: 'yellow',
} as const;
// 모든 프로퍼티가 readonly를 갖도록 단언됨

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: '게시글1',
};

const len: number = post.author!.length;
