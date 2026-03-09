import { Link } from 'react-router-dom';
import styles from './Button.module.css';

/**
 * variant : 'primary' | 'outline'
 * size    : 'sm' | 'md' | 'lg'
 * fullWidth — розтягує кнопку на всю ширину контейнера
 * to      — якщо передано, рендериться як <Link>
 * href    — якщо передано, рендериться як <a>
 * інакше  — <button>
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  to,
  href,
  className = '',
  ...props
}) {
  const cls = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
