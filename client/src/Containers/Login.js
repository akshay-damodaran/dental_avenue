import React, { useContext, useRef } from 'react';
import { Redirect } from 'react-router-dom';

import UserContext from '../Context/UserContext';

function Login({ history }) {
  const user = useContext(UserContext);
  const username = useRef();
  const password = useRef();

  function handleClick() {
    if (username.current.value && password.current.value) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.current.value, password: password.current.value }),
      };
      fetch('http://localhost:3000/admin/login', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          user.dispatch({
            type: 'login',
            payload: {
              name: 'Akshay',
              token: 'jwt_token',
              role: 1
            },
          });
          history.push('/');
        })
        .catch((err) => console.log('Error: ', err));
    } else {
      console.log('Missing params');
    }
  }

  if (user.state.isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <label htmlFor="username">
        UserName
        <input id="username" ref={username} name="username" type="text" placeholder="username" required />
      </label>
      <label htmlFor="password">
        Passsword:
        <input id="password" ref={password} name="password" type="password" placeholder="password" required />
      </label>
      <button type="button" onClick={() => handleClick()}>Sign In</button>
    </div>
  );
}

export default Login;
