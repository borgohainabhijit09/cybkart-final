'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Clock,
    ChevronRight,
    BookOpen,
    Brain,
    Globe,
    Zap,
    TrendingUp,
    Search
} from 'lucide-react';
import type { BlogPostMetadata } from '@/lib/blog';

// Icon mapping for categories
const categoryIcons: { [key: string]: any } = {
    'AI Automation': Brain,
    'Business Systems': BookOpen,
    'AI Integration': Brain,
    'Performance': Zap,
    'E-Commerce': Globe,
    'Case Study': TrendingUp,
    'Security': Search,
    'Web Architecture': Globe,
    'Growth Strategy': TrendingUp,
    'default': BookOpen
};

const categoryColors: { [key: string]: string } = {
    'AI Automation': 'text-purple-600',
    'Business Systems': 'text-slate-600',
    'AI Integration': 'text-purple-600',
    'Performance': 'text-yellow-600',
    'E-Commerce': 'text-indigo-600',
    'Case Study': 'text-green-600',
    'Security': 'text-red-500',
    'Web Architecture': 'text-blue-600',
    'Growth Strategy': 'text-emerald-600',
    'default': 'text-slate-600'
};

interface BlogListingProps {
    allPosts: BlogPostMetadata[];
    categories: string[];
}

export default function BlogListing({ allPosts, categories }: BlogListingProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [filteredPosts, setFilteredPosts] = useState(allPosts);

    // Filter posts when category changes
    useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredPosts(allPosts);
        } else {
            setFilteredPosts(allPosts.filter(post => post.category === selectedCategory));
        }
    }, [selectedCategory, allPosts]);

    // Get featured post (most recent from filtered posts)
    const featuredPost = filteredPosts[0];

    // Get trending posts (next 2 most recent from filtered posts)
    const trendingPosts = filteredPosts.slice(1, 3);

    // Get remaining posts for grid
    const gridPosts = filteredPosts.slice(3);

    return (
        <>
            {/* FEATURED SECTION */}
            <section className="py-16 bg-white border-b border-slate-100">
                <div className="container mx-auto px-6">
                    {/* Category Filter Buttons */}
                    <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-3 scrollbar-hide">
                        <button
                            onClick={() => setSelectedCategory('All')}
                            className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold transition-all ${
                                selectedCategory === 'All'
                                    ? 'bg-slate-900 text-white shadow-md'
                                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700'
                            }`}
                        >
                            All ({allPosts.length})
                        </button>
                        {categories.map((cat, i) => {
                            const count = allPosts.filter(post => post.category === cat).length;
                            return (
                                <button
                                    key={i}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold transition-all ${
                                        selectedCategory === cat
                                            ? 'bg-slate-900 text-white shadow-md'
                                            : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700'
                                    }`}
                                >
                                    {cat} ({count})
                                </button>
                            );
                        })}
                    </div>

                    {filteredPosts.length === 0 ? (
                        <div className="text-center py-16">
                            <p className="text-slate-600 text-lg">No posts found in this category.</p>
                        </div>
                    ) : (
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Main Featured */}
                            {featuredPost && (
                                <Link href={`/knowledge-hub/${featuredPost.slug}`} className="lg:col-span-2 group cursor-pointer">
                                    <div className="relative h-[240px] sm:h-[320px] rounded-2xl overflow-hidden mb-6">
                                        <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-90 transition-opacity group-hover:opacity-100"></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 p-8">
                                            <div className="inline-flex items-center gap-2 text-blue-200 text-xs font-bold uppercase tracking-wider mb-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                                {featuredPost.category}
                                            </div>
                                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:underline decoration-blue-400 decoration-2 underline-offset-4">
                                                {featuredPost.title}
                                            </h2>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-4">
                                        {featuredPost.excerpt}
                                    </p>
                                    <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                                        <Clock className="w-4 h-4" /> {featuredPost.readTime}
                                    </div>
                                </Link>
                            )}

                            {/* Trending Side */}
                            <div className="space-y-8">
                                <div className="font-bold text-slate-400 text-xs uppercase tracking-[0.2em] border-b border-slate-100 pb-3 mb-2">Trending Now</div>
                                {trendingPosts.map((article, i) => (
                                    <Link key={i} href={`/knowledge-hub/${article.slug}`} className="block group cursor-pointer">
                                        <div className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-widest">{article.category}</div>
                                        <h3 className="font-extrabold text-slate-900 text-lg mb-2 leading-snug group-hover:text-blue-600 transition-colors tracking-tight">
                                            {article.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                                            <Clock className="w-3 h-3" /> {article.readTime}
                                        </div>
                                    </Link>
                                ))}

                                <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                                    <h3 className="font-extrabold text-white mb-2 tracking-tight">Subscribe to The System</h3>
                                    <p className="text-sm text-slate-400 font-medium mb-4">Get one high-impact automation tactic every Tuesday.</p>
                                    <div className="flex gap-2">
                                        <input type="email" placeholder="Email address" className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 transition-all" />
                                        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors flex-shrink-0">→</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* GRID */}
            {gridPosts.length > 0 && (
                <section className="py-24 bg-slate-50 border-t border-slate-100">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                            {gridPosts.map((article, i) => {
                                const Icon = categoryIcons[article.category] || categoryIcons.default;
                                const color = categoryColors[article.category] || categoryColors.default;
                                return (
                                    <Link
                                        key={i}
                                        href={`/knowledge-hub/${article.slug}`}
                                        className="group bg-white p-8 rounded-3xl border border-slate-200/80 hover:border-blue-200/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-400 cursor-pointer flex flex-col"
                                    >
                                        <div className="flex items-center justify-between mb-7">
                                            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-50 group-hover:scale-110 transition-all">
                                                <Icon className={`w-5 h-5 ${color}`} />
                                            </div>
                                            <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full uppercase tracking-widest">
                                                {article.category}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-extrabold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors tracking-tight flex-1">
                                            {article.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm mb-6 line-clamp-3 font-medium leading-relaxed">
                                            {article.excerpt}
                                        </p>

                                        <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mt-auto">
                                            <Clock className="w-3 h-3" /> {article.readTime}
                                            <span className="ml-auto flex items-center gap-1 text-slate-900 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                                                Read Article <ChevronRight className="w-3 h-3" />
                                            </span>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>

                        {selectedCategory !== 'All' && filteredPosts.length > 0 && (
                            <div className="mt-16 text-center">
                                <button
                                    onClick={() => setSelectedCategory('All')}
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-colors shadow-md"
                                >
                                    View All Articles
                                </button>
                            </div>
                        )}
                    </div>
                </section>
            )}
        </>
    );
}
