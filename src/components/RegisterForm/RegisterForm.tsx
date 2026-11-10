import css from './RegisterForm.module.css';

export default function RegisterForm() {
  return (
    <form className={css.form}>
      <input type="text" className={css.input} />
      <input type="text" className={css.input} />
      <input type="text" className={css.input} />
      <button type="button" className={css.register}>
        Register
      </button>
      <button type="button" className={css.login}>
        Login
      </button>
    </form>
  );
}
