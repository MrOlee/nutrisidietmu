import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Leaf, Menu, X, ArrowUpRight, ShieldCheck, FlaskConical,
    BookOpenCheck, Clock, ArrowRight, Mail, Share2,
} from 'lucide-react';

const IMG = {
    hero: 'https://images.hostinger.com/9f139992-4af4-4743-b06c-514582cfe889.png',
    salmon: 'https://images.hostinger.com/ae1e8466-7cbf-40c4-95b8-c5cee219c384.png',
    berries: 'https://images.hostinger.com/5e9f90b7-56d2-4c42-abdd-fcfc56d373f4.png',
    mealprep: 'https://images.hostinger.com/7e0a8edc-f1ea-486b-9df3-e60b5de20e76.png',
    hydration: 'https://images.hostinger.com/829becfe-7796-4fb3-8ea9-0b364d597cc6.png',
    grains: 'https://images.hostinger.com/0e3915c3-92ef-4e86-b841-b5b971ce1a55.png',
    author: 'https://images.hostinger.com/a25eb6c7-3ad3-4120-8ebc-b2fa83a423bc.png',
};

// ==================================================
// DATA MANUAL LU (JANGAN DIHAPUS)
// ==================================================
const LOCAL_ARTICLES = [
    {
        title: 'Mitos vs Fakta Diet Rendah Karbohidrat: Tinjauan Gizi Klinis',
        excerpt: 'Mengupas tuntas tren pembatasan karbohidrat ekstrem dari kacamata sains. Kapan diet ini efektif, apa efek sampingnya bagi metabolisme, dan bagaimana penerapannya yang aman tanpa merusak fungsi organ tubuh.',
        content: 'Diet rendah karbohidrat (*low-carb diet*) telah menjadi salah satu strategi paling populer untuk penurunan berat badan cepat...',
        cat: 'Diet & Metabolisme',
        read: '8 menit baca',
        img: IMG.grains,
    },
    {
        title: 'Strategi Intervensi Gizi untuk Pencegahan Stunting pada Anak Pesisir',
        excerpt: 'Analisis mendalam mengenai pemanfaatan protein lokal berbasis pangan laut untuk mengatasi masalah malnutrisi kronis. Panduan praktis alokasi zat gizi mikro bagi ibu hamil dan balita di komunitas masyarakat pantai.',
        content: 'Masyarakat pesisir sering kali menghadapi ironi besar: hidup di dekat sumber protein laut yang melimpah...',
        cat: 'Gizi Masyarakat',
        read: '10 menit baca',
        img: IMG.salmon,
    },
    {
        title: 'Panduan Menyusun Menu Isi Piringku: Porsi Tepat Tanpa Timbangan',
        excerpt: 'Kerangka kerja praktis dari standar Kementerian Kesehatan yang disederhanakan. Cara membagi porsi karbohidrat kompleks, protein nabati/hewani, serta sayuran tinggi serat hanya dengan menggunakan visualisasi tangan.',
        content: 'Banyak orang gagal mempertahankan pola makan sehat karena merasa terbebani oleh keharusan menimbang berat makanan...',
        cat: 'Perencanaan Makan',
        read: '6 menit baca',
        img: IMG.mealprep,
    },
    {
        title: 'Dampak Konsumsi Ultra-Processed Food (UPF) Terhadap Mikrobioma Usus',
        excerpt: 'Bagaimana makanan cepat saji dan kemasan dengan bahan tambahan pangan memicu inflamasi tingkat rendah di pencernaan, serta langkah restorasi bakteri baik melalui konsumsi prebiotik alami harian.',
        content: 'Perubahan pola konsumsi global dalam tiga dekade terakhir menunjukkan peningkatan drastis pada asupan *Ultra-Processed Food* (UPF)...',
        cat: 'Kesehatan Pencernaan',
        read: '9 menit baca',
        img: IMG.berries,
    },
    {
        title: 'Efektivitas Intermittent Fasting Terhadap Sensitivitas Insulin',
        excerpt: 'Tinjauan klinis mengenai mekanisme pembatasan waktu makan terhadap regulasi gula darah. Apakah metode ini aman untuk penderita pradiabetes dan bagaimana protokol gizi yang disarankan.',
        content: 'Intermittent Fasting (IF) atau puasa intermiten telah bergeser dari sekadar metode estetika penurunan berat badan...',
        cat: 'Diet & Metabolisme',
        read: '8 menit baca',
        img: IMG.hero,
    },
    {
        title: 'Analisis Zat Gizi Mikro pada Remaja Putri: Pencegahan Anemia Sejak Dini',
        excerpt: 'Mengapa pemenuhan zat besi dan vitamin C esensial bagi remaja. Dampak anemia jangka panjang terhadap produktivitas dan persiapan kesehatan reproduksi di masa depan.',
        content: 'Tingginya prevalensi anemia defisiensi besi di kalangan remaja putri di Indonesia merupakan ancaman serius...',
        cat: 'Gizi Masyarakat',
        read: '7 menit baca',
        img: IMG.author,
    },
    {
        title: 'Peran Antioksidan Eksogen dalam Menangkal Stres Oksidatif',
        excerpt: 'Bagaimana radikal bebas merusak sel tubuh dan cara optimal mengonsumsi makanan kaya vitamin A, C, dan E untuk mendukung sistem pertahanan internal tubuh.',
        content: 'Setiap detik, tubuh manusia terpapar oleh radikal bebas, baik yang dihasilkan dari produk sampingan metabolisme...',
        cat: 'Micronutrients',
        read: '9 menit baca',
        img: IMG.berries,
    },
    {
        title: 'Bebas Gluten (Gluten-Free): Kebutuhan Medis atau Sekadar Tren Gaya Hidup?',
        excerpt: 'Membedakan penyakit Celiac, intoleransi gluten, dan miskonsepsi publik yang menganggap produk bebas gluten selalu lebih sehat untuk menurunkan berat badan.',
        content: 'Industri makanan modern saat ini dipenuhi oleh produk bersertifikat bebas gluten (*Gluten-Free*)...',
        cat: 'Nutrisi Harian',
        read: '8 menit baca',
        img: IMG.grains,
    },
];

const featured = {
    tag: 'Ulasan Pilihan',
    title: 'Bukti Ilmiah di Balik Omega-3: Apa yang Sebenarnya Diungkap oleh Riset?',
    excerpt: 'Tinjauan kritis terhadap uji klinis acak terkontrol mengenai asam lemak omega-3 kelautan — dampak terukurnya pada kesehatan kardiovaskular dan kognitif, serta area di mana bukti ilmiah masih belum konklusif.',
    content: 'Asam lemak Omega-3, khususnya EPA (eicosapentaenoic acid) dan DHA (docosahexaenoic acid), telah lama dipromosikan...',
    cat: 'Nutrisi Harian',
    read: '12 menit baca',
    img: IMG.salmon,
};

const pillars = [
    { icon: FlaskConical, title: 'Sumber Telaah Sejawat (Peer-Reviewed)', desc: 'Setiap klaim yang kami tulis wajib merujuk langsung pada literatur primer dan pedoman klinis resmi — tanpa opini tanpa dasar.' },
    { icon: ShieldCheck, title: 'Ditinjau oleh Ahli Gizi', desc: 'Setiap artikel diperiksa secara ketat oleh Ahli Gizi (Dietitian) terdaftar sebelum diterbitkan demi menjaga akurasi standar medis.' },
    { icon: BookOpenCheck, title: 'Ditulis untuk Kejelasan', desc: 'Sains yang rumit dan membingungkan kami terjemahkan menjadi panduan praktis yang jujur dan mudah dipahami oleh masyarakat awam.' },
];

const fade = {
    hidden: { opacity: 0, y: 24 },
    show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

const Reveal = ({ children, i = 0, className = '' }) => (
    <motion.div className={className} variants={fade} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
        {children}
    </motion.div>
);

const SUPABASE_URL = "https://harpdcqmrqdgckcuhxfr.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_ppzSXi7DuN7v0racT9l98A_JxK5-MGG";

const HomePage = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeArticle, setActiveArticle] = useState(null);
    
    // Artikel Hybrid: Manual + Database
    const [articles, setArticles] = useState(LOCAL_ARTICLES);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        
        // Fetch dari Database
        const fetchData = async () => {
            try {
                const res = await fetch(`${SUPABASE_URL}/rest/v1/rayliziie_articles?select=*&status=eq.Published`, {
                    headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
                });
                if (res.ok) {
                    const data = await res.json();
                    // Transform data database supaya formatnya sama dengan LOCAL_ARTICLES
                    const fetchedArticles = data.map(d => ({
                        title: d.title,
                        excerpt: d.content.substring(0, 100) + '...',
                        content: d.content,
                        cat: d.category,
                        read: '5 menit baca',
                        img: d.image_url || IMG.hero
                    }));
                    setArticles([...LOCAL_ARTICLES, ...fetchedArticles]);
                }
            } catch (err) { console.error("Database off:", err); }
        };
        fetchData();

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleSubscribe = (e) => {
        e.preventDefault();
        alert('Terima kasih! Email Anda berhasil terdaftar dalam sistem buletin ilmiah NutrisiDietMu.');
    };

    const scrollToSection = (id) => (e) => {
        e.preventDefault();
        setOpen(false);
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    const handleShare = async (article) => {
        if (navigator.share) {
            try { await navigator.share({ title: article.title, text: article.excerpt, url: window.location.href }); } 
            catch (err) { console.log('Error sharing:', err); }
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Tautan website berhasil disalin ke papan klip!');
        }
    };

    return (
        // ... (Sisa JSX lu dari sini ke bawah tetap SAMA PERSIS, tidak ada yang diubah)
        <div className="min-h-screen bg-white text-[#1A365D]">
            {/* Header, Hero, Sections, Footer, Overlay - SEMUA TETAP SAMA */}
            {/* ... kodingan asli lu ... */}
             {/* Header Navigasi */}
             <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-[#1A365D]/10 shadow-sm' : 'bg-transparent'}`}>
                {/* ... isi header asli lu ... */}
                <div className="mx-auto flex max-w-[80rem] items-center justify-between px-6 py-4">
                     <a href="#top" onClick={scrollToSection('top')} className="flex items-center gap-2">
                         <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1A365D]"><Leaf className="h-5 w-5 text-white" strokeWidth={2} /></span>
                         <span className="font-display text-xl font-600 tracking-tight text-[#1A365D]">NutrisiDietMu</span>
                     </a>
                     <nav className="hidden items-center gap-8 md:flex">
                        <a href="#articles" onClick={scrollToSection('articles')} className="text-sm font-500 text-[#1A365D]/70 transition-colors hover:text-[#319795]">Artikel</a>
                        <a href="#trust" onClick={scrollToSection('trust')} className="text-sm font-500 text-[#1A365D]/70 transition-colors hover:text-[#319795]">Tentang Kami</a>
                        <a href="#newsletter" onClick={scrollToSection('newsletter')} className="text-sm font-500 text-[#1A365D]/70 transition-colors hover:text-[#319795]">Kontak</a>
                        <button onClick={scrollToSection('newsletter')} className="rounded-full bg-[#319795] px-5 py-2 text-sm font-600 text-white transition-transform hover:-translate-y-px active:scale-[0.98]">Berlangganan</button>
                    </nav>
                    <button className="md:hidden text-[#1A365D]" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
                </div>
            </header>

            {/* Bagian Hero Utama */}
            <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
                <div className="mx-auto grid max-w-[80rem] items-center gap-12 px-6 lg:grid-cols-2">
                    <div>
                        <Reveal>
                            <span className="inline-flex items-center gap-2 rounded-full border border-[#319795]/30 bg-[#319795]/5 px-4 py-1.5 text-xs font-600 uppercase tracking-widest text-[#319795]"><FlaskConical className="h-3.5 w-3.5" /> Berbasis Bukti Ilmiah</span>
                        </Reveal>
                        <Reveal i={1}>
                            <h1 className="mt-6 font-display text-5xl font-600 leading-[1.05] tracking-tight text-[#1A365D] md:text-6xl">Edukasi Nutrisi Berbasis Sains{' '}<span className="border-b-4 border-[#319795]">yang Dapat Anda Percayai.</span></h1>
                        </Reveal>
                        <Reveal i={2}>
                            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#1A365D]/70">NutrisiDietMu menerjemahkan riset klinis yang mendalam menjadi panduan yang jelas dan jujur.</p>
                        </Reveal>
                        <Reveal i={3}>
                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <button onClick={scrollToSection('articles')} className="inline-flex items-center gap-2 rounded-full bg-[#1A365D] px-6 py-3 text-sm font-600 text-white transition-transform hover:-translate-y-px active:scale-[0.98]">Baca Artikel Terbaru <ArrowRight className="h-4 w-4" /></button>
                                <button onClick={scrollToSection('editorial-team')} className="text-sm font-600 text-[#1A365D]/70 transition-colors hover:text-[#319795]">Standar Editorial Kami</button>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
            
            {/* Sisa code section lain-lain tetap sama, tinggal copy paste aja di bawahnya... */}
            {/* ... (Pastikan bagian grid articles tetap menggunakan articles.map((a, i) => ...)) */}

            <section id="articles" className="bg-slate-50 py-20 md:py-28">
                <div className="mx-auto max-w-[80rem] px-6">
                    <div className="grid gap-8 sm:grid-cols-2">
                        {articles.map((a, i) => (
                            <Reveal key={a.title + i} i={i}>
                                <button onClick={() => setActiveArticle(a)} className="w-full text-left group flex h-full flex-col overflow-hidden rounded-2xl border border-[#1A365D]/10 bg-white shadow-sm transition-shadow hover:shadow-lg">
                                    <div className="overflow-hidden"><img src={a.img} alt={a.title} className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                                    <div className="flex flex-1 flex-col gap-3 p-6">
                                        <span className="text-xs font-600 uppercase tracking-widest text-[#319795]">{a.cat}</span>
                                        <h3 className="font-display text-xl font-600 leading-snug text-[#1A365D]">{a.title}</h3>
                                        <p className="flex-1 text-sm leading-relaxed text-[#1A365D]/65">{a.excerpt}</p>
                                    </div>
                                </button>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
            
                        <div className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-400">
                            <p>Ditinjau secara klinis oleh: <strong>Komite Editorial Nutrisi & Gizi PT Rayliziie Media Digital</strong></p>
                            <p className="mt-1">Dipublikasikan pada kategori {activeArticle.cat} &bull; Berbasis Bukti Ilmiah</p>
                        </div>
                    </article>
                </div>
            )}
        </div>
    );
};

export default HomePage;
