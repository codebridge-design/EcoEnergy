import { Component } from 'react';
import styles from './ErrorBoundary.module.css';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.page}>
          <h1 className={styles.title}>Something went wrong</h1>
          <p className={styles.description}>An unexpected error occurred. Please refresh the page.</p>
          <button className={styles.button} onClick={() => window.location.reload()}>
            Refresh page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
