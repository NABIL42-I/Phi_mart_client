
const Footer = () => {
  return (
    <footer className="relative w-full bg-neutral-100 text-white overflow-hidden p-1 sm:p-4 animate-[fadeIn_0.6s_ease-out]">
      {/* ===== RUNNING LIGHT EFFECT ===== */}

{/* LEFT COMET RAIL */}
<div className="absolute left-0 top-0 h-full w-8 overflow-visible pointer-events-none z-50">
  <div className="absolute animate-running-light">
    
    {/* Head (brightest) */}
    <div className="w-2 h-10 rounded-full bg-lime-300 shadow-[0_0_40px_15px_#bef264]" />

    {/* Trail */}
    <div className="w-2 h-8 mt-1 rounded-full bg-lime-400/80 shadow-[0_0_25px_8px_#a3e635]" />
    <div className="w-2 h-7 mt-1 rounded-full bg-lime-400/60 shadow-[0_0_18px_6px_#84cc16]" />
    <div className="w-2 h-6 mt-1 rounded-full bg-lime-400/40 shadow-[0_0_12px_4px_#65a30d]" />
    <div className="w-2 h-5 mt-1 rounded-full bg-lime-400/25 shadow-[0_0_8px_2px_#4d7c0f]" />
    <div className="w-2 h-4 mt-1 rounded-full bg-lime-400/15" />
    <div className="w-2 h-3 mt-1 rounded-full bg-lime-400/10" />
  </div>
</div>

{/* RIGHT COMET RAIL */}
<div className="absolute right-0 top-0 h-full w-8 overflow-visible pointer-events-none z-50">
  <div className="absolute right-0 animate-running-light-reverse">
    
    {/* Head (brightest) */}
    <div className="w-2 h-10 rounded-full bg-emerald-300 shadow-[0_0_40px_15px_#6ee7b7]" />

    {/* Trail */}
    <div className="w-2 h-8 mt-1 rounded-full bg-emerald-400/80 shadow-[0_0_25px_8px_#34d399]" />
    <div className="w-2 h-7 mt-1 rounded-full bg-emerald-400/60 shadow-[0_0_18px_6px_#10b981]" />
    <div className="w-2 h-6 mt-1 rounded-full bg-emerald-400/40 shadow-[0_0_12px_4px_#059669]" />
    <div className="w-2 h-5 mt-1 rounded-full bg-emerald-400/25 shadow-[0_0_8px_2px_#047857]" />
    <div className="w-2 h-4 mt-1 rounded-full bg-emerald-400/15" />
    <div className="w-2 h-3 mt-1 rounded-full bg-emerald-400/10" />
  </div>
</div>

{/* Permanent Edge Glow */}
<div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-lime-400/50 to-transparent z-20" />
<div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-emerald-400/50 to-transparent z-20" />
      
      {/* BACKGROUND GRAPHICS: Aurora Mesh Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-neutral-950 to-emerald-900 opacity-90 pointer-events-none" />
      
      {/* ─── LEFT SIDE HIGH-VISIBILITY DYNAMIC ANIMATIONS ─── */}
      {/* Massive Pulsing Core */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-lime-500/30 via-emerald-500/10 to-transparent blur-[120px] pointer-events-none animate-[pulse_5s_ease-in-out_infinite]" />
      
      {/* Hyper-Visible Floating Node Grid */}
      <div className="absolute bottom-12 left-12 opacity-40 pointer-events-none hidden xl:block animate-[bounce_6s_ease-in-out_infinite]">
        <div className="relative p-4 rounded-2xl bg-white/[0.01] backdrop-blur-sm border border-white/5 shadow-2xl">
          <div className="grid grid-cols-4 gap-3 w-16 h-16">
            {[...Array(16)].map((_, i) => (
              <div 
                key={i} 
                className="w-1.5 h-1.5 bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full shadow-[0_0_10px_#a3e635] animate-[ping_2.5s_linear_infinite]"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ─── RIGHT SIDE HIGH-VISIBILITY DYNAMIC ANIMATIONS ─── */}
      {/* Deep Space Aura Glow */}
      <div className="absolute -bottom-40 -right-40 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-teal-500/25 via-emerald-600/15 to-transparent blur-[140px] pointer-events-none animate-[pulse_8s_ease-in-out_infinite_1s]" />
      
      {/* Dual Axis Interlocking Orbital Ring Set */}
      <div className="absolute top-20 right-20 opacity-50 pointer-events-none hidden lg:block">
        <div className="relative w-32 h-32 flex items-center justify-center animate-[spin_16s_linear_infinite]">
          {/* Outer Ring */}
          <div className="absolute w-32 h-32 border border-dashed border-lime-400/30 rounded-full" />
          <div className="absolute top-0 w-3.5 h-3.5 bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full shadow-[0_0_15px_#a3e635] animate-[bounce_1.5s_ease-in-out_infinite]" />
          
          {/* Inner Reverse Ring */}
          <div className="absolute w-20 h-20 border border-dotted border-emerald-500/40 rounded-full animate-[spin_8s_linear_infinite_reverse]" />
          <div className="absolute bottom-2 left-2 w-2.5 h-2.5 bg-teal-400 rounded-full shadow-[0_0_10px_#34d399]" />
        </div>
      </div>

      {/* MAIN CONTAINER: High Glassmorphism Wrap */}
      <div className="relative z-10 mx-auto max-w-7xl my-6 mx-4 sm:mx-6 lg:mx-auto p-8 md:p-14 rounded-3xl bg-emerald-950/20 backdrop-blur-xl shadow-2xl shadow-emerald-950/50 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
        
        {/* Brand Block */}
        <div className="flex flex-col gap-5 lg:col-span-2 transform transition-all duration-300 hover:-translate-y-1">
          <a href="/" className="flex items-center gap-3 font-bold text-2xl tracking-tight group cursor-pointer w-fit">
            <span className="bg-gradient-to-tr from-lime-400 to-emerald-500 text-neutral-950 h-10 w-10 rounded-xl flex items-center justify-center font-black transition-transform duration-700 group-hover:rotate-[360deg] shadow-lg shadow-lime-500/30">
              ▲
            </span>
            <span className="bg-gradient-to-r from-white via-slate-200 to-lime-300 bg-clip-text text-transparent font-extrabold tracking-wide">
              PhiMart
            </span>
          </a>
          <p className="text-sm text-emerald-100/60 max-w-xs leading-relaxed">
            Architecting high-performance digital ecosystems utilizing modern glassmorphism, dynamic green nodes, and completely borderless containers.
          </p>
        </div>

        {/* Services Glass Column */}
        <nav className="flex flex-col gap-4 p-5 rounded-2xl bg-white/[0.02] backdrop-blur-md transition-all duration-300 hover:bg-white/[0.05] hover:-translate-y-1.5 shadow-xl">
          <h6 className="text-[11px] font-bold uppercase tracking-[0.25em] bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">Services</h6>
          {[
            { label: 'Branding', path: '/services/branding' },
            { label: 'Design', path: '/services/design' },
            { label: 'Marketing', path: '/services/marketing' },
            { label: 'Advertising', path: '/services/advertising' }
          ].map((item) => (
            <a key={item.label} href={item.path} className="group text-sm text-emerald-100/70 hover:text-lime-300 transition-all duration-300 flex items-center gap-0 hover:gap-2.5 cursor-pointer w-fit">
              <span className="h-1 w-0 bg-lime-400 rounded-full transition-all duration-300 group-hover:w-3 opacity-0 group-hover:opacity-100 shadow-[0_0_8px_#a3e635]" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Company Glass Column */}
        <nav className="flex flex-col gap-4 p-5 rounded-2xl bg-white/[0.02] backdrop-blur-md transition-all duration-300 hover:bg-white/[0.05] hover:-translate-y-1.5 shadow-xl">
          <h6 className="text-[11px] font-bold uppercase tracking-[0.25em] bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Company</h6>
          {[
            { label: 'About', path: '/about' },
            { label: 'Contact', path: '/contact' },
            { label: 'Jobs', path: '/careers' },
            { label: 'Press Kit', path: '/press' }
          ].map((item) => (
            <a key={item.label} href={item.path} className="group text-sm text-emerald-100/70 hover:text-emerald-300 transition-all duration-300 flex items-center gap-0 hover:gap-2.5 cursor-pointer w-fit">
              <span className="h-1 w-0 bg-emerald-400 rounded-full transition-all duration-300 group-hover:w-3 opacity-0 group-hover:opacity-100 shadow-[0_0_8px_#34d399]" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Social Glass Column */}
        <div className="flex flex-col gap-4 p-5 rounded-2xl bg-white/[0.02] backdrop-blur-md transition-all duration-300 hover:bg-white/[0.05] hover:-translate-y-1.5 shadow-xl">
          <h6 className="text-[11px] font-bold uppercase tracking-[0.25em] bg-gradient-to-r from-lime-400 to-teal-400 bg-clip-text text-transparent">Social</h6>
          <div className="flex flex-col gap-4">
            
            {/* Twitter */}
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-sm font-semibold tracking-wider text-emerald-100/70 hover:text-lime-300 transition-all duration-300 flex items-center gap-3 cursor-pointer group">
              <div className="w-8 h-8 rounded-xl bg-emerald-950/50 border border-emerald-800/30 flex items-center justify-center transition-all duration-300 group-hover:bg-lime-400 group-hover:text-neutral-950 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(163,230,53,0.5)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </div>
              <span className="text-xs tracking-widest uppercase">TWITTER</span>
            </a>

            {/* YouTube */}
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-sm font-semibold tracking-wider text-emerald-100/70 hover:text-emerald-300 transition-all duration-300 flex items-center gap-3 cursor-pointer group">
              <div className="w-8 h-8 rounded-xl bg-emerald-950/50 border border-emerald-800/30 flex items-center justify-center transition-all duration-300 group-hover:bg-emerald-400 group-hover:text-neutral-950 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.5)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </div>
              <span className="text-xs tracking-widest uppercase">YOUTUBE</span>
            </a>

            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-sm font-semibold tracking-wider text-emerald-100/70 hover:text-teal-300 transition-all duration-300 flex items-center gap-3 cursor-pointer group">
              <div className="w-8 h-8 rounded-xl bg-emerald-950/50 border border-emerald-800/30 flex items-center justify-center transition-all duration-300 group-hover:bg-teal-400 group-hover:text-neutral-950 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(45,212,191,0.5)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </div>
              <span className="text-xs tracking-widest uppercase">FACEBOOK</span>
            </a>

          </div>
        </div>

      </div>

      {/* BOTTOM LEGAL ROW (Completely Borderless) */}
      <div className="relative z-10 bg-emerald-950/10 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100/40">
          <p>© {new Date().getFullYear()} PhiMart. Engineered with luxury style.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-lime-300 transition-colors duration-300 relative group py-1">
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-lime-300 transition-all duration-300 group-hover:w-full shadow-[0_0_5px_#a3e635]"></span>
            </a>
            <a href="/terms" className="hover:text-emerald-300 transition-colors duration-300 relative group py-1">
              Terms of Service
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-emerald-300 transition-all duration-300 group-hover:w-full shadow-[0_0_5px_#34d399]"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;