import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Todos from './todo/todos';

const Routes = (props) => (
    <BrowserRouter>
        <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home" component={Todos} />
        </Switch>
    </BrowserRouter>
);

export default Routes;