import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Todos from './todo/todos';
import TodosDetails from "./todo/todosDetails";

const Routes = (props) => (
    <BrowserRouter>
        <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home" component={Todos} />
            <Route exact path="/details/:id" component={TodosDetails} />
        </Switch>
    </BrowserRouter>
);

export default Routes;