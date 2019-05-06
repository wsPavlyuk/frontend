import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Registration from './Registration';
import LogIn from './LogIn';
import Protected from './Protected';

const App = () => {
    return (
      <div className="ui container">
        <Router history={ history }>
          <div>
            <Switch>
              <Route path="/login" exact component={LogIn} />
              <Route path="/register" exact component={Registration} />
              <Route path="/" component={Protected} />
            </Switch>
          </div>
        </Router>
      </div>
    );
};

export default App;