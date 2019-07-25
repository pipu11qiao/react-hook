import React, {useState, useEffect} from 'react';

function Example() {
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate;
    useEffect(() => {
        document.title = `You clicked ${count} times`;
        // setCount(count + 1);
    });

    return (
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )

}

export default Example;
