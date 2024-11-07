/**
 * 제네릭 클래스
 */

class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
numberList.print();
numberList.push(4);
numberList.print();
numberList.pop();
numberList.pop();
numberList.print();

const stringList = new List(['1', '2', '3']);
stringList.print();
stringList.push('4');
stringList.print();
stringList.pop();
stringList.pop();
stringList.print();

const list = new List([1, 2, '3', true, {}]);
list.print();
list.push({ key: 1 });
list.print();
list.pop();
list.pop();
list.print();
