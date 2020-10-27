import Stack from './stack-class';
export default function baseConverter(decNumber: number, base: number) {
    const remStack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let rem: number;
    let baseString = '';
    if (base < 2 || base > 36) {
        return ''
    }
    while (decNumber > 0) {
        remStack.push(Math.floor(decNumber % base))
        decNumber = Math.floor(decNumber / base);
    }
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }
    return baseString;
}

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 16));

console.log(baseConverter(10034535.343, 16));