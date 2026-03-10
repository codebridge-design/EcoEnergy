import styles from './ContactForm.module.css';
import Button from '../Button/Button';

export default function ContactForm({
    heading, subheading, fields, buttonText, imageUrl, imageAlt, icon
  }) {
  return (
      <section className={styles.formSection}>
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <div className={styles.headingWrapper}>
              {icon && <div className={styles.iconWrapper}>{icon}</div>}
              <h2 className={styles.formHeading}>{heading}</h2>
            </div>
            <p className={styles.formSubheading}>{subheading}</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); console.log('Form submitted:', heading); }}>
            {fields.map((field) => (
                <div className={styles.formGroup} key={field.id}>
                  <label className={styles.formLabel} htmlFor={field.name}>
                    {field.label}
                  </label>

                  {field.type === 'textarea' ? (
                      <textarea
                          id={field.name}
                          name={field.name}
                          placeholder={field.placeholder}
                          required={field.required}
                          className={`${styles.formInput} ${styles.textarea}`}
                      />
                  ) : (
                      <input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          placeholder={field.placeholder}
                          required={field.required}
                          className={styles.formInput}
                      />
                  )}
                </div>
            ))}

            <Button size={"md"} fullWidth={true}>{buttonText}</Button>
          </form>
        </div>

        <div className={styles.imageContainer}>
          <img
              src={imageUrl}
              alt={imageAlt}
              className={styles.formImage}
          />
        </div>
      </section>
  );
}
