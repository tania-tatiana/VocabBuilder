import AuthBanner from '../../../components/AuthBanner/AuthBanner';
import Logo from '../../../components/Logo/Logo';
import RegisterForm from '../../../components/RegisterForm/RegisterForm';
import css from './RegisterPage.module.css';

export default function RegisterPage() {
  return (
    <div className={css.page}>
      <Logo />
      <div className={css.mainContent}>
        <RegisterForm />
        <AuthBanner />
      </div>
    </div>
  );
}
