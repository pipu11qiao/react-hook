import React, {
    Component, Suspense, lazy
} from 'react';
import { Provider } from 'store';

const A = lazy(() => import(/* aaa.js */'./components/A'));
const B = lazy(() => import(/* bbb.js */'./components/B'));

@Provider
class CodeSplit extends Component {
    onClick = () => {
        this.props.setStore({
            page: 30,
            pname: 'aaaa',
        });
    }

    render() {
        return (
            <div>
                <h1>code split</h1>
                <button type="button" onClick={this.onClick}>click</button>
                <p>{this.props.page}</p>
                <p>{this.props.pname}</p>
                <Suspense fallback={<div>Loading...</div>}>
                    <A />
                    <B />
                </Suspense>
            </div>
        );
    }
}


export default CodeSplit;
