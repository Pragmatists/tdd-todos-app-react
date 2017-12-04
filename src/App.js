import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from "./todo/todos";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Todos todos={[
                    { 'id': 1, 'title': 'Clean up the fridge', 'completed': false },
                    { 'id': 2, 'title': 'quis ut nam facilis et officia qui', 'completed': false },
                    { 'id': 3, 'title': 'fugiat veniam minus', 'completed': false },
                ]}/>
            </div>
        );
    }
}

export default App;
