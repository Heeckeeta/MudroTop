import { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import styles from './App.module.scss';

export default function App() {
  const [text, setText] = useState('Hello Mudro');
  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (tg) tg.ready();
    else setText('please use telegram');
  });

  return (
    <main>
      <h1>{text}</h1>
      {/* <Router>
        <Header />
        <Routes>
          <Route path="/" exact element />
        </Routes>
      </Router> */}
    </main>
  );
}
