import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import TheContext from '../TheContext';
import actions from '../api';
import { useContext } from 'react';

function Login(props) {
  const { user, setUser, history } = useContext(TheContext);
  console.log(user);
  const logOut = () => {
    setUser({});
    localStorage.clear();
    history.push('/');
  };

  // Return

  return (
    <div className='login'>
      {user.email ? (
        <button onClick={logOut} className='login-btn'>
          Logout
        </button>
      ) : (
        <Link to='/auth'>
          <button className='login-btn'> Login</button>
        </Link>
      )}
    </div>
  );
}

export default Login;
