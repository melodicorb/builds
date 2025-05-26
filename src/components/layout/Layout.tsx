import { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import BannerAd from '../ads/BannerAd';
import SocialBarAd from '../ads/SocialBarAd';
import NativeBannerAd from '../ads/NativeBannerAd';

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

export default function Layout({ children, title = 'LinkedIn Keywords Research Tool' }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Research and find the best keywords for your LinkedIn profile, content, and job search" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <BannerAd />
        <SocialBarAd />
        <main className="flex-grow-1 py-4">
          <div className="container">
            <NativeBannerAd />
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}