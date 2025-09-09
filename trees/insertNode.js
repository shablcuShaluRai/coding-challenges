export function insertNode(root, node) {
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
