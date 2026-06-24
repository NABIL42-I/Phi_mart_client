import { useEffect, useState } from "react";

// Anchored baseline for the 25-day countdown
const EXPIRATION_TIMESTAMP = new Date().getTime() + 1000 * 60 * 60 * 24 * 25;

const DiscountTimer = () => {
  const calculateDelta = () => {
    const delta = EXPIRATION_TIMESTAMP - new Date().getTime();
    if (delta <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(delta / (1000 * 60 * 60 * 24)),
      hours: Math.floor((delta / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((delta / (1000 * 60)) % 60),
      seconds: Math.floor((delta / 1000) % 60),
    };
  };

  const [registry, setRegistry] = useState(calculateDelta());

  useEffect(() => {
    const thread = setInterval(() => setRegistry(calculateDelta()), 1000);
    return () => clearInterval(thread);
  }, []);

  const pad = (val) => String(val).padStart(2, "0");

  return (
    <div className="relative flex items-center justify-center md:justify-start gap-3 my-6 font-mono select-none bg-transparent">
      
      {[
        { value: pad(registry.days), label: "Days" },
        { value: pad(registry.hours), label: "Hours" },
        { value: pad(registry.minutes), label: "Mins" },
        { value: pad(registry.seconds), label: "Secs", highlight: true }
      ].map((block, idx) => (
        <div key={idx} className="flex items-center gap-3">
          {/* Card Module */}
          <div className={`relative bg-neutral-900/60 backdrop-blur-md border ${block.highlight ? 'border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.15)]' : 'border-neutral-800/80'} px-4 py-3 min-w-[72px] text-center transition-all duration-300`}>
            {/* Minimal top hairline border decorative */}
            <div className={`absolute top-0 left-0 right-0 h-[2px] ${block.highlight ? 'bg-amber-400' : 'bg-neutral-700'}`} />
            
            <span className={`block text-3xl font-black tracking-tighter ${block.highlight ? 'text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]' : 'text-white'}`}>
              {block.value}
            </span>
            <span className={`block text-[8px] font-sans font-extrabold uppercase tracking-[0.2em] ${block.highlight ? 'text-amber-400/80' : 'text-neutral-500'} mt-1`}>
              {block.label}
            </span>
          </div>

          {/* Matrix Separator Dot Line (Hide on last element) */}
          {idx < 3 && (
            <div className="text-neutral-800 font-sans text-xs font-bold pointer-events-none select-none">
              —
            </div>
          )}
        </div>
      ))}

    </div>
  );
};

export default DiscountTimer;