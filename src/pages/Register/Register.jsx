import SignUpForm from '../../components/SignUpForm/SignUpForm';

import styles from './Register.scss';

function Register({ loggedIn, ...restProps }) {
  return (
    <div className="register__container">
      <SignUpForm></SignUpForm>
    </div>
  );
}

export default Register;
