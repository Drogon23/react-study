import React from 'react';
import useCounter from "./useCounter";


const Counter = () => {
    const [state, dispatch] = useCounter({value: 0});

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b>입니다.
            </p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}> +1</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}> -1</button>
        </div>
    );
};

export default Counter;