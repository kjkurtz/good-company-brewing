import React from 'react';

import withAuthorization from './withAuthorization';

const HomePage = () =>
  <div>
    <h1>Home</h1>
    <p>The Home PAge is accessible to every signed in user.</p>
  </div>

const authCondition = (authUser) => !authUser;

export default withAuthorization(authCondition)(HomePage);