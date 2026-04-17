'use client';

import { useState } from 'react';
import { Check, ArrowRight, Shield, Clock, Zap, Target, Star, HelpCircle } from 'lucide-react';
import BookingModal from '@/components/BookingModal';
import Link from 'next/link';

const PRICING_PLANS = [
  {
    name: "Starter",
    description: "For Small Businesses",
    price: "0",
    monthlyPrice: "49",
    tagline: "First Month",
    features: [
      "3-5 Pages",
      "Template-Based Design",
      "Mobile Optimized",
      "Hosting Included",
      "Basic Support"
    ],
    cta: "Get Started",
    color: "emerald",
    popular: false
  },
  {
    name: "Growth",
    description: "Most Popular",
    price: "0",
    monthlyPrice: "69",
    tagline: "First Month",
    features: [
      "5-10 Pages",
      "Custom Design Edits",
      "Mobile Optimized",
      "SEO-Ready Structure",
      "Hosting & Maintenance",
      "Ongoing Updates",
      "Priority Support"
    ],
    cta: "Scale Now",
    color: "yellow",
    popular: true
  },
  {
    name: "Pro",
    description: "For Growing Brands",
    price: "0",
    monthlyPrice: "99",
    tagline: "First Month",
    features: [
      "Fully Custom Design",
      "Advanced UI/UX",
      "Speed Optimization",
      "Form & CRM Integration",
      "Monthly Improvements",
      "Priority Support"
    ],
    cta: "Go Pro",
    color: "blue",
    popular: false
  },
  {
    name: "Elite",
    description: "For Scaling Businesses",
    price: "0",
    monthlyPrice: "149",
    tagline: "First Month",
    features: [
      "Everything in Pro",
      "AI Automation Integration",
      "Lead Generation Systems",
      "Conversion Optimization",
      "Monthly Strategy Support"
    ],
    cta: "Join Elite",
    color: "purple",
    popular: false
  }
];

const WHY_US = [
  { icon: Shield, title: "No Upfront Payment", desc: "Start your digital transformation without initial capital risk." },
  { icon: Zap, title: "Fast Delivery (3-5 Days)", desc: "Quick turnaround times to get your business live and generating leads." },
  { icon: Clock, title: "Cancel Anytime", desc: "We earn your business every month. No long-term lock-in contracts." },
  { icon: HelpCircle, title: "Ongoing Support & Maintenance", desc: "Technical updates and hosting are handled by our engineering team." },
  { icon: Target, title: "Designed for Leads & Growth", desc: "Every element is architected to convert visitors into paying customers." }
];

export default function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-[#0F172A] min-h-screen pt-24 pb-20">
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Header Section */}
      <section className="container mx-auto px-6 py-12 text-center relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-500/10 via-transparent to-transparent blur-[120px] pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
          <Star className="w-3 h-3 fill-current" />
          Transparency is our Policy
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          Choose Your <span className="text-blue-500">Growth Plan</span>
        </h1>

        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Launch your presence with <span className="text-white font-bold">$0 upfront</span>.
          Professional websites, hosting, and management all included in a single monthly subscription.
        </p>

        {/* Global Footer Strip from Image */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 py-4 px-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-16 max-w-4xl mx-auto">
          {['No Hidden Charges', 'Cancel Anytime', 'Satisfaction Guaranteed', 'Trusted by US & Canada Businesses'].map((text, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-300 text-sm font-medium">
              <Check className="w-4 h-4 text-emerald-400" />
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="container mx-auto px-6 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRICING_PLANS.map((plan, i) => (
            <div
              key={i}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 
                ${plan.popular
                  ? 'bg-gradient-to-b from-slate-800 to-slate-900 border-yellow-500/50 shadow-2xl shadow-yellow-500/10 scale-105 z-20'
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-800/80'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-slate-900 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <span className={`text-xs font-bold uppercase tracking-widest mb-2 block 
                  ${plan.color === 'emerald' ? 'text-emerald-400'
                    : plan.color === 'yellow' ? 'text-yellow-400'
                      : plan.color === 'blue' ? 'text-blue-400'
                        : 'text-purple-400'}`}>
                  {plan.description}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>

                <div className="flex items-baseline gap-1 mt-6">
                  <span className="text-5xl font-extrabold text-white">${plan.price}</span>
                  <span className="text-slate-400 font-medium">/ {plan.tagline}</span>
                </div>
                <div className="text-slate-500 text-sm mt-2">
                  Then <span className="text-white font-bold">${plan.monthlyPrice}</span> / month
                </div>
              </div>

              <div className="h-px bg-slate-800 w-full mb-8"></div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-3 group">
                    <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-colors
                      ${plan.popular ? 'border-yellow-500/30 bg-yellow-500/10' : 'border-slate-700 bg-slate-800/50'}`}>
                      <Check className={`w-3 h-3 ${plan.popular ? 'text-yellow-500' : 'text-slate-400'}`} />
                    </div>
                    <span className="text-slate-300 text-sm leading-tight group-hover:text-white transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setIsModalOpen(true)}
                className={`w-full py-4 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 cursor-pointer
                  ${plan.popular
                    ? 'bg-yellow-500 text-slate-900 hover:bg-yellow-400 shadow-lg shadow-yellow-500/20'
                    : 'bg-white/10 text-white border border-white/10 hover:bg-white/20'}`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-24 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Decision Matrix</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Why Businesses <br />Choose <span className="text-blue-600">CYBKART Global</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We've combined enterprise technology with a localized approach to give small businesses the leverage they need to compete with giants.
              </p>

              <div className="grid gap-6">
                {WHY_US.map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-blue-600/5 blur-[100px] rounded-full"></div>
              <div className="relative bg-slate-900 rounded-[2.5rem] p-12 border border-slate-800 shadow-3xl">
                <div className="space-y-6 text-center">
                  <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto border border-blue-500/20">
                    <Zap className="w-10 h-10 text-blue-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Ready for Launch?</h3>
                  <p className="text-slate-400">Join 200+ businesses who skip the technical headaches and focus on revenue.</p>
                  <div className="h-px bg-white/10 w-full my-8"></div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-2 bg-yellow-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all shadow-xl shadow-yellow-500/20 cursor-pointer"
                  >
                    Get Your Free Website Demo
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <div className="text-slate-500 text-sm italic mt-4">
                    Free for 30 days. Pay only if you continue.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Banner (Mocked from Flags in Image) */}
      <section className="container mx-auto px-6 py-12 text-center">
        <div className="flex items-center justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 border-r border-slate-800 pr-8">
            <span className="text-2xl">🇺🇸</span>
            <span className="text-slate-400 font-bold tracking-tighter">USA OPERATIONS</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🇨🇦</span>
            <span className="text-slate-400 font-bold tracking-tighter">CANADA HQ</span>
          </div>
        </div>
      </section>
    </div>
  );
}
