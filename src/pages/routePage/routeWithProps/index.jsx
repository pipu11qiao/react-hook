import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import NavBox from 'components/navBox';
import { getChildRoutePath } from 'components/util';
import './style.scss';

const A = (props) => (
    <div>
        <div>A</div>
        <button type="button" onClick={() => { props.callback('A') }}>点击</button>
    </div>
);
const B = (props) => (
    <div>
        <div>B</div>
        <button type="button" onClick={() => { props.callback('B') }}>点击</button>
    </div>
);
const C = (props) => (
    <div>
        <div>C</div>
        <button type="button" onClick={() => { props.callback('C') }}>点击</button>
    </div>
);
export default class RouteWithProps extends Component {
    constructor(props) {
        super(props);

        this.onBtnClick = this.onBtnClick.bind(this);
        const CallbackRoute = ({ component: WrappedComponent, ...rest }) => (
            <Route
                {...rest}
                render={routeProps => (
                    <WrappedComponent {...routeProps} callback={this.onBtnClick} />
                )}
            />
        );
        this.state = {
            CallbackRoute
        };
    }

    onBtnClick(info) {
        console.log(info);
    }

    render() {
        const { props } = this;
        const { match } = props;
        const { path } = match;
        const navList = [
            {
                path: getChildRoutePath(props, 'a'),
            },
            {
                path: getChildRoutePath(props, 'b'),
            },
            {
                path: getChildRoutePath(props, 'c'),
            },
        ];
        const { CallbackRoute } = this.state;
        console.log(props);
        return (
            <div id="route_with_prps_page">
                <div className="left">
                    <NavBox navList={navList} />
                </div>

                <div className="right">
                    <Router>
                        <Redirect from="/" to={`${path}/a`} />
                        <CallbackRoute path={`${path}/a`} component={A} />
                        <CallbackRoute path={`${path}/b`} component={B} />
                        <CallbackRoute path={`${path}/c`} component={C} />
                    </Router>
                </div>

            </div>
        );
    }
}
