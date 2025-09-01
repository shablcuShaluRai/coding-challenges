function insertNode(root, node) {
  if (root.value > node.value) {
    if (root.left === null) {
      root.left = node;
    } else {
      insertNode(root.left, node);
    }
  } else {
    if (root.value < node.value) {
      if (root.right === null) {
        root.right = node;
      } else {
        insertNode(root.right, node);
      }
    }
  }
}

function deleteNode(root, value) {
  if (value < root.value) {
    if (root.left === null) {
      return "value does not exist";
    } else if (root.left.value === value) {
      root.left = root.left.right;
      root = root.right;
    } else {
      return deleteNode(root.left, value);
    }
  } else {
    if (value > root.value) {
      if (root.right === null) {
        return "value does not exist";
      } else if (root.right.value === value) {
        root.right = root.right.right;
        root = root.right;
      } else {
        return deleteNode(root.right, value);
      }
    }
  }
}

function lookDepthOfTree(root) {
  if (root.left === null) {
    return root.value;
  } else {
    return lookDepthOfTree(root.left);
  }
}

// function serchNode(root, searchValue) {
//   if(searchValue < root.value)
// }

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      insertNode(this.root, newNode);
    }
  }

  delete(value) {
    if (value === this.root.value) {
      this.root.right.left = this.root.left;
      this.root = this.root.right;
      return this;
    } else {
      return deleteNode(this.root, value);
    }
  }

  // minimum value of node in the tree
  findMin() {
    return lookDepthOfTree(this.root);
  }
  search(searchValue) {
    let current = this.root;
    let found = false;
    if (this.root === null) return false;

    while (current && !found) {
      if (searchValue === current.value) {
        found = true;
      } else if (searchValue < current.value) {
        current = current.left;
      } else if (searchValue > current.value) {
        current = current.right;
      }
    }
    // you can return current , if you want to see the value
    return found;
  }
  BFS() {
    let current = this.root;
    const data = [],
      visited = [];
    visited.push(current);
    while (visited.length) {
      current = visited.shift();
      data.push(current.value);
      if (current.left) visited.push(current.left);
      if (current.right) visited.push(current.right);
    }
    return data;
  }

  DFsPreorder() {
    const data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);

    return data;
  }
  DFsPostOrder() {
    const data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);

    return data;
  }
  DFSInorder() {
    const data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     var newNode = new Node(value);
//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     } else {
//       var current = this.root;
//       while (value) {
//         if (value === current.value) return undefined;
//         if (value < current.value) {
//           if (current.left === null) {
//             current.left = newNode;
//             return this;
//           } else {
//             current = current.left;
//           }
//         } else {
//           if (current.right === null) {
//             current.right = newNode;
//             return this;
//           } else {
//             current = current.right;
//           }
//         }
//       }
//     }
//   }
// }

const tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(15);
// tree.insert(9);
// tree.insert(7);
// tree.insert(21);
// tree.insert(7);
[10, 6, 3, 8, 15, 20].map((ar) => tree.insert(ar));
// tree.delete(15);
// tree.delete(10);
// tree.delete(18);
// console.log("tree", tree.findMin());
// console.log("search", tree.search(15));

// console.log("tee BFS", tree.BFS());
// console.log("tree DFS", tree.DFsPreorder());
// console.log("DFsPostOrder", tree.DFsPostOrder());
console.log("DFSInorder", tree.DFSInorder());
console.log("tree", tree);
