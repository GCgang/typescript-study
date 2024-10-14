// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

const user1 = {
  name: '안현준',
  role: Role.ADMIN, //관리자
};

const user2 = {
  name: '홍길동',
  role: Role.USER, // 회원
};

const user3 = {
  name: '아무개',
  role: Role.GUEST, // 게스트
};

// 문자열 열거형 타입

enum Language {
  korean = 'ko',
  english = 'en',
}

const user4 = {
  name: '안현준',
  role: Role.ADMIN, // 관리자
  language: Language.korean, // "ko"
};
