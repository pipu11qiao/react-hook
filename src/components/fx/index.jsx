import { createContext } from 'react';

import createConnect from './connect';
import createProvider from './provider';

const createStore = (store) => {
    const context = createContext();
    const Provider = createProvider(context.Provider, store);
    const Connect = createConnect(context.Consumer);
    return {
        Provider,
        Connect,
        Consumer: context.Consumer
    };
};

export default createStore;
