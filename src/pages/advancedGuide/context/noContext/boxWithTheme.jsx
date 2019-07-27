
import React from 'react';
import Btn from '../components/btnWithTheme';

const Comp = function (props) {
    return (
        <div>
            <p>btn:</p>
            <Btn theme={props.theme} />
        </div>
    );
};
export default Comp;
