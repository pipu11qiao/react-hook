import React, { Component } from 'react';
import NavBox from 'components/navBox';
import RouteBox from 'components/routeBox';
import { getChildRoutePath } from 'components/util';

import tryCatchPage from './tryCatch/index';
import onErrorPage from './onError/index';

export default class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navList: [{
                path: getChildRoutePath(props,'onError'),
                component: onErrorPage,
            },
            {
                path: getChildRoutePath(props,'tryCatch'),
                component: tryCatchPage,
            },
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
