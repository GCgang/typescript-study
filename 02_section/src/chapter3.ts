// object로 정의하기
let user1: object = {
  id: 1,
  name: '안현준',
};

// 객체로 정의하기
let user2: {
  id: number;
  name: string;
} = {
  id: 1,
  name: '안현준',
};

// 선택적 프로퍼티(Optional Property)
let user3: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: '안현준',
};

// 읽기전용 프로퍼티(Readonly Property)

let user4: {
  id?: number;
  readonly name: string;
} = {
  id: 1,
  name: '안현준',
};
