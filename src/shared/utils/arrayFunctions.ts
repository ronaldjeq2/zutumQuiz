/* eslint-disable @typescript-eslint/no-explicit-any */
export const reverseArraySinceKey = (items: number[], index: number) => {
    return items.slice(index).concat(items.slice(0, index))
};

export function arraysHaveTheSameLength<T>(...items: T[][]): boolean {
    return items.every(item => item.length === items[0].length);
}

export const arrayItemsAreMajorToZero = (items: any[]) => {
    return items.every(item => +item > 0);
};

export const arraysLengthsAreIqualOrMajorTo = (numberToPass: number, ...items: any[]) => {
    return items.every(item => item.length >= numberToPass);
};