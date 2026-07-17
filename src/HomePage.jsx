import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Menu, X, ArrowUpRight, ShieldCheck, FlaskConical, BookOpenCheck, Clock, ArrowRight, Mail, Share2 } from 'lucide-react';

const IMG = {
    hero: 'https://images.hostinger.com/9f139992-4af4-4743-b06c-514582cfe889.png',
};

const SUPABASE_URL = "https://harpdcqmrqdgckcuhxfr.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_ppzSXi7DuN7v0racT9l98A_JxK5-MGG";

const HomePage = () => {
    const [articles, setArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fetchAll = async () => {
            const res = await fetch(`${SUPABASE_URL}/rest/v1/rayliziie_articles?select=*&status=eq.Published`, {
                headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
            });
            if (res.ok) {
                const data = await res.json();
                setArticles(data.map(d => ({
                    title: d.title,
                    excerpt: d.content.substring(0, 100) + '...',
                    content: d.content,
                    cat: d.category,
                    read: '5 menit baca',
                    img: d.image_url || IMG.hero
                })));
            }
        };
        fetchAll();
    }, []);

    return (
        <div className="min-h-screen bg-white text-[#1A365D]">
            {/* Header, Hero, Trust Sections Tetap Sama */}
            
            <section id="articles" className="py-20 bg-slate-50">
                <div className="mx-auto max-w-[80rem] px-6">
                    <h2 className="text-4xl font-bold mb-12">Artikel Terbaru</h2>
                    <div className="grid gap-8 sm:grid-cols-2">
                        {articles.map((a, i) => (
                            <button key={i} onClick={() => setActiveArticle(a)} className="w-full text-left bg-white p-6 rounded-2xl border hover:shadow-xl transition">
                                <img src={a.img} className="w-full h-48 object-cover rounded-lg" alt={a.title} />
                                <h3 className="text-xl font-bold mt-4">{a.title}</h3>
                                <p className="text-sm text-gray-600 mt-2">{a.excerpt}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {activeArticle && (
                <div className="fixed inset-0 z-50 bg-white p-10 overflow-y-auto">
                    <button onClick={() => setActiveArticle(null)} className="mb-6 font-bold underline">← Kembali ke Beranda</button>
                    <h1 className="text-4xl font-bold mb-6">{activeArticle.title}</h1>
                    <img src={activeArticle.img} className="max-h-96 w-full object-cover mb-6 rounded-xl" />
                    <div className="prose max-w-none">{activeArticle.content}</div>
                </div>
            )}
        </div>
    );
};

export default HomePage;
