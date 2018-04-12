import React, { Component } from 'react';
import Button from 'material-ui/Button';

class Header extends Component {
  render() {
    return (
      <div>
        <Button>About</Button>
        <Button>Donate</Button>
        <Button>Beer</Button>
        <Button>Blog</Button>
        <Button>Login</Button>
      </div>
    );
  }
}

export default Header;