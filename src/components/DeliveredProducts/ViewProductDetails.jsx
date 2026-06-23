import React, { useState } from 'react';

const ViewProductDetails = ({ product }) => {
  if (!product) return null;

  // Track the active image index for the thumbnail switcher
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ease-out animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Container spacing drops down from p-12 on desktop to p-4 on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 p-4 sm:p-6 lg:p-12">
        
        {/* Left Side: Premium Image Media Showcase */}
        <div className="flex flex-col space-y-3 md:space-y-4">
          <div className="relative w-full aspect-square bg-gray-50 rounded-xl md:rounded-2xl overflow-hidden group border border-gray-100 shadow-inner">
            {product.images && product.images.length > 0 ? (
              <img 
                src={product.images[activeImageIdx]?.image || product.images[0].image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-gray-100">
                <svg className="w-12 h-12 mb-2 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 002-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium">No Image Available</span>
              </div>
            )}
            
            {/* Dynamic context reference tag stays floating clean */}
            <span className="absolute top-3 left-3 md:top-4 md:left-4 bg-gray-900/80 backdrop-blur-md text-[10px] md:text-xs font-mono font-bold px-2.5 py-1 md:py-1.5 rounded-lg shadow-sm text-white">
              REF: #{product.id}
            </span>
          </div>

          {/* Secondary Thumbnail Dynamic Grid (Taps switch the preview instantly) */}
          {product.images && product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2 md:gap-3">
              {product.images.slice(0, 4).map((img, idx) => (
                <button 
                  key={img.id || idx} 
                  onClick={() => setActiveImageIdx(idx)}
                  className={`aspect-square bg-gray-50 rounded-lg md:rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    activeImageIdx === idx ? 'border-gray-900 scale-95 shadow-sm' : 'border-gray-100 hover:border-gray-300'
                  }`}
                >
                  <img src={img.image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Product Matrix & Breakdown Content */}
        <div className="flex flex-col justify-between space-y-6 md:space-y-8">
          <div>
            {/* Category Breadcrumb */}
            <span className="inline-flex items-center px-2.5 py-0.5 md:py-1 rounded-full text-[11px] md:text-xs font-semibold bg-emerald-50 text-emerald-700 tracking-wide mb-3 md:mb-4">
              {product.category || "General Marketplace"}
            </span>

            {/* Title scales safely based on container constraints */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-3 md:mb-4">
              {product.name}
            </h1>

            {/* Price Overview Block */}
            <div className="flex flex-wrap items-baseline gap-2 mb-4 md:mb-6 pb-4 md:pb-6 border-b border-gray-100">
              <span className="text-3xl md:text-4xl font-black text-gray-900">
                ${product.price_with_tax || product.price}
              </span>
              {product.price_with_tax && (
                <span className="text-xs md:text-sm text-gray-400 font-medium">
                  Includes tax (Base: ${product.price})
                </span>
              )}
            </div>

            {/* Product Meta Description */}
            <div className="space-y-1 md:space-y-2 mb-6 md:mb-8">
              <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">Overview</h3>
              <p className="text-gray-600 leading-relaxed font-normal text-sm md:text-base">
                {product.description !== "None" && product.description 
                  ? product.description 
                  : "This exclusive premium item is fully certified and verified. Complete processing parameters, logistics logs, and records are available on request."}
              </p>
            </div>

            {/* Info Grid Breakdown (Converts to single-column on small screens) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 bg-gray-50/70 p-4 md:p-5 rounded-xl md:rounded-2xl border border-gray-100">
              <div className="space-y-0.5 md:space-y-1">
                <span className="text-[11px] md:text-xs font-medium text-gray-400 block">Inventory Integrity</span>
                <div className="flex items-center space-x-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${product.stock > 0 ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`}></span>
                  <span className="font-bold text-gray-800 text-xs md:text-sm">{product.stock} Units Stocked</span>
                </div>
              </div>
              <div className="space-y-0.5 md:space-y-1">
                <span className="text-[11px] md:text-xs font-medium text-gray-400 block">Fulfillment Status</span>
                <span className="inline-block font-semibold text-amber-600 bg-amber-50 text-[11px] px-2.5 py-0.5 rounded border border-amber-200/50">
                  Awaiting Clearance
                </span>
              </div>
            </div>
          </div>

          {/* User Operations/Actions Bar (Stacks vertically on mobile) */}
          <div className="pt-4 md:pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3 md:gap-4">
            <button className="w-full sm:flex-1 bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm py-3 md:py-3.5 px-6 rounded-xl transition-all duration-200 shadow-sm shadow-gray-900/10 active:scale-[0.98]">
              Release Delivery Manifest
            </button>
            <button className="w-full sm:w-auto px-6 py-3 md:py-3.5 bg-white hover:bg-gray-50 text-gray-700 font-semibold text-sm rounded-xl border border-gray-200 transition-colors duration-200">
              Download Invoice
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ViewProductDetails;