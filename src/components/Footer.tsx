'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowUpRight, Globe } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const pathname = usePathname();

    // Do not render footer on landing page
    if (pathname?.startsWith('/cybkart-global')) return null;

    const navSections = [
        {
            title: "Solutions",
            links: [
                { name: 'AI Automation', href: '/services/ai-automation' },
                { name: 'Managed Websites', href: '/services/websites-booking' },
                { name: 'E-Commerce', href: '/services/ecommerce' },
                { name: 'Digital Growth', href: '/services/digital-marketing' },
                { name: 'Brand Systems', href: '/services/branding-design' },
            ]
        },
        {
            title: "Ecosystem",
            links: [
                { name: 'About CYBKART', href: '/about' },
                { name: 'Pricing Plans', href: '/pricing' },
                { name: 'Case Scenarios', href: '/case-scenarios' },
                { name: 'Knowledge Hub', href: '/knowledge-hub' },
                { name: 'Demos', href: '/demos' },
            ]
        }
    ];

    return (
        <footer className="relative bg-[#050B1A] border-t border-white/5 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Top Section: Brand & Navigation */}
                <div className="pt-24 pb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                        
                        {/* Column 1: Brand Identity (Wide) */}
                        <div className="lg:col-span-5 space-y-8">
                            <div className="flex items-center space-x-2 group">
                                <div className="bg-white p-2.5 rounded-xl shadow-2xl group-hover:scale-105 transition-transform">
                                    <img src="/images/logo.png" alt="CYBKART Global" className="h-10 w-auto" />
                                </div>
                            </div>
                            
                            <p className="text-xl font-medium text-slate-400 leading-relaxed max-w-md italic">
                                Architecting high-performance digital systems for the next generation of North American business.
                            </p>

                            <div className="flex items-center gap-10">
                                <div className="space-y-1">
                                    <div className="text-white font-black text-2xl italic tracking-tighter">200+</div>
                                    <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Global Deployments</div>
                                </div>
                                <div className="w-px h-10 bg-white/10"></div>
                                <div className="space-y-1">
                                    <div className="text-white font-black text-2xl italic tracking-tighter">99.9%</div>
                                    <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">System Uptime</div>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                {[
                                    { icon: Linkedin, href: '#' },
                                    { icon: Twitter, href: '#' },
                                    { icon: Facebook, href: '#' }
                                ].map((social, i) => (
                                    <a 
                                        key={i} 
                                        href={social.href} 
                                        className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/[0.03] border border-white/5 text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all group"
                                    >
                                        <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Column 2 & 3: Navigation Links */}
                        <div className="lg:col-span-4 grid grid-cols-2 gap-8">
                            {navSections.map((section, idx) => (
                                <div key={idx} className="space-y-8">
                                    <h3 className="text-white font-black text-xs uppercase tracking-[0.2em] italic underline underline-offset-[12px] decoration-blue-500/50">
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-4">
                                        {section.links.map((link, lIdx) => (
                                            <li key={lIdx}>
                                                <Link 
                                                    href={link.href} 
                                                    className="group flex items-center gap-1 text-slate-400 hover:text-white transition-colors text-sm font-medium"
                                                >
                                                    {link.name}
                                                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-60 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Column 4: Contact & Location */}
                        <div className="lg:col-span-3 space-y-10">
                            <div className="space-y-8">
                                <h3 className="text-white font-black text-xs uppercase tracking-[0.2em] italic underline underline-offset-[12px] decoration-yellow-500/50">
                                    Contact
                                </h3>
                                <ul className="space-y-6">
                                    <li className="group">
                                        <a href="mailto:info@cybkartglobal.com" className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/10 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                                <Mail className="w-4 h-4" />
                                            </div>
                                            <span className="text-slate-400 group-hover:text-white text-sm font-medium transition-colors">info@cybkartglobal.com</span>
                                        </a>
                                    </li>
                                    <li className="group">
                                        <a href="tel:8446991255" className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/10 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                                <Phone className="w-4 h-4" />
                                            </div>
                                            <span className="text-slate-400 group-hover:text-white text-sm font-medium transition-colors">844-699-1255</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                                <div className="flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-widest italic opacity-60">
                                    <MapPin className="w-3 h-3" />
                                    Headquarters
                                </div>
                                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                    1309 Coffeen Ave, Sheridan, <br />
                                    Wyoming 82801, USA
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Compliance */}
                <div className="border-t border-white/5 py-10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                            <p className="text-slate-600 text-[10px] font-black uppercase tracking-widest italic">
                                © {currentYear} CYBKART GLOBAL. Built with engineering precision.
                            </p>
                            <div className="hidden md:flex items-center gap-4 grayscale opacity-30">
                                <div className="flex items-center gap-1.5"><span className="text-sm">🇺🇸</span> <span className="text-[10px] text-white font-bold">USA</span></div>
                                <div className="flex items-center gap-1.5"><span className="text-sm">🇨🇦</span> <span className="text-[10px] text-white font-bold">CAN</span></div>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
                            <Link href="/privacy" className="text-slate-500 hover:text-blue-500 transition-colors">Privacy</Link>
                            <Link href="/terms" className="text-slate-500 hover:text-blue-500 transition-colors">Terms</Link>
                            <div className="w-px h-3 bg-white/10"></div>
                            <div className="flex items-center gap-2 text-slate-600">
                                <Globe className="w-3 h-3" />
                                EN-US
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
