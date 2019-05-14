import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DisplayWeather from './DisplayWeather';
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
          <Switch>
            <Route path="/weather" exact component={DisplayWeather} />
            <Route path="/history" exact component={() => 'history'} />
            <Route path="/profile" exact component={() => 'profile'} />
          </Switch>
        );
    }
}

const mapStateToProps = (state) => {
  console.log(state.login);
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


export default connect (mapStateToProps, mapDispatchToProps) (Protected);