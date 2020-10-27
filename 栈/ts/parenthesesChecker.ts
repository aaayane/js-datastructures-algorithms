import Stack from './stack-class';
export function parenthesesChecker(symbols: string) {
    const stack = new Stack<string>();
    const opens = '([{';
    const closers = ')]}';
    let balanced = true;
    let index = 0;
    let symbol: string;
    let top: string;
    while (index < symbols.length && balanced) {
        symbol = symbols[index];
        
    }
}