import React, {
    Component,Suspense,lazy
} from 'react';

const A = lazy(() => import(/*aaa.js*/'./components/A'));
const B = lazy(() => import(/*bbb.js*/'./components/B'));


class CodeSplit extends Component {
    render() {
        return (
            <div>
                <h1>code split</h1>
                <Suspense fallback={<div>Loading...</div>}>
                    <A></A>
                    <B></B>
                </Suspense>
            </div>
        );
    }
};


export default CodeSplit;
