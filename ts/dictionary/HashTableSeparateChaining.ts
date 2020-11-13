import { ValuePair } from './../models/value-pair';
import LinkedList from '../linkedList/linked-list';
import { defaultToString } from '../util';
export default class HashTableSeparateChaining<K, V>{
    protected table: { [key: string]: LinkedList<ValuePair<K, V>> }
    constructor(protected toStrFn: (key: K) => string = defaultToString) {
        this.table = {}
    }
}