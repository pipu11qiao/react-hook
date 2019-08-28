import React, { Component } from 'react';
import NavBox from 'components/navBox';
import RouteBox from 'components/routeBox';
import { getChildRoutePath } from 'components/util';
import { Provider } from 'store';

import BasePage from './base';

@Provider
class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navList: [
                {
                    path: getChildRoutePath(props, 'base'),
                    component: BasePage,
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
                <h5>react api </h5>
                <NavBox navList={navList} />
                <RouteBox routeList={navList} />
            </div>

        );
    }
}

export default Page;
