import type { ReactNode } from 'react';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

export default function HomeAbout(): ReactNode {
  return (
    <section className={styles.aboutSection}>
      <div className={`container ${styles.inner}`}>
        <Heading as="h2" className={styles.title}>
          О сайте
        </Heading>
        <p className={styles.aboutText}>
          Здесь собраны материалы по дисциплине «Структуры и алгоритмы в базах данных и распределённых системах»
          – краткие заметки и примеры по темам (сайт пополняется).
          <br/>
          <br/>
          P.S. Обратная связь и дополнения приветствуются 😊.
          Чтобы предложить правку, нажмите «Отредактировать эту страницу» на нужной странице.
        </p>
      </div>
    </section>
  );
}
