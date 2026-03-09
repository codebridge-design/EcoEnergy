import { useId } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Button from '../../Button/Button';

import slideOneImage from '../../../images/Home/home-slider-1.jpeg';
import slideTwoImage from '../../../images/Home/home-slider-2.jpeg';
import slideThreeImage from '../../../images/Home/home-silder-3.jpeg';

import styles from './Slider.module.css';

const slides = [
  {
    id: 1,
    title: 'Power Your Future with Clean Energy',
    description: 'Transform your business or home with sustainable renewable energy solutions.',
    buttonText: 'Work with Us',
    image: slideThreeImage
  },
  {
    id: 2,
    title: 'Now Partnered with GreenTech Global',
    description: "We've partnered with industry leaders to expand our horizons and bring you even better renewable energy solutions.",
    buttonText: 'Work with Us',
    image: slideOneImage
  },
  {
    id: 3,
    title: 'Sustainable Solutions for Every Need',
    description: 'From solar panels to wind turbines, we have the perfect renewable energy solution for you.',
    buttonText: 'Get started today',
    image: slideTwoImage
  },
];

function Slide({ slide }) {
  return (
    <article className={styles.slide}>
      <img src={slide.image} alt={slide.alt} className={styles.image} />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <h2 className={styles.title}>{slide.title}</h2>
        <p className={styles.description}>{slide.description}</p>
        <Button to="/contacts" size="lg" className={styles.ctaButton}>
          {slide.buttonText}
        </Button>
      </div>
    </article>
  );
}

function NavButton({ isPrev, className }) {
  const Icon = isPrev ? ChevronLeft : ChevronRight;
  const label = isPrev ? 'Previous' : 'Next';
  const directionClass = isPrev ? styles.navPrev : styles.navNext;

  return (
    <button
      type="button"
      className={`${styles.navButton} ${directionClass} ${className}`}
      aria-label={`${label} slide`}
    >
      <Icon size={24} aria-hidden="true" />
    </button>
  );
}

export default function Slider() {
  const sliderId = useId().replace(/:/g, '');
  const prevClass = `home-slider-prev-${sliderId}`;
  const nextClass = `home-slider-next-${sliderId}`;

  return (
    <section className={styles.section} aria-label="EcoEnergy featured updates">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        speed={800}
        navigation={{
          prevEl: `.${prevClass}`,
          nextEl: `.${nextClass}`,
        }}
        pagination={{
          clickable: true,
        }}
        className={styles.slider}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Slide slide={slide} />
          </SwiperSlide>
        ))}
        <NavButton isPrev className={prevClass} />
        <NavButton isPrev={false} className={nextClass} />
      </Swiper>
    </section>
  );
}