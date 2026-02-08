'use client';

import { useState, useRef, useEffect } from 'react';
import {
    Phone,
    ArrowRight,
    CheckCircle2,
    XCircle,
    Zap,
    ShieldCheck,
    Smartphone,
    Clock,
    MousePointerClick,
    Play,
    Layout,
    Hammer,
    Briefcase,
    Store,
    ChevronDown,
    Menu,
    X,
    TrendingUp,
    MapPin,
    Globe,
    DollarSign,
    Calendar,
    Star,
    MessageCircle,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import BookingModal from '@/components/BookingModal';

export default function CybkartGlobalLanding() {
    const [demosClicked, setDemosClicked] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'conversion', {
                'send_to': 'AW-17893861115/ZXWPCPyU-O4bEPvNutRC'
            });
        }
    }, []);

    const reviews = [
        {
            name: "Jason M.",
            role: "HVAC Business Owner",
            text: "Honestly blown away. We paid a local agency $3k for a site that took 2 months. Cybkart got our new landing page up in 4 days and it looks 10x better. Calls started coming in the next week.",
            initial: "J",
            color: "bg-blue-100 text-blue-600",
            time: "2 weeks ago"
        },
        {
            name: "Sarah Jenkins",
            role: "Dental Clinic Manager",
            text: "The 'No Monthly Retainer' promise is real. They built the site, handed over the keys, and showed me how to make edits myself. Exactly what a small business needs.",
            initial: "S",
            color: "bg-purple-100 text-purple-600",
            time: "1 month ago"
        },
        {
            name: "Mike T.",
            role: "Roofing Contractor",
            text: "We used to lose so many leads because our old site wasn't mobile friendly. The new design is super fast on phones and the 'Book Now' button is converting like crazy. Highly recommend.",
            initial: "M",
            color: "bg-emerald-100 text-emerald-600",
            time: "3 days ago"
        },
        {
            name: "Emily R.",
            role: "Boutique Owner",
            text: "I was skeptical about the 5-day delivery, but they actually delivered early. The design is clean, elegant, and matches my brand perfectly. My online sales have already increased.",
            initial: "E",
            color: "bg-pink-100 text-pink-600",
            time: "1 week ago"
        },
        {
            name: "David K.",
            role: "Financial Consultant",
            text: "Professional, sleep, and effective. The Google Review integration and booking system they added saved me hours of manual admin work. Worth every penny.",
            initial: "D",
            color: "bg-amber-100 text-amber-600",
            time: "2 months ago"
        }
    ];

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -350 : 350;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const scrollToDemos = () => {
        const element = document.getElementById('demo-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleDemoClick = () => {
        setDemosClicked(true);
    };

    return (
        <div className="font-sans text-slate-900 antialiased bg-white selection:bg-blue-100 selection:text-blue-900">
            {/* Header/Nav (Simple) */}
            <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center bg-slate-900 px-3 py-1.5 rounded-lg shadow-sm hover:bg-slate-800 transition-colors">
                        <img src="/images/logo.png" alt="CYBKART Global" className="h-12 w-auto" />
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-6">
                        <a href="tel:8446991255" className="font-semibold text-slate-600 hover:text-blue-600 transition-colors cursor-pointer">
                            844-699-1255 (Toll Free)
                        </a>
                        <Link
                            href="/services"
                            className="px-5 py-2.5 rounded-lg font-semibold text-slate-700 bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-500 hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                        >
                            Our Services
                        </Link>
                        <button
                            onClick={scrollToDemos}
                            className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 cursor-pointer"
                        >
                            See Demo Websites
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-slate-900 cursor-pointer"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[500px] opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="px-6 py-4 space-y-4">
                        <a href="tel:8446991255" className="block w-full text-center py-3 bg-slate-100 rounded-lg font-bold text-slate-800 cursor-pointer flex items-center justify-center gap-2">
                            <Phone className="w-4 h-4" /> Call 844-699-1255
                        </a>
                        <Link
                            href="/services"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block w-full py-3 bg-white border border-slate-200 text-slate-700 rounded-lg font-bold shadow-sm cursor-pointer flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
                        >
                            <Briefcase className="w-4 h-4" /> Our Services
                        </Link>
                        <button
                            onClick={() => { setIsBookingModalOpen(true); setMobileMenuOpen(false); }}
                            className="block w-full py-3 bg-emerald-600 text-white rounded-lg font-bold shadow-lg cursor-pointer flex items-center justify-center gap-2"
                        >
                            <Calendar className="w-4 h-4" /> Book Strategy Call
                        </button>
                        <button
                            onClick={() => { scrollToDemos(); setMobileMenuOpen(false); }}
                            className="block w-full py-3 bg-blue-600 text-white rounded-lg font-bold shadow-lg cursor-pointer flex items-center justify-center gap-2"
                        >
                            <Layout className="w-4 h-4" /> See Demo Websites
                        </button>
                    </div>
                </div>
            </header>

            {/* 🟢 SECTION 1: HERO (REDESIGNED - CYBKART GROWTH) */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">

                {/* Background City Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=2000"
                        alt="City skyline"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-blue-900/90"></div>

                    {/* Animated Background Elements */}
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float-delayed"></div>
                    <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float-slow"></div>

                    {/* Animated Particles */}
                    <div className="absolute inset-0 overflow-hidden">
                        {/* Particle 1 */}
                        <div className="absolute top-1/4 left-0 w-2 h-2 bg-blue-400/40 rounded-full animate-particle-1"></div>
                        {/* Particle 2 */}
                        <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-particle-2"></div>
                        {/* Particle 3 */}
                        <div className="absolute top-1/2 left-1/2 w-2.5 h-2.5 bg-emerald-400/40 rounded-full animate-particle-3"></div>
                        {/* Particle 4 */}
                        <div className="absolute top-2/3 left-3/4 w-1 h-1 bg-blue-300/50 rounded-full animate-particle-4"></div>
                        {/* Particle 5 */}
                        <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-cyan-300/40 rounded-full animate-particle-5"></div>
                        {/* Particle 6 */}
                        <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-emerald-300/30 rounded-full animate-particle-6"></div>
                        {/* Particle 7 */}
                        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-blue-400/35 rounded-full animate-particle-1"></div>
                        {/* Particle 8 */}
                        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-cyan-400/40 rounded-full animate-particle-3"></div>
                    </div>

                    {/* Moving Grid Lines */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent top-1/4 animate-slide-right"></div>
                        <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent top-1/2 animate-slide-left"></div>
                        <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent top-3/4 animate-slide-right-delayed"></div>
                    </div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

                        {/* Left Column - Text Content */}
                        <div className="text-left">
                            {/* Accepting Clients Badge */}
                            <div className="inline-flex items-center gap-2 bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-2 mb-6">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                <span className="text-sm text-slate-200 font-medium">Accepting New Clients for 2026</span>
                            </div>

                            {/* Headline */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-6">
                                We Build Websites That<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A9EFF] via-[#5DC4E8] to-[#4ADE80] animate-gradient-x" style={{ backgroundSize: '200% 200%' }}>
                                    Turn Visitors Into Callers
                                </span>
                            </h1>

                            {/* Subheadline */}
                            <p className="text-base md:text-lg text-slate-300 mb-8 max-w-lg leading-relaxed">
                                We design high-converting, mobile-friendly websites for contractors, clinics, and local businesses across the US & Canada — built specifically for Google Search & Ads traffic.
                            </p>

                            {/* CTA Button */}
                            <button
                                onClick={() => setIsBookingModalOpen(true)}
                                className="px-8 py-4 bg-blue-600 text-white text-base font-semibold rounded-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all inline-flex items-center gap-2 cursor-pointer mb-8"
                            >
                                Get a Free Website Quote <ArrowRight className="w-5 h-5" />
                            </button>

                            {/* Trust Badges */}
                            <div className="space-y-3">
                                <p className="text-sm text-slate-400 font-medium">Trusted Partner for Sustainable Growth</p>
                                <div className="flex items-center gap-4 flex-wrap">
                                    {/* BBB Accredited Badge */}
                                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-2 rounded-lg">
                                        <ShieldCheck className="w-5 h-5 text-blue-400" />
                                        <span className="text-xs text-white font-semibold">ACCREDITED<br />BUSINESS</span>
                                    </div>

                                    {/* Top Rated Badge */}
                                    <div className="flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 px-3 py-2 rounded-lg">
                                        <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                                        <span className="text-xs text-white font-semibold">Top Rated</span>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-2 rounded-lg">
                                        <span className="text-lg font-bold text-white">5.0</span>
                                        <div className="flex text-amber-400">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-3 h-3 fill-current" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Website Preview */}
                        <div className="relative hidden md:block">
                            <div className="relative">
                                {/* Multi-Device Mockup Image */}
                                <div className="relative">
                                    <img
                                        src="/images/hero-img.png"
                                        alt="Cybkart website on multiple devices"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>

                                {/* Floating "Live Preview" Badge */}
                                <div className="absolute top-6 -right-3 bg-emerald-500 text-white px-3 py-1.5 rounded-lg shadow-lg text-xs font-bold flex items-center gap-1.5 rotate-3 z-40">
                                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                    Live Preview
                                </div>

                                {/* Floating Stats Badge */}
                                <div className="absolute bottom-12 -left-6 bg-white rounded-xl shadow-xl p-3 border border-slate-200 z-40">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <TrendingUp className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-500">Conversions</div>
                                            <div className="text-sm font-bold text-slate-900">+127%</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile Ready Badge */}
                                <div className="absolute top-1/2 -right-8 bg-white rounded-xl shadow-xl px-3 py-2 border border-slate-200 z-40">
                                    <div className="flex items-center gap-1.5">
                                        <Smartphone className="w-4 h-4 text-purple-600" />
                                        <div className="text-[10px] font-bold text-slate-900 leading-tight">Mobile<br />Ready</div>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
                                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* 🟢 SECTION 1.5: TRUST SNAPSHOT */}
            <section className="bg-slate-900 py-16 border-t border-slate-800">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-3xl p-8 md:p-10 border border-slate-700/50 shadow-2xl relative overflow-hidden">
                        {/* Subtle background glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <h2 className="text-3xl font-bold text-white mb-10 text-center relative z-10">Why businesses choose us</h2>

                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 relative z-10">
                            <div className="flex items-center gap-5 group">
                                <div className="w-12 h-12 rounded-xl bg-slate-700/50 border border-slate-600 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300 shadow-lg">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-white font-bold text-lg">Sheridan, WY</div>
                                    <div className="text-slate-400 text-sm">US-Based Company</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 group">
                                <div className="w-12 h-12 rounded-xl bg-slate-700/50 border border-slate-600 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500 transition-all duration-300 shadow-lg">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-white font-bold text-lg">US & Canada</div>
                                    <div className="text-slate-400 text-sm">Serving Clients</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 group">
                                <div className="w-12 h-12 rounded-xl bg-slate-700/50 border border-slate-600 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-500 transition-all duration-300 shadow-lg">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-white font-bold text-lg">5 Business Days</div>
                                    <div className="text-slate-400 text-sm">Fast Turnaround</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 group">
                                <div className="w-12 h-12 rounded-xl bg-slate-700/50 border border-slate-600 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-500 transition-all duration-300 shadow-lg">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-white font-bold text-lg">Free Strategy Call</div>
                                    <div className="text-slate-400 text-sm">No Obligation Consultation</div>
                                </div>
                            </div>

                            <div className="md:col-span-2 pt-6 border-t border-slate-700/50 flex justify-center">
                                <div className="flex items-center gap-5 group">
                                    <div className="w-12 h-12 rounded-xl bg-slate-700/50 border border-slate-600 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-500 transition-all duration-300 shadow-lg">
                                        <Smartphone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-lg">100% Mobile-Friendly</div>
                                        <div className="text-slate-400 text-sm">Optimized for Conversion</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* 🟢 SECTION 2: WHY BUSINESSES CHOOSE US */}
            <section className="bg-gradient-to-b from-slate-50 to-white py-20 border-t border-slate-200">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-12">
                            <div className="inline-block mb-4">
                                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">What's Included</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                Everything You Need in a<br />
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Modern, High-Performing</span> Website
                            </h2>
                            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                                Every website we build is designed to look professional, work flawlessly, and support real business growth.
                            </p>
                        </div>

                        {/* Features Grid - 4 Columns */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Feature 1 */}
                            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 group text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform shadow-lg">
                                    <Layout className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Custom Design</h3>
                                <p className="text-sm text-slate-600">
                                    Tailored layouts that match your brand and business goals.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 group text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform shadow-lg">
                                    <Smartphone className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Mobile-First</h3>
                                <p className="text-sm text-slate-600">
                                    Fast loading and optimized for all devices.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-purple-400 hover:shadow-xl transition-all duration-300 group text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform shadow-lg">
                                    <TrendingUp className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Conversion-Focused</h3>
                                <p className="text-sm text-slate-600">
                                    Designed to drive enquiries, calls, and sales.
                                </p>
                            </div>

                            {/* Feature 4 */}
                            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 group text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform shadow-lg">
                                    <Zap className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">SEO-Ready</h3>
                                <p className="text-sm text-slate-600">
                                    Built to perform better on Google from day one.
                                </p>
                            </div>

                            {/* Feature 5 */}
                            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-indigo-400 hover:shadow-xl transition-all duration-300 group text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform shadow-lg">
                                    <MessageCircle className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Lead Capture</h3>
                                <p className="text-sm text-slate-600">
                                    Forms, booking tools, and contact integrations.
                                </p>
                            </div>

                            {/* Feature 6 */}
                            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-rose-400 hover:shadow-xl transition-all duration-300 group text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform shadow-lg">
                                    <Store className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">E-commerce Ready</h3>
                                <p className="text-sm text-slate-600">
                                    Sell products and accept payments seamlessly.
                                </p>
                            </div>

                            {/* Feature 7 */}
                            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 group text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform shadow-lg">
                                    <Globe className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Integrations</h3>
                                <p className="text-sm text-slate-600">
                                    Connect with CRMs, email tools, and analytics.
                                </p>
                            </div>

                            {/* Feature 8 */}
                            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-teal-400 hover:shadow-xl transition-all duration-300 group text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform shadow-lg">
                                    <Hammer className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Easy to Scale</h3>
                                <p className="text-sm text-slate-600">
                                    Grow your website as your business expands.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* 🟢 SECTION 4: DEMO FIRST (YOUR SECRET WEAPON) */}
            <section id="demo-section" className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/10 radial-gradient"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        See How Your Website Could Look
                    </h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
                        Before you talk to anyone, see real demo websites built for service businesses like yours.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                        {[
                            { name: 'Service Business Demo', icon: Briefcase, url: 'https://mediumpurple-hedgehog-134737.hostingersite.com/' },
                            { name: 'Contractor Demo', icon: Hammer, url: 'https://mediumpurple-hedgehog-134737.hostingersite.com/' },
                            { name: 'Small Business Demo', icon: Store, url: 'https://mediumpurple-hedgehog-134737.hostingersite.com/' },
                        ].map((demo, i) => (
                            <a
                                key={i}
                                href={demo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleDemoClick}
                                className={`
                                    block text-center group relative p-8 rounded-xl border-2 transition-all duration-300 cursor-pointer no-underline
                                    ${demosClicked
                                        ? 'border-blue-500 bg-blue-900/30'
                                        : 'border-slate-700 bg-slate-800/50 hover:border-blue-400 hover:bg-slate-800'}
                                `}
                            >
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    Click to View
                                </div>
                                <demo.icon className="w-12 h-12 mx-auto mb-4 text-blue-400 group-hover:text-white transition-colors" />
                                <h3 className="font-bold text-lg text-white">{demo.name}</h3>
                                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-blue-300 group-hover:text-white">
                                    <Play className="w-4 h-4 fill-current" /> Preview Live Site
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Reveal after click */}
                    <div className={`transition-all duration-700 overflow-hidden ${demosClicked ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto border border-white/10">
                            <h3 className="text-2xl font-bold mb-4">Like what you see?</h3>
                            <p className="text-slate-300 mb-8">
                                These are real examples of the quality we deliver. Let's discuss your specific needs.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <button
                                    onClick={() => setIsBookingModalOpen(true)}
                                    className="w-full sm:w-auto px-8 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 cursor-pointer"
                                >
                                    <Calendar className="w-5 h-5" /> Book Strategy Call
                                </button>
                                <button
                                    onClick={() => setIsBookingModalOpen(true)}
                                    className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white border border-white/20 font-bold rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <MessageCircle className="w-5 h-5" /> Message Us
                                </button>
                            </div>
                        </div>
                    </div>

                    {!demosClicked && (
                        <p className="text-slate-500 text-sm animate-pulse">
                            👆 Click a button above to unlock the demo preview
                        </p>
                    )}
                </div>
            </section>

            {/* 🟢 SECTION 5: PRICING (REMOVE CONFUSION) */}

            {/* 🟢 SECTION 5: PRICING (REMOVE CONFUSION) */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Have a budget in mind?</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Share your budget range and a few details about your business, and we'll prepare a custom demo website layout tailored to your needs.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                        {/* Starter Package */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                            <div className="relative bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-2xl">
                                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-bl-xl rounded-tr-lg uppercase tracking-wider">
                                    Best Value
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter Website</h3>
                                <p className="text-slate-600 mb-8 pb-8 border-b border-slate-100">
                                    Perfect for service businesses ready to upgrade from social media or DIY sites. Get a custom quote tailored to your needs.
                                </p>

                                <ul className="space-y-4 mb-8">
                                    {[
                                        'Custom website design (no templates)',
                                        'Mobile-friendly, fast-loading pages',
                                        'Lead forms & contact',
                                        'SEO-ready structure',
                                        'Clean, professional UI built for trust'
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <span className="text-slate-700 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => setIsBookingModalOpen(true)}
                                    className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    Get a Free Quote & Demo <ArrowRight className="w-4 h-4" />
                                </button>
                                <p className="text-center text-xs text-slate-400 mt-4">No monthly fees. No hidden costs.</p>
                            </div>
                        </div>

                        {/* Custom / Growth */}
                        <div className="p-8 md:p-10 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 transition-all">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Growth & Custom</h3>
                            <p className="text-slate-600 mb-8">
                                Need more than just a website? We build full automation ecosystems.
                            </p>

                            <ul className="space-y-4 mb-8">
                                {[
                                    'Custom Web App Development',
                                    'CRM & Booking Integrations',
                                    'AI Chatbot Implementation',
                                    'Advanced SEO & Content Strategy',
                                    'Multi-Location Support'
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        <span className="text-slate-700 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto">
                                <div className="text-slate-900 font-bold text-xl mb-1">Custom Quote</div>
                                <div className="text-slate-500 text-sm mb-6">Tailored to your specific goals</div>

                                <button
                                    onClick={() => setIsBookingModalOpen(true)}
                                    className="w-full py-4 bg-white text-slate-900 border-2 border-slate-200 font-bold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer"
                                >
                                    Get a Free Quote & Demo
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Privacy Reassurance */}
                    <div className="text-center mt-12">
                        <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
                            <ShieldCheck className="w-4 h-4" />
                            We respect your privacy. No spam. No hard sales.
                        </p>
                    </div>
                </div>
            </section>


            {/* 🟢 SECTION 6: HOW IT WORKS (REDESIGNED) */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">Simple Process</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">From Idea to Launch in 4 Steps</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            We handle everything. You just approve the strategy and watch your new site go live.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: '01',
                                title: 'Strategy & Demo',
                                desc: 'We research your niche and show you a demo of what’s possible.',
                                icon: MessageCircle
                            },
                            {
                                step: '02',
                                title: 'Design & Build',
                                desc: 'We craft a custom, high-converting design tailored to your brand.',
                                icon: Layout
                            },
                            {
                                step: '03',
                                title: 'Review & Refine',
                                desc: 'You review the site. We make tweaks until it’s perfect.',
                                icon: CheckCircle2
                            },
                            {
                                step: '04',
                                title: 'Launch & Grow',
                                desc: 'We go live, set up SEO, and hand over the keys to you.',
                                icon: TrendingUp
                            },
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl hover:border-blue-400 transition-all duration-300 group relative overflow-hidden">
                                {/* Watermark Number */}
                                <div className="absolute -right-4 -bottom-6 text-9xl font-bold text-slate-100 opacity-80 group-hover:opacity-100 group-hover:text-blue-50 transition-all select-none">
                                    {item.step}
                                </div>

                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <item.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🟢 SECTION 6.5: THE PROBLEM (Compact Vibrant Dark Redesign) */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto rounded-3xl p-8 md:p-10 relative overflow-hidden bg-slate-900 text-white shadow-xl shadow-slate-900/20">
                        {/* Decorative background elements */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-red-600 rounded-full blur-[80px] -mr-24 -mt-24 opacity-20 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600 rounded-full blur-[80px] -ml-24 -mb-24 opacity-20 pointer-events-none"></div>

                        <div className="relative z-10 text-center">
                            <h2 className="text-2xl md:text-4xl font-bold mb-8 leading-tight">
                                Most Service Business Websites <span className="text-red-400">Fail Because:</span>
                            </h2>

                            <div className="grid gap-3 text-left max-w-xl mx-auto mb-8">
                                {[
                                    "They look good but don’t convert",
                                    "They confuse visitors instead of guiding them",
                                    "They’re slow and not mobile-friendly",
                                    "They don’t work well with Google Ads or SEO",
                                    "They were built by agencies that don’t understand service businesses"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-red-500/30 hover:bg-slate-800 transition-colors backdrop-blur-sm group">
                                        <div className="shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 group-hover:text-red-300 transition-colors">
                                            <XCircle className="w-4 h-4" />
                                        </div>
                                        <span className="text-base md:text-lg text-slate-200 font-medium group-hover:text-white transition-colors">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="inline-block relative group cursor-default">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
                                <div className="relative px-6 py-2 bg-slate-900 rounded-full leading-none flex items-center border border-slate-700">
                                    <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                                        We fix that.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* 🟢 SECTION 7: WHY WE’RE DIFFERENT (POSITIONING) */}
            <section className="py-24 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                                What Your Website <span className="text-blue-600">Will Do for You</span>
                            </h2>
                            <ul className="space-y-6 mb-10">
                                {[
                                    'Convert visitors into calls & enquiries',
                                    'Build instant trust with local customers',
                                    'Load fast on mobile & desktop',
                                    'Work perfectly with Google Ads & search traffic',
                                    'Scale easily as your business grows'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <span className="text-lg md:text-xl font-medium text-slate-800">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
                                <p className="text-lg text-slate-700 font-medium leading-relaxed">
                                    We don’t just “build websites” — we build <span className="font-bold text-blue-700">lead-focused websites</span> for service businesses
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
                            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-2xl relative">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-100 opacity-50">
                                        <span className="font-medium text-red-800">Typical Website</span>
                                        <span className="text-sm text-red-600">Confusing, Slow, No Calls</span>
                                    </div>
                                    <div className="flex items-center justify-between p-6 bg-green-50 rounded-lg border border-green-200 shadow-sm scale-110">
                                        <span className="font-bold text-green-900 flex items-center gap-2"><Zap className="w-5 h-5" /> Our Website</span>
                                        <span className="text-sm font-bold text-green-700">Clear, Fast, High Calls</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* 🟢 SECTION 8.5: TESTIMONIALS (SOCIAL PROOF CAROUSEL) */}
            <section className="py-24 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Don't Just Take Our Word For It</h2>
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <span className="text-3xl font-bold text-slate-900">4.8</span>
                            <div className="flex flex-col items-start">
                                <div className="flex text-amber-400">
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current text-amber-400/30" />
                                </div>
                                <span className="text-slate-500 text-xs font-medium">Average Client Rating</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative max-w-7xl mx-auto">
                        {/* Navigation Buttons */}
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-xl border border-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:scale-110 transition-all hidden md:flex cursor-pointer"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-xl border border-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:scale-110 transition-all hidden md:flex cursor-pointer"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Carousel Track */}
                        <div
                            ref={scrollRef}
                            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide px-4"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {reviews.map((review, i) => (
                                <div
                                    key={i}
                                    className="min-w-[300px] md:min-w-[350px] bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col snap-center transform hover:-translate-y-1 transition-transform duration-300"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`w-12 h-12 rounded-full ${review.color} flex items-center justify-center font-bold text-xl`}>
                                            {review.initial}
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900">{review.name}</div>
                                            <div className="text-slate-500 text-xs flex items-center gap-1">
                                                <div className="flex text-amber-400">
                                                    {[...Array(5)].map((_, starI) => <Star key={starI} className="w-3 h-3 fill-current" />)}
                                                </div>
                                                <span>{review.time}</span>
                                            </div>
                                        </div>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="w-6 h-6 ml-auto opacity-70" />
                                    </div>
                                    <p className="text-slate-600 italic leading-relaxed mb-4 flex-grow text-sm md:text-base">
                                        "{review.text}"
                                    </p>
                                    <div className="text-sm text-slate-400 font-medium pt-4 border-t border-slate-50">
                                        {review.role}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 🟢 SECTION 8.6: BRANDS (SOCIAL PROOF) */}
            <section className="py-16 bg-white border-b border-slate-100 overflow-hidden">
                <div className="container mx-auto px-6 text-center mb-10">
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Trusted by innovative companies</p>
                </div>

                <div className="flex overflow-hidden w-full mask-gradient-x">
                    <div className="animate-marquee flex items-center gap-20 px-8 shrink-0 min-w-full justify-around">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={i} className="opacity-40 hover:opacity-100 transition-opacity duration-300">
                                {i === 1 && (
                                    <svg className="h-8 md:h-10 w-auto text-slate-600" viewBox="0 0 100 30" fill="currentColor">
                                        <path d="M15 15a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm25 0h40v5h-40v-5zm0-10h25v5h-25v-5z" />
                                        <text x="35" y="22" className="text-2xl font-bold font-sans">NexGen</text>
                                    </svg>
                                )}
                                {i === 2 && (
                                    <svg className="h-8 md:h-10 w-auto text-slate-600" viewBox="0 0 120 30" fill="currentColor">
                                        <circle cx="15" cy="15" r="10" />
                                        <rect x="35" y="5" width="10" height="20" />
                                        <text x="55" y="22" className="text-2xl font-bold font-serif">Vertex</text>
                                    </svg>
                                )}
                                {i === 3 && (
                                    <svg className="h-8 md:h-10 w-auto text-slate-600" viewBox="0 0 110 30" fill="currentColor">
                                        <path d="M15 5L25 25H5L15 5Z" />
                                        <text x="35" y="22" className="text-2xl font-bold font-mono">Prism</text>
                                    </svg>
                                )}
                                {i === 4 && (
                                    <svg className="h-8 md:h-10 w-auto text-slate-600" viewBox="0 0 120 30" fill="currentColor">
                                        <rect x="5" y="5" width="20" height="20" rx="5" />
                                        <text x="35" y="22" className="text-2xl font-bold font-sans">EchoSys</text>
                                    </svg>
                                )}
                                {i === 5 && (
                                    <svg className="h-8 md:h-10 w-auto text-slate-600" viewBox="0 0 130 30" fill="currentColor">
                                        <path d="M5 15Q15 5 25 15T45 15" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <text x="55" y="22" className="text-2xl font-bold font-sans">Flow</text>
                                    </svg>
                                )}
                                {i === 6 && (
                                    <svg className="h-8 md:h-10 w-auto text-slate-600" viewBox="0 0 120 30" fill="currentColor">
                                        <circle cx="10" cy="15" r="5" />
                                        <circle cx="25" cy="15" r="5" />
                                        <text x="40" y="22" className="text-2xl font-bold font-serif">Duo</text>
                                    </svg>
                                )}
                                {i === 7 && (
                                    <svg className="h-8 md:h-10 w-auto text-slate-600" viewBox="0 0 120 30" fill="currentColor">
                                        <path d="M5 25L15 5L25 25" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <text x="35" y="22" className="text-2xl font-bold font-mono">Apex</text>
                                    </svg>
                                )}
                                {i === 8 && (
                                    <svg className="h-8 md:h-10 w-auto text-slate-600" viewBox="0 0 120 30" fill="currentColor">
                                        <rect x="5" y="10" width="10" height="10" />
                                        <rect x="20" y="5" width="10" height="20" />
                                        <text x="40" y="22" className="text-2xl font-bold font-sans">BarCo</text>
                                    </svg>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="animate-marquee flex items-center gap-20 px-8 shrink-0 min-w-full justify-around">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={i} className="opacity-40 hover:opacity-100 transition-opacity duration-300">
                                {i === 1 && (
                                    <svg className="h-8 md:h-10 w-auto text-slate-600" viewBox="0 0 100 30" fill="currentColor">
                                        <path d="M15 15a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm25 0h40v5h-40v-5zm0-10h25v5h-25v-5z" />
                                        <text x="35" y="22" className="text-2xl font-bold font-sans">NexGen</text>
                                    </svg>
                                )}
                                {i === 2 && (
                                    <svg className="h-8 md:h-10 w-auto text-slate-600" viewBox="0 0 120 30" fill="currentColor">
                                        <circle cx="15" cy="15" r="10" />
                                        <rect x="35" y="5" width="10" height="20" />
                                        <text x="55" y="22" className="text-2xl font-bold font-serif">Vertex</text>
                                    </svg>
                                )}
                                {i === 3 && (
                                    <svg className="h-8 md:h-10 w-auto text-slate-600" viewBox="0 0 110 30" fill="currentColor">
                                        <path d="M15 5L25 25H5L15 5Z" />
                                        <text x="35" y="22" className="text-2xl font-bold font-mono">Prism</text>
                                    </svg>
                                )}
                                {i === 4 && (
                                    <svg className="h-8 md:h-10 w-auto text-slate-600" viewBox="0 0 120 30" fill="currentColor">
                                        <rect x="5" y="5" width="20" height="20" rx="5" />
                                        <text x="35" y="22" className="text-2xl font-bold font-sans">EchoSys</text>
                                    </svg>
                                )}
                                {i === 5 && (
                                    <svg className="h-8 md:h-10 w-auto text-slate-600" viewBox="0 0 130 30" fill="currentColor">
                                        <path d="M5 15Q15 5 25 15T45 15" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <text x="55" y="22" className="text-2xl font-bold font-sans">Flow</text>
                                    </svg>
                                )}
                                {i === 6 && (
                                    <svg className="h-8 md:h-10 w-auto text-slate-600" viewBox="0 0 120 30" fill="currentColor">
                                        <circle cx="10" cy="15" r="5" />
                                        <circle cx="25" cy="15" r="5" />
                                        <text x="40" y="22" className="text-2xl font-bold font-serif">Duo</text>
                                    </svg>
                                )}
                                {i === 7 && (
                                    <svg className="h-8 md:h-10 w-auto text-slate-600" viewBox="0 0 120 30" fill="currentColor">
                                        <path d="M5 25L15 5L25 25" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <text x="35" y="22" className="text-2xl font-bold font-mono">Apex</text>
                                    </svg>
                                )}
                                {i === 8 && (
                                    <svg className="h-8 md:h-10 w-auto text-slate-600" viewBox="0 0 120 30" fill="currentColor">
                                        <rect x="5" y="10" width="10" height="10" />
                                        <rect x="20" y="5" width="10" height="20" />
                                        <text x="40" y="22" className="text-2xl font-bold font-sans">BarCo</text>
                                    </svg>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🟢 SECTION 9: FINAL CTA (CLOSE THE LOOP) */}
            <section className="py-32 bg-slate-950 relative overflow-hidden">
                {/* Background Glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight leading-tight">
                            Ready to See Your Website <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Before You Decide?</span>
                        </h2>

                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                            Stop imagining and start experiencing. Get a live demo of your future high-converting website today.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button
                                onClick={scrollToDemos}
                                className="group relative px-8 py-5 bg-white text-slate-900 text-xl font-bold rounded-2xl hover:bg-blue-50 transition-all shadow-2xl shadow-blue-900/20 cursor-pointer overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    👉 See Demo Website
                                </span>
                            </button>
                            <button
                                onClick={() => setIsBookingModalOpen(true)}
                                className="group px-8 py-5 bg-blue-600 text-white text-xl font-bold rounded-2xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer border border-blue-500"
                            >
                                <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                Get a Free Quote & Demo
                            </button>
                        </div>

                        <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-center gap-4 text-slate-500 text-sm">
                            <span>© {new Date().getFullYear()} Cybkart Global. All rights reserved.</span>
                            <span className="hidden md:block">•</span>
                            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Secure & Private</span>
                        </div>
                    </div>
                </div>
            </section>
            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
}
