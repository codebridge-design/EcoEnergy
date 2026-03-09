import { NavLink, Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import Button from '../Button/Button';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <Leaf size={24} />
        <span>EcoEnergy</span>
      </Link>

      <nav className={styles.nav}>
        <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>
        <NavLink to="/options" className={({ isActive }) => isActive ? styles.active : ''}>Options</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink>
        <NavLink to="/contacts" className={({ isActive }) => isActive ? styles.active : ''}>Contacts</NavLink>
      </nav>

      <Button to="/contacts" size="sm">Get Started</Button>
    </header>
  );
}
