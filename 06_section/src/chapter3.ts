/**
 * 접근 제어자
 */

class Employee {
  // 필드
  name: string; // 자동으로 public
  public position: string; // 직접 명시 가능
  protected age: number; // protected 접근 제어자 설정
  private salary: number; // private 접근 제어자 설정

  // 생성자
  constructor(name: string, position: string, age: number, salary: number) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.salary = salary;
  }

  // 메서드
  work() {
    console.log('일함');
  }

  mySalary() {
    console.log(`내 연봉은 ${this.salary} 입니다.`); // 여기서는 private 접근 가능
  }
}

const employee = new Employee('안현준', 'devloper', 28, 30000);

employee.name = '홍길동';
employee.position = 'PM';
// employee.age = 30; // X
// employee.salary = 100000; // X
employee.mySalary();

class ExecutiveOfficer extends Employee {
  // 메서드
  func() {
    this.age; // ✅ 가능
    // this.salary; // ❌ 오류
  }
}

/**
 * 필드 생략하기
 */

class Employee2 {
  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
  }
}
