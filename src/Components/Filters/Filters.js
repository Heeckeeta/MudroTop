import { useState } from 'react';

import styles from './Filters.module.scss';

export default function Fiters({ onForm }) {
  const [year, setYear] = useState('');
  const [mins, setMins] = useState('');
  const [genre, setGenre] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const data = { year, mins, genre };
    onForm(data);
    setYear('');
    setMins('');
    setGenre('');
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        placeholder="Минимальный год:"
        className={styles.input}
        onChange={(e) => setYear(e.target.value)}
        value={year}
      />
      <input
        placeholder="Минимум минут:"
        className={styles.input}
        onChange={(e) => setMins(e.target.value)}
        value={mins}
      />
      <input placeholder="Жанр:" className={styles.input} onChange={(e) => setGenre(e.target.value)} value={genre} />
      <input type="submit" className={styles.submit} value="Найти" />
    </form>
  );
}
