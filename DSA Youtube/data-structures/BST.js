class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }
        
        let current = this.root;
        console.log
        while(current) {
            if (value < current.value) {
                console.log('here')
                if (current.left === null) {
                    current.left = newNode
                    return this;
                } 
                    current = current.left;                
            } else {
                if (current.right === null) {
                    current.right = newNode
                    return this;
                }
                current = current.right;
            }
        }
        return this;
    }

    search(value) {
        if (this.root === null) return false;
        
        let current = this.root;

        while (current) {
            if (current.value === value) {
                return current;
            } else {
                if (value < current.value) {
                    current = current.left;
                } else {
                    current = current.right;
                }
            }
        }
        return undefined;
    }
}

const tree = new BinarySearchTree();
tree.insert(1)
tree.insert(3)
tree.insert(0)
tree.insert(-1)
console.log(tree)

console.log(tree.search(100))

module.exports = BinarySearchTree;