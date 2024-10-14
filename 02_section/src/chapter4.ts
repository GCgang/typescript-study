// 타입  별칭(Type Alias)
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user1: User = {
  id: 1,
  name: '안현준',
  nickname: 'winterlood',
  birth: '1997.03.03',
  bio: '안녕하세요',
  location: '서울시',
};

let user2: User = {
  id: 2,
  name: '홍길동',
  nickname: 'winterlood',
  birth: '1997.03.03',
  bio: '안녕하세요',
  location: '서울시',
};

// 인덱스 시그니처(Index Signature)
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
  // (... 약 100개의 국가)
  Brazil: 'bz',
};
