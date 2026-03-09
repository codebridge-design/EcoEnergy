import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/options', label: 'Options' },
  { to: '/about', label: 'About' },
  { to: '/contacts', label: 'Contacts' },
];

const services = [
  'Solar Panel Installation',
  'Wind Energy Solutions',
  'Energy Consultation',
  'Maintenance & Support',
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoIcon}>
              <Leaf size={20} />
            </span>
            <span>EcoEnergy</span>
          </Link>
          <p className={styles.tagline}>
            Leading the transition to renewable energy solutions for a sustainable future.
          </p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.list}>
            {quickLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className={styles.link}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Services</h4>
          <ul className={styles.list}>
            {services.map((s) => (
              <li key={s} className={styles.serviceItem}>{s}</li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact Us</h4>
          <ul className={styles.list}>
            <li className={styles.contactItem}>
              <Phone size={16} className={styles.contactIcon} />
              <a href="tel:+15551234567" className={styles.contactLink}>+1 (555) 123-4567</a>
            </li>
            <li className={styles.contactItem}>
              <Mail size={16} className={styles.contactIcon} />
              <a href="mailto:info@ecoenergy.com" className={styles.contactLink}>info@ecoenergy.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>© {new Date().getFullYear()} EcoEnergy. All rights reserved.</p>
      </div>
    </footer>
  );
}
