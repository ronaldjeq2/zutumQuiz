export const convertStringToArrayNumbers = (items: string) => {
    return items.split(',').map(item => +item)
};

