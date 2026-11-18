import { useState } from 'react';
import css from './RegisterForm.module.css';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
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
        <div className={css.passwordWrapper}>
          <input
            type={showPassword ? 'text' : 'password'}
            className={css.input}
            placeholder="Password"
            name="Password"
          />
          <button
            type="button"
            className={css.eyeBtn}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <svg className={css.icon} width={20} height={20}>
              <use
                href={
                  showPassword
                    ? '/public/sprite.svg#icon-eye'
                    : '/public/sprite.svg#icon-eye-off'
                }
              />
            </svg>
          </button>
        </div>
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
