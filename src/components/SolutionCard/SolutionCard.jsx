import * as Icons from 'lucide-react';
import styles from './SolutionCard.module.css';

export default function SolutionCard({ icon, title, description, onQuote }) {
  const Icon = Icons[icon] ?? Icons.Zap;

  return (
    <article className={styles.card}>
      <div className={styles.iconArea}>
        <Icon className={styles.icon} strokeWidth={1.5} />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <button className={styles.btn} onClick={onQuote}>
          Get a Quote
        </button>
      </div>
    </article>
  );
}
