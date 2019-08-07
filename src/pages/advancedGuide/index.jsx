import React, { Component } from 'react';
import NavBox from 'components/navBox';
import RouteBox from 'components/routeBox';
import { getChildRoutePath } from 'components/util';
import { Provider } from 'store';

import CodeSplitPage from './codeSplit';
import ContextPage from './context';
import OrderComponentPage from './orderComponent';
import fxDemoPage from './fxDemo';
import forwardRefPage from './forwardRef';

@Provider
class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navList: [
                {
                    path: getChildRoutePath(props, 'codeSplit'),
                    component: CodeSplitPage,
                },
                {
                    path: getChildRoutePath(props, 'context'),
                    component: ContextPage,
                },
                {
                    path: getChildRoutePath(props, 'orderComponent'),
                    component: OrderComponentPage,
                },
                {
                    path: getChildRoutePath(props, 'fxDemo'),
                    component: fxDemoPage,
                },
                {
                    path: getChildRoutePath(props, 'forwardRef'),
                    component: forwardRefPage,
                },
            ]
        };
    }

    render() {
        // console.log('provider1', this.props);
        const {
            navList
        } = this.state;
        return (
            <div>
                <h5>errorPageIndex</h5>
                <NavBox navList={navList} />
                <RouteBox routeList={navList} />
            </div>

        );
    }
}

export default Page;
