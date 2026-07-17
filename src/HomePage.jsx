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
    excerpt: 'Tinjauan kritis terhadap uji klinis acak terkontrol mengenai asam lemak omega-3 kelautan — dampak terukurnya pada kesehatan kardiovaskular dan kognitif, serta area di mana bukti ilmiah masih belum konklusif.',
    content: 'Asam lemak Omega-3, khususnya EPA (eicosapentaenoic acid) dan DHA (docosahexaenoic acid), telah lama dipromosikan sebagai suplemen ajaib untuk kesehatan jantung dan otak. Namun, gambaran ilmiah yang sebenarnya jauh lebih bernuansa daripada sekadar klaim pemasaran.\n\n### 1. Apa yang Ditunjukkan oleh Uji Klinis Acak?\nTinjauan sistematis terhadap puluhan uji klinis acak terkontrol (RCT) menunjukkan bahwa konsumsi suplemen omega-3 dosis standar (sekitar 1 gram per hari) memberikan pengurangan risiko yang relatif kecil namun signifikan terhadap kematian akibat penyakit jantung koroner dan serangan jantung infark miokard. Manfaat ini paling terlihat pada individu yang memang memiliki asupan ikan laut yang sangat rendah dalam diet harian mereka.\n\n### 2. Batasan Bukti Ilmiah\nDi sisi lain, bukti mengenai kemampuan omega-3 untuk mencegah penurunan kognitif atau penyakit Alzheimer pada orang dewasa sehat masih dinilai belum konklusif. Meskipun DHA adalah komponen struktural utama dari korteks serebral otak, studi klinis menunjukkan bahwa pemberian suplemen setelah gejala demensia muncul tidak mengubah jalannya penyakit secara signifikan. Oleh karena itu, intervensi gizi sejak usia dini dan paruh baya jauh lebih direkomendasikan.\n\n### 3. Rekomendasi Asupan\nDaripada bergantung sepenuhnya pada suplemen kapsul minyak ikan, pedoman gizi klinis menyarankan konsumsi 2 porsi ikan berlemak (seperti tuna, makarel, atau salmon lokal) per minggu. Hal ini dikarenakan matriks pangan utuh menyediakan zat gizi mikro pendukung lainnya seperti selenium dan vitamin D yang meningkatkan penyerapan asam lemak esensial tersebut di dalam tubuh manusia.',
    cat: 'Nutrisi Harian',
    read: '12 menit baca',
    img: IMG.salmon,
};

const articles = [
    {
        title: 'Mitos vs Fakta Diet Rendah Karbohidrat: Tinjauan Gizi Klinis',
        excerpt: 'Mengupas tuntas tren pembatasan karbohidrat ekstrem dari kacamata sains. Kapan diet ini efektif, apa efek sampingnya bagi metabolisme, dan bagaimana penerapannya yang aman tanpa merusak fungsi organ tubuh.',
        content: 'Diet rendah karbohidrat (*low-carb diet*) telah menjadi salah satu strategi paling populer untuk penurunan berat badan cepat. Namun, dalam praktik gizi klinis, pembatasan makronutrien ini sering kali disalahartikan oleh masyarakat awam, sehingga memicu miskonsepsi yang berpotensi mengganggu keseimbangan metabolisme jangka panjang.\n\n### 1. Mekanisme Biokimia dan Metabolisme Tubuh\nKarbohidrat merupakan sumber energi utama yang paling efisien bagi tubuh manusia. Setiap 1 gram karbohidrat yang dikonsumsi menghasilkan energi sebesar 4 kkal. Di dalam tubuh, karbohidrat dipecah menjadi glukosa, yang menjadi bahan bakar mutlak bagi sel-sel otak dan sistem saraf pusat.\n\nKetika asupan karbohidrat dipotong secara drastis hingga di bawah 50 gram per hari, tubuh akan kehabisan simpanan glikogen di hati dan otot. Kondisi ini memaksa tubuh memasuki fase alternatif yang disebut **Ketosis**. Dalam fase ini, hati akan memecah lemak menjadi komponen yang disebut *ketone bodies* (benda keton) untuk digunakan sebagai energi pengganti glukosa. Meskipun mekanisme ini sangat efektif untuk memangkas massa lemak jaringan adiposa dalam jangka pendek, ketosis yang tidak terkontrol dapat memicu *ketoacidosis* ringan, kelelahan kronis (*keto flu*), serta penurunan performa kognitif akibat kurangnya suplai glukosa optimal ke otak.\n\n### 2. Simulasi Perhitungan Gizi Klinis\nUntuk memahami mengapa pembatasan ekstrem bisa berbahaya, mari kita simulasikan perhitungan kebutuhan gizi makro pada seorang individu. Berdasarkan standar gizi medis, proporsi ideal distribusi energi harian adalah:\n* Karbohidrat: 45% - 65% dari total energi\n* Protein: 10% - 20% dari total energi\n* Lemak: 20% - 25% dari total energi\n\nJika seorang individu memiliki **Total Energy Expenditure (TEE)** atau kebutuhan energi total sebesar **2000 kkal per hari**, maka perhitungan kebutuhan karbohidrat normalnya adalah:\n\n* Batas Minimal (45%): (45% x 2000 kkal) / 4 kkal/gram = **225 gram karbohidrat/hari**\n* Batas Maksimal (65%): (65% x 2000 kkal) / 4 kkal/gram = **325 gram karbohidrat/hari**\n\nPada tren *extreme low-carb diet*, asupan ini sering kali dipangkas hingga hanya tersisa 20–50 gram per hari. Pemotongan ekstrem sebesar >80% dari kebutuhan fisiologis ini jika dilakukan dalam jangka panjang tanpa supervisi ahli gizi terdaftar dapat memicu katabolisme protein otot (tubuh memecah otot sendiri untuk dijadikan energi) dan membebani kerja ginjal.\n\n### 3. Tabel Kandungan Zat Gizi Sumber Karbohidrat Pilihan\nSebagai klinisi dan edukator, kita harus mengarahkan masyarakat bukan untuk menjauhi karbohidrat, melainkan memilih jenis karbohidrat kompleks berkualitas (tinggi serat dan memiliki indeks glikemik rendah). Berikut adalah tabel perbandingan zat gizi per 100 gram bahan makanan sumber karbohidrat:\n\n* **Beras Merah (Dimasak):** Energi: 110 kkal | Karbohidrat: 23 g | Serat: 1.8 g | Protein: 2.6 g\n* **Oatmeal (Dimasak):** Energi: 68 kkal | Karbohidrat: 12 g | Serat: 1.7 g | Protein: 2.4 g\n* **Ubi Jalar Rebus:** Energi: 86 kkal | Karbohidrat: 20 g | Serat: 3.0 g | Protein: 1.6 g\n* **Beras Putih Konvensional (Dimasak):** Energi: 130 kkal | Karbohidrat: 28 g | Serat: 0.4 g | Protein: 2.7 g\n\nDari data di atas, terlihat jelas bahwa ubi jalar dan beras merah menawarkan kepadatan serat yang jauh lebih tinggi dan kalori yang lebih rendah dibandingkan beras putih konvensional. Serat ini berfungsi memperlambat penyerapan glukosa di usus halus, sehingga mencegah lonjakan insulin yang drastis.\n\n### 4. Kesimpulan dan Rekomendasi Medis\nDiet rendah karbohidrat tidak sepenuhnya salah; metode ini memiliki efektivitas klinis yang baik untuk pasien dengan kondisi medis tertentu seperti obesitas morbid, diabetes melitus tipe 2, atau resistensi insulin berat. Namun, bagi populasi sehat, pendekatan yang jauh lebih bijak dan berkelanjutan (*sustainable*) adalah melakukan **Carbohydrate Quality Modification**—yaitu mengurangi konsumsi gula sederhana (seperti sirup dan makanan manis) dan menggantinya dengan karbohidrat kompleks yang kaya akan mikronutrien dan serat pangan, bukan menghilangkannya sama sekali.',
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
    {
        title: 'Efektivitas Intermittent Fasting Terhadap Sensitivitas Insulin',
        excerpt: 'Tinjauan klinis mengenai mekanisme pembatasan waktu makan terhadap regulasi gula darah. Apakah metode ini aman untuk penderita pradiabetes dan bagaimana protokol gizi yang disarankan.',
        content: 'Intermittent Fasting (IF) atau puasa intermiten bukan sekadar tren penurunan berat badan, melainkan metode yang memengaruhi regulasi hormon tubuh, terutama insulin. Secara klinis, saat tubuh berada dalam fase puasa yang terkontrol (misalnya protokol 16:8), kadar glukosa darah akan memnunur secara signifikan, memaksa pankreas untuk mengurangi produksi insulin.\n\nPenurunan reguler ini melatih sel-sel tubuh untuk kembali sensitif terhadap insulin, menjadikannya strategi yang potensial bagi penderita pradiabetes atau resistensi insulin berat. Namun, efektivitas IF sangat bergantung pada apa yang dikonsumsi saat jendela makan terbuka. Jika jendela makan diisi dengan makanan tinggi gula sederhana, manfaat perbaikan sensitivitas insulin ini akan hilang. Konsultasi dengan ahli gizi tetap diwajibkan untuk menentukan kecukupan kalori harian.',
        cat: 'Diet & Metabolisme',
        read: '8 menit baca',
        img: IMG.hero,
    },
    {
        title: 'Analisis Zat Gizi Mikro pada Remaja Putri: Pencegahan Anemia Sejak Dini',
        excerpt: 'Mengapa pemenuhan zat besi dan vitamin C esensial bagi remaja. Dampak anemia jangka panjang terhadap produktivitas dan persiapan kesehatan reproduksi di masa depan.',
        content: 'Anemia defisiensi besi pada remaja putri masih menjadi tantangan gizi makro yang serius di Indonesia. Remaja putri memiliki risiko tinggi karena siklus menstruasi bulanan serta fase pertumbuhan yang pesat. Kekurangan zat besi tidak hanya menurunkan konsentrasi belajar dan imunitas, tetapi juga menjadi prediktor kesehatan buruk di masa depan saat mereka memasuki usia reproduksi.\n\nSecara ilmiah, penyerapan zat besi hewani (zat besi heme) dari daging atau ikan jauh lebih tinggi dibanding zat besi nabati (non-heme). Untuk mengoptimalkan penyerapan zat besi non-heme dari sayuran seperti bayam, sangat disarankan mengonsumsinya bersamaan dengan sumber Vitamin C (seperti jeruk atau jambu biji), serta menghindari konsumsi teh atau kopi berdekatan dengan jam makan karena kandungan taninnya dapat menghambat penyerapan zat besi.',
        cat: 'Gizi Masyarakat',
        read: '7 menit baca',
        img: IMG.author,
    },
    {
        title: 'Peran Antioksidan Eksogen dalam Menangkal Stres Oksidatif',
        excerpt: 'Bagaimana radikal bebas merusak sel tubuh dan cara optimal mengonsumsi makanan kaya vitamin A, C, dan E untuk mendukung sistem pertahanan internal tubuh.',
        content: 'Stres oksidatif terjadi ketika jumlah radikal bebas di dalam tubuh melebihi kapasitas antioksidan endogen yang diproduksi secara alami oleh tubuh kita. Kondisi ini memicu kerusakan seluler kronis yang menjadi akar dari berbagai penyakit degeneratif seperti kanker dan penyakit jantung.\n\nUntuk memperkuat pertahanan tubuh, diperlukan asupan antioksidan eksogen dari makanan. Vitamin A (dari wortel dan hati), Vitamin C (dari buah-buahan sitrus), dan Vitamin E (dari kacang-kacangan dan biji-bijian) bekerja sinergis menetralisir radikal bebas. Kunci utamanya adalah variasi warna makanan; semakin beragam warna sayur dan buah yang Anda konsumsi setiap hari, semakin kaya pula jenis jaringan antioksidan yang melindungi sel tubuh Anda.',
        cat: 'Micronutrients',
        read: '9 menit baca',
        img: IMG.berries,
    },
    {
        title: 'Bebas Gluten (Gluten-Free): Kebutuhan Medis atau Sekadar Tren Gaya Hidup?',
        excerpt: 'Membedakan penyakit Celiac, intoleransi gluten, dan miskonsepsi publik yang menganggap produk bebas gluten selalu lebih sehat untuk menurunkan berat badan.',
        content: 'Label "Gluten-Free" kini marak ditemukan di berbagai produk pangan kemasan. Namun, secara sains gizi, siapakah yang benar-benar membutuhkan makanan bebas gluten? Secara medis, diet ini wajib diterapkan 100% oleh penderita Penyakit Celiac (Celiac Disease) dan orang dengan kondisi *Non-Celiac Gluten Sensitivity* (NCGS) karena protein gluten dapat merusak lapisan usus halus mereka.\n\nBagi populasi umum yang tidak memiliki sensitivitas medis terhadap gluten, mengonsumsi produk komersial berlabel bebas gluten dengan harapan menurunkan berat badan adalah sebuah miskonsepsi. Banyak produk gluten-free kemasan yang justru ditambahkan gula dan lemak ekstra agar teksturnya menyerupai produk gandum asli. Memahami kebutuhan tubuh secara klinis jauh lebih penting daripada sekadar mengikuti tren pemasaran.',
        cat: 'Nutrisi Harian',
        read: '8 menit baca',
        img: IMG.grains,
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
    const [activeArticle, setActiveArticle] = useState(null);

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

            {/* Halaman Pembaca Penuh (Full-screen Article Page Overlay) */}
            {activeArticle && (
                <div className="fixed inset-0 z-50 overflow-y-auto bg-white animate-in fade-in duration-200">
                    {/* Top Bar / Navigasi Atas Halaman Artikel */}
                    <div className="sticky top-0 z-10 border-b border-[#1A365D]/10 bg-white/90 backdrop-blur-md">
                        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
                            <button 
                                onClick={() => setActiveArticle(null)}
                                className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-600 text-[#1A365D] transition-colors hover:bg-slate-200"
                            >
                                &larr; Kembali ke Beranda
                            </button>
                            <span className="font-display text-sm font-600 tracking-tight text-[#1A365D]">
                                NutrisiDietMu Reader
                            </span>
                        </div>
                    </div>

                    {/* Area Konten Utama Artikel */}
                    <article className="mx-auto max-w-3xl px-6 py-10 md:py-16">
                        {/* Kategori & Waktu Baca */}
                        <div className="flex items-center gap-3 text-xs font-600 uppercase tracking-widest text-[#319795]">
                            <span>{activeArticle.cat}</span>
                            <span className="text-slate-300">&bull;</span>
                            <span className="flex items-center gap-1 text-slate-400">
                                <Clock className="h-3.5 w-3.5" /> {activeArticle.read}
                            </span>
                        </div>

                        {/* Judul Besar Halaman */}
                        <h1 className="mt-4 font-display text-3xl font-700 leading-tight text-[#1A365D] md:text-5xl">
                            {activeArticle.title}
                        </h1>

                        {/* Gambar Utama Halaman Penuh */}
                        <div className="mt-8 overflow-hidden rounded-3xl shadow-lg">
                            <img 
                                src={activeArticle.img} 
                                alt={activeArticle.title} 
                                className="w-full object-cover aspect-[16/9]" 
                            />
                        </div>

                        {/* Isi Teks Artikel Lengkap (Gaya Jurnal Ilmiah) */}
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

                        {/* Footer Penulis di Akhir Artikel */}
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
