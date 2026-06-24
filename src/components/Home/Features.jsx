import { FiTruck, FiShield, FiTag, FiCheckCircle } from "react-icons/fi";

const Features = () => {
  const features = [
    {
      icon: <FiTruck className="w-5 h-5" />,
      title: "Free Delivery",
      description: "Get your orders delivered at no extra cost, fast and hassle-free.",
      colorClass: "text-amber-600 bg-amber-50 border-amber-100/70",
      hoverClass: "group-hover:bg-amber-600 group-hover:text-white"
    },
    {
      icon: <FiCheckCircle className="w-5 h-5" />,
      title: "Quality Guarantee",
      description: "We ensure top-notch premium quality for every product you purchase.",
      colorClass: "text-emerald-600 bg-emerald-50 border-emerald-100/70",
      hoverClass: "group-hover:bg-emerald-600 group-hover:text-white"
    },
    {
      icon: <FiTag className="w-5 h-5" />,
      title: "Daily Offers",
      description: "Exclusive luxury discounts and special deals available every single day.",
      colorClass: "text-rose-600 bg-rose-50 border-rose-100/70",
      hoverClass: "group-hover:bg-rose-600 group-hover:text-white"
    },
    {
      icon: <FiShield className="w-5 h-5" />,
      title: "Secure Payment",
      description: "Your payment information is globally encrypted and completely secure.",
      colorClass: "text-blue-600 bg-blue-50 border-blue-100/70",
      hoverClass: "group-hover:bg-blue-600 group-hover:text-white"
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 w-full overflow-hidden">
      <div className="px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-start text-left p-8 rounded-xl border border-gray-100/80 bg-[#FBFBFA]/40 hover:bg-white hover:border-gray-200 hover:shadow-xs transition-all duration-300 ease-out"
            >
              {/* Micro-Interaction Colorful Icon Capsule */}
              <div className={`p-3.5 rounded-xl border mb-6 flex items-center justify-center shadow-2xs transform group-hover:scale-105 group-hover:-translate-y-0.5 transition-all duration-300 ease-out ${feature.colorClass} ${feature.hoverClass}`}>
                {feature.icon}
              </div>
              
              {/* Premium Bold Heading */}
              <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-2 group-hover:text-gray-700 transition-colors duration-200">
                {feature.title}
              </h3>
              
              {/* Body Text */}
              <p className="text-xs text-gray-400 font-medium tracking-wide leading-relaxed max-w-[90%]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;