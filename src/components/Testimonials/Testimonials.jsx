import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  // Мокові дані для випадку відсутності підключення
  const mockData = [
    {
      _id: "647495d0c825f1570b04182f",
      text: "Thank you for the wonderful recipe for feta pasta with tomatoes and basil. It turned out to be not only tasty, but also incredibly colorful. This has become a favorite family meal!",
      author: "LARRY PAGEIM",
    },
    {
      _id: "647495d0c825f1570b04182e",
      text: "Foodies is a must-have for any home cook! With its extensive recipe collection and easy-to-use interface, I've discovered new culinary delights and streamlined my meal planning. Cooking has never been this enjoyable!",
      author: "Mike Chen",
    },
    {
      _id: "647495d0c825f1570b04182d",
      text: "Foodies has transformed my cooking experience! With its diverse recipe collection and user-friendly interface, I can easily find, save, and cook delicious meals for any occasion. From quick dinners to elaborate feasts, this app has become my go-to kitchen companion. Highly recommended!",
      author: "Sarah Johnson"
    },
  ];

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('https://project-team-04.onrender.com/api/testimonials');

        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();

        // Конвертація даних з бекенду в потрібний формат
        const formattedTestimonials = data.testimonials.map(testimonial => ({
          _id: testimonial.id.toString(),
          text: testimonial.testimonial,
          author: `User ${testimonial.ownerId}` // Якщо немає імені, використовуємо ID
        }));

        setTestimonials(formattedTestimonials);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setTestimonials(mockData); // Використовуємо мокові дані при помилці
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>What our customer say</h2>
        <h3 className={styles.subTitle}>TESTIMONIALS</h3>

        {/* SVG декорація */}
        <div className={styles.decoration}>
          <svg
            width="59"
            height="48"
            viewBox="0 0 59 48"
            fill="none"
            className={styles.decorationIcon}
          >
            <path
              d="M0 48V31.9412C0 25.9412 1.05672 20.4118 3.17015 15.3529C5.28358 10.2941 8.86468 5.17647 13.9134 0L23.0716 7.2353C20.1363 10.1765 17.9055 12.9412 16.3791 15.5294C14.8527 18.1177 13.8547 20.7647 13.3851 23.4706H24.6567V48H0ZM34.3433 48V31.9412C34.3433 25.9412 35.4 20.4118 37.5134 15.3529C39.6269 10.2941 43.208 5.17647 48.2567 0L57.4149 7.2353C54.4796 10.1765 52.2488 12.9412 50.7224 15.5294C49.196 18.1177 48.198 20.7647 47.7284 23.4706H59V48H34.3433Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            el: `.${styles.pagination}`
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial._id}>
              <div className={styles.testimonialCard}>
                <p className={styles.testimonialText}>{testimonial.text}</p>
                <h3 className={styles.authorName}>{testimonial.author}</h3>
              </div>
            </SwiperSlide>
          ))}
          <div className={styles.pagination} />
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;