export const HeroIllustration = () => (
  <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Background */}
    <defs>
      <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#e8e8e8', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#cccccc', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="400" height="400" fill="url(#heroGradient)" />
    
    {/* Geometric shapes - Modern design */}
    <circle cx="200" cy="100" r="60" fill="#f8f8f8" opacity="0.8" />
    <rect x="80" y="200" width="100" height="150" fill="#3d3d3d" rx="12" opacity="0.7" />
    <rect x="220" y="250" width="120" height="100" fill="#ffffff" rx="12" opacity="0.6" />
    <circle cx="320" cy="150" r="40" fill="#e8e8e8" opacity="0.9" />
    
    {/* Accent lines */}
    <line x1="50" y1="320" x2="350" y2="320" stroke="#3d3d3d" strokeWidth="3" opacity="0.5" />
    <line x1="100" y1="80" x2="300" y2="80" stroke="#5a5a5a" strokeWidth="2" opacity="0.6" />
  </svg>
);

export const AboutIllustration = () => (
  <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="aboutGradient" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#f8f8f8', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#cccccc', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="400" height="400" fill="url(#aboutGradient)" />
    
    {/* Illustrated elements */}
    <rect x="60" y="60" width="280" height="280" fill="none" stroke="#3d3d3d" strokeWidth="4" rx="20" />
    <circle cx="200" cy="120" r="50" fill="#e8e8e8" />
    <rect x="100" y="200" width="200" height="120" fill="#f8f8f8" rx="12" />
    <line x1="120" y1="220" x2="280" y2="220" stroke="#cccccc" strokeWidth="8" />
    <line x1="120" y1="250" x2="280" y2="250" stroke="#cccccc" strokeWidth="6" />
    <line x1="120" y1="275" x2="250" y2="275" stroke="#cccccc" strokeWidth="6" />
  </svg>
);

export const CTAIllustration = () => (
  <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="ctaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#262626', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#0f0f0f', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="400" height="400" fill="url(#ctaGradient)" />
    
    {/* Animated elements */}
    <circle cx="200" cy="200" r="80" fill="none" stroke="#e8e8e8" strokeWidth="2" opacity="0.5" />
    <circle cx="200" cy="200" r="120" fill="none" stroke="#e8e8e8" strokeWidth="1" opacity="0.3" />
    <circle cx="200" cy="200" r="40" fill="#e8e8e8" />
    <rect x="140" y="140" width="120" height="120" fill="none" stroke="#cccccc" strokeWidth="3" rx="20" opacity="0.6" />
  </svg>
);

export const PortfolioPlaceholder = ({ index }: { index: number }) => {
  const colors = [
    { primary: '#e8e8e8', secondary: '#cccccc' },
    { primary: '#f8f8f8', secondary: '#e8e8e8' },
    { primary: '#cccccc', secondary: '#a0a0a0' },
  ];
  const color = colors[index % 3];

  return (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id={`portGradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: color.primary, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: color.secondary, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#portGradient${index})`} />

      {/* Design elements */}
      <circle cx="100" cy="100" r="50" fill="#3d3d3d" opacity="0.4" />
      <rect x="200" y="80" width="150" height="120" fill="#3d3d3d" opacity="0.3" rx="12" />
      <rect x="50" y="200" width="300" height="60" fill="#5a5a5a" opacity="0.3" rx="8" />
      <line x1="70" y1="220" x2="330" y2="220" stroke="#3d3d3d" strokeWidth="3" opacity="0.2" />
    </svg>
  );
};
