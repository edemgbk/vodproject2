import React from 'react';
import Login from "./pages/Login";
// import "./css/Main.css";

import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { Switch, Route } from "react-router-dom";
import Main from "./pages";
import Home from "./pages";

Amplify.configure(awsconfig);
function App() {
  return (
    <div>
    <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
          
        {/* <Route path="/login" component={test} /> */}

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
