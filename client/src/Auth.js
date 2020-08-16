import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import UserContext from './Context/UserContext';

function Auth({ children }) {
  const user = useContext(UserContext);

  if (!user.state.isAuthenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      {children}
    </>
  );
}

export default Auth;
