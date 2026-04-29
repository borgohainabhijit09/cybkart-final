'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  Shield,
  Clock,
  Zap,
  Target,
  Star,
  HelpCircle,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import BookingModal from '@/components/BookingModal';

// ─── Data ─────────────────────────────────────────────────────────────────────

const PRICING_PLANS = [
  {
    name: 'Starter',
    description: 'For Small Businesses',
    price: '0',
    monthlyPrice: '49',
    tagline: 'First Month',
    features: ['3-5 Pages', 'Template-Based Design', 'Mobile Optimized', 'Hosting Included', 'Basic Support'],
    cta: 'Get Started',
    gradient: 'from-emerald-500 to-teal-500',
    accentText: 'text-emerald-400',
    accentBorder: 'hover:border-emerald-500/40',
    checkColor: 'text-emerald-400',
    popular: false,
  },
  {
    name: 'Growth',
    description: 'Most Popular',
    price: '0',
    monthlyPrice: '69',
    tagline: 'First Month',
    features: ['5-10 Pages', 'Custom Design Edits', 'Mobile Optimized', 'SEO-Ready Structure', 'Hosting & Maintenance', 'Ongoing Updates', 'Priority Support'],
    cta: 'Scale Now',
    gradient: 'from-amber-400 to-yellow-500',
    accentText: 'text-yellow-400',
    accentBorder: 'border-yellow-500/50',
    checkColor: 'text-yellow-400',
    popular: true,
  },
  {
    name: 'Pro',
    description: 'For Growing Brands',
    price: '0',
    monthlyPrice: '99',
    tagline: 'First Month',
    features: ['Fully Custom Design', 'Advanced UI/UX', 'Speed Optimization', 'Form & CRM Integration', 'Monthly Improvements', 'Priority Support'],
    cta: 'Go Pro',
    gradient: 'from-blue-500 to-cyan-500',
    accentText: 'text-blue-400',
    accentBorder: 'hover:border-blue-500/40',
    checkColor: 'text-blue-400',
    popular: false,
  },
  {
    name: 'Elite',
    description: 'For Scaling Businesses',
    price: '0',
    monthlyPrice: '149',
    tagline: 'First Month',
    features: ['Everything in Pro', 'AI Automation Integration', 'Lead Generation Systems', 'Conversion Optimization', 'Monthly Strategy Support'],
    cta: 'Join Elite',
    gradient: 'from-violet-500 to-purple-600',
    accentText: 'text-violet-400',
    accentBorder: 'hover:border-violet-500/40',
    checkColor: 'text-violet-400',
    popular: false,
  },
];

const WHY_US = [
  { icon: Shield, title: 'No Upfront Payment', desc: 'Start your digital transformation without initial capital risk.', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { icon: Zap, title: 'Fast Delivery (3-5 Days)', desc: 'Quick turnaround times to get your business live and generating leads.', color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
  { icon: Clock, title: 'Cancel Anytime', desc: 'We earn your business every month. No long-term lock-in contracts.', color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { icon: HelpCircle, title: 'Ongoing Support & Maintenance', desc: 'Technical updates and hosting are handled by our engineering team.', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  { icon: Target, title: 'Designed for Leads & Growth', desc: 'Every element is architected to convert visitors into paying customers.', color: 'text-violet-400', bg: 'bg-violet-500/10' },
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

export default function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ══════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#030712] overflow-hidden text-center" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        {/* Orbs */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-blue-600/15 blur-[120px] animate-glow-pulse" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-[100px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
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
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-[0.15em] mb-6">
            <Star className="w-3 h-3 fill-current" />
            Transparency is our Policy
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.05]">
            Choose Your{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #a78bfa, #34d399)' }}>
              Growth Plan
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            Launch your presence with <span className="text-white font-bold">$0 upfront</span>.
            Professional websites, hosting, and management all included in a single monthly subscription.
          </p>

          {/* Trust strip */}
          <div className="inline-flex flex-wrap justify-center gap-6 px-8 py-4 rounded-2xl bg-white/[0.03] border border-white/8 backdrop-blur-md">
            {['No Hidden Charges', 'Cancel Anytime', 'Satisfaction Guaranteed', 'Trusted by US & Canada Businesses'].map((text) => (
              <div key={text} className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                <Check className="w-4 h-4 text-emerald-400" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PRICING CARDS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#030712] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICING_PLANS.map((plan, i) => (
              <div
                key={i}
                className={`relative flex flex-col rounded-3xl border transition-all duration-400 hover:-translate-y-2
                  ${plan.popular
                    ? 'bg-slate-800/80 border-yellow-500/50 shadow-2xl shadow-yellow-500/10 scale-[1.03] z-20'
                    : `bg-white/[0.03] border-white/8 ${plan.accentBorder} hover:bg-white/[0.05] hover:shadow-xl`
                  }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-xl text-slate-900"
                    style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)' }}>
                    Most Popular
                  </div>
                )}

                <div className="p-8 flex-1 flex flex-col">
                  {/* Header */}
                  <div className="mb-8">
                    <span className={`text-xs font-bold uppercase tracking-widest mb-1 block ${plan.accentText}`}>
                      {plan.description}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">{plan.name}</h3>

                    <div className="flex items-baseline gap-1 mt-6">
                      <span className="text-6xl font-black text-white">${plan.price}</span>
                      <span className="text-slate-400 font-medium text-sm ml-1">/ {plan.tagline}</span>
                    </div>
                    <div className="text-slate-500 text-sm mt-1.5">
                      Then <span className="text-white font-bold">${plan.monthlyPrice}</span> / month
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/8 w-full mb-8" />

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center
                          ${plan.popular ? 'border-yellow-500/40 bg-yellow-500/10' : 'border-white/10 bg-white/5'}`}>
                          <Check className={`w-3 h-3 ${plan.popular ? 'text-yellow-400' : plan.checkColor}`} />
                        </div>
                        <span className="text-slate-300 text-sm leading-snug font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className={`w-full py-4 rounded-2xl font-bold text-base transition-all flex items-center justify-center gap-2 cursor-pointer
                      ${plan.popular
                        ? 'text-slate-900 hover:opacity-90 shadow-lg shadow-yellow-500/20'
                        : 'bg-white/8 text-white border border-white/10 hover:bg-white/15'
                      }`}
                    style={plan.popular ? { background: 'linear-gradient(135deg, #fbbf24, #f59e0b)' } : {}}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SPECIAL OFFER CALLOUT
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-[#030712] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="relative group overflow-hidden rounded-[2rem] p-1 border border-white/10 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl">
            <div className="absolute inset-0 bg-[#030712]/80 rounded-[1.9rem]" />
            <div className="relative z-10 px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] font-black uppercase tracking-widest mb-4">
                  <Sparkles className="w-3 h-3" /> Limited Time Deal
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                  Launch Your Presence for just <span className="text-rose-400">$29</span>
                </h2>
                <p className="text-slate-400 font-medium max-w-xl leading-relaxed">
                  Our Micro Plan is perfect for startups and individuals who need a high-impact, single-page website without the long-term commitment. Get everything you need to go live today.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="text-center">
                  <div className="text-white font-black text-4xl tracking-tight">$29<span className="text-slate-500 text-lg">/mo</span></div>
                  <div className="text-rose-400 text-xs font-bold uppercase tracking-widest mt-1">Introductory Price</div>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-10 py-4 rounded-2xl font-black text-lg text-white transition-all hover:scale-[1.05] active:scale-[0.95] shadow-2xl shadow-rose-500/20"
                  style={{ background: 'linear-gradient(135deg, #f43f5e, #e11d48)' }}
                >
                  Claim Offer Now
                </button>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-rose-600/10 blur-[80px] rounded-full group-hover:bg-rose-600/20 transition-all duration-700" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full group-hover:bg-blue-600/20 transition-all duration-700" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          WHY CHOOSE US
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50 blur-[100px] opacity-80 rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-50 blur-[80px] opacity-60 rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-center">

            {/* Left: Features */}
            <div className="lg:w-1/2 space-y-8">
              <div>
                <SectionLabel>Decision Matrix</SectionLabel>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
                  Why Businesses <br />Choose{' '}
                  <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}>
                    CYBKART Global
                  </span>
                </h2>
                <p className="text-lg text-slate-500 mt-4 leading-relaxed font-medium">
                  We've combined enterprise technology with a localized approach to give small businesses the leverage they need to compete with giants.
                </p>
              </div>

              <div className="grid gap-4">
                {WHY_US.map((item, i) => (
                  <div key={i} className="group flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:bg-blue-50/30 hover:shadow-md transition-all duration-300">
                    <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 mb-1 tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: CTA card */}
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none" />
                <div className="relative bg-slate-950 border border-white/10 rounded-3xl p-12 shadow-2xl text-center">
                  <div className="absolute inset-0 dark-grid-bg opacity-[0.05] rounded-3xl" />

                  <div className="relative z-10 space-y-6">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-xl"
                      style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}>
                      <Zap className="w-10 h-10 text-white" />
                    </div>

                    <div>
                      <h3 className="text-3xl font-extrabold text-white tracking-tight mb-3">Ready for Launch?</h3>
                      <p className="text-slate-400 font-medium leading-relaxed">
                        Join 200+ businesses who skip the technical headaches and focus on revenue.
                      </p>
                    </div>

                    <div className="h-px bg-white/8 w-full" />

                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="group inline-flex items-center gap-3 px-9 py-4 rounded-2xl font-bold text-lg text-slate-900 cursor-pointer transition-all hover:scale-[1.03] active:scale-[0.97] shadow-xl"
                      style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', boxShadow: '0 16px 40px rgba(251,191,36,0.3)' }}
                    >
                      Get Your Free Website Demo
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-slate-500 text-sm font-medium">
                      Free for 30 days. Pay only if you continue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          TRUSTED BY
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-10 opacity-40 hover:opacity-70 transition-opacity duration-500">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🇺🇸</span>
              <span className="text-slate-700 font-bold text-xs uppercase tracking-widest">USA Operations</span>
            </div>
            <div className="w-px h-6 bg-slate-300" />
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🇨🇦</span>
              <span className="text-slate-700 font-bold text-xs uppercase tracking-widest">Canada HQ</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
