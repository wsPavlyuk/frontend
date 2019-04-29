import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';

import { userCreate } from '../actions'
import { CardStyle } from '../variables';

class Registration extends React.Component{

    submitForm(event) {
        event.preventDefault();
        var data = new FormData(event.target);
        data = JSON.stringify({
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password')
        });
        userCreate(data);
    }

    render(){
        return (
            <div style={CardStyle}>
              <Form onSubmit={this.submitForm}>
                <FormGroup>
                  <Label for="Name">Name</Label>
                  <Input
                    type="name"
                    name="name"
                    id="Name"
                    placeholder="Enter your name"
                  />
                </FormGroup>
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
                      Sign up
                    </Button>
                  </div>
                </FormGroup>
              </Form>
            </div>
          );
    }
}

export default connect(null, { userCreate })(Registration);