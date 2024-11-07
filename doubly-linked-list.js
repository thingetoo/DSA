// class Node {
//     constructor(val) {
//         this.val = val;
//         this.prev = null;
//         this.next = null
//     }
// }

// class DoublyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0
//     }

//     push(val) {
//         const newNode = new Node(val);

//         if (this.length === 0) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             newNode.prev = this.tail;
//             this.tail = newNode;
//         }

//         this.length++;
//         return this;
//     }

//     pop() {
//         if (!this.length) {
//             return undefined;
//         }
//         const current = this.tail;
//         if (this.length === 1) {
//             this.head = null;
//             this.tail = null;
//         } else {
//             this.tail = this.tail.prev;
//             this.tail.next = null;
//             current.prev = null;
//         }
//         this.length--;
//         return current;
//     }

//     shift() {
//         if (!this.length) return undefined;

//         const current = this.head;

//         if (this.length === 1) {
//             this.head = null;
//             this.tail = null;
//         } else {
//             this.head = current.next;
//             this.head.prev = null;
//             current.next = null;
//         }
//         this.length--;
//         return current;
//     }

//     unshift(val) {
//         const newNode = new Node(val);

//         if (this.length === 0) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             let current = this.head;
//             current.prev = newNode;
//             newNode.next = current;
//             this.head = newNode;
//         }
//         this.length++;
//         return this;
//     }

//     get(index) {
//         if (index < 0 || index >= this.length) return null;
//         const half = Math.floor(this.length / 2);
//         let count,
//             current;

//         if (index < half) {
//             current = this.head;
//             count = 0; 
//             while (count !== index) {
//                 current = current.next;
//                 count++;
//             }           
//             return current;
//         } else {
//             current = this.tail;
//             count = this.length - 1;
//             while (count !== index) {
//                 current = current.prev;
//                 count--;
//             }
//             return current
//         }
//     }

//     set(index, value) {

//         const current = this.get(index);

//         if (index === 0) return this.unshift(value);
//         if (index === this.length) return this.push(value);

//         if (current !== null) {
//             current.val = value;
//             this.length++;
//             return true
//         }

//         return false;
//     }

//     insert(index, value) {
//         if (index < 0 || index > this.length) return null;
        
//         if (index === 0) return this.unshift(value)
//         if (index === this.length) return this.push(value)
                
//         let before = this.get(index - 1);
//         let current = new Node(value);
//         let after = before.next; // this is the current next in the list

//         console.log({before, current, after})
 
//         if (current !== null) {
//             before.next = current;
//             current.prev = before;
//             current.next = after;
//             after.prev = current;
//         }

//         this.length++;
//         return true;
//     }

//     remove(index) {
//         if (index < 0 || index >= this.length) return null;
//         if (index === 0) return this.shift()
//         if (index === this.length - 1) return this.pop();

//         let target = this.get(index);
//         let before = target.prev;
//         let after = target.next;

//         if (target !== null) {
//             before.next = after, after.prev = before; // combining these conditions
//             target.next = null, target.prev = null;
//         }
//         this.length--;
//         return true;
//     }

//     print() {
//         let arr = [];
//         let current = this.head;
//         while (current) {
//             arr.push(current.val);
//             current = current.next;
//         }
//         console.log(arr);
//     }
// }

// const dLL = new DoublyLinkedList();
// dLL.push(1)
// dLL.push(8)
// dLL.push(3)

// // dLL.get(3)
// dLL.insert(1, 10)
// dLL.print()
// dLL.remove(4)
// dLL.print()

class Node {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
            this.length++;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            this.length++;
         }
        return this;
    }
    pop() {
        if (!this.length) {
            return undefined;
        }
        const current = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            current.prev = null;
        }
        this.length--;
        return current;
    }
    get(index) {
        let current = this.head;
        let count = 0;
        
        while (count < index) {
            current = current.next;
            count++;
        }
        
        return current;
    }
    unshift(val) {
        const newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let current = this.head;
            current.prev = newNode;
            newNode.next = current;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    insert(index, value){
        if (index < 0 || index > this.length) return false;
        
        if (index === 0 ) {
            return !!this.unshift(value);
        }
        if (index === this.length) {
            return !!this.push(value);
        }
        
        let after = this.get(index);
        const newNode = new Node(value);
        
        if (after) {
            let before = after.prev;
            before.next = newNode, after.before = newNode;
            newNode.prev = before, newNode.next = after 
            
            this.length++;
            
            return true
        }
        
        return false
    }
    remove(index){
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let target = this.get(index);
        let before = target.prev;
        let after = target.next;

        if (target !== null) {
            before.next = after, after.prev = before; // combining these conditions
            target.next = null, target.prev = null;
        }
        this.length--;
        return target;
    }
}
var doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20);
doublyLinkedList.insert(2,12); // true
doublyLinkedList.insert(100,12); // false
doublyLinkedList.length // 5
doublyLinkedList.head.val // 5
doublyLinkedList.head.next.val // 10
doublyLinkedList.head.next.next.val // 12
doublyLinkedList.head.next.next.next.val // 15
doublyLinkedList.head.next.next.next.next.val // 20
 
var doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20);
console.log(doublyLinkedList.remove(2))
console.log(doublyLinkedList.remove(2).val); // 15
doublyLinkedList.remove(100); // undefined
doublyLinkedList.length // 3
doublyLinkedList.head.val // 5
doublyLinkedList.head.next.val // 10
doublyLinkedList.head.next.next.val // 20
