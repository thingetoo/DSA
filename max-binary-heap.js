class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);

        let idx = this.values.length - 1;
        let element = this.values[idx];
        
        while (curIdx > 0) {
            const parentIdx = Math.floor((length - 1) / 2);
            const parentValue = this.values[parentIdx];

            if (element <= parentValue) break;

            this.values[parentIdx] = element;
            this.values[idx] = parentValue;
            idx = parentIdx;
        }
    }

    extractMax() {
        
        const max = this.values[0];
        const end = this.values.pop();

        if (!this.values.length) return max;
        this.values[0] = end;

        this.sinkDown()
        return max;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftIdx < length) {
                leftChild = this.values[leftIdx]

                if (leftChild > element) {
                    swap = leftIdx
                }
            }

            if (rightIdx < length) {
                rightChild = this.values[rightIdx];

                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightIdx;
                }
            }
            if (swap === null) break;

            this.values[idx] = this.values[swap];
            this.values[swap] = element

            idx = swap;
        }
    }
}