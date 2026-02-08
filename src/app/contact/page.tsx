import { Metadata } from 'next';
import {
    Mail,
    MapPin,
    Phone,
    ArrowRight,
    CheckCircle,
    MessageSquare,
    Calendar,
    Clock,
    ShieldCheck
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Start Your Project - Contact Architects | CYBKART GLOBAL',
    description: 'Book a discovery call with our systems architects. No sales fluff, just technical planning. Get a response from a senior partner within 24 hours.',
    openGraph: {
        title: 'Start Your Project - Contact Architects | CYBKART GLOBAL',
        description: 'Book a discovery call with our systems architects. No sales fluff, just technical planning.',
        url: 'https://cybkartglobal.com/contact',
        siteName: 'CYBKART GLOBAL',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Start Your Project - Contact Architects | CYBKART GLOBAL',
        description: 'Book a discovery call with our systems architects. No sales fluff, just technical planning.',
    },
};

export default function ContactPage() {
    return (
        <>
            <section className="relative bg-[#0F172A] py-24 min-h-screen flex items-center">
                <div className="absolute inset-0 dark-grid-bg opacity-20 pointer-events-none"></div>

                {/* Decorative Blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        {/* Left: Purpose & Trust */}
                        <div className="text-white space-y-12">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
                                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                                    Accepting New Projects for Q1
                                </div>
                                <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
                                    Let's Architect <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Your System.</span>
                                </h1>
                                <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                                    We don't employ salespeople. You'll be speaking directly with a Solution Architect who can understand your technical requirements and business goals.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                        <ShieldCheck className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">No-Pressure Consulting</h3>
                                        <p className="text-slate-400 text-sm">We'll tell you honestly if we aren't the right fit or if you don't need custom code.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">24 Hour Response</h3>
                                        <p className="text-slate-400 text-sm">We value speed. You'll receive a personal reply from a senior partner within 1 business day.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/10">
                                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Direct Channels</h4>
                                <div className="space-y-4">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <a href="mailto:info@cybkartglobal.com" className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all border border-white/5 group">
                                            <Mail className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                                            <span className="font-semibold text-sm">info@cybkartglobal.com</span>
                                        </a>
                                        <a href="tel:8446991255" className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all border border-white/5 group">
                                            <Phone className="w-5 h-5 text-green-400 group-hover:text-green-300" />
                                            <span className="font-semibold text-sm">844-699-1255 (Toll Free)</span>
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/5">
                                        <MapPin className="w-5 h-5 text-purple-400" />
                                        <span className="font-semibold text-sm">1309 Coffeen Ave, Sheridan, WY 82801</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: The Form */}
                        <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl relative">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Tell us about your project</h2>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Jane" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Work Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="jane@company.com" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Project Type</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white">
                                        <option>Websites & Booking Systems</option>
                                        <option>AI Automation & Agents</option>
                                        <option>E-Commerce Development</option>
                                        <option>Digital Marketing / SEO</option>
                                        <option>Branding & Design</option>
                                        <option>Other / Not Sure</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Budget Range</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white">
                                        <option>$2,000 - $5,000</option>
                                        <option>$5,000 - $15,000</option>
                                        <option>$15,000 - $50,000</option>
                                        <option>$50,000+</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Project Details</label>
                                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Briefly describe your goals..."></textarea>
                                </div>

                                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2">
                                    Request Consultation <ArrowRight className="w-5 h-5" />
                                </button>

                                <p className="text-xs text-center text-slate-400 mt-4">
                                    We respect your privacy. No spam, ever.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        OFFICE LOCATIONS (Optional Trust Signal) 
      */}
            <section className="bg-slate-50 py-16 border-t border-slate-200">
                <div className="container mx-auto px-6">
                    <p className="text-center text-slate-500 text-sm font-mono mb-8">GLOBAL OPERATIONS</p>
                    <div className="flex flex-wrap justify-center gap-12 text-slate-400">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" /> Sheridan, US
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" /> Bangalore, IN
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
