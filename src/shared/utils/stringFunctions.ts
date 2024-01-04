export const convertStringToArrayNumbers = (items: string) => {
    return items.split(',').map(item => +item)
};

export const convertStringToArray = (items: string) => {
    if(items.length>0){
        return items.split(',')
    }
    return []
};
