import { useState } from 'react';

import Footer from '../Footer/Footer.js';
import List from '../List/List.js';
import Filters from '../Filters/Filters.js';

import styles from './App.module.scss';

export default function App() {
  const [filter, setFilter] = useState({ year: '', mins: '', genre: '' });

  return (
    <main className={styles.list}>
      <Filters onForm={setFilter} />
      <List filter={filter} />
      <Footer />
    </main>
  );
}
