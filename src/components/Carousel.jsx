import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';
import './Carousel.css';
import image1 from '../images/image-1.jpg';
import image2 from '../images/image-2.avif';
import image3 from '../images/image-3.avif';
import image4 from '../images/image-4.avif';

const Carousel = () => {
  const slides = [
    {
      image: image4,
      subtitle: "Accounting Solutions",
      description: "Expert accounting solutions tailored to your business needs. Providing clarity and precision in financial management.",
    },
    {
      image: image3,
      subtitle: "Tax Planning & Compliance",
      description: "Comprehensive tax planning and compliance services. Maximize your tax savings with our expert guidance.",
    },
    {
      image: image1,
      subtitle: "Payroll & Bookkeeping",
      description: "Efficient payroll and bookkeeping services to streamline your operations. Focus on your business, leave the rest to us.",
    },
    {
      image: image2,
      subtitle: "Your Trusted Partner",
      description: "Reliable, professional, and client-focused accounting services. Navigating complex financial landscapes with confidence.",
    },
  ];

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      effect="fade"
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      navigation
      modules={[Pagination, Navigation, Autoplay, EffectFade]}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      speed={1000}
      className="hero-swiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="hero-slide">
            <div className="hero-slide-bg">
              <img src={slide.image} alt={slide.subtitle} />
            </div>
            <div className="hero-overlay" />
            <div className="hero-content">
              <span className="hero-badge">{slide.subtitle}</span>
              <h1 className="hero-heading">
                Save Time. Work Smarter.<br />
                Get It Done Remotely.
              </h1>
              <p className="hero-description">{slide.description}</p>
              <div className="hero-actions">
                <Link to="/services" className="hero-btn hero-btn-primary">
                  Our Services
                </Link>
                <Link to="/contactus" className="hero-btn hero-btn-outline">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
