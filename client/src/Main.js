import React, { useContext, Suspense, lazy } from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';

import Auth from './Auth';
import Navbar from './Components/CommonComponents/Navbar';
import UserContext from './Context/UserContext';

const PatientList = lazy(() => import('./RoleBasedComponents/Role1').then((module) => ({default: module.PatientList})));
const PatientHome = lazy(() => import('./RoleBasedComponents/Role1').then((module) => ({default: module.PatientHome})));
const DoctorHome = lazy(() => import('./Containers/DoctorHome'));

function Main() {
  const user = useContext(UserContext);

  return (
    <Auth>
      <Router>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={PatientHome} />
            <Route exact path="/patients" component={PatientList} />
            {user.state.role <= 1 && <Route exact path="/doctor" component={DoctorHome} />}
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Router>
    </Auth>
  );
}

export default Main;
