// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Import Swiper required styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import DotLottie player
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ProductList = ({ products,onViewDetails }) => {
  // Empty State with Verified Public Lottie Animation Link
  if (!products || products.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center p-12 min-h-[60vh] text-center">
        {/* Animated Sticker/Illustration */}
        <div className="w-64 h-64 mb-4 select-none pointer-events-none">
          <DotLottieReact
            // Using a guaranteed public, permanent open-source e-commerce empty state JSON link
            src="https://assets2.lottiefiles.com/packages/lf20_dmw3qlww.json"
            loop
            autoplay
          />
        </div>
        {/* Text Description */}
        <h3 className="text-xl font-bold text-gray-800 mb-1">
          No Products Found
        </h3>
        <p className="text-gray-400 text-sm max-w-sm">
          It looks like there are no unpaid items or processing orders available at the moment.
        </p>
      </div>
    );
  }

  // Active Grid List Layout with 3D Coverflow Swiper Galleries
  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-50 min-h-screen">
      {products.map((product, index) => (
        <div 
          // Unique composite key ensures React console warnings completely disappear
          key={`${product.id}-${index}`} 
          className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col"
        >
          {/* 3D Coverflow Swiper */}
          <div className="relative w-full h-64 bg-gray-900 group pt-4 overflow-hidden">
            {product.images && product.images.length > 0 ? (
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 35,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation={true}
                className="w-full h-full pb-8"
                style={{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff',
                  '--swiper-navigation-size': '18px',
                }}
              >
                {product.images.map((img) => (
                  <SwiperSlide key={img.id} style={{ width: '220px', height: '180px' }}>
                    <img 
                      src={img.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover rounded-xl shadow-lg border border-white/20"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                No Image Available
              </div>
            )}
            
            {/* Floating Category Badge */}
            <span className="absolute top-3 right-3 z-10 bg-black/60 text-white text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
              Cat: {product.category}
            </span>
          </div>

          {/* Product Details Content */}
          <div className="p-5 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-gray-900 tracking-tight line-clamp-1">
                {product.name}
              </h3>
              <span className="text-xs font-mono text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                #{product.id}
              </span>
            </div>

            <p className="text-gray-500 text-sm mb-4 line-clamp-2 min-h-[40px]">
              {product.description !== "None" ? product.description : "No description provided for this premium item."}
            </p>

            {/* Attributes Matrix */}
            <div className="grid grid-cols-2 gap-3 mb-6 bg-gray-50 p-3 rounded-xl text-xs text-gray-600">
              <div>
                <span className="text-gray-400 block mb-0.5">Base Price</span>
                <span className="font-semibold text-gray-800">${product.price}</span>
              </div>
              <div>
                <span className="text-gray-400 block mb-0.5">Incl. Tax</span>
                <span className="font-semibold text-gray-900">${product.price_with_tax}</span>
              </div>
              <div className="col-span-2 border-t border-gray-200/60 pt-2 flex justify-between items-center">
                <span className="text-gray-400">Inventory Stock</span>
                <span className={`font-bold ${product.stock < 10 ? 'text-red-500' : 'text-emerald-600'}`}>
                  {product.stock} units
                </span>
              </div>
            </div>

            {/* Quick Action Button */}

            <button 
            onClick={() => onViewDetails(product)}
            className="w-full mt-auto bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm py-2.5 px-4 rounded-xl transition-colors duration-200">
            View Product Details
            </button>

          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;