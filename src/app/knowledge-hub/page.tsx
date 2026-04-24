import { Metadata } from 'next';
import { Search } from 'lucide-react';
import BlogListing from '@/components/BlogListing';
import { getAllPosts, getAllCategories } from '@/lib/blog';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Knowledge Hub & Technical Resources | CYBKART GLOBAL',
    description: 'Deep dives into AI automation, web architecture, and digital growth strategies.',
};

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

export default function KnowledgeHubPage() {
    const allPosts = getAllPosts();
    const categories = getAllCategories();

    return (
        <>
            {/* ══════════════════════════════════════════════════════════════
                HERO
            ═══════════════════════════════════════════════════════════════ */}
            <section className="relative min-h-[65vh] bg-[#030712] overflow-hidden flex items-end pb-20" style={{ paddingTop: '120px' }}>
                {/* Orbs */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-[-15%] left-[-5%] w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[120px] animate-glow-pulse" />
                    <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-violet-600/15 blur-[100px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
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
                    <SectionLabel light>Knowledge Hub</SectionLabel>

                    <h1 className="text-5xl lg:text-7xl font-black text-white mt-6 mb-5 tracking-tight leading-[1.05]">
                        Deep Dives Into{' '}
                        <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #a78bfa, #34d399)' }}>
                            AI Automation
                        </span>
                    </h1>

                    <p className="text-xl text-slate-400 font-medium max-w-2xl leading-relaxed mb-10">
                        Technical guides, case studies, and strategic insights from building 50+ automation systems.
                    </p>

                    {/* Search bar */}
                    <div className="relative max-w-lg">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="w-full bg-white/[0.05] border border-white/10 rounded-2xl py-4 pl-12 pr-5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 focus:bg-white/8 transition-all text-base font-medium"
                        />
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════
                BLOG LISTING (client component handles filtering)
            ═══════════════════════════════════════════════════════════════ */}
            <BlogListing allPosts={allPosts} categories={categories} />

            {/* ══════════════════════════════════════════════════════════════
                FINAL CTA
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-28 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 dark-grid-bg opacity-[0.04] pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/8 blur-[120px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <SectionLabel light>Get Started</SectionLabel>
                        <h2 className="text-4xl md:text-6xl font-black text-white mt-6 mb-5 tracking-tight leading-tight">
                            Stop Reading,{' '}
                            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #a78bfa)' }}>
                                Start Building.
                            </span>
                        </h2>
                        <p className="text-xl text-slate-400 font-medium mb-10 max-w-xl mx-auto leading-relaxed">
                            Every strategy we write about, we implement. Let's build your system today.
                        </p>

                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg text-white cursor-pointer transition-all hover:scale-[1.03] active:scale-[0.97] shadow-2xl"
                            style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}
                        >
                            Book Strategy Call
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-slate-500">
                            {['No commitment', 'Free consultation', 'US & India based team'].map((t) => (
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
