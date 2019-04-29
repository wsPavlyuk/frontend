import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { CardStyle } from '../variables';

class LogIn extends React.Component{
    submitForm(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data.get('password'));
        console.log(data.get('email'));
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

export default LogIn;