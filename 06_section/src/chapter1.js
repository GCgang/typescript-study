/**
 * 자바스크립트의 클래스
 */

class Student {
  // 필드
  name;
  age;
  #grade; // private 필드

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.age = age;
    this.#grade = grade;
  }

  // 메서드
  introduce() {
    console.log(
      `안녕하세요! 이름은 ${this.name}, 성적은 ${this.#grade} 입니다`
    );
  }
}

const studentA = new Student('홍길동', 'A+', 27);
console.log(studentA); // Student { name: '홍길동', age: 27, grade: 'A+' }
studentA.introduce(); // 안녕하세요! 이름은 홍길동, 성적은 A+ 입니다
console.log(studentA.name); // 홍길동
console.log(studentA.grade); // undefined

// 상속
class studentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}
