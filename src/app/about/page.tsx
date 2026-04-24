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
    Target,
    CheckCircle,
} from 'lucide-react';

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

// ─── Reusable design primitives (mirrors homepage) ────────────────────────────

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
    return (
        <span className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${light ? 'text-blue-400' : 'text-blue-600'}`}>
            <span className={`block w-6 h-px ${light ? 'bg-blue-400' : 'bg-blue-600'}`} />
            {children}
        </span>
    );
}

const STATS = [
    { value: '5+', label: 'Years of Engineering', gradient: 'from-blue-500 to-cyan-500' },
    { value: '$50M+', label: 'Client Revenue Impact', gradient: 'from-violet-500 to-purple-500' },
    { value: '2', label: 'Global HQs (US & IN)', gradient: 'from-emerald-500 to-teal-500' },
    { value: '100%', label: 'In-House Code', gradient: 'from-amber-500 to-orange-500' },
];

const CORE_VALUES = [
    {
        icon: Target,
        title: 'Precision Over Speed',
        desc: 'We don\'t ship "fast and broken". We build robust systems meant to last for years, not weeks.',
        color: 'text-blue-400',
        bg: 'bg-blue-500/10',
    },
    {
        icon: Shield,
        title: 'Radical Ownership',
        desc: 'We don\'t blame "the algorithm" or "the platform". If it breaks, we fix it. You own your code 100%.',
        color: 'text-violet-400',
        bg: 'bg-violet-500/10',
    },
    {
        icon: Users,
        title: 'Partners, Not Vendors',
        desc: 'We aren\'t a gig-marketplace. We become your fractional CTO and technical department.',
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10',
    },
];

// ─── Page Component ────────────────────────────────────────────────────────────

export default function AboutPage() {
    return (
        <>
            {/* ══════════════════════════════════════════════════════════════
                HERO
            ═══════════════════════════════════════════════════════════════ */}
            <section className="relative min-h-[70vh] bg-[#030712] overflow-hidden flex items-end pb-20" style={{ paddingTop: '120px' }}>
                {/* Animated orbs */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-[-15%] left-[-8%] w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[120px] animate-glow-pulse" />
                    <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-violet-600/15 blur-[100px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
                    {/* Grid overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(99,102,241,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.6) 1px, transparent 1px)',
                            backgroundSize: '60px 60px',
                        }}
                    />
                    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, transparent 40%, #030712 100%)' }} />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <SectionLabel light>Who We Are</SectionLabel>

                        <h1 className="text-5xl lg:text-7xl font-black text-white mt-6 mb-6 tracking-tight leading-[1.05]">
                            Architects of the{' '}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #a78bfa, #34d399)' }}
                            >
                                Digital Economy.
                            </span>
                        </h1>

                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl font-medium">
                            CYBKART GLOBAL is not a creative agency. We are a systems engineering firm.
                            We build the technical infrastructure—websites, automation, and data pipelines—that
                            allows modern businesses to scale without breaking.
                        </p>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════
                MISSION — Ending the Chaos Phase
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-28 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 blur-[100px] opacity-80 rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

                        {/* Left: Copy */}
                        <div>
                            <SectionLabel>Our Mission</SectionLabel>
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 mb-6 tracking-tight leading-tight">
                                Ending the{' '}
                                <span
                                    className="bg-clip-text text-transparent"
                                    style={{ backgroundImage: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}
                                >
                                    "Chaos Phase"
                                </span>
                            </h2>
                            <p className="text-lg text-slate-500 mb-6 leading-relaxed font-medium">
                                Most businesses hit a wall at $1M–$5M revenue. The manual processes that worked early on start to fail. Leads get lost, customers get ignored, and the founder burns out.
                            </p>
                            <p className="text-lg text-slate-500 leading-relaxed font-medium">
                                We exist to solve this specific problem. We replace manual chaos with automated order. By treating your business as a{' '}
                                <strong className="text-slate-900 font-bold">software system</strong>, we can optimize it for infinite scale.
                            </p>
                        </div>

                        {/* Right: Stats grid */}
                        <div className="grid grid-cols-2 gap-5">
                            {STATS.map((stat, i) => (
                                <div
                                    key={i}
                                    className="group relative bg-slate-50 border border-slate-200/80 rounded-3xl p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-400 overflow-hidden"
                                >
                                    {/* Gradient glow on hover */}
                                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity bg-gradient-to-br ${stat.gradient} rounded-3xl`} />
                                    <div
                                        className={`text-4xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-br ${stat.gradient}`}
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-slate-500 font-semibold leading-snug">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════
                GLOBAL ADVANTAGE — Follow the Sun
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-28 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 dark-grid-bg opacity-[0.04] pointer-events-none" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[80px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <SectionLabel light>Global Structure</SectionLabel>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-5 tracking-tight leading-tight">
                            The 24/7{' '}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #a78bfa)' }}
                            >
                                Advantage
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400 font-medium leading-relaxed">
                            We operate on a "Follow the Sun" model. Strategy in the US, Engineering in Bangalore.
                            This means your project moves forward while you sleep.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-7 max-w-4xl mx-auto">
                        {/* US HQ */}
                        <div className="group bg-white/[0.03] border border-white/8 rounded-3xl p-10 hover:bg-white/[0.06] hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform">
                                    <Building className="w-7 h-7 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-extrabold text-white tracking-tight">Sheridan, Wyoming</h3>
                                    <div className="text-xs text-blue-400 font-bold uppercase tracking-widest mt-0.5">Strategy Headquarters</div>
                                </div>
                            </div>
                            <ul className="space-y-4">
                                {['Project Management', 'Client Consulting', 'System Architecture'].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-slate-300 font-medium">
                                        <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* India HQ */}
                        <div className="group bg-white/[0.03] border border-white/8 rounded-3xl p-10 hover:bg-white/[0.06] hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-1">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform">
                                    <Code className="w-7 h-7 text-emerald-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-extrabold text-white tracking-tight">Bangalore, India</h3>
                                    <div className="text-xs text-emerald-400 font-bold uppercase tracking-widest mt-0.5">Engineering Hub</div>
                                </div>
                            </div>
                            <ul className="space-y-4">
                                {['Full-Stack Development', 'AI Model Training', 'QA & Testing'].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-slate-300 font-medium">
                                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* World connection visual strip */}
                    <div className="mt-14 flex items-center justify-center gap-6 text-slate-600">
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <span className="text-xl">🇺🇸</span>
                            <span className="text-slate-400">Wyoming, USA</span>
                        </div>
                        <div className="flex-1 max-w-[120px] h-px bg-gradient-to-r from-blue-500/40 to-emerald-500/40" />
                        <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                        <div className="text-slate-600 text-xs font-bold uppercase tracking-widest">Follow the Sun</div>
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" style={{ animationDelay: '1s' }} />
                        <div className="flex-1 max-w-[120px] h-px bg-gradient-to-r from-emerald-500/40 to-blue-500/40" />
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <span className="text-xl">🇮🇳</span>
                            <span className="text-slate-400">Bangalore, India</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════
                CORE VALUES — OperatingOS
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-28 bg-white relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-50 blur-[100px] opacity-80 rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <SectionLabel>Philosophy</SectionLabel>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 mb-4 tracking-tight">
                            Our{' '}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{ backgroundImage: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}
                            >
                                OperatingOS
                            </span>
                        </h2>
                        <p className="text-lg text-slate-500 font-medium">The principles that guide every line of code we write.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {CORE_VALUES.map((value, i) => (
                            <div
                                key={i}
                                className="group bg-slate-50 border border-slate-200/80 hover:border-blue-200/80 rounded-3xl p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                            >
                                <div className={`w-14 h-14 ${value.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                                    <value.icon className={`w-7 h-7 ${value.color}`} />
                                </div>
                                <h3 className="text-xl font-extrabold text-slate-900 mb-3 tracking-tight">{value.title}</h3>
                                <p className="text-slate-500 leading-relaxed font-medium text-sm">{value.desc}</p>

                                <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase text-slate-300 group-hover:text-blue-500 transition-colors">
                                    <div className="w-6 h-px bg-slate-200 group-hover:bg-blue-400 group-hover:w-10 transition-all" />
                                    Core Principle
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════
                FINAL CTA
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-28 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 dark-grid-bg opacity-[0.04] pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <SectionLabel light>Get Started</SectionLabel>
                        <h2 className="text-4xl md:text-6xl font-black text-white mt-6 mb-5 tracking-tight leading-tight">
                            We Are Ready{' '}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #a78bfa)' }}
                            >
                                To Build.
                            </span>
                        </h2>
                        <p className="text-xl text-slate-400 font-medium mb-10 max-w-xl mx-auto leading-relaxed">
                            Your team of engineers is waiting. Let's start mapping out your new system.
                        </p>

                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg text-white cursor-pointer transition-all hover:scale-[1.03] active:scale-[0.97] shadow-2xl"
                            style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}
                        >
                            Meet The Architects
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        {/* Trust row */}
                        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-slate-500">
                            {['No sales pressure', 'Free strategy session', 'US & India engineering'].map((t) => (
                                <div key={t} className="flex items-center gap-2 text-sm font-medium">
                                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                                    {t}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
