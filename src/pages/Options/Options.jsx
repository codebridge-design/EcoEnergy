import solutions from '../../data/solutions.json';
import SolutionCard from '../../components/SolutionCard/SolutionCard';
import styles from './Options.module.css';

export default function Options() {
  return (
    <section className={styles.page}>
      <div className={styles.grid}>
        {solutions.map((item) => (
          <SolutionCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
