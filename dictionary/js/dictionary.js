class Dictionary {


    constructor() {
        this.items = {};
    }
    has(key) {
        return this.items.hasOwnProperty(key)
    }
    set(key, value) {
        this.items[key] = value
    }
    delete(key) {
        if (this.has(key)) {
            delete this.items[key]
            return true
        }
        return false
    }
    get(key) {
        return this.has(key) ? this.items[key] : undefined
    }
    values() {
        let values = [];
        for (const key in this.items) {
            if (this.has(key)) {
                values.push(this.items[key]);

            }
        }
        return values
    }

    size() {
        return Object.keys(this.items).length;
    }

    clear() {
        this.table = {};
    }
    keys() {
        return Object.keys(this.items)
    }
    getItems() {
        return this.items
    }
}

let dictionary = new Dictionary();
dictionary.set('aaaya', '111111')
dictionary.set('xiaoming', '22222')
dictionary.set('xiaohong', '3333')
console.log(dictionary.has('aaaya'));
console.log(dictionary.size());
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('xiaoming'));
dictionary.delete('xiaoming', '3333')

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.keys());
console.log(dictionary.getItems());
