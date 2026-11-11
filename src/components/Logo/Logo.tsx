import css from './Logo.module.css';

export default function Logo() {
  return (
    <div className={css.logo}>
      <img src="/logo.svg" width={40} height={40} />
      <p className={css.logoText}>VocabBuilder</p>
    </div>
  );
}
