import { Link } from "react-router";
import { FaAngleRight } from "react-icons/fa6";

// Explicit design tokens mapping unique iconography and premium color profiles to each category
const getCategoryDesign = (categoryName = "", index) => {
  const name = categoryName.toLowerCase();

  // 1. APPAREL & FASHION
  if (name.includes("apparel") || name.includes("cloth") || name.includes("wear") || name.includes("fashion")) {
    return {
      bg: "bg-amber-50/40 hover:bg-amber-50/90",
      iconColor: "text-amber-600",
      gradient: "from-amber-500 to-orange-600",
      icon: (
        <svg className="w-6 h-6 stroke-[1.75]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      )
    };
  }

  // 2. ELECTRONICS & TECH
  if (name.includes("tech") || name.includes("electron") || name.includes("gadget") || name.includes("phone")) {
    return {
      bg: "bg-blue-50/40 hover:bg-blue-50/90",
      iconColor: "text-blue-600",
      gradient: "from-blue-500 to-indigo-600",
      icon: (
        <svg className="w-6 h-6 stroke-[1.75]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-6 18.75h10.5m-10.5-3h10.5m-10.5-3h10.5m-10.5-3h10.5" />
        </svg>
      )
    };
  }

  // 3. JEWELRY, BAGS & ACCESSORIES
  if (name.includes("access") || name.includes("bag") || name.includes("jewelry") || name.includes("watch")) {
    return {
      bg: "bg-rose-50/40 hover:bg-rose-50/90",
      iconColor: "text-rose-600",
      gradient: "from-rose-500 to-pink-600",
      icon: (
        <svg className="w-6 h-6 stroke-[1.75]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
      )
    };
  }

  // 4. BEAUTY & COSMETICS
  if (name.includes("beaut") || name.includes("cosmetic") || name.includes("care") || name.includes("skin")) {
    return {
      bg: "bg-fuchsia-50/40 hover:bg-fuchsia-50/90",
      iconColor: "text-fuchsia-600",
      gradient: "from-fuchsia-500 to-purple-600",
      icon: (
        <svg className="w-6 h-6 stroke-[1.75]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75ZM12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-3.75a4.5 4.5 0 0 1-3.897-2.25h7.794A4.5 4.5 0 0 1 12 17.25Z" />
        </svg>
      )
    };
  }

  // 5. HOME & LIVING
  if (name.includes("home") || name.includes("decor") || name.includes("furnit") || name.includes("liv")) {
    return {
      bg: "bg-emerald-50/40 hover:bg-emerald-50/90",
      iconColor: "text-emerald-600",
      gradient: "from-emerald-500 to-teal-600",
      icon: (
        <svg className="w-6 h-6 stroke-[1.75]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      )
    };
  }

  // 6. FITNESS, SPORT & OUTDOOR
  if (name.includes("fit") || name.includes("sport") || name.includes("gym") || name.includes("health")) {
    return {
      bg: "bg-cyan-50/40 hover:bg-cyan-50/90",
      iconColor: "text-cyan-600",
      gradient: "from-cyan-500 to-blue-600",
      icon: (
        <svg className="w-6 h-6 stroke-[1.75]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
    };
  }

  // FALLBACK DYNAMIC COLOR CHANNELS BASED ON CARD INDEX
  const fallbacks = [
    { bg: "bg-violet-50/40 hover:bg-violet-50/90", iconColor: "text-violet-600", gradient: "from-violet-500 to-purple-600" },
    { bg: "bg-sky-50/40 hover:bg-sky-50/90", iconColor: "text-sky-600", gradient: "from-sky-500 to-indigo-600" },
    { bg: "bg-lime-50/40 hover:bg-lime-50/90", iconColor: "text-lime-600", gradient: "from-emerald-500 to-lime-600" }
  ];
  
  const chosenFallback = fallbacks[index % fallbacks.length];
  return {
    ...chosenFallback,
    icon: (
      <svg className="w-6 h-6 stroke-[1.75]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l8.954-8.955c.44-.439.44-1.152 0-1.591L9 1.5l.813 5.096A4.5 4.5 0 0113.5 11v1a4.5 4.5 0 01-3.687 3.904z" />
      </svg>
    )
  };
};

const CategoryItems = ({ index, category }) => {
  const design = getCategoryDesign(category.name, index);

  return (
    <Link
      to={`/shop?category=${category.id || category.name.toLowerCase()}`}
      className={`group block overflow-hidden rounded-xl border border-gray-100/80 shadow-xs ${design.bg} hover:border-gray-300 transition-all duration-300 ease-out h-full flex flex-col justify-between`}
    >
      <div className="p-8 flex flex-col h-full justify-between">
        
        {/* Top Row Header */}
        <div className="flex justify-between items-start gap-4 mb-10">
          
          {/* Dynamic Vector Icon Box with Colorful Gradient Fills */}
          <div className={`${design.iconColor} bg-white p-3 rounded-xl shadow-xs border border-gray-100 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-out`}>
            {design.icon}
          </div>
          
          {/* Item Counter Badge */}
          <span className={`text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-white shadow-2xs text-gray-700 border border-gray-100`}>
            {category.product_count || 0} Items
          </span>
        </div>

        {/* Core Content Typography */}
        <div className="flex-grow">
          {/* Bold Premium Heading */}
          <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-2 group-hover:text-gray-700 transition-colors duration-200">
            {category.name}
          </h3>
          <p className="text-xs text-gray-500 font-medium tracking-wide leading-relaxed line-clamp-3 max-w-[95%]">
            {category.description || "Discover premium collections curated for design, quality, and everyday luxury."}
          </p>
        </div>

        {/* Bottom Navigation Ribbon */}
        <div className="mt-8 pt-4 border-t border-gray-900/5 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] font-bold text-gray-900">
          {/* Dynamic color text change matching the category theme on hover */}
          <span className="group-hover:opacity-80 transition-opacity">Explore</span>
          
          {/* Animated Arrow Motion Wrapper */}
          <div className="transform -translate-x-1 group-hover:translate-x-0 transition-transform duration-300 ease-out">
            <FaAngleRight className={`text-xs ${design.iconColor} transition-colors`} />
          </div>
        </div>

      </div>
    </Link>
  );
};

export default CategoryItems;