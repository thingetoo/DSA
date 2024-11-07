const BinarySearchTree = require("./BST");

BinarySearchTree.DFSPreOrder = {
    function() {
        if (!this.root) return null;

        const data = [];
        let current = this.root;
        function traverse(node) {
            data.push(node.value);

            if (node.left) {
                traverse(node.left)
            }

            if (node.right) {
                traverse(node.right)
            }
        }
        traverse(current);
        return data;
    }
}
BinarySearchTree.DFSPostOrder = {
    function() {
        if (!this.root) return null;

        const data = [];
        let current = this.root;
        function traverse(node) {
            
            if (node.left) {
                traverse(node.left)
            }

            data.push(node.value);

            
            if (node.right) {
                traverse(node.right)
            }
        }
        traverse(current);
        return data;
    }
}

BinarySearchTree.DFSPostOrder = {
    function() {
        if (!this.root) return null;

        const data = [];
        let current = this.root;
        function traverse(node) {
            
            if (node.left) {
                traverse(node.left)
            }
            
            if (node.right) {
                traverse(node.right)
            }
            data.push(node.value);
        }
        traverse(current);
        return data;
    }
}



const tree = new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20);

console.log(tree.DFSPreOrder())