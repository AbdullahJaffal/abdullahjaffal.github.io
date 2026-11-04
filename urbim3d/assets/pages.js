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
        // two fixed years at the early price against the standard price
        if (early && regular) { set("[data-p-early2]", money(early * 2, live.currency)); set("[data-p-regular2]", money(regular * 2, live.currency)); set("[data-p-save]", money((regular - early) * 2, live.currency)); }
        bars();
        if (live.promoDays) set("[data-p-promodays]", live.promoDays);
        if (live.trialDays) set("[data-p-trialdays]", live.trialDays);
        if (date) set("[data-p-deadline]", date);
        set("[data-p-left]", left);
        var open = !live.deadline || Date.now() < live.deadline;
        document.documentElement.classList.toggle("offer-closed", !open);
        tick();
    }

    // ---- pricing page: live countdown, the early price rolling down from the standard one, bars, reveal, spotlight ----
    var deadline = function () {
        if (live && live.deadline) return live.deadline;
        var d = document.body.getAttribute("data-deadline"); return d ? new Date(d).getTime() : 0;
    };
    var pad = function (n) { return (n < 10 ? "0" : "") + n; };
    function tick() {
        var box = document.querySelectorAll("[data-cd-box]"); if (!box.length) return;
        var ms = Math.max(0, deadline() - Date.now()), s = Math.floor(ms / 1000);
        var v = { d: String(Math.floor(s / 86400)), h: pad(Math.floor(s / 3600) % 24), m: pad(Math.floor(s / 60) % 60), s: pad(s % 60) };
        document.querySelectorAll("[data-cd]").forEach(function (el) {
            var x = v[el.getAttribute("data-cd")];
            if (el.textContent !== x) { el.textContent = x; el.classList.remove("tick"); void el.offsetWidth; el.classList.add("tick"); }
        });
        if (!ms && deadline()) document.documentElement.classList.add("offer-closed");
    }
    function bars() {
        var e = live ? Number(live.promoPrice) : 400, r = live ? Number(live.price) : 700;
        if (!(e > 0 && r > 0)) return;
        document.querySelectorAll("[data-cmp]").forEach(function (i) {
            i.dataset.w = (i.getAttribute("data-cmp") === "early" ? e / r : 1) * 100 + "%";
            if (i.closest(".in")) i.style.width = i.dataset.w;
        });
    }
    var rolled = false;
    function roll() {           // $700 → $400 once, when the early plan comes into view
        if (rolled) return; rolled = true;
        var e = live ? Number(live.promoPrice) : 400, r = live ? Number(live.price) : 700, cur = live ? live.currency : "USD";
        if (!(e > 0 && r > e) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        var els = document.querySelectorAll("[data-roll]"), t0 = performance.now(), dur = 1300;
        (function step(now) {
            var k = Math.min(1, (now - t0) / dur), ease = 1 - Math.pow(1 - k, 3);
            els.forEach(function (el) { el.textContent = money(Math.round(r - (r - e) * ease), cur); });
            if (k < 1) requestAnimationFrame(step);
        })(t0);
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
        tick(); setInterval(tick, 1000); bars();
        if ("IntersectionObserver" in window) {
            document.documentElement.classList.add("js-rv");
            var io = new IntersectionObserver(function (es) {
                es.forEach(function (en) {
                    if (!en.isIntersecting) return;
                    en.target.classList.add("in"); io.unobserve(en.target);
                    en.target.querySelectorAll("[data-cmp]").forEach(function (i) { if (i.dataset.w) i.style.width = i.dataset.w; });
                    if (en.target.classList.contains("plan--hot")) setTimeout(roll, 250);
                });
            }, { threshold: .2 });
            document.querySelectorAll(".rv").forEach(function (el) { io.observe(el); });
        } else document.querySelectorAll("[data-cmp]").forEach(function (i) { i.style.width = i.dataset.w || ""; });
        if (matchMedia("(pointer: fine)").matches) document.querySelectorAll(".pr-top").forEach(function (h) {
            h.addEventListener("pointermove", function (ev) {
                var r = h.getBoundingClientRect(), sp = h.querySelector(".pr-top__spot");
                sp.style.setProperty("--mx", ev.clientX - r.left + "px"); sp.style.setProperty("--my", ev.clientY - r.top + "px");
            });
        });
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
