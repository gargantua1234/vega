import React from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => (
    <>
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact />
            </Switch>
        </Router>
    </>
);

export default App;
