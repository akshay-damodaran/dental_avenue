import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import Main from './Main';
import Login from './Containers/Login';
import { UserWrapper } from './Context/UserContext';

function App() {
  return (
    <div>
      <UserWrapper>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={Main} />
          </Switch>
        </Router>
      </UserWrapper>
    </div>
  );
}

export default App;
