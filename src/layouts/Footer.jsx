import { useState } from "react";
import { FiArrowRight, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative w-full bg-neutral-950 text-neutral-200 overflow-hidden pt-12 pb-8 border border-neutral-900 shadow-2xl">
      
      {/* ===== 4-SIDE HIGH-INTENSITY HYPER-BRIGHT LASER SYSTEM ===== */}
      <div 
        className="absolute inset-0 pointer-events-none filter drop-shadow-[0_0_12px_rgba(163,230,53,0.85)] drop-shadow-[0_0_25px_rgba(163,230,53,0.5)]" 
        style={{
          padding: '2px', // Slightly thicker path for higher visibility
          background: 'linear-gradient(var(--laser-angle, 0deg), transparent 60%, #bef264 85%, #a3e635 95%, transparent 100%)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          animation: 'rotate-laser 4s linear infinite' // Sped up slightly for sharper energy
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Upper Layout: Simplified Content Split */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 pb-12 border-b border-neutral-900">
          
          {/* Brand & Statement */}
          <div className="flex flex-col gap-4 max-w-sm">
            <a href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight text-white group">
              <span className="bg-lime-400 text-neutral-950 h-7 w-7 flex items-center justify-center font-black transition-transform duration-500 group-hover:rotate-90">
                ▲
              </span>
              <span>PhiMart</span>
            </a>
            <p className="text-xs text-neutral-400 leading-relaxed font-medium">
              Architecting high-performance digital retail ecosystems with modular components and clean minimalist layouts.
            </p>
          </div>

          {/* Minimalist Grid Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-6">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Shop</span>
              <nav className="flex flex-col gap-2 text-xs font-medium text-neutral-400">
                <a href="/category/fashion" className="hover:text-white transition-colors">Apparel</a>
                <a href="/category/electronics" className="hover:text-white transition-colors">Tech</a>
                <a href="/category/jewelry-bags" className="hover:text-white transition-colors">Accessories</a>
              </nav>
            </div>
            
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Company</span>
              <nav className="flex flex-col gap-2 text-xs font-medium text-neutral-400">
                <a href="/about" className="hover:text-white transition-colors">About</a>
                <a href="/careers" className="hover:text-white transition-colors">Careers</a>
                <a href="/contact" className="hover:text-white transition-colors">Contact</a>
              </nav>
            </div>

            {/* Newsletter Integrator */}
            <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Newsletter</span>
              <form onSubmit={(e) => e.preventDefault()} className="relative max-w-[220px]">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email" 
                  className="w-full pl-3 pr-8 py-1.5 bg-neutral-900 border border-neutral-800 rounded-none text-xs placeholder-neutral-500 text-white focus:outline-none focus:border-neutral-600 transition-all"
                />
                <button type="submit" aria-label="Subscribe" className="absolute right-1.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white transition-colors">
                  <FiArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Lower Layout: Base Alignment & Micro-Socials */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 font-medium">
          <p>© {new Date().getFullYear()} PhiMart. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <a href="/privacy" className="hover:text-neutral-300 transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-neutral-300 transition-colors">Terms</a>
            </div>

            <div className="flex gap-3 text-neutral-400 border-l border-neutral-900 pl-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FiInstagram className="w-3.5 h-3.5" /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FiTwitter className="w-3.5 h-3.5" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FiLinkedin className="w-3.5 h-3.5" /></a>
            </div>
          </div>
        </div>

      </div>

      {/* Cross-Browser Custom Engine Injection */}
      <style>{`
        @property --laser-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        @keyframes rotate-laser {
          0% { --laser-angle: 0deg; }
          100% { --laser-angle: 360deg; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;