import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//page
import Login from '../page/Login';
import Dashboard from '../page/Dashboard';

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/dashboard' component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;