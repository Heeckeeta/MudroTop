import { useEffect, useState } from 'react';
import { WebApp } from 'telegram-web-app';

// import styles from './App.module.scss';

export default function App() {
  const [text, setText] = useState('Hello Mudro');
  useEffect(() => {
    if (window.Telegram) WebApp.init();
    else setText('please use telegram');
  });

  return (
    <main>
      <h1>{text}</h1>
    </main>
  );
}
