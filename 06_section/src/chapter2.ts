/**
 * 타입스크립트의 클래스
 */
class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log('일함');
  }
}

/**
 * 클래스는 타입이다
 */

const employeeC: Employee = {
  name: '',
  age: 0,
  position: '',
  work() {},
};

/**
 * 상속
 */

class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}
