const CarouselSlide = ({ title, subtitle, image, accentText, icon, btnClass }) => {
  return (
    <div className="w-full min-h-[550px] md:h-[650px] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-0">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-2">
        
        {/* Left Info Columns */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left order-2 md:order-1">
          {accentText && (
            <div className="flex items-center gap-2 mb-4 text-gray-400">
              {icon}
              <span className="text-[11px] uppercase tracking-[0.25em] font-bold block">
                {accentText}
              </span>
            </div>
          )}
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-4">
            {title}
          </h1>
          
          <p className="text-sm md:text-base text-gray-500 font-medium tracking-wide max-w-md mb-8">
            {subtitle}
          </p>
          
          <button className={`px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg ${btnClass}`}>
            Shop Collection
          </button>
        </div>

        {/* Right Graphic Columns */}
        <div className="w-full flex justify-center order-1 md:order-2">
          <div className="relative w-4/5 sm:w-2/3 md:w-full max-w-xs md:max-w-sm lg:max-w-md aspect-square flex items-center justify-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100/40">
            <img
              className="max-h-[300px] md:max-h-[380px] w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.06)] select-none pointer-events-none animate-[float_6s_ease-in-out_infinite]"
              src={image}
              alt={title}
            />
          </div>
        </div>

      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default CarouselSlide;