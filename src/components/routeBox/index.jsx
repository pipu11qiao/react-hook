
import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import './style.scss';
/**
 * navArr[{path: 'a/b/c',component:A}]
 */

export default function NavBox(props) {
    return (
        <div className="route-box-page">
            <Router>
                {
                    props.routeList.map((route,index)=> (<Route
                        exact
                        key={`route-${index}`}
                        path={route.path}
                        component={route.component} />
                    ))
                }
            </Router>
        </div>
    );
};
