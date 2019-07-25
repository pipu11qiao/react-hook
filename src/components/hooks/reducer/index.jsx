import React, {useReducer} from 'react';

const initState = {count: 1};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                count: state.count + 1
            };
        case 'decrement':
            return {
                count: state.count - 1
            };
        default:
            return new Error('action is need');

    }
};

export default function ReducerNode() {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <div>
            <p>{state.count}</p>
            <button onClick={() => {
                dispatch({type: 'increment'})
            }}>+
            </button>
            <button onClick={() => {
                dispatch({type: 'decrement'})
            }}>-
            </button>
        </div>
    )
}