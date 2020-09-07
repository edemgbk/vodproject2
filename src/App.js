import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Login from "./pages/Login";
import logo from './logo.svg';
import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { Switch, Route } from "react-router-dom";
import Main from "./pages";

Amplify.configure(awsconfig);
function App() {
  return (
    <div>
          {/* <AmplifySignOut /> */}
    <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        {/* <Route path="/test" component={test} /> */}

        {/* <Route path="/planform" component={Planform} />
        <Route path="/choose-plan" component={ChoosePlan} />
        <Route path="/choose-plan-steps" component={ChoosePlanSteps} />
        <Route path="/choose-plan-tabs" component={ChoosePlanTabs} /> */}
      </Switch>
  </div>
  );
}

export default App;
// export default withAuthenticator(App);
