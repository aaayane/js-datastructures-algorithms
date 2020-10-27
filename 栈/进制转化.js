import Stack from './stack-class.js';
function divideBy2(decNumber) {
    let remStack = new Stack(),
        binaryString = '';
    while (decNumber > 0) {
        remStack.push(Math.floor(decNumber % 2))
        decNumber = Math.floor(decNumber / 2);
    }
    while (!remStack.isEmpty()) {

        binaryString += remStack.pop().toString();
    }
    return binaryString;
}
console.log(divideBy2(233));
