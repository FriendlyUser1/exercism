export class Zipper {
  constructor(list, path) {
    this.list = list;
    this.path = path;
  }

  // from object tree to list tree
  static fromTree(tree) {
    const readTree = (node) =>
      node === null
        ? null
        : [node.value, readTree(node.left), readTree(node.right)];

    return new Zipper(readTree(tree), []);
  }

  // from list tree to object tree
  toTree() {
    const readList = (node) =>
      node === null
        ? null
        : {
            value: node[0],
            left: readList(node[1]),
            right: readList(node[2]),
          };

    return readList(this.list);
  }

  value() {
    let node = this.list;
    for (let i = 0; i < this.path.length; i++) node = node[this.path[i]];

    if (node === null) return null;
    return node[0];
  }

  left() {
    let leftBranch = new Zipper(this.list, [...this.path, 1]);
    return leftBranch.value() === null ? null : leftBranch;
  }

  right() {
    let rightBranch = new Zipper(this.list, [...this.path, 2]);
    return rightBranch.value() === null ? null : rightBranch;
  }

  up() {
    if (this.path.length === 0) return null;
    this.path.pop();

    return new Zipper(this.list, this.path);
  }

  setValue(value) {
    let node = this.list;
    for (let i = 0; i < this.path.length; i++) node = node[this.path[i]];
    node[0] = value;

    return new Zipper(this.list, this.path);
  }

  setLeft(left) {
    let node = this.list;
    for (let i = 0; i < this.path.length; i++) node = node[this.path[i]];
    node[1] = Zipper.fromTree(left).list;

    return new Zipper(this.list, this.path);
  }

  setRight(right) {
    let node = this.list;
    for (let i = 0; i < this.path.length; i++) node = node[this.path[i]];
    node[2] = Zipper.fromTree(right).list;

    return new Zipper(this.list, this.path);
  }
}
