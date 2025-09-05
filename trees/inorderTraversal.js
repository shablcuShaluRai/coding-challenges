export function inorderTraversal(node, callback) {
  if (node === null) return node;
  if (node !== null) {
    inorderTraversal(node.left, callback);
    callback(node.value);
    inorderTraversal(node.right, callback);
  }
}
