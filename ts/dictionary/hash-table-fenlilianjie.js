import LinkedList from '../linkedList/linked-list';
export default class HashTable {
    constructor() {
        this.table = []
    }


    loseloseHashCode(key) {
        let hash = 0;
        for (let index = 0; index < key.length; index++) {
            hash += key.charCodeAt(index)
        }
        return hash % 66
    }
    put(key, value) {
        let position = this.loseloseHashCode(key)
        if (this.table[position] === undefined) {
            this.table[position] = new LinkedList()
        }
        this.table[position].append(new ValuePair(key, value))

    }
    remove(key) {
        let position = this.loseloseHashCode(key)
        if (this.table[position] !== undefined) {
            let current = this.table[position].getHead();
            while (current.count) {
                if (current.element.key === key) {
                    this.table[position].remove(current.element)
                    if (this.table[position].isEmpty()) {
                        this.table[position] = undefined
                    }
                    return true
                }
                current = current.next
            }
        }
        return false
    }
    get(key) {
        let position = this.loseloseHashCode(key)
        if (this.table[position] !== undefined) {
            let current = this.table[position].getHead();
            while (current.count) {
                if (current.element.key === key) {
                    return current.element.value
                }
                current = current.next
            }
        }
        return undefined
    }

}
class ValuePair {
    constructor(key, value) {
        this.key = key
        this.value = value
    }
    toString() {
        return `[#${this.key}: ${this.value}]`
    }
}