import styles from './ContactForm.module.css';

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

          <form onSubmit={(e) => e.preventDefault()}>
            {fields.map((field, index) => (
                <div className={styles.formGroup} key={index}>
                  <label className={styles.formLabel} htmlFor={field.name}>
                    {field.label}
                  </label>

                  {field.type === 'textarea' ? (
                      <textarea
                          id={field.name}
                          name={field.name}
                          placeholder={field.placeholder}
                          className={`${styles.formInput} ${styles.textarea}`}
                      />
                  ) : (
                      <input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          placeholder={field.placeholder}
                          className={styles.formInput}
                      />
                  )}
                </div>
            ))}

            <button type="submit" className={styles.submitButton}>
              {buttonText}
            </button>
          </form>
        </div>

        <div className={styles.imageContainer}>
          <img
              src={imageUrl}
              alt={imageAlt || "Form image"}
              className={styles.formImage}
          />
        </div>
      </section>
  );
}
