'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Zap,
  Shield,
  BarChart3,
  CalendarCheck,
  ArrowRight,
  PhoneCall,
  CheckCircle,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import BookingModal from '@/components/BookingModal';

// ─── Data ─────────────────────────────────────────────────────────────────────

const DEMOS = [
  {
    title: 'Precision Auto Spa',
    description: 'High-end luxury detailing website featuring a sleek aesthetic, integrated online booking, and tiered service packages.',
    industry: 'Auto Detailing',
    image: '/images/demos/auto-spa.jpg',
    link: 'https://precision-auto-spa.vercel.app/',
    accent: { from: 'from-blue-600', to: 'to-cyan-400', text: 'text-blue-500', border: 'hover:border-blue-500/50', glow: 'group-hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]' },
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
    title: 'Pest Control Elite',
    description: 'Lead-generation powerhouse tailored for pest control services, featuring instant quote forms, trust badges, and service area checks.',
    industry: 'Pest Control',
    image: '/images/demos/pest-control.jpg',
    link: 'https://pest-control.cybkartglobal.com/',
    accent: { from: 'from-emerald-500', to: 'to-teal-400', text: 'text-emerald-500', border: 'hover:border-emerald-500/50', glow: 'group-hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)]' },
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    ),
  },
  {
    title: 'AC Repair Pro',
    description: 'Conversion-focused HVAC template with emergency call-to-actions, service grids, and built-in trust signals for immediate lead capture.',
    industry: 'HVAC Services',
    image: '/images/demos/ac-repair.jpg',
    link: 'https://acrepair-demo.cybkartglobal.com/',
    accent: { from: 'from-orange-500', to: 'to-amber-400', text: 'text-orange-500', border: 'hover:border-orange-500/50', glow: 'group-hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.3)]' },
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        <path d="M12 6v6l4.25 2.5" />
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

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col gap-24 pb-12">
            {DEMOS.map((demo, i) => (
              <div 
                key={i} 
                className={`group relative w-full rounded-[2.5rem] bg-white/[0.015] border border-white/5 overflow-hidden flex flex-col xl:flex-row shadow-2xl transition-all duration-700 hover:border-white/15 hover:shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)]`}
              >
                 
                 {/* Content Pane */}
                 <div className="xl:w-[45%] flex flex-col justify-center p-10 lg:p-16 relative z-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                    <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${demo.accent.from} ${demo.accent.to} opacity-[0.07] blur-3xl -z-10 group-hover:opacity-20 transition-opacity duration-700`} />

                    <div>
                      <div className="mb-8">
                        <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-slate-300 backdrop-blur-md`}>
                          <span className={`w-2 h-2 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.4)] bg-gradient-to-br ${demo.accent.from} ${demo.accent.to}`} />
                          {demo.industry}
                        </span>
                      </div>
                      
                      <h3 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                        {demo.title}
                      </h3>
                      <p className="text-lg text-slate-400 font-medium leading-relaxed mb-10 xl:pr-8">
                        {demo.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4">
                        {['High Conversion Rate', 'Premium Design', 'SEO Optimized', 'Mobile First'].map((feature, idx) => (
                           <div key={idx} className="flex items-center gap-3">
                             <div className={`w-1 h-5 rounded-full bg-gradient-to-b ${demo.accent.from} ${demo.accent.to}`} />
                             <span className="text-sm font-semibold text-slate-300">{feature}</span>
                           </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-12 flex flex-col sm:flex-row gap-4 relative z-50">
                      <a
                        href={demo.link ?? '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1`}
                        style={{ boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)' }}
                      >
                         {/* Button fill gradient */}
                         <div className={`absolute inset-0 bg-gradient-to-r ${demo.accent.from} ${demo.accent.to} opacity-90 group-hover:opacity-100 transition-opacity`} />
                         {/* Border sheen top */}
                         <div className="absolute inset-0 rounded-xl border border-white/20 pointer-events-none" />
                         
                         <span className="relative z-10 flex items-center gap-2">
                           Live Preview <ExternalLink className="w-4 h-4 ml-1" />
                         </span>
                      </a>
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-300 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:text-white"
                      >
                        Claim Design
                      </button>
                    </div>
                 </div>

                 {/* Mockup Pane Visuals */}
                 <div className="xl:w-[55%] relative min-h-[400px] xl:min-h-[600px] bg-[#050B14] border-t xl:border-t-0 xl:border-l border-white/5 overflow-hidden flex items-center justify-center p-8 lg:p-14">
                    {/* Atmospheric Lighting inside mockup pane */}
                    <div className={`absolute inset-0 bg-gradient-to-bl ${demo.accent.from} ${demo.accent.to} opacity-[0.02] group-hover:opacity-[0.06] transition-opacity duration-1000 ease-in-out`} />
                    <div className="absolute top-0 right-0 w-full h-[50%] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
                    
                    {/* Floating Browser Mockup */}
                    <div className="w-full relative shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] rounded-2xl overflow-hidden border border-white/10 group-hover:-translate-y-3 group-hover:-translate-x-1 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform">
                       
                       {/* Browser Chrome Header */}
                       <div className="flex items-center px-4 py-3.5 bg-[#0F1523] border-b border-white/5 relative z-10">
                         <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-slate-700/50 group-hover:bg-rose-500 transition-colors duration-500 delay-[100ms]" />
                           <div className="w-3 h-3 rounded-full bg-slate-700/50 group-hover:bg-amber-500 transition-colors duration-500 delay-[200ms]" />
                           <div className="w-3 h-3 rounded-full bg-slate-700/50 group-hover:bg-emerald-500 transition-colors duration-500 delay-[300ms]" />
                         </div>
                         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-1/3 bg-slate-900/50 border border-white/5 rounded-md flex items-center justify-center px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                           <div className="h-1.5 w-16 bg-white/10 rounded-full" />
                         </div>
                       </div>
                       
                       {/* Browser Viewport with native aspect ratio */}
                       <div className="relative w-full aspect-[4/3] bg-slate-900">
                          {demo.image ? (
                            <>
                              <Image 
                                src={demo.image} 
                                alt={demo.title} 
                                fill 
                                className="object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                                priority={i === 0} 
                              />
                              <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] pointer-events-none" />
                            </>
                          ) : (
                             <div className="absolute inset-0 flex items-center justify-center flex-col">
                                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${demo.accent.from} ${demo.accent.to} bg-opacity-10 flex items-center justify-center mb-6`}>
                                   <demo.icon className={`w-10 h-10 ${demo.accent.text}`} />
                                </div>
                                <div className="w-32 h-2 bg-white/5 rounded-full" />
                             </div>
                          )}
                       </div>
                    </div>
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
