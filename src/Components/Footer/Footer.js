import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.warning}>Внимание! 1 мудрик расчитывается по формуле.</p>
    </footer>
  );
}
