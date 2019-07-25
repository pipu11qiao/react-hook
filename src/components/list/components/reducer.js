import React from 'react';

export const Context = React.createContext(null);

export function reducer(state, action) {
    const {list} = state;
    const {type, id, num} = action;
    switch (type) {
        case 'changeCount':
            list.forEach((item) => {
                if (id) {
                    if (item.id === id) {
                        item.count += num
                    }
                } else {
                    item.count += num
                }
            });
            return {
                ...state,
                list,
            };
        case 'addCounter':
            list.push(action.counter);
            return {
                ...state,
                list,
            };
        case 'removeCounter':
            list.splice(list.findIndex(item => item.id === id), 1);
            return {
                ...state,
                list,
            };

        default:
            throw new Error("don't match");
    }
};
