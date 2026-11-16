import AuthBanner from '../../../components/AuthBanner/AuthBanner';
import Logo from '../../../components/Logo/Logo';
import RegisterForm from '../../../components/RegisterForm/RegisterForm';
import css from './RegisterPage.module.css';

export default function RegisterPage() {
  return (
    <div className={css.page}>
      <Logo />
      <div className={css.mainContent}>
        <div className={css.form}>
          <RegisterForm />
        </div>
        <div className={css.bannerWrapper}>
          <div className={css.banner}>
            <AuthBanner />
          </div>
        </div>
        <p className={css.authText}>Word · Translation · Grammar · Progress</p>
      </div>
    </div>
  );
}
