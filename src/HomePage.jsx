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

const featured = {
    tag: 'Ulasan Pilihan',
    title: 'Bukti Ilmiah di Balik Omega-3: Apa yang Sebenarnya Diungkap oleh Riset?',
    excerpt: 'Tinjauan kritis terhadap uji klinis acak terkontrol mengenai asam lemak omega-3 kelautan — dampak terukurnya pada kesehatan kardiovaskular dan kognitif, serta area di mana bukti ilmiah masih belum konklusif.',
    content: 'Asam lemak Omega-3, khususnya EPA (eicosapentaenoic acid) dan DHA (docosahexaenoic acid), telah lama dipromosikan sebagai suplemen ajaib untuk kesehatan jantung dan otak. Namun, gambaran ilmiah yang sebenarnya jauh lebih bernuansa daripada sekadar klaim pemasaran.\n\n### 1. Apa yang Ditunjukkan oleh Uji Klinis Acak?\nTinjauan sistematis terhadap puluhan uji klinis acak terkontrol (RCT) menunjukkan bahwa konsumsi suplemen omega-3 dosis standar (sekitar 1 gram per hari) memberikan pengurangan risiko yang relatif kecil namun signifikan terhadap kematian akibat penyakit jantung koroner dan serangan jantung infark miokard. Manfaat ini paling terlihat pada individu yang memang memiliki asupan ikan laut yang sangat rendah dalam diet harian mereka.\n\n### 2. Batasan Bukti Ilmiah\nDi sisi lain, bukti mengenai kemampuan omega-3 untuk mencegah penurunan kognitif atau penyakit Alzheimer pada orang dewasa sehat masih dinilai belum konklusif. Meskipun DHA adalah komponen struktural utama dari korteks serebral otak, studi klinis menunjukkan bahwa pemberian suplemen setelah gejala demensia muncul tidak mengubah jalannya penyakit secara signifikan. Oleh karena itu, intervensi gizi sejak usia dini dan paruh baya jauh lebih direkomendasikan.\n\n### 3. Rekomendasi Asupan\nDaripada bergantung sepenuhnya pada suplemen kapsul minyak ikan, pedoman gizi klinis menyarankan konsumsi 2 porsi ikan berlemak (seperti tuna, makarel, atau salmon lokal) per minggu. Hal ini dikarenakan matriks pangan utuh menyediakan zat gizi mikro pendukung lainnya seperti selenium dan vitamin D yang meningkatkan penyerapan asam lemak esensial tersebut di dalam tubuh manusia.',
    cat: 'Nutrisi Harian',
    read: '12 menit baca',
    img: IMG.salmon,
};

const STATIC_ARTICLES = [
    {
        title: 'Mitos vs Fakta Diet Rendah Karbohidrat: Tinjauan Gizi Klinis',
        excerpt: 'Mengupas tuntas tren pembatasan karbohidrat ekstrem dari kacamata sains. Kapan diet ini efektif, apa efek sampingnya bagi metabolisme, dan bagaimana penerapannya yang aman tanpa merusak fungsi organ tubuh.',
        content: 'Diet rendah karbohidrat (*low-carb diet*) telah menjadi salah satu strategi paling populer untuk penurunan berat badan cepat. Namun, dalam praktik gizi klinis, pembatasan makronutrien ini sering kali disalahartikan oleh masyarakat awam, sehingga memicu miskonsepsi yang berpotensi mengganggu keseimbangan metabolisme jangka panjang.',
        cat: 'Diet & Metabolisme',
        read: '8 menit baca',
        img: IMG.grains,
    },
    {
        title: 'Strategi Intervensi Gizi untuk Pencegahan Stunting pada Anak Pesisir',
        excerpt: 'Analisis mendalam mengenai pemanfaatan protein lokal berbasis pangan laut untuk mengatasi masalah malnutrisi kronis. Panduan praktis alokasi zat gizi mikro bagi ibu hamil dan balita di komunitas masyarakat pantai.',
        content: 'Masyarakat pesisir sering kali menghadapi ironi besar: hidup di dekat sumber protein laut yang melimpah, namun tingkat stunting pada anak-anak tetap tinggi. Masalah ini umumnya berakar dari pola asuh gizi, keterbatasan variasi pangan, serta distribusi hasil tangkapan laut yang lebih mengutamakan nilai ekonomi untuk dijual keluar wilayah daripada konsumsi domestik.',
        cat: 'Gizi Masyarakat',
        read: '10 menit baca',
        img: IMG.salmon,
    },
    {
        title: 'Panduan Menyusun Menu Isi Piringku: Porsi Tepat Tanpa Timbangan',
        excerpt: 'Kerangka kerja praktis dari standar Kementerian Kesehatan yang disederhanakan. Cara membagi porsi karbohidrat kompleks, protein nabati/hewani, serta sayuran tinggi serat hanya dengan menggunakan visualisasi tangan.',
        content: 'Banyak orang gagal mempertahankan pola makan sehat karena merasa terbebani oleh keharusan menimbang berat makanan secara presisi setiap kali hendak makan. Dalam dunia gizi terapan, pendekatan visual jauh lebih sukses di tingkat kepatuhan pasien jangka panjang. Standardisasi "Isi Piringku" yang dirilis oleh Kementerian Kesehatan RI dapat disesuaikan menggunakan antropometri tangan sebagai alat ukur praktis.',
        cat: 'Perencanaan Makan',
        read: '6 menit baca',
        img: IMG.mealprep,
    },
    {
        title: 'Dampak Konsumsi Ultra-Processed Food (UPF) Terhadap Mikrobioma Usus',
        excerpt: 'Bagaimana makanan cepat saji dan kemasan dengan bahan tambahan pangan memicu inflamasi tingkat rendah di pencernaan, serta langkah restorasi bakteri baik melalui konsumsi prebiotik alami harian.',
        content: 'Perubahan pola konsumsi global dalam tiga dekade terakhir menunjukkan peningkatan drastis pada asupan *Ultra-Processed Food* (UPF) atau makanan ultra-proses. Pangan industri ini dirancang agar tahan lama dan sangat lezat menggunakan zat aditif kimia sintetis. Riset gastroenterologi terbaru membuktikan bahwa konsumsi UPF kronis adalah pemicu utama kerusakan arsitektur mikrobioma usus manusia.',
        cat: 'Kesehatan Pencernaan',
        read: '9 menit baca',
        img: IMG.berries,
    },
    {
        title: 'Efektivitas Intermittent Fasting Terhadap Sensitivitas Insulin',
        excerpt: 'Tinjauan klinis mengenai mekanisme pembatasan waktu makan terhadap regulasi gula darah. Apakah metode ini aman untuk penderita pradiabetes dan bagaimana protokol gizi yang disarankan.',
        content: 'Intermittent Fasting (IF) atau puasa intermiten telah bergeser dari sekadar metode estetika penurunan berat badan menjadi intervensi terapeutik dalam manajemen gangguan metabolik, khususnya sindrom resistensi insulin dan kondisi pradiabetes. Secara klinis, saat tubuh berada dalam fase puasa yang terkontrol (misalnya protokol 16:8), kadar glukosa dalam sirkulasi darah menurun drastis. Hal ini memberikan stimulus pada sel beta pankreas untuk menghentikan sekresi hormon insulin dan memicu sel alfa pankreas mengeluarkan hormon glukagon.',
        cat: 'Diet & Metabolisme',
        read: '8 menit baca',
        img: IMG.hero,
    },
    {
        title: 'Analisis Zat Gizi Mikro pada Remaja Putri: Pencegahan Anemia Sejak Dini',
        excerpt: 'Mengapa pemenuhan zat besi dan vitamin C esensial bagi remaja. Dampak anemia jangka panjang terhadap produktivitas dan persiapan kesehatan reproduksi di masa depan.',
        content: 'Tingginya prevalensi anemia defisiensi besi di kalangan remaja putri di Indonesia merupakan ancaman serius bagi pembangunan kualitas sumber daya manusia jangka panjang. Remaja putri memiliki kerentanan biologis yang tinggi terhadap ketidakseimbangan zat besi karena percepatan pertumbuhan linier (*growth spurt*) dikombinasikan dengan kehilangan darah rutin akibat siklus menstruasi bulanan.',
        cat: 'Gizi Masyarakat',
        read: '7 menit baca',
        img: IMG.author,
    },
    {
        title: 'Peran Antioksidan Eksogen dalam Menangkal Stres Oksidatif',
        excerpt: 'Bagaimana radikal bebas merusak sel tubuh dan cara optimal mengonsumsi makanan kaya vitamin A, C, dan E untuk mendukung sistem pertahanan internal tubuh.',
        content: 'Setiap detik, tubuh manusia terpapar oleh radikal bebas, baik yang dihasilkan dari produk sampingan metabolisme internal seluler (respirasi mitokondria) maupun paparan eksternal seperti polusi udara, radiasi ultraviolet, dan asap rokok. Ketika konsentrasi radikal bebas melebihi kapasitas sistem pertahanan alami tubuh, terjadilah kondisi kerusakan biologis berbahaya yang disebut **Stres Oksidatif**.',
        cat: 'Micronutrients',
        read: '9 menit baca',
        img: IMG.berries,
    },
    {
        title: 'Bebas Gluten (Gluten-Free): Kebutuhan Medis atau Sekadar Tren Gaya Hidup?',
        excerpt: 'Membedakan penyakit Celiac, intoleransi gluten, dan miskonsepsi publik yang menganggap produk bebas gluten selalu lebih sehat untuk menurunkan berat badan.',
        content: 'Industri makanan modern saat ini dipenuhi oleh produk bersertifikat bebas gluten (*Gluten-Free*). Iklan komersial sering kali mengasosiasikan label bebas gluten dengan konsep penurunan berat badan cepat, kebugaran tingkat tinggi, dan pola hidup yang lebih bersih. Namun, dari sudut pandang gastroenterologi dan sains gizi, eliminasi total protein gluten tanpa indikasi klinis yang jelas adalah keputusan yang tidak tepat.',
        cat: 'Nutrisi Harian',
        read: '8 menit baca',
        img: IMG.grains,
    },
];

const pillars = [
    { icon: FlaskConical, title: 'Sumber Telah Sejawat (Peer-Reviewed)', desc: 'Setiap klaim yang kami tulis wajib merujuk langsung pada literatur primer dan pedoman klinis resmi — tanpa opini tanpa dasar.' },
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

const SUPABASE_URL = "https://harpdcqmrqdgckcuhxfr.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_ppzSXi7DuN7v0racT9l98A_JxK5-MGG";

const HomePage = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeArticle, setActiveArticle] = useState(null);
    const [articles, setArticles] = useState(initialArticles);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);

        const fetchFromSupabase = async () => {
            try {
                const res = await fetch("https://harpdcqmrqdgckcuhxfr.supabase.co/rest/v1/rayliziie_articles?status=eq.Published&category=eq.gizi&select=*&order=created_at.desc", {
                    headers: { 'apikey': "sb_publishable_ppzSXi7DuN7v0racT9l98A_JxK5-MGG", 'Authorization': "Bearer sb_publishable_ppzSXi7DuN7v0racT9l98A_JxK5-MGG" }
                });
                const data = await res.json();
                if (Array.isArray(data) && data.length > 0) {
                    const formatted = data.map(item => ({
                        title: item.title,
                        excerpt: item.content?.substring(0, 100) + '...',
                        content: item.content,
                        cat: item.category || 'Info Gizi',
                        read: '5 menit baca',
                        img: item.image_url || IMG.hero
                    }));
                    setArticles([...STATIC_ARTICLES, ...formatted]);
                }
            } catch (err) { console.error("Sync error:", err); }
        };
        fetchFromSupabase();
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
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleShare = async (article) => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: article.title,
                    text: article.excerpt,
                    url: window.location.href,
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Tautan website berhasil disalin ke papan klip!');
        }
    };

    return (
        <div className="min-h-screen bg-white text-[#1A365D]">
            <header
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                    scrolled ? 'bg-white/90 backdrop-blur-md border-b border-[#1A365D]/10 shadow-sm' : 'bg-transparent'
                }`}
            >
                <div className="mx-auto flex max-w-[80rem] items-center justify-between px-6 py-4">
                    <a href="#top" onClick={scrollToSection('top')} className="flex items-center gap-2">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1A365D]">
                            <Leaf className="h-5 w-5 text-white" strokeWidth={2} />
                        </span>
                        <span className="font-display text-xl font-600 tracking-tight text-[#1A365D]">
                            NutrisiDietMu
                        </span>
                    </a>
                    <nav className="hidden items-center gap-8 md:flex">
                        <a href="#articles" onClick={scrollToSection('articles')} className="text-sm font-500 text-[#1A365D]/70 transition-colors hover:text-[#319795]">Artikel</a>
                        <a href="#trust" onClick={scrollToSection('trust')} className="text-sm font-500 text-[#1A365D]/70 transition-colors hover:text-[#319795]">Tentang Kami</a>
                        <a href="#newsletter" onClick={scrollToSection('newsletter')} className="text-sm font-500 text-[#1A365D]/70 transition-colors hover:text-[#319795]">Kontak</a>
                        <button onClick={scrollToSection('newsletter')} className="rounded-full bg-[#319795] px-5 py-2 text-sm font-600 text-white transition-transform hover:-translate-y-px active:scale-[0.98]">
                            Berlangganan
                        </button>
                    </nav>
                    <button className="md:hidden text-[#1A365D]" onClick={() => setOpen(!open)} aria-label="Menu">
                        {open ? <X /> : <Menu />}
                    </button>
                </div>
                {open && (
                    <div className="border-t border-[#1A365D]/10 bg-white px-6 py-4 md:hidden">
                        <a href="#articles" onClick={scrollToSection('articles')} className="block py-2.5 text-sm font-500 text-[#1A365D]/80">Artikel</a>
                        <a href="#trust" onClick={scrollToSection('trust')} className="block py-2.5 text-sm font-500 text-[#1A365D]/80">Tentang Kami</a>
                        <a href="#newsletter" onClick={scrollToSection('newsletter')} className="block py-2.5 text-sm font-500 text-[#1A365D]/80">Kontak</a>
                        <button onClick={scrollToSection('newsletter')} className="mt-2 block w-full rounded-full bg-[#319795] px-5 py-2.5 text-center text-sm font-600 text-white">
                            Berlangganan
                        </button>
                    </div>
                )}
            </header>

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
                                <button onClick={scrollToSection('articles')} className="inline-flex items-center gap-2 rounded-full bg-[#1A365D] px-6 py-3 text-sm font-600 text-white transition-transform hover:-translate-y-px active:scale-[0.98]">
                                    Baca Artikel Terbaru <ArrowRight className="h-4 w-4" />
                                </button>
                                <button onClick={scrollToSection('editorial-team')} className="text-sm font-600 text-[#1A365D]/70 transition-colors hover:text-[#319795]">
                                    Standar Editorial Kami
                                </button>
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
                            </div>
                            <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-600 text-[#1A365D] transition-colors group-hover:text-[#319795]">
                                Baca Ulasan Lengkap <ArrowUpRight className="h-4 w-4" />
                            </span>
                        </div>
                    </button>
                </Reveal>
            </section>

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
                            <Reveal key={i} i={i}>
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

            <section id="editorial-team" className="mx-auto max-w-[80rem] px-6 py-20 md:py-28">
                <Reveal>
                    <div className="grid items-center gap-10 rounded-3xl border border-[#1A365D]/10 bg-white p-8 shadow-sm md:p-12">
                        <div>
                            <span className="text-xs font-600 uppercase tracking-widest text-[#319795]">Standar Editorial Kami</span>
                            <blockquote className="mt-3 font-display text-xl font-550 leading-relaxed text-[#1A365D] md:text-2xl">
                                &ldquo;Kami hanya mempublikasikan apa yang didukung oleh pembuktian sains yang kuat. Jika bukti ilmiah di lapangan masih belum pasti, kami akan mengatakannya secara jujur — karena kepercayaan dibangun atas dasar kejujuran fakta, bukan sekadar sensasi pemasaran.&rdquo;
                            </blockquote>
                            <div className="mt-8 grid gap-6 border-t border-slate-100 pt-6 sm:grid-cols-2">
                                <div>
                                    <p className="text-sm font-700 text-[#1A365D]">Muhammad Syuhada Ar'rayyan</p>
                                    <p className="text-xs text-[#1A365D]/60">Komite Editorial & Reviewer Gizi</p>
                                    <p className="text-xs font-500 text-[#319795]">Universitas Islam Negeri Sumatera Utara</p>
                                </div>
                                <div className="border-l-0 pt-4 sm:pt-0 sm:border-l sm:pl-6 border-slate-100">
                                    <p className="text-sm font-700 text-[#1A365D]">Andina Putri, S.Gz</p>
                                    <p className="text-xs text-[#1A365D]/60">Komite Editorial & Reviewer Gizi</p>
                                    <p className="text-xs font-500 text-[#319795]">Universitas Negeri Medan</p>
                                </div>
                            </div>
                            <p className="mt-6 text-xs font-600 tracking-wide uppercase text-slate-400">
                                Lini Media Resmi &middot; PT Rayliziie Media Digital
                            </p>
                        </div>
                    </div>
                </Reveal>
            </section>

            <section id="newsletter" className="bg-[#1A365D] py-20 md:py-24">
                <div className="mx-auto max-w-2xl px-6 text-center">
                    <Reveal>
                        <h2 className="font-display text-3xl font-600 tracking-tight text-white md:text-4xl">
                            Intisari Sains Nutrisi Langsung di Email Anda
                        </h2>
                        <p className="mt-4 text-white/70">
                            Satu email edukatif berbasis bukti ilmiah setiap minggu. Tanpa tren diet ekstrem, tanpa penyebaran rasa takut — murni edukasi yang jelas.
                        </p>
                        <form onSubmit={handleSubscribe} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                            <div className="relative flex-1">
                                <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#1A365D]/40" />
                                <input
                                    type="email"
                                    required
                                    placeholder="masukkan@email.com"
                                    className="w-full rounded-full border border-white/10 bg-white py-3 pl-11 pr-4 text-sm text-[#1A365D] outline-none ring-[#319795]/40 focus:ring-2"
                                />
                            </div>
                            <button type="submit" className="rounded-full bg-[#319795] px-6 py-3 text-sm font-600 text-white transition-transform hover:-translate-y-px active:scale-[0.98]">
                                Berlangganan
                            </button>
                        </form>
                        <p className="mt-3 text-xs text-white/40">Anda dapat berhenti berlangganan kapan saja. Kami menjaga privasi data Anda.</p>
                    </Reveal>
                </div>
            </section>

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
                                <li><a href="#articles" onClick={scrollToSection('articles')} className="hover:text-[#319795]">Artikel</a></li>
                                <li><a href="#trust" onClick={scrollToSection('trust')} className="hover:text-[#319795]">Tentang Kami</a></li>
                                <li><a href="#newsletter" onClick={scrollToSection('newsletter')} className="hover:text-[#319795]">Kontak</a></li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-xs font-600 uppercase tracking-widest text-[#1A365D]/40">Korporasi</p>
                            <ul className="mt-4 space-y-2.5 text-sm text-[#1A365D]/65">
                                <li><a href="#trust" onClick={scrollToSection('trust')} className="hover:text-[#319795]">Kebijakan Editorial</a></li>
                                <li><a href="#newsletter" onClick={scrollToSection('newsletter')} className="hover:text-[#319795]">Hubungan Media</a></li>
                                <li><a href="#top" onClick={scrollToSection('top')} className="hover:text-[#319795]">Privasi & Hukum</a></li>
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

            {activeArticle && (
                <div className="fixed inset-0 z-50 overflow-y-auto bg-white animate-in fade-in duration-200">
                    <div className="sticky top-0 z-10 border-b border-[#1A365D]/10 bg-white/90 backdrop-blur-md">
                        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
                            <button 
                                onClick={() => setActiveArticle(null)}
                                className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-600 text-[#1A365D] transition-colors hover:bg-slate-200"
                            >
                                &larr; Kembali ke Beranda
                            </button>
                            <div className="flex items-center gap-2">
                                <button 
                                    onClick={() => handleShare(activeArticle)}
                                    className="inline-flex items-center gap-1.5 rounded-full bg-[#319795]/10 px-4 py-2 text-sm font-600 text-[#319795] transition-colors hover:bg-[#319795]/20"
                                >
                                    <Share2 className="h-4 w-4" /> Bagikan
                                </button>
                                <span className="hidden sm:inline font-display text-sm font-600 tracking-tight text-[#1A365D]">
                                    NutrisiDietMu Reader
                                </span>
                            </div>
                        </div>
                    </div>
                    <article className="mx-auto max-w-3xl px-6 py-10 md:py-16">
                        <div className="flex items-center gap-3 text-xs font-600 uppercase tracking-widest text-[#319795]">
                            <span>{activeArticle.cat}</span>
                            <span className="text-slate-300">&bull;</span>
                            <span className="flex items-center gap-1 text-slate-400">
                                <Clock className="h-3.5 w-3.5" /> {activeArticle.read}
                            </span>
                        </div>
                        <h1 className="mt-4 font-display text-3xl font-700 leading-tight text-[#1A365D] md:text-5xl">
                            {activeArticle.title}
                        </h1>
                        <div className="mt-8 overflow-hidden rounded-3xl shadow-lg">
                            <img src={activeArticle.img} alt={activeArticle.title} className="w-full object-cover aspect-[16/9]" />
                        </div>
                        <div className="mt-10 text-base md:text-lg leading-relaxed text-slate-700 whitespace-pre-line font-serif">
                            {activeArticle.content ? (
                                activeArticle.content.split('\n\n').map((paragraph, index) => {
                                    if (paragraph.startsWith('###')) {
                                        return (
                                            <h3 key={index} className="mt-8 mb-4 font-display text-xl font-700 text-[#1A365D] md:text-2xl border-b pb-2">
                                                {paragraph.replace('###', '').trim()}
                                            </h3>
                                        );
                                    }
                                    if (paragraph.startsWith('*')) {
                                        return (
                                            <div key={index} className="my-3 pl-4 border-l-4 border-[#319795] italic text-slate-600">
                                                {paragraph}
                                            </div>
                                        );
                                    }
                                    return <p key={index} className="mb-6 text-justify">{paragraph}</p>;
                                })
                            ) : (
                                <p className="text-justify">{activeArticle.excerpt}</p>
                            )}
                        </div>
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
