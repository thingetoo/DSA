class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(value) {
        this.data[this.length] = value;
        this.length = this.length + 1
    }

    get(index) {
        return this.data[index];
    }

    pop() {
        const result = this.data[this.length];

        delete this.data[this.length - 1];
        this.length = this.length - 1;
        return result
    }

    shift() {
        const firstItem = this.data[0];
        delete this.data[0];
        this.length = this.length - 1
        let idx = 0;
        for (let item in this.data) {
            if (item) {
                this.data[idx] = this.data[item];
                idx++
            }
        }
        return firstItem;
    }
    
}

const myNewArray = new MyArray();

myNewArray.push(1)
myNewArray.push(5)
myNewArray.push(7)
myNewArray.push(8)

console.log(myNewArray.shift())
