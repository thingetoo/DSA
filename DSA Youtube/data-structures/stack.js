const { Module } = require("module");

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0
    }

    push(val) {
        const newNode = new Node(val);

        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const currFirst = this.first;
            newNode.next = currFirst;

            this.first = newNode;
        }
        this.size++;
    }

    pop() {
        if (this.size === 0) return undefined;

        let current = this.first;
    
        if (this.size === 1) {
            this.first = null
            this.last = null
        } else {
            let next = current.next;
            current.next = null;

            this.first = next;
        }
        this.size--;
        return current.value;
    }
}


const stack = new Stack();

// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(7);
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

// console.log(stack);

module.exports = Stack;