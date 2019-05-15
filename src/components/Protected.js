import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './Navigation';
import DisplayWeather from './DisplayWeather';
import History from './History';
import Profile from './Profile';
import { checkLogin } from '../actions/auth.thunk';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import history from '../history';

class Protected extends React.Component {
    state = {
        isLoggedIn: false
    }

    componentDidMount() {
      if (localStorage.getItem('token')) {

        this.props.checkLogin()
            .then(() => {
                console.log('Good');
                this.setState({
                    isLoggedIn: true
                })
            })
            .catch(() => {
              console.log('Bad')
                // redirect to login (browserhistoty)
              history.push('/login');   
            })
      } else {
        alert(`${this.props.error}`);
        history.push('/login');
      }
    }

    render() {

        if (!this.state.isLoggedIn) return null;

        return (
          <React.Fragment>
            <Navigation />
            <Switch>
              <Route path="/weather" exact component={DisplayWeather} />
              <Route
                path="/history"
                exact
                component={ History }
              />
              <Route path="/profile" exact component={Profile} />
            </Switch>
          </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
  // console.log(state.login);
  return { 
    token: state.login.token,
    error: state.login.error
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ 
    checkLogin
  }, dispatch)
}


export default connect (mapStateToProps, mapDispatchToProps)(Protected);