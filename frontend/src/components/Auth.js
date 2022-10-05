import { GoogleLogin } from 'react-google-login';
import actions from '../api';
import TheContext from '../TheContext';
import { useContext } from 'react';

const Auth = (props) => {
  const { user, history, setUser } = useContext(TheContext);
  const onResponse = (response) => {
    console.log(response);
    actions
      .logIn(response)
      .then((res) => {
        console.log(res);
        setUser(res.data);
        history.push('/');
      })
      .catch(console.error);
  };

  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLEID}
        buttonText='Signup'
        onSuccess={onResponse}
        onFailure={onResponse}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default Auth;
