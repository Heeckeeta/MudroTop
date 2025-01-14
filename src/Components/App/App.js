import { useState } from 'react';

import Filters from '../Filters/Filters.js';
import NotGenre from '../NotGenre/NotGenre.js';
import List from '../List/List.js';
import Footer from '../Footer/Footer.js';

import styles from './App.module.scss';

export default function App() {
  const [filter, setFilter] = useState({ year: '', mins: '', genre: '', notGenres: '' });

  return (
    <main className={styles.list}>
      <Filters onForm={setFilter} />
      {filter.notGenres && <NotGenre notGenres={filter.notGenres} />}
      <List filter={filter} />
      <Footer />
    </main>
  );
}
