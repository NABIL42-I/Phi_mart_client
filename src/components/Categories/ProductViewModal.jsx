import  { useState, useEffect } from 'react';
import { Link } from 'react-router';
import useAuthContext from '../../hooks/useAuthContext';

const ProductViewModal = ({ product, onClose }) => {
    console.log("Proororo",product);
    if (!product) return null;
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const {user} = useAuthContext()


  // Apply scroll lock when the modal mounts
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // Safety fallback: clean up if component unmounts naturally
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [product]);

  // Unified close function that unlocks scroll FIRST, then closes the modal
  const handleClose = () => {
    document.body.style.overflow = 'unset'; // Unlock the screen immediately
    onClose(); // Trigger parent close state
  };

  return (
    <div className="modal modal-open modal-bottom sm:modal-middle z-50 animate-in fade-in duration-200">
      {/* Backdrop overlay */}
      <div className="modal-backdrop bg-neutral/60 backdrop-blur-sm" onClick={handleClose}></div>
      
      {/* Modal Container */}
      <div className="modal-box w-full max-w-5xl max-h-[90vh] sm:max-h-[85vh] bg-white p-0 overflow-y-auto relative border border-gray-100 shadow-2xl rounded-t-2xl sm:rounded-2xl md:rounded-3xl">
        
        {/* Safe Floating Close Button */}
        <button 
          onClick={handleClose} 
          className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 sm:right-4 sm:top-4 z-20 text-gray-500 hover:text-gray-900 bg-white/90 backdrop-blur-md border border-gray-200/50 shadow-sm"
        >
          ✕
        </button>

        {/* Master Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 p-4 sm:p-6 lg:p-10">
          
          {/* LEFT COLUMN: Media Panel */}
          <div className="flex flex-col space-y-3">
            <div className="relative w-full aspect-square max-h-[320px] sm:max-h-none bg-gray-50 rounded-xl md:rounded-2xl overflow-hidden group border border-gray-100 shadow-inner flex items-center justify-center">
              {product.images && product.images.length > 0 ? (
                <img 
                  src={product.images[activeImageIdx]?.image || product.images[0].image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-gray-100 p-4 text-center">
                  <svg className="w-10 h-10 mb-1 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 002-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs font-medium">No Image Available</span>
                </div>
              )}
              
              <span className="absolute top-3 left-3 bg-gray-900/80 backdrop-blur-md text-[10px] font-mono font-bold px-2 py-1 rounded-md shadow-sm text-white">
                REF: #{product.id}
              </span>
            </div>

            {/* Thumbnail Carousel */}
            {product.images && product.images.length > 1 && (
              <div className="flex sm:grid sm:grid-cols-4 gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none snap-x">
                {product.images.slice(0, 4).map((img, idx) => (
                  <button 
                    key={img.id || idx} 
                    onClick={() => setActiveImageIdx(idx)}
                    className={`h-16 w-16 sm:h-auto sm:w-auto aspect-square shrink-0 bg-gray-50 rounded-lg overflow-hidden border-2 transition-all duration-200 snap-center ${
                      activeImageIdx === idx ? 'border-gray-900 scale-95 shadow-sm' : 'border-gray-100 hover:border-gray-300'
                    }`}
                  >
                    <img src={img.image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Info Matrix Sheet */}
          <div className="flex flex-col justify-between space-y-5">
            <div>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-emerald-50 text-emerald-700 tracking-wide mb-2">
                {product.category || "General Marketplace"}
              </span>

              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight mb-2 pr-6">
                {product.name}
              </h1>

              <div className="flex flex-wrap items-baseline gap-1.5 mb-4 pb-3 border-b border-gray-100">
                <span className="text-2xl sm:text-3xl font-black text-gray-900">
                  ${product.price_with_tax || product.price}
                </span>
                {product.price_with_tax && (
                  <span className="text-[11px] text-gray-400 font-medium">
                    Inc. tax (Base: ${product.price})
                  </span>
                )}
              </div>

              <div className="space-y-1 mb-5">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Overview</h3>
                <p className="text-gray-600 leading-relaxed font-normal text-xs sm:text-sm max-h-[120px] overflow-y-auto pr-1">
                  {product.description !== "None" && product.description 
                    ? product.description 
                    : "This premium product asset is verified. Logistics records and certification parameters are available on administration request."}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 bg-gray-50/70 p-3 rounded-xl border border-gray-100 text-xs">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-medium text-gray-400 block">Stock Integrity</span>
                  <div className="flex items-center space-x-1.5">
                    <span className={`h-2 w-2 rounded-full ${product.stock > 0 ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`}></span>
                    <span className="font-bold text-gray-800">{product.stock} Units</span>
                  </div>
                </div>
                  <div className="space-y-0.5">
                        <span className="text-[10px] font-medium text-gray-400 block">Fulfillment</span>
                        {product.stock > 0 ? (
                            <span className="inline-flex items-center gap-1 font-medium text-emerald-600 bg-emerald-50 text-[10px] px-2 py-0.5 rounded border border-emerald-200/40">
                            {/* Premium Check Badge Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                            Available
                            </span>
                        ) : (
                            <span className="inline-flex items-center gap-1 font-medium text-rose-600 bg-rose-50 text-[10px] px-2 py-0.5 rounded border border-rose-200/40">
                            {/* Premium Package/Clock Alert Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            Backordered
                            </span>
                        )}
                    </div>
              </div>
            </div>

            {/* ACTION INTERFACE FOOTER */}
            <div className="pt-4 border-t border-gray-100 space-y-2.5">
              <div className="flex flex-col sm:flex-row gap-2">


{user && <button 
                  disabled={product.stock <= 0}
                  className="w-full sm:flex-1 btn btn-primary border-none bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-200 text-white font-semibold text-xs h-11 min-h-0 rounded-xl flex items-center justify-center gap-1.5 normal-case"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1,0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0,1-1.12-1.243l1.264-12A1.125 1.125 0 0,1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1,1-.75 0 .375.375 0 0,1 .75 0Zm7.5 0a.375.375 0 1,1-.75 0 .375.375 0 0,1 .75 0Z" />
                  </svg>
                    <Link 
                  to={product.stock > 0 ? `/shop/${product.id}` : '#'}     
                    onClick={(e) => product.stock <= 0 && e.preventDefault()} // Stops link click if item is sold out
                    className={`w-full sm:flex-1 btn border-none font-semibold text-xs h-11 min-h-0 rounded-xl flex items-center justify-center gap-1.5 normal-case transition-all duration-200 shadow-sm
                        ${product.stock > 0 
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white active:scale-[0.98]' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed pointer-events-none'
                        }`}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1,0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0,1-1.12-1.243l1.264-12A1.125 1.125 0 0,1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1,1-.75 0 .375.375 0 0,1 .75 0Zm7.5 0a.375.375 0 1,1-.75 0 .375.375 0 0,1 .75 0Z" />
                    </svg>
                    {product.stock > 0 ? 'Place to Cart' : 'Sold Out'}
                    </Link>              
  </button> }
                




                <button className="w-full sm:flex-1 bg-gray-900 hover:bg-gray-800 text-white font-semibold text-xs h-11 rounded-xl">
                  Release Manifest
                </button>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 px-4 h-9 bg-white hover:bg-gray-50 text-gray-700 font-semibold text-xs rounded-xl border border-gray-200 transition-colors duration-200">
                  Invoice
                </button>
                <button 
                  onClick={handleClose} // Replaced with our new safe wrapper
                  className="px-4 h-9 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-xs rounded-xl transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;