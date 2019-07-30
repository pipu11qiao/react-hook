import React, { createContext } from 'react';

const BaseContext = createContext();

const BaseProvider = function (props) {
    return (
        <BaseContext.Provider value="data">
            {props.children}
        </BaseContext.Provider>
    );
};


export default BaseProvider;
