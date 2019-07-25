import React, {Component} from 'react';
import NavBox from 'components/navBox';
import RouteBox from 'components/routeBox';
import { getChildRoutePath } from 'components/util';


import eventListenerPage from  './eventListener/index';
import darkModePage from  './darkMode/index';

export default class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navList: [{
                path: getChildRoutePath(props,'eventListener'),
                component: eventListenerPage,
            },
            {
                path: getChildRoutePath(props,'darkMode'),
                component: darkModePage,
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