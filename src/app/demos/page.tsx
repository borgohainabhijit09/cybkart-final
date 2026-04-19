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
  Globe, 
  MousePointer2, 
  CheckCircle2,
  ChevronRight,
  Monitor,
  Layout,
  Star
} from 'lucide-react';
import BookingModal from '@/components/BookingModal';

const DEMOS = [
  {
    title: "Auto Spa Demo",
    description: "Luxury detailing website with integrated bookings and tiered service pricing.",
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <path d="M9 17h6" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    ),
    industry: "Auto Detailing"
  },
  {
    title: "Landscaping Demo",
    description: "Lead-focused design for outdoor service businesses with project gallery and quote forms.",
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
        <path d="M12 2v20" />
        <path d="M22 12H2" />
      </svg>
    ),
    industry: "Home Services"
  },
  {
    title: "Plumbing Demo",
    description: "Trust-building service site with 24/7 emergency CTA and real-time scheduling.",
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z" />
      </svg>
    ),
    industry: "Emergency Repair"
  }
];

const VALUES = [
  { icon: CalendarCheck, text: "$0 First Month" },
  { icon: Zap, text: "Launch Fast" },
  { icon: Shield, text: "Fully Managed" },
  { icon: BarChart3, text: "Built for Leads" }
];

export default function DemosPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* ── HEADER SECTION ────────────────────────── */}
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto text-center max-w-4xl space-y-10">
          <div className="container mx-auto text-center max-w-4xl">
            <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">Live Showcase</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mt-2 mb-6 leading-tight">
              See <span className="text-blue-500">Live Website</span> <br />
              Demos Built For Yours
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Choose from professionally designed websites ready to launch for your business. Fully managed, mobile-friendly, and built to generate leads.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-10 py-5 bg-yellow-500 text-slate-950 rounded-2xl font-extrabold text-lg hover:bg-yellow-400 transition-all shadow-xl shadow-yellow-500/30 uppercase cursor-pointer"
            >
              Claim My Demo
            </button>
            <Link 
              href="/pricing"
              className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-slate-700 text-white rounded-2xl font-extrabold text-lg hover:bg-slate-800 transition-all uppercase"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── DEMO GRID SECTION ─────────────────────── */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Decorative Background Blobs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {DEMOS.map((demo, i) => {
              const accentColor = i === 0 ? 'blue' : i === 1 ? 'emerald' : 'indigo';
              
              return (
                <div 
                  key={i} 
                  className="group relative"
                >
                  {/* Card Container */}
                  <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden hover:border-white/20 transition-all duration-500 shadow-2xl flex flex-col">
                    
                    {/* Rectangle Website Preview */}
                    <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                      {/* Placeholder for actual image - using a stylized container for now */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                         <div className={`w-20 h-20 rounded-3xl bg-${accentColor}-500/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500`}>
                            <demo.icon className={`w-10 h-10 text-${accentColor}-400`} />
                         </div>
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors pointer-events-none"></div>

                      {/* Industry Label */}
                      <div className="absolute bottom-4 left-4 px-3 py-1 rounded-lg bg-black/40 backdrop-blur-md text-white/50 text-[10px] font-black uppercase tracking-widest italic border border-white/5">
                        {demo.industry}
                      </div>
                    </div>

                    {/* Info Area */}
                    <div className="p-8 space-y-6">
                       <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                         {demo.title}
                       </h3>
                       
                       <button 
                        onClick={() => setIsModalOpen(true)}
                        className="w-full py-4 bg-white/5 group-hover:bg-blue-600 text-slate-300 group-hover:text-white rounded-xl font-black text-xs uppercase tracking-[0.2em] border border-white/5 group-hover:border-blue-500 transition-all duration-300 shadow-xl cursor-pointer flex items-center justify-center gap-2"
                       >
                         Preview Demo
                         <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                       </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY BUSINESSES LOVE SECTION ──────────── */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
           <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Value Model</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-2">
                Why Businesses <span className="text-blue-600">Love</span> This Model
              </h2>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
             {VALUES.map((val, i) => (
                <div key={i} className="bg-slate-800/40 border border-slate-800 rounded-2xl p-6 flex items-center gap-4 hover:bg-slate-800 transition-all shadow-lg transform hover:-translate-y-1">
                   <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                      <val.icon className="w-6 h-6 text-blue-400" />
                   </div>
                   <span className="font-bold tracking-tight text-lg">{val.text}</span>
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* ── FOOTER CTA SECTION ────────────────────── */}
      <section className="py-24 px-6 bg-slate-100 text-slate-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]"></div>
        <div className="container mx-auto text-center max-w-4xl relative z-10 space-y-10">
           <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
             Ready To Use One <br />
             For Your Business?
           </h2>
           <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed">
             Pick a design, request a demo, and launch risk-free.
           </p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-10 py-6 bg-yellow-500 text-slate-950 rounded-2xl font-extrabold text-xl shadow-2xl shadow-yellow-500/40 uppercase flex items-center justify-center gap-3 cursor-pointer"
              >
                Get My Free Demo Website
                <ArrowRight className="w-6 h-6" />
              </button>
              <a 
                href="tel:8446991255"
                className="w-full sm:w-auto px-10 py-6 bg-slate-200 border-2 border-slate-300 text-slate-900 rounded-2xl font-extrabold text-xl hover:bg-slate-300 transition-all uppercase flex items-center justify-center gap-3"
              >
                <PhoneCall className="w-6 h-6" />
                Call Toll Free
              </a>
           </div>
        </div>
      </section>
    </div>
  );
}
