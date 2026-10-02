import React from 'react';

interface UrbanGymLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const UrbanGymLogo: React.FC<UrbanGymLogoProps> = ({
  className = '',
  size = 48,
  showText = true,
}) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Exact Circular Badge from Image 1 */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:rotate-3"
      >
        {/* Outer White Ring */}
        <circle cx="100" cy="100" r="95" stroke="#ffffff" strokeWidth="7" fill="#0d1117" />
        
        {/* Subtle Dark Radial Fill */}
        <circle cx="100" cy="100" r="91" fill="#11161d" />

        {/* Text "urban" in Vibrant Lime Green */}
        <g fill="#84cc16" id="urban-text">
          <text
            x="100"
            y="96"
            textAnchor="middle"
            fontFamily="'Barlow Condensed', 'Impact', sans-serif"
            fontWeight="900"
            fontSize="54"
            letterSpacing="-0.04em"
            fill="#84cc16"
          >
            urban
          </text>
        </g>

        {/* Text "GYM" in Stencil-style White */}
        {/* We craft custom stencil path cuts on G, Y, M to match Image 1 */}
        <g fill="#ffffff" id="gym-text">
          <text
            x="100"
            y="146"
            textAnchor="middle"
            fontFamily="'Barlow Condensed', 'Impact', sans-serif"
            fontWeight="900"
            fontSize="50"
            letterSpacing="0.04em"
            fill="#ffffff"
          >
            GYM
          </text>
          {/* Stencil horizontal cut stripes for the authentic military/industrial look */}
          <rect x="52" y="126" width="30" height="2.5" fill="#11161d" />
          <rect x="88" y="112" width="24" height="2.5" fill="#11161d" />
          <rect x="119" y="128" width="30" height="2.5" fill="#11161d" />
        </g>
      </svg>

      {/* Brand Text Banner */}
      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center text-xl sm:text-2xl font-black tracking-tighter uppercase font-heading">
            <span className="text-white">URBAN</span>
            <span className="text-[#84cc16] ml-0.5">GYM</span>
          </div>
          <span className="text-[9px] tracking-widest text-slate-400 font-bold uppercase mt-0.5">
            Alto Rendimiento
          </span>
        </div>
      )}
    </div>
  );
};
