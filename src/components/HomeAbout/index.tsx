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
          Сайт содержит учебные материалы по дисциплине «Структуры и алгоритмы в базах данных
          и распределенных системах». Здесь собраны темы, конспекты и дополнительные материалы
          для самостоятельной подготовки.
        </p>
      </div>
    </section>
  );
}
