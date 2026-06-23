

export default function UnderConstruction() {
  return (
    <div className="bg-[#202124] text-[#9aa0a6] font-sans min-h-screen flex flex-col items-center justify-center select-none p-6 text-center">
      {/* Centered container tailored for professional, legible text layout */}
      <div className="max-w-[650px] flex flex-col items-center box-border">
        
        {/* Logo Section */}
        <div className="mb-10">
          {/* SVG Minimalist Construction Cone */}
          <svg className="w-[96px] h-auto opacity-80 fill-current text-gray-400" viewBox="0 0 24 24">
            <path d="M12 2L1 21h22L12 2zm0 4l6.5 11h-13L12 6zm-1 4h2v3h-2v-3zm0 5h2v2h-2v-2z" />
          </svg>
        </div>

        {/* Main Status Heading */}
        <h1 className="text-[#e8eaed] text-[28px] sm:text-[34px] font-semibold mb-3 leading-tight">
          This platform is currently undergoing scheduled maintenance.
        </h1>
        
        {/* Professional Subheading with HTTP error code */}
        <p className="text-[15px] text-[#757b80] mb-8 font-medium tracking-wide">
          HTTP Error 503: Service Temporarily Unavailable
        </p>

        {/* Action Items Section */}
        <div className="text-[16px] font-medium mb-3 text-[#e8eaed]">Please try the following:</div>
        <ul className="text-[15px] space-y-2.5 leading-relaxed mb-10 list-none">
          <li>Refreshing the page in a few minutes</li>
          <li>Checking our corporate channels for official status updates</li>
          <li>
            <a href="mailto:support@example.com" className="link text-[#8ab4f8] no-underline hover:underline">
              Contacting technical support if the issue persists
            </a>
          </li>
        </ul>

        {/* Go to Home Button */}
        <div className="mb-10">
          <a 
            href="/" 
            className="btn btn-outline border-[#5f6368] text-[#8ab4f8] hover:bg-[#303134] hover:text-[#8ab4f8] hover:border-[#8ab4f8] normal-case rounded-md btn-md font-medium text-[14px] px-6 py-2 h-auto min-h-0"
          >
            Return to Homepage
          </a>
        </div>

        {/* Error Code Style Footer */}
        <div className="text-[11px] uppercase text-[#757b80] tracking-widest font-mono">
          HTTP_503_SERVICE_UNAVAILABLE
        </div>
      </div>
    </div>
  );
}