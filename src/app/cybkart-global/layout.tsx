import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Custom Website Design for US Businesses - High Converting & SEO Optimized | CYBKART GLOBAL',
    description: 'We build American-standard websites that turn visitors into callers. Mobile-friendly, fast-loading, and SEO-optimized for local contractors, clinics, and service businesses.',
    keywords: 'custom website design, US web design agency, contractor websites, local business SEO, high converting websites, mobile friendly design, lead generation websites',
    openGraph: {
        title: 'Custom Website Design for US Businesses - High Converting & SEO Optimized',
        description: 'We build American-standard websites that turn visitors into callers. Mobile-friendly, fast-loading, and SEO-optimized for local contractors & clinics.',
        url: 'https://cybkartglobal.com/cybkart-global',
        siteName: 'CYBKART GLOBAL',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/images/hero-img.png',
                width: 1200,
                height: 630,
                alt: 'Cybkart Global High Converting Website Design',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Custom Website Design for US Businesses - High Converting & SEO Optimized',
        description: 'We build American-standard websites that turn visitors into callers. Mobile-friendly, fast-loading, and SEO-optimized for local contractors & clinics.',
        images: ['/images/hero-img.png'],
    },
};

export { default } from './page';
