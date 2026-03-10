import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';
import Button from '../Button/Button';
import { NAV_LINKS } from '../../config/navigation';
import styles from './Header.module.css';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={`${styles.header} ${open ? styles.hidden : ''}`}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>
            <Leaf size={20} />
          </span>
          <span>EcoEnergy</span>
        </Link>

        <nav className={styles.nav}>
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => isActive ? styles.active : ''}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Button to="/contacts" size="sm" className={styles.desktopBtn}>Get Started</Button>

        <button
          className={styles.hamburger}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </header>

      {open && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileHeader}>
            <Link to="/" className={styles.logo} onClick={() => setOpen(false)}>
              <span className={styles.logoIcon}>
                <Leaf size={20} />
              </span>
              <span>EcoEnergy</span>
            </Link>
            <button
              className={styles.closeBtn}
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className={styles.mobileNav}>
            {NAV_LINKS.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) => isActive ? styles.mobileActive : ''}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <Button to="/contacts" size="sm" fullWidth onClick={() => setOpen(false)}>
            Get Started
          </Button>
        </div>
      )}
    </>
  );
}
