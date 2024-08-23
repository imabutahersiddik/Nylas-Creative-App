import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Compose from './pages/Compose';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App = () => {
    return (
        <Router>
            <Header />
            <div className="app-container">
                <Sidebar />
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/compose" component={Compose} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
