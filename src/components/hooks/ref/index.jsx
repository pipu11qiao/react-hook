import React, {useState, useRef} from 'react';

export default function FocusInput() {
    const inputEl = useRef(null);
    function clickFun() {
        const el = inputEl.current;
        console.log(el);
        el.focus();
    }
    return (
        <div>
            <input type="text" ref={inputEl}/>
            <button onClick={clickFun}>Focus the input</button>
        </div>
    )
}

