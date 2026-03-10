import { ArrowRight } from 'lucide-react';
import Button from '../Button/Button';
import styles from './CTA.module.css';

export default function CtaSection() {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className={styles.container}>
        <h2 id="cta-heading" className={styles.title}>
          Ready to Make the Switch?
        </h2>

        <p className={styles.description}>
          Join thousands of businesses and homeowners who have already transitioned to
          renewable energy. Let&apos;s create a sustainable future together.
        </p>

        <Button to="/contacts" size="lg" className={styles.ctaButton}>
          <span>Contact Us Today</span>
          <ArrowRight size={26} aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}
