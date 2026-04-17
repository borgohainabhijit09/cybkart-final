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
  Clock
} from 'lucide-react';
import CTASection from '@/components/CTASection';
import BookingModal from '@/components/BookingModal';

const MOCKUP_SLIDES = [
  {
    title: 'Auto Spa',
    primaryBg: 'bg-blue-500',
    lightBg: 'bg-blue-500/20',
    gradient: 'from-blue-500/30 to-blue-600/30',
  },
  {
    title: 'Landscaping',
    primaryBg: 'bg-emerald-500',
    lightBg: 'bg-emerald-500/20',
    gradient: 'from-emerald-500/30 to-emerald-600/30',
  },
  {
    title: 'Plumbing',
    primaryBg: 'bg-cyan-500',
    lightBg: 'bg-cyan-500/20',
    gradient: 'from-cyan-500/30 to-cyan-600/30',
  },
  {
    title: 'Clinic',
    primaryBg: 'bg-indigo-500',
    lightBg: 'bg-indigo-500/20',
    gradient: 'from-indigo-500/30 to-purple-500/30',
  }
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % MOCKUP_SLIDES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* 
        HERO SECTION 
        Style: Dark Enterprise Tech
        Purpose: Immediate Authority
      */}
      <section className="relative bg-[#0F172A] pt-32 pb-24 overflow-hidden border-b border-gray-800">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 dark-grid-bg opacity-30 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div className="space-y-8 max-w-2xl">

              <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                Get a Professional Website for <span className="text-yellow-400">$0</span> Today
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
                Launch a high-converting website for your business with hosting, updates, support, and ongoing improvements included. Use it free for the first month and pay only if you continue.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/20 cursor-pointer"
                >
                  <span className="text-lg">Get My Free Website Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <Link href="#pricing" className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-slate-600 px-8 py-4 rounded-lg font-semibold hover:bg-white/5 hover:border-white transition-all">
                  View Pricing Plans
                </Link>
              </div>

              {/* Trust Strip */}
              <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-slate-300 font-medium">
                <span className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-emerald-400" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  No Upfront Cost
                </span>
                <span className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-emerald-400" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  Live in 3–5 Days
                </span>
                <span className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-emerald-400" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  Fully Managed
                </span>
                <span className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-emerald-400" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  Cancel Anytime
                </span>
              </div>
            </div>

            {/* Right Visual - Device Mockups & Pricing Badge */}
            <div className="relative xl:block lg:flex flex-col items-center mt-12 lg:mt-0">
              <div className="relative h-[400px] sm:h-[500px] lg:h-[550px] w-full flex items-center justify-center cursor-default scale-[0.65] sm:scale-90 lg:scale-100 origin-center transform transition-transform">
                
                {/* Background glow */}
                <div className="absolute inset-0 bg-blue-500/10 blur-[60px] lg:blur-[100px] rounded-full pointer-events-none"></div>

                {/* Laptop Mockup */}
                <div className="absolute z-10 w-[500px] transform -translate-x-4 lg:-translate-x-8 -translate-y-4 transition-transform hover:scale-[1.02] duration-500">
                  <div className="relative pb-[62.5%] bg-slate-800 rounded-t-xl border-[6px] border-b-0 border-slate-700 shadow-2xl overflow-hidden shadow-black/50">
                    <div className="absolute inset-0 bg-slate-900 overflow-hidden flex flex-col">
                      {/* Browser header */}
                      <div className="h-6 w-full bg-slate-800 flex items-center px-3 border-b border-slate-700">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                        </div>
                      </div>
                      {/* Website content slider mock */}
                      <div className="p-4 h-full relative overflow-hidden flex flex-col">
                        <div className="flex-1 relative w-full h-full">
                          {MOCKUP_SLIDES.map((slide, index) => (
                            <div 
                              key={slide.title}
                              className={`absolute inset-0 transition-transform duration-700 ease-in-out flex flex-col gap-4 ${
                                activeSlide === index 
                                  ? 'translate-x-0' 
                                  : activeSlide > index 
                                    ? '-translate-x-[110%]' 
                                    : 'translate-x-[110%]'
                              }`}
                            >
                              <div className={`w-full h-32 ${slide.lightBg} rounded-lg relative overflow-hidden border border-white/5`}>
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/5"></div>
                                <div className="absolute bottom-3 left-3 bg-slate-900/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold border border-white/10 shadow-lg">
                                  {slide.title} Theme
                                </div>
                              </div>
                              <div className="flex gap-4">
                                <div className="flex-1 space-y-2">
                                  <div className="h-3 w-3/4 bg-slate-700 rounded"></div>
                                  <div className="h-2 w-full bg-slate-700 rounded"></div>
                                  <div className="h-2 w-5/6 bg-slate-700 rounded"></div>
                                </div>
                                <div className={`w-24 h-16 ${slide.primaryBg} bg-opacity-20 rounded border border-white/5`}></div>
                              </div>
                              <div className="mt-auto flex justify-between items-center">
                                <div className="flex gap-2">
                                  <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700"></div>
                                  <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700"></div>
                                </div>
                                <div className={`px-4 py-1.5 ${slide.primaryBg} text-white text-[10px] uppercase tracking-wider font-bold rounded shadow-lg opacity-90`}>Book Now</div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Slider Indicators */}
                        <div className="flex justify-center gap-2 mt-4 z-10">
                          {MOCKUP_SLIDES.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setActiveSlide(index)}
                              className={`h-1.5 rounded-full transition-all duration-300 ${
                                activeSlide === index ? 'w-6 bg-white' : 'w-1.5 bg-slate-600 hover:bg-slate-500'
                              }`}
                              aria-label={`Go to slide ${index + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Laptop base */}
                  <div className="h-4 bg-slate-600 rounded-b-xl w-[110%] -ml-[5%] relative border-t border-slate-500">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-slate-400 rounded-b-lg"></div>
                  </div>
                </div>

                {/* Mobile Mockup */}
                <div className="absolute z-20 w-[140px] right-2 bottom-6 transform translate-y-8 transition-transform hover:scale-[1.05] duration-500">
                  <div className="relative pb-[200%] bg-slate-900 rounded-[2rem] border-[6px] border-slate-800 shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 flex flex-col items-center">
                      {/* Notch */}
                      <div className="w-16 h-4 bg-slate-800 rounded-b-xl absolute top-0 z-20"></div>
                      
                      {/* Mobile web content mock */}
                      <div className="w-full h-full bg-[#0F172A] pt-7 flex flex-col relative overflow-hidden">
                         {/* Header mock */}
                         <div className="flex justify-between items-center px-3 mb-2 z-10 relative">
                           <div className="w-10 h-2.5 bg-slate-700 rounded"></div>
                           <div className="w-4 h-2 bg-slate-700 rounded"></div>
                         </div>
                         
                         <div className="relative flex-1 w-full px-3">
                           {MOCKUP_SLIDES.map((slide, index) => (
                              <div 
                                key={`mob-${slide.title}`}
                                className={`absolute inset-x-3 inset-y-0 transition-transform duration-700 ease-in-out flex flex-col ${
                                  activeSlide === index 
                                    ? 'translate-x-0' 
                                    : activeSlide > index 
                                      ? '-translate-x-[130%]' 
                                      : 'translate-x-[130%]'
                                }`}
                              >
                               <div className={`w-full h-24 bg-gradient-to-br ${slide.gradient} rounded-lg mb-3 shadow-inner`}></div>
                               <div className="space-y-2 mt-1">
                                 <div className="h-2.5 w-3/4 bg-slate-700 rounded"></div>
                                 <div className="h-2 w-full bg-slate-800 rounded"></div>
                                 <div className="h-2 w-5/6 bg-slate-800 rounded"></div>
                               </div>
                               <div className={`h-8 w-full ${slide.primaryBg} rounded-md mt-4 flex items-center justify-center shadow-lg shadow-black/20`}>
                                 <div className="h-2 w-1/2 bg-white/30 rounded"></div>
                               </div>
                              </div>
                           ))}
                         </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Pricing Badge */}
                <div className="absolute z-30 top-12 right-[-20px] bg-white p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-100 flex flex-col gap-2 min-w-[200px] hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-black text-xl">
                      $0
                    </div>
                    <div>
                      <div className="text-slate-900 font-bold text-[15px] leading-tight">First Month</div>
                      <div className="text-slate-500 text-xs font-medium">Full functionality</div>
                    </div>
                  </div>
                  <div className="w-full h-px bg-slate-100 my-1"></div>
                  <div className="text-slate-600 text-xs text-center font-medium">
                    Then from <span className="text-slate-900 font-bold text-sm">$59/mo</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        PROBLEMS SECTION 
        Style: Clean, Minimalist Grid
      */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              The Digital Bottleneck
            </h2>
            <p className="text-lg text-slate-600">
              Most businesses are held back by disconnected tools and manual processes.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Layers,
                title: "Tool Chaos",
                desc: "Apps that don't talk to each other create data silos and confusion."
              },
              {
                icon: Clock,
                title: "Manual Waste",
                desc: "Valuable team time lost to data entry, scheduling, and repetitive tasks."
              },
              {
                icon: Target,
                title: "Missed Leads",
                desc: "Slow response times cost you 67% of potential new business."
              },
              {
                icon: Layout,
                title: "Poor UX",
                desc: "Confusing website designs that frustrate users and kill conversions."
              }
            ].map((item, i) => (
              <div key={i} className="group p-6 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                  <item.icon className="w-6 h-6 text-slate-700 group-hover:text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        SOLUTIONS SECTION 
        Style: Bento Grid
      */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Our Solutions</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Enterprise Architecture for Growth
              </h2>
            </div>
            <Link href="/services" className="text-blue-600 font-semibold flex items-center gap-2 hover:translate-x-1 transition-transform">
              Explore All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">

            {/* AI Automation - Large Card */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-white border border-slate-200 p-8 hover:shadow-xl transition-all duration-300 min-h-[320px]">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
                <Brain className="w-64 h-64 text-blue-600" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Brain className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">AI Automation & Chatbots</h3>
                  <p className="text-slate-600 max-w-md leading-relaxed">
                    Intelligent agents that handle customer service, booking, and sales 24/7.
                    Reduce operational costs by 60% and eliminate response delays.
                  </p>
                </div>
                <Link href="/services/ai-automation" className="inline-flex items-center text-blue-600 font-medium mt-8 group-hover:gap-2 transition-all">
                  View Architecture <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Websites - Standard Card */}
            <div className="relative group overflow-hidden rounded-2xl bg-white border border-slate-200 p-8 hover:shadow-xl transition-all duration-300 min-h-[320px]">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                    <Layout className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Websites + Booking</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Conversion-focused sites with integrated scheduling. Turn visitors into bookings instantly.
                  </p>
                </div>
                <Link href="/services/websites-booking" className="inline-flex items-center text-cyan-600 font-medium group-hover:gap-2 transition-all">
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* E-Commerce - Standard Card */}
            <div className="relative group overflow-hidden rounded-2xl bg-white border border-slate-200 p-8 hover:shadow-xl transition-all duration-300 min-h-[320px]">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                    <ShoppingCart className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">E-Commerce</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    High-performance stores built on Shopify or custom stacks. Optimized for scale.
                  </p>
                </div>
                <Link href="/services/ecommerce" className="inline-flex items-center text-emerald-600 font-medium group-hover:gap-2 transition-all">
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Digital Marketing - Wide Card */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-[#0F172A] p-8 hover:shadow-xl transition-all duration-300 text-white min-h-[320px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                    <LineChart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Digital Marketing</h3>
                  <p className="text-slate-400 max-w-lg leading-relaxed">
                    Data-driven campaigns. We track every click, conversion, and dollar to ensure positive ROI across Google, Meta, and LinkedIn.
                  </p>
                </div>
                <Link href="/services/digital-marketing" className="inline-flex items-center text-white font-medium mt-6 group-hover:gap-2 transition-all">
                  View Strategies <ChevronRight className="w-4 h-4" />
                </Link>
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
