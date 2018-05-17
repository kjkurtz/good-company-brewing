import React, { Component } from 'react';

import AuthUserContext from './AuthUserContext';

const AdminPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h1>Admin</h1>
        <p>Restricted Area</p>
      </div>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser && authUser.role === 'ADMIN';

export default withAuthorization(authCondition)(AdminPage);