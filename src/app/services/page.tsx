import { Metadata } from 'next';
import Link from 'next/link';
import { Brain, Globe, ShoppingCart, TrendingUp, Palette, ArrowRight, Check } from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'Enterprise AI & Digital Services | CYBKART GLOBAL',
    description: 'Explore our enterprise-grade services: AI Automation, Custom Web Architecture, E-Commerce Engineering, and Digital Marketing Science.',
    openGraph: {
        title: 'Enterprise AI & Digital Services | CYBKART GLOBAL',
        description: 'Explore our enterprise-grade services: AI Automation, Custom Web Architecture, E-Commerce Engineering, and Digital Marketing Science.',
        url: 'https://cybkartglobal.com/services',
        siteName: 'CYBKART GLOBAL',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Enterprise AI & Digital Services | CYBKART GLOBAL',
        description: 'Explore our enterprise-grade services: AI Automation, Custom Web Architecture, E-Commerce Engineering, and Digital Marketing Science.',
    },
};

const services = [
    {
        title: 'AI Automation & Chatbot Systems',
        description: 'Deploy intelligent AI agents that handle customer service, booking, and support 24/7. Reduce operational costs by 60% and response time by 90%.',
        icon: Brain,
        href: '/services/ai-automation',
        badge: 'High Impact',
        features: [
            '24/7 automated customer support',
            'Intelligent booking & scheduling',
            'Multi-channel integration (Web, WhatsApp)',
            'Natural language processing (NLP)',
            'CRM database bi-directional sync',
            'Continuous learning & optimization'
        ]
    },
    {
        title: 'Websites + Booking Architecture',
        description: 'High-converting digital properties with deep booking integration. Turn visitors into confirmed appointments with seamless scheduling flows.',
        icon: Globe,
        href: '/services/websites-booking',
        badge: 'Core Service',
        features: [
            'React/Next.js performance architecture',
            'Automated appointment scheduling',
            'Stripe/Payment gateway integration',
            'Real-time calendar synchronization',
            'Automated email & SMS notifications',
            'Mobile-first responsive design'
        ]
    },
    {
        title: 'E-Commerce Engineering',
        description: 'Scalable online stores built on Shopify Plus or custom Headless stacks. Optimized for maximum conversion rate and lifetime value.',
        icon: ShoppingCart,
        href: '/services/ecommerce',
        badge: 'Growth',
        features: [
            'Custom e-commerce platforms',
            'Complex product catalog management',
            'Secure high-volume payment processing',
            'Inventory management automation',
            'Order fulfillment workflows',
            'Loyalty program integration'
        ]
    },
    {
        title: 'Digital Marketing Science',
        description: 'Data-driven campaigns that generate qualified pipelines. We use scientific testing to maximize ROI across search and social channels.',
        icon: TrendingUp,
        href: '/services/digital-marketing',
        badge: 'Revenue',
        features: [
            'Technical SEO & Authority Building',
            'PPC (Google Ads) Optimization',
            'Conversion Rate Optimization (CRO)',
            'LinkedIn B2B Lead Generation',
            'Email marketing automation',
            'Full-funnel analytics tracking'
        ]
    },
    {
        title: 'Branding & Identity Systems',
        description: 'Professional visual systems that build immediate trust. We create consistent, authoritative brand assets for optimal market positioning.',
        icon: Palette,
        href: '/services/branding-design',
        badge: 'Strategy',
        features: [
            'Enterprise identity development',
            'Logo & visual system design',
            'Brand guidelines & design tokens',
            'Marketing collateral systems',
            'High-fidelity UI/UX design',
            'Vector & digital asset libraries'
        ]
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* 
        HERO SECTION 
        Style: Dark Enterprise Tech 
      */}
            <section className="relative bg-[#0F172A] py-24 overflow-hidden border-b border-slate-800">
                <div className="absolute inset-0 dark-grid-bg opacity-30 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A] pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                            Enterprise Capabilities
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
                            We architect digital systems that solve complex business problems.
                            From AI agents to complete web ecosystems, our solutions are
                            built for scale, security, and measurable ROI.
                        </p>
                    </div>
                </div>
            </section>

            {/* 
        SERVICES LIST 
        Style: Clean Split Cards
      */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="space-y-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <div
                                    key={service.href}
                                    className="group bg-white border border-slate-200 rounded-2xl p-8 lg:p-10 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                                >
                                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                                        {/* Left: Description */}
                                        <div className="space-y-6">
                                            <div className="flex items-center justify-between">
                                                <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                                                    <Icon className="w-7 h-7 text-slate-700 group-hover:text-blue-600 transition-colors" />
                                                </div>
                                                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                                                    {service.badge}
                                                </span>
                                            </div>

                                            <div>
                                                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                                                    {service.title}
                                                </h2>
                                                <p className="text-lg text-slate-600 leading-relaxed">
                                                    {service.description}
                                                </p>
                                            </div>

                                            <Link
                                                href={service.href}
                                                className="inline-flex items-center gap-2 text-blue-600 font-semibold text-lg group-hover:gap-3 transition-all pt-2"
                                            >
                                                Explore Solution <ArrowRight className="w-5 h-5" />
                                            </Link>
                                        </div>

                                        {/* Right: Features */}
                                        <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
                                            <h3 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider flex items-center gap-2">
                                                <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                                                Technical Specifications
                                            </h3>
                                            <ul className="grid sm:grid-cols-1 gap-y-4">
                                                {service.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <div className="mt-1 w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0">
                                                            <Check className="w-3 h-3 text-blue-600" />
                                                        </div>
                                                        <span className="text-slate-600 text-sm font-medium">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="Unsure where to start?"
                description="Our systems architects will analyze your current operations and recommend the highest-impact solution for your specific goals."
                buttonText="Book Architecture Review"
            />
        </>
    );
}
