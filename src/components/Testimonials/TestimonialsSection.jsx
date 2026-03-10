import { Star } from 'lucide-react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './TestimonialsSection.module.css';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: 'From consultation to installation, the team was professional and knowledgeable. Very satisfied with the results.',
    name: 'David Thompson',
    role: 'Homeowner',
  },
  {
    id: 2,
    rating: 5,
    text: "Switching to EcoEnergy's solar solutions cut our electricity costs by 65%. Best business decision we've made!",
    name: 'Sarah Johnson',
    role: 'Business Owner',
  },
  {
    id: 3,
    rating: 5,
    text: 'The installation process was seamless, and our home is now powered by 100% renewable energy. Highly recommend!',
    name: 'Michael Chen',
    role: 'Homeowner',
  },
  {
    id: 4,
    rating: 4,
    text: 'Our warehouse switched to a hybrid system and monthly energy spend dropped almost immediately. Great support after launch too.',
    name: 'Amanda Roberts',
    role: 'Operations Director',
  },
  {
    id: 5,
    rating: 5,
    text: 'EcoEnergy handled permits, design, and installation end-to-end. The process was clear and deadlines were met.',
    name: 'James Walker',
    role: 'Property Manager',
  },
  {
    id: 6,
    rating: 4,
    text: 'The monitoring dashboard is simple, and we can clearly see production and savings week by week. Worth the investment.',
    name: 'Olivia Martinez',
    role: 'Homeowner',
  },
];

function Rating({ value }) {
  return (
    <div className={styles.rating} aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={26}
          className={`${styles.star} ${star <= value ? '' : styles.starMuted}`}
          fill="currentColor"
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="testimonials-heading" className={styles.title}>
            What Our Customers Say
          </h2>
          <p className={styles.subtitle}>
            Join thousands of satisfied customers who have made the switch
          </p>
        </header>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          className={styles.slider}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 16 },
            900: { slidesPerView: 2, spaceBetween: 20 },
            1300: { slidesPerView: 3, spaceBetween: 24 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className={styles.slide}>
              <article className={styles.card}>
                <Rating value={item.rating} />
                <p className={styles.text}>{item.text}</p>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.role}>{item.role}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
