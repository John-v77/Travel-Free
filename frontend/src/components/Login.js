import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import TheContext from '../TheContext';
import actions from '../api';
import { useContext } from 'react';

function Login(props) {
  const { user, setUser, history } = useContext(TheContext);
  console.log(user);
  const logOut = () => {
    console.log('hello');
    setUser({});
    localStorage.clear();
    history.push('/');
  };

  // Return

  return (
    <div>
      {!user.email ? (
        <Link to='/auth'>
          <button class='login-btn'>
            <b>Login</b>
          </button>
        </Link>
      ) : (
        <p style={{ color: 'grey' }}>{user.given_name}</p>
      )}
      <span>
        {user.email ? (
          <button onClick={logOut}>
            <b>Logout</b>
          </button>
        ) : null}
      </span>
    </div>
  );
}

export default Login;
