// 等于 函数
export type IEqualsFunction<T> = (a: T, b: T) => boolean;
// 等于 函数
export function defaultEquals<T>(a: T, b: T): boolean {
    return a === b;
}