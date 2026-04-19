'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import BookingModal from './BookingModal';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Check pathname to hide header on landing page
    const pathname = usePathname();

    // Do not render global header on the landing page
    if (pathname?.startsWith('/cybkart-global')) return null;


    const services = [
        { name: 'AI Automation & Chatbot Systems', href: '/services/ai-automation' },
        { name: 'Websites + Automated Booking', href: '/services/websites-booking' },
        { name: 'E-Commerce Development', href: '/services/ecommerce' },
        { name: 'Digital Marketing Services', href: '/services/digital-marketing' },
        { name: 'Branding & Graphic Design', href: '/services/branding-design' },
    ];


    return (
        <>
            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <nav className="container mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2 group bg-slate-900 px-3 py-1.5 rounded-lg shadow-sm hover:bg-slate-800 transition-colors">
                            <img src="/images/logo.png" alt="CYBKART Global" className="h-12 w-auto" />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            <Link href="/" className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm">
                                Home
                            </Link>
                            <Link href="/about" className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm">
                                About Us
                            </Link>

                            {/* Services Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setServicesOpen(true)}
                                onMouseLeave={() => setServicesOpen(false)}
                            >
                                <button className="flex items-center space-x-1 text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm h-20">
                                    <span>Services</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                                </button>

                                <div
                                    className={`absolute top-[80%] left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-100 py-2 transition-all duration-300 ease-out origin-top ${servicesOpen
                                        ? 'opacity-100 translate-y-0 visible'
                                        : 'opacity-0 -translate-y-2 invisible'
                                        }`}
                                >
                                    {services.map((service) => (
                                        <Link
                                            key={service.href}
                                            href={service.href}
                                            className="block px-6 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                    <div className="px-2 pt-2 pb-1">
                                        <Link
                                            href="/services"
                                            className="block px-4 py-3 text-center text-xs font-semibold text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                                        >
                                            View All Services
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <Link href="/demos" className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm">
                                Demos
                            </Link>

                            <Link href="/case-scenarios" className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm">
                                Case Scenarios
                            </Link>

                            <Link href="/knowledge-hub" className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm">
                                Knowledge Hub
                            </Link>

                            <Link href="/pricing" className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm">
                                Pricing
                            </Link>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-[#0F172A] text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-slate-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
                            >
                                Book Strategy Call
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {mobileMenuOpen && (
                        <div className="lg:hidden absolute top-20 left-0 right-0 bg-white border-t border-slate-200 shadow-xl p-6 space-y-4 h-[calc(100vh-5rem)] overflow-y-auto animate-slide-down">
                            <Link href="/" className="block text-slate-700 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                            <Link href="/about" className="block text-slate-700 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>About Us</Link>

                            <div className="space-y-1">
                                <div className="font-semibold text-slate-900 pb-2 border-b border-slate-100 mb-2">Services</div>
                                {services.map((service) => (
                                    <Link key={service.href} href={service.href} className="block pl-4 py-3 text-slate-600 text-sm border-l-2 border-transparent hover:border-blue-500 hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>
                                        {service.name}
                                    </Link>
                                ))}
                            </div>

                            <Link href="/demos" className="block text-slate-700 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Demos</Link>

                            <Link href="/case-scenarios" className="block text-slate-700 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Case Scenarios</Link>
                            <Link href="/knowledge-hub" className="block text-slate-700 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Knowledge Hub</Link>
                            <Link href="/pricing" className="block text-slate-700 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>

                            <div className="pt-4">
                                <div className="pt-4">
                                    <button
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setIsModalOpen(true);
                                        }}
                                        className="block w-full bg-[#0F172A] text-white text-center px-5 py-3 rounded-lg font-medium shadow-md cursor-pointer"
                                    >
                                        Book Strategy Call
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </nav>
            </header>
        </>
    );
}
