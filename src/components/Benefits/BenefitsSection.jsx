import { DollarSign, Shield, TrendingUp, Zap } from 'lucide-react';
import styles from './BenefitsSection.module.css';

const benefitItems = [
  {
    title: 'Cost Savings',
    description: 'Reduce your energy bills by up to 70% with renewable energy solutions.',
    Icon: DollarSign,
  },
  {
    title: 'Energy Independence',
    description: 'Break free from volatile energy prices and gain control over your power supply.',
    Icon: Shield,
  },
  {
    title: 'Investment Returns',
    description: 'See ROI in 3-5 years with government incentives and energy savings.',
    Icon: TrendingUp,
  },
  {
    title: 'Environmental Impact',
    description: 'Reduce your carbon footprint and contribute to a sustainable future.',
    Icon: Zap,
  },
];

export default function BenefitsSection() {
  return (
    <section className={styles.section} aria-labelledby="benefits-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="benefits-heading" className={styles.title}>
            Why Switch to Renewable Energy Now?
          </h2>
          <p className={styles.subtitle}>
            The time for sustainable energy is here. Discover the compelling reasons to make
            the transition today.
          </p>
        </header>

        <ul className={styles.grid}>
          {benefitItems.map((item) => {
            const { title, description, Icon } = item;

            return (
              <li key={title} className={styles.card}>
                <div className={styles.iconWrapper} aria-hidden="true">
                  <Icon size={36} strokeWidth={2.2} />
                </div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
