/**
 * interface 확장
 */

interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  breed: string;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

/**
 * 프로퍼티 재정의
 */

interface Animal {
  name: string;
  color: string;
}

interface Dog2 extends Animal {
  name: 'doldol'; // 타입 재 정의
  breed: string;
}

// interface Dog extends Animal {
//   name: number; // ❌
//   breed: string;
// }

/**
 * 타입 별칭 확장하기
 */

type TypeAnimal = {
  name: string;
  color: string;
};

interface Dog extends TypeAnimal {
  breed: string;
}

/**
 * 다중 확장
 */

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: '',
  color: '',
  breed: '',
  isScratch: true,
};
