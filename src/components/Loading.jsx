const Loading = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-950 overflow-hidden relative font-sans">
      
      {/* 🚀 Center Anchor Box */}
      <div className="relative flex items-center justify-center h-48 w-full">
        
        {/* Minimalist Launch System (Vertically Anchored) */}
        <div className="absolute flex flex-col items-center animate-[minimalLaunch_2s_cubic-bezier(0.85,0,0.15,1)_infinite]">
          
          {/* Typographic Core Icon - Rotated -45deg to point straight up at 90° */}
          <span className="text-4xl inline-block -rotate-45 filter drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] select-none">
            🚀
          </span>

          {/* 📐 Abstract Trajectory Line */}
          <div className="w-[1.5px] h-20 bg-gradient-to-b from-white via-slate-700/50 to-transparent opacity-80 mt-2 rounded-full transform origin-top animate-[trailStretch_2s_ease-in-out_infinite]" />
        </div>
        
      </div>

      {/* 📡 Minimal Text Interface */}
      <div className="absolute bottom-12 flex flex-col items-center space-y-2 z-10">
        <div className="flex items-center space-x-2">
          {/* Micro Pulsing Signal Dot */}
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sky-500"></span>
          </span>
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-slate-400 font-bold">
            Connecting
          </span>
        </div>
        
        <span className="text-[11px] text-slate-600 font-medium tracking-wide">
          Securing interface environment...
        </span>
      </div>

      {/* 🛠️ Seamless Linear Kinetic Keyframes */}
      <style>{`
        @keyframes minimalLaunch {
          0% {
            transform: translateY(100vh) scale(0.85);
            opacity: 0;
          }
          20%, 55% {
            transform: translateY(0px) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-120vh) scale(0.9);
            opacity: 0;
          }
        }
        @keyframes trailStretch {
          0%, 100% { transform: scaleY(0.4); opacity: 0.2; }
          20%, 55% { transform: scaleY(1); opacity: 0.8; }
        }
      `}</style>

    </div>
  );
};

export default Loading;