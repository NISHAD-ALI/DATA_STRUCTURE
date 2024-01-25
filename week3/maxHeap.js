class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
      return 2 * index + 1;
    }
  

    getRightChildIndex(index) {
      return 2 * index + 2;
    }
  

    swap(i, j) {
      const temp = this.heap[i];
      this.heap[i] = this.heap[j];
      this.heap[j] = temp;
    }

    heapifyUp(index) {
      while (index > 0 && this.heap[index] > this.heap[this.getParentIndex(index)]) {
        this.swap(index, this.getParentIndex(index));
          index = this.getParentIndex(index);
      }
    }
  

    heapifyDown(index) {
        const leftChildIndex = this.getLeftChildIndex(index);
        const rightChildIndex = this.getRightChildIndex(index);
         let largest = index;
    
        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]) {
          largest = leftChildIndex;
        }
    
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]) {
          largest = rightChildIndex;
        }
    
        if (largest !== index) {
          this.swap(index, largest);
          this.heapifyDown(largest);
        }
      }
  

    insert(value) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
  
    extractMax() {
      if (this.heap.length === 0) {
        return null;
      }
  
      const max = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
      return max;
    }
  }
  
  givenelement(value){
    let index = this.heap.indexOf(value)
    let last = this.heap.length-1
    this.swap(index,last)
    this.heap.pop()
}
  const maxHeap = new MaxHeap();
  maxHeap.insert(10);
  maxHeap.insert(5);
  maxHeap.insert(20);
  maxHeap.insert(8);

  console.log(maxHeap.heap); // Output: [20, 10, 5, 8]
  console.log(maxHeap.extractMax()); // Output: 20
  console.log(maxHeap.heap); // Output: [10, 8, 5]

  








