// BST is not algorithm
// BST is data-structure

class Node {
  constructor(n) {
    this.n = n;
    this.left = undefined;
    this.right = undefined;
    this.parent = undefined
  }

  setLeft(node) {
    this.left = node;
  }

  getLeft() {
    return this.left
  }

  setRight(node) {
    this.right = node
  }

  getRight() {
    return this.right;
  }

  setParent(node) {
    this.parent = node;
  }

  getParent() {
    return this.parent
  }

  getN() {
    return this.n;
  }
}

class BST {
  constructor() {
    this.root = undefined;
  }

  getRoot() {
    return this.root;
  }

  insert(node) {
    let currentNode = this.root

    if (!currentNode) {
      this.root = node;
    } else {
      while (1) {
        if (node.getN() < currentNode.getN()) {
          if (currentNode.getLeft()) {
            currentNode = currentNode.getLeft();
            continue;
          } else {
            currentNode.setLeft(node);
            node.setParent(currentNode)
            break;
          }
        } else {
          if (currentNode.getRight()) {
            currentNode = currentNode.getRight()
            continue;
          } else {
            currentNode.setRight(node)
            node.setParent(currentNode)
            break;
          }
        }
      }
    }
  }

  findMinNode(root) {
    let current = root;
    while (current.getLeft() != undefined) {
      current = current.getLeft();
    }

    return current
  }

  delete(node) {
    
    const parent = node.getParent();

    // node is terminal node
    if (node.getLeft() == undefined && node.getRight() == undefined) {
      
      if (node == parent.left) {
        parent.left = undefined;
      } else {
        parent.right = undefined;
      }

    } else {
      if (node.getLeft() && node.getRight()) {
        // node has 2 child
        // 오른쪽 서브트리의 가장 작은 값을 기존의 위치에 둔다.
        const rightSubTreeRoot = node.getRight();
        const minNode = this.findMinNode(rightSubTreeRoot)

        this.delete(minNode);

        minNode.setLeft(node.getLeft());
        minNode.setRight(node.getRight());
      } else {
        // node has 1 child
        if (node == parent.getLeft()) {
          parent.setLeft(node.getLeft() == undefined ? node.getRight() : node.getRight())
        } else {
          parent.setRight(node.getLeft() == undefined ? node.getRight() : node.getRight())
        }
      }
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.getLeft());
      console.log(root.getN())
      this.inOrder(root.getRight());
    }
  }
  
}

arr = [3, 2, 6, 23, 5, 65, 42, 21, 12, 8];

for (let i in arr) {
  const node = new Node(arr[i]);
  arr[i] = node;
}

const bst = new BST();
for (let node of arr) {
  bst.insert(node)
}

bst.inOrder(bst.getRoot())





