import React, { useReducer, useContext } from 'react';
// import classNames from 'classnames';
// import PropTypes from 'prop-types';
//
import { Context, reducer, BaseProvider } from './store';


const C1 = () => {
    const { state, dispatch } = useContext(Context);
    const { num } = state;
    return (
        <div>
            <p>C2 -5</p>
            <button type="button" onClick={() => { dispatch({ type: 'minusSome', num: 5 }) }}>-5</button>
            <p>{num}</p>
        </div>
    );
};
const C2 = () => {
    const { state, dispatch } = useContext(Context);
    const { num } = state;
    return (
        <div>
            <p>C2 +5</p>
            <button type="button" onClick={() => { dispatch({ type: 'addSome', num: 5 }) }}>+5</button>
            <p>{num}</p>
        </div>
    );
};

const Page = function () {
    const [state, dispatch] = useReducer(reducer, { num: 0 });
    const { num } = state;
    const value = { state, dispatch };
    console.log(state);
    return (
        <div style={{ fontSize: '20px' }}>
            <BaseProvider value={value}>
                <button type="button" onClick={() => { dispatch({ type: 'add' }) }}>+</button>
                <button type="button" onClick={() => { dispatch({ type: 'minus' }) }}>-</button>
                {num}
                <C1 />
                <C2 />
            </BaseProvider>
        </div>
    );
};
export default Page;
