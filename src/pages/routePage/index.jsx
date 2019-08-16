import React, { Component } from 'react';
import NavBox from 'components/navBox';
import RouteBox from 'components/routeBox';
import { getChildRoutePath } from 'components/util';


import routeWithPropsPage from './routeWithProps';

export default class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navList: [
                {
                    path: getChildRoutePath(props, 'routeWithProps'),
                    component: routeWithPropsPage,
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
                <h5>routePageIndex</h5>
                <NavBox navList={navList} />
                <RouteBox routeList={navList} />
            </div>

        );
    }
}
