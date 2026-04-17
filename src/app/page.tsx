'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  ArrowRight,
  Brain,
  Globe,
  ShoppingCart,
  Target,
  Zap,
  BarChart3,
  Shield,
  Search,
  Layout,
  LineChart,
  Database,
  Layers,
  ChevronRight,
  Code2,
  Terminal,
  Activity,
  Clock,
  TrendingUp,
  Banknote,
  Frown,
  MonitorDot,
  Eye,
  Rocket,
  PhoneCall,
  Star,
  CalendarCheck
} from 'lucide-react';
import CTASection from '@/components/CTASection';
import BookingModal from '@/components/BookingModal';

const HERO_SLIDES = [
  {
    type: 'website',
    badge: 'Limited Offer: $0 Setup',
    headline: ['Get a Professional', 'Website for $0', 'Today'],
    highlightIndex: 1,
    highlightColor: 'text-yellow-400',
    body: 'Launch a high-converting website for your business with hosting, updates, support, and ongoing improvements included. Use it free for the first month and pay only if you continue.',
    primaryCta: 'Get My Free Demo',
    secondaryCta: 'See Our Work',
    secondaryHref: '/portfolio/customer-sites',
    visual: {
      slides: [
        { label: 'Auto Spa', bg: 'bg-blue-500/10', btn: 'bg-blue-500', grad: 'from-blue-600/30 to-blue-400/10' },
        { label: 'Clinic', bg: 'bg-indigo-500/10', btn: 'bg-indigo-500', grad: 'from-indigo-600/30 to-purple-400/10' },
        { label: 'Legal', bg: 'bg-slate-500/10', btn: 'bg-slate-700', grad: 'from-slate-600/30 to-slate-400/10' },
      ],
      badge: { amount: '$0', label: 'First Month', sub: 'No hidden fees' },
    },
    blob: 'bg-yellow-500/20',
  },
  {
    type: 'analytics',
    badge: 'Growth Focused',
    headline: ['Go Live Fast.', 'Scale Even', 'Faster'],
    highlightIndex: 2,
    highlightColor: 'text-cyan-400',
    body: 'Launch in just 3-5 days. Our sites are engineered for speed and conversion, helping you capture more leads and outpace your competition instantly.',
    primaryCta: 'Start My Project',
    secondaryCta: 'Growth Services',
    secondaryHref: '/services',
    visual: {
      slides: [
        { label: 'Conversions', bg: 'bg-cyan-500/10', btn: 'bg-cyan-500', grad: 'from-cyan-600/30 to-blue-400/10', val: '+124%' },
        { label: 'Traffic', bg: 'bg-emerald-500/10', btn: 'bg-emerald-500', grad: 'from-emerald-600/30 to-teal-400/10', val: '4.2k' },
        { label: 'Leads', bg: 'bg-blue-500/10', btn: 'bg-blue-500', grad: 'from-blue-600/30 to-cyan-400/10', val: '86' },
      ],
      badge: { amount: '3-5', label: 'Days Live', sub: 'Rapid deployment' },
    },
    blob: 'bg-cyan-500/20',
  },
  {
    type: 'managed',
    badge: 'Fully Managed',
    headline: ['Zero Friction.', '100% Peace', 'of Mind'],
    highlightIndex: 1,
    highlightColor: 'text-purple-400',
    body: 'Never worry about updates, bugs, or hosting again. Our team manages your entire digital ecosystem 24/7, so your business never misses a beat.',
    primaryCta: 'Book Free Audit',
    secondaryCta: 'Learn Support',
    secondaryHref: '/services',
    visual: {
      slides: [
        { label: 'Security', bg: 'bg-purple-500/10', btn: 'bg-purple-500', grad: 'from-purple-600/30 to-violet-400/10', status: 'Active' },
        { label: 'Support', bg: 'bg-rose-500/10', btn: 'bg-rose-500', grad: 'from-rose-600/30 to-pink-400/10', status: 'Online' },
        { label: 'Uptime', bg: 'bg-emerald-500/10', btn: 'bg-emerald-500', grad: 'from-emerald-600/30 to-green-400/10', status: '99.9%' },
      ],
      badge: { amount: '24/7', label: 'Monitoring', sub: 'Always optimized' },
    },
    blob: 'bg-purple-500/20',
  },
];

const TRUST_ITEMS = [
  'Free Demo',
  '3-5 Day Launch',
  '24/7 Support',
  'Cancel Anytime',
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 12 12" fill="none">
      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const [mockSlide, setMockSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [progress, setProgress] = useState(0);

  /* Auto-advance progress bar */
  useEffect(() => {
    const duration = 6000;
    const interval = 50;
    const step = (interval / duration) * 100;

    const t = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          goTo((heroSlide + 1) % HERO_SLIDES.length);
          return 0;
        }
        return p + step;
      });
    }, interval);

    return () => clearInterval(t);
  }, [heroSlide, animating]);

  /* Auto-advance inner mockup every 2.5 s */
  useEffect(() => {
    const current = HERO_SLIDES[heroSlide];
    const t = setInterval(() => setMockSlide(p => (p + 1) % current.visual.slides.length), 2500);
    return () => clearInterval(t);
  }, [heroSlide]);

  function goTo(index: number) {
    if (animating || index === heroSlide) return;
    setAnimating(true);
    setHeroSlide(index);
    setMockSlide(0);
    setProgress(0);
    setTimeout(() => setAnimating(false), 800);
  }

  return (
    <>
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ══════════════════════════════════════════
          CINEMATIC HERO — Immersive 3-slide slider
         ══════════════════════════════════════════ */}
      <section className="relative bg-[#050B1A] overflow-hidden min-h-[95vh] flex items-center">

        {/* Immersive Background Layers */}
        <div className="absolute inset-0 dark-grid-bg opacity-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050B1A]/80 to-[#050B1A] z-10 pointer-events-none"></div>

        {/* Animated Background Blobs */}
        <div className={`absolute top-[-10%] left-[-5%] w-[60%] h-[60%] rounded-full blur-[140px] mix-blend-screen animate-blob transition-all duration-1000 opacity-20 ${HERO_SLIDES[heroSlide].blob}`}></div>
        <div className={`absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full blur-[140px] mix-blend-screen animate-blob animation-delay-2000 transition-all duration-1000 opacity-20 ${HERO_SLIDES[heroSlide].blob}`}></div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="relative w-full h-full min-h-[700px]">

            {HERO_SLIDES.map((slide, si) => {
              const vis = slide.visual;
              const isActive = heroSlide === si;
              return (
                <div
                  key={si}
                  className={`absolute inset-0 flex flex-col items-center transition-all duration-1000 ease-in-out py-20
                    ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95 pointer-events-none'}`}
                >

                  {/* Content Area */}
                  <div className="w-full text-center mb-16 space-y-8 animate-fade-in-up">

                    {/* Badge */}
                    <div className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-[0.2em] border backdrop-blur-md mx-auto
                      ${si === 0 ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-500'
                        : si === 1 ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                          : 'bg-purple-500/10 border-purple-500/30 text-purple-400'}`}>
                      <span className={`w-2 h-2 rounded-full animate-pulse
                        ${si === 0 ? 'bg-yellow-400' : si === 1 ? 'bg-cyan-400' : 'bg-purple-400'}`}></span>
                      {slide.badge}
                    </div>

                    {/* Bold Centered Headline */}
                    <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] max-w-5xl mx-auto italic uppercase">
                      {slide.headline.map((line, li) => (
                        <span key={li} className={`block drop-shadow-2xl ${li === slide.highlightIndex ? slide.highlightColor : ''}`}>{line}</span>
                      ))}
                    </h1>

                    {/* Balanced Subtext */}
                    <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed text-balance">
                      {slide.body}
                    </p>

                    {/* Impact CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className={`group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl overflow-hidden cursor-pointer
                          ${si === 0 ? 'bg-yellow-500 text-slate-950 hover:bg-yellow-400'
                            : si === 1 ? 'bg-cyan-500 text-slate-950 hover:bg-cyan-400'
                              : 'bg-purple-600 text-white hover:bg-purple-500'}`}
                      >
                        <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-30deg] -translate-x-full group-hover:translate-x-[250%] transition-transform duration-700"></div>
                        {slide.primaryCta}
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <Link
                        href={slide.secondaryHref}
                        className="inline-flex items-center justify-center gap-3 bg-white/5 text-white border-2 border-slate-700/50 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-xl"
                      >
                        {slide.secondaryCta}
                      </Link>
                    </div>

                    {/* Elegant Trust Row */}
                    <div className="pt-8 flex flex-wrap justify-center gap-x-12 gap-y-4">
                      {TRUST_ITEMS.map((item) => (
                        <div key={item} className="flex items-center gap-2.5 group">
                          <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                            <CheckIcon />
                          </div>
                          <span className="text-slate-300 font-bold uppercase tracking-widest text-xs group-hover:text-white transition-colors">{item}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* ── Immersive visual — floating components ── */}
                  <div className="w-full max-w-6xl mx-auto relative flex justify-center mt-auto pb-10">

                    <div className="relative w-full h-[400px] flex items-center justify-center perspective-[2000px]">

                      {/* Laptop mockup — main central piece */}
                      <div className="relative z-10 w-[500px] lg:w-[650px] transform hover:rotate-x-2 transition-transform duration-500 animate-float drop-shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
                        <div className="relative bg-[#1A1F2C] rounded-t-2xl border-[8px] border-b-0 border-[#2D3446] shadow-2xl overflow-hidden" style={{ paddingBottom: '62%' }}>
                          <div className="absolute inset-0 flex flex-col">
                            {/* Toolbar */}
                            <div className="h-8 bg-[#2D3446] flex items-center px-4 gap-4 flex-shrink-0">
                              <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-rose-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                              </div>
                              <div className="h-4 flex-1 bg-black/20 rounded-lg"></div>
                            </div>
                            {/* Inner Screen Content */}
                            <div className="flex-1 relative overflow-hidden p-6 bg-[#0B1121]">
                              {vis.slides.map((vs: any, vi: number) => (
                                <div key={vi} className={`absolute inset-6 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]
                                    ${mockSlide === vi ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                                  {/* WEBSITE */}
                                  {slide.type === 'website' && (
                                    <div className="h-full flex flex-col gap-6">
                                      <div className={`flex-1 rounded-2xl ${vs.bg} border border-white/5 p-8 flex items-center justify-center relative overflow-hidden`}>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${vs.grad} opacity-30`}></div>
                                        <Globe className="w-20 h-20 text-white/10 relative z-10" />
                                        <div className="absolute bottom-4 left-4 font-black uppercase tracking-widest text-white/40 text-sm">{vs.label}</div>
                                      </div>
                                      <div className="h-20 flex gap-6">
                                        <div className="flex-1 rounded-xl bg-white/5 border border-white/5"></div>
                                        <div className={`w-36 rounded-xl ${vs.btn} opacity-20`}></div>
                                      </div>
                                    </div>
                                  )}
                                  {/* ANALYTICS */}
                                  {slide.type === 'analytics' && (
                                    <div className="h-full grid grid-cols-5 gap-6">
                                      <div className="col-span-3 bg-white/5 rounded-2xl p-6 border border-white/5 flex flex-col">
                                        <div className="flex justify-between items-end mb-8">
                                          <div className="space-y-2"><div className="w-20 h-2 bg-white/20 rounded"></div><div className="text-3xl font-black text-white italic">{vs.val}</div></div>
                                          <div className={`w-12 h-12 rounded-xl ${vs.bg} flex items-center justify-center`}><TrendingUp className="w-6 h-6 text-white/60" /></div>
                                        </div>
                                        <div className="flex-1 flex items-end gap-2">
                                          {[40, 70, 45, 90, 60, 80, 50, 65, 30].map((h, i) => (
                                            <div key={i} className={`flex-1 rounded-t-lg bg-gradient-to-t ${vs.grad}`} style={{ height: `${h}%` }}></div>
                                          ))}
                                        </div>
                                      </div>
                                      <div className="col-span-2 space-y-6">
                                        {[1, 2, 3].map(i => <div key={i} className="h-16 bg-white/5 rounded-xl border border-white/5"></div>)}
                                      </div>
                                    </div>
                                  )}
                                  {/* MANAGED */}
                                  {slide.type === 'managed' && (
                                    <div className="h-full grid grid-cols-2 gap-8">
                                      <div className="relative flex items-center justify-center">
                                        <div className={`w-40 h-40 rounded-full border-8 border-dashed border-white/5 flex items-center justify-center animate-spin-slow`}></div>
                                        <div className={`absolute w-32 h-32 rounded-full ${vs.bg} flex items-center justify-center border border-white/10 shadow-2xl shadow-white/5`}>
                                          <Shield className="w-12 h-12 text-white/50" />
                                        </div>
                                      </div>
                                      <div className="flex flex-col gap-4 py-4">
                                        {[1, 2, 3, 4].map(i => (
                                          <div key={i} className="flex-1 bg-white/5 rounded-xl border border-white/5 flex items-center px-4 justify-between">
                                            <div className="w-12 h-2 bg-white/10 rounded"></div>
                                            <div className={`px-3 py-1 rounded-full ${vs.btn} text-[8px] font-black uppercase text-white shadow-lg`}>{vs.status}</div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        {/* Laptop Hinge Handle */}
                        <div className="h-4 bg-[#2D3446] w-[108%] -ml-[4%] rounded-b-2xl border-t border-white/10 relative">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/10 rounded-b-xl shadow-inner"></div>
                        </div>
                      </div>

                      {/* Floating secondary monitors (Phone/Tablet) */}
                      <div className="absolute left-[5%] lg:left-[10%] bottom-10 z-20 animate-float-delayed">
                        <div className="relative w-[130px] lg:w-[160px] bg-slate-900 rounded-[2.5rem] border-[6px] border-[#2D3446] shadow-[0_40px_80px_rgba(0,0,0,0.6)] overflow-hidden" style={{ paddingBottom: '210%' }}>
                          <div className="absolute inset-0 bg-[#0B1121] pt-10 px-3 flex flex-col gap-4">
                            <div className="w-10 h-1 bg-slate-800 rounded-full mx-auto mb-2"></div>
                            <div className="h-24 rounded-2xl bg-white/5 relative overflow-hidden">
                              <div className={`absolute inset-0 bg-gradient-to-br ${vis.slides[mockSlide].grad} opacity-30`}></div>
                              <div className="absolute inset-0 flex items-center justify-center"><Zap className="w-8 h-8 text-white/20" /></div>
                            </div>
                            <div className="space-y-2">
                              <div className="h-2 bg-white/10 rounded w-3/4"></div>
                              <div className="h-2 bg-white/10 rounded w-full"></div>
                              <div className="h-2 bg-white/10 rounded w-1/2"></div>
                            </div>
                            <div className={`h-10 mt-auto mb-4 rounded-xl ${vis.slides[mockSlide].btn} opacity-30 animate-pulse`}></div>
                          </div>
                        </div>
                      </div>

                      <div className="absolute right-[5%] lg:right-[10%] top-10 z-0 animate-float-slow opacity-60 grayscale hover:grayscale-0 transition-all">
                        <div className="relative w-[180px] lg:w-[220px] bg-slate-900 rounded-[1.5rem] border-[6px] border-[#2D3446] shadow-[0_40px_80px_rgba(0,0,0,0.4)] overflow-hidden" style={{ paddingBottom: '140%' }}>
                          <div className="absolute inset-0 bg-[#0B1121] p-6 flex flex-col gap-4">
                            <div className="flex justify-between items-center mb-4"><div className="w-16 h-3 bg-white/10 rounded"></div><div className="w-4 h-4 rounded-full bg-blue-500/20"></div></div>
                            <div className="flex-1 bg-white/5 rounded-xl flex flex-col p-4 gap-2">
                              {[1, 2, 3, 4, 5].map(i => <div key={i} className={`h-2 bg-white/10 rounded w-${(i % 3) + 1}/4`}></div>)}
                            </div>
                            <div className="h-12 bg-white/10 rounded-xl mt-4"></div>
                          </div>
                        </div>
                      </div>

                      {/* Floating Badge */}
                      <div className="absolute z-30 top-1/2 right-[2%] lg:right-[5%] -translate-y-1/2 scale-110">
                        <div className="relative bg-white p-6 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-slate-100 flex flex-col items-center gap-1 w-[160px] animate-bounce-slow hov-3d">
                          <div className={`w-14 h-14 rounded-full flex items-center justify-center font-black text-2xl mb-1
                            ${si === 0 ? 'bg-yellow-100 text-yellow-600' : si === 1 ? 'bg-cyan-100 text-cyan-700' : 'bg-purple-100 text-purple-700'}`}>
                            {vis.badge.amount}
                          </div>
                          <div className="text-slate-900 font-black text-sm uppercase tracking-tighter">{vis.badge.label}</div>
                          <div className="text-slate-500 text-[10px] font-bold uppercase opacity-80">{vis.badge.sub}</div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* ── Segmented Progress Indicators (Linear Style) ── */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-40 flex items-center gap-8 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl">
          {HERO_SLIDES.map((slide, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="group flex flex-col gap-3 min-w-[140px] text-left cursor-pointer"
            >
              <div className="relative w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`absolute left-0 top-0 h-full bg-white transition-all duration-300 ${heroSlide === i ? 'w-full' : 'w-0'}`}
                  style={heroSlide === i ? { width: `${progress}%`, transition: 'width 50ms linear' } : {}}
                />
              </div>
              <div className="flex flex-col">
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all ${heroSlide === i ? 'text-white translate-y-0 opacity-100' : 'text-slate-500 translate-y-1 opacity-60 group-hover:opacity-100'}`}>
                  Step 0{i + 1}
                </span>
                <span className={`text-xs font-bold transition-all ${heroSlide === i ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                  {slide.badge.split(':')[1]?.trim() || slide.badge}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Cinematic Arrow Navigation (Minimal) */}
        <button
          onClick={() => goTo((heroSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          className="absolute left-10 top-1/2 -translate-y-1/2 z-40 w-16 h-16 rounded-2xl bg-white/5 hover:bg-white/10 hover:scale-110 border border-white/10 flex items-center justify-center text-white transition-all backdrop-blur-3xl hidden xl:flex group cursor-pointer"
        >
          <svg className="w-8 h-8 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
          onClick={() => goTo((heroSlide + 1) % HERO_SLIDES.length)}
          className="absolute right-10 top-1/2 -translate-y-1/2 z-40 w-16 h-16 rounded-2xl bg-white/5 hover:bg-white/10 hover:scale-110 border border-white/10 flex items-center justify-center text-white transition-all backdrop-blur-3xl hidden xl:flex group cursor-pointer"
        >
          <svg className="w-8 h-8 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </button>
      </section>

      {/* ── SECTION 2 — Pain / Problem Section ────────────────── */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight italic uppercase">
              Why Pay Thousands <span className="text-blue-600">Upfront</span> for a Website?
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">
            {[
              {
                icon: Banknote,
                iconBg: "bg-rose-100",
                iconColor: "text-rose-600",
                title: "Expensive Traditional Agencies",
                highlight: "$3k–$10k upfront fees",
                desc: "Most agencies demand a massive down payment before a single line of code is written. Why risk your capital on promises?",
              },
              {
                icon: Clock,
                iconBg: "bg-amber-100",
                iconColor: "text-amber-600",
                title: "Slow Delivery",
                highlight: "Weeks or months to launch",
                desc: "In today's market, speed is everything. Waiting months for a website launch means months of lost revenue and wasted momentum.",
              },
              {
                icon: Frown,
                iconBg: "bg-indigo-100",
                iconColor: "text-indigo-600",
                title: "No Ongoing Support",
                highlight: "Pay extra every time",
                desc: "Traditional models charge you for every small change, update, or bug fix. You end up being held hostage by your own technology.",
              }
            ].map((item, i) => (
              <div key={i} className="group relative bg-white p-10 rounded-[2.5rem] border border-slate-200/60 shadow-xl shadow-slate-200/20 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500">
                <div className={`w-16 h-16 ${item.iconBg} rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight leading-tight">
                  {item.title}
                </h3>
                <div className={`text-lg font-bold mb-4 ${item.iconColor} italic`}>
                  {item.highlight}
                </div>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
                <div className="absolute bottom-6 right-10 opacity-0 group-hover:opacity-10 dark:text-slate-900 pointer-events-none transition-opacity">
                   <item.icon className="w-16 h-16" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <div className="relative inline-block px-10 py-6 rounded-3xl bg-slate-900 shadow-2xl overflow-hidden group">
               <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
               <p className="text-2xl md:text-3xl font-black text-white italic tracking-tight leading-tight">
                 "Your website should help your business grow — <span className="text-blue-400 font-black">not drain your budget.</span>"
               </p>
            </div>
          </div>
        </div>
      </section>
      {/* ── SECTION 3 — Solution Section ────────────────────── */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            
            {/* Left: Copy & List */}
            <div className="lg:w-1/2 space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest">
                  The Solution
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter italic uppercase leading-tight">
                  A Better Way <br />
                  <span className="text-blue-600">To Get Online</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-xl">
                  At <span className="text-slate-950 font-bold">Cybkart Global</span>, we build and manage your website for one affordable monthly subscription. No hidden costs, no technical headaches.
                </p>
              </div>

              <div className="grid gap-5">
                {[
                  "Professional Design",
                  "Hosting Included",
                  "Unlimited Peace of Mind",
                  "Updates & Support",
                  "Ongoing Improvements"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 group animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                       <CheckIcon />
                    </div>
                    <span className="text-lg font-bold text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors uppercase italic">{text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-slate-800 transition-all shadow-xl cursor-pointer italic uppercase tracking-tighter"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right: Immersive Visual (Managed Stack) */}
            <div className="lg:w-1/2 relative perspective-[2000px]">
              <div className="relative w-full aspect-square max-w-lg mx-auto transform hover:rotate-y-12 transition-transform duration-1000">
                
                {/* Visual Stack Layers */}
                <div className="absolute inset-0 flex items-center justify-center">
                   
                   {/* Layer 3: Support */}
                   <div className="absolute top-[10%] w-[80%] aspect-video bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 animate-float-slow z-30">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center"><Shield className="w-5 h-5 text-purple-600" /></div>
                        <div className="h-2 w-24 bg-slate-100 rounded"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-full bg-slate-50 rounded"></div>
                        <div className="h-2 w-3/4 bg-slate-50 rounded"></div>
                      </div>
                      <div className="absolute bottom-6 right-6 px-3 py-1 bg-emerald-500 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">24/7 Managed</div>
                   </div>

                   {/* Layer 2: Design */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-video bg-slate-900 rounded-2xl shadow-3xl border border-white/10 p-6 z-20 overflow-hidden transform rotate-[-2deg]">
                      <div className="absolute inset-0 opacity-20 dark-grid-bg"></div>
                      <div className="relative z-10 h-full flex flex-col justify-between">
                         <div className="h-8 w-8 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/20"><Globe className="w-4 h-4 text-blue-500" /></div>
                         <div className="space-y-3">
                           <div className="h-1 lg:h-2 w-1/2 bg-white/20 rounded"></div>
                           <div className="h-3 lg:h-6 w-3/4 bg-white/10 rounded-sm italic font-black text-white/40 flex items-center px-2">CYBKART PRESET</div>
                         </div>
                      </div>
                   </div>

                   {/* Layer 1: Infrastructure */}
                   <div className="absolute bottom-[10%] w-full aspect-video bg-blue-600 rounded-2xl shadow-xl z-10 transform scale-95 opacity-50 blur-[2px]"></div>
                </div>

                {/* Decorative particles */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 4 — How It Works ───────────────────────── */}
      <section className="py-32 bg-[#050B1A] relative overflow-hidden">
        {/* Abstract Background Design */}
        <div className="absolute inset-0 dark-grid-bg opacity-[0.05] pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-24 space-y-4">
            <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-sm italic">The System</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic uppercase leading-tight">
              Simple. Fast. <span className="text-blue-500 underline underline-offset-8 decoration-white/20">Risk-Free.</span>
            </h2>
          </div>

          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-[70px] left-[15%] right-[15%] h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 opacity-20"></div>

            <div className="grid lg:grid-cols-3 gap-16 relative z-10">
              {[
                { 
                  step: "01", 
                  title: "We Build Your Demo", 
                  icon: MonitorDot, 
                  desc: "We create a professional website concept for your business.",
                  accent: "text-blue-500",
                  bg: "bg-blue-500/10"
                },
                { 
                  step: "02", 
                  title: "You Review It", 
                  icon: Eye, 
                  desc: "Request edits, approve layout, ask questions.",
                  accent: "text-purple-500",
                  bg: "bg-purple-500/10"
                },
                { 
                  step: "03", 
                  title: "We Launch Fast", 
                  icon: Rocket, 
                  desc: "Go live in 3–5 days and use it free for 30 days.",
                  accent: "text-emerald-500",
                  bg: "bg-emerald-500/10"
                }
              ].map((item, i) => (
                <div key={i} className="group relative text-center">
                  {/* Step Number Background */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-[10rem] font-black text-white/[0.03] pointer-events-none select-none italic tracking-tighter">
                    {item.step}
                  </div>
                  
                  {/* Icon Circle */}
                  <div className={`relative w-28 h-28 mx-auto rounded-[2rem] ${item.bg} border border-white/10 flex items-center justify-center mb-10 group-hover:-translate-y-2 group-hover:rotate-3 transition-all duration-500 shadow-2xl`}>
                    <item.icon className={`w-12 h-12 ${item.accent}`} />
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-[#050B1A] border border-white/20 flex items-center justify-center text-white font-black italic text-sm">
                       {item.step}
                    </div>
                  </div>

                  {/* Text Content */}
                  <h3 className="text-2xl font-black text-white mb-4 uppercase italic tracking-tight">{item.title}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed max-w-[280px] mx-auto text-balance">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 text-center">
             <div className="inline-flex items-center gap-6 px-8 py-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl">
                <div className="flex -space-x-3">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050B1A] bg-slate-800 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-80"></div>
                     </div>
                   ))}
                </div>
                <div className="text-left">
                   <div className="text-white font-black text-sm uppercase italic">200+ Businesses Live</div>
                   <div className="text-slate-500 text-xs font-bold">Scaling with CYBKART methodology</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — Why It Benefits Your Business ───────── */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Real Impact</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight italic uppercase">
              Built to Help <span className="text-blue-600">You Grow</span>
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "More Calls & Leads",
                desc: "Convert visitors into customers with high-performance conversion funnels.",
                icon: PhoneCall,
                color: "text-blue-600",
                bg: "bg-blue-600/10",
                border: "group-hover:border-blue-500/30"
              },
              {
                title: "Stronger Credibility",
                desc: "Look professional instantly with world-class design that builds trust.",
                icon: Star,
                color: "text-yellow-600",
                bg: "bg-yellow-600/10",
                border: "group-hover:border-yellow-500/30"
              },
              {
                title: "Easier Bookings",
                desc: "Automated forms, direct calls, and booking setups integrated seamlessly.",
                icon: CalendarCheck,
                color: "text-emerald-600",
                bg: "bg-emerald-600/10",
                border: "group-hover:border-emerald-500/30"
              },
              {
                title: "Grow Over Time",
                desc: "Focus on your business while we handle continuous upgrades and improvements.",
                icon: TrendingUp,
                color: "text-purple-600",
                bg: "bg-purple-600/10",
                border: "group-hover:border-purple-500/30"
              }
            ].map((benefit, i) => (
              <div key={i} className={`group bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${benefit.border}`}>
                <div className={`w-14 h-14 ${benefit.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                  <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight italic">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  {benefit.desc}
                </p>
                
                {/* Micro-indicator */}
                <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase text-slate-300 group-hover:text-blue-600 transition-colors">
                  <div className="w-8 h-px bg-slate-200 group-hover:bg-blue-600 transition-all group-hover:w-12"></div>
                  Included
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-10 rounded-[3rem] bg-slate-900 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="text-center md:text-left">
                   <h3 className="text-2xl md:text-3xl font-black text-white italic uppercase tracking-tighter mb-2">Ready to see the difference?</h3>
                   <p className="text-slate-400 font-medium">Get your free custom website demo in 48 hours.</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-10 py-5 bg-white text-slate-950 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all shadow-xl italic uppercase cursor-pointer flex items-center gap-3"
                >
                   Claim My Free Demo
                   <ArrowRight className="w-5 h-5" />
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* 
        FINAL CTA 
      */}
      <CTASection
        title="Stop Leaking Revenue."
        description="Book a free diagnosis. We'll identify your system bottlenecks and propose a custom automation roadmap."
        buttonText="Book Diagnosis Call"
      />
    </>
  );
}
