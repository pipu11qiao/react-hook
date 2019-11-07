import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import './basic.scss';

import hooksPage from './pages/hooksPage/index';
import errorPage from './pages/errorPage/index';
import advancePage from './pages/advancedGuide/index';
import routePage from './pages/routePage/index';
import apiPage from './pages/reactApi/index';
import sourcePage from './pages/reactSource/index';

const redirectPath = 'error'; // error hooks advance route api source
ReactDOM.render(
    <Router>
        <Redirect from="/" to={`/${redirectPath}`} />
        <Route path="/hooks" component={hooksPage} />
        <Route path="/error" component={errorPage} />
        <Route path="/advance" component={advancePage} />
        <Route path="/route" component={routePage} />
        <Route path="/api" component={apiPage} />
        <Route path="/source" component={sourcePage} />
    </Router>,
    document.getElementById('root')
);
