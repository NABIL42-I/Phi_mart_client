import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

// Absolute requirements for Swiper to function as a carousel
import "swiper/css";
import "swiper/css/navigation";

import ErroAlert from "../ErrorAlert";
import apiClient from "../../services/api-client";
import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get("/products/")
      .then((res) => setProducts(res.data.results || []))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    // min-h-screen and flex items-center places the carousel directly in the vertical middle of the viewer's screen
    <section className="bg-white min-h-screen flex items-center py-16 md:py-24 w-full overflow-hidden">
      <div className="px-4 max-w-7xl mx-auto w-full flex flex-col justify-center">
        
        {/* Editorial Layout Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-4 border-b border-gray-100 w-full">
          <div>
            <span className="text-[14px] uppercase tracking-[0.25em] text-gray-400 font-medium block mb-2">
              Curated Collection
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900">
              Trending Products
            </h2>
          </div>
          
          <div className="flex items-center gap-6 self-end sm:self-auto">
            {/* Custom Modern Carousel Control Buttons */}
            <div className="flex items-center gap-3">
              <button className="swiper-prev-custom flex items-center justify-center w-9 h-9 border border-gray-200 rounded-full text-gray-400 hover:text-gray-900 hover:border-gray-900 transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
              </button>
              <button className="swiper-next-custom flex items-center justify-center w-9 h-9 border border-gray-200 rounded-full text-gray-400 hover:text-gray-900 hover:border-gray-900 transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>

          <div className="flex items-center gap-6 self-end sm:self-auto">
            <Link
              to="/shop"
              className="group flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-900 hover:text-gray-500 transition-colors duration-200 border-b border-gray-900 pb-1"
            >
              <span className="text-[14px] uppercase tracking-[0.25em] text-black font-medium block mb-2">View All</span>
              <FiArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform duration-300 ease-out" />
            </Link>
          </div>

          </div>
        </div>

        {error && <ErroAlert error={error} />}

        {/* Premium Skeleton Shimmer States (Centered Placement) */}
        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="w-full space-y-4 animate-pulse">
                <div className="aspect-[3/4] w-full bg-gray-100 rounded-sm" />
                <div className="h-4 bg-gray-100 w-3/4" />
                <div className="h-3 bg-gray-100 w-1/2" />
              </div>
            ))}
          </div>
        )}

        {/* Center-Framed Swiper Carousel Container Layout */}
        {!isLoading && !error && products.length > 0 && (
          <div className="w-full relative mx-auto">
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              touchStartPreventDefault={false} // Stops carousel gestures from blocking page scrolling on touch screens
              breakpoints={{
                540: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 24 },
                1024: { slidesPerView: 4, spaceBetween: 30 },
              }}
              navigation={{
                prevEl: ".swiper-prev-custom",
                nextEl: ".swiper-next-custom",
              }}
              className="w-full"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  {/* Internal Carousel-Enabled Card component */}
                  <ProductItem product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {!isLoading && !error && products.length === 0 && (
          <p className="text-center text-gray-400 font-light text-sm py-12 w-full">
            No Products Available
          </p>
        )}
      </div>
    </section>
  );
};

export default Product;