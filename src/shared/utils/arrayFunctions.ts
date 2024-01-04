export const reverseArraySinceKey = (items: number[], index: number) => {
    return items.slice(index).concat(items.slice(0, index))
};

