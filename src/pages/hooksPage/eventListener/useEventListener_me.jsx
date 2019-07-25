import React, {useEffect} from 'react';

function useEventListener(refEl,event,eventFun,purple=false) {
    useEffect(function () {
        const el = refEl.current;
        if(!el){
            return;
        }
        el.addEventListener(event,eventFun,purple);
        return () => {
            el.removeEventListener(event,eventFun);
        };

    },[]);
}
export default useEventListener;


