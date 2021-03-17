import React from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {value: state.value + 1};
        case 'DECREMENT':
            return {value: state.value - 1};
        default:
            return state;
    }
}

export default function useCounter(initialObject) {
    const [state, dispatch] = React.useReducer(reducer, initialObject);
    return [state, dispatch];
}