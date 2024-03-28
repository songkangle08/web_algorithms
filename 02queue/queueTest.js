/*
  击鼓传花:
*/
function Queue() {
  this.items = [];
  Queue.prototype.enqueue = (element) => {
    this.items.push(element);
  };
  Queue.prototype.dequeue = () => {
    return this.items.shift();
  };
  Queue.prototype.front = () => {
    return this.items[0];
  };
  Queue.prototype.isEmpty = () => {
    return this.items.length === 0;
  };
  Queue.prototype.size = () => {
    return this.items.length;
  };
  Queue.prototype.toString = () => {
    let resultString = '';
    for (let index = 0; index < this.items.length; index++) {
      const element = array[index].toString() + '  ';
      resultString += element;
    }
  };
}

function passGame(list, num) {
  // 创建队列
  let queue = new Queue();
  // 将所有人加入到队列中
  for (let i = 0; i < list.length; i++) {
    queue.enqueue(list[i]);
  }

  // 开始数数字,不是num的时候,重新加入到队列的末尾,如果是num这个数字的时候,将其从队列中删除
  while (queue.size() > 1) {
    for (let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue());
    }
    let item = queue.dequeue();
    console.log(`${item}被淘汰了`);
  }

  return queue.dequeue();
}

console.log(passGame([1, 2, 3, 4, 5, 6, 7, 8], 5));
