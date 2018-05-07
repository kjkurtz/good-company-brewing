import React, { Component } from 'react';

import { auth } from '../firebase';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => {
        this.state(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });
  event.preventDefault();
}

render() {
  const {
    passwordOne,
    passwordTwo,
    error,
  } = this.state;

  const isInvalid = 
    passwordOne !== passwordTwo ||
    passwordOne === '';
  
  return (
    <form onSubmit={this.onSubmit}>
      <input
        value={passwordOne}
        onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
        type="password"
        placeholder="New Password"
      />
      <button disabled={isInvalid} type="submit">
        Reset My Password
      </button>

      { error && <p>{error.message}</p> }
    </form>
  );
}

export default PasswordChangeForm;