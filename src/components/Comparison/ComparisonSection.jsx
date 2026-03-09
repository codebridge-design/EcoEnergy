import { Check, X } from 'lucide-react';
import styles from './ComparisonSection.module.css';

const traditionalEnergyPoints = [
  'Fluctuating and rising costs',
  'High carbon emissions',
  'Dependent on finite resources',
  'Vulnerable to supply disruptions',
  'Environmental degradation',
];

const renewableEnergyPoints = [
  'Predictable, long-term savings',
  'Zero carbon emissions',
  'Unlimited natural resources',
  'Energy independence',
  'Sustainable for future generations',
];

export default function ComparisonSection() {
  return (
    <section className={styles.section} aria-labelledby="comparison-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="comparison-heading" className={styles.title}>
            The Future is Renewable
          </h2>
          <p className={styles.subtitle}>
            See how renewable energy compares to traditional sources
          </p>
        </header>

        <div className={styles.columns}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Traditional Energy</h3>
            <ul className={styles.list}>
              {traditionalEnergyPoints.map((point) => (
                <li key={point} className={styles.listItem}>
                  <X size={22} className={styles.iconNegative} aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className={`${styles.card} ${styles.cardPositive}`}>
            <h3 className={`${styles.cardTitle} ${styles.cardTitlePositive}`}>Renewable Energy</h3>
            <ul className={styles.list}>
              {renewableEnergyPoints.map((point) => (
                <li key={point} className={styles.listItem}>
                  <Check size={22} className={styles.iconPositive} aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
