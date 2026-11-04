/* Pricing and legal pages: language (shared with the rest of /urbim3d/) and, on the pricing page,
   live numbers from the owner's settings (settings/public): prices, currency, offer days and deadline.
   The HTML already holds the current values, so the page reads correctly even if the database is unreachable. */
(function () {
    var L = ["tr", "ar", "en"], lang = "tr";
    try { lang = localStorage.getItem("urbim3d-lang") || localStorage.getItem("selectedLang") || "tr"; } catch (e) { }
    var TITLES = window.URBIM_PAGE_TITLES || {};
    var live = null;

    function money(v, cur) {
        var n = Number(v); if (!isFinite(n)) return String(v);
        try { return new Intl.NumberFormat(lang === "ar" ? "en" : lang, { style: "currency", currency: cur || "USD", maximumFractionDigits: 0 }).format(n); }
        catch (e) { return n + " " + (cur || ""); }
    }
    function fill() {
        if (!live) return;
        var regular = Number(live.price), early = Number(live.promoPrice);
        var pct = regular > 0 && early > 0 && early < regular ? Math.round((regular - early) / regular * 100) : 0;
        var date = live.deadline ? new Intl.DateTimeFormat(lang, { day: "numeric", month: "long", year: "numeric" }).format(live.deadline) : "";
        var left = live.deadline ? Math.max(0, Math.ceil((live.deadline - Date.now()) / 864e5)) : 0;
        var set = function (sel, text) { document.querySelectorAll(sel).forEach(function (el) { el.textContent = text; }); };
        if (early) set("[data-p-early]", money(early, live.currency));
        if (regular) set("[data-p-regular]", money(regular, live.currency));
        if (pct) set("[data-p-pct]", "−" + pct + "%"), set("[data-p-pctn]", pct + "%");
        if (live.promoDays) set("[data-p-promodays]", live.promoDays);
        if (live.trialDays) set("[data-p-trialdays]", live.trialDays);
        if (date) set("[data-p-deadline]", date);
        set("[data-p-left]", left);
        var open = !live.deadline || Date.now() < live.deadline;
        document.documentElement.classList.toggle("offer-closed", !open);
    }
    function setLang(l) {
        lang = L.indexOf(l) >= 0 ? l : "tr";
        document.documentElement.lang = lang; document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        if (TITLES[lang]) document.title = TITLES[lang];
        document.querySelectorAll("[data-lang]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === lang)); });
        try { localStorage.setItem("urbim3d-lang", lang); } catch (e) { }
        fill();
    }
    document.querySelectorAll("[data-lang]").forEach(function (b) { b.addEventListener("click", function () { setLang(b.dataset.lang); }); });
    setLang(lang);

    // the pricing page reads the owner's settings (public document) — same source as the account pages
    if (document.querySelector("[data-pricing]")) {
        var local = /^(localhost|127\.0\.0\.1)$/.test(location.hostname), emu = false;
        try { if (local && /[?&]emu\b/.test(location.search)) sessionStorage.setItem("urbim3d-emu", "1"); emu = local && sessionStorage.getItem("urbim3d-emu") === "1"; } catch (e) { }
        var cfg = emu ? { apiKey: "demo-key", projectId: "demo-urbim3d" } : window.URBIM_FIREBASE;
        if (cfg && cfg.apiKey) {
            var base = emu ? "http://127.0.0.1:8080" : "https://firestore.googleapis.com";
            fetch(base + "/v1/projects/" + cfg.projectId + "/databases/(default)/documents/settings/public?key=" + encodeURIComponent(cfg.apiKey))
                .then(function (r) { return r.ok ? r.json() : null; }).then(function (j) {
                    var f = j && j.fields; if (!f) return;
                    var v = function (k) { return f[k] && (f[k].stringValue || f[k].integerValue || f[k].doubleValue); };
                    live = { price: v("price"), promoPrice: v("promoPrice"), currency: v("currency") || "USD", promoDays: v("promoDays"), trialDays: v("trialDays"),
                             deadline: f.promoDeadline ? new Date(f.promoDeadline.timestampValue).getTime() : 0 };
                    fill();
                }).catch(function () { });
        }
    }
})();
