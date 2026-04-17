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
  Frown
} from 'lucide-react';
import CTASection from '@/components/CTASection';
import BookingModal from '@/components/BookingModal';

const HERO_SLIDES = [
  {
    type: 'website',
    badge: 'Limited Offer: $0 Setup',
    headline: ['Premium Design,', 'Zero Upfront', 'Investment.'],
    highlightIndex: 1,
    highlightColor: 'text-yellow-400',
    body: 'Stop paying thousands for a website. Get an enterprise-grade site for $0 today. We handle the design, hosting, and security while you focus on sales.',
    primaryCta: 'Get My Free Demo',
    secondaryCta: 'See Our Work',
    secondaryHref: '/portfolio/customer-sites',
    visual: {
      slides: [
        { label: 'Auto Spa',    bg: 'bg-blue-500/10',    btn: 'bg-blue-500',    grad: 'from-blue-600/30 to-blue-400/10' },
        { label: 'Clinic',      bg: 'bg-indigo-500/10',  btn: 'bg-indigo-500',  grad: 'from-indigo-600/30 to-purple-400/10' },
        { label: 'Legal',       bg: 'bg-slate-500/10',   btn: 'bg-slate-700',   grad: 'from-slate-600/30 to-slate-400/10' },
      ],
      badge: { amount: '$0', label: 'First Month', sub: 'No hidden fees' },
    },
  },
  {
    type: 'analytics',
    badge: 'Growth Focused',
    headline: ['Go Live Fast.', 'Scale Even', 'Faster.'],
    highlightIndex: 2,
    highlightColor: 'text-cyan-400',
    body: 'Launch in just 3-5 days. Our sites are engineered for speed and conversion, helping you capture more leads and outpace your competition instantly.',
    primaryCta: 'Start My Project',
    secondaryCta: 'Growth Services',
    secondaryHref: '/services',
    visual: {
      slides: [
        { label: 'Conversions', bg: 'bg-cyan-500/10',    btn: 'bg-cyan-500',    grad: 'from-cyan-600/30 to-blue-400/10', val: '+124%' },
        { label: 'Traffic',     bg: 'bg-emerald-500/10', btn: 'bg-emerald-500', grad: 'from-emerald-600/30 to-teal-400/10', val: '4.2k' },
        { label: 'Leads',       bg: 'bg-blue-500/10',    btn: 'bg-blue-500',    grad: 'from-blue-600/30 to-cyan-400/10', val: '86' },
      ],
      badge: { amount: '3-5', label: 'Days Live', sub: 'Rapid deployment' },
    },
  },
  {
    type: 'managed',
    badge: 'Fully Managed',
    headline: ['Zero Friction.', '100% Peace', 'of Mind.'],
    highlightIndex: 1,
    highlightColor: 'text-purple-400',
    body: 'Never worry about updates, bugs, or hosting again. Our team manages your entire digital ecosystem 24/7, so your business never misses a beat.',
    primaryCta: 'Book Free Audit',
    secondaryCta: 'Learn Support',
    secondaryHref: '/services',
    visual: {
      slides: [
        { label: 'Security',    bg: 'bg-purple-500/10',  btn: 'bg-purple-500',  grad: 'from-purple-600/30 to-violet-400/10', status: 'Active' },
        { label: 'Support',     bg: 'bg-rose-500/10',    btn: 'bg-rose-500',    grad: 'from-rose-600/30 to-pink-400/10', status: 'Online' },
        { label: 'Uptime',      bg: 'bg-emerald-500/10', btn: 'bg-emerald-500', grad: 'from-emerald-600/30 to-green-400/10', status: '99.9%' },
      ],
      badge: { amount: '24/7', label: 'Monitoring', sub: 'Always optimized' },
    },
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
    <svg className="w-3 h-3 text-emerald-400" viewBox="0 0 12 12" fill="none">
      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [heroSlide, setHeroSlide]     = useState(0);
  const [mockSlide, setMockSlide]     = useState(0);
  const [animating, setAnimating]     = useState(false);

  /* Auto-advance hero every 6 s */
  useEffect(() => {
    const t = setInterval(() => goTo((heroSlide + 1) % HERO_SLIDES.length), 6000);
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
    setTimeout(() => setAnimating(false), 700);
  }

  return (
    <>
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ══════════════════════════════════════════
          HERO SECTION — 3-slide full-section carousel
         ══════════════════════════════════════════ */}
      <section className="relative bg-[#0F172A] overflow-hidden border-b border-slate-800" style={{ minHeight: '90vh' }}>
        {/* Animated Background Grid */}
        <div className="absolute inset-0 dark-grid-bg opacity-20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F172A]/70 to-[#0F172A] pointer-events-none"></div>

        {/* ── Slide track ─────────────────────────── */}
        <div className="relative w-full h-full" style={{ minHeight: '90vh' }}>
          {HERO_SLIDES.map((slide, si) => {
            const vis = slide.visual;
            const isActive = heroSlide === si;
            return (
              <div
                key={si}
                aria-hidden={!isActive}
                className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-in-out
                  ${isActive ? 'opacity-100 translate-x-0 pointer-events-auto' : si < heroSlide ? 'opacity-0 -translate-x-full pointer-events-none' : 'opacity-0 translate-x-full pointer-events-none'}`}
              >
                {/* Coloured radial glow */}
                <div
                  className={`absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none transition-opacity duration-700
                    ${isActive ? 'opacity-10' : 'opacity-0'}
                    ${si === 0 ? 'bg-yellow-500' : si === 1 ? 'bg-cyan-500' : 'bg-purple-500'}`}
                ></div>

                <div className="container mx-auto px-6 pt-32 pb-24 relative z-10">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* ── LEFT — copy ─────────────────── */}
                    <div className="space-y-8 max-w-xl">

                      {/* Badge */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border
                        ${si === 0 ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400'
                          : si === 1 ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                          : 'bg-purple-500/10 border-purple-500/30 text-purple-400'}`}>
                        <span className={`w-2 h-2 rounded-full animate-pulse
                          ${si === 0 ? 'bg-yellow-400' : si === 1 ? 'bg-cyan-400' : 'bg-purple-400'}`}></span>
                        {slide.badge}
                      </div>

                      {/* Headline */}
                      <h1 className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.07]">
                        {slide.headline.map((line, li) => (
                          <span key={li} className={`block ${li === slide.highlightIndex ? slide.highlightColor : ''}`}>{line}</span>
                        ))}
                      </h1>

                      {/* Body */}
                      <p className="text-lg text-slate-400 leading-relaxed">{slide.body}</p>

                      {/* CTAs */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <button
                          onClick={() => setIsModalOpen(true)}
                          className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg cursor-pointer
                            ${si === 0 ? 'bg-yellow-500 text-slate-900 hover:bg-yellow-400 shadow-yellow-500/25'
                              : si === 1 ? 'bg-cyan-500 text-slate-900 hover:bg-cyan-400 shadow-cyan-500/25'
                              : 'bg-purple-600 text-white hover:bg-purple-500 shadow-purple-500/25'}`}
                        >
                          {slide.primaryCta}
                          <ArrowRight className="w-5 h-5" />
                        </button>
                        <Link
                          href={slide.secondaryHref}
                          className="inline-flex items-center justify-center gap-2 bg-white/5 text-white border border-slate-600 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/40 transition-all"
                        >
                          {slide.secondaryCta}
                        </Link>
                      </div>

                      {/* Trust strip */}
                      <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-slate-300 font-medium">
                        {TRUST_ITEMS.map((item) => (
                          <span key={item} className="flex items-center gap-2">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                              <CheckIcon />
                            </div>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* ── RIGHT — device mockups ───────── */}
                    <div className="relative flex items-center justify-center mt-10 lg:mt-0">
                      <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] scale-90 sm:scale-100">

                        {/* Glow */}
                        <div className={`absolute inset-0 blur-[80px] rounded-full pointer-events-none opacity-40
                          ${si === 0 ? 'bg-yellow-500/10' : si === 1 ? 'bg-cyan-500/10' : 'bg-purple-500/10'}`}></div>

                        {/* ── Laptop frame ──────────── */}
                        <div className="absolute z-10 w-[440px] lg:w-[480px] left-0 top-6 hover:scale-[1.01] transition-transform duration-500">
                          <div className="relative bg-slate-800 rounded-t-xl border-[5px] border-b-0 border-slate-700 shadow-2xl shadow-black/60 overflow-hidden" style={{ paddingBottom: '62%' }}>
                            <div className="absolute inset-0 bg-slate-900 flex flex-col">
                              {/* Browser chrome */}
                              <div className="h-7 bg-slate-800 flex items-center px-3 gap-3 border-b border-slate-700/80 flex-shrink-0">
                                <div className="flex gap-1.5">
                                  <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                                </div>
                                <div className="flex-1 h-3.5 bg-slate-700/60 rounded-md"></div>
                              </div>
                              {/* Slide content - BRANCHED BY TYPE */}
                              <div className="flex-1 relative overflow-hidden p-3 pt-4">
                                {isActive && vis.slides.map((vs: any, vi: number) => (
                                  <div key={vi} className={`absolute inset-3 transition-transform duration-700 ease-in-out flex flex-col gap-3
                                    ${mockSlide === vi ? 'translate-x-0' : mockSlide > vi ? '-translate-x-[110%]' : 'translate-x-[110%]'}`}>
                                    
                                    {/* WEBSITE TYPE */}
                                    {slide.type === 'website' && (
                                      <>
                                        <div className={`w-full rounded-lg relative overflow-hidden border border-white/5 flex-[2.5] ${vs.bg}`}>
                                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/5"></div>
                                          <div className="absolute inset-0 flex items-center justify-center">
                                            <Globe className="w-12 h-12 text-white/10" />
                                          </div>
                                          <div className="absolute bottom-2 left-2 bg-slate-900/60 backdrop-blur-sm px-2.5 py-1 rounded-full text-white text-[10px] font-bold border border-white/10 tracking-wide uppercase">
                                            {vs.label}
                                          </div>
                                        </div>
                                        <div className="flex gap-3 flex-[1]">
                                          <div className="flex-1 space-y-2">
                                            <div className="h-2.5 w-3/4 bg-slate-700 rounded-full"></div>
                                            <div className="h-2 w-full bg-slate-700/60 rounded-full"></div>
                                          </div>
                                          <div className={`w-16 rounded-lg ${vs.bg} border border-white/5`}></div>
                                        </div>
                                        <div className="flex items-center justify-between flex-shrink-0">
                                          <div className="flex gap-1.5">
                                            <div className="w-4 h-4 rounded-full bg-slate-700"></div>
                                            <div className="w-4 h-4 rounded-full bg-slate-700"></div>
                                          </div>
                                          <div className={`px-4 py-1.5 ${vs.btn} text-white text-[9px] font-bold uppercase tracking-wider rounded-md shadow-lg`}>View Site</div>
                                        </div>
                                      </>
                                    )}

                                    {/* ANALYTICS TYPE */}
                                    {slide.type === 'analytics' && (
                                      <>
                                        <div className="flex-1 grid grid-cols-2 gap-3">
                                          <div className="bg-slate-800/80 rounded-lg p-3 border border-slate-700 flex flex-col justify-center">
                                            <div className="text-[10px] text-slate-500 mb-1">{vs.label}</div>
                                            <div className="text-xl font-bold text-white transition-all">{vs.val}</div>
                                            <div className={`h-1 w-full rounded-full mt-2 bg-slate-700 overflow-hidden`}>
                                              <div className={`h-full ${vs.btn} w-[70%]`}></div>
                                            </div>
                                          </div>
                                          <div className="bg-slate-800/80 rounded-lg p-3 border border-slate-700 flex items-center justify-center">
                                            <Activity className={`w-8 h-8 ${vs.btn.replace('bg-', 'text-')}`} />
                                          </div>
                                        </div>
                                        <div className="h-24 bg-slate-800/50 rounded-lg border border-slate-700 p-3 flex flex-col gap-2">
                                          <div className="flex justify-between items-center">
                                            <div className="h-2 w-16 bg-slate-600 rounded"></div>
                                            <div className="h-2 w-10 bg-slate-700 rounded"></div>
                                          </div>
                                          <div className="flex-1 flex items-end gap-1 px-1">
                                            {[30, 60, 45, 75, 50, 90, 65].map((h, i) => (
                                              <div key={i} className={`flex-1 ${vs.btn} opacity-40 rounded-t-sm`} style={{ height: `${h}%` }}></div>
                                            ))}
                                          </div>
                                        </div>
                                      </>
                                    )}

                                    {/* MANAGED TYPE */}
                                    {slide.type === 'managed' && (
                                      <>
                                        <div className="flex-1 flex flex-col gap-2">
                                          {[1, 2, 3].map((item) => (
                                            <div key={item} className="bg-slate-800/80 rounded-lg px-3 py-2 border border-slate-700 flex items-center justify-between">
                                              <div className="flex items-center gap-2">
                                                <div className={`w-6 h-6 rounded-lg ${vs.bg} flex items-center justify-center`}>
                                                   <Shield className={`w-3 h-3 ${vs.btn.replace('bg-', 'text-')}`} />
                                                </div>
                                                <div className="h-2 w-20 bg-slate-600 rounded"></div>
                                              </div>
                                              <div className={`px-2 py-0.5 rounded-full text-[8px] font-bold ${vs.btn} text-white`}>{vs.status}</div>
                                            </div>
                                          ))}
                                        </div>
                                        <div className="h-20 bg-slate-800/50 rounded-lg border border-slate-700 p-3 flex items-start gap-3">
                                          <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0"></div>
                                          <div className="space-y-2 flex-1">
                                            <div className="h-2.5 w-1/3 bg-slate-600 rounded"></div>
                                            <div className="h-2 w-full bg-slate-700 rounded"></div>
                                          </div>
                                        </div>
                                      </>
                                    )}

                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          {/* Laptop base */}
                          <div className="h-3 bg-slate-700 w-[108%] -ml-[4%] rounded-b-xl border-t border-slate-500/60 relative">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-0.5 bg-slate-400/50 rounded-b"></div>
                          </div>
                        </div>

                        {/* ── Phone frame ───────────── */}
                        <div className="absolute z-20 w-[120px] lg:w-[130px] right-2 bottom-0 top-auto hover:scale-[1.03] transition-transform duration-500">
                          <div className="relative bg-slate-900 rounded-[2rem] border-[5px] border-slate-800 shadow-2xl overflow-hidden" style={{ paddingBottom: '210%' }}>
                            <div className="absolute inset-0">
                              {/* Notch */}
                              <div className="w-14 h-3.5 bg-slate-800 rounded-b-xl absolute top-0 left-1/2 -translate-x-1/2 z-20"></div>
                              <div className="w-full h-full bg-[#0B1121] pt-6 flex flex-col overflow-hidden">
                                <div className="relative flex-1 overflow-hidden px-2.5 mt-2">
                                  {isActive && vis.slides.map((vs: any, vi: number) => (
                                    <div key={vi} className={`absolute inset-x-2 transition-transform duration-700 ease-in-out flex flex-col gap-3
                                      ${mockSlide === vi ? 'translate-x-0' : mockSlide > vi ? '-translate-x-[110%]' : 'translate-x-[110%]'}`}>
                                      
                                      {/* Phone content variations based on type */}
                                      <div className={`w-full h-24 rounded-xl bg-gradient-to-br ${vs.grad} shadow-inner flex items-center justify-center`}>
                                        {slide.type === 'website' && <Zap className="w-8 h-8 text-white/20" />}
                                        {slide.type === 'analytics' && <BarChart3 className="w-8 h-8 text-white/20" />}
                                        {slide.type === 'managed' && <Shield className="w-8 h-8 text-white/20" />}
                                      </div>
                                      <div className="space-y-2">
                                        <div className="h-2 w-3/4 bg-slate-700 rounded-full"></div>
                                        <div className="h-1.5 w-full bg-slate-800 rounded-full"></div>
                                      </div>
                                      <div className={`h-8 w-full ${vs.btn} rounded-lg flex items-center justify-center shadow-lg`}>
                                        <div className="h-1.5 w-2/5 bg-white/20 rounded-full"></div>
                                      </div>
                                      {slide.type === 'managed' && (
                                        <div className="bg-slate-800/50 p-2 rounded-lg border border-slate-700">
                                           <div className={`h-1 w-full ${vs.btn} rounded-full`}></div>
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* ── Pricing badge ─────────── */}

                        <div className="absolute z-30 top-4 right-[-10px] bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 flex flex-col gap-2 w-[190px] hover:translate-x-1 transition-transform duration-300">
                          <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-xl flex-shrink-0
                              ${si === 0 ? 'bg-yellow-100 text-yellow-600' : si === 1 ? 'bg-cyan-100 text-cyan-700' : 'bg-purple-100 text-purple-700'}`}>
                              {vis.badge.amount}
                            </div>
                            <div>
                              <div className="text-slate-900 font-bold text-sm leading-tight">{vis.badge.label}</div>
                              <div className="text-slate-500 text-[11px] font-medium">{vis.badge.sub}</div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Arrows ──────────────────── */}
        <button
          onClick={() => goTo((heroSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all backdrop-blur-md hidden md:flex"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
          onClick={() => goTo((heroSlide + 1) % HERO_SLIDES.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all backdrop-blur-md hidden md:flex"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>

        {/* ── Indicators ────────────────── */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex items-center gap-4">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-500 rounded-full ${heroSlide === i ? 'w-10 h-2 bg-white' : 'w-2 h-2 bg-slate-500 hover:bg-slate-300'}`}
            />
          ))}
        </div>
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

      {/* 
        HOW WE WORK 
        Style: Horizontal Process Steps
      */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The System Methodology</h2>
            <p className="text-slate-600">Our engineering approach to business growth.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-8 left-16 right-16 h-0.5 bg-slate-100"></div>

            <div className="grid md:grid-cols-4 gap-12 relative z-10">
              {[
                { step: "01", title: "Diagnose", icon: Search, desc: "We audit your current systems, identifying bottlenecks and revenue leaks." },
                { step: "02", title: "Design", icon: Code2, desc: "Architecting a custom solution tailored to your specific operational needs." },
                { step: "03", title: "Build", icon: Database, desc: "Rapid deployment using enterprise-grade frameworks and best practices." },
                { step: "04", title: "Optimize", icon: LineChart, desc: "Continuous data analysis and refinement to maximize ROI over time." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 relative pt-4 text-center">
                  <div className="w-16 h-16 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 shadow-sm relative z-20">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 
        PROOF & TOOL STACK
      */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Built on Modern Primitives</h2>
              <p className="text-lg text-slate-600 mb-8">
                We leverage the most powerful technologies available to build independent, scalable systems for your business.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "AI Models", val: "GPT-4 & Claude" },
                  { label: "Framework", val: "Next.js 15" },
                  { label: "Infrastructure", val: "Vercel / AWS" },
                  { label: "Payments", val: "Stripe Connect" },
                ].map((stat, i) => (
                  <div key={i} className="border border-slate-200 bg-white p-4 rounded-lg">
                    <div className="text-xs text-slate-400 font-semibold uppercase">{stat.label}</div>
                    <div className="font-mono text-slate-900 font-medium mt-1">{stat.val}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-600" />
                Industries We Serve
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {['Healthcare & Clinics', 'Legal & Professional', 'E-Commerce Brands', 'Marketing Agencies', 'SaaS Companies', 'Local Services'].map((ind, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all cursor-default">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-slate-700 font-medium">{ind}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-slate-200">
                <Link href="/case-scenarios" className="text-slate-900 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  See Real Client Results <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
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
