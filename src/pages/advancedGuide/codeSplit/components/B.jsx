import React, {
    useState,
    useEffect
} from 'react';

export default function A() {
    var [a, setA] = useState('');
    useEffect(() => {
        setA('init B');
    }, []);
    return (
        <div>
            <p>{a}</p>
        </div>
    );
}
