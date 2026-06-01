/**
 * =============================================================
 *  main.js — Ana JavaScript Dosyası
 * =============================================================
 *  Bu dosya sitenin tüm dinamik işlevlerini yönetir:
 *  - Blog kartlarının listelenmesi
 *  - Kategori filtreleme
 *  - Arama özelliği
 *  - Mobil menü
 *  - Blog detay sayfası
 * =============================================================
 */

// ─────────────────────────────────────────────────────────────
//  YARDIMCI FONKSİYONLAR
// ─────────────────────────────────────────────────────────────

/**
 * URL'deki query parametresini okur.
 * Örnek: post.html?id=2  →  getParam("id") → "2"
 */
function getParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

/**
 * Metin içindeki HTML etiketlerini temizler (arama için kullanılır).
 */
function stripHtml(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

/**
 * Belirtilen kategorinin renk sınıfını döndürür.
 */
function categoryClass(category) {
  const map = {
    "Teknoloji": "cat-teknoloji",
    "Kültür":    "cat-kultur",
    "Araştırma": "cat-arastirma",
    "Eğitim":    "cat-egitim",
    "Genel":     "cat-genel"
  };
  return map[category] || "cat-genel";
}

// ─────────────────────────────────────────────────────────────
//  MOBİL MENÜ
// ─────────────────────────────────────────────────────────────

function initMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (!toggle || !navLinks) return;

  toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", isOpen);
    toggle.innerHTML = isOpen
      ? '<span></span><span></span><span></span>'   // hamburger (açık hâlde de gösterilir)
      : '<span></span><span></span><span></span>';
    toggle.classList.toggle("is-active", isOpen);
  });

  // Dışarı tıklandığında menüyü kapat
  document.addEventListener("click", (e) => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("nav-open");
      toggle.classList.remove("is-active");
      toggle.setAttribute("aria-expanded", false);
    }
  });
}

// ─────────────────────────────────────────────────────────────
//  ANA SAYFA — BLOG KARTLARI
// ─────────────────────────────────────────────────────────────

/**
 * Tek bir blog yazısı için kart HTML'i üretir.
 */
function createPostCard(post) {
  // Kapak görseli yoksa yer tutucu göster
  const imgSrc = post.coverImage || "assets/images/placeholder.jpg";

  return `
    <article class="post-card" data-category="${post.category}">
      <a href="post.html?id=${post.id}" class="card-image-link" aria-label="${post.title}">
        <div class="card-image-wrapper">
          <img
            src="${imgSrc}"
            alt="${post.title}"
            class="card-image"
            onerror="this.src='assets/images/placeholder.jpg'"
            loading="lazy"
          />
        </div>
      </a>
      <div class="card-body">
        <div class="card-meta">
          <span class="category-badge ${categoryClass(post.category)}">${post.category}</span>
          <time class="card-date" datetime="${post.date}">${post.date}</time>
        </div>
        <h2 class="card-title">
          <a href="post.html?id=${post.id}">${post.title}</a>
        </h2>
        <p class="card-summary">${post.summary}</p>
        <div class="card-footer">
          <span class="card-author">✍ ${post.author}</span>
          <a href="post.html?id=${post.id}" class="btn-read-more" aria-label="${post.title} yazısını oku">
            Devamını Oku
          </a>
        </div>
      </div>
    </article>
  `;
}

/**
 * Öne çıkan yazı için büyük hero kartı üretir.
 */
function createFeaturedCard(post) {
  const imgSrc = post.coverImage || "assets/images/placeholder.jpg";

  return `
    <article class="featured-card">
      <a href="post.html?id=${post.id}" class="featured-image-link" aria-label="${post.title}">
        <div class="featured-image-wrapper">
          <img
            src="${imgSrc}"
            alt="${post.title}"
            class="featured-image"
            onerror="this.src='assets/images/placeholder.jpg'"
          />
          <div class="featured-overlay"></div>
        </div>
      </a>
      <div class="featured-body">
        <div class="featured-tag">⭐ Öne Çıkan Yazı</div>
        <div class="card-meta">
          <span class="category-badge ${categoryClass(post.category)}">${post.category}</span>
          <time class="card-date" datetime="${post.date}">${post.date}</time>
        </div>
        <h2 class="featured-title">
          <a href="post.html?id=${post.id}">${post.title}</a>
        </h2>
        <p class="featured-summary">${post.summary}</p>
        <div class="card-footer">
          <span class="card-author">✍ ${post.author}</span>
          <a href="post.html?id=${post.id}" class="btn-read-more btn-featured">
            Devamını Oku
          </a>
        </div>
      </div>
    </article>
  `;
}

// ─────────────────────────────────────────────────────────────
//  ANA SAYFA — FİLTRELEME & ARAMA
// ─────────────────────────────────────────────────────────────

let currentCategory = "Tümü";
let currentSearch   = "";

/**
 * Aktif filtre ve arama terimine göre kartları gösterir/gizler.
 */
function filterPosts() {
  const cards = document.querySelectorAll(".post-card");
  const noResult = document.getElementById("noResult");
  let visibleCount = 0;

  cards.forEach((card) => {
    const cardCategory = card.dataset.category;
    const cardText = card.innerText.toLowerCase();
    const matchCat = currentCategory === "Tümü" || cardCategory === currentCategory;
    const matchSearch = currentSearch === "" || cardText.includes(currentSearch.toLowerCase());

    if (matchCat && matchSearch) {
      card.style.display = "";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  if (noResult) {
    noResult.style.display = visibleCount === 0 ? "block" : "none";
  }
}

/**
 * Kategori butonlarını oluşturur ve tıklama olaylarını bağlar.
 */
function initCategoryFilter() {
  const filterContainer = document.getElementById("categoryFilters");
  if (!filterContainer) return;

  // Yazılardan benzersiz kategorileri topla
  const categories = ["Tümü", ...new Set(posts.map((p) => p.category))];

  filterContainer.innerHTML = categories
    .map(
      (cat) =>
        `<button
          class="filter-btn ${cat === "Tümü" ? "active" : ""}"
          data-cat="${cat}"
          aria-pressed="${cat === "Tümü"}"
        >${cat}</button>`
    )
    .join("");

  filterContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    currentCategory = btn.dataset.cat;

    // Aktif sınıfı güncelle
    filterContainer.querySelectorAll(".filter-btn").forEach((b) => {
      b.classList.toggle("active", b === btn);
      b.setAttribute("aria-pressed", b === btn);
    });

    filterPosts();
  });
}

/**
 * Arama kutusunu başlatır.
 */
function initSearch() {
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value.trim();
    filterPosts();
  });
}

// ─────────────────────────────────────────────────────────────
//  ANA SAYFA — BAŞLATMA
// ─────────────────────────────────────────────────────────────

function initIndexPage() {
  // Öne çıkan yazı
  const featuredPost  = posts.find((p) => p.featured);
  const featuredArea  = document.getElementById("featuredPost");
  if (featuredArea && featuredPost) {
    featuredArea.innerHTML = createFeaturedCard(featuredPost);
  }

  // Diğer tüm yazılar (featured olmayan veya tüm yazılar)
  const postsGrid = document.getElementById("postsGrid");
  if (!postsGrid) return;

  // Öne çıkan yazıyı en üste koy, gerisini tarihe göre sırala
  const sortedPosts = [...posts].sort((a, b) => b.id - a.id);
  postsGrid.innerHTML = sortedPosts.map(createPostCard).join("");

  initCategoryFilter();
  initSearch();
  filterPosts();
}

// ─────────────────────────────────────────────────────────────
//  DETAY SAYFASI
// ─────────────────────────────────────────────────────────────

/**
 * Ek görseller galerisini oluşturur.
 */
function renderImages(images) {
  if (!images || images.length === 0) return "";

  return `
    <section class="post-gallery" aria-label="Ek Görseller">
      <h3 class="gallery-heading">Görseller</h3>
      <div class="gallery-grid">
        ${images
          .map(
            (img) => `
          <figure class="gallery-item">
            <img
              src="${img.src}"
              alt="${img.alt}"
              class="gallery-img"
              onerror="this.parentElement.style.display='none'"
              loading="lazy"
            />
            ${img.caption ? `<figcaption class="gallery-caption">${img.caption}</figcaption>` : ""}
          </figure>
        `
          )
          .join("")}
      </div>
    </section>
  `;
}

/**
 * Video alanını oluşturur. YouTube veya yerel video destekler.
 */
function renderVideo(video) {
  if (!video) return "";

  let videoHtml = "";

  if (video.type === "youtube") {
    // YouTube embed — src "youtube.com/embed/..." formatında olmalı
    videoHtml = `
      <div class="video-wrapper">
        <iframe
          src="${video.src}"
          title="${video.caption || "Video"}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
    `;
  } else if (video.type === "local") {
    // Yerel MP4/WebM dosyası
    videoHtml = `
      <div class="video-wrapper">
        <video controls preload="metadata">
          <source src="${video.src}" type="video/mp4" />
          Tarayıcınız video oynatmayı desteklemiyor.
        </video>
      </div>
    `;
  }

  return `
    <section class="post-video" aria-label="Video">
      <h3 class="gallery-heading">Video</h3>
      ${videoHtml}
      ${video.caption ? `<p class="video-caption">${video.caption}</p>` : ""}
    </section>
  `;
}

/**
 * Blog detay sayfasını oluşturur.
 */
function initPostPage() {
  const postId   = parseInt(getParam("id"), 10);
  const post     = posts.find((p) => p.id === postId);
  const container = document.getElementById("postDetail");

  if (!container) return;

  // Yazı bulunamazsa hata mesajı göster
  if (!post) {
    container.innerHTML = `
      <div class="not-found">
        <p>Yazı bulunamadı.</p>
        <a href="index.html" class="btn-back">← Ana Sayfaya Dön</a>
      </div>
    `;
    document.title = "Yazı Bulunamadı";
    return;
  }

  // Sayfa başlığını güncelle
  document.title = `${post.title} — Blog`;

  // Kapak görseli
  const imgSrc = post.coverImage || "assets/images/placeholder.jpg";

  container.innerHTML = `
    <article class="post-article">

      <!-- Kapak Görseli -->
      <div class="post-cover-wrapper">
        <img
          src="${imgSrc}"
          alt="${post.title}"
          class="post-cover"
          onerror="this.src='assets/images/placeholder.jpg'"
        />
      </div>

      <!-- Başlık & Meta Bilgiler -->
      <header class="post-header">
        <div class="card-meta">
          <span class="category-badge ${categoryClass(post.category)}">${post.category}</span>
          <time class="card-date" datetime="${post.date}">${post.date}</time>
        </div>
        <h1 class="post-title">${post.title}</h1>
        <p class="post-author">✍ ${post.author} tarafından</p>
      </header>

      <!-- Yazı İçeriği -->
      <div class="post-content">
        ${post.content}
      </div>

      <!-- Ek Görseller -->
      ${renderImages(post.images)}

      <!-- Video -->
      ${renderVideo(post.video)}

      <!-- Geri Dön Butonu -->
      <div class="post-back">
        <a href="index.html" class="btn-back">← Ana Sayfaya Dön</a>
      </div>

    </article>
  `;
}

// ─────────────────────────────────────────────────────────────
//  HAKKINDA SAYFASI — (İçerik about.html dosyasındadır,
//  dinamik bir iş yok, bu sayfa statik çalışır.)
// ─────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────
//  BAŞLATICI — Hangi sayfada olduğumuza göre ilgili
//  fonksiyonu çağırır.
// ─────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  // Tüm sayfalarda mobil menüyü başlat
  initMobileMenu();

  // Sayfa tipini body'deki data-page özelliğiyle belirle
  const page = document.body.dataset.page;

  if (page === "index") {
    initIndexPage();
  } else if (page === "post") {
    initPostPage();
  }
  // "about" sayfasında ekstra JS gerekmiyor
});
