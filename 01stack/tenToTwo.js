/*
  十进制转二进制
*/

function Stack() {
  this.items = [];
  Stack.prototype.push = function (element) {
    this.items.push(element);
  };
  Stack.prototype.pop = function () {
    return this.items.pop();
  };
  Stack.prototype.peek = function () {
    return this.item[this.items.length - 1];
  };
  Stack.prototype.isEmpty = function () {
    return this.items.length === 0;
  };
  Stack.prototype.size = function () {
    return this.items.length;
  };
  Stack.prototype.size = function () {
    let resultString = '';
    for (let index = 0; index < this.items.length; index++) {
      const element = array[index].toString() + '  ';
      resultString += element;
    }
  };
}

function dec2bin(decNumber) {
  // 定义一个栈对象
  let stack = new Stack();

  // 2. 循环操作
  while (decNumber > 0) {
    // 2.1 获取余数 并且放入到栈中
    stack.push(decNumber % 2);
    // 2.2 获取整除后的结果,作为下一次运行的数字
    decNumber = Math.floor(decNumber / 2);
  }

  // 从栈中取出二进制
  var binaryString = '';
  while (!stack.isEmpty()) {
    binaryString += stack.pop();
  }

  return binaryString;
}

console.log(dec2bin(100));
