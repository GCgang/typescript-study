/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가 ?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: '기린',
  color: 'yellow',
};

let dog: Dog = {
  name: '골든이',
  color: 'gold',
  breed: '골든 리트리버',
};

animal = dog; // ✅ OK
// dog = animal; // ❌ NO

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: '모던 자바스크립트 딥 다이브',
  price: 1000,
  skill: 'javascript',
};

book = programmingBook; // ✅ OK
// programmingBook = book; // ❌ NO

// 초과 프로퍼티 검사

let book2: Book = {
  // 오류 발생
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  // skill: 'reactjs', // 오류 발생
};

let book3: Book = programmingBook; // 가능

function func(book: Book) {}

func({
  // 오류 발생
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  // skill: 'reactjs', // 오류 발생
});

func(programmingBook); // 가능
