import Button from '../../components/Button/Button';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.page}>
      <p className={styles.code} aria-hidden="true">404</p>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.description}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button to="/">Back to Home</Button>
    </div>
  );
}
