import { Metadata } from 'next';
import Link from 'next/link';
import {
    ArrowRight,
    Globe,
    Zap,
    Shield,
    Code,
    Users,
    Building,
    Target
} from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'About CYBKART GLOBAL | Systems Architects & Digital Engineers',
    description: 'We are a global team of US strategists and Bangalore engineers building the infrastructure for the next generation of business. Learn about our "Follow the Sun" model.',
    openGraph: {
        title: 'About CYBKART GLOBAL | Systems Architects & Digital Engineers',
        description: 'We are a global team of US strategists and Bangalore engineers building the infrastructure for the next generation of business.',
        url: 'https://cybkartglobal.com/about',
        siteName: 'CYBKART GLOBAL',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About CYBKART GLOBAL | Systems Architects & Digital Engineers',
        description: 'We are a global team of US strategists and Bangalore engineers building the infrastructure for the next generation of business.',
    },
};

export default function AboutPage() {
    return (
        <>
            {/* 
        HERO SECTION 
      */}
            <section className="relative bg-[#0F172A] pt-32 pb-24 overflow-hidden border-b border-slate-800">
                <div className="absolute inset-0 dark-grid-bg opacity-30 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A] pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                            Architects of the <br />
                            <span className="text-blue-500">Digital Economy.</span>
                        </h1>

                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mb-8">
                            CYBKART GLOBAL is not a creative agency. We are a systems engineering firm.
                            We build the technical infrastructure—websites, automation, and data pipelines—that
                            allows modern businesses to scale without breaking.
                        </p>
                    </div>
                </div>
            </section>

            {/* 
        OUR STORY / MISSION 
      */}
            <section className="py-24 bg-white border-b border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">Our Mission</span>
                            <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-6">Ending the "Chaos Phase"</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Most businesses hit a wall at $1M-$5M revenue. The manual processes that worked early on start to fail. Leads get lost, customers get ignored, and the founder burns out.
                            </p>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                We exist to solve this specific problem. We replace manual chaos with automated order. By treating your business as a <strong>software system</strong>, we can optimize it for infinite scale.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                    <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                                    <div className="text-sm text-slate-500 font-semibold">Years of Engineering</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                    <div className="text-4xl font-bold text-indigo-600 mb-2">$50M+</div>
                                    <div className="text-sm text-slate-500 font-semibold">Client Revenue Impact</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                    <div className="text-4xl font-bold text-purple-600 mb-2">2</div>
                                    <div className="text-sm text-slate-500 font-semibold">Global HQs (US & IN)</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                    <div className="text-4xl font-bold text-emerald-600 mb-2">100%</div>
                                    <div className="text-sm text-slate-500 font-semibold">In-House Code</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        GLOBAL ADVANTAGE 
      */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold mb-4">The 24/7 Advantage</h2>
                        <p className="text-slate-400 text-lg">
                            We operate on a "Follow the Sun" model. Strategy in the US, Engineering in Bangalore.
                            This means your project moves forward while you sleep.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* US HQ */}
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400">
                                    <Building className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Sheridan, Wyoming</h3>
                                    <div className="text-xs text-blue-400 font-mono uppercase tracking-widest">Strategy Headquarters</div>
                                </div>
                            </div>
                            <ul className="space-y-3 text-slate-300 text-sm">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Project Management</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Client Consulting</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> System Architecture</li>
                            </ul>
                        </div>

                        {/* India HQ */}
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-colors">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center text-emerald-400">
                                    <Code className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Bangalore, India</h3>
                                    <div className="text-xs text-emerald-400 font-mono uppercase tracking-widest">Engineering Hub</div>
                                </div>
                            </div>
                            <ul className="space-y-3 text-slate-300 text-sm">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Full-Stack Development</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> AI Model Training</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> QA & Testing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        CORE VALUES 
      */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Our OperatingOS</h2>
                        <p className="text-lg text-slate-600">The principles that guide every line of code we write.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl border border-slate-200">
                            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                                <Target className="w-6 h-6 text-slate-900" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-3">Precision Over Speed</h3>
                            <p className="text-slate-600 text-sm">We don't ship "fast and broken". We build robust systems meant to last for years, not weeks.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl border border-slate-200">
                            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                                <Shield className="w-6 h-6 text-slate-900" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-3">Radical Ownership</h3>
                            <p className="text-slate-600 text-sm">We don't blame "the algorithm" or "the platform". If it breaks, we fix it. You own your code 100%.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl border border-slate-200">
                            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                                <Users className="w-6 h-6 text-slate-900" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-3">Partners, Not Vendors</h3>
                            <p className="text-slate-600 text-sm">We aren't a gig-marketplace. We become your fractional CTO and technical department.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="We Are Ready To Build."
                description="Your team of engineers is waiting. Let's start mapping out your new system."
                buttonText="Meet The Architects"
            />
        </>
    );
}
