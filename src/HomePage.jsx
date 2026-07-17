import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Leaf, Menu, X, ArrowUpRight, ShieldCheck, FlaskConical,
    BookOpenCheck, Clock, ArrowRight, Mail, Share2,
} from 'lucide-react';

// --- IMG CONSTANTS ---
const IMG = {
    hero: 'https://images.hostinger.com/9f139992-4af4-4743-b06c-514582cfe889.png',
    salmon: 'https://images.hostinger.com/ae1e8466-7cbf-40c4-95b8-c5cee219c384.png',
    berries: 'https://images.hostinger.com/5e9f90b7-56d2-4c42-abdd-fcfc56d373f4.png',
    mealprep: 'https://images.hostinger.com/7e0a8edc-f1ea-486b-9df3-e60b5de20e76.png',
    grains: 'https://images.hostinger.com/0e3915c3-92ef-4e86-b841-b5b971ce1a55.png',
    author: 'https://images.hostinger.com/a25eb6c7-3ad3-4120-8ebc-b2fa83a423bc.png',
};

// --- DATA MANUAL ASLI LU ---
const LOCAL_ARTICLES = [
    { title: 'Mitos vs Fakta Diet Rendah Karbohidrat: Tinjauan Gizi Klinis', excerpt: 'Mengupas tuntas tren pembatasan karbohidrat ekstrem dari kacamata sains...', content: 'Diet rendah karbohidrat...', cat: 'Diet & Metabolisme', read: '8 menit baca', img: IMG.grains },
    { title: 'Strategi Intervensi Gizi untuk Pencegahan Stunting pada Anak Pesisir', excerpt: 'Analisis mendalam mengenai pemanfaatan protein lokal...', content: 'Masyarakat pesisir...', cat: 'Gizi Masyarakat', read: '10 menit baca', img: IMG.salmon },
    { title: 'Panduan Menyusun Menu Isi Piringku: Porsi Tepat Tanpa Timbangan', excerpt: 'Kerangka kerja praktis dari standar Kementerian Kesehatan...', content: 'Banyak orang gagal...', cat: 'Perencanaan Makan', read: '6 menit baca', img: IMG.mealprep },
    { title: 'Dampak Konsumsi Ultra-Processed Food (UPF) Terhadap Mikrobioma Usus', excerpt: 'Bagaimana makanan cepat saji dan kemasan...', content: 'Perubahan pola konsumsi...', cat: 'Kesehatan Pencernaan', read: '9 menit baca', img: IMG.berries },
    { title: 'Efektivitas Intermittent Fasting Terhadap Sensitivitas Insulin', excerpt: 'Tinjauan klinis mengenai mekanisme pembatasan waktu makan...', content: 'Intermittent Fasting...', cat: 'Diet & Metabolisme', read: '8 menit baca', img: IMG.hero },
    { title: 'Analisis Zat Gizi Mikro pada Remaja Putri: Pencegahan Anemia Sejak Dini', excerpt: 'Mengapa pemenuhan zat besi dan vitamin C esensial...', content: 'Tingginya prevalensi...', cat: 'Gizi Masyarakat', read: '7 menit baca', img: IMG.author },
    { title: 'Peran Antioksidan Eksogen dalam Menangkal Stres Oksidatif', excerpt: 'Bagaimana radikal bebas merusak sel tubuh...', content: 'Setiap detik...', cat: 'Micronutrients', read: '9 menit baca', img: IMG.berries },
    { title: 'Bebas Gluten (Gluten-Free): Kebutuhan Medis atau Sekadar Tren Gaya Hidup?', excerpt: 'Membedakan penyakit Celiac, intoleransi gluten...', content: 'Industri makanan modern...', cat: 'Nutrisi Harian', read: '8 menit baca', img: IMG.grains },
];

const SUPABASE_URL = "https://harpdcqmrqdgckcuhxfr.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_ppzSXi7DuN7v0racT9l98A_JxK5-MGG";

const HomePage = () => {
    const [articles, setArticles] = useState(LOCAL_ARTICLES);
    const [activeArticle, setActiveArticle] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fetchDB = async () => {
            const res = await fetch(`${SUPABASE_URL}/rest/v1/rayliziie_articles?select=*&status=eq.Published`, {
                headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
            });
            if (res.ok) {
                const data = await res.json();
                const dbArticles = data.map(d => ({
                    title: d.title, excerpt: d.content.substring(0, 100) + '...', content: d.content, cat: d.category, read: '5 menit baca', img: d.image_url || IMG.hero
                }));
                setArticles([...LOCAL_ARTICLES, ...dbArticles]);
            }
        };
        fetchDB();
    }, []);

    return (
        <div className="min-h-screen bg-white text-[#1A365D]">
            {/* Header Asli Lu */}
            <header className="fixed inset-x-0 top-0 z-50 bg-white border-b border-[#1A365D]/10">
                <div className="mx-auto flex max-w-[80rem] items-center justify-between px-6 py-4">
                    <span className="font-display text-xl font-600">NutrisiDietMu</span>
                    <nav className="hidden md:flex gap-8">
                        <a href="#articles">Artikel</a><a href="#trust">Tentang Kami</a><a href="#newsletter">Kontak</a>
                    </nav>
                </div>
            </header>

            {/* Grid Artikel Hybrid (Manual + Database) */}
            <section id="articles" className="py-28 mx-auto max-w-[80rem] px-6">
                <h2 className="text-4xl font-bold mb-12">Artikel Terbaru</h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {articles.map((a, i) => (
                        <button key={i} onClick={() => setActiveArticle(a)} className="text-left border rounded-2xl p-6 hover:shadow-lg transition">
                            <img src={a.img} className="w-full h-48 object-cover rounded-lg" />
                            <h3 className="text-xl font-bold mt-4">{a.title}</h3>
                            <p className="text-sm text-gray-600 mt-2">{a.excerpt}</p>
                        </button>
                    ))}
                </div>
            </section>

            {/* Modal Detail */}
            {activeArticle && (
                <div className="fixed inset-0 z-50 bg-white p-10 overflow-y-auto">
                    <button onClick={() => setActiveArticle(null)} className="mb-6 font-bold">← Kembali</button>
                    <h1 className="text-4xl font-bold">{activeArticle.title}</h1>
                    <img src={activeArticle.img} className="w-full h-64 object-cover my-6 rounded-xl" />
                    <div className="prose max-w-none">{activeArticle.content}</div>
                </div>
            )}
        </div>
    );
};

export default HomePage;
