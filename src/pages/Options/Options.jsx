import { useMemo, useState } from 'react';
import { Filter, Leaf, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SolutionCard from '../../components/SolutionCard/SolutionCard';
import Button from '../../components/Button/Button';
import { optionFilters, optionSolutions } from './optionsData';
import styles from './Options.module.css';

export default function Options() {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  const visibleSolutions = useMemo(() => {
    if (activeFilter === 'all') {
      return optionSolutions;
    }

    return optionSolutions.filter((solution) =>
      solution.categories.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <section className={styles.page}>
      <div className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>Renewable Energy Solutions</h1>
          <p className={styles.subtitle}>
            Discover the perfect renewable energy solution for your needs. From
            residential to industrial applications.
          </p>
        </div>
      </div>

      <div className={styles.filterBar}>
        <div className={styles.container}>
          <div className={styles.filterRow}>
            <p className={styles.filterLabel}>
              <Filter size={16} strokeWidth={1.75} aria-hidden="true" />
              <span>Filter by:</span>
            </p>

            <div className={styles.filterTags}>
              {optionFilters.map((filter) => {
                const isActive = activeFilter === filter.id;

                return (
                  <button
                    key={filter.id}
                    type="button"
                    className={`${styles.tag} ${isActive ? styles.tagActive : ''}`}
                    onClick={() => setActiveFilter(filter.id)}
                    aria-pressed={isActive}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.container} ${styles.gridWrap}`}>
        <div className={styles.grid}>
          {visibleSolutions.map((solution) => (
            <SolutionCard
              key={solution.id}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              onQuote={() => navigate('/contacts')}
            />
          ))}

          <article className={styles.featuredCard}>
            <div className={styles.featuredIconWrap}>
              <Leaf size={20} strokeWidth={1.75} />
            </div>

            <h3 className={styles.featuredTitle}>Want to Be Featured?</h3>
            <p className={styles.featuredText}>
              Partner with us to showcase your renewable energy solutions.
            </p>

            <Button to="/contacts" size="sm" className={styles.featuredButton}>
              Contact Us
            </Button>
          </article>
        </div>
      </div>

      <section className={styles.bottomCta}>
        <div className={styles.container}>
          <h2 className={styles.bottomCtaTitle}>Ready to Make the Switch?</h2>
          <p className={styles.bottomCtaText}>
            Join thousands of businesses and homeowners who have already
            transitioned to renewable energy. Let&apos;s create a sustainable
            future together.
          </p>

          <Button to="/contacts" size="md" className={styles.bottomCtaButton}>
            Contact Us Today
            <ArrowRight size={14} aria-hidden="true" />
          </Button>
        </div>
      </section>
    </section>
  );
}
