import SignInForm from '../../components/SignInForm/SignInForm';

import styles from './Login.scss';

function Login({ loggedIn, ...restProps }) {
  return (
    <div className="register__container">
      <SignInForm></SignInForm>
    </div>
  );
}

export default Login;
