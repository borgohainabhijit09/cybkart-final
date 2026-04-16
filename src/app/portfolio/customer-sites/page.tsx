import { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'Customer Sites | Portfolio | CYBKART GLOBAL',
    description: 'Explore the high-converting websites and digital platforms we have built for our enterprise clients.',
};

const customerSites = [
    {
        title: 'Precision Auto Spa',
        industry: 'Automotive Detailing',
        description: 'A high-end website with a custom booking integration designed to maximize conversion rates for premium auto detailing services.',
        tags: ['React', 'Next.js', 'Booking Flow'],
        link: '#'
    },
    {
        title: 'Mills Auto Spa',
        industry: 'Automotive Detailing',
        description: 'Complete rebranding and interactive UI development featuring premium before/after image comparison sliders.',
        tags: ['UI/UX', 'Animations', 'Mobile First'],
        link: '#'
    },
    {
        title: 'LifeLedger',
        industry: 'FinTech',
        description: 'A cloud-synchronized financial dashboard application with real-time categorizations and tracking features.',
        tags: ['Dashboard', 'Firebase', 'Data Vis'],
        link: '#'
    }
];

export default function CustomerSitesPage() {
    return (
        <>
            <section className="relative bg-[#0F172A] pt-32 pb-24 overflow-hidden border-b border-slate-800">
                <div className="absolute inset-0 dark-grid-bg opacity-30 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A] pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                            Customer <span className="text-blue-500">Sites</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
                            A showcase of production-ready digital architectures designed and engineered exclusively for our global clientele.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50 min-h-screen">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {customerSites.map((site, index) => (
                            <div key={index} className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col">
                                <div className="h-48 bg-slate-200 relative overflow-hidden">
                                     <div className="absolute inset-0 bg-gradient-to-tr from-slate-800 to-slate-600 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-white/50">
                                         <span className="text-sm font-mono tracking-widest uppercase">{site.title.substring(0, 2)}</span>
                                     </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
                                                {site.industry}
                                            </span>
                                            <h3 className="text-xl font-bold text-slate-900">{site.title}</h3>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 text-sm mb-6 flex-grow">
                                        {site.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {site.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <Link href={site.link} className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group-hover:gap-2">
                                        View Live Site <ExternalLink className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection 
                title="Ready for your own custom architecture?" 
                description="Let's build a platform that scales your business and dominates your market."
                buttonText="Start Your Project"
            />
        </>
    );
}
