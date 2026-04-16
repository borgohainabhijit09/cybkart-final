import { Metadata } from 'next';
import Link from 'next/link';
import { Layers, ArrowRight } from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'Demo Websites | Portfolio | CYBKART GLOBAL',
    description: 'Explore our collection of industry-specific demo websites and component libraries.',
};

const demoSites = [
    {
        title: 'Dental Practice Pro',
        industry: 'Healthcare',
        description: 'A comprehensive layout tailored for dental practitioners focusing on patient intake and automated appointment scheduling.',
        features: ['HIPAA Compliance Ready', 'Online Booking', 'Services Showcase'],
        link: '#'
    },
    {
        title: 'Contractor Elite',
        industry: 'Home Services',
        description: 'Lead generation powerhouse template for roofing, HVAC, and plumbing contractors with instant quote calculators.',
        features: ['Quote Calculator', 'Before/After Galleries', 'Trust Badges'],
        link: '#'
    },
    {
        title: 'B2B SaaS Core',
        industry: 'Software',
        description: 'High-conversion landing pages designed specifically for early-stage B2B SaaS companies focused on MRR growth.',
        features: ['Pricing Tables', 'Integration Hub', 'Feature Tours'],
        link: '#'
    }
];

export default function DemoWebsitesPage() {
    return (
        <>
            <section className="relative bg-[#0F172A] pt-32 pb-24 overflow-hidden border-b border-slate-800">
                <div className="absolute inset-0 dark-grid-bg opacity-30 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-[#0F172A]/80 to-[#0F172A] pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                            Demo <span className="text-indigo-400">Websites</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
                            Interactive prototypes, industry-specific templates, and architectural demonstrations ready to be tailored to your brand.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white min-h-screen">
                <div className="container mx-auto px-6">
                    <div className="space-y-12">
                        {demoSites.map((site, index) => (
                            <div key={index} className="group bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12 hover:shadow-xl hover:border-indigo-200 transition-all duration-300">
                                <div className="grid lg:grid-cols-2 gap-12 items-center">
                                    <div className="order-2 lg:order-1 space-y-6">
                                        <div className="inline-flex flex-col">
                                           <span className="text-sm font-bold tracking-widest uppercase text-indigo-600 mb-2">{site.industry}</span>
                                           <h2 className="text-3xl font-bold text-slate-900">{site.title}</h2>
                                        </div>
                                        <p className="text-lg text-slate-600 leading-relaxed">
                                            {site.description}
                                        </p>
                                        <div className="pt-4">
                                            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-widest mb-4">Core Components</h4>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {site.features.map((feature, featureIdx) => (
                                                    <li key={featureIdx} className="flex items-center text-sm text-slate-700 bg-white border border-slate-200 px-4 py-2 rounded-lg">
                                                        <Layers className="w-4 h-4 text-indigo-500 mr-2" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="pt-6">
                                            <Link href={site.link} className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors">
                                                Preview Demo <ArrowRight className="w-5 h-5 ml-2" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="order-1 lg:order-2">
                                        <div className="aspect-[4/3] bg-slate-200 rounded-2xl border border-slate-300 shadow-inner overflow-hidden relative group-hover:shadow-2xl transition-shadow duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-300 flex items-center justify-center">
                                                 <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center shadow-inner">
                                                     <Layers className="w-8 h-8 text-slate-400" />
                                                 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection 
                title="Found a starting point?" 
                description="We can customize any of these architectures to perfectly match your operational needs and brand identity."
                buttonText="Discuss Customization"
            />
        </>
    );
}
