import Button from '../Button/Button';
import SolutionCard from '../SolutionCard/SolutionCard';
import styles from './EnergySolutionsSection.module.css';

const featuredSolutions = [
  {
    id: 'solar',
    icon: 'Sun',
    title: 'Solar Panel Systems',
    description: 'High-efficiency solar panels designed for residential and commercial applications.',
  },
  {
    id: 'wind',
    icon: 'Wind',
    title: 'Wind Turbines',
    description: 'Advanced wind turbine technology for clean, reliable energy generation.',
  },
];

export default function EnergySolutionsSection() {
  return (
    <section className={styles.section} aria-labelledby="energy-solutions-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="energy-solutions-heading" className={styles.title}>
            Our Energy Solutions
          </h2>
          <p className={styles.subtitle}>
            Explore our range of renewable energy products and services
          </p>
        </header>

        <div className={styles.grid}>
          {featuredSolutions.map((solution) => (
            <SolutionCard
              key={solution.id}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              buttonLabel="Learn More"
              buttonVariant="ghost"
              buttonTo="/options"
            />
          ))}

          <article className={styles.moreCard}>
            <h3 className={styles.moreTitle}>Want More Options?</h3>
            <p className={styles.moreDescription}>
              Explore our full range of renewable energy solutions
            </p>
            <Button to="/options" size="lg" className={styles.moreButton}>
              View All Options
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
}
