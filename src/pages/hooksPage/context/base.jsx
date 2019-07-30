

import React, { useState, createContext, useContext } from 'react';
// import classNames from 'classnames';
// import PropTypes from 'prop-types';

const BaseContext = createContext(0);

const C1 = () => {
    const num = useContext(BaseContext);
    return (
        <div>
            <p>C1</p>
            <p>{num}</p>
        </div>
    );
};
const C2 = () => {
    const num = useContext(BaseContext);
    return (
        <div>
            <p>C2</p>
            <p>{num}</p>
        </div>
    );
};

const Page = function () {
    const [num, setNum] = useState(0);
    console.log(setNum);
    return (
        <div style={{ fontSize: '20px' }}>
            <BaseContext.Provider value={num}>
                <button type="button" onClick={() => { setNum(num + 1) }}>+</button>
                <button type="button" onClick={() => { setNum(num - 1) }}>-</button>
                {num}
                <C1 />
                <C2 />
            </BaseContext.Provider>
        </div>
    );
};
export default Page;
