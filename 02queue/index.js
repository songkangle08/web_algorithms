/*
  队列(Queue):  它是一种受限的线性表,先进先出(FIFIO First In First Out)
  - 受限之处在于它只允许在表的前端(front) 进行删除操作
  - 而在表的后端 (rear)进行插入操作  
*/
function Queue() {
  this.items = [];
  // 将元素加入到队列中
  Queue.prototype.enqueue = (element) => {
    this.items.push(element);
  };
  // 从队列中删除前端的元素
  Queue.prototype.dequeue = () => {
    return this.items.shift();
  };
  // 查看前端元素
  Queue.prototype.front = () => {
    return this.items[0];
  };
  // 查看队列是否为空
  Queue.prototype.isEmpty = () => {
    return this.items.length === 0;
  };
  // 查看队列中元素的个数
  Queue.prototype.size = () => {
    return this.items.length;
  };
  // toString();
  Queue.prototype.toString = () => {
    let resultString = '';
    for (let index = 0; index < this.items.length; index++) {
      const element = array[index].toString() + '  ';
      resultString += element;
    }
  };
}
let queue = new Queue();
