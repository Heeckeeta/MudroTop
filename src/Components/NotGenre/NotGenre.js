import styles from './NotGenre.module.scss';

export default function NotGenre({ notGenres }) {
  let key = 100;
  return (
    <div className={styles.main}>
      <p className={styles.main__text}>
        Убраны жанры:{' '}
        {notGenres.map((el) => (
          <span key={key++}>
            <span className={styles.main__genre}>{el}</span>
            <span> </span>
          </span>
        ))}
      </p>
    </div>
  );
}
