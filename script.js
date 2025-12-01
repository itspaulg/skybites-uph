// GTM/GA helper: push a simple event when CTAs are clicked
const trackedButtons = [
  { id: "cta_nav", label: "cta_nav_whatsapp" },
  { id: "cta_splash", label: "cta_splash_whatsapp" },
  { id: "cta_hero", label: "cta_hero_whatsapp" },
  { id: "click_ig", label: "social_instagram" },
  { id: "click_tiktok", label: "social_tiktok" },
  { id: "click_shopee", label: "social_linktree" },
  { id: "click_wa", label: "social_whatsapp" },
];

function pushEvent(label) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "cta_click",
    cta_label: label,
  });
}

trackedButtons.forEach(({ id, label }) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener("click", () => pushEvent(label));
});

console.log("SkyBites landing page loaded — GTM events ready");
