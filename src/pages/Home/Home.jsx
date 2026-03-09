import BenefitsSection from '../../components/Benefits/BenefitsSection';
import CtaSection from '../../components/CTA/CTAelement';
import ComparisonSection from '../../components/Comparison/ComparisonSection';
import EnergySolutionsSection from '../../components/EnergySolutions/EnergySolutionsSection';
import Slider from '../../components/Slider/Home/Slider';
import TestimonialsSection from '../../components/Testimonials/TestimonialsSection';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Slider />
      <BenefitsSection />
      <ComparisonSection />
      <EnergySolutionsSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}
