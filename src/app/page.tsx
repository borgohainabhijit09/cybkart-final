'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowLeft,
  Brain,
  Globe,
  Target,
  Zap,
  Shield,
  Layout,
  Clock,
  TrendingUp,
  Banknote,
  Frown,
  MonitorDot,
  Eye,
  Rocket,
  PhoneCall,
  Star,
  CalendarCheck,
  Code2,
  CheckCircle,
  Sparkles,
  Play,
  ChevronDown,
} from 'lucide-react';
import BookingModal from '@/components/BookingModal';

// ─── Data ─────────────────────────────────────────────────────────────────────

const FUNNEL_SLIDES = [
  {
    id: 'risk-free',
    badge: 'Limited Priority Access',
    headline: 'Launch Your Business Website',
    headlineAccent: '— Risk Free',
    subtext: 'No upfront cost. Try your website for 30 days before paying a single cent.',
    primaryCTA: 'Start Free Trial',
    secondaryCTA: 'View Demo',
    visualType: 'mockup',
  },
  {
    id: 'process',
    badge: 'Zero Friction',
    headline: 'We Build. You Try.',
    headlineAccent: 'You Decide.',
    subtext: 'We design your website, you test it live for 30 days, then continue only if you love it.',
    primaryCTA: 'See How It Works',
    secondaryCTA: null,
    visualType: 'process',
  },
  {
    id: 'pricing',
    badge: 'Transparent Scaling',
    headline: 'Continue from Just',
    headlineAccent: '$29/month',
    subtext: 'Everything included: Hosting, security updates, expert support, and lead capture tools.',
    primaryCTA: 'Start Free Trial',
    secondaryCTA: null,
    visualType: 'pricing',
  },
  {
    id: 'value',
    badge: 'Strategic Growth',
    headline: 'Websites Without',
    headlineAccent: '$3,000 Price Tag',
    subtext: 'Built for small businesses that want real results and revenue, not complexity.',
    primaryCTA: 'Book Free Demo',
    secondaryCTA: null,
    visualType: 'comparison',
  },
];

const PAIN_POINTS = [
  {
    icon: Banknote,
    iconBg: 'bg-rose-500/10',
    iconColor: 'text-rose-400',
    borderColor: 'hover:border-rose-500/30',
    glowColor: 'group-hover:shadow-rose-500/10',
    title: 'Expensive Traditional Agencies',
    highlight: '$3k–$10k upfront fees',
    desc: 'Most agencies demand a massive down payment before a single line of code is written. Why risk your capital on promises?',
  },
  {
    icon: Clock,
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-400',
    borderColor: 'hover:border-amber-500/30',
    glowColor: 'group-hover:shadow-amber-500/10',
    title: 'Slow Delivery',
    highlight: 'Weeks or months to launch',
    desc: 'In today\'s market, speed is everything. Waiting months for a website launch means months of lost revenue and wasted momentum.',
  },
  {
    icon: Frown,
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-400',
    borderColor: 'hover:border-purple-500/30',
    glowColor: 'group-hover:shadow-purple-500/10',
    title: 'No Ongoing Support',
    highlight: 'Pay extra every time',
    desc: 'Traditional models charge you for every small change, update, or bug fix. You end up being held hostage by your own technology.',
  },
];

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'We Build Your Demo',
    icon: MonitorDot,
    desc: 'We create a professional website concept for your business.',
    accent: 'from-blue-500 to-cyan-500',
    glow: 'shadow-blue-500/20',
  },
  {
    step: '02',
    title: 'You Review It',
    icon: Eye,
    desc: 'Request edits, approve layout, ask questions.',
    accent: 'from-violet-500 to-purple-500',
    glow: 'shadow-violet-500/20',
  },
  {
    step: '03',
    title: 'We Launch Fast',
    icon: Rocket,
    desc: 'Go live in 3–5 days and use it free for 30 days.',
    accent: 'from-emerald-500 to-teal-500',
    glow: 'shadow-emerald-500/20',
  },
];

const BENEFITS = [
  {
    title: 'More Calls & Leads',
    desc: 'Convert visitors into customers with high-performance conversion funnels.',
    icon: PhoneCall,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    glow: 'group-hover:shadow-blue-500/20',
  },
  {
    title: 'Stronger Credibility',
    desc: 'Look professional instantly with world-class design that builds trust.',
    icon: Star,
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    glow: 'group-hover:shadow-yellow-500/20',
  },
  {
    title: 'Easier Bookings',
    desc: 'Automated forms, direct calls, and booking setups integrated seamlessly.',
    icon: CalendarCheck,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    glow: 'group-hover:shadow-emerald-500/20',
  },
  {
    title: 'Grow Over Time',
    desc: 'Focus on your business while we handle continuous upgrades and improvements.',
    icon: TrendingUp,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    glow: 'group-hover:shadow-purple-500/20',
  },
];

const WHY_CYBKART = [
  {
    title: 'No large upfront cost',
    desc: 'Keep your capital. Launch with $0 setup and predictable monthly scaling.',
    icon: Banknote,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    title: 'Agency quality, minus the price',
    desc: 'Enterprise-grade design and engineering without the traditional $10k+ price tag.',
    icon: Layout,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    title: 'Fast Delivery',
    desc: 'We don\'t do \'months\'. We launch high-performance systems in 3-5 business days.',
    icon: Zap,
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
  },
  {
    title: 'AI-forward systems',
    desc: 'Every project is built to leverage modern AI for automation and lead capture.',
    icon: Brain,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  {
    title: 'Friendly ongoing support',
    desc: 'Real humans, 24/7 monitoring, and unlimited updates included in your sub.',
    icon: Clock,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  {
    title: 'US & Canada Standards',
    desc: 'Compliance, speed, and design standards specifically architected for North America.',
    icon: Globe,
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
  },
];

const TESTIMONIALS = [
  {
    quote: 'Professional, fast, and easy to work with. They took our vision and turned it into a high-performance site in days, not months.',
    author: 'Business Owner',
    role: 'Local Service Industry',
    stars: 5,
  },
  {
    quote: 'Our new website brought in leads quickly. The subscription model is a game-changer for businesses that want to skip the massive upfront costs.',
    author: 'Marketing Director',
    role: 'Retail & E-Commerce',
    stars: 5,
  },
];

// ─── Small Components ─────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg className="w-3 h-3 text-emerald-400" viewBox="0 0 12 12" fill="none">
      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GradientBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] border border-blue-500/30 bg-blue-500/10 text-blue-400">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
      {children}
    </span>
  );
}

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${light ? 'text-blue-400' : 'text-blue-600'}`}>
      <span className={`block w-6 h-px ${light ? 'bg-blue-400' : 'bg-blue-600'}`} />
      {children}
    </span>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % FUNNEL_SLIDES.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + FUNNEL_SLIDES.length) % FUNNEL_SLIDES.length);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, currentSlide]);

  const handleSlideClick = (i: number) => {
    setIsAutoPlaying(false);
    setDirection(i > currentSlide ? 1 : -1);
    setCurrentSlide(i);
  };

  return (
    <>
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ══════════════════════════════════════════════════════════════
          FLASH MESSAGE / ANNOUNCEMENT
      ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-rose-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="container mx-auto px-6 py-2.5 relative z-10 flex items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-white font-black text-xs uppercase tracking-[0.2em]">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>Introductory Offer:</span>
          </div>
          <p className="text-white text-sm font-bold">
            Launch your Single Page Website for just <span className="underline decoration-2 underline-offset-4 decoration-rose-300">$29</span> today!
          </p>
          <Link href="/pricing" className="bg-white text-rose-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-rose-50 transition-all hover:scale-105 active:scale-95">
            Claim Now
          </Link>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          HERO — Cinematic Dark with Animated Slides
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen bg-[#030712] overflow-hidden flex flex-col">

        {/* Abstract Background Orbs */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-blue-600/20 blur-[120px] animate-glow-pulse" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-violet-600/15 blur-[100px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full bg-cyan-600/10 blur-[80px] animate-glow-pulse" style={{ animationDelay: '3s' }} />

          {/* Grid Overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(rgba(99,102,241,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.6) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          {/* Radial vignette */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, transparent 40%, #030712 100%)' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col justify-center py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* ── LEFT COLUMN: Content ───────────────────────────── */}
            <div className="relative">
              {/* Slide Text Panels */}
              <div className="relative h-[420px] sm:h-[380px]">
                {FUNNEL_SLIDES.map((s, i) => (
                  <div
                    key={s.id}
                    className={`absolute inset-0 flex flex-col justify-center gap-7 transition-all duration-700 ease-out
                      ${currentSlide === i
                        ? 'opacity-100 translate-y-0 visible pointer-events-auto'
                        : `opacity-0 ${direction >= 0 ? 'translate-y-8' : '-translate-y-8'} invisible pointer-events-none`}`}
                  >
                    <GradientBadge>{s.badge}</GradientBadge>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05]">
                      {s.headline}{' '}
                      <span
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #a78bfa, #34d399)' }}
                      >
                        {s.headlineAccent}
                      </span>
                    </h1>

                    <p className="text-lg text-slate-400 leading-relaxed max-w-lg font-medium">
                      {s.subtext}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-base text-white overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
                        style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}
                      >
                        <span className="relative z-10">{s.primaryCTA}</span>
                        <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(135deg, #1d4ed8, #6d28d9)' }} />
                      </button>

                      {s.secondaryCTA && (
                        <button
                          onClick={() => setIsModalOpen(true)}
                          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-base text-white border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                        >
                          <Play className="w-4 h-4" />
                          {s.secondaryCTA}
                        </button>
                      )}
                    </div>

                    {/* Trust pills */}
                    <div className="flex flex-wrap gap-3 pt-1">
                      {['Free Demo', '3-5 Day Launch', '24/7 Support', 'Cancel Anytime'].map((t) => (
                        <span key={t} className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Slide Navigation */}
              <div className="flex items-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  {FUNNEL_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handleSlideClick(i)}
                      className={`transition-all duration-500 rounded-full ${currentSlide === i
                        ? 'w-10 h-2 bg-blue-500'
                        : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                        }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => { setIsAutoPlaying(false); prevSlide(); }}
                    className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => { setIsAutoPlaying(false); nextSlide(); }}
                    className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-all"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Visuals ──────────────────────────── */}
            <div className="relative h-[420px] lg:h-[500px] flex items-center justify-center">
              {FUNNEL_SLIDES.map((s, i) => (
                <div
                  key={s.id}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out delay-100
                    ${currentSlide === i
                      ? 'opacity-100 scale-100 translate-x-0 visible'
                      : `opacity-0 scale-95 ${direction >= 0 ? 'translate-x-16' : '-translate-x-16'} invisible`}`}
                >
                  {/* MOCKUP VISUAL */}
                  {s.visualType === 'mockup' && (
                    <div className="relative w-full max-w-sm">
                      {/* Glow */}
                      <div className="absolute inset-0 bg-blue-600/20 blur-[60px] rounded-full" />
                      <div className="relative bg-slate-900 border border-white/10 rounded-3xl p-6 shadow-2xl rotate-1 animate-float">
                        {/* Browser chrome */}
                        <div className="flex items-center gap-1.5 mb-5">
                          <div className="w-3 h-3 rounded-full bg-rose-500/60" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                          <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                          <div className="flex-1 mx-3 h-5 rounded bg-white/5 flex items-center px-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5" />
                            <div className="h-1.5 w-20 bg-white/10 rounded" />
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="h-24 bg-gradient-to-r from-blue-600/30 to-violet-600/30 rounded-xl flex items-center justify-center border border-white/5">
                            <Globe className="w-8 h-8 text-blue-400" />
                          </div>
                          <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                          <div className="h-2 w-1/2 bg-white/5 rounded-full" />
                          <div className="h-8 w-1/3 bg-blue-600/40 rounded-lg" />
                        </div>
                        {/* Badge */}
                        <div className="absolute -top-3 -right-3 bg-emerald-500 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-xl shadow-lg">
                          Verified ✓
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PROCESS VISUAL */}
                  {s.visualType === 'process' && (
                    <div className="w-full max-w-sm space-y-4">
                      {[
                        { label: 'BUILD', icon: Code2, color: 'from-blue-500 to-cyan-500' },
                        { label: 'TRY', icon: Eye, color: 'from-violet-500 to-purple-500' },
                        { label: 'DECIDE', icon: Target, color: 'from-emerald-500 to-teal-500' },
                      ].map((step, si) => (
                        <div
                          key={step.label}
                          className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/8 transition-all hover:translate-x-2 group"
                          style={{ animationDelay: `${si * 100}ms` }}
                        >
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                            <step.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest mb-0.5">Step {si + 1}</div>
                            <div className="text-white font-bold tracking-tight">{step.label}</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all" />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* PRICING VISUAL */}
                  {s.visualType === 'pricing' && (
                    <div className="relative w-full max-w-xs -rotate-1">
                      <div className="absolute inset-0 bg-violet-600/20 blur-[50px] rounded-full" />
                      <div className="relative bg-slate-900 border border-white/10 rounded-3xl p-8 shadow-2xl">
                        <div className="inline-flex items-center gap-2 text-emerald-400 text-[10px] font-bold uppercase tracking-widest border border-emerald-400/20 px-3 py-1 rounded-full bg-emerald-400/5 mb-6">
                          <Sparkles className="w-3 h-3" /> Starter Plan
                        </div>
                        <div className="flex items-baseline gap-1 mb-6">
                          <span className="text-6xl font-extrabold text-white">$29</span>
                          <span className="text-slate-500 font-bold">/month</span>
                        </div>
                        <div className="space-y-3 mb-6">
                          {['Professional Website', 'Hosting Included', '24/7 Support', 'Unlimited Updates'].map((item) => (
                            <div key={item} className="flex items-center gap-3">
                              <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                                <CheckIcon />
                              </div>
                              <span className="text-slate-300 text-sm font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                        <div className="h-11 w-full rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 flex items-center justify-center">
                          <span className="text-white font-bold text-sm">Get Started Free</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* COMPARISON VISUAL */}
                  {s.visualType === 'comparison' && (
                    <div className="w-full max-w-sm rotate-1">
                      <div className="absolute inset-0 bg-cyan-600/10 blur-[50px] rounded-full" />
                      <div className="relative bg-slate-900 border border-white/10 rounded-3xl p-8 shadow-2xl">
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                          <span className="text-white/30 text-xs font-bold uppercase tracking-widest">Conventional</span>
                          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">CYBKART</span>
                        </div>
                        <div className="space-y-5">
                          {[
                            { label: 'Setup Fee', old: '$3,500+', newer: '$0' },
                            { label: 'Time to Launch', old: '3 Months', newer: '48 Hours' },
                            { label: 'Risk', old: 'High Upfront', newer: '30-Day Free' },
                          ].map((item) => (
                            <div key={item.label} className="flex items-center justify-between">
                              <span className="text-slate-400 text-sm font-medium">{item.label}</span>
                              <div className="flex items-center gap-4">
                                <span className="text-white/30 line-through text-xs font-bold">{item.old}</span>
                                <span className="text-emerald-400 font-extrabold tracking-tight">{item.newer}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                          <span className="text-white/40 text-xs font-bold uppercase">You Save</span>
                          <span className="text-white font-extrabold text-xl">$3,000+</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="relative z-10 flex justify-center pb-8 text-white/20">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 — Pain Points
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white relative overflow-hidden">
        {/* Light diagonal accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-50 blur-[100px] opacity-60 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16">
            <SectionLabel>Pain Points</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
              Why Pay Thousands{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}>
                Upfront
              </span>{' '}
              for a Website?
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {PAIN_POINTS.map((item, i) => (
              <div
                key={i}
                className={`group relative bg-slate-50 border border-slate-200/80 ${item.borderColor} rounded-3xl p-9 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${item.glowColor}`}
              >
                <div className={`w-14 h-14 ${item.iconBg} rounded-2xl flex items-center justify-center mb-7 group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                  <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2 tracking-tight">{item.title}</h3>
                <p className={`text-base font-bold mb-4 ${item.iconColor}`}>{item.highlight}</p>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                {/* Corner glow on hover */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none">
                  <item.icon className={`w-full h-full ${item.iconColor}`} />
                </div>
              </div>
            ))}
          </div>

          {/* Pull Quote */}
          <div className="mt-16 relative overflow-hidden rounded-3xl p-10 md:p-14 text-center"
            style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)' }}>
            <div className="absolute inset-0 dark-grid-bg opacity-[0.06]" />
            <p className="relative text-2xl md:text-3xl font-bold text-white leading-relaxed max-w-3xl mx-auto">
              "Your website should help your business grow —{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #60a5fa, #a78bfa)' }}>
                not drain your budget.
              </span>
              "
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 — Solution
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 dark-grid-bg opacity-[0.04] pointer-events-none" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">

            {/* Left: Copy */}
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-5">
                <SectionLabel light>The Solution</SectionLabel>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight leading-tight">
                  A Better Way <br />
                  <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #a78bfa)' }}>
                    To Get Online
                  </span>
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed font-medium max-w-xl">
                  At <span className="text-white font-bold">Cybkart Global</span>, we build and manage your website for one affordable monthly subscription. No hidden costs, no technical headaches.
                </p>
              </div>

              <div className="grid gap-4">
                {['Professional Design', 'Hosting Included', 'Unlimited Peace of Mind', 'Updates & Support', 'Ongoing Improvements'].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 group"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                      <CheckIcon />
                    </div>
                    <span className="text-slate-300 font-semibold group-hover:text-white transition-colors">{text}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-base text-white bg-white/10 border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all cursor-pointer"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right: Visual Stack */}
            <div className="lg:w-1/2 relative h-[400px] flex items-center justify-center">
              <div className="relative w-full max-w-lg h-full">
                {/* Layer 1: Deep blue base */}
                <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[85%] h-[55%] bg-blue-700/30 border border-blue-500/20 rounded-3xl blur-[1px] scale-90 z-10" />

                {/* Layer 2: Dark card */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] aspect-video bg-slate-900 border border-white/10 rounded-3xl shadow-2xl z-20 overflow-hidden -rotate-2">
                  <div className="absolute inset-0 dark-grid-bg opacity-20" />
                  <div className="relative z-10 h-full flex flex-col justify-between p-6">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                      <Globe className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-1/2 bg-white/20 rounded" />
                      <div className="h-5 w-3/4 bg-white/10 rounded flex items-center px-2">
                        <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">CYBKART PRESET</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Layer 3: Support card — floating */}
                <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[78%] bg-slate-800 border border-white/10 rounded-2xl shadow-xl z-30 p-5 animate-float-slow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-violet-500/20 flex items-center justify-center">
                      <Shield className="w-4 h-4 text-violet-400" />
                    </div>
                    <div className="h-2 w-24 bg-white/10 rounded" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-1.5 w-full bg-white/5 rounded" />
                    <div className="h-1.5 w-3/4 bg-white/5 rounded" />
                  </div>
                  <div className="absolute bottom-4 right-4 px-2.5 py-1 bg-emerald-500 rounded-full text-[9px] font-bold text-white uppercase tracking-widest">
                    24/7 Managed
                  </div>
                </div>

                {/* Decorative orbs */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-400/20 rounded-full blur-2xl animate-pulse" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4 — How It Works
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-violet-50 blur-[100px] rounded-full opacity-80 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16 max-w-3xl">
            <SectionLabel>Process</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
              Simple. Fast.{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}>
                Risk-Free.
              </span>
            </h2>
          </div>

          <div className="relative">
            {/* Progress line */}
            <div className="hidden lg:block absolute top-[56px] left-[calc(16.67%+56px)] right-[calc(16.67%+56px)] h-px bg-gradient-to-r from-blue-400 via-violet-400 to-emerald-400 opacity-30" />

            <div className="grid lg:grid-cols-3 gap-12">
              {HOW_IT_WORKS.map((item, i) => (
                <div key={i} className="group text-center relative">
                  {/* Step number ghost */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[8rem] font-black text-slate-50 pointer-events-none select-none leading-none">
                    {item.step}
                  </div>

                  {/* Icon */}
                  <div className={`relative mx-auto w-28 h-28 rounded-3xl bg-gradient-to-br ${item.accent} flex items-center justify-center mb-8 group-hover:-translate-y-2 group-hover:rotate-3 transition-all duration-500 shadow-2xl ${item.glow}`}>
                    <item.icon className="w-11 h-11 text-white" />
                    <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-slate-800 font-black text-sm shadow-md">
                      {item.step}
                    </div>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed max-w-[260px] mx-auto font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Social proof bar */}
          <div className="mt-20 flex justify-center">
            <div className="inline-flex items-center gap-6 px-8 py-5 rounded-3xl bg-slate-900 shadow-xl">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 overflow-hidden" style={{ background: `linear-gradient(135deg, hsl(${i * 60}deg 70% 55%), hsl(${i * 60 + 40}deg 70% 45%))` }} />
                ))}
              </div>
              <div>
                <div className="text-white font-bold text-sm">200+ Businesses Live</div>
                <div className="text-slate-500 text-xs font-medium">Scaling with CYBKART methodology</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5 — Benefits
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 dark-grid-bg opacity-[0.04] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16 max-w-3xl">
            <SectionLabel light>Benefits</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
              Built to Help{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #a78bfa)' }}>
                You Grow
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((benefit, i) => (
              <div
                key={i}
                className={`group relative bg-white/[0.03] border border-white/8 rounded-3xl p-8 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${benefit.glow}`}
              >
                <div className={`w-14 h-14 ${benefit.bg} rounded-2xl flex items-center justify-center mb-7 group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                  <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                </div>
                <h3 className="text-lg font-extrabold text-white mb-3 tracking-tight">{benefit.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">{benefit.desc}</p>

                <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase text-white/20 group-hover:text-white/50 transition-colors">
                  <div className="w-6 h-px bg-white/20 group-hover:bg-white/40 group-hover:w-10 transition-all" />
                  Included
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-16 relative overflow-hidden rounded-3xl p-10 md:p-12" style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #6d28d9 100%)' }}>
            <div className="absolute inset-0 dark-grid-bg opacity-[0.08]" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-1">Ready to see the difference?</h3>
                <p className="text-blue-200 font-medium">Get your free custom website demo in 48 hours.</p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="group flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-700 rounded-2xl font-bold hover:bg-blue-50 transition-all shadow-xl cursor-pointer"
              >
                Claim My Free Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 6 — Why Choose Cybkart Global
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50 blur-[100px] opacity-80 rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16 max-w-3xl">
            <SectionLabel>Value Proposition</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Why Businesses{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}>
                Choose Us
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {WHY_CYBKART.map((item, i) => (
              <div
                key={i}
                className="group flex gap-5 p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-blue-200/80 hover:bg-blue-50/30 hover:shadow-xl transition-all duration-400"
              >
                <div className={`w-12 h-12 ${item.bg} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2 tracking-tight leading-snug">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-8 opacity-50">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇺🇸</span>
                <span className="text-slate-700 font-bold text-xs uppercase tracking-widest">USA Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇨🇦</span>
                <span className="text-slate-700 font-bold text-xs uppercase tracking-widest">Canada HQ</span>
              </div>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-3 px-9 py-4 rounded-2xl font-bold text-base text-white cursor-pointer transition-all hover:scale-[1.03] active:scale-[0.97]"
              style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}
            >
              Join the Ecosystem
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 7 — Testimonials
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 dark-grid-bg opacity-[0.04] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16 max-w-3xl">
            <SectionLabel light>Social Proof</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
              What{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #a78bfa)' }}>
                Our Clients
              </span>{' '}
              Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {TESTIMONIALS.map((testimonial, i) => (
              <div
                key={i}
                className="group relative bg-white/[0.04] border border-white/8 rounded-3xl p-10 hover:bg-white/[0.07] hover:border-white/15 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Giant quote */}
                <div className="absolute top-8 right-8 text-white/5 group-hover:text-white/8 transition-colors text-8xl font-serif leading-none select-none pointer-events-none">
                  "
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.stars)].map((_, si) => (
                    <Star key={si} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-lg text-slate-300 leading-relaxed mb-10 font-medium relative z-10">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}>
                    CB
                  </div>
                  <div>
                    <div className="font-extrabold text-white tracking-tight">{testimonial.author}</div>
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-0.5">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-400 text-sm font-bold">Join the hundreds levelled up by CYBKART</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 8 — Scarcity & Urgency
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div
            className="relative rounded-[2.5rem] p-12 md:p-20 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1c1230 0%, #0f1a3a 50%, #111827 100%)' }}
          >
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500/50 via-amber-400/50 to-transparent" />
            <div className="absolute inset-0 dark-grid-bg opacity-[0.06]" />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
              <GradientBadge>Availability</GradientBadge>

              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Limited{' '}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #fbbf24, #f59e0b)' }}>
                  Free First-Month
                </span>{' '}
                Spots Available
              </h2>

              <p className="text-lg text-slate-400 font-medium max-w-xl mx-auto">
                We only onboard a limited number of businesses monthly to maintain quality delivery. Don't let your competition scale while you're still waiting.
              </p>

              <div className="flex flex-col items-center gap-5 pt-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center gap-3 px-12 py-5 rounded-2xl font-extrabold text-xl text-slate-900 cursor-pointer transition-all hover:scale-[1.03] active:scale-[0.97] shadow-2xl"
                  style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', boxShadow: '0 20px 50px rgba(251,191,36,0.3)' }}
                >
                  <span className="text-2xl">🟡</span>
                  Claim My Free Website
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-4 text-slate-500 text-xs font-bold uppercase tracking-widest">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-7 h-7 rounded-full border-2 border-slate-900 overflow-hidden"
                        style={{ background: `linear-gradient(135deg, hsl(${i * 80}deg 60% 50%), hsl(${i * 80 + 50}deg 60% 40%))` }} />
                    ))}
                  </div>
                  <span>Join 7 other businesses starting this week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 9 — Final CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 blur-[120px] rounded-full opacity-80" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-50 blur-[100px] rounded-full opacity-60" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-6 mb-12">
              <SectionLabel>Get Started</SectionLabel>
              <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-tight mt-6">
                Ready to Launch <br />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #2563eb, #7c3aed, #06b6d4)' }}>
                  a Better Website?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto">
                Start today with <span className="text-slate-900 font-bold">$0 upfront</span> and a website built to grow your business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-extrabold text-xl text-slate-900 cursor-pointer transition-all hover:scale-[1.03] active:scale-[0.97] shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', boxShadow: '0 16px 40px rgba(251,191,36,0.25)' }}
              >
                <span className="text-2xl">🟡</span>
                Get My Free Demo
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-extrabold text-xl text-slate-700 border-2 border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 transition-all shadow-md cursor-pointer"
              >
                <span className="w-3 h-3 rounded-full bg-slate-300 group-hover:bg-blue-400 transition-colors" />
                Book a Quick Call
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-14 pt-10 border-t border-slate-100 flex flex-wrap items-center justify-center gap-8 text-slate-400">
              {['No credit card required', 'Free 30-day trial', 'Cancel anytime', 'US & Canada based'].map((trust) => (
                <div key={trust} className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  {trust}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
