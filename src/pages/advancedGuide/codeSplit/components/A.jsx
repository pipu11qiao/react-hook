import React, {
    useState,
    useEffect
} from 'react';

export default function A() {
    var [a, setA] = useState('');
    useEffect(() => {
        setA('init A');
    }, []);
    return (
        <div>
            <p>{a}</p>
        </div>
    );
};
