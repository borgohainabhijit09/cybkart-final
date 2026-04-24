import { Metadata } from 'next';
import Link from 'next/link';
import {
    ArrowRight,
    TrendingUp,
    Activity,
    ShoppingBag,
    Briefcase,
    Check,
    X,
    CheckCircle,
} from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'Case Scenarios & Performance Data | CYBKART GLOBAL',
    description: 'Real-world results from our automated systems. See how businesses reduce costs and drive revenue with intelligent architecture.',
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const HERO_STATS = [
    { value: '~$2.4M', label: 'Client Revenue Generated', gradient: 'from-blue-500 to-cyan-500' },
    { value: '12k+', label: 'Automated Bookings', gradient: 'from-violet-500 to-purple-500' },
    { value: '98.5%', label: 'Uptime Reliability', gradient: 'from-emerald-500 to-teal-500' },
];

const CASE_STUDIES = [
    {
        icon: Activity,
        industry: 'Medical & Wellness',
        industryColor: 'text-blue-400',
        industryBg: 'bg-blue-500/10',
        accentGradient: 'from-blue-500 to-cyan-500',
        accentBorder: 'border-blue-500/30',
        accentText: 'text-blue-400',
        title: 'The "Zero-Admin" Clinic',
        context: 'A busy dental practice was losing ~15 appointments a week to phone tag and manual errors. Their front desk was overwhelmed.',
        metrics: [
            { label: 'No-Show Reduction', value: '-85%', pct: 85, check: 'text-blue-400' },
            { label: 'Admin Hours Saved', value: '25hrs/wk', pct: 60, check: 'text-blue-400' },
        ],
        before: ['Voice-mail tag for bookings', 'Manual SMS reminders (often forgotten)', 'No deposit collection'],
        after: ['24/7 Self-booking portal', 'Automated WhatsApp/SMS flows', '$50 Refundable deposit required'],
        quote: '"It\'s like having a receptionist who never sleeps."',
        metricCard: null,
    },
    {
        icon: ShoppingBag,
        industry: 'Retail & E-Commerce',
        industryColor: 'text-violet-400',
        industryBg: 'bg-violet-500/10',
        accentGradient: 'from-violet-500 to-purple-500',
        accentBorder: 'border-violet-500/30',
        accentText: 'text-violet-400',
        title: 'The Scalable Brand',
        context: 'A streetwear brand was stuck at $20k/mo. Their generic template site was slow, uninspiring, and crashed during drops.',
        metrics: [
            { label: 'Conversion Rate', value: '+140%', pct: 100, check: 'text-violet-400' },
            { label: 'Page Load Time', value: '0.8s', pct: 90, check: 'text-violet-400' },
        ],
        before: ['4.5s Mobile load time', 'Generic, non-branded checkout', 'Zero email automation'],
        after: ['Headless Shopify (Next.js)', 'Abandoned cart recovery flows', '"Shop the Look" features'],
        quote: '"We doubled our revenue in 3 months just by fixing the user experience."',
        metricCard: null,
        reversed: true,
    },
    {
        icon: Briefcase,
        industry: 'Professional Services',
        industryColor: 'text-emerald-400',
        industryBg: 'bg-emerald-500/10',
        accentGradient: 'from-emerald-500 to-teal-500',
        accentBorder: 'border-emerald-500/30',
        accentText: 'text-emerald-400',
        title: 'The High-Ticket Pipeline',
        context: 'A financial consultant was wasting 15 hours/week on free calls with unqualified leads who couldn\'t afford his services.',
        metrics: [
            { label: 'Lead Quality Score', value: '9/10', pct: 90, check: 'text-emerald-400' },
            { label: 'Revenue per Hour', value: '+300%', pct: 100, check: 'text-emerald-400' },
        ],
        before: ['"Contact Us" form (spam magnet)', 'Manually emailing PDF brochures', 'No clear pricing on site'],
        after: ['3-Step Qualification Quiz', 'Automated calendar (paid calls only)', 'Auto-webinar for education'],
        quote: '"I now only talk to people who have their credit card in hand."',
        metricCard: null,
    },
];

// ─── Design Primitives ────────────────────────────────────────────────────────

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
    return (
        <span className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${light ? 'text-blue-400' : 'text-blue-600'}`}>
            <span className={`block w-6 h-px ${light ? 'bg-blue-400' : 'bg-blue-600'}`} />
            {children}
        </span>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CaseScenariosPage() {
    return (
        <>
            {/* ══════════════════════════════════════════════════════════════
                HERO
            ═══════════════════════════════════════════════════════════════ */}
            <section className="relative min-h-[65vh] bg-[#030712] overflow-hidden flex items-end pb-20" style={{ paddingTop: '120px' }}>
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-[-15%] right-[-5%] w-[600px] h-[600px] rounded-full bg-emerald-600/15 blur-[120px] animate-glow-pulse" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[100px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
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
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-[0.15em] mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Proven Outcomes
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.05]">
                        Performance Data <br />
                        <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #34d399, #60a5fa, #a78bfa)' }}>
                            In Real World Tests.
                        </span>
                    </h1>

                    <p className="text-xl text-slate-400 font-medium max-w-2xl leading-relaxed mb-12">
                        We track everything. See precisely how our automated booking systems and
                        sales funnels perform for Medical, Retail, and Professional Service clients.
                    </p>

                    {/* Stats row */}
                    <div className="flex flex-wrap gap-10 pt-8 border-t border-white/8">
                        {HERO_STATS.map((stat, i) => (
                            <div key={i}>
                                <div className={`text-4xl font-black bg-clip-text text-transparent bg-gradient-to-br ${stat.gradient}`}>
                                    {stat.value}
                                </div>
                                <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════
                CASE STUDIES
            ═══════════════════════════════════════════════════════════════ */}
            {CASE_STUDIES.map((cs, idx) => {
                const isEven = idx % 2 === 0;
                return (
                    <section
                        key={idx}
                        className={`py-28 relative overflow-hidden ${isEven ? 'bg-white' : 'bg-slate-950'}`}
                    >
                        {/* Subtle bg accent */}
                        {!isEven && <div className="absolute inset-0 dark-grid-bg opacity-[0.04] pointer-events-none" />}
                        <div className={`absolute ${isEven ? 'top-0 right-0 bg-blue-50' : 'bottom-0 left-0 bg-blue-600/5'} w-[400px] h-[400px] rounded-full blur-[100px] opacity-60 pointer-events-none`} />

                        <div className="container mx-auto px-6 relative z-10">
                            <div className={`flex flex-col lg:flex-row gap-16 xl:gap-24 items-start ${cs.reversed ? 'lg:flex-row-reverse' : ''}`}>

                                {/* LEFT/RIGHT: Info column */}
                                <div className="lg:w-5/12 space-y-8">
                                    <div>
                                        <div className={`inline-flex items-center gap-2 ${cs.industryBg} ${cs.industryColor} text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4`}>
                                            <cs.icon className="w-3.5 h-3.5" />
                                            {cs.industry}
                                        </div>
                                        <h2 className={`text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight mb-4 ${isEven ? 'text-slate-900' : 'text-white'}`}>
                                            {cs.title}
                                        </h2>
                                        <p className={`text-lg leading-relaxed font-medium ${isEven ? 'text-slate-500' : 'text-slate-400'}`}>
                                            {cs.context}
                                        </p>
                                    </div>

                                    {/* Metrics */}
                                    <div className={`p-8 rounded-3xl border ${isEven ? 'bg-slate-50 border-slate-200/80' : 'bg-white/[0.04] border-white/8'}`}>
                                        <div className={`text-xs font-bold uppercase tracking-widest mb-6 ${isEven ? 'text-slate-400' : 'text-slate-500'}`}>Key Results</div>
                                        <div className="space-y-5">
                                            {cs.metrics.map((m, mi) => (
                                                <div key={mi}>
                                                    <div className="flex justify-between text-sm mb-2">
                                                        <span className={isEven ? 'text-slate-600 font-medium' : 'text-slate-400 font-medium'}>{m.label}</span>
                                                        <span className={`font-extrabold ${cs.accentText}`}>{m.value}</span>
                                                    </div>
                                                    <div className={`h-1.5 w-full rounded-full overflow-hidden ${isEven ? 'bg-slate-200' : 'bg-white/8'}`}>
                                                        <div
                                                            className={`h-full bg-gradient-to-r ${cs.accentGradient} rounded-full`}
                                                            style={{ width: `${m.pct}%` }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* RIGHT/LEFT: Before & After cards */}
                                <div className="lg:w-7/12 grid sm:grid-cols-2 gap-6">
                                    {/* Before */}
                                    <div className={`relative rounded-3xl p-8 border ${isEven ? 'bg-white border-slate-200/80' : 'bg-white/[0.03] border-white/8'}`}>
                                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-red-400 rounded-t-3xl" />
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center flex-shrink-0">
                                                <X className="w-4 h-4 text-rose-500" />
                                            </div>
                                            <h3 className={`font-extrabold tracking-tight ${isEven ? 'text-slate-900' : 'text-white'}`}>Before CYBKART</h3>
                                        </div>
                                        <ul className="space-y-4">
                                            {cs.before.map((item, bi) => (
                                                <li key={bi} className="flex items-start gap-3">
                                                    <X className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                                                    <span className={`text-sm font-medium ${isEven ? 'text-slate-600' : 'text-slate-400'}`}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* After */}
                                    <div className={`relative rounded-3xl p-8 border ${cs.accentBorder} ${isEven ? 'bg-slate-50 border-opacity-60' : 'bg-white/[0.04]'}`}>
                                        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cs.accentGradient} rounded-t-3xl`} />
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className={`w-8 h-8 rounded-full ${cs.industryBg} flex items-center justify-center flex-shrink-0`}>
                                                <Check className={`w-4 h-4 ${cs.industryColor}`} />
                                            </div>
                                            <h3 className={`font-extrabold tracking-tight ${isEven ? 'text-slate-900' : 'text-white'}`}>The Solution</h3>
                                        </div>
                                        <ul className="space-y-4">
                                            {cs.after.map((item, ai) => (
                                                <li key={ai} className="flex items-start gap-3">
                                                    <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${cs.accentText}`} />
                                                    <span className={`text-sm font-medium ${isEven ? 'text-slate-700' : 'text-slate-300'}`}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className={`mt-6 pt-5 border-t text-sm font-medium leading-snug ${isEven ? `border-slate-200 ${cs.accentText}` : `border-white/8 ${cs.accentText}`}`}>
                                            {cs.quote}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}

            {/* ══════════════════════════════════════════════════════════════
                CTA
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-28 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 dark-grid-bg opacity-[0.04] pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/8 blur-[120px] rounded-full pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl mx-auto">
                    <SectionLabel light>Get Started</SectionLabel>
                    <h2 className="text-4xl md:text-6xl font-black text-white mt-6 mb-5 tracking-tight leading-tight">
                        Be Our Next{' '}
                        <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #34d399, #60a5fa)' }}>
                            Case Study
                        </span>
                    </h2>
                    <p className="text-xl text-slate-400 font-medium mb-10 max-w-xl mx-auto leading-relaxed">
                        We are looking for ambitious partners in Medical, Law, and Retail sectors.
                    </p>
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg text-white cursor-pointer transition-all hover:scale-[1.03] active:scale-[0.97] shadow-2xl"
                        style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}
                    >
                        Work With Us
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-slate-500">
                        {['No sales pressure', 'Free strategy session', 'Results-first approach'].map((t) => (
                            <div key={t} className="flex items-center gap-2 text-sm font-medium">
                                <CheckCircle className="w-4 h-4 text-emerald-500" />
                                {t}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
