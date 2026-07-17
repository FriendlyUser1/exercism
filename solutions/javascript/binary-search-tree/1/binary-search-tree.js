export class BinarySearchTree {
  constructor(root) {
    this.tree = [root, null, null];
    this.path = [];
  }

  get data() {
    let targetNode = this.tree;

    for (let i = 0; i < this.path.length; i++)
      targetNode = targetNode[this.path[i]];

    this.path = [];
    return targetNode[0];
  }

  get right() {
    this.path.push(2);
    return this;
  }

  get left() {
    this.path.push(1);
    return this;
  }

  insert(n) {
    let targetNode = this.tree;
    let direction = n <= targetNode[0] ? 1 : 2;

    while (targetNode[direction] !== null) {
      targetNode = targetNode[direction];
      direction = n <= targetNode[0] ? 1 : 2;
    }

    targetNode[direction] = [n, null, null];
  }

  each(callbackfn) {
    const readValues = (node) => {
      let vs = [];
      if (node[1] !== null) vs.push(...readValues(node[1]));
      vs.push(node[0]);
      if (node[2] !== null) vs.push(...readValues(node[2]));

      console.log(vs);
      return vs;
    };

    readValues(this.tree).forEach((value) => callbackfn(value));
  }
}
