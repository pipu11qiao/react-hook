import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import './basic.scss';

import hooksPage from './pages/hooksPage/index';
import errorPage from './pages/errorPage/index';
import advancePage from './pages/advancedGuide/index';
import routePage from './pages/routePage/index';
import apiPage from './pages/reactApi/index';

const redirectPath = 'api'; // error hooks advance route api
ReactDOM.render(
    <Router>
        <Redirect from="/" to={`/${redirectPath}`} />
        <Route path="/hooks" component={hooksPage} />
        <Route path="/error" component={errorPage} />
        <Route path="/advance" component={advancePage} />
        <Route path="/route" component={routePage} />
        <Route path="/api" component={apiPage} />
    </Router>,
    document.getElementById('root')
);
