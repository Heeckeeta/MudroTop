import { useState } from 'react';

import styles from './Filters.module.scss';

export default function Fiters({ onForm }) {
  const [year, setYear] = useState('');
  const [mins, setMins] = useState('');
  const [genre, setGenre] = useState('');
  const [notGenre, setNotGenre] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const data = { year, mins, genre, notGenre };
    onForm(data);
    setYear('');
    setMins('');
    setGenre('');
    setNotGenre('');
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        placeholder="Минимальный год:"
        className={styles.input}
        onChange={(e) => setYear(e.target.value.trim())}
        value={year}
      />
      <input
        placeholder="Минимум минут:"
        className={styles.input}
        onChange={(e) => setMins(e.target.value.trim())}
        value={mins}
      />
      <input
        placeholder="Жанр:"
        className={styles.input}
        onChange={(e) => setGenre(e.target.value.toLowerCase().trim())}
        value={genre}
      />
      <input
        placeholder="Убрать жанр:"
        className={styles.input}
        onChange={(e) => setNotGenre(e.target.value.toLowerCase().trim())}
        value={notGenre}
      />
      <input type="submit" className={styles.submit} value="Найти" />
    </form>
  );
}
