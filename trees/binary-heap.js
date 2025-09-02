class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleup();
  }

  bubbleup() {
    let lastChildIdx = this.values.length - 1;
    const child = this.values[lastChildIdx];
    while (lastChildIdx > 0) {
      let parentIdx = Math.floor((lastChildIdx - 1) / 2);
      let parent = this.values[parentIdx];
      if (child <= parent) break;
      this.values[parentIdx] = child;
      this.values[lastChildIdx] = parent;
      lastChildIdx = parentIdx;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.sinkDown();
    return max;
  }

  // sinkDown() {
  //   let idx = 0
  //   const length = this.values.length
  //   const root = this.values[0]

  // }
}

const heap = new MaxBinaryHeap();
const arr = [41, 39, 33, 18, 27, 12, 1];
arr.map((ele) => heap.insert(ele));
heap.insert(55);
console.log("heap", heap);
