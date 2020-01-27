export const addToList = item => {
    return {
        type: 'ADD',
        payload: item
    }
}

export const removeFromList = item => {
    return {
        type: 'REMOVE',
        payload: item
    }
}