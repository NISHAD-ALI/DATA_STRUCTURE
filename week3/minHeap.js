class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    // Get the parent index of a given index
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
  
    // Get the left child index of a given index
    getLeftChildIndex(index) {
      return 2 * index + 1;
    }
  
    // Get the right child index of a given index
    getRightChildIndex(index) {
      return 2 * index + 2;
    }
  
    // Swap two elements in the heap
    swap(i, j) {
      const temp = this.heap[i];
      this.heap[i] = this.heap[j];
      this.heap[j] = temp;
    }
  
    // Heapify up (used after insertion)
    heapifyUp(index) {
      while (index > 0 && this.heap[index] < this.heap[this.getParentIndex(index)]) {
        this.swap(index, this.getParentIndex(index));
        index = this.getParentIndex(index);
      }
    }
  
    // Heapify down (used after removal)
    heapifyDown(index) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      let smallest = index;
  
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
        smallest = leftChildIndex;
      }
  
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
        smallest = rightChildIndex;
      }
  
      if (smallest !== index) {
        this.swap(index, smallest);
        this.heapifyDown(smallest);
      }
    }
  
    // Insert a new element into the heap
    insert(value) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
  
    // Remove and return the minimum element from the heap
    extractMin() {
      if (this.heap.length === 0) {
        return null;
      }
  
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
      return min;
    }
  }
  
  // Example usage:
  const minHeap = new MinHeap();
  minHeap.insert(10);
  minHeap.insert(5);
  minHeap.insert(20);
  minHeap.insert(8);
  
  console.log(minHeap.heap); // Output: [5, 8, 20, 10]
  console.log(minHeap.extractMin()); // Output: 5
  console.log(minHeap.heap); // Output: [8, 10, 20]
  