'use client';

import { X, Phone, MessageCircle, Mail, Lock, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// Budget updated to $499
export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
    const [formData, setFormData] = useState({
        businessName: '',
        businessType: '',
        location: '',
        contactPreference: 'phone',
        phone: '',
        email: '',
        description: '',
        budget: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setIsSubmitted(false); // Reset on open
            setFormData({
                businessName: '',
                businessType: '',
                location: '',
                contactPreference: 'phone',
                phone: '',
                email: '',
                description: '',
                budget: ''
            });
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to submit form');
            }

            // Success
            // setIsSubmitted(true);
            router.push('/thankyou');
        } catch (error) {
            console.error('Submission error:', error);
            setErrorMessage('Something went wrong. Please try again or call us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200 my-auto border border-slate-100">
                <div className="flex items-center justify-end p-4 absolute top-0 right-0 z-10">
                    <button
                        onClick={onClose}
                        className="p-2 bg-white/80 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-slate-700"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {!isSubmitted ? (
                    <div className="p-8 pt-10">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-3">Want a website like this?</h2>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                You’ve just seen a demo of how your website could look.
                                Share a few quick details and we’ll guide you on the best option for your business.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Business Name</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Enter your business name"
                                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-slate-50 text-slate-900"
                                        value={formData.businessName}
                                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Business Type</label>
                                    <div className="relative">
                                        <select
                                            required
                                            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-slate-50 appearance-none text-slate-900"
                                            value={formData.businessType}
                                            onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                                        >
                                            <option value="" disabled>Select an option</option>
                                            <option value="contractor">Contractor / Home Services</option>
                                            <option value="landscaping">Landscaping</option>
                                            <option value="clinic">Clinic / Professional Services</option>
                                            <option value="local">Local Business</option>
                                            <option value="other">Other</option>
                                        </select>
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1.5">City & State</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="City, State"
                                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-slate-50 text-slate-900"
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-2">Preferred Contact Method</label>
                                <div className="grid grid-cols-3 gap-2 mb-3">
                                    {[
                                        { id: 'phone', label: 'Phone', icon: Phone },
                                        { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
                                        { id: 'email', label: 'Email', icon: Mail }
                                    ].map((method) => (
                                        <label
                                            key={method.id}
                                            className={`
                                                flex flex-col items-center justify-center p-2 rounded-lg border cursor-pointer transition-all
                                                ${formData.contactPreference === method.id
                                                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                                                    : 'border-slate-200 hover:border-blue-200 hover:bg-slate-50 text-slate-600'}
                                            `}
                                        >
                                            <input
                                                type="radio"
                                                name="contactPreference"
                                                value={method.id}
                                                className="hidden"
                                                checked={formData.contactPreference === method.id}
                                                onChange={(e) => setFormData({ ...formData, contactPreference: e.target.value })}
                                            />
                                            <method.icon className="w-4 h-4 mb-1" />
                                            <span className="text-xs font-medium">{method.label}</span>
                                        </label>
                                    ))}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Phone Number</label>
                                        <input
                                            type="tel"
                                            required
                                            placeholder="(555) 123-4567"
                                            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-slate-50 text-slate-900"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="you@company.com"
                                            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-slate-50 text-slate-900"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Tell us about your project (optional)</label>
                                <textarea
                                    placeholder="Share any details about your business needs, goals, or questions..."
                                    rows={3}
                                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-slate-50 text-slate-900 resize-none"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Budget (Optional)</label>
                                <input
                                    type="text"
                                    placeholder="e.g. $1,500 - $3,000"
                                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-slate-50 text-slate-900"
                                    value={formData.budget}
                                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                />
                            </div>

                            {errorMessage && (
                                <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100 mb-4">
                                    {errorMessage}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg text-base hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-[0.98]'}`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    '👉 Show Me My Website Options'
                                )}
                            </button>

                            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mt-3">
                                <Lock className="w-3 h-3" /> No spam. No obligation. Just clear next steps.
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="p-12 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 animate-in zoom-in duration-300">
                            <CheckCircle2 className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                        <p className="text-slate-600 mb-8 max-w-xs mx-auto">
                            Thanks for sharing your details. One of our strategy experts will be in touch shortly with options tailored to your business.
                        </p>
                        <button
                            onClick={onClose}
                            className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
                        >
                            Close Window
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
