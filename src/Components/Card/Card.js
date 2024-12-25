import kp from '../../images/kp.png';
import placeholder from '../../images/card__placeholder.png';

import styles from './Card.module.scss';

export default function Card({ card }) {
  const src = card.poster?.url ? card.poster.url : placeholder;

  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={src} className={styles.poster} onError={(e) => (e.target.src = placeholder)} />
      </div>
      <div className={styles.info}>
        <div className={styles.info__line}>
          <div className={styles.title}>{card.name}</div>
          <div className={styles.mudriki}>{`мудриков: ${Math.floor(
            (1000 * card.rating.imdb) / card.movieLength
          )}`}</div>
        </div>
        <div className={styles.info__line}>
          <div className={styles.rating}>{`${card.rating.imdb} imdb`}</div>
          <div className={styles.time}>{`${card.movieLength} мин`}</div>
        </div>
        <div className={styles.info__line}>
          <div className={styles.year}>{card.year}</div>
          <div className={styles.countrys}>
            {card?.countries.map((country) => (
              <div className={styles.country} key={country.name}>
                {country.name}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.genres}>
          {card?.genres.map((genre) => (
            <div className={styles.genre} key={genre.name}>
              {genre.name}
            </div>
          ))}
        </div>
        <div className={styles.info__line}>
          <a
            className={styles.open}
            href={`https://www.kinopoisk.ru/film/${card.id}/`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={kp} className={styles.kp} />
          </a>
        </div>
      </div>
    </div>
  );
}
