// hook
/*eslint-disable*/
import { useRef, useEffect } from 'react';

function useEventListener(event, handler, element = global) {
    // 利用ref来随时保存当前的处理函数，来避免handler 发生变化的时候重新绑定事件。
    var saveHandler = useRef(null);
    useEffect(() => {
        saveHandler.current = handler;
        return () => {};
    }, [handler]);
    useEffect(() => {
        const eventSupport = element && element.addEventListener;
        if (!eventSupport) { return }
        const eventHandler = (evente) => saveHandler.current(evente);
        element.addEventListener(event, eventHandler, false);

        return () => {
            element.removeEventListener(event, eventHandler);
        };
    }, [event, element]);
}
export default useEventListener;
