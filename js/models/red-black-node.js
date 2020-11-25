import { Node } from './node';
export var Colors;
(function (Colors) {
    Colors[Colors["RED"] = 0] = "RED";
    Colors[Colors["BLACK"] = 1] = "BLACK";
})(Colors || (Colors = {}));
export class RedBlackNode extends Node {
    constructor(key) {
        super(key);
        this.key = key;
        this.color = Colors.RED;
    }
    isRed() {
        return this.color === Colors.RED;
    }
}
