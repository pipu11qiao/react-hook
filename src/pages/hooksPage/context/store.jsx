import React, { createContext } from 'react';

export const Context = createContext({});

export const BaseProvider = function (props) {
    return (
        <Context.Provider value={props.value}>
            {props.children}
        </Context.Provider>
    );
};

export const reducer = function (state, action) {
    switch (action.type) {
    case 'add':
        return { num: state.num + 1 };
    case 'minus':
        return { num: state.num - 1 };
    case 'addSome':
        return { num: state.num + (action.num || 1) };
    case 'minusSome':
        return { num: state.num - (action.num || 1) };
    default:
        throw new Error();
    }
};


export default {
    Context,
    BaseProvider,
    reducer
};
