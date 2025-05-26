import { useEffect } from 'react';
import Script from 'next/script';

export default function NativeBannerAd() {
  return (
    <div className="native-banner-ad-container my-3">
      <Script 
        id="native-banner-ad"
        async
        data-cfasync="false"
        src="//pl26657960.profitableratecpm.com/4aef178ddc5889e79b8f14eea899f0fb/invoke.js"
        strategy="afterInteractive"
      />
      <div id="container-4aef178ddc5889e79b8f14eea899f0fb"></div>
    </div>
  );
}