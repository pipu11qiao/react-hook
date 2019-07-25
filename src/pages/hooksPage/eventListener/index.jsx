import React, {useState,useCallback} from 'react';
import useEventListener from './useEventListener';
function Page() {
    const [coords,setCoords] = useState({x: 0,y:0});

    const handler = useCallback(
        ({clientX,clientY}) => {
            setCoords({x: clientX,y: clientY});
        }
    );
    useEventListener('mousemove',handler);
    return (
        <h4>
            The mouse position is ({coords.x},{coords.y})
        </h4>
    );
}
export default Page;
