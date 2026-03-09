import * as Icons from 'lucide-react';
import Button from '../Button/Button';
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
        <Button variant="ghost" size="sm" fullWidth onClick={onQuote}>
          Get a Quote
        </Button>
      </div>
    </article>
  );
}
