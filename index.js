class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
//Initialize Tree
const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);
const n6 = new Node(6);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n3.right = n5;
n2.right = n6;

//     n1
//   /   \
//  n2   n3
// /  \     \
//n4   n6    n5
const depthFirstValues = (root) => {
  if (root == null) {
    return [];
  }
  const stack = [root];
  const values = [];

  while (stack.length > 0) {
    const curr = stack.pop();
    values.push(curr.value);

    if (curr.right != null) {
      stack.push(curr.right);
    }
    if (curr.left != null) {
      stack.push(curr.left);
    }
  }
  return values;
};
const depthFirstRecur = (root) => {
  if (root === null) return [];

  const leftChildren = depthFirstRecur(root.left);
  const rightChildren = depthFirstRecur(root.right);
  return [root.value, ...leftChildren, ...rightChildren];
};

const bFirstValues = (root) => {
  const queue = [root];
  const values = [];
  if (root === null) return [];
  while (queue.length > 0) {
    const curr = queue.shift();
    values.push(curr.value);
    if (curr.left != null) {
      queue.push(curr.left);
    }
    if (curr.right != null) {
      queue.push(curr.right);
    }
  }
  return values;
};
const bFirstRecur = (root) => {
  if (root == null) return [];

  const queue = [root];
  const values = [];
  const traverse = () => {
    if (queue.length === 0) return;
    const curr = queue.shift();
    values.push(curr.value);

    if (curr.left !== null) {
      queue.push(curr.left);
    }
    if (curr.right !== null) {
      queue.push(curr.right);
    }
    traverse();
  };
  traverse();
  return values;
};
const treeIncludesB = (root, target) => {
  if (root == null) return false;
  const queue = [root];
  while (queue.length > 0) {
    const curr = queue.shift();
    if (curr.value === target) return true;
    if (curr.left != null) {
      queue.push(curr.left);
    }
    if (curr.right != null) {
      queue.push(curr.right);
    }
  }
  return false;
};
const treeIncludesD = (root, target) => {
  if (root === null) return false;
  if (root.value === target) return true;
  return treeIncludesD(root.left, target) || treeIncludesD(root.right, target);
};
console.log("Depth First Iter:", depthFirstValues(n1));
console.log("Depth First Recur:", depthFirstRecur(n1));
console.log("Breadth First Iter:", bFirstValues(n1));
console.log("Breadth First Recur:", bFirstRecur(n1));
console.log("treeIncludes Bfirst:", treeIncludesB(n1, 9));
console.log("treeIncludes Dfirst:", treeIncludesD(n1, 3));
