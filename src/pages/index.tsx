import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomeAbout from '@site/src/components/HomeAbout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const categories = [
  { to: '/docs/category/search', label: 'Поиск 🔍' },
  { to: '/docs/category/concurrent', label: 'Конкурентность ⚙️' },
  { to: '/docs/category/distributed', label: 'Распределённые системы 🌐' },
  { to: '/docs/category/compact', label: 'Компактные структуры 📦' },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          {categories.map((category) => (
            <Link
              key={category.to}
              className="button button--secondary button--lg"
              to={category.to}>
              {category.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Материалы дисциплины"
      description={`Учебные материалы по дисциплине «${siteConfig.title}».`}>
      <HomepageHeader />
      <main>
        <HomeAbout />
      </main>
    </Layout>
  );
}
