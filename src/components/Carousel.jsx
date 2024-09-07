import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/pagination'; // Pagination module styles
import 'swiper/css/navigation'; // Navigation module styles
import { Pagination, Navigation ,Autoplay} from 'swiper/modules'; // Correct imports
import './Carousel.css'; // Import custom Carousel styles

const Carousel = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Expert accounting solutions tailored to your business needs. Providing clarity and precision in financial management.",
    },
    {
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Comprehensive tax planning and compliance services. Maximize your tax savings with our expert guidance.",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1661306425417-7eef17153be1?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Efficient payroll and bookkeeping services to streamline your operations. Focus on your business, leave the rest to us.",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1661306425417-7eef17153be1?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
