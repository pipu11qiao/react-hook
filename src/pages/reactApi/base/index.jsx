import React, { useEffect } from 'react';

function checkIsReactElement(el) {
    const isReactElement = React.isValidElement(el);
    if (isReactElement) {
        console.log('是');
    } else {
        console.log('不是');
    }
    console.log(el);
}
function A() {
    return (<div>A</div>);
}
A.displayName = 'aaa';

function Page() {
    useEffect(() => {
        checkIsReactElement({});
        checkIsReactElement(<span>aaa</span>);
        checkIsReactElement(<A />);
    }, []);
    return (
        <div>page</div>
    );
}

export default Page;
