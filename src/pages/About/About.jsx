import Button from '../../components/Button/Button';
import styles from './About.module.css';

const TIMELINE = [
  { year: '2018', title: 'Company Founded', text: 'EcoEnergy was established with a mission to make renewable energy accessible to all. Started with a small team of 5 passionate individuals.' },
  { year: '2019', title: 'First 1000 Installations', text: 'Reached a major milestone by completing 1000 solar panel installations across residential and commercial properties.' },
  { year: '2020', title: 'Carbon Neutral Operations', text: 'Achieved carbon neutrality in all our operations and headquarters. Set new standards for sustainability in the industry.' },
  { year: '2021', title: 'Wind Energy Expansion', text: 'Expanded our portfolio to include wind turbine installations, doubling our renewable energy capacity.' },
  { year: '2022', title: 'Partnership with GreenTech', text: 'Formed strategic partnership with GreenTech Global to enhance our technology and reach more customers.' },
  { year: '2023', title: '10,000+ Happy Customers', text: 'Celebrated serving over 10,000 satisfied customers and preventing 50,000 tons of CO2 emissions annually.' },
  { year: '2024', title: 'Energy Storage Solutions', text: 'Launched advanced battery storage systems, enabling 24/7 renewable energy availability for all customers.' },
  { year: '2025', title: 'International Expansion', text: 'Expanded operations to 15 countries, bringing sustainable energy solutions to communities worldwide.' },
  { year: '2026', title: 'Innovation Hub Launch', text: 'Opened our Innovation Hub to develop next-generation renewable energy technologies and train future sustainability leaders.' },
];

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>About EcoEnergy</h1>
        <p className={styles.heroSubtitle}>Leading the renewable energy revolution since 2018</p>
      </div>

      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.textCol}>
            <h2 className={styles.sectionTitle}>Our Mission</h2>
            <p>At EcoEnergy, we're committed to accelerating the world's transition to sustainable energy. We believe that renewable energy should be accessible, affordable, and efficient for everyone.</p>
            <p>Our team of experts works tirelessly to provide cutting-edge renewable energy solutions that not only reduce carbon emissions but also deliver significant cost savings to our customers.</p>
            <p>We're more than just an energy company—we're partners in building a sustainable future for generations to come.</p>
          </div>
          <div className={styles.imgCol}>
            <img src="/images/About-1.jpg" alt="Our Mission" className={styles.img} />
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.imgCol}>
            <img src="/images/About-2.jpg" alt="Strategic Partnerships" className={styles.img} />
          </div>
          <div className={styles.textCol}>
            <h2 className={styles.sectionTitle}>Strategic Partnerships</h2>
            <p>We collaborate with industry leaders, technology innovators, and sustainability advocates to bring you the best renewable energy solutions available.</p>
            <p>Our partnership with GreenTech Global has enabled us to expand our reach and enhance our technology, making renewable energy more efficient and accessible than ever before.</p>
            <p>Together with our partners, we're creating a network of sustainable energy solutions that spans the globe, ensuring a cleaner future for all.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.timelineWrap}>
          <h2 className={styles.timelineTitle}>Our Journey to Sustainability</h2>
          <p className={styles.timelineSubtitle}>A timeline of our commitment to renewable energy and environmental responsibility</p>

          <div className={styles.timeline}>
            {TIMELINE.map(({ year, title, text }) => (
              <div key={year} className={styles.timelineItem}>
                <div className={styles.timelineDot}>{year}</div>
                <div className={styles.timelineCard}>
                  <h3 className={styles.timelineCardTitle}>{title}</h3>
                  <p className={styles.timelineCardText}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Ready to Make the Switch?</h2>
        <p className={styles.ctaText}>Join thousands of businesses and homeowners who have already transitioned to renewable energy. Let's create a sustainable future together.</p>
        <Button to="/contacts">Contact Us Today →</Button>
      </section>
    </div>
  );
}
