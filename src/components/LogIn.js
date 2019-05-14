import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login } from '../actions/auth.thunk';

import { CardStyle } from '../variables';

import history from '../history';
// import { userAccess } from '../actions';

class LogIn extends React.Component{
    submitForm = (event) => {
        event.preventDefault();
        var data = new FormData(event.target);
        data = {
          email: data.get('email'),
          password: data.get('password')
      };

      this.props.login(data);
      
    }

    componentDidMount() {
      localStorage.clear();
    }

    componentDidUpdate() {
      if (!this.props.token) {
        alert(`${this.props.error}`);
      } else {
        //Save token and email in Local Storage
        localStorage.setItem('token', this.props.token);
        localStorage.setItem('email', this.props.email);
        history.push('/weather');
      }
    }
    
    render() {
        return (
          <div style={CardStyle}>
            <h2 style={{ textAlign: "center" }}>
              Do you want to know the weather? :)
            </h2>
            <Form onSubmit={this.submitForm}>
              <FormGroup>
                <Label for="Email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="Email"
                  placeholder="Enter your email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="Password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="Password"
                  placeholder="Enter your password"
                />
              </FormGroup>

              <FormGroup>
                <div className="ui secondary  menu">
                  <Button
                    type="submit"
                    color="primary"
                    size="lg"
                  >
                    Sign in
                  </Button>
                </div>
              </FormGroup>
            </Form>
            <div className="right menu">
              <Link to="/register" className="item">
                Sign up
              </Link>
            </div>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { 
    token: state.login.token,
    email: state.login.email,
    error: state.login.error
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ 
    login
  }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(LogIn);