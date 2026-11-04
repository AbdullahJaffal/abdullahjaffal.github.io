/* Visitor statistics for the UrBIM 3D pages — the product page, the guide, the account pages.
   Two independent outputs, both off until configured:
   1) The owner's own database (Firebase, assets/firebase-config.js): one anonymous record per page view
      — path, language, referring site, device type, server time. No IP, no cookie, no identity.
      Shown on /urbim3d/admin/. Also: named events and early-access requests.
   2) GoatCounter (optional): set GOATCOUNTER to the site code.
   Visitors who set "Do Not Track" are not counted. Rules: UrBIM3D/website/firebase/firestore.rules. */
(function () {
    var GOATCOUNTER = "";   // e.g. "urbim3d" — empty = off
    if (navigator.doNotTrack === "1") { window.urbimStat = window.urbimLead = function () { }; return; }

    var local = /^(localhost|127\.0\.0\.1)$/.test(location.hostname), emu = false;
    try {
        if (local && /[?&]emu\b/.test(location.search)) sessionStorage.setItem("urbim3d-emu", "1");   // tests on the emulators
        emu = local && sessionStorage.getItem("urbim3d-emu") === "1";
    } catch (e) { }
    var cfg = emu ? { apiKey: "demo-key", projectId: "demo-urbim3d" } : window.URBIM_FIREBASE;
    var on = !!(cfg && cfg.apiKey) && (emu || !local);
    var base = emu ? "http://127.0.0.1:8080" : "https://firestore.googleapis.com";

    function lang() { var l = document.documentElement.lang; return l === "ar" || l === "en" ? l : "tr"; }
    function id() { var a = new Uint8Array(12); crypto.getRandomValues(a); return Array.prototype.map.call(a, function (b) { return ("0" + b.toString(16)).slice(-2); }).join(""); }
    function val(v) { return Array.isArray(v) ? { arrayValue: { values: v.map(function (x) { return { stringValue: String(x) }; }) } } : { stringValue: String(v == null ? "" : v) }; }
    // create one document with the server's time in field t (the rules require t == request.time)
    function add(coll, fields) {
        if (!on) return;
        var f = {}; Object.keys(fields).forEach(function (k) { f[k] = val(fields[k]); });
        var root = "projects/" + cfg.projectId + "/databases/(default)/documents";
        var body = JSON.stringify({ writes: [{ update: { name: root + "/" + coll + "/" + id(), fields: f },
            updateTransforms: [{ fieldPath: "t", setToServerValue: "REQUEST_TIME" }], currentDocument: { exists: false } }] });
        try {
            fetch(base + "/v1/" + root + ":commit?key=" + encodeURIComponent(cfg.apiKey),
                { method: "POST", headers: { "Content-Type": "application/json" }, body: body, keepalive: true }).catch(function () { });
        } catch (e) { }
    }
    function device() {
        var w = Math.min(screen.width, innerWidth), touch = matchMedia("(pointer: coarse)").matches;
        return w < 700 ? "mobile" : touch && w < 1200 ? "tablet" : "desktop";
    }
    function referrer() {
        try { var h = new URL(document.referrer).hostname; return h && h !== location.hostname ? h.replace(/^www\./, "").slice(0, 120) : ""; } catch (e) { return ""; }
    }

    // one page view per page load, after the page has its language
    addEventListener("load", function () {
        add("pageViews", { path: location.pathname.slice(0, 200), lang: lang(), ref: referrer(), device: device() });
    });

    /* Named events: urbimStat("tutorial/01-first-sewer-network/done"). Safe when everything is off. */
    window.urbimStat = function (name) {
        name = String(name).toLowerCase().replace(/[^a-z0-9/_.-]/g, "-").slice(0, 120);
        add("events", { name: name, lang: lang() });
        if (window.goatcounter && window.goatcounter.count) window.goatcounter.count({ path: name, event: true });
    };
    /* Early-access request from the product page form (also e-mailed by EmailJS). */
    window.urbimLead = function (l) {
        add("leads", { name: l.name, email: l.email, org: l.org || "", country: l.country || "", role: l.role || "",
            version: l.version || "", nets: l.nets || [], note: (l.note || "").slice(0, 2000), lang: lang() });
    };

    if (GOATCOUNTER && !local) {
        var s = document.createElement("script");
        s.async = true; s.src = "https://gc.zgo.at/count.js";
        s.setAttribute("data-goatcounter", "https://" + GOATCOUNTER + ".goatcounter.com/count");
        document.head.appendChild(s);
    }
})();
