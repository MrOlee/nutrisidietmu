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

// Ubah nama variabel agar tidak bentrok dengan state
const local_articles = [
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
        content: 'Masyarakat pesisir sering kali menghadapi ironi besar: hidup di dekat sumber protein laut yang melimpah, namun tingkat stunting pada anak-anak tetap tinggi. Masalah ini umumnya berakar dari pola asuh gizi, keterbatasan variasi pangan, serta distribusi hasil tangkapan laut yang lebih mengutamakan nilai ekonomi untuk dijual keluar wilayah daripada konsumsi domestik.\n\n### 1. Analisis Krisis Gizi dan Peran Protein Hewani Laut\nStunting adalah manifestasi klinis dari kegagalan pertumbuhan linier akibat malnutrisi kronis berkepanjangan. Protein hewani memiliki peranan vital sebagai regulator pertumbuhan seluler karena mengandung asam amino esensial lengkap yang memicu pelepasan *Insulin-like Growth Factor 1* (IGF-1), sejenis hormon penentu pertumbuhan tulang pajang pada anak.\n\nKawasan pesisir memiliki keunggulan geografis berupa kelimpahan hayati laut. Banyak masyarakat menganggap pencegahan stunting membutuhkan biaya mahal untuk membeli daging sapi atau ikan impor seperti salmon. Padahal, komoditas lokal pesisir memiliki matriks densitas zat gizi yang sangat tinggi and jauh lebih ekonomis.\n\n### 2. Komparasi Kandungan Zat Gizi Mikro dan Makro\nBerikut adalah analisis kandungan zat gizi makro dan mikro esensial per 100 gram antara komoditas laut lokal pesisir dengan pangan hewani populer:\n\n* **Ikan Kembung Segar:** Energi: 112 kkal | Protein: 21.4 g | Omega-3: 2.2 g | Zink: 0.9 mg\n* **Ikan Daging Sapi Murni:** Energi: 250 kkal | Protein: 26.0 g | Omega-3: 0.05 g | Zink: 4.8 mg\n* **Ikan Salmon Fillet:** Energi: 208 kkal | Protein: 20.0 g | Omega-3: 2.0 g | Zink: 0.6 mg\n\nDari data klinis tersebut, kita dapat melihat bahwa kandungan asam lemak Omega-3 pada ikan kembung lokal justru melampaui kandungan ikan salmon impor yang mahal. Omega-3 esensial ini sangat krusial untuk menstimulasi perkembangan sinapsis saraf otak anak pada masa keemasan 1000 Hari Pertama Kehidupan (HPK).\n\n### 3. Rumus Estimasi Kecukupan Protein Anak Balita\nBerdasarkan Angka Kecukupan Gizi (AKG) nasional, estimasi kebutuhan protein harian untuk balita usia 1–3 tahun berkisar pada **20 gram protein per hari**. Jika dihitung secara matematis menggunakan pendekatan bioavibilitas protein laut lokal:\n\n* Konsumsi minimal per hari: (50 gram Ikan Kembung) = **10.7 gram protein murni**\n\nDengan memberikan porsi minimal 50 gram ikan kembung per hari, seorang ibu di pesisir pantai sudah berhasil memenuhi lebih dari 50% target kecukupan protein hewani harian anaknya. Sisa kebutuhan lainnya dapat dipenuhi melalui kombinasi pangan nabati lokal seperti tempe atau daun kelor yang kaya akan zat besi.\n\n### 4. Implementasi dan Rekomendasi Kebijakan Komunitas\nIntervensi gizi berbasis masyarakat pesisir tidak boleh hanya mengandalkan suplementasi obat komersial. Pendekatan berkelanjutan dapat dicapai melalui:\n* 1. Edukasi diversifikasi pengolahan pangan laut lokal agar menarik bagi selera balita (misalnya pembuatan bakso ikan kembung murni tanpa banyak tepung).\n* 2. Program pemberdayaan ekonomi ibu rumah tangga pesisir untuk pembudidayaan pekarangan sayur kaya zat besi.\n* 3. Alokasi wajib sebagian hasil tangkapan nelayan lokal untuk konsumsi domestik posyandu desa.',
        cat: 'Gizi Masyarakat',
        read: '10 menit baca',
        img: IMG.salmon,
    },
    {
        title: 'Panduan Menyusun Menu Isi Piringku: Porsi Tepat Tanpa Timbangan',
        excerpt: 'Kerangka kerja praktis dari standar Kementerian Kesehatan yang disederhanakan. Cara membagi porsi karbohidrat kompleks, protein nabati/hewani, serta sayuran tinggi serat hanya dengan menggunakan visualisasi tangan.',
        content: 'Banyak orang gagal mempertahankan pola makan sehat karena merasa terbebani oleh keharusan menimbang berat makanan secara presisi setiap kali hendak makan. Dalam dunia gizi terapan, pendekatan visual jauh lebih sukses di tingkat kepatuhan pasien jangka panjang. Standardisasi "Isi Piringku" yang dirilis oleh Kementerian Kesehatan RI dapat disesuaikan menggunakan antropometri tangan sebagai alat ukur praktis.\n\n### 1. Pembagian Struktur Plate Model 50/50\nPrinsip dasar Isi Piringku adalah membagi piring makan bundar standar (diameter sekitar 20-22 cm) menjadi dua bagian simetris sebesar 50% kiri dan 50% kanan.\n* **Setengah Bagian Pertama (Kiri):** Dialokasikan khusus untuk sumber karbohidrat dan lauk-pauk protein dengan rasio 2:1.\n* **Setengah Bagian Kedua (Kanan):** Dialokasikan khusus untuk sayuran tinggi serat pangan dan buah-buahan dengan rasio 2:1.\n\n### 2. Trik Estimasi Porsi Menggunakan Visual Tangan\nBagi masyarakat awam yang tidak memiliki timbangan makanan digital di rumah, berikut adalah konversi takaran zat gizi makro yang dihitung berdasarkan ukuran tangan individu:\n\n* **Makanan Pokok (Karbohidrat Kompleks):** Porsi ideal untuk sekali makan setara dengan **1 kepalan tangan tertutup** Anda sendiri (sekitar 150 gram nasi atau 2 buah ubi ukuran sedang).\n* **Lauk-Pauk (Protein Hewani/Nabati):** Porsi daging, ikan, atau ayam yang dianjurkan setara dengan **1 luas telapak tangan terbuka** Anda, tidak termasuk jari-jari, dengan ketebalan setara jari kelingking Anda.\n* **Sayuran Harian:** Takaran minimal untuk sayur berdaun hijau dalam sekali makan adalah sebanyak **2 tangkup telapak tangan terbuka** saat disatukan.\n* **Lemak Tambahan (Minyak/Mentega):** Batas aman penggunaan minyak goreng atau mentega dalam sekali penyajian makanan setara dengan **1 ruas ujung ibu jari** Anda.\n\n### 3. Tabel Densitas Kalori dan Distribusi Menu Harian\nBerikut adalah visualisasi distribusi kalori harian jika menyusun menu piring sehat seimbang dengan target total energi **500 kkal per sekali makan**:\n\n* **Karbohidrat (Nasi Merah 150g):** Kalori: 165 kkal | Serat: 2.7 g\n* **Protein Hewani (Dada Ayam Panggang 80g):** Kalori: 130 kkal | Protein: 25 g\n* **Protein Nabati (Tempe Bacem 50g):** Kalori: 80 kkal | Serat: 1.4 g\n* **Sayuran Khas (Cah Kangkung/Bayam 100g):** Kalori: 45 kkal | Vitamin C: Tinggi\n* **Buah Segar (Pepaya/Jeruk 1 potong):** Kalori: 60 kkal | Air & Enzim: Tinggi\n\n### 4. Evaluasi Penerapan Jangka Panjang\nDengan menggunakan alat ukur antropometri tangan ini, Anda tidak perlu lagi terjebak dalam kecemasan menghitung kalori digital (*obsessive calorie counting*). Pola Isi Piringku memastikan pemenuhan kebutuhan mikronutrien dari sayur berwarna-warni sekaligus mengontrol volume asupan energi untuk menjaga kestabilan berat badan ideal yang sehat.',
        cat: 'Perencanaan Makan',
        read: '6 menit baca',
        img: IMG.mealprep,
    },
    {
        title: 'Dampak Konsumsi Ultra-Processed Food (UPF) Terhadap Mikrobioma Usus',
        excerpt: 'Bagaimana makanan cepat saji dan kemasan dengan bahan tambahan pangan memicu inflamasi tingkat rendah di pencernaan, serta langkah restorasi bakteri baik melalui konsumsi prebiotik alami harian.',
        content: 'Perubahan pola konsumsi global dalam tiga dekade terakhir menunjukkan peningkatan drastis pada asupan *Ultra-Processed Food* (UPF) atau makanan ultra-proses. Pangan industri ini dirancang agar tahan lama dan sangat lezat menggunakan zat aditif kimia sintetis. Riset gastroenterologi terbaru membuktikan bahwa konsumsi UPF kronis adalah pemicu utama kerusakan arsitektur mikrobioma usus manusia.\n\n### 1. Patofisiologi Dysbiosis Akibat Zat Aditif Pangan\nDi dalam saluran pencernaan manusia hidup triliunan koloni mikroorganisme yang secara kolektif disebut mikrobioma usus. Ekosistem bakteri baik ini membutuhkan pasokan serat pangan difermentasi untuk memproduksi *Short-Chain Fatty Acids* (SCFA), seperti butirat, yang berfungsi menjaga integritas dinding usus dan meregulasi imunitas.\n\nUPF minim akan serat asli namun kaya akan gula rafinasi, lemak trans, serta zat aditif komersial seperti emulsifier (misalnya karagenan, polisorbat-80) dan pemanis buatan. Emulsifier bekerja merusak lapisan mukus pelindung dinding lambung dan usus halus. Akibatnya, bakteri patogen merusak jaringan epitel, memicu kondisi *Leaky Gut Syndrome* (kebocoran usus halus). Komponen bakteri berbahaya kemudian masuk ke aliran darah, memicu sistem imun melepaskan sitokin pro-inflamasi dan menyebabkan **Low-Grade Systemic Inflammation** (inflamasi tingkat rendah yang menyebar ke seluruh tubuh).\n\n### 2. Tabel Identifikasi Bahan Makanan Menurut Sistem Klasifikasi NOVA\nUntuk mempermudah edukasi pasien di klinik gizi, dunia sains internasional menggunakan sistem klasifikasi NOVA untuk membagi tingkatan proses pangan:\n\n* **NOVA 1 (Minimal Proses):** Bahan pangan utuh alami. Contoh: Telur segar, beras pecah kulit, buah potong, susu murni.\n* **NOVA 2 (Bahan Kuliner Olahan):** Zat yang diekstrak langsung dari alam. Contoh: Minyak zaitun, garam dapur, madu murni.\n* **NOVA 3 (Makanan Olahan Halus):** Kombinasi NOVA 1 dan 2 untuk pengawetan. Contoh: Ikan sarden kaleng, keju tradisional, roti segar.\n* **NOVA 4 (Ultra-Processed Food/UPF):** Hasil formulasi industri industri kimia. Contoh: Mi instan, sosis, nugget ayam, minuman soda karbonasi.\n\n### 3. Strategi Klinis Restorasi Ekosistem Usus\nProses pemulihan usus dari dampak kerusakan zat kimia UPF membutuhkan waktu restorasi biologis minimal **4 hingga 8 minggu** dengan menerapkan protokol nutrisi berikut:\n* 1. Eliminasi total produk komersial bersumber dari klasifikasi NOVA 4.\n* 2. Peningkatan asupan prebiotik (makanan untuk bakteri baik) sebanyak minimal 30 gram per hari dari bahan pangan tinggi inulin seperti bawang garlic, bawang merah, pisang, dan asparagus.\n* 3. Konsumsi pangan fermentasi kaya probiotik hidup tradisional (seperti tempe, yoghurt tanpa gula, atau kefir) untuk menyuplai koloni bakteri baik baru secara berkala.',
        cat: 'Kesehatan Pencernaan',
        read: '9 menit baca',
        img: IMG.berries,
    },
    {
        title: 'Efektivitas Intermittent Fasting Terhadap Sensitivitas Insulin',
        excerpt: 'Tinjauan klinis mengenai mekanisme pembatasan waktu makan terhadap regulasi gula darah. Apakah metode ini aman untuk penderita pradiabetes dan bagaimana protokol gizi yang disarankan.',
        content: 'Intermittent Fasting (IF) atau puasa intermiten telah bergeser dari sekadar metode estetika penurunan berat badan menjadi intervensi terapeutik dalam manajemen gangguan metabolik, khususnya sindrom resistensi insulin dan kondisi pradiabetes. Secara klinis, saat tubuh berada dalam fase puasa yang terkontrol (misalnya protokol 16:8), kadar glukosa dalam sirkulasi darah menurun drastis. Hal ini memberikan stimulus pada sel beta pankreas untuk menghentikan sekresi hormon insulin dan memicu sel alfa pankreas mengeluarkan hormon glukagon.\n\n### 1. Mekanisme Hormonal Selama Fase Puasa\nKetiadaan insulin dalam jangka waktu tertentu menyebabkan penurunan regulasi reseptor insulin pada permukaan sel adiposa dan otot. Kondisi ini memberikan waktu istirahat bagi jalur metabolisme seluler, sehingga ketika jendela makan kembali dibuka, sensitivitas reseptor insulin meningkat secara signifikan. Sel menjadi lebih efisien dalam menyerap glukosa darah dengan bantuan volume insulin yang jauh lebih sedikit, mencegah terjadinya hiperglikemia kronis.\n\n### 2. Protokol Metode 16:8 dan Pengaturan Kalori\nProtokol IF yang paling banyak diteliti dan memiliki tingkat kepatuhan klinis tertinggi adalah metode **16 jam puasa dan 8 jam jendela makan**. Berikut adalah contoh distribusi makronutrien ilmiah selama jendela makan 8 jam dengan target energi total **1800 kkal**:\n\n* **Jam 12:00 (Muka Puasa / Meal 1 - 600 kkal):** Karbohidrat Kompleks (Nasi Merah), Protein Tinggi (Dada Ayam/Ikan), Lemak Sehat (Alpukat).\n* **Jam 16:00 (Camilan Nutrisi / Snack - 300 kkal):** Kacang Almond atau Yoghurt Plain dengan potongan buah beri segar.\n* **Jam 19:30 (Makan Terakhir / Meal 2 - 900 kkal):** Karbohidrat Kompleks Moderat (Ubi), Protein Sedang (Tahu/Telur), Sayuran Tinggi Serat.\n\n### 3. Parameter Keamanan Klinis Kontraindikasi\nMeskipun IF terbukti efektif menurunkan kadar hemoglobin A1c (HbA1c) pada penderita pradiabetes, metode ini memiliki batasan keamanan klinis yang ketat. Pembatasan waktu makan **sangat dilarang** diterapkan pada individu dengan riwayat *Eating Disorder* (seperti Anoreksia atau Bulimia), wanita hamil dan menyusui yang membutuhkan asupan nutrisi konstan, serta pasien diabetes melitus tipe 1 yang bergantung penuh pada injeksi insulin eksogen karena berisiko memicu serangan hipoglikemia akut yang mengancam nyawa.',
        cat: 'Diet & Metabolisme',
        read: '8 menit baca',
        img: IMG.hero,
    },
    {
        title: 'Analisis Zat Gizi Mikro pada Remaja Putri: Pencegahan Anemia Sejak Dini',
        excerpt: 'Mengapa pemenuhan zat besi dan vitamin C esensial bagi remaja. Dampak anemia jangka panjang terhadap produktivitas dan persiapan kesehatan reproduksi di masa depan.',
        content: 'Tingginya prevalensi anemia defisiensi besi di kalangan remaja putri di Indonesia merupakan ancaman serius bagi pembangunan kualitas sumber daya manusia jangka panjang. Remaja putri memiliki kerentanan biologis yang tinggi terhadap ketidakseimbangan zat besi karena percepatan pertumbuhan linier (*growth spurt*) dikombinasikan dengan kehilangan darah rutin akibat siklus menstruasi bulanan.\n\n### 1. Dampak Klinis Anemia terhadap Fungsi Kognitif dan Kesehatan Reproduksi\nZat besi (Fe) adalah komponen penyusun molekul hemoglobin dalam sel darah merah, yang bertanggung jawab mengikat dan mengedarkan oksigen dari paru-paru ke seluruh jaringan tubuh, termasuk otak. Kekurangan hemoglobin menurunkan suplai oksigen serebral secara drastis, bermanifestasi secara klinis sebagai gejala 5L (Lesu, Lelah, Letih, Lemah, Lalai), penurunan daya konsentrasi belajar, serta penurunan fungsi imunitas.\n\nSecara epidemiologi, remaja putri adalah calon ibu di masa depan. Kegagalan mengoreksi status anemia sejak dini meningkatkan risiko tinggi terjadinya kondisi anemia saat hamil nantinya. Hal ini memicu patologi plasenta yang membatasi transfer nutrisi ke janin, meningkatkan mortalitas ibu melahirkan, serta menjadi faktor risiko utama kelahiran bayi dengan *Berat Badan Lahir Rendah* (BBLR) dan stunting kronis.\n\n### 2. Sinergisme Zat Besi Heme vs Non-Heme dengan Asam Askorbat\nDalam penyusunan terapi diet nutrisi, kita harus membedakan bioavailabilitas (daya serap) dari dua bentuk zat besi dalam makanan:\n\n* **Zat Besi Heme (Sumber Hewani):** Ditemukan pada hati sapi, daging merah, ikan kembung, dan kerang. Tingkat penyerapan di mukosa usus sangat tinggi, berkisar antara **15% - 35%**, dan tidak dipengaruhi oleh zat penghambat pangan.\n* **Zat Besi Non-Heme (Sumber Nabati):** Ditemukan pada bayam, kangkung, daun singkong, dan kacang-kacangan. Tingkat penyerapan sangat rendah, hanya berkisar **2% - 10%**, karena terikat oleh senyawa asam fitat dan tanin.\n\nUntuk mengoptimalkan penyerapan zat besi non-heme, wajib menyertakan asupan **Vitamin C (Asam Askorbat)** dalam jam makan yang sama. Vitamin C mereduksi zat besi feri menjadi fero yang lebih larut dan mudah diserap oleh enterosit usus. Sebaliknya, konsumsi teh atau kopi harus dihindari minimal 2 jam sebelum dan sesudah makan karena kandungan zat polifenol dan tanin di dalamnya mengikat zat besi sehingga tidak dapat diserap tubuh.\n\n### 3. Rekomendasi Protokol Suplementasi\nSelain perbaikan pola makan harian berbasis piring sehat seimbang, program nasional mewajibkan pemberian Tablet Tambah Darah (TTD) yang mengandung minimal **60 mg Zat Besi Elemental** dan **400 mcg Asam Folat**. Protokol klinis yang disarankan adalah konsumsi 1 tablet setiap minggu sepanjang tahun bagi remaja putri usia sekolah, diminum bersama air putih atau jus buah kaya vitamin C, bukan bersama susu atau teh.',
        cat: 'Gizi Masyarakat',
        read: '7 menit baca',
        img: IMG.author,
    },
    {
        title: 'Peran Antioksidan Eksogen dalam Menangkal Stres Oksidatif',
        excerpt: 'Bagaimana radikal bebas merusak sel tubuh dan cara optimal mengonsumsi makanan kaya vitamin A, C, dan E untuk mendukung sistem pertahanan internal tubuh.',
        content: 'Setiap detik, tubuh manusia terpapar oleh radikal bebas, baik yang dihasilkan dari produk sampingan metabolisme internal seluler (respirasi mitokondria) maupun paparan eksternal seperti polusi udara, radiasi ultraviolet, dan asap rokok. Ketika konsentrasi radikal bebas melebihi kapasitas sistem pertahanan alami tubuh, terjadilah kondisi kerusakan biologis berbahaya yang disebut **Stres Oksidatif**.\n\n### 1. Mekanisme Kerusakan Seluler oleh Radikal Bebas\nRadikal bebas, seperti *Reactive Oxygen Species* (ROS), adalah molekul kimia yang tidak stabil karena kehilangan elektron pada orbit terluarnya. Untuk mencapai kestabilan, molekul ini secara agresif merebut elektron dari makromolekul tubuh yang sehat, termasuk lipid membran sel, protein struktural, dan untaian DNA seluler.\n\nKerusakan oksidatif pada lipid membran sel memicu reaksi berantai yang merusak integritas dinding sel (*lipid peroxidation*). Jika radikal bebas merusak struktur untaian DNA tanpa adanya perbaikan sistem seluler, dapat terjadi mutasi genetik yang melandasi inisiasi karsinogenesis (pembentukan sel kanker) serta mempercepat penuaan seluler dini dan penyakit kardiovaskular.\n\n### 2. Sinergi Tiga Serangkai Antioksidan Eksogen (Vitamin A, C, dan E)\nUntuk menetralisir radikal bebas sebelum merusak komponen sel, tubuh membutuhkan pasokan antioksidan eksogen dari asupan makanan sehari-hari. Tiga mikronutrien utama bekerja dalam jaringan sinergis yang sangat rapi:\n\n* **Vitamin E (Alfa-Tokoferol):** Bersifat larut dalam lemak (*lipophilic*). Vitamin E bertindak sebagai benteng pertahanan pertama di dalam membran sel, menangkap radikal bebas yang mencoba merusak lipid membran.\n* **Vitamin C (Asam Askorbat):** Bersifat larut dalam air (*hydrophilic*). Setelah Vitamin E menetralisir radikal bebas, molekul Vitamin E sendiri menjadi tidak stabil. Vitamin C bekerja mendonasikan elektron untuk meregenerasi kembali fungsi Vitamin E yang rusak di perbatasan cairan sel.\n* **Vitamin A (Beta-Karoten):** Bertindak sebagai pembersih radikal bebas pada kondisi tekanan oksigen rendah di dalam jaringan epitel organ tubuh.\n\n### 3. Prinsip Diversifikasi Warna Pangan (Dietary Phytochemicals)\nStrategi terbaik mendapatkan perlindungan antioksidan maksimal adalah menerapkan prinsip diversifikasi warna sayuran dan buah harian. Perbedaan warna mencerminkan jenis senyawa fitokimia aktif di dalamnya:\n* **Warna Merah (Tomat/Semangka):** Kaya kandungan Likopen, sangat efektif melindungi kesehatan prostat dan pembuluh darah.\n* **Warna Jingga/Kuning (Wortel/Jeruk):** Kaya Beta-Karoten dan Kriptoxantin untuk kesehatan mata dan imunitas seluler.\n* **Warna Ungu/Biru (Kol Ungu/Beri):** Kaya Antosianin, sejenis antioksidan kuat yang melindungi integritas pembuluh darah kapiler otak.',
        cat: 'Micronutrients',
        read: '9 menit baca',
        img: IMG.berries,
    },
    {
        title: 'Bebas Gluten (Gluten-Free): Kebutuhan Medis atau Sekadar Tren Gaya Hidup?',
        excerpt: 'Membedakan penyakit Celiac, intoleransi gluten, dan miskonsepsi publik yang menganggap produk bebas gluten selalu lebih sehat untuk menurunkan berat badan.',
        content: 'Industri makanan modern saat ini dipenuhi oleh produk bersertifikat bebas gluten (*Gluten-Free*). Iklan komersial sering kali mengasosiasikan label bebas gluten dengan konsep penurunan berat badan cepat, kebugaran tingkat tinggi, dan pola hidup yang lebih bersih. Namun, dari sudut pandang gastroenterologi dan sains gizi, eliminasi total protein gluten tanpa indikasi klinis yang jelas adalah keputusan yang tidak tepat.\n\n### 1. Memahami Struktur Protein Gluten dan Indikasi Medis Riil\nGluten adalah jaringan matriks protein komposit yang terbentuk dari penggabungan senyawa gliadin dan glutenin. Protein ini secara alami ditemukan pada serealia jenis gandum (*wheat*), jelai (*barley*), dan gandum hitam (*rye*). Gluten berfungsi memberikan sifat elastis, kenyal, dan membantu adonan roti untuk mengembang dengan baik.\n\nBerdasarkan diagnosis patologi medis, diet eliminasi bebas gluten **wajib hukumnya** diterapkan seumur hidup hanya untuk tiga kelompok populasi klinis berikut:\n* 1. **Penyakit Celiac (Celiac Disease):** Penyakit autoimun herediter di mana konsumsi gluten memicu sistem imun menyerang dan merusak vili usus halus secara total, menyebabkan malabsorbsi gizi parah.\n* 2. **Non-Celiac Gluten Sensitivity (NCGS):** Pasien yang mengalami gejala gastrointestinal (kembung, diare) setelah konsumsi gandum, namun tidak menunjukkan kerusakan autoimun celiac.\n* 3. **Alergi Gandum (Wheat Allergy):** Reaksi alergi berbasis imunoglobulin E (IgE) terhadap fraksi protein gandum.\n\n### 2. Mitos Penurunan Berat Badan dan Miskonsepsi Nutrisi\nBagi masyarakat umum yang memiliki saluran pencernaan normal tanpa sensitivitas medis, mengonsumsi produk berlabel "Gluten-Free" komersial dengan ekspektasi menurunkan berat badan adalah sebuah miskonsepsi gizi. Banyak produk bebas gluten olahan industri yang justru memiliki indeks glikemik yang lebih tinggi karena tepung gandum digantikan oleh tepung tapioka, pati jagung, atau tepung beras rafinasi.\n\nSelain itu, untuk mempertahankan tekstur dan rasa gurih yang hilang akibat ketiadaan gluten, produsen makanan sering kali menambahkan volume gula sederhana, natrium, dan lemak trans ekstra. Akibatnya, produk pangan komersial bebas gluten sering kali memiliki **densitas kalori yang jauh lebih tinggi dan miskin serat pangan** dibandingkan produk gandum utuh asli. Keputusan menerapkan diet harus selalu didasarkan pada kebutuhan fisiologis klinis organ tubuh, bukan sekadar mengikuti narasi pemasaran industri komersial.',
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

const SUPABASE_URL = "https://harpdcqmrqdgckcuhxfr.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_ppzSXi7DuN7v0racT9l98A_JxK5-MGG";

const HomePage = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeArticle, setActiveArticle] = useState(null);
    
    // STATE BARU: Untuk menyimpan daftar artikel gabungan (Lokal + Supabase)
    const [articlesList, setArticlesList] = useState(local_articles);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        
        // FUNGSI BARU: Ambil data dari Supabase
        const fetchArticles = async () => {
            try {
                const response = await fetch(`${SUPABASE_URL}/rest/v1/rayliziie_articles?select=*`, {
                    headers: {
                        'apikey': SUPABASE_ANON_KEY,
                        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
                    }
                });
                
                if (response.ok) {
                    const data = await response.json();
                    const dbArticles = data.map(doc => ({
                        title: doc.title,
                        excerpt: doc.content.substring(0, 100) + '...', // Buat ringkasan otomatis
                        content: doc.content,
                        cat: doc.category || 'Info Gizi Terkini',
                        read: '5 menit baca',
                        img: doc.image_url || IMG.hero
                    }));
                    
                    // Gabungkan artikel lokal bawaan dengan artikel dari database
                    setArticlesList([...local_articles, ...dbArticles]);
                }
            } catch (error) {
                console.error("Gagal mengambil artikel dari Supabase:", error);
            }
        };

        fetchArticles();

        return () => window.removeEventListener('scroll', onScroll);
    }, []); // Array kosong = hanya dijalankan sekali saat komponen dimuat

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
            {/* Header Navigasi */}
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
                            </div>
                            <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-600 text-[#1A365D] transition-colors group-hover:text-[#319795]">
                                Baca Ulasan Lengkap <ArrowUpRight className="h-4 w-4" />
                            </span>
                        </div>
                    </button>
                </Reveal>
            </section>

            {/* Grid Artikel Terbaru - MENGGUNAKAN STATE articlesList */}
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
                        {articlesList.map((a, i) => (
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

            {/* Bagian Komitmen Komite Editorial */}
            <section id="editorial-team" className="mx-auto max-w-[80rem] px-6 py-20 md:py-28">
                <Reveal>
                    <div className="grid items-center gap-10 rounded-3xl border border-[#1A365D]/10 bg-white p-8 shadow-sm md:p-12">
                        <div>
                            <span className="text-xs font-600 uppercase tracking-widest text-[#319795]">Standar Editorial Kami</span>
                            <blockquote className="mt-3 font-display text-xl font-550 leading-relaxed text-[#1A365D] md:text-2xl">
                                &ldquo;Kami hanya mempublikasikan apa yang didukung oleh pembuktian sains yang kuat. Jika bukti ilmiah di lapangan masih belum pasti, kami akan mengatakannya secara jujur — karena kepercayaan dibangun atas dasar kejujuran fakta, bukan sekadar sensasi pemasaran.&rdquo;
                            </blockquote>
                            
                            {/* Pembagian Tim Reviewer / Editor */}
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

            {/* Kaki Halaman / Footer */}
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

            {/* Halaman Pembaca Penuh (Full-screen Article Page Overlay) */}
            {activeArticle && (
                <div className="fixed inset-0 z-50 overflow-y-auto bg-white animate-in fade-in duration-200">
                    {/* Top Bar */}
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

                    {/* Area Konten Utama */}
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
