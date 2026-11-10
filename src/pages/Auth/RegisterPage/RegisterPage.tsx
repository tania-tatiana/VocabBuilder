import Logo from '../../../components/Logo/Logo';
import RegisterForm from '../../../components/RegisterForm/RegisterForm';
import css from './RegisterPage.module.css';

export default function RegisterPage() {
  return (
    <>
      <Logo />
      <div>
        <h1 className={css.title}>Register</h1>
        <p className={css.text}>
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </p>
        <RegisterForm />
      </div>
    </>
  );
}
