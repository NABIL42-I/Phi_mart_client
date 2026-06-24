import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CarouselSlide from "./CarouselSlide";

// Absolute layout requirements for Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Premium React Icons matching your Category List layout
import { 
  FiChevronLeft, 
  FiChevronRight, 
  FiUser,         // Apparel & Fashion
  FiCpu,          // Electronics & Tech
  FiShoppingBag,   // Jewelry & Bags
  FiSmile,        // Beauty & Cosmetics
  FiHome,         // Home & Living
  FiZap           // Fitness & Sport
} from "react-icons/fi";

const HeroCarousel = () => {
  const slides = [
    {
      title: "Exclusive Minimalist Apparel",
      subtitle: "A professional design label creating high-end, everyday clothing essentials.",
      // 100% pure minimalist product layout photo (No models)
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=600&q=80",
      bgClass: "bg-amber-50/40",
      accentText: "Apparel & Fashion",
      icon: <FiUser className="w-4 h-4" />,
      btnClass: "bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/10"
    },
    {
      title: "Your Digital Ecosystem, Redefined.",
      subtitle: "Explore high-performance workspace electronics built for ultra-seamless living.",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80",
      bgClass: "bg-blue-50/40",
      accentText: "Electronics & Tech",
      icon: <FiCpu className="w-4 h-4" />,
      btnClass: "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/10"
    },
    {
      title: "Premium Handcrafted Leather Goods",
      subtitle: "Exquisite tailored jewelry, luggage, and everyday luxury carry statements.",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
      bgClass: "bg-rose-50/40",
      accentText: "Jewelry, Bags & Accessories",
      icon: <FiShoppingBag className="w-4 h-4" />,
      btnClass: "bg-rose-600 hover:bg-rose-700 text-white shadow-rose-600/10"
    },
    {
      title: "Organic Skincare & Apothecary",
      subtitle: "Nourish your daily routine with clean, premium dermatologist-tested collections.",
      image: "https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&w=600&q=80",
      bgClass: "bg-fuchsia-50/40",
      accentText: "Beauty & Cosmetics",
      icon: <FiSmile className="w-4 h-4" />,
      btnClass: "bg-fuchsia-600 hover:bg-fuchsia-700 text-white shadow-fuchsia-600/10"
    },
    {
      title: "Architectural Lighting & Furniture",
      subtitle: "Elevate your private interior layout with clean modernist lifestyle design accents.",
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
      bgClass: "bg-emerald-50/40",
      accentText: "Home & Living",
      icon: <FiHome className="w-4 h-4" />,
      btnClass: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/10"
    },
    {
      title: "High-Performance Athletic Gear",
      subtitle: "Engineered high-end fitness equipment optimized for your wellness journey.",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
      bgClass: "bg-cyan-50/40",
      accentText: "Fitness, Sport & Outdoor",
      icon: <FiZap className="w-4 h-4" />,
      btnClass: "bg-cyan-600 hover:bg-cyan-700 text-white shadow-cyan-600/10"
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white group/hero">
      <Swiper
        autoplay={{
          delay: 3000, // Kept at exactly 3 seconds per slide auto-rotation
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".hero-custom-pagination",
        }}
        navigation={{
          prevEl: ".hero-prev-btn",
          nextEl: ".hero-next-btn",
        }}
        touchStartPreventDefault={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`w-full transition-colors duration-500 ${slide.bgClass}`}>
              <CarouselSlide
                title={slide.title}
                subtitle={slide.subtitle}
                image={slide.image}
                accentText={slide.accentText}
                icon={slide.icon}
                btnClass={slide.btnClass}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modern Navigation Controls */}
      <button className="hero-prev-btn absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 bg-white border border-gray-100 rounded-full text-gray-400 hover:text-gray-900 shadow-sm hover:shadow-md md:opacity-0 group-hover/hero:opacity-100 transition-all duration-300">
        <FiChevronLeft className="w-5 h-5" />
      </button>

      <button className="hero-next-btn absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 bg-white border border-gray-100 rounded-full text-gray-400 hover:text-gray-900 shadow-sm hover:shadow-md md:opacity-0 group-hover/hero:opacity-100 transition-all duration-300">
        <FiChevronRight className="w-5 h-5" />
      </button>

      {/* Styled Indicator Bar Container */}
      <div className="hero-custom-pagination absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2" />

      <style>{`
        .hero-custom-pagination .swiper-pagination-bullet {
          width: 24px;
          height: 4px;
          border-radius: 2px;
          background: #E5E7EB;
          opacity: 1;
          transition: all 0.4s ease;
        }
        .hero-custom-pagination .swiper-pagination-bullet-active {
          width: 48px;
          background: #111827;
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;