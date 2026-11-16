import css from './AuthBanner.module.css';

export default function AuthBanner() {
  return (
    <img
      src="/authBanner.png"
      alt="People reading books"
      className={css.authImage}
    />
  );
}
