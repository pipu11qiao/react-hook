import React, { Component } from 'react';
import NavBox from 'components/navBox';
import RouteBox from 'components/routeBox';
import { getChildRoutePath } from 'components/util';

import CodeSplitPage from './codeSplit';
import ContextPage from './context';
// import OrderComponentPage from './orderComponent';

export default class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navList: [
                {
                    path: getChildRoutePath(props,'codeSplit'),
                    component: CodeSplitPage,
                },
                {
                    path: getChildRoutePath(props,'context'),
                    component: ContextPage,
                },
                // {
                    // path: getChildRoutePath(props,'orderComponent'),
                    // component: OrderComponentPage,
                // },
            ]
        };
    }
    render() {
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
};
