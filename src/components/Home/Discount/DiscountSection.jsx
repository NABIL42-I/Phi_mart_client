import { FiArrowRight, FiMaximize2, FiLayers } from "react-icons/fi";
import DiscountTimer from "./DiscountTimer";

// Premium High-Resolution Football Kit Product Layouts
const KIT_LAYDOWN_MAIN = "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=800";
const KIT_TRAINING_FOLDED = "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=600";
const FOOTBALL_GEAR_TEXT = "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&q=80&w=600";
const DiscountSection = () => {
  return (
    <section className="relative w-full min-h-[700px] bg-neutral-50 flex items-center overflow-hidden py-16 px-4 sm:px-6 lg:px-8 border-y border-neutral-200">
      
      {/* ===== STRUCTURAL PURE BG ===== */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />

      {/* ===== GRID VIEWPORT ===== */}
      <div className="relative z-10 mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT COMPARTMENT: Multi-Pane Kit Frame Layout */}
        <div className="lg:col-span-6 flex justify-center items-center order-2 lg:order-1 select-none">
          <div className="relative w-full max-w-md h-[480px] border border-neutral-300/60 p-4 bg-white/40 backdrop-blur-md cursor-cell group shadow-xl">
            
            {/* Window Bounding Corner Marks */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-neutral-400 group-hover:border-neutral-900 transition-colors" />
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-neutral-400 group-hover:border-neutral-900 transition-colors" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-neutral-400 group-hover:border-neutral-900 transition-colors" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-neutral-400 group-hover:border-neutral-900 transition-colors" />

            {/* Window Identifier Tag */}
            <div className="absolute top-6 left-6 z-30 bg-white/90 backdrop-blur-md px-2.5 py-1 border border-neutral-200 flex items-center gap-2 text-[9px] uppercase tracking-widest text-neutral-600 font-black shadow-sm">
              <FiMaximize2 className="w-2.5 h-2.5 text-neutral-900" />
              <span>Studio_Kit_Deck // Folded</span>
            </div>

            {/* Primary Asset Pane (Main Folded Match Jersey) */}
            <div className="absolute top-4 left-4 w-[65%] h-[75%] bg-white overflow-hidden border border-neutral-200 shadow-md group/pane1 cursor-zoom-in">
              <img 
                src={KIT_LAYDOWN_MAIN} 
                alt="Official Match Kit Design" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover/pane1:scale-110"
              />
            </div>

            {/* Secondary Asset Pane (Training Kit Layer) */}
            <div className="absolute top-20 right-4 w-[45%] h-[50%] bg-white overflow-hidden border border-neutral-200 shadow-2xl group/pane2 cursor-zoom-in z-10 transition-transform duration-500 group-hover:translate-y-[-8px]">
              <div className="absolute top-2 right-2 z-20 bg-white/90 rounded-full p-1 border border-neutral-200 shadow-sm">
                <FiLayers className="w-2 h-2 text-neutral-900" />
              </div>
              <img 
                src={KIT_TRAINING_FOLDED} 
                alt="Championship Training Wear" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover/pane2:scale-110"
              />
            </div>

            {/* Tertiary Asset Pane (Alternative Badge Close-up) */}
            <div className="absolute bottom-4 left-4 w-[40%] h-[25%] bg-white overflow-hidden border border-neutral-200 shadow-sm group/pane3 cursor-crosshair hidden sm:block">
              <img 
                src={FOOTBALL_GEAR_TEXT} 
                alt="Federation Fabric Texture" 
                className="w-full h-full object-cover filter contrast-[1.02] group-hover/pane3:scale-105"
              />
            </div>

            {/* Micro Calibration Numbers */}
            <div className="absolute bottom-6 right-6 font-mono text-[9px] text-neutral-400 tracking-normal hidden sm:block">
              KIT_SPEC_DECK // ALLOCATION_TRUE
            </div>

          </div>
        </div>

        {/* RIGHT COMPARTMENT: Clean Editorial Copy Hub */}
        <div className="lg:col-span-6 text-center lg:text-left flex flex-col gap-6 order-1 lg:order-2">
          
          {/* Micro Ribbon Badge */}
          <div className="flex items-center justify-center lg:justify-start gap-2.5">
            <span className="h-2 w-2 bg-neutral-900 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.1)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-neutral-500">
              International Kit Allocation
            </span>
          </div>

          {/* Headline Typography Layout */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-neutral-950 leading-[1.1]">
            Unlock <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-700">30% Discount</span> <br className="hidden sm:inline" />
            On Football Kits.
          </h1>

          <p className="text-xs sm:text-sm text-neutral-500 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium">
            Acquire official international and domestic club kits. Premium dynamic fabrics, match-ready embroidery, and team-issued training silhouettes are open for priority fulfillment.
          </p>

          {/* Segmented Countdown Component Hook */}
          <div className="flex justify-center lg:justify-start">
            <DiscountTimer />
          </div>

          {/* Action Interface Trigger Button */}
          <div className="pt-2">
            <button className="group relative px-8 py-4 bg-neutral-950 text-white font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-neutral-800 shadow-lg flex items-center justify-center gap-3 mx-auto lg:mx-0 select-none">
              <span>Secure Your Kit</span>
              <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DiscountSection;