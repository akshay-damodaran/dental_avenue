import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';

import Navbar from './Components/Navbar';
import PatientHome from './Containers/PatientHome';
import Auth from './Auth';
import DoctorHome from './Containers/DoctorHome';

function Main() {
  return (
    <Auth>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={PatientHome} />
          <Route exact path="/doctor" component={DoctorHome} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Auth>
  );
}

export default Main;
