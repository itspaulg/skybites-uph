// LIST TOMBOL YANG DILACAK
const trackedButtons = [
  { id: "cta_nav", label: "cta_nav_whatsapp" },
  { id: "cta_splash", label: "cta_splash_whatsapp" },
  { id: "cta_hero", label: "cta_hero_whatsapp" },
  { id: "click_ig", label: "social_instagram" },
  { id: "click_tiktok", label: "social_tiktok" },
  { id: "click_shopee", label: "social_linktree" },
  { id: "click_wa", label: "social_whatsapp" },
  { id: "click_github", label: "social_github" }, // Tombol GitHub Baru
];

// FUNGSI KIRIM DATA KE GTM
function pushEvent(label) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "cta_click",
    cta_label: label,
  });
}

// LOGIKA KLIK ANTI-GAGAL
trackedButtons.forEach(({ id, label }) => {
  const el = document.getElementById(id);
  if (!el) return;

  el.addEventListener("click", (e) => {
    // 1. Kalau user tekan Ctrl+Klik (Tab Baru), biarkan normal
    if (e.metaKey || e.ctrlKey) return;

    // 2. Tahan sebentar, jangan pindah halaman dulu
    e.preventDefault();

    // 3. Kirim data tracking
    pushEvent(label);

    // 4. Tunggu 0.3 detik baru pindah halaman (Supaya data sempat terkirim)
    setTimeout(() => {
      window.location.href = el.href;
    }, 300);
  });
});

console.log("SkyBites System: Ready & Tracking");
