class MinHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  getMin() {
    return this.heap[1] ? this.heap[1] : null;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);
    let curIdx = this.size();
    let parIdx = Math.floor(curIdx / 2);

    // 최소힙이므로
    while (curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = Math.floor(curIdx / 2);
    }
  }

  pop() {
    if (this.size() == 1) {
      return this.heap.pop();
    } else if (this.size() > 1) {
      // 최소값은 첫번째 값.
      const min = this.heap[1];

      // 맨 마지막 값을 맨 첫번쨰에 넣고
      this.heap[1] = this.heap.pop();

      let curIdx = 1;
      let leftIdx = curIdx * 2;
      let rightIdx = leftIdx + 1;

      //만약 루트노드 완쪽자식이 없다면 루트노드만 있는것. ->  heapify 필요 없음
      if (this.heap[leftIdx] == undefined) {
        // 최소값 반환
        return min;
      }

      // 오른쪽 노드가 없다. -> 왼쪽 노드만 있다. -> 비교해서 스왑
      if (this.heap[rightIdx] == undefined) {
        if (this.heap[leftIdx] < this.heap[curIdx]) {
          this.swap(leftIdx, curIdx);
        }
        return min;
      }

      // 모두 있다 -> 왼쪽/오른쪽 자식과 비교해서 둘중 하나라도 부모노드보다 작은동안 반복실행
      while (
        this.heap[leftIdx] < this.heap[curIdx] ||
        this.heap[rightIdx] < this.heap[curIdx]
      ) {
        // 왼쪽 자식 값과 오른쪽 자식 값 중에 더 작은쪽의 인덱스를 가져와서
        const minIdx =
          this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;

        // 스왑함
        this.swap(minIdx, curIdx);

        // idx 갱신
        curIdx = minIdx;
        leftIdx = curIdx * 2;
        rightIdx = leftIdx + 1;
      }

      return min;
    }
  }
}

let heap = new MinHeap();

for (let i = 10; i > 0; i--) {
  heap.push(i);
}

console.log(heap.heap, heap.size());

for (let i = 10; i > 0; i--) {
  console.log(heap.pop());
}

console.log(heap.heap);
