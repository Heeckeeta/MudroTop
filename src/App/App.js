import { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import styles from './App.module.scss';

export default function App() {
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();
  }, []);

  return (
    <main>
      <h1>Hello Mudro!</h1>
      {/* <Router>
        <Header />
        <Routes>
          <Route path="/" exact element />
        </Routes>
      </Router> */}
    </main>
  );
}
