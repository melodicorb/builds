import { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function BannerAd() {
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
    <div className="d-flex justify-content-center py-2 bg-light">
      <div ref={adContainerRef} className="banner-ad-container">
        <Script id="banner-ad-config" strategy="afterInteractive">
          {`
            atOptions = {
              'key' : '157b2f31a1ed20130dd24b588b5d5be4',
              'format' : 'iframe',
              'height' : 90,
              'width' : 728,
              'params' : {}
            };
          `}
        </Script>
        <Script 
          src="//www.highperformanceformat.com/157b2f31a1ed20130dd24b588b5d5be4/invoke.js"
          strategy="afterInteractive"
        />
      </div>
    </div>
  );
}