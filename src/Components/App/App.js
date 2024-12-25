import Footer from '../Footer/Footer.js';
import List from '../List/List.js';

import styles from './App.module.scss';

export default function App() {
  return (
    <main className={styles.list}>
      <List />
      <Footer />
    </main>
  );
}
