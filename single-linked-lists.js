class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    traverse() {
        let current = this.head;

        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }

    pop() {
        if (!this.length) {
            return 'nothing to pop';
        }
    
        let current = this.head;
        let prev = current; 
        while (current.next) {
            prev = current;
            current = current.next;
        }
        const result = current;

        prev.next = null;
        this.tail = prev;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return result;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }
        const head = this.head;

        this.head = this.head.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return this.head
    }

    unshift(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode; 
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null
        }
        let current = this.head;
        let count = 0;

        while (count !== index) {
            current = current.next;
            count ++;
        }

        return current;
    }

    set(index, value) {
        const currentNode = this.get(index);
        
        if (!currentNode) return false;

        currentNode.val = value;

        return true;
    }

    insert(index, value) {
        // const currentNode = this.get(index - 1);

        // if (!currentNode) return false;

        // const newNode = new Node(value);
        // const next = currentNode.next;

        // currentNode.next = newNode;
        // newNode.next = next;

        // if (index === 0) {
        //     this.head = newNode;
        // }

        // if (index === this.length) {
        //     this.tail = newNode
        // }

        // this.length++;
        // return true

        if (index < 0 || index > this.length) {
            return false
        }

        if (index === 0) {
            !!this.unshift(value)
        }

        if (index === this.length) {
            !!this.push(value)
        }

        const prev = this.get(index - 1);

        if (!prev) return false;

        const newNode = new Node(value);
        const next = prev.next;

        prev.next = newNode;
        newNode.next = next;
    }

    remove(idx) {
        if (index < 0 || index > this.length) {
            return undefined
        }

        if (idx === 0) !!this.shift()
        if (idx === this.length - 1) !!this.pop();

        const prev = this.get(idx - 1);
        const next = prev.next.next
        const current = prev.next;

        prev.next = next;
        this.length--;

        return current;
    }

    reverse() {
        const temp = this.head
        this.head = this.tail;
        this.tail = temp;

        let node = this.tail;
        let prev = null;
        let next;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

const list = new LinkedList();

list.push('H');
list.push('I');
list.push('I');
list.push('P');
list.print();
list.reverse();
list.print();
// list.traverse();
