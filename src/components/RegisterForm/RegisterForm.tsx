import { useState } from 'react';
import css from './RegisterForm.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form className={css.form} onSubmit={formik.handleSubmit}>
      <div className={css.text}>
        <h1 className={css.title}>Register</h1>
        <p className={css.subtitle}>
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </p>
      </div>

      <div className={css.inputs}>
        <div className={css.inputWrap}>
          <input
            type="text"
            className={css.input}
            placeholder="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.name && formik.errors.name ? (
            <p className={css.error}>Error name</p>
          ) : (
            formik.touched.name &&
            !formik.errors.name && <p className={css.success}>Success name</p>
          )}
        </div>
        <div className={css.inputWrap}>
          <input
            type="text"
            className={css.input}
            placeholder="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className={css.error}>Error email</p>
          ) : (
            formik.touched.email &&
            !formik.errors.email && <p className={css.success}>Success email</p>
          )}
        </div>
        <div className={css.inputWrap}>
          <input
            type={showPassword ? 'text' : 'password'}
            className={css.input}
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className={css.error}>Error password</p>
          ) : (
            formik.touched.password &&
            !formik.errors.password && (
              <p className={css.success}>Success passsword</p>
            )
          )}
          <button
            type="button"
            className={css.eyeBtn}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <svg className={css.icon} width={20} height={20}>
              <use
                href={
                  showPassword
                    ? '/sprite.svg#icon-eye'
                    : '/sprite.svg#icon-eye-off'
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
