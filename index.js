class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n3.right = n5;

//     n1
//   /   \
//  n2   n3
// /       \
// n4       n5
console.log("hey");
