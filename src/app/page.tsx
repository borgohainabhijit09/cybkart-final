'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  ArrowRight,
  ArrowLeft,
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

const FUNNEL_SLIDES = [
  {
    id: 'risk-free',
    badge: 'Limited Priority Access',
    headline: 'Launch Your Business Website — Risk Free',
    subtext: 'No upfront cost. Try your website for 30 days before paying a single cent.',
    primaryCTA: 'Start Free Trial',
    secondaryCTA: 'View Demo',
    visualType: 'mockup',
    accentColor: 'blue'
  },
  {
    id: 'process',
    badge: 'Zero Friction',
    headline: 'We Build. You Try. You Decide.',
    subtext: 'We design your website, you test it live for 30 days, then continue only if you love it.',
    primaryCTA: 'See How It Works',
    visualType: 'process',
    accentColor: 'indigo'
  },
  {
    id: 'pricing',
    badge: 'Transparent Scaling',
    headline: 'Continue from Just $29/month',
    subtext: 'Everything included: Hosting, security updates, expert support, and lead capture tools.',
    primaryCTA: 'Start Free Trial',
    visualType: 'pricing',
    accentColor: 'emerald'
  },
  {
    id: 'value',
    badge: 'Strategic Growth',
    headline: 'Premium Websites Without the $3,000 Price Tag',
    subtext: 'Built for small businesses that want real results and revenue, not complexity.',
    primaryCTA: 'Book Free Demo',
    visualType: 'comparison',
    accentColor: 'amber'
  }
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % FUNNEL_SLIDES.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + FUNNEL_SLIDES.length) % FUNNEL_SLIDES.length);
  };

  const slide = FUNNEL_SLIDES[currentSlide];

  return (
    <>
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ────────────────────────────────────────────────────────
          SALES FUNNEL HERO SLIDER
      ──────────────────────────────────────────────────────────── */}
      <section className="relative bg-white pt-20 overflow-hidden" style={{ minHeight: '85vh' }}>
        
        {/* Subtle Background Elements (Parallax potential) */}
        <div className="absolute inset-0 z-0">
           <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] bg-blue-50/40 rounded-full blur-[120px] animate-pulse"></div>
           <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[60%] bg-indigo-50/40 rounded-full blur-[120px]"></div>
           {/* Grid Pattern */}
           <div className="absolute inset-0 opacity-[0.02] dark-grid-bg"></div>
        </div>

        <div className="container mx-auto px-6 h-full flex flex-col relative z-10 pt-16">
          <div className="flex-1 grid lg:grid-cols-2 gap-16 items-center">
            
            {/* ── LEFT: Strategic Content ─────────────────── */}
            <div className="relative h-[480px] flex flex-col justify-center">
              {FUNNEL_SLIDES.map((s, i) => (
                <div 
                  key={s.id}
                  className={`absolute inset-0 flex flex-col justify-center transition-all duration-1000 ease-out
                    ${currentSlide === i 
                      ? 'opacity-100 translate-y-0 visible pointer-events-auto' 
                      : `opacity-0 ${direction >= 0 ? 'translate-y-8' : '-translate-y-8'} invisible pointer-events-none`}`}
                >
                  <div className="space-y-8">
                    {/* Label */}
                    <div className="text-blue-600 font-bold uppercase tracking-widest text-sm">
                      {s.badge}
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      {s.headline.split(' ').map((word, wi) => (
                         <span key={wi} className="inline-block mr-3">
                           {word === 'Risk' || word === 'Build.' || word === '$29/month' || word === '$3,000' 
                             ? <span className="text-blue-600 underline underline-offset-8 decoration-slate-200">{word}</span> 
                             : word}
                         </span>
                      ))}
                    </h1>

                    {/* Subtext */}
                    <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-lg">
                      {s.subtext}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 pt-4">
                       <button 
                        onClick={() => setIsModalOpen(true)}
                        className="px-10 py-5 bg-yellow-500 text-slate-900 rounded-2xl font-bold text-lg hover:bg-yellow-400 transition-all shadow-xl shadow-yellow-500/20 uppercase cursor-pointer flex items-center gap-3 transform hover:scale-[1.02] active:scale-[0.98]"
                       >
                         {s.primaryCTA}
                         <ArrowRight className="w-5 h-5" />
                       </button>
                       {s.secondaryCTA && (
                         <button 
                          onClick={() => setIsModalOpen(true)}
                          className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all uppercase"
                         >
                           {s.secondaryCTA}
                         </button>
                       )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ── RIGHT: Visual Funnel Elements ──────────── */}
            <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
              {FUNNEL_SLIDES.map((s, i) => (
                <div 
                  key={s.id}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-out delay-100
                    ${currentSlide === i 
                      ? 'opacity-100 scale-100 translate-x-0 visible pointer-events-auto' 
                      : `opacity-0 scale-95 ${direction >= 0 ? 'translate-x-20' : '-translate-x-20'} invisible pointer-events-none`}`}
                >
                  {/* Visual: Mockup (Slide 1) */}
                  {s.visualType === 'mockup' && (
                    <div className="relative w-full max-w-md aspect-square bg-white rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-slate-50 p-8 transform rotate-2 animate-float">
                       <div className="h-full border-2 border-dashed border-slate-100 rounded-[2rem] flex flex-col p-6 space-y-6">
                          <div className="flex items-center justify-between"><div className="w-16 h-4 bg-slate-50 rounded"></div><div className="w-6 h-6 rounded-full bg-slate-50"></div></div>
                          <div className="flex-1 flex flex-col items-center justify-center gap-4">
                             <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center"><Globe className="w-6 h-6 text-blue-600" /></div>
                             <div className="h-2 w-32 bg-slate-100 rounded-full"></div>
                             <div className="h-1.5 w-24 bg-slate-50 rounded-full"></div>
                          </div>
                          <div className="h-10 w-full bg-slate-900 rounded-xl flex items-center justify-center"><div className="h-1 w-12 bg-white/20 rounded"></div></div>
                       </div>
                       {/* Floating UI Elements */}
                       <div className="absolute -top-4 -right-4 bg-emerald-500 text-white p-3 rounded-2xl shadow-xl font-bold text-[10px] tracking-widest uppercase">Verified</div>
                    </div>
                  )}

                  {/* Visual: Process (Slide 2) */}
                  {s.visualType === 'process' && (
                    <div className="w-full max-w-md space-y-6 transform -rotate-1">
                       {[
                         { id: 1, label: 'BUILD', icon: Code2, bg: 'bg-blue-500' },
                         { id: 2, label: 'TRY', icon: Eye, bg: 'bg-indigo-500' },
                         { id: 3, label: 'DECIDE', icon: Target, bg: 'bg-emerald-500' }
                       ].map((step) => (
                         <div key={step.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl flex items-center gap-6 group hover:translate-x-2 transition-transform">
                            <div className={`w-14 h-14 ${step.bg} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                               <step.icon className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                               <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Step {step.id}</div>
                               <div className="text-slate-900 font-bold uppercase tracking-tight text-lg">{step.label}</div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-slate-200 group-hover:text-slate-900 transition-colors" />
                         </div>
                       ))}
                    </div>
                  )}

                  {/* Visual: Pricing (Slide 3) */}
                  {s.visualType === 'pricing' && (
                    <div className="relative w-full max-w-sm bg-slate-900 rounded-[3rem] p-10 shadow-3xl transform rotate-1">
                       <div className="space-y-8">
                          <div className="inline-flex items-center gap-2 text-emerald-400 text-[10px] font-bold uppercase tracking-widest border border-emerald-400/20 px-3 py-1 rounded-full bg-emerald-400/5">Starter Plan</div>
                          <div className="flex items-baseline gap-2">
                             <span className="text-white font-extrabold text-6xl">$29</span>
                             <span className="text-slate-500 font-bold">/Month</span>
                          </div>
                          <div className="space-y-4">
                             {[1,2,3].map(i => (
                               <div key={i} className="flex items-center gap-3">
                                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center"><CheckIcon /></div>
                                  <div className="h-2 w-3/4 bg-white/5 rounded-full"></div>
                               </div>
                             ))}
                          </div>
                          <div className="h-12 w-full bg-white/10 rounded-2xl border border-white/5"></div>
                       </div>
                    </div>
                  )}

                  {/* Visual: Comparison (Slide 4) */}
                  {s.visualType === 'comparison' && (
                    <div className="w-full max-w-md bg-white rounded-[3rem] border border-slate-100 shadow-2xl p-10 space-y-8 transform -rotate-2">
                       <div className="flex items-center justify-between border-b border-slate-50 pb-6">
                          <div className="text-slate-400 font-bold text-xs uppercase tracking-tight">Conventional</div>
                          <div className="text-blue-600 font-bold text-xs uppercase tracking-tight">CYBKART</div>
                       </div>
                       <div className="space-y-6">
                          {[
                            { label: 'Setup Fee', old: '$3,500+', new: '$0' },
                            { label: 'Time', old: '3 Months', new: '48 Hours' },
                            { label: 'Risk', old: 'High Upfront', new: '30-Day Free' }
                          ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between">
                               <div className="text-slate-800 font-bold text-sm tracking-tight">{item.label}</div>
                               <div className="flex items-center gap-4">
                                  <span className="text-slate-400 line-through text-xs font-bold">{item.old}</span>
                                  <span className="text-emerald-500 font-extrabold tracking-tight text-lg">{item.new}</span>
                               </div>
                            </div>
                          ))}
                       </div>
                       <div className="pt-4 h-12 w-full bg-blue-50 rounded-2xl border border-blue-100 flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-[10px] uppercase tracking-widest">Save $3k+ Instantly</span>
                       </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

          {/* ── FOOTER: Control Navigation ───────────── */}
          <div className="py-12 flex items-center justify-between border-t border-slate-50 mt-auto">
            <div className="flex items-center gap-12">
               {/* Slide Indicators */}
               <div className="flex items-center gap-3">
                  {FUNNEL_SLIDES.map((_, i) => (
                    <button 
                      key={i}
                      onClick={() => { setDirection(i > currentSlide ? 1 : -1); setCurrentSlide(i); }}
                      className={`h-1.5 transition-all duration-500 rounded-full ${currentSlide === i ? 'w-12 bg-blue-600' : 'w-4 bg-slate-100 hover:bg-slate-200'}`}
                    />
                  ))}
               </div>
               <div className="hidden sm:block text-[10px] text-slate-300 font-bold uppercase tracking-[0.3em]">
                  Level {currentSlide + 1} / 4 Strategy
               </div>
            </div>

            <div className="flex items-center gap-4">
               <button 
                onClick={prevSlide}
                className="w-14 h-14 rounded-2xl border-2 border-slate-100 flex items-center justify-center text-slate-300 hover:text-slate-900 hover:border-slate-900 transition-all active:scale-95"
               >
                 <ArrowLeft className="w-6 h-6" />
               </button>
               <button 
                onClick={nextSlide}
                className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white hover:bg-blue-600 transition-all active:scale-95 shadow-xl"
               >
                 <ArrowRight className="w-6 h-6" />
               </button>
            </div>
          </div>
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
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Pain Points</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Why Pay Thousands <span className="text-blue-600">Upfront</span> for a Website?
            </h2>
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
                <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight leading-tight">
                  {item.title}
                </h3>
                <div className={`text-lg font-bold mb-4 ${item.iconColor}`}>
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
               <p className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                 "Your website should help your business grow — <span className="text-blue-400 font-bold">not drain your budget.</span>"
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
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">The Solution</span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2 tracking-tight leading-tight">
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
                    <span className="text-lg font-bold text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors uppercase">{text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl cursor-pointer uppercase tracking-tight"
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
                           <div className="h-3 lg:h-6 w-3/4 bg-white/10 rounded-sm font-bold text-white/40 flex items-center px-2">CYBKART PRESET</div>
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
          <div className="max-w-4xl mx-auto text-center mb-24">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Process</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 tracking-tight leading-tight">
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
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-[10rem] font-extrabold text-white/[0.03] pointer-events-none select-none tracking-tight">
                    {item.step}
                  </div>
                  
                  {/* Icon Circle */}
                  <div className={`relative w-28 h-28 mx-auto rounded-[2rem] ${item.bg} border border-white/10 flex items-center justify-center mb-10 group-hover:-translate-y-2 group-hover:rotate-3 transition-all duration-500 shadow-2xl`}>
                    <item.icon className={`w-12 h-12 ${item.accent}`} />
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-[#050B1A] border border-white/20 flex items-center justify-center text-white font-bold text-sm">
                       {item.step}
                    </div>
                  </div>

                  {/* Text Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">{item.title}</h3>
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
                   <div className="text-white font-bold text-sm uppercase">200+ Businesses Live</div>
                   <div className="text-slate-500 text-xs font-bold">Scaling with CYBKART methodology</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — Why It Benefits Your Business ───────── */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Benefits</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Built to Help <span className="text-blue-600">You Grow</span>
            </h2>
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
                <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  {benefit.desc}
                </p>
                
                {/* Micro-indicator */}
                <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase text-slate-300 group-hover:text-blue-600 transition-colors">
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
                   <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight mb-2">Ready to see the difference?</h3>
                   <p className="text-slate-400 font-medium">Get your free custom website demo in 48 hours.</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-10 py-5 bg-white text-slate-950 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl uppercase cursor-pointer flex items-center gap-3"
                >
                   Claim My Free Demo
                   <ArrowRight className="w-5 h-5" />
                </button>
             </div>
          </div>
        </div>
      </section>


      {/* ── SECTION 6 — Why Choose Cybkart Global ────────── */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        {/* Cinematic background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-blue-600/5 blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 dark-grid-bg opacity-[0.03] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Value Proposition</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 tracking-tight">
              Why Businesses <span className="text-blue-500">Choose Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "No large upfront cost",
                desc: "Keep your capital. Launch with $0 setup and predictable monthly scaling.",
                icon: Banknote,
                color: "text-emerald-400",
                bg: "bg-emerald-400/10"
              },
              {
                title: "Agency quality, minus the price",
                desc: "Enterprise-grade design and engineering without the traditional $10k+ price tag.",
                icon: Layout,
                color: "text-blue-400",
                bg: "bg-blue-400/10"
              },
              {
                title: "Fast Delivery",
                desc: "We don't do 'months'. We launch high-performance systems in 3-5 business days.",
                icon: Zap,
                color: "text-yellow-400",
                bg: "bg-yellow-400/10"
              },
              {
                title: "AI-forward systems",
                desc: "Every project is built to leverage modern AI for automation and lead capture.",
                icon: Brain,
                color: "text-purple-400",
                bg: "bg-purple-400/10"
              },
              {
                title: "Friendly ongoing support",
                desc: "Real humans, 24/7 monitoring, and unlimited updates included in your sub.",
                icon: Clock,
                color: "text-cyan-400",
                bg: "bg-cyan-400/10"
              },
              {
                title: "US & Canada Standards",
                desc: "Compliance, speed, and design standards specifically architected for North America.",
                icon: Globe,
                color: "text-rose-400",
                bg: "bg-rose-400/10"
              }
            ].map((item, i) => (
              <div key={i} className="group p-10 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-500 flex flex-col gap-6">
                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-8 opacity-40 grayscale">
               <div className="flex items-center gap-2">
                 <span className="text-2xl">🇺🇸</span>
                 <span className="text-white font-bold text-xs uppercase tracking-widest">USA Operations</span>
               </div>
               <div className="flex items-center gap-2">
                 <span className="text-2xl">🇨🇦</span>
                 <span className="text-white font-bold text-xs uppercase tracking-widest">Canada HQ</span>
               </div>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-500 transition-all shadow-2xl uppercase cursor-pointer"
            >
               Join the Ecosystem
            </button>
          </div>
        </div>
      </section>


      {/* ── SECTION 7 — Testimonials ─────────────────────── */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Decision Matrix</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2 tracking-tight">
              What <span className="text-blue-600">Our Clients</span> Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                quote: "Professional, fast, and easy to work with. They took our vision and turned it into a high-performance site in days, not months.",
                author: "Business Owner",
                role: "Local Service Industry",
                stars: 5
              },
              {
                quote: "Our new website brought in leads quickly. The subscription model is a game-changer for businesses that want to skip the massive upfront costs.",
                author: "Marketing Director",
                role: "Retail & E-Commerce",
                stars: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="relative p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
                {/* Quote Mark */}
                <div className="absolute top-8 right-10 text-blue-600/10 group-hover:text-blue-600/20 transition-colors">
                  <svg className="w-20 h-20 fill-current" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.89543 10.9124 7 12.017 7H19.017C20.1216 7 21.017 7.89543 21.017 9V15C21.017 17.2091 19.2261 19 17.017 19H14.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56929 13 4.017 13H2.017C1.46472 13 1.017 12.5523 1.017 12V9C1.017 7.89543 1.91243 7 3.017 7H10.017C11.1216 7 12.017 7.89543 12.017 9V15C12.017 17.2091 10.2261 19 8.017 19H5.017V21H5.017Z"/></svg>
                </div>
                
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.stars)].map((_, si) => (
                    <Star key={si} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-xl font-medium text-slate-800 leading-relaxed mb-10 relative z-10">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                    CB
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 uppercase tracking-tight">{testimonial.author}</div>
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 rounded-full border border-blue-100 text-blue-600 text-sm font-bold animate-pulse">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              Join the hundreds levelled up by CYBKART
            </div>
          </div>
        </div>
      </section>


      {/* ── SECTION 8 — Scarcity & Urgency ──────────────── */}
      <section className="py-24 bg-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative bg-[#050B1A] rounded-[3rem] p-12 md:p-20 overflow-hidden shadow-3xl text-center">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-transparent to-transparent`}></div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold uppercase tracking-wider animate-pulse">
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                Limited Capacity Available
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Limited <span className="text-yellow-500">Free First-Month</span> Spots Available
              </h2>

              <p className="text-xl text-slate-400 font-medium">
                We only onboard a limited number of businesses monthly to maintain quality delivery. Don't let your competition scale while you're still waiting.
              </p>

              <div className="pt-8 flex flex-col items-center gap-6">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-12 py-6 bg-yellow-500 text-slate-950 rounded-2xl font-extrabold text-xl hover:bg-yellow-400 transition-all shadow-[0_20px_50px_rgba(234,179,8,0.3)] uppercase cursor-pointer flex items-center gap-3 group"
                >
                  <span className="text-2xl">🟡</span>
                  Claim My Free Website
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <div className="flex items-center gap-4 text-slate-500 font-bold text-xs uppercase tracking-widest">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full bg-blue-500/20"></div>
                      </div>
                    ))}
                  </div>
                  <span>Join 7 other businesses starting this week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── SECTION 9 — Final CTA ────────────────────────── */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Ready to Launch <br />
              <span className="text-blue-600">a Better Website?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl mx-auto">
              Start today with <span className="text-slate-900 font-bold">$0 upfront</span> and a website built to grow your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-12 py-6 bg-yellow-500 text-slate-950 rounded-2xl font-extrabold text-xl hover:bg-yellow-400 transition-all shadow-xl uppercase cursor-pointer flex items-center justify-center gap-3 group"
              >
                <span className="text-2xl">🟡</span>
                Get My Free Demo
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-12 py-6 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl font-extrabold text-xl hover:bg-slate-50 transition-all shadow-md uppercase cursor-pointer flex items-center justify-center gap-3"
              >
                <div className="w-3 h-3 rounded-full bg-slate-200 group-hover:bg-slate-300"></div>
                Book a Quick Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
