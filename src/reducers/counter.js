//state = 0 is the default state, it will not reset it each time
//this is because js is weird

const counterReducer = (state = 0, action) =>{
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'INCREMENTFIVE':
            return state + 5;
        case 'DECREMENTFIVE':
            return state - 5;
        case 'RESETCOUNTER':
            return 0;
        default:
            return state;
    }
}

export default counterReducer;