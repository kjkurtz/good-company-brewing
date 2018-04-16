import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react'
import ( fire, auth, provider } from './fire'

class Login extends Component {

toggleSignIn = () => {
  if (fire.auth().currentUser) {
    fire.auth().signOut();
  } else {
    var email = 
  }
}

  render() {
    return (
      <div>
        <Form>
          <label>Email</label>
          <Input type='email' />
          <label>Enter Password</label>
          <Input type='password' />
        </Form>
      </div>
    );
  }
}

export default Login;