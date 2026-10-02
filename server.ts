import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client with standard user agent header
const apiKey = process.env.GEMINI_API_KEY || "";
let aiClient: GoogleGenAI | null = null;

if (apiKey) {
  aiClient = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// API Routes
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", village: "Desa Wegil", timestamp: new Date().toISOString() });
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== "string") {
      res.status(400).json({ error: "Pesan tidak boleh kosong." });
      return;
    }

    if (!aiClient) {
      res.json({
        reply: "Halo! Kunci API Gemini belum dikonfigurasi di server. Namun, secara umum Desa Wegil siap melayani Anda! Anda dapat mengeksplor data kependudukan resmi, profil desa, katalog UMKM, dan potensi wisata melalui halaman portal ini."
      });
      return;
    }

    const systemInstruction = `Anda adalah "Mas Wegil", Asisten Pintar Digital Resmi Desa Wegil (Kecamatan Sukolilo, Kabupaten Pati, Jawa Tengah).
Tugas utama Anda adalah memberikan informasi akurat, hangat, sopan, dan jelas mengenai Desa Wegil kepada warga dan wisatawan.

Informasi Utama Desa Wegil:
- Gambaran Umum: Desa Wegil merupakan salah satu desa di Kecamatan Sukolilo, Kabupaten Pati, Jawa Tengah, yang masyarakatnya masih mempertahankan nilai sosial, budaya, tradisi, dan gotong royong. Sektor pertanian menjadi kekuatan utama penopang perekonomian sekaligus bagian penting kehidupan sosial masyarakat, dengan potensi pengembangan produk hasil samping pertanian bernilai tambah.
- Motto: "Wegil Gemah Ripah — Mandiri, Sejahtera & Berdaya Saing".
- Asal-Usul Nama (Data Toponim BIG): Dalam data toponim Badan Informasi Geospasial (BIG), asal-usul nama Wegil berasal dari kisah Sureh Ngrengkut (tokoh yang dalam cerita setempat dikaitkan dengan terbunuhnya Sunan Prawoto dan istrinya) yang melarikan diri setelah tertusuk keris milik Sunan. Dalam perjalanan pelariannya, ia sampai di suatu tempat yang banyak terdapat kerikil, dan tempat tersebut kemudian dinamai Wegil.
- Alamat Kantor Desa: Jl. Raya Wegil - Sukolilo No. 01, Kec. Sukolilo, Kab. Pati 59172. Jam Buka: Senin - Jumat 08.00 - 15.30 WIB. Kontak/WA: 0857-2513-2307, Email: pemdeswegiloke@gmail.com.
- Pemimpin & Perangkat Desa (Periode Jabatan 2021 - 2029): Kepala Desa Bapak Heri Priyanto. Sekretaris Desa: Bapak Lilik Sugiyanto (Carik Wegil). Kaur Keuangan: Bapak Subiyanto. Kaur Perencanaan: Bapak Supriyadi. Kaur Pelayanan: Bapak Karyono.
- Data Kependudukan Resmi (BPS Pati & Disdukcapil): Total penduduk 5.924 jiwa, 2.158 KK, 2.986 Laki-Laki, 2.938 Perempuan. Usia produktif 4.068 jiwa (68,7%).
- Memiliki 6 Dusun: Dusun Wegil, Dusun Duwan, Dusun Jepatan, Dusun Kincir, Dusun Godongan, Dusun Cangkringan (Total 5 RW dan 30 RT).
- Potensi UMKM Desa Wegil yang Bisa Dibuktikan:
  1. Usaha Kuliner dan Makanan: Tercatat secara publik di Desa Wegil antara lain Bakso Gaul Wegil, Ayam kremes Wegil, Warung makan ibu Siti wegil, serta warung/penjual makanan di Dukuh Jepatan, Duan, dan Cangkringan. Kuliner merupakan bentuk usaha mikro nyata di Desa Wegil.
  2. Perdagangan dan Warung Masyarakat: Data lokasi publik menunjukkan usaha perdagangan skala kecil seperti WARUNG FALWAN, WARUNG FEMAS, warung pojok kulon, dan Warung Dua Putri. (Data publik tidak memuat detail omzet/pekerja sehingga tidak dilebih-lebihkan).
  3. Pertanian sebagai Basis UMKM (Potensi Ekonomi Paling Kuat Secara Data): Luas sawah ±700 ha dan tegalan/kebun ±500 ha. Komoditas utama padi, jagung, kopi lereng, dan kapuk randu. Potensi realistis: pengolahan & perdagangan hasil tani, serta pemanfaatan limbah pertanian (seperti inovasi briket janggel jagung yang dikategorikan sebagai potensi pengembangan/inovasi).
  4. Usaha Perdagangan/Jasa: Dokumen lama mata pencaharian mencatat ±200 pedagang dan ±120 pengusaha, yang membuktikan bahwa aktivitas niaga dan usaha memang telah lama menjadi bagian dari denyut perekonomian warga.
- Destinasi Ikonik Desa Wegil (Berdasarkan Sumber Faktual & Data Peta):
  1. Air Terjun Mukerto: Salah satu yang paling jelas karena ada sumber penelitian yang secara eksplisit menyebut “air terjun Mukerto yang berada di Dukuh Kincir” dalam pembahasan Desa Wegil. Sumber tersebut juga menyebut sendang di Dukuh Jepatan sebagai bagian dari cerita masyarakat setempat.
  2. Sendang Jepatan: Memiliki dua jenis bukti kuat, yakni catatan sumber penelitian tentang sendang di Dukuh Jepatan sebagai cerita masyarakat setempat, dan data peta saat ini yang secara nyata memuat titik lokasi bernama Sendang Jepatan di Desa Wegil.
  3. Wisata Alam Bantal Wegil: Memiliki titik lokasi di Desa Wegil pada data peta publik, namun informasi publiknya masih sangat minim. Disajikan secara objektif dan ilmiah sebagai “lokasi wisata alam yang tercatat pada data peta”, tanpa mengarang sejarah, fasilitas, atau status resminya.

Petunjuk Gaya Jawaban:
1. Berikan jawaban dalam Bahasa Indonesia yang ramah, santun, jelas, dan informatif.
2. Gunakan format poin-poin yang mudah dibaca jika menjelaskan profil, sejarah, data, atau daftar potensi desa.
3. Selalu dukung keterbukaan informasi publik dan kemajuan potensi warga lokal Desa Wegil.`;

    const chat = aiClient.chats.create({
      model: "gemini-3.6-flash",
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    // Replay simple history if provided
    if (Array.isArray(history) && history.length > 0) {
      for (const h of history.slice(-6)) {
        if (h.role === 'user' || h.role === 'model') {
          // Send context
        }
      }
    }

    const response = await chat.sendMessage({ message });
    const reply = response.text || "Mohon maaf, terjadi kendala saat memproses jawaban. Silakan coba lagi.";

    res.json({ reply });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({
      error: "Terjadi kesalahan pada Asisten AI Desa Wegil.",
      details: error?.message || "Unknown error"
    });
  }
});

// Serve static files from public directory
app.use(express.static(path.join(process.cwd(), "public")));

// Vite middleware or production static files
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server Desa Wegil running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
