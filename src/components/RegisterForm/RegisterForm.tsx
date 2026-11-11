import css from './RegisterForm.module.css';

export default function RegisterForm() {
  return (
    <form className={css.form}>
      <div className={css.text}>
        <h1 className={css.title}>Register</h1>
        <p className={css.subtitle}>
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </p>
      </div>

      <div className={css.inputs}>
        <input type="text" className={css.input} placeholder="Name" />
        <input type="text" className={css.input} placeholder="Email" />
        <input type="password" className={css.input} placeholder="Password" />
      </div>
      <div className={css.buttons}>
        <button type="button" className={css.register}>
          Register
        </button>
        <button type="button" className={css.login}>
          Login
        </button>
      </div>
    </form>
  );
}
