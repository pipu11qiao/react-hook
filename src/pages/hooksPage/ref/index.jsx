import React, { useState, useRef } from 'react';

const Page = function () {
    console.log('run once');
    const [num, setNum] = useState(0);
    const init = useRef(false);
    if (!init.current) {
        init.current = true;
        console.log('init');
    }

    return (
        <div>
            <p>{num}</p>

            <button
                type="button"
                className="test-btn"
                onClick={() => {
                    setNum(num + 1);
                }}
            >
btn
            </button>
        </div>
    );
};
export default Page;
