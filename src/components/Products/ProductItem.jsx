import { Link } from "react-router";
import defaultImage from "../../assets/default_product.jpg";

const ProductItem = ({ product }) => {
  // Gracefully handle missing image arrays
  const productImage = product.images && product.images.length > 0 
    ? product.images[0].image 
    : defaultImage;

  return (
    <Link 
      to={`/shop/${product.id}`} 
      className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full max-w-sm"
    >
      {/* Image Container with Fixed Aspect Ratio */}
      <div className="relative aspect-square w-full bg-gray-50 overflow-hidden">
        <img
          src={productImage}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Subtle Stock/Status Tag Example (Optional) */}
        {product.stock <= 0 && (
          <span className="absolute top-3 left-3 bg-gray-900/80 backdrop-blur-xs text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md">
            Sold Out
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col gap-1.5">
        {/* Category or small metadata line if you have it */}
        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
          Collection
        </span>

        {/* Title */}
        <h2 className="font-semibold text-gray-800 text-base line-clamp-1 group-hover:text-emerald-600 transition-colors">
          {product.name}
        </h2>
        
        {/* Description */}
        <p className="text-xs text-gray-500 line-clamp-2 min-h-[2rem] leading-relaxed">
          {product.description}
        </p>

        {/* Price & Action Row */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
          <span className="font-bold text-lg text-gray-900">
            ${product.price}
          </span>
          
          {/* A sleek, modern indicator that replaces the clunky button inside a link */}
          <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            View Details 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;