function recursiveTreeSearch(x, key) {
  if (x === null || key === null) {
    return null;
  }

  if (key === x.key) {
    return x;
  } else if (key < x.key) {
    return recursiveTreeSearch(x.left, key);
  } else {
    return recursiveTreeSearch(x.right, key);
  }
}

function iterativeTreeSearch(x, key) {
  while (x !== null && key !== x.key) {
    if (key < x.key) {
      x = x.left;
    } else {
      x = x.right;
    }
  }

  return x;
}

function BSTInsert(T, z) {
  let y = null;
  let x = T.root;

  while (x !== null) {
    y = x;

    if (z.key < x.key) {
      x = x.left;
    } else {
      x = x.right;
    }
  }

  z.parent = y;

  if (y === null) {
    T.root = z;
  } else if (z.key < y.key) {
    y.left = z;
  } else {
    y.right = z;
  }
}

function BSTMaximum(x) {
  while (x.right !== null) {
    x = x.right;
  }

  return x;
}

function BSTMinimum(x) {
  while (x.left !== null) {
    x = x.left;
  }

  return x;
}

function BSTSuccessor(x) {
  if (x.right !== null) {
    return BSTMinimum(x.right);
  }

  let y = x.parent;

  while (y !== null && x === y.right) {
    x = y;
    y = y.parent;
  }

  return y;
}
function BSTSuccessor(x) {
  if (x.right !== null) {
    return BSTMinimum(x.right);
  }

  let y = x.parent;

  while (y !== null && x === y.right) {
    x = y;
    y = y.parent;
  }

  return y;
}

function BSTPredecessor(x) {
  if (x.left !== null) {
    return BSTMaximum(x.left);
  }

  let y = x.parent;

  while (y !== null && x === y.left) {
    x = y;
    y = y.parent;
  }

  return y;
}

function BSTDelete(BST, D) {
  if (D.left === null) {
    shiftNodes(BST, D, D.right);
  } else if (D.right === null) {
    shiftNodes(BST, D, D.left);
  } else {
    let E = BSTSuccessor(D);

    if (E.parent !== D) {
      shiftNodes(BST, E, E.right);
      E.right = D.right;
      E.right.parent = E;
    }

    shiftNodes(BST, D, E);
    E.left = D.left;
    E.left.parent = E;
  }

  shiftNodes(BST, u, v);

  if (u.parent === null) {
    BST.root = v;
  } else if (u === u.parent.left) {
    u.parent.left = v;
  } else {
    u.parent.right = v;
  }

  if (v !== null) {
    v.parent = u.parent;
  }
}

function shiftNodes(BST, u, v) {
  if (u.parent === null) {
    BST.root = v;
  } else if (u === u.parent.left) {
    u.parent.left = v;
  } else {
    u.parent.right = v;
  }

  if (v !== null) {
    v.parent = u.parent;
  }
}

function preorderTreeWalk(x) {
  if (x !== null) {
    console.log(x.key);
    preorderTreeWalk(x.left);
    preorderTreeWalk(x.right);
  }
}

function inorderTreeWalk(x) {
  if (x !== null) {
    inorderTreeWalk(x.left);
    console.log(x.key);
    inorderTreeWalk(x.right);
  }
}

function postorderTreeWalk(x) {
  if (x !== null) {
    postorderTreeWalk(x.left);
    postorderTreeWalk(x.right);
    console.log(x.key); 
  }
}
