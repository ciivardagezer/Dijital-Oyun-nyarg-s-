/**
 * =============================================================
 *  posts.js — Blog Yazıları Veri Dosyası
 * =============================================================
 *  Tüm blog yazıları bu dosyada tutulur.
 *  Yeni yazı eklemek için aşağıdaki şablonu kopyalayıp
 *  "posts" dizisine (array) ekleyin.
 *
 *  ÖNEMLİ KURALLAR:
 *  - Her yazının "id" alanı benzersiz ve sayısal olmalıdır.
 *  - "featured: true" olan yazı ana sayfada öne çıkar.
 *  - Görsel dosyaları assets/images/ klasörüne koyun.
 *  - Video yoksa ilgili alanı "" (boş) bırakın.
 * =============================================================
 */

const posts = [

  // ─────────────────────────────────────────────
  //  YAZI 1
  // ─────────────────────────────────────────────
  {
    id: 1,

    // Yazının başlığı
    title: "Yapay Zeka ve Eğitimin Geleceği",

    // Kart üzerinde gösterilecek kısa özet (1-2 cümle)
    summary: "Yapay zeka teknolojileri eğitim dünyasını köklü biçimde dönüştürüyor. Kişiselleştirilmiş öğrenme deneyimlerinden otomatik değerlendirme sistemlerine kadar pek çok yeni uygulama hızla yaygınlaşıyor.",

    // Yayın tarihi (Gün Ay Yıl formatında yazın)
    date: "12 Mayıs 2025",

    // Yazarın adı
    author: "Ayşe Kaya",

    // Kategori (Araştırma / Teknoloji / Kültür / Eğitim / Genel)
    category: "Teknoloji",

    // Ana sayfa kartında ve detay sayfasının üstünde çıkan görsel
    // Dosyayı assets/images/ klasörüne koyup adını buraya yazın
    coverImage: "assets/images/ai-education.jpg",

    // Öne çıkan yazı mı? (true = ana sayfada büyük gösterilir, yalnızca 1 yazıda true olsun)
    featured: true,

    // ── YAZI İÇERİĞİ ────────────────────────────────────────
    // HTML etiketleri kullanabilirsiniz: <p>, <h2>, <h3>,
    // <ul>, <ol>, <li>, <strong>, <em>, <blockquote>
    content: `
      <p>Yapay zeka, son on yılda eğitim dünyasını derinden etkileyen en önemli teknolojik gelişmelerden biri haline geldi. Geleneksel sınıf ortamları, dijital platformlar ve akıllı sistemlerle bütünleşerek köklü bir dönüşüm geçiriyor.</p>

      <h2>Kişiselleştirilmiş Öğrenme</h2>
      <p>Yapay zeka destekli platformlar, her öğrencinin öğrenme hızını ve stilini analiz ederek kişiye özel içerik sunabilmektedir. Bu sayede geleneksel "herkese aynı müfredat" anlayışının yerini, bireysel ihtiyaçlara göre şekillenen dinamik öğrenme deneyimleri almaktadır.</p>
      <p>Araştırmalar, kişiselleştirilmiş öğrenme yaklaşımlarının öğrenci başarısını ortalama yüzde otuz oranında artırdığını ortaya koymaktadır. Özellikle matematik ve dil öğrenimi gibi alanlarda bu etki daha belirgin biçimde gözlemlenmektedir.</p>

      <h2>Otomatik Değerlendirme Sistemleri</h2>
      <p>Doğal dil işleme teknolojilerindeki ilerlemeler sayesinde yapay zeka, yazılı ödevleri ve açık uçlu soruları artık yüksek doğrulukla değerlendirebilmektedir. Bu gelişme, öğretmenlerin idari yükünü önemli ölçüde azaltırken öğrencilere anında ve ayrıntılı geri bildirim sunma imkânı sağlamaktadır.</p>

      <h2>Dikkat Edilmesi Gereken Noktalar</h2>
      <ul>
        <li>Teknolojiye erişimde eşitsizliklerin derinleşme riski</li>
        <li>Öğretmenin rolünün yeniden tanımlanması gerekliliği</li>
        <li>Veri gizliliği ve etik kullanım kaygıları</li>
        <li>İnsan ilişkisinin ve sosyal öğrenmenin korunması</li>
      </ul>

      <blockquote>
        "Yapay zeka öğretmenin yerini almayacak; ancak yapay zekayı kullanan öğretmenler, kullanmayanların yerini alacak." — Eğitim Teknolojileri Forumu, 2024
      </blockquote>

      <h2>Sonuç</h2>
      <p>Yapay zekanın eğitimdeki rolü tartışılmaz biçimde büyüyor. Ancak bu dönüşümden en iyi sonucu alabilmek için teknolojiyi insan merkezli bir yaklaşımla bütünleştirmek şart. Başarı yalnızca araçlarda değil, bu araçların nasıl ve hangi değerlerle kullanıldığında gizli.</p>
    `,

    // Yazı içinde gösterilecek ek görseller
    // Her nesne: { src: "dosya yolu", alt: "açıklama", caption: "alt yazı" }
    // Görseller yoksa diziyi boş bırakın: images: []
    images: [
      {
        src: "assets/images/ai-classroom.jpg",
        alt: "Yapay zeka destekli akıllı sınıf ortamı",
        caption: "Modern sınıflarda yapay zeka destekli öğrenme araçları giderek yaygınlaşıyor."
      },
      {
        src: "assets/images/student-tablet.jpg",
        alt: "Tablet kullanan öğrenci",
        caption: "Kişiselleştirilmiş öğrenme platformları her yaş grubuna hitap ediyor."
      }
    ],

    // Video alanı
    // YouTube linki için: { type: "youtube", src: "https://www.youtube.com/embed/VIDEO_ID" }
    // Yerel video için:   { type: "local",   src: "assets/videos/video-adi.mp4" }
    // Video yoksa:        null
    video: {
      type: "youtube",
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      caption: "Yapay zekanın eğitimdeki dönüştürücü etkisi — tanıtım videosu"
    }
  },

  // ─────────────────────────────────────────────
  //  YAZI 2
  // ─────────────────────────────────────────────
  {
    id: 2,
    title: "Anadolu Kültüründe Geleneksel El Sanatları",
    summary: "Nesilden nesile aktarılan Anadolu el sanatları, yalnızca bir zanaat değil; tarihin, kimliğin ve ortak belleğin taşıyıcısıdır. Bu değerli mirası yaşatmak için neler yapılabilir?",
    date: "28 Nisan 2025",
    author: "Mehmet Demir",
    category: "Kültür",
    coverImage: "assets/images/handicrafts.jpg",
    featured: false,
    content: `
      <p>Anadolu, binlerce yıllık kültürel birikimin üzerine inşa edilmiş eşsiz bir coğrafyadır. Bu topraklarda doğan el sanatları; dokumadan çömlekçiliğe, ahşap oymasından minyatür sanatına uzanan geniş bir yelpazede varlığını sürdürmektedir.</p>

      <h2>Kilimlerin Dili</h2>
      <p>Anadolu kilimleri, salt bir zemin örtüsü değildir. Her motif, belirli bir mesajı, inancı ya da yaşam deneyimini simgeler. Nazara karşı kullanılan göz motifleri, bereketi temsil eden nar desenleri ve koruyuculuğu simgeleyen eller, bu gizemli dilin en bilinen sembolleri arasındadır.</p>
      <p>Günümüzde bazı yöreler, kilim dokuma geleneğini kuşaktan kuşağa aktarmaya özenle devam etmektedir. Konya'nın Ladik ilçesi ile Ege'nin Bergama bölgesi, bu geleneğin en canlı örneklerini barındıran yerler arasında yer almaktadır.</p>

      <h2>Çömlekçilik Sanatı</h2>
      <p>Kütahya ve İznik çinileri, dünya seramik sanatı tarihinde ayrı bir yere sahiptir. On altıncı yüzyılda doruk noktasına ulaşan bu sanat, mimari süsleme alanında çığır açan eserler bırakmıştır. Osmanlı döneminin görkemli camilerini ve saraylarını donatan bu çiniler, bugün uluslararası müzelerin en değerli koleksiyonları arasında yer almaktadır.</p>

      <h2>El Sanatlarını Koruma Yolları</h2>
      <ul>
        <li>Genç kuşakların bu alanlara yönlendirilmesi ve gerekli eğitim desteğinin sağlanması</li>
        <li>Ustalarla çıraklar arasındaki geleneksel bilgi aktarımının güçlendirilmesi</li>
        <li>El emeği ürünlere yönelik bilinçli tüketici talebinin yaratılması</li>
        <li>Dijital arşivler ve belgesel çalışmalar aracılığıyla bu sanatların kayıt altına alınması</li>
      </ul>

      <h2>Gelecek İçin Umut</h2>
      <p>Son yıllarda el sanatlarına olan ilginin yeniden canlandığı gözlemlenmektedir. Özellikle Z kuşağının el yapımı, özgün ve sürdürülebilir ürünlere yönelmesi, bu kadim sanatların geleceği açısından umut verici bir tablo ortaya koymaktadır.</p>
    `,
    images: [
      {
        src: "assets/images/kilim-weaving.jpg",
        alt: "Geleneksel kilim dokuma tezgahı",
        caption: "Anadolu'nun her köşesinde farklı motifler ve dokuma teknikleri yaşamaya devam ediyor."
      }
    ],
    video: null
  },

  // ─────────────────────────────────────────────
  //  YAZI 3
  // ─────────────────────────────────────────────
  {
    id: 3,
    title: "Sürdürülebilir Kampüs: Üniversiteler Yeşil Dönüşümde",
    summary: "Dünya genelinde pek çok üniversite, karbon ayak izini azaltmak ve sürdürülebilir bir gelecek inşa etmek amacıyla kapsamlı dönüşüm projelerine imza atıyor. İşte bu alandaki ilham verici örnekler.",
    date: "10 Nisan 2025",
    author: "Zeynep Arslan",
    category: "Araştırma",
    coverImage: "assets/images/green-campus.jpg",
    featured: false,
    content: `
      <p>İklim krizi, yükseköğretim kurumlarını da harekete geçirdi. Pek çok üniversite, sürdürülebilirlik hedeflerini kurumsal stratejilerinin merkezine taşıyarak kampüslerini geleceğin yaşam alanlarına dönüştürüyor.</p>

      <h2>Yenilenebilir Enerji Uygulamaları</h2>
      <p>ABD'deki çeşitli üniversiteler, özellikle güneş enerjisi alanında kayda değer adımlar attı. Bazı kurumlar, kampüs elektrik ihtiyacının tamamını yenilenebilir kaynaklardan karşılar hale geldi. Bu hedefe ulaşmada çatı güneş panelleri, rüzgâr türbinleri ve yerel yönetimlerle kurulan enerji ortaklıkları belirleyici rol oynadı.</p>

      <h2>Sıfır Atık Hedefleri</h2>
      <p>Bazı üniversiteler, kapsamlı geri dönüşüm ve kompost sistemleri kurarak atık miktarlarını dramatik biçimde azaltmayı başardı. Bu sistemler; katı atık yönetimi, organik kompostlama ve çevre dostu tedarik politikalarını bir araya getiriyor.</p>

      <h2>Yeşil Bina Tasarımları</h2>
      <ul>
        <li>LEED sertifikalı bina tasarımlarının kampüslerde giderek yaygınlaşması</li>
        <li>Pasif mimari ve doğal havalandırma sistemleriyle enerji tüketiminin en aza indirilmesi</li>
        <li>Akıllı bina otomasyon sistemleriyle gerçek zamanlı enerji takibi ve yönetimi</li>
        <li>Yağmur suyu hasadı ve gri su geri dönüşüm uygulamaları</li>
      </ul>

      <h2>Türkiye'den Örnekler</h2>
      <p>Türkiye'deki üniversiteler de bu dönüşüm sürecinde önemli adımlar atmaktadır. Çeşitli kurumlar; kampüs genelinde bisiklet kullanımını teşvik eden altyapı yatırımları, organik atık yönetim projeleri ve sürdürülebilir gıda sistemleri üzerine araştırmalar yürütmektedir.</p>

      <blockquote>
        "Üniversiteler yalnızca araştırma yapan değil, örnek oluşturan kurumlar olmak zorunda. Kampüslerimiz, yarının sürdürülebilir dünyasının canlı laboratuvarları olmalı." — Sürdürülebilir Kampüsler Konferansı, 2024
      </blockquote>

      <h2>Öğrenci Katılımı</h2>
      <p>En başarılı sürdürülebilirlik girişimlerinin ortak paydası, güçlü öğrenci katılımıdır. Öğrenci toplulukları; çevre kulüpleri, çalışma grupları ve kampüs politikası süreçlerine etkin katılım yoluyla bu dönüşümün asıl itici gücü haline gelmektedir.</p>
    `,
    images: [
      {
        src: "assets/images/solar-panels.jpg",
        alt: "Kampüs çatısındaki güneş panelleri",
        caption: "Güneş panelleri, birçok üniversitede enerji dönüşümünün sembolü haline geldi."
      },
      {
        src: "assets/images/green-building.jpg",
        alt: "LEED sertifikalı yeşil bina tasarımı",
        caption: "Modern yeşil binalar, enerji verimliliği ve estetik tasarımı bir arada sunuyor."
      }
    ],
    video: {
      type: "local",
      src: "assets/videos/green-campus-tour.mp4",
      caption: "Sürdürülebilir kampüs uygulamalarından bir tanıtım turu"
    }
  }

  // ─────────────────────────────────────────────
  //  YENİ YAZI EKLEMEK İÇİN ŞABLON:
  //  Aşağıdaki bloğu kopyalayın, virgülden sonra yapıştırın
  //  ve alanları doldurun.
  // ─────────────────────────────────────────────
  /*
  ,
  {
    id: 4,                              // Bir öncekinin devamı olacak şekilde artırın
    title: "Yazı Başlığı",
    summary: "Kısa özet.",
    date: "1 Ocak 2026",
    author: "Yazar Adı",
    category: "Genel",                  // Araştırma / Teknoloji / Kültür / Eğitim / Genel
    coverImage: "assets/images/xxx.jpg",
    featured: false,
    content: `
      <p>Yazı içeriği buraya gelecek.</p>
    `,
    images: [],
    video: null
  }
  */

];
