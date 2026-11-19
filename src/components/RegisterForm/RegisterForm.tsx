import { useState } from 'react';
import css from './RegisterForm.module.css';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ name, email, password });
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.text}>
        <h1 className={css.title}>Register</h1>
        <p className={css.subtitle}>
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </p>
      </div>

      <div className={css.inputs}>
        <input
          type="text"
          className={css.input}
          placeholder="Name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          className={css.input}
          placeholder="Email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className={css.passwordWrapper}>
          <input
            type={showPassword ? 'text' : 'password'}
            className={css.input}
            placeholder="Password"
            name="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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
        <button type="submit" className={css.register}>
          Register
        </button>
        <button type="button" className={css.login}>
          Login
        </button>
      </div>
    </form>
  );
}
