/*
  栈: 它是一种受限的线性表, 后进先出(LIFO)
  - 其限制是仅允许在表的一端进行插入和删除运算,这一端被称为栈顶,相对的,把另一端称位栈底;
  - LIFO(last in first out)表示就是后进入的元素,第一个弹出栈空间;
  - 向一个栈压入新元素又称为进栈,入栈或者压栈.他就是把新元素放在栈顶元素的上面,使之成为新的栈顶元素;
 - 从一个栈删除元素又叫做出栈或者退栈,他就是把栈顶元素删除掉,使其相邻的元素成为新的栈顶元素.
*/

/*
  实现栈结构:
    基于数组实现
    基于链表实现
*/

// 封装类
function Stack() {
  // 栈中的属性
  this.items = [];

  // 栈的相关操作
  // 1. 将元素压入栈
  Stack.prototype.push = function (element) {
    this.items.push(element);
  };

  // 2. 从栈中取出元素
  Stack.prototype.pop = function () {
    return this.items.pop(); // 返回最后一个元素
  };
  // 3. 查看一下栈顶元素
  Stack.prototype.peek = function () {
    return this.item[this.items.length - 1];
  };

  // 4. 判断栈是否为空
  Stack.prototype.isEmpty = function () {
    return this.items.length === 0;
  };

  // 5. 获取栈元素的个数
  Stack.prototype.size = function () {
    return this.items.length;
  };

  // 6. toString()的方法
  Stack.prototype.size = function () {
    let resultString = '';
    for (let index = 0; index < this.items.length; index++) {
      const element = array[index].toString() + '  ';
      resultString += element;
    }
  };
}

// 栈的使用
let s = new Stack();
s.push();
