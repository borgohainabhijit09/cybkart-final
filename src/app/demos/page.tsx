'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Zap,
  Shield,
  BarChart3,
  CalendarCheck,
  ArrowRight,
  PhoneCall,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import BookingModal from '@/components/BookingModal';

// ─── Data ─────────────────────────────────────────────────────────────────────

const DEMOS = [
  {
    title: 'Auto Spa Demo',
    description: 'Luxury detailing website with online booking, tiered service packages, and automated SMS reminders.',
    industry: 'Luxury Auto Detailing',
    accent: { from: 'from-blue-500', to: 'to-cyan-500', text: 'text-blue-400', border: 'hover:border-blue-500/40', glow: 'group-hover:shadow-blue-500/20' },
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <path d="M9 17h6" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    ),
  },
  {
    title: 'Mobile Detailing Demo',
    description: 'On-demand mobile detailing van site with zip-code availability check, live scheduling, and Stripe payments.',
    industry: 'Mobile Car Detailing',
    accent: { from: 'from-emerald-500', to: 'to-teal-500', text: 'text-emerald-400', border: 'hover:border-emerald-500/40', glow: 'group-hover:shadow-emerald-500/20' },
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 5v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Ceramic Coating Demo',
    description: 'High-end paint protection specialist site with before/after gallery, tiered pricing, and a lead qualification funnel.',
    industry: 'Paint Protection',
    accent: { from: 'from-violet-500', to: 'to-purple-500', text: 'text-violet-400', border: 'hover:border-violet-500/40', glow: 'group-hover:shadow-violet-500/20' },
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

const VALUES = [
  { icon: CalendarCheck, text: '$0 First Month', sub: 'Zero risk to start' },
  { icon: Zap, text: 'Launch Fast', sub: '3–5 business days' },
  { icon: Shield, text: 'Fully Managed', sub: 'We handle everything' },
  { icon: BarChart3, text: 'Built for Leads', sub: 'Conversion-first design' },
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

export default function DemosPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ══════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] bg-[#030712] overflow-hidden flex items-end pb-20" style={{ paddingTop: '120px' }}>
        {/* Orbs */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-15%] right-[-8%] w-[600px] h-[600px] rounded-full bg-violet-600/15 blur-[120px] animate-glow-pulse" />
          <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[100px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-xs font-bold uppercase tracking-[0.15em] mb-6">
              <Sparkles className="w-3 h-3" />
              Live Showcase
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-white mt-2 mb-6 tracking-tight leading-[1.05]">
              See{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #a78bfa, #34d399)' }}>
                Live Website
              </span>{' '}
              <br />Demos Built For Yours
            </h1>

            <p className="text-xl text-slate-400 font-medium max-w-2xl leading-relaxed mb-10">
              Choose from professionally designed websites ready to launch for your business. Fully managed, mobile-friendly, and built to generate leads.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center justify-center gap-3 px-9 py-4 rounded-2xl font-extrabold text-lg text-slate-900 cursor-pointer transition-all hover:scale-[1.03] active:scale-[0.97] shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', boxShadow: '0 16px 40px rgba(251,191,36,0.25)' }}
              >
                Claim My Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-2xl font-bold text-base text-white border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          DEMO GRID
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[#030712] relative overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DEMOS.map((demo, i) => (
              <div key={i} className={`group relative bg-white/[0.03] border border-white/8 ${demo.accent.border} rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${demo.accent.glow} flex flex-col`}>
                {/* Preview Area */}
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                  <div className="absolute inset-0 flex flex-col">
                    {/* Fake browser chrome */}
                    <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-800/80 border-b border-white/5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                      <div className="flex-1 mx-3 h-4 rounded bg-white/5 flex items-center px-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${demo.accent.text.replace('text-', 'bg-')} mr-1.5`} />
                        <div className="h-1 w-16 bg-white/10 rounded" />
                      </div>
                    </div>
                    {/* Content placeholder */}
                    <div className="flex-1 relative flex items-center justify-center p-6">
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.4) 100%)' }} />
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${demo.accent.from} ${demo.accent.to} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl`}
                        style={{ background: 'rgba(255,255,255,0.05)' }}>
                        <demo.icon className={`w-8 h-8 ${demo.accent.text}`} />
                      </div>
                      {/* Skeleton lines */}
                      <div className="absolute bottom-4 left-4 right-4 space-y-1.5">
                        <div className="h-1.5 w-3/4 bg-white/5 rounded" />
                        <div className="h-1.5 w-1/2 bg-white/5 rounded" />
                      </div>
                    </div>
                  </div>
                  {/* Industry chip */}
                  <div className="absolute top-12 left-4 px-3 py-1 rounded-lg bg-black/50 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest border border-white/8" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {demo.industry}
                  </div>
                </div>

                {/* Info */}
                <div className="p-8 space-y-5 flex-1 flex flex-col">
                  <div>
                    <h3 className={`text-xl font-extrabold text-white mb-2 tracking-tight group-hover:${demo.accent.text} transition-colors`}>
                      {demo.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">{demo.description}</p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className={`mt-auto w-full py-3.5 rounded-2xl font-bold text-sm uppercase tracking-wider border transition-all duration-300 cursor-pointer flex items-center justify-center gap-2
                      bg-white/[0.03] border-white/8 text-slate-300
                      group-hover:bg-gradient-to-r group-hover:${demo.accent.from} group-hover:${demo.accent.to}
                      group-hover:text-white group-hover:border-transparent group-hover:shadow-lg`}
                  >
                    Preview Demo
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          VALUE MODEL
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 blur-[100px] opacity-80 rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <SectionLabel>Value Model</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Why Businesses{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}>
                Love This Model
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {VALUES.map((val, i) => (
              <div key={i} className="group flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-400">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <val.icon className="w-7 h-7 text-blue-500" />
                </div>
                <div className="font-extrabold text-slate-900 text-lg tracking-tight mb-1">{val.text}</div>
                <div className="text-slate-400 text-sm font-medium">{val.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FOOTER CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 dark-grid-bg opacity-[0.04] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/8 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight">
              Ready To Use One <br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #a78bfa)' }}>
                For Your Business?
              </span>
            </h2>
            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-xl mx-auto">
              Pick a design, request a demo, and launch risk-free.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-extrabold text-xl text-slate-900 cursor-pointer transition-all hover:scale-[1.03] active:scale-[0.97] shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', boxShadow: '0 20px 50px rgba(251,191,36,0.3)' }}
              >
                Get My Free Demo Website
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:8446991255"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-bold text-base text-white border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <PhoneCall className="w-5 h-5" />
                Call Toll Free
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-slate-500">
              {['Free 30-day trial', 'No credit card required', 'Cancel anytime'].map((t) => (
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
