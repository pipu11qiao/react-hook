import React, {useContext, useState} from 'react';

import {Context} from './reducer';

import './couter.scss';

export default function (props) {
    const {dispatch} = useContext(Context);
    const {item} = props;
    const [count, setCount] = useState(0);

    function changeCount(num) {
        setCount(count + 1);
        dispatch({
            type: 'changeCount',
            num,
            id: item.id
        });
    }

    return (
        <div className="counter-outer">
            <div className="counter-box">
            <span
                className="counter-btn left"
                onClick={() => {
                    changeCount(1)
                }}
            >+</span>
                <span className="count-item">{item.count}</span>
                <span
                    className="counter-btn right"
                    onClick={() => {
                        changeCount(-1)
                    }}
                >-</span>
            </div>
            <div
                className="btn"
                onClick={()=>{
                    dispatch({
                        type: 'removeCounter',
                        id: item.id
                    })
                }}
            >X</div>
            <div className="all-count">点击次数{count}</div>
        </div>
    )
};
