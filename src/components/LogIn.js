import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { CardStyle } from '../variables';

import { userAccess } from '../actions';

class LogIn extends React.Component{
    submitForm(event) {
        event.preventDefault();
        var data = new FormData(event.target);
        data = {
          email: data.get('email'),
          password: data.get('password')
      };
      userAccess(data).then((response) => console.log(response));
    }
    
    render(){
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
              <Link to="/user/create" className="item">
                Sign up
              </Link>
            </div>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
  return { token: state.user };
};

export default connect (mapStateToProps, { userAccess })(LogIn);