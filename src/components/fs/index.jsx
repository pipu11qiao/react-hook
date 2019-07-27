import { createContext } from 'react';

import createProvider from './provider';
import createConnect from './connect';

const Context = createContext();

const createStore = (store) => {
    const Provider = createProvider(Context.Provider, store);
    const Connect = createConnect(Context.Consumer);
    return {
        Provider,
        Connect,
        Consumer: Context.Consumer
    };
};

export default createStore;
