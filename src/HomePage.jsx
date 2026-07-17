import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Leaf, Menu, X, ArrowUpRight, ShieldCheck, FlaskConical,
    BookOpenCheck, Clock, ArrowRight, Mail, Share2,
} from 'lucide-react';

// ==========================================
// KONEKSI SUPABASE (JANGAN DIGANTI)
// ==========================================
const SUPABASE_URL = "https://harpdcqmrqdgckcuhxfr.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_ppzSXi7DuN7v0racT9l98A_JxK5-MGG";
const headers = {
    'apikey': SUPABASE_ANON_KEY,
    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
    'Content-Type': 'application/json'
};

const IMG = {
    hero: 'https://images.hostinger.com/9f139992-4af4-4743-b06c-514582cfe889.png',
    salmon: 'https://images.hostinger.com/ae1e8466-7cbf-40c4-95b8-c5cee219c384.png',
    berries: 'https://images.hostinger.com/5e9f90b7-56d2-4c42-abdd-fcfc56d373f4.png',
    mealprep: 'https://images.hostinger.com/7e0a8edc-f1ea-486b-9df3-e60b5de20e76.png',
    hydration: 'https://images.hostinger.com/829becfe-7796-4fb3-8ea9-0b364d597cc6.png',
    grains: 'https://images.hostinger.com/0e3915c3-92ef-4e86-b841-b5b971ce1a55.png',
    author: 'https://images.hostinger.com/a25eb6c7-3ad3-4120-8ebc-b2fa83a423bc.png',
};

// Artikel Manual Lu (Tetap Ada)
const LOCAL_ARTICLES = [
    { title: 'Mitos vs Fakta Diet Rendah Karbohidrat...', excerpt: 'Mengupas tuntas...', content: '...', cat: 'Diet & Metabolisme', read: '8 menit baca', img: IMG.grains },
    { title: 'Strategi Intervensi Gizi untuk Pencegahan Stunting...', excerpt: 'Analisis mendalam...', content: '...', cat: 'Gizi Masyarakat', read: '10 menit baca', img: IMG.salmon },
    // ... isi sisa artikel lu yang lain di sini
];

const App = () => {
    const [articles, setArticles] = useState(LOCAL_ARTICLES);
    const [activeArticle, setActiveArticle] = useState(null);
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Narik data dari Supabase secara Hybrid
    useEffect(() => {
        const fetchSupabase = async () => {
            try {
                const res = await fetch(`${SUPABASE_URL}/rest/v1/rayliziie_articles?select=*&status=eq.Published`, { headers });
                if (res.ok) {
                    const dbData = await res.json();
                    // Gabungin data manual + database
                    setArticles([...LOCAL_ARTICLES, ...dbData.map(a => ({
                        title: a.title,
                        cat: a.category,
                        excerpt: a.content.substring(0, 100) + '...',
                        content: a.content,
                        img: a.image_url || IMG.hero, // Pakai gambar dari DB atau default
                        read: '5 menit baca'
                    }))]);
                }
            } catch (err) { console.error(err); }
        };
        fetchSupabase();
    }, []);

    // ... (Sisa struktur JSX lu dari <div className="min-h-screen..."> sampai akhir)
    // PENTING: Gunakan map(articles) untuk nampilin daftar artikel di grid lu
    // ...
    
    return (
        <div className="min-h-screen bg-white text-[#1A365D]">
            {/* Header, Hero, dll sama persis kayak kode lu */}
            
            {/* Grid Artikel Terbaru */}
            <section id="articles" className="bg-slate-50 py-20 md:py-28">
                <div className="mx-auto max-w-[80rem] px-6">
                    <div className="grid gap-8 sm:grid-cols-2">
                        {articles.map((a, i) => (
                            <button key={i} onClick={() => setActiveArticle(a)} className="w-full text-left group flex h-full flex-col overflow-hidden rounded-2xl border border-[#1A365D]/10 bg-white shadow-sm transition-shadow hover:shadow-lg">
                                <img src={a.img} className="aspect-[16/10] w-full object-cover" />
                                <div className="p-6">
                                    <h3 className="font-display text-xl font-600 text-[#1A365D]">{a.title}</h3>
                                    <p className="text-sm text-[#1A365D]/65 mt-2">{a.excerpt}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default App;
