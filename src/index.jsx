import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route,Redirect} from 'react-router-dom';
import './basic.scss';

import hooksPage from './pages/hooksPage/index';
import errorPage from './pages/errorPage/index';
import advancePage from './pages/advancedGuide/index';

const redirectPath = 'advance'; // error hooks advance
ReactDOM.render(
    <Router>
        <Redirect from="/" to={`/${redirectPath}`} />
        <Route path="/hooks" component={hooksPage}/>
        <Route path="/error" component={errorPage}/>
        <Route path="/advance" component={advancePage}/>
    </Router>
    , document.getElementById('root')
);
