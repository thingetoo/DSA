function hash(key, arrayLen) { // works for strings only
    let total = 0;
    for (let char of key) {
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
}

function improvedHash(key, arrayLen) {
    let total = 0;
    let prime = 32;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * value + prime) % arrayLen;
    }

    return total;
}

class HashTable {
    constructor(size=57) {
        this.keyMap = new Array(size);
    }

    set(key, value) {
        const index = this._hash(key);

        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }

        this.keyMap[index].push([key, value]);
    }

    get(key) {
        const index = this._hash(key);

        const position = this.keyMap[index];

        if (!position) return undefined;

        for (let i = 0; i < position.length; i++) {
            let element = position[i];

            if (element[0] === key) {
                return element[1];
            }
        }

        return undefined;
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        console.log(total)
        return total;
    }

    keys() {
        const keysArr = []
        
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    keysArr.push(this.keyMap[i][j][0])
                }
            }
        }

        return keysArr
    }

    values() {
        const valuesArr = []
        
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    valuesArr.push(this.keyMap[i][j][1])
                }
            }
        }

        return valuesArr
    }
}

const ht = new HashTable(57);
ht.set('egg', 'sandwich')
ht.set('creme', 'brulee')
ht.set('chocolate', 'chip');
ht.set('maroon', 'chipm');
ht.set('yellow', 'chipy');

console.log(ht.values())


