import React, { Component } from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';


class Login extends Component {
  render() {
    return (
<AmplifySignOut /> 
    );
  }
}

export default withAuthenticator(Login);
