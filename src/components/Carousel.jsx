// src/components/Carousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/pagination'; // Pagination module styles
import 'swiper/css/navigation'; // Navigation module styles
import { Pagination, Navigation } from 'swiper/modules'; // Correct imports
import './Carousel.css'; // Import custom Carousel styles

const Carousel = () => {
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
      modules={[Pagination, Navigation]} // Use modules array
    >
      <SwiperSlide className="carousel-slide">
        <img className="carousel-image" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide className="carousel-slide">
        <img className="carousel-image" src="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide className="carousel-slide">
        <img className="carousel-image" src="https://plus.unsplash.com/premium_photo-1661306425417-7eef17153be1?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 3" />
      </SwiperSlide>
      <SwiperSlide className="carousel-slide">
        <img className="carousel-image" src="https://plus.unsplash.com/premium_photo-1661306425417-7eef17153be1?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 4" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
