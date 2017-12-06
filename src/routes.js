import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Todos from './todo/todos';
import TodosDetails from "./todo/todosDetails";
import TodosNew from "./todo/todosNew";

const Routes = (props) => (
    <BrowserRouter>
        <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home" component={Todos} />
            <Route exact path="/details/:id" component={TodosDetails} />
            <Route exact path="/new" component={TodosNew} />
        </Switch>
    </BrowserRouter>
);

export default Routes;