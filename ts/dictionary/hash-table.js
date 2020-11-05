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
        console.log(position + '-' + key);
        this.table[position] = value

    }
    remove(key) {
        this.table[this.loseloseHashCode(key)] = undefined;
    }
    get(key) {
        return this.table[this.loseloseHashCode(key)]
    }
}
// let hash = new HashTable();
// hash.put('aaaya', '111111')
// hash.put('xiaoming', '22222')
// hash.put('xiaohong', '3333')
// window.hash = hash
// console.log(hash.get('aaaya'));
// console.log(hash.get('xiaohong'));


