import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DisplayWeather from './DisplayWeather';
// import checkLogin from '../actions';

class Protected extends React.Component {
    state = {
        isLoggedIn: false
    }

    // componentDidMount() {
    //     checkLogin(state.user.token)
    //         .then(() => {
    //             this.setState({
    //                 isLoggedIn: true
    //             })
    //         })
    //         .catch(() => {
    //             // redirect to login (browserhistoty)
    //         })
    // }

    render() {

        if (!this.state.isLoggedIn) return null;

        return (
          <Switch>
            <Route path="/weather" exact component={DisplayWeather} />
            <Route path="/history" exact component={() => 'history'} />
            <Route path="/profile" exact component={() => 'profile'} />
          </Switch>
        );
    }
}


export default Protected;