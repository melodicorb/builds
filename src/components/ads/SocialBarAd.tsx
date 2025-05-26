import { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function SocialBarAd() {
  const adContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Clean up any previous ad content when component unmounts
    return () => {
      if (adContainerRef.current) {
        adContainerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="social-bar-ad-container">
      <div ref={adContainerRef}>
        <Script
          id="social-bar-ad"
          strategy="afterInteractive"
          src="//pl26657918.profitableratecpm.com/e1/a2/96/e1a2967217d7d46610707a5a2639ec8c.js"
        />
      </div>
    </div>
  );
}