// 等于 函数
export type IEqualsFunction<T> = (a: T, b: T) => boolean;
// 等于 函数
export function defaultEquals<T>(a: T, b: T): boolean {
    return a === b;
}

export function defaultToString(item: any): string {
    if (item === null) {
        return 'NUll'
    } else if (item === undefined) {
        return 'UNDEFINED'
    } else if (typeof item === 'string' || item instanceof String) {
        return `${item}`
    }
    return item.toString();
}
export enum Compare {
    LESS_THAN = -1,
    BIGGER_THAN = 1,
    EQUALS = 0
}
export function defaultCompare<T>(a: T, b: T): number {
    if (a === b) {
        return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
export type ICompareFunction<T> = (a: T, b: T) => number;
