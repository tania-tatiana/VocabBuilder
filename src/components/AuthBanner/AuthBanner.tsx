import css from './AuthBanner.module.css';

export default function AuthBanner() {
  return (
    <div className={css.authBanner}>
      <img
        src="/authBanner.png"
        alt="People reading books"
        className={css.authImage}
      />

      <p className={css.authText}>Word · Translation · Grammar · Progress</p>
    </div>
  );
}
