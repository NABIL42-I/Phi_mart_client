import { Link, useSearchParams } from "react-router";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();

  // Dynamically extract values sent from your Django backend
  const orderId = searchParams.get("orderId");
  const amount = searchParams.get("amount");
  const name = searchParams.get("name");
  const address = searchParams.get("address");

  return (
    // FIXED position layout framing covering full screen viewport
    <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-[#020617] m-0 z-[9999] flex items-center justify-center font-sans select-none">
      
      {/* Variable-driven CSS Engine to drive continuous animations */}
      <style>{`
        @keyframes drawCheck {
          to { stroke-dashoffset: 0; }
        }
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes cardFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-check {
          stroke-dasharray: 50;
          stroke-dashoffset: 50;
          animation: drawCheck 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards;
        }
        .animate-float {
          animation: subtleFloat 4s ease-in-out infinite;
        }
        .animate-orbit {
          animation: orbitSpin var(--orbit-speed, 4s) linear infinite;
        }
        .animate-page-entry {
          animation: cardFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Ambient Background Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[150px]" />
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/10 blur-[180px]" />
      </div>

      {/* Grid Canvas Overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Main Container Wrapper */}
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center px-6 text-center overflow-y-auto max-h-screen py-8 animate-page-entry">

        {/* Success Icon Frame: Auto-spins and accelerates to 1.2s on hover */}
        <div 
          className="relative mb-8 animate-float group cursor-pointer"
          style={{ '--orbit-speed': '4s' }}
          onMouseEnter={(e) => e.currentTarget.style.setProperty('--orbit-speed', '1.2s')}
          onMouseLeave={(e) => e.currentTarget.style.setProperty('--orbit-speed', '4s')}
        >
          {/* Backlight Glow */}
          <div className="absolute inset-0 rounded-full bg-emerald-500 group-hover:bg-cyan-400 blur-3xl opacity-40 group-hover:opacity-70 transition-colors duration-500 animate-pulse" />
          
          {/* Orbit Light Ring */}
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-emerald-500/0 via-emerald-400/40 to-emerald-500/0 group-hover:via-cyan-400/70 opacity-100 animate-orbit pointer-events-none transition-colors duration-500" />

          {/* Main Badge Shell */}
          <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-green-600 group-hover:from-cyan-400 group-hover:to-teal-500 shadow-[0_0_50px_rgba(16,185,129,0.5)] group-hover:shadow-[0_0_65px_rgba(34,211,238,0.7)] transform group-hover:scale-110 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-white group-hover:text-slate-950 transition-colors duration-500 drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3.5}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M5 13l4 4L19 7" 
                className="animate-check"
              />
            </svg>
          </div>
        </div>

        {/* Header Confirmation Badge */}
        <div className="mb-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-300 backdrop-blur-md shadow-[0_4px_12px_rgba(16,185,129,0.1)]">
          ✓ Payment Confirmed
        </div>

        {/* Core Hero Title */}
        <h1 className="max-w-4xl text-5xl font-black leading-tight text-white md:text-7xl tracking-tight">
          Payment{" "}
          <span className="inline bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(52,211,153,0.15)]">
            Successful
          </span>
        </h1>

        {/* Subtitle / Descriptive Context */}
        <p className="mt-6 max-w-2xl text-base md:text-lg text-slate-400 leading-relaxed font-medium">
          {name ? `Thank you, ${name}! ` : "Thank you! "}Your transaction has been completed successfully. 
          Your order status has been updated to <span className="text-emerald-400 font-semibold drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">Ready To Ship</span>.
        </p>

        {/* Feature/Receipt Cards with Added Hover-Up and Highlight Effects */}
        <div className="mt-10 grid w-full gap-6 sm:grid-cols-2 md:grid-cols-3">
          
          {/* Card 1: Order Token Tracker */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-cyan-500/30 flex flex-col justify-center shadow-lg group/card">
            <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400/70 group-hover/card:text-cyan-400 transition-colors mb-1">Tracking Frame</span>
            <h3 className="text-xl font-black text-white tracking-wide">
              Order #{orderId || "——"}
            </h3>
            <p className="mt-1 text-sm text-slate-400/80">
              System anchor registered.
            </p>
          </div>

          {/* Card 2: Financial Yield Valuation */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-emerald-500/30 flex flex-col justify-center shadow-lg group/card">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400/70 group-hover/card:text-emerald-400 transition-colors mb-1">Transaction Total</span>
            <h3 className="text-xl font-black text-emerald-400 drop-shadow-[0_2px_10px_rgba(52,211,153,0.1)]">
              {amount ? `৳${amount} BDT` : "Processed"}
            </h3>
            <p className="mt-1 text-sm text-slate-400/80">
              Verified secure gateway link.
            </p>
          </div>

          {/* Card 3: Shipping Destined Endpoint */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-teal-500/30 flex flex-col justify-center sm:col-span-2 md:col-span-1 shadow-lg group/card">
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-400/70 group-hover/card:text-teal-400 transition-colors mb-1">Delivery Endpoint</span>
            <h3 className="text-base font-bold text-slate-200 truncate px-2" title={address}>
              {address || "Default Address"}
            </h3>
            <p className="mt-1 text-sm text-slate-400/80 line-clamp-1">
              Package routing destination.
            </p>
          </div>

        </div>

        {/* Action Navigation Link Button Element */}
        <div className="mt-12">
          <Link
            to="/dashboard"
            className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-10 py-4 text-base font-bold text-white shadow-[0_15px_40px_rgba(16,185,129,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_50px_rgba(16,185,129,0.5)] active:scale-95"
          >
            Enter Dashboard
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Minimalist Footer Note */}
        <p className="mt-8 text-sm text-slate-500 font-medium tracking-wide">
          Thank you for your purchase ✨
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;