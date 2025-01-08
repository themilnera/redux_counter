export const increment = () => {
    return{
        type: 'INCREMENT'
    };
};

export const decrement = () => {
    return{
        type: 'DECREMENT'
    };
};

export const incrementFive = () => {
    return{
        type: 'INCREMENTFIVE'
    }; 
}

export const decrementFive = () => {
    return{
        type: 'DECREMENTFIVE'
    }; 
}

export const resetCounter = () => {
    return{
        type: 'RESETCOUNTER'
    };
}