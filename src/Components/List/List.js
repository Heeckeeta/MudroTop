import { useEffect, useState } from 'react';
import { Pagination, Alert } from 'antd';

import loading from '../../images/loading.gif';
import api from '../../api.js';
import Card from '../Card/Card.js';

import styles from './List.module.scss';

export default function List({ filter }) {
  const [films, setFilms] = useState([]);
  const [nowFilms, setNowFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(false);

  const onPagination = (p) => {
    setPage(p);
    setNowFilms(films.slice(12 * (p - 1), 12 * p));
  };

  useEffect(() => {
    api.getFilms(filter).then((res) => {
      if (!res) {
        setError(true);
        setLoad(false);
      } else {
        setLoad(false);
        setFilms(res);
        setNowFilms(res.slice(0, 12));
      }
    });
  }, [filter]);

  if (load)
    return (
      <div className={styles.load}>
        <img src={loading} className={styles.load__gif} />
      </div>
    );
  if (error)
    return (
      <Alert
        type={error}
        message="Что-то пошло не так, возможно тебе надо перезагрузить, возможно задонатить"
        className={styles.error}
      />
    );

  return (
    <div className={styles.list}>
      <ul className={styles.list__ul}>
        {nowFilms.map((card) => (
          <li key={card.id} className={styles.film}>
            <Card card={card} />
          </li>
        ))}
      </ul>
      <div className={styles.pagination__wrapper}>
        <Pagination
          onChange={onPagination}
          total={films.length}
          pageSize="12"
          current={page}
          showSizeChanger={false}
          className={styles.pagination}
        />
      </div>
    </div>
  );
}
