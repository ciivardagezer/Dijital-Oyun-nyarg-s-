# 📚 Akademi Blog — Proje Kılavuzu

Kodlama bilmeyen grup üyeleri için adım adım rehber.

---

## 📁 Dosya Yapısı

```
blog-sitesi/
│
├── index.html          → Ana sayfa (blog listesi)
├── post.html           → Yazı detay sayfası
├── about.html          → Hakkında sayfası
│
├── css/
│   └── style.css       → Tüm tasarım kuralları (genellikle dokunmayın)
│
├── js/
│   ├── posts.js        ← ✏️ YENİ YAZI BURAYA EKLENİR
│   └── main.js         → Site mantığı (dokunmayın)
│
├── assets/
│   ├── images/         ← 🖼️ Görseller buraya koyulur
│   └── videos/         ← 🎬 Yerel videolar buraya koyulur
│
└── README.md           → Bu dosya
```

---

## 🚀 Siteyi Bilgisayarınızda Çalıştırma

### Yöntem 1 — VS Code ile (Önerilen)

1. [Visual Studio Code](https://code.visualstudio.com/) uygulamasını indirin ve kurun.
2. VS Code'u açın → **File > Open Folder** → `blog-sitesi` klasörünü seçin.
3. Sol taraftaki uzantılar (Extensions) simgesine tıklayın.
4. Arama kutusuna `Live Server` yazın → ilk çıkan uzantıyı kurun.
5. Sağ altta beliren **Go Live** düğmesine tıklayın.
6. Tarayıcınızda `http://127.0.0.1:5500` adresi otomatik açılır.

### Yöntem 2 — Python ile (Kurulum gerektirmez, Python varsa)

Komut satırını (terminal) açın, `blog-sitesi` klasörüne girin ve şunu yazın:

```bash
# Python 3 için:
python -m http.server 8000
```

Ardından tarayıcınızda `http://localhost:8000` adresine gidin.

### ⚠️ Önemli Not

`index.html` dosyasını **doğrudan çift tıklayarak** açmayın.  
Çift tıklama ile açılan sitelerde JavaScript çalışmayabileceğinden  
yazılar görünmez. Yukarıdaki yöntemlerden birini kullanın.

---

## ✏️ Yeni Blog Yazısı Ekleme

Tüm yazılar `js/posts.js` dosyasında tutulur.  
Aşağıdaki adımları izleyin:

### 1. `js/posts.js` dosyasını açın

Herhangi bir metin editörü ile açabilirsiniz:
- **Windows:** Notepad, VS Code
- **Mac:** TextEdit (düz metin modunda), VS Code

### 2. Son yazının altına yeni yazıyı ekleyin

Dosyanın sonundaki `];` satırından hemen **önce** bir virgül koyun,  
ardından yeni yazıyı aşağıdaki şablona göre ekleyin:

```javascript
  ,
  {
    id: 4,                         // Bir önceki id'nin +1 fazlası olsun
    title: "Yazı Başlığı",
    summary: "Kısa özet (1-2 cümle).",
    date: "1 Haziran 2025",
    author: "Yazar Adı Soyadı",
    category: "Genel",             // Seçenekler: Araştırma / Teknoloji / Kültür / Eğitim / Genel
    coverImage: "assets/images/kapak-gorseli.jpg",
    featured: false,               // Sadece 1 yazıda true olabilir
    content: `
      <p>Birinci paragraf buraya.</p>

      <h2>Bir Başlık</h2>
      <p>İkinci paragraf buraya.</p>

      <ul>
        <li>Liste maddesi 1</li>
        <li>Liste maddesi 2</li>
      </ul>
    `,
    images: [
      {
        src: "assets/images/ek-gorsel.jpg",
        alt: "Görsel açıklaması",
        caption: "Alt yazı (isteğe bağlı)"
      }
    ],
    video: null                    // Video yoksa null yazın
  }
```

### 3. Dosyayı kaydedin

**Ctrl + S** (Windows) veya **Cmd + S** (Mac) ile kaydedin.  
Tarayıcınızı yenileyin — yeni yazı otomatik görünür.

---

## 🖼️ Görsel Ekleme

1. Görsel dosyasını (`.jpg`, `.png`, `.webp` vb.) alın.
2. `assets/images/` klasörünün içine koyun.
3. `posts.js` dosyasında `coverImage` veya `images` alanına  
   dosya adını yazın:

```javascript
coverImage: "assets/images/dosya-adi.jpg"
```

**İpucu:** Dosya adlarında Türkçe karakter ve boşluk kullanmayın.  
`yapay zeka.jpg` yerine `yapay-zeka.jpg` yazın.

---

## 🎬 Video Ekleme

### YouTube Videosu

1. YouTube'da videoya gidin.
2. **Paylaş → Göm (Embed)** seçeneğine tıklayın.
3. Göm kodundaki `src="..."` adresini kopyalayın.  
   Adres `https://www.youtube.com/embed/VIDEO_ID` formatında olmalıdır.
4. `posts.js`'e şöyle ekleyin:

```javascript
video: {
  type: "youtube",
  src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  caption: "Video açıklaması (isteğe bağlı)"
}
```

### Yerel Video Dosyası

1. Video dosyasını (`.mp4` önerilir) `assets/videos/` klasörüne koyun.
2. `posts.js`'e şöyle ekleyin:

```javascript
video: {
  type: "local",
  src: "assets/videos/video-adi.mp4",
  caption: "Video açıklaması (isteğe bağlı)"
}
```

### Video Yoksa

```javascript
video: null
```

---

## 📝 Yazı İçeriğinde Kullanabileceğiniz HTML Etiketleri

| Ne Yazmak İstiyorsunuz | Kullanılacak Etiket |
|---|---|
| Normal paragraf | `<p>Metin</p>` |
| Büyük başlık | `<h2>Başlık</h2>` |
| Küçük başlık | `<h3>Alt Başlık</h3>` |
| **Kalın yazı** | `<strong>kalın</strong>` |
| *İtalik yazı* | `<em>italik</em>` |
| Madde listesi | `<ul><li>madde</li></ul>` |
| Numaralı liste | `<ol><li>madde</li></ol>` |
| Alıntı kutusu | `<blockquote>alıntı</blockquote>` |

---

## 🌟 Öne Çıkan Yazıyı Değiştirme

Ana sayfanın üstünde büyük gösterilen yazıyı değiştirmek için:

1. `js/posts.js` dosyasını açın.
2. Şu anda `featured: true` olan yazıyı bulun → `featured: false` yapın.
3. Öne çıkarılacak yeni yazıda `featured: true` yazın.

**Not:** Aynı anda yalnızca **bir** yazı `featured: true` olabilir.

---

## 🏷️ Kategori Sistemi

Mevcut kategoriler:

| Kategori | Renk |
|---|---|
| Araştırma | Yeşil |
| Teknoloji | Mavi |
| Kültür | Pembe |
| Eğitim | Turuncu |
| Genel | Mor |

Farklı bir kategori adı kullanmak isterseniz, `posts.js`'deki  
`category` alanına istediğiniz metni yazabilirsiniz.  
Renk otomatik olarak "Genel" rengiyle görünür.

---

## 👥 Hakkında Sayfasını Düzenleme

`about.html` dosyasını metin editörüyle açın.  
İçindeki açıklamalar size hangi satırı neden değiştireceğinizi gösterir.

**Grup üyesi eklemek için:**

```html
<li>
  <div class="member-icon">👤</div>
  <div>
    <p class="member-name">Ad Soyad</p>
    <p class="member-role">Rol</p>
  </div>
</li>
```

Bu bloğu kopyalayıp mevcut üyelerin altına yapıştırın.

---

## ❓ Sık Sorulan Sorular

**S: Yazı görünmüyor, ne yapmalıyım?**  
C: `posts.js` dosyasında her yazı arasında virgül olduğundan emin olun.  
Virgül unutmak en yaygın hatadır.

**S: Görsel yüklenmiyor.**  
C: Dosyanın `assets/images/` klasöründe olduğunu ve `posts.js`'deki  
yolun tam olarak aynı adı taşıdığını kontrol edin. Türkçe karakter  
ve boşluk kullanmayın.

**S: YouTube videosu "izin verilmedi" hatası veriyor.**  
C: YouTube'dan embed linkini kullandığınıza emin olun.  
Normal video linki (`youtube.com/watch?v=...`) değil,  
embed linki (`youtube.com/embed/...`) olmalı.

**S: Site mobilde bozuk görünüyor.**  
C: Tarayıcınızı ve önbelleği temizleyin (Ctrl+Shift+R).

---

*Akademi Blog — 2025*
