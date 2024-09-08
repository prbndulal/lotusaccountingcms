import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/pagination'; // Pagination module styles
import 'swiper/css/navigation'; // Navigation module styles
import { Pagination, Navigation ,Autoplay} from 'swiper/modules'; // Correct imports
import './Carousel.css'; // Import custom Carousel styles
import image1 from '../images/image-1.jpg'
import image2 from '../images/image-2.avif'
import image3 from '../images/image-3.avif'
import image4 from '../images/image-4.avif'

const Carousel = () => {
  const slides = [
    {
      image: image4,
      description: "Expert accounting solutions tailored to your business needs. Providing clarity and precision in financial management.",
    },
    {
      image: image3,
      description: "Comprehensive tax planning and compliance services. Maximize your tax savings with our expert guidance.",
    },
    {
      image: image1,
      description: "Efficient payroll and bookkeeping services to streamline your operations. Focus on your business, leave the rest to us.",
    },
    {
      image: image2,
      description: "Our trusted partner in navigating complex financial landscapes. Reliable, professional, and client-focused accounting services.",
    },
  ];

  //Personalized accounting strategies for individuals and businesses. Ensuring your financial goals are met with expertise and care.

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1} // Default to 1 slide per view
      breakpoints={{
        640: { slidesPerView: 1 }, // 1 slide per view for small screens
        768: { slidesPerView: 1 }, // 1 slide per view for medium screens
        1024: { slidesPerView: 1 }, // 1 slide per view for large screens
      }}
      pagination={{ clickable: true }}
      navigation
      modules={[Pagination, Navigation,Autoplay]} // Use modules array
      loop={true}
      autoplay={{ delay: 3000 }} 
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="carousel-slide">
          <div className="relative">
            <img className="carousel-image" src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black bg-opacity-50 text-white p-4 rounded-md text-center">
                <p className="text-lg font-semibold">{slide.description}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
