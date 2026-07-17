import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Leaf, Menu, X, ArrowUpRight, ShieldCheck, FlaskConical,
    BookOpenCheck, Clock, ArrowRight, Mail,
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

const NAV = [
    { label: 'Artikel', href: '#articles' },
    { label: 'Tentang Kami', href: '#trust' },
    { label: 'Kontak', href: '#newsletter' },
];

const featured = {
    tag: 'Ulasan Pilihan',
    title: 'Bukti Ilmiah di Balik Omega-3: Apa yang Sebenarnya Diungkap oleh Riset?',
    excerpt:
        'Tinjauan kritis terhadap uji klinis acak terkontrol mengenai asam lemak omega-3 kelautan — dampak terukurnya pada kesehatan kardiovaskular dan kognitif, serta area di mana bukti ilmiah masih belum konklusif.',
    read: '12 menit baca',
    date: 'Maret 2026',
    img: IMG.salmon,
};

const articles = [
    {
        title: 'Mitos vs Fakta Diet Rendah Karbohidrat: Tinjauan Gizi Klinis',
        excerpt: 'Mengupas tuntas tren pembatasan karbohidrat ekstrem dari kacamata sains. Kapan diet ini efektif, apa efek sampingnya bagi metabolisme, dan bagaimana penerapannya yang aman tanpa merusak fungsi organ tubuh.',
        content: 'Diet rendah karbohidrat kini menjadi salah satu tren paling populer di dunia kesehatan. Namun, dari sudut pandang gizi klinis, pembatasan ekstrem sering kali membawa dampak yang tidak terduga pada metabolisme tubuh. Karbohidrat adalah sumber energi utama bagi otak dan otot. Ketika asupannya dipotong secara radikal, tubuh dipaksa masuk ke dalam kondisi ketosis, di mana lemak digunakan sebagai bahan bakar utama.\n\nMeskipun efektif untuk penurunan berat badan jangka pendek, diet rendah karbohidrat yang tidak diawasi dapat memicu kelelahan kronis, kabut otak (brain fog), hingga ketidakseimbangan elektrolit. Penerapan yang aman harus tetap mengutamakan karbohidrat kompleks berserat tinggi (seperti beras merah atau oat) dalam porsi yang disesuaikan, bukan menghilangkannya sama sekali demi menjaga kinerja organ dalam tetap optimal.',
        cat: 'Diet & Metabolisme',
        read: '8 menit baca',
        img: IMG.grains,
    },
    {
        title: 'Strategi Intervensi Gizi untuk Pencegahan Stunting pada Anak Pesisir',
        excerpt: 'Analisis mendalam mengenai pemanfaatan protein lokal berbasis pangan laut untuk mengatasi masalah malnutrisi kronis. Panduan praktis alokasi zat gizi mikro bagi ibu hamil dan balita di komunitas masyarakat pantai.',
        content: 'Masyarakat pesisir sering kali menghadapi ironi besar: hidup di dekat sumber protein laut yang melimpah, namun tingkat stunting pada anak-anak tetap tinggi. Masalah ini umumnya berakar dari pola asuh gizi, akses air bersih, dan distribusi hasil tangkapan laut yang lebih mengutamakan nilai ekonomi daripada konsumsi domestik.\n\nStrategi intervensi gizi yang efektif di wilayah pantai harus difokuskan pada optimalisasi pangan lokal. Ikan kembung, lomek, dan kerang lokal memiliki kandungan omega-3, zink, dan protein hewani yang tidak kalah bersaing dengan ikan impor seperti salmon. Edukasi bagi ibu hamil mengenai pentingnya pemenuhan gizi mikro pada 1000 Hari Pertama Kehidupan (HPK) menggunakan bahan makanan berbasis laut setempat merupakan kunci utama memutus rantai malnutrisi kronis ini.',
        cat: 'Gizi Masyarakat',
        read: '10 menit baca',
        img: IMG.salmon,
    },
    {
        title: 'Panduan Menyusun Menu Isi Piringku: Porsi Tepat Tanpa Timbangan',
        excerpt: 'Kerangka kerja praktis dari standar Kementerian Kesehatan yang disederhanakan. Cara membagi porsi karbohidrat kompleks, protein nabati/hewani, serta sayuran tinggi serat hanya dengan menggunakan visualisasi tangan.',
        content: 'Menjaga pola makan sehat sering kali dianggap merepotkan karena harus menimbang makanan. Padahal, Kementerian Kesehatan RI telah menyediakan panduan praktis lewat kampanye "Isi Piringku". Kita bisa menggunakan metode visualisasi tangan sebagai pengganti timbangan.\n\nDalam satu piring makan, bagilah menjadi dua bagian utama. Sepertiga dari setengah piring diisi oleh lauk-pauk sumber protein (nabati maupun hewani), dan dua pertiganya diisi oleh makanan pokok sumber karbohidrat. Setengah piring sisanya dialokasikan untuk sayuran (dua pertiga bagian) dan buah-buahan (sepertiga bagian). Dengan visualisasi ini, Anda tetap bisa memenuhi kebutuhan serat, vitamin, dan makronutrien harian secara seimbang tanpa stres.',
        cat: 'Perencanaan Makan',
        read: '6 menit baca',
        img: IMG.mealprep,
    },
    {
        title: 'Dampak Konsumsi Ultra-Processed Food (UPF) Terhadap Mikrobioma Usus',
        excerpt: 'Bagaimana makanan cepat saji dan kemasan dengan bahan tambahan pangan memicu inflamasi tingkat rendah di pencernaan, serta langkah restorasi bakteri baik melalui konsumsi prebiotik alami harian.',
        content: 'Makanan ultra-proses (Ultra-Processed Food/UPF) seperti mi instan, sosis, dan minuman kemasan manis telah mendominasi pola makan modern. Sayangnya, makanan ini mengandung zat aditif, emulsifier, dan pemanis buatan yang dapat merusak keseimbangan ekosistem bakteri baik di dalam usus kita.\n\nKerusakan mikrobioma usus akibat UPF memicu kondisi dysbiosis, yang memicu inflamasi tingkat rendah (low-grade inflammation) dan berkaitan erat dengan risiko obesitas serta gangguan pencernaan kronis. Untuk merestorasi kembali kesehatan pencernaan, sangat penting membatasi konsumsi UPF dan mulai meningkatkan asupan prebiotik alami seperti pisang, bawang putih, tempe, serta sayuran berdaun hijau guna memberi makan bakteri baik tubuh.',
        cat: 'Kesehatan Pencernaan',
        read: '9 menit baca',
        img: IMG.berries,
    },
];

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
    <motion.div
        className={className}
        variants={fade}
        custom={i}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
    >
        {children}
    </motion.div>
);

const HomePage = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeArticle, setActiveArticle] = useState(null); // State untuk artikel aktif

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white text-[#1A365D]">
            {/* Header Navigasi */}
            <header
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                    scrolled ? 'bg-white/90 backdrop-blur-md border-b border-[#1A365D]/10 shadow-sm' : 'bg-transparent'
                }`}
            >
                <div className="mx-auto flex max-w-[80rem] items-center justify-between px-6 py-4">
                    <a href="#top" className="flex items-center gap-2">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1A365D]">
                            <Leaf className="h-5 w-5 text-white" strokeWidth={2} />
                        </span>
                        <span className="font-display text-xl font-600 tracking-tight text-[#1A365D]">
                            NutrisiDietMu
                        </span>
                    </a>
                    <nav className="hidden items-center gap-8 md:flex">
                        {NAV.map((n) => (
                            <a key={n.label} href={n.href} className="text-sm font-500 text-[#1A365D]/70 transition-colors hover:text-[#319795]">
                                {n.label}
                            </a>
                        ))}
                        <a href="#newsletter" className="rounded-full bg-[#319795] px-5 py-2 text-sm font-600 text-white transition-transform hover:-translate-y-px active:scale-[0.98]">
                            Berlangganan
                        </a>
                    </nav>
                    <button className="md:hidden text-[#1A365D]" onClick={() => setOpen(!open)} aria-label="Menu">
                        {open ? <X /> : <Menu />}
                    </button>
                </div>
                {open && (
                    <div className="border-t border-[#1A365D]/10 bg-white px-6 py-4 md:hidden">
                        {NAV.map((n) => (
                            <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="block py-2.5 text-sm font-500 text-[#1A365D]/80">
                                {n.label}
                            </a>
                        ))}
                        <a href="#newsletter" onClick={() => setOpen(false)} className="mt-2 block rounded-full bg-[#319795] px-5 py-2.5 text-center text-sm font-600 text-white">
                            Berlangganan
                        </a>
                    </div>
                )}
            </header>

            {/* Bagian Hero Utama */}
            <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
                <div className="mx-auto grid max-w-[80rem] items-center gap-12 px-6 lg:grid-cols-2">
                    <div>
                        <Reveal>
                            <span className="inline-flex items-center gap-2 rounded-full border border-[#319795]/30 bg-[#319795]/5 px-4 py-1.5 text-xs font-600 uppercase tracking-widest text-[#319795]">
                                <FlaskConical className="h-3.5 w-3.5" /> Berbasis Bukti Ilmiah
                            </span>
                        </Reveal>
                        <Reveal i={1}>
                            <h1 className="mt-6 font-display text-5xl font-600 leading-[1.05] tracking-tight text-[#1A365D] md:text-6xl">
                                Edukasi Nutrisi Berbasis Sains{' '}
                                <span className="border-b-4 border-[#319795]">yang Dapat Anda Percayai.</span>
                            </h1>
                        </Reveal>
                        <Reveal i={2}>
                            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#1A365D]/70">
                                NutrisiDietMu menerjemahkan riset klinis yang mendalam menjadi panduan yang jelas dan jujur.
                                Kami membantu pembaca awam maupun profesional kesehatan mengambil keputusan yang tepat seputar makanan.
                            </p>
                        </Reveal>
                        <Reveal i={3}>
                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <a href="#articles" className="inline-flex items-center gap-2 rounded-full bg-[#1A365D] px-6 py-3 text-sm font-600 text-white transition-transform hover:-translate-y-px active:scale-[0.98]">
                                    Baca Artikel Terbaru <ArrowRight className="h-4 w-4" />
                                </a>
                                <a href="#trust" className="text-sm font-600 text-[#1A365D]/70 transition-colors hover:text-[#319795]">
                                    Standar Editorial Kami
                                </a>
                            </div>
                        </Reveal>
                    </div>
                    <Reveal i={2}>
                        <div className="relative">
                            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-[#1A365D]/10 ring-1 ring-[#1A365D]/5">
                                <img src={IMG.hero} alt="Sayuran segar dan kacang-kacangan di atas meja marmer" className="aspect-[3/2] w-full object-cover" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-5 shadow-xl ring-1 ring-[#1A365D]/5 sm:block">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#319795]/10">
                                        <ShieldCheck className="h-5 w-5 text-[#319795]" />
                                    </span>
                                    <div>
                                        <p className="font-display text-lg font-600 text-[#1A365D]">100%</p>
                                        <p className="text-xs text-[#1A365D]/60">Ditinjau Ahli Gizi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Tiga Pilar Kredibilitas */}
            <section id="trust" className="border-y border-[#1A365D]/10 bg-slate-50">
                <div className="mx-auto grid max-w-[80rem] gap-8 px-6 py-16 md:grid-cols-3">
                    {pillars.map((p, i) => (
                        <Reveal key={p.title} i={i}>
                            <div className="flex flex-col gap-3">
                                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-[#1A365D]/5">
                                    <p.icon className="h-6 w-6 text-[#319795]" strokeWidth={1.8} />
                                </span>
                                <h3 className="font-display text-xl font-600 text-[#1A365D]">{p.title}</h3>
                                <p className="text-sm leading-relaxed text-[#1A365D]/65">{p.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Artikel Pilihan Editor */}
            <section className="mx-auto max-w-[80rem] px-6 py-20 md:py-28">
                <Reveal>
                    <div className="mb-10 flex items-end justify-between">
                        <h2 className="font-display text-3xl font-600 tracking-tight text-[#1A365D] md:text-4xl">Pilihan Editor</h2>
                    </div>
                </Reveal>
                <Reveal i={1}>
                    <button 
                        onClick={() => setActiveArticle(featured)}
                        className="w-full text-left group grid overflow-hidden rounded-3xl border border-[#1A365D]/10 bg-white shadow-sm transition-shadow hover:shadow-xl md:grid-cols-2"
                    >
                        <div className="overflow-hidden">
                            <img src={featured.img} alt="Makanan kaya Omega-3 di atas piring" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 md:aspect-auto aspect-[4/3]" />
                        </div>
                        <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
                            <span className="text-xs font-600 uppercase tracking-widest text-[#319795]">{featured.tag}</span>
                            <h3 className="font-display text-2xl font-600 leading-snug text-[#1A365D] md:text-3xl">{featured.title}</h3>
                            <p className="leading-relaxed text-[#1A365D]/65">{featured.excerpt}</p>
                            <div className="mt-2 flex items-center gap-4 text-sm text-[#1A365D]/50">
                                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {featured.read}</span>
                                <span>{featured.date}</span>
                            </div>
                            <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-600 text-[#1A365D] transition-colors group-hover:text-[#319795]">
                                Baca Ulasan Lengkap <ArrowUpRight className="h-4 w-4" />
                            </span>
                        </div>
                    </button>
                </Reveal>
            </section>

            {/* Grid Artikel Terbaru */}
            <section id="articles" className="bg-slate-50 py-20 md:py-28">
                <div className="mx-auto max-w-[80rem] px-6">
                    <Reveal>
                        <div className="mb-12 max-w-2xl">
                            <span className="text-xs font-600 uppercase tracking-widest text-[#319795]">Pustaka Ilmiah</span>
                            <h2 className="mt-3 font-display text-3xl font-600 tracking-tight text-[#1A365D] md:text-4xl">Artikel Terbaru</h2>
                            <p className="mt-3 text-[#1A365D]/65">Tulisan berbasis bukti ilmiah yang mencakup ilmu nutrisi, perencanaan pola makan, dan kesehatan harian Anda.</p>
                        </div>
                    </Reveal>
                    <div className="grid gap-8 sm:grid-cols-2">
                        {articles.map((a, i) => (
                            <Reveal key={a.title} i={i}>
                                <button 
                                    onClick={() => setActiveArticle(a)}
                                    className="w-full text-left group flex h-full flex-col overflow-hidden rounded-2xl border border-[#1A365D]/10 bg-white shadow-sm transition-shadow hover:shadow-lg"
                                >
                                    <div className="overflow-hidden">
                                        <img src={a.img} alt={a.title} className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    </div>
                                    <div className="flex flex-1 flex-col gap-3 p-6">
                                        <span className="text-xs font-600 uppercase tracking-widest text-[#319795]">{a.cat}</span>
                                        <h3 className="font-display text-xl font-600 leading-snug text-[#1A365D]">{a.title}</h3>
                                        <p className="flex-1 text-sm leading-relaxed text-[#1A365D]/65">{a.excerpt}</p>
                                        <div className="flex items-center gap-1.5 pt-1 text-xs text-[#1A365D]/50">
                                            <Clock className="h-3.5 w-3.5" /> {a.read}
                                        </div>
                                    </div>
                                </button>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bagian Komitmen Komite Editorial */}
            <section className="mx-auto max-w-[80rem] px-6 py-20 md:py-28">
                <Reveal>
                    <div className="grid items-center gap-10 rounded-3xl border border-[#1A365D]/10 bg-white p-8 shadow-sm md:grid-cols-[auto_1fr] md:p-12">
                        <img src={IMG.author} alt="Direktur Editorial NutrisiDietMu" className="h-28 w-28 rounded-2xl object-cover ring-1 ring-[#1A365D]/10 md:h-40 md:w-40" />
                        <div>
                            <span className="text-xs font-600 uppercase tracking-widest text-[#319795]">Standar Editorial Kami</span>
                            <blockquote className="mt-3 font-display text-xl font-500 leading-relaxed text-[#1A365D] md:text-2xl">
                                &ldquo;Kami hanya mempublikasikan apa yang didukung oleh pembuktian sains yang kuat. Jika bukti ilmiah di lapangan masih belum pasti, kami akan mengatakannya secara jujur — karena kepercayaan dibangun atas dasar kejujuran fakta, bukan sekadar sensasi pemasaran.&rdquo;
                            </blockquote>
                            <p className="mt-4 text-sm font-600 text-[#1A365D]">Komite Editorial Nutrisi & Gizi &middot; PT Rayliziie Media Digital</p>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* Form Buletin Berita / Newsletter */}
            <section id="newsletter" className="bg-[#1A365D] py-20 md:py-24">
                <div className="mx-auto max-w-2xl px-6 text-center">
                    <Reveal>
                        <h2 className="font-display text-3xl font-600 tracking-tight text-white md:text-4xl">
                            Intisari Sains Nutrisi Langsung di Email Anda
                        </h2>
                        <p className="mt-4 text-white/70">
                            Satu email edukatif berbasis bukti ilmiah setiap minggu. Tanpa tren diet ekstrem, tanpa penyebaran rasa takut — murni edukasi yang jelas.
                        </p>
                        <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                            <div className="relative flex-1">
                                <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#1A365D]/40" />
                                <input
                                    type="email"
                                    required
                                    placeholder="masukkan@email.com"
                                    className="w-full rounded-full border border-white/10 bg-white py-3 pl-11 pr-4 text-sm text-[#1A365D] outline-none ring-[#319795]/40 focus:ring-2"
                                />
                            </div>
                            <button className="rounded-full bg-[#319795] px-6 py-3 text-sm font-600 text-white transition-transform hover:-translate-y-px active:scale-[0.98]">
                                Berlangganan
                            </button>
                        </form>
                        <p className="mt-3 text-xs text-white/40">Anda dapat berhenti berlangganan kapan saja. Kami menjaga privasi data Anda.</p>
                    </Reveal>
                </div>
            </section>

            {/* Kaki Halaman / Footer Resmi Perusahaan */}
            <footer className="border-t border-[#1A365D]/10 bg-white">
                <div className="mx-auto max-w-[80rem] px-6 py-14">
                    <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1A365D]">
                                    <Leaf className="h-4 w-4 text-white" />
                                </span>
                                <span className="font-display text-lg font-600 text-[#1A365D]">NutrisiDietMu</span>
                            </div>
                            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#1A365D]/60">
                                Jurnalisme nutrisi berbasis sains yang ditinjau oleh ahli gizi terdaftar dan berakar kuat pada riset ilmiah berskala klinis.
                            </p>
                        </div>
                        <div>
                            <p className="text-xs font-600 uppercase tracking-widest text-[#1A365D]/40">Jelajahi</p>
                            <ul className="mt-4 space-y-2.5 text-sm text-[#1A365D]/65">
                                {NAV.map((n) => <li key={n.label}><a href={n.href} className="hover:text-[#319795]">{n.label}</a></li>)}
                            </ul>
                        </div>
                        <div>
                            <p className="text-xs font-600 uppercase tracking-widest text-[#1A365D]/40">Korporasi</p>
                            <ul className="mt-4 space-y-2.5 text-sm text-[#1A365D]/65">
                                <li><a href="#trust" className="hover:text-[#319795]">Kebijakan Editorial</a></li>
                                <li><a href="#newsletter" className="hover:text-[#319795]">Hubungan Media</a></li>
                                <li><a href="#top" className="hover:text-[#319795]">Privasi & Hukum</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 rounded-xl border border-[#1A365D]/10 bg-slate-50 p-5">
                        <p className="text-xs leading-relaxed text-[#1A365D]/55">
                            <strong className="text-[#1A365D]/70">Sanggahan Medis (Medical Disclaimer):</strong> Seluruh konten yang diterbitkan pada NutrisiDietMu disediakan murni hanya untuk tujuan informasi dan edukasi umum, serta tidak dapat digunakan sebagai pengganti saran medis profesional, diagnosis, atau perawatan klinis dari dokter. Selalu berkonsultasi dengan dokter spesialis atau ahli gizi terdaftar yang berkualifikasi sebelum melakukan modifikasi radikal pada pola makan atau rejimen kesehatan Anda.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[#1A365D]/10 pt-6 text-xs text-[#1A365D]/45 sm:flex-row">
                        <p>&copy; 2026 NutrisiDietMu. Hak Cipta Dilindungi Undang-Undang. Lini Media Resmi dari PT Rayliziie Media Digital.</p>
                        <p className="font-500 text-[#319795]">Science-based nutrition, honestly reported.</p>
                    </div>
                </div>
            </footer>

            {/* Modal Pop-up untuk Detail Artikel */}
            {activeArticle && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
                    <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl md:p-8 animate-in fade-in zoom-in-95 duration-200">
                        <button 
                            onClick={() => setActiveArticle(null)}
                            className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 text-[#1A365D] transition-colors hover:bg-slate-200"
                        >
                            <X className="h-5 w-5" />
                        </button>
                        <span className="text-xs font-600 uppercase tracking-widest text-[#319795]">{activeArticle.cat}</span>
                        <h2 className="mt-3 font-display text-2xl font-600 leading-snug text-[#1A365D] md:text-3xl">{activeArticle.title}</h2>
                        <div className="mt-3 flex items-center gap-4 text-xs text-slate-400">
                            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {activeArticle.read}</span>
                        </div>
                        <div className="mt-6 overflow-hidden rounded-xl">
                            <img src={activeArticle.img} alt={activeArticle.title} className="w-full object-cover aspect-[16/9]" />
                        </div>
                        <div className="mt-6 text-sm leading-relaxed text-slate-600 whitespace-pre-line">
                            {activeArticle.content || activeArticle.excerpt}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomePage;
