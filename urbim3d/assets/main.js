/* UrBIM 3D product page — language switching, mobile menu, early-access form. */
(function () {
    const I18N = window.URBIM_I18N;
    const LANGS = ["tr", "ar", "en"];
    const STORE_KEY = "urbim3d-lang";      // this page's own choice
    const SITE_KEY = "selectedLang";       // the personal site's choice, used as a hint only
    const CONTACT = "jaffal.abdullah@gmail.com";

    // ---- capture the Turkish defaults from the HTML so tr is never written twice ----
    const textNodes = document.querySelectorAll("[data-i18n]");
    const attrNodes = document.querySelectorAll("[data-i18n-attr]");
    textNodes.forEach(el => { if (!(el.dataset.i18n in I18N.tr)) I18N.tr[el.dataset.i18n] = el.innerHTML.trim(); });
    attrNodes.forEach(el => el.dataset.i18nAttr.split(";").forEach(pair => {
        const [attr, key] = pair.split(":");
        if (!(key in I18N.tr)) I18N.tr[key] = el.getAttribute(attr);
    }));

    const t = (lang, key) => (I18N[lang] && I18N[lang][key]) ?? I18N.tr[key] ?? "";
    let current = "tr";

    function setLang(lang) {
        if (!LANGS.includes(lang)) lang = "tr";
        current = lang;
        const html = document.documentElement;
        html.lang = lang;
        html.dir = lang === "ar" ? "rtl" : "ltr";
        textNodes.forEach(el => { el.innerHTML = t(lang, el.dataset.i18n); });
        attrNodes.forEach(el => el.dataset.i18nAttr.split(";").forEach(pair => {
            const [attr, key] = pair.split(":");
            el.setAttribute(attr, t(lang, key));
        }));
        document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
        try { localStorage.setItem(STORE_KEY, lang); } catch (e) { /* private mode */ }
    }

    let initial = "tr";
    try { initial = localStorage.getItem(STORE_KEY) || localStorage.getItem(SITE_KEY) || "tr"; } catch (e) { }
    setLang(initial);
    document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

    // ---- mobile menu ----
    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.getElementById("nav");
    menuBtn.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && nav.classList.contains("open")) {
            nav.classList.remove("open");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.focus();
        }
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
    }));

    // ---- early-access form ----
    // Sent through the personal site's EmailJS service and contact template, guarded by the same
    // reCAPTCHA (its keys are bound to abdullahjaffal.me). Both scripts load only when the form is
    // about to be seen. If they cannot load or the send fails, the visitor can still use email.
    const EMAILJS = { publicKey: "mIeOCeVvpXYQAr-u_", service: "service_aexwb6t", template: "template_qpqiteg" };
    const RECAPTCHA_SITEKEY = "6LcYeL4sAAAAAJxZdWlhiQq1-EM499pa6IrmCMHW";
    const form = document.getElementById("accessForm");
    const status = form.querySelector(".form__status");
    const sendBtn = form.querySelector('button[type="submit"]');
    let captchaId = null, servicesRequested = false;

    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const el = document.createElement("script");
            el.src = src; el.async = true; el.onload = resolve; el.onerror = reject;
            document.head.appendChild(el);
        });
    }
    window.urbimCaptchaReady = () => {
        captchaId = window.grecaptcha.render("captcha", { sitekey: RECAPTCHA_SITEKEY });
    };
    function loadServices() {
        if (servicesRequested) return;
        servicesRequested = true;
        loadScript("https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js")
            .then(() => window.emailjs.init(EMAILJS.publicKey)).catch(() => { });
        loadScript(`https://www.google.com/recaptcha/api.js?onload=urbimCaptchaReady&render=explicit&hl=${current}`).catch(() => { });
    }
    if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { loadServices(); io.disconnect(); } }, { rootMargin: "600px" });
        io.observe(form);
    } else { loadServices(); }
    form.addEventListener("focusin", loadServices);

    function say(key, isError, withMailLink) {
        status.textContent = t(current, key);
        status.classList.toggle("err", !!isError);
        if (withMailLink) {
            const a = document.createElement("a");
            a.href = mailtoHref(); a.textContent = " " + t(current, "mailFallback");
            status.appendChild(a);
        }
    }
    function answers() {
        const pick = sel => sel.options[sel.selectedIndex].text;
        const nets = [...form.querySelectorAll('input[name="nets"]:checked')].map(c => c.nextElementSibling.textContent).join(", ");
        return [
            `${t(current, "fName")}: ${form.elements.name.value.trim()}`,
            `${t(current, "fEmail")}: ${form.elements.email.value.trim()}`,
            `${t(current, "fOrg")}: ${form.elements.org.value.trim()}`,
            `${t(current, "fCountry")}: ${form.elements.country.value.trim()}`,
            `${t(current, "fRole")}: ${pick(form.elements.role)}`,
            `${t(current, "fVersion")}: ${pick(form.elements.version)}`,
            `${t(current, "fNets")}: ${nets}`,
            "",
            form.elements.note.value.trim(),
            "",
            `[UrBIM 3D early access · lang: ${current}]`
        ].join("\n");
    }
    function mailtoHref() {
        return `mailto:${CONTACT}?subject=${encodeURIComponent(t(current, "mailSubject"))}&body=${encodeURIComponent(answers())}`;
    }

    form.addEventListener("submit", e => {
        e.preventDefault();
        const name = form.elements.name, email = form.elements.email;
        const okName = name.value.trim().length > 1;
        const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
        name.setAttribute("aria-invalid", String(!okName));
        email.setAttribute("aria-invalid", String(!okEmail));
        if (!okName || !okEmail) { say("msgRequired", true); (okName ? email : name).focus(); return; }

        if (!window.emailjs || captchaId === null) {          // services blocked or not loaded
            window.location.href = mailtoHref();
            say("msgOpened");
            return;
        }
        const token = window.grecaptcha.getResponse(captchaId);
        if (!token) { say("msgCaptcha", true); return; }

        sendBtn.disabled = true;
        say("msgSending");
        window.emailjs.send(EMAILJS.service, EMAILJS.template, {
            name: name.value.trim(),
            email: email.value.trim(),
            subject: t(current, "mailSubject"),
            message: answers(),
            "g-recaptcha-response": token
        }).then(() => {
            say("msgSent");
            form.reset();
            window.grecaptcha.reset(captchaId);
        }, () => {
            say("msgFailed", true, true);
            window.grecaptcha.reset(captchaId);
        }).finally(() => { sendBtn.disabled = false; });
    });

    document.querySelectorAll(".year").forEach(el => { el.textContent = new Date().getFullYear(); });

    // ---- motion: scroll progress, sticky-bar shadow, active section, reveal on scroll, pointer light ----
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const root = document.documentElement;
    const bar = document.querySelector(".progress span");
    const topbar = document.querySelector(".topbar");
    let ticking = false;
    function onScroll() {
        ticking = false;
        const max = root.scrollHeight - root.clientHeight;
        bar.style.setProperty("--p", max > 0 ? (window.scrollY / max).toFixed(4) : 0);
        topbar.classList.toggle("is-scrolled", window.scrollY > 8);
    }
    window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
    onScroll();

    const revealSel = [".facts__in li", ".sec .eyebrow", ".sec h2", ".sec .sec__lead", ".legend", ".ps", ".card", ".feat",
                       ".step", ".road__i", ".req li", ".faq details", ".form"].join(",");
    if ("IntersectionObserver" in window && !reduce) {
        // stagger siblings, then drop the classes so hover transitions are not delayed afterwards
        const els = [...document.querySelectorAll(revealSel)];
        els.forEach(el => {
            const sibs = [...el.parentElement.children].filter(c => c.matches(revealSel));
            el.style.setProperty("--i", Math.min(sibs.indexOf(el), 8));
            el.classList.add("reveal");
        });
        const rio = new IntersectionObserver(entries => entries.forEach(e => {
            if (!e.isIntersecting) return;
            const el = e.target;
            el.classList.add("is-in");
            rio.unobserve(el);
            setTimeout(() => { el.classList.remove("reveal", "is-in"); el.style.removeProperty("--i"); }, 900 + 70 * (+el.style.getPropertyValue("--i") || 0));
        }), { rootMargin: "0px 0px -8% 0px" });
        els.forEach(el => rio.observe(el));

        const lio = new IntersectionObserver(entries => entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add("is-in"); lio.unobserve(e.target); }
        }), { threshold: .4 });
        document.querySelectorAll(".steps, .road").forEach(el => lio.observe(el));
    } else {
        document.querySelectorAll(".steps, .road").forEach(el => el.classList.add("is-in"));
    }

    // active nav link follows the section in view
    if ("IntersectionObserver" in window) {
        const links = new Map([...nav.querySelectorAll('a[href^="#"]:not(.btn)')].map(a => [a.getAttribute("href").slice(1), a]));
        const sio = new IntersectionObserver(entries => entries.forEach(e => {
            if (!e.isIntersecting) return;
            links.forEach(a => a.classList.remove("is-active"));
            const a = links.get(e.target.id);
            if (a) a.classList.add("is-active");
        }), { rootMargin: "-45% 0px -50% 0px" });
        document.querySelectorAll("main section[id]").forEach(s => sio.observe(s));
    }

    // ---- living pipe network: manholes on a loose street grid, water flowing downhill, hubs pulsing ----
    function pipeNet(canvas, o) {
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        let W = 0, H = 0, period = 0, nodes = [], edges = [], drops = [], mouse = null, last = 0, running = false, visible = true;
        function build() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            W = canvas.clientWidth; H = canvas.clientHeight;
            if (!W || !H) return;
            canvas.width = W * dpr; canvas.height = H * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            const S = o.spacing;
            const rows = Math.max(3, Math.ceil((o.fixed ? 1440 : H) / S)), cols = Math.ceil(W / S) + 1;
            period = rows * S;
            let seed = o.seed;
            const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
            const at = {};
            nodes = []; edges = []; drops = [];
            for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
                if (rnd() > o.density) continue;
                const n = { x: c * S + S * .3 + (rnd() - .5) * S * .45, y: r * S + S * .5 + (rnd() - .5) * S * .45, ph: rnd(), deg: 0 };
                at[r + "," + c] = n; nodes.push(n);
            }
            const link = (a, b, dy) => { edges.push({ a, b, dy, main: rnd() < .22 }); a.deg++; b.deg++; };
            for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
                const n = at[r + "," + c]; if (!n) continue;
                const right = at[r + "," + (c + 1)] || (rnd() < .5 && at[r + "," + (c + 2)]);
                if (right && rnd() < .78) link(n, right, 0);
                const down = at[((r + 1) % rows) + "," + c];
                if (down && rnd() < .5) link(n, down, r + 1 === rows ? period : 0);
            }
            edges.forEach(e => { if (rnd() < o.flow) drops.push({ e, t: rnd(), v: (28 + rnd() * 40) / Math.hypot(e.b.x - e.a.x, e.b.y + e.dy - e.a.y) }); });
        }
        function draw(now) {
            const dt = Math.min(.05, (now - last) / 1000 || 0); last = now;
            ctx.clearRect(0, 0, W, H);
            const off = o.fixed ? -((window.scrollY * o.parallax) % period) : 0;
            const time = now / 1000;
            for (let ty = off - period; ty < H + period; ty += period) {
                if (ty > H || ty + period * 2 < 0) continue;
                edges.forEach(e => {
                    ctx.strokeStyle = e.main ? o.main : o.line; ctx.lineWidth = e.main ? 2.4 : 1.1;
                    ctx.beginPath(); ctx.moveTo(e.a.x, e.a.y + ty); ctx.lineTo(e.b.x, e.b.y + e.dy + ty); ctx.stroke();
                });
                nodes.forEach(n => {
                    const y = n.y + ty;
                    if (y < -40 || y > H + 40) return;
                    if (n.deg >= 3 && !reduce) {             // hubs breathe
                        const p = (time * .22 + n.ph) % 1;
                        if (p < .4) {
                            ctx.strokeStyle = o.pulse.replace("A", (.9 * (1 - p / .4)).toFixed(3));
                            ctx.lineWidth = 1.2; ctx.beginPath(); ctx.arc(n.x, y, 5 + p / .4 * 26, 0, 6.283); ctx.stroke();
                        }
                    }
                    const sz = n.deg >= 3 ? 7 : 5;
                    ctx.fillStyle = o.nodeFill; ctx.strokeStyle = o.node; ctx.lineWidth = 1.3;
                    ctx.fillRect(n.x - sz / 2, y - sz / 2, sz, sz); ctx.strokeRect(n.x - sz / 2, y - sz / 2, sz, sz);
                });
                ctx.lineCap = "round"; ctx.strokeStyle = o.drop; ctx.lineWidth = 2.2;
                drops.forEach(d => {
                    const e = d.e, dx = e.b.x - e.a.x, dy = e.b.y + e.dy - e.a.y, L = Math.hypot(dx, dy);
                    const x = e.a.x + dx * d.t, y = e.a.y + dy * d.t + ty, k = Math.min(d.t, 14 / L);
                    if (y < -20 || y > H + 20) return;
                    ctx.beginPath(); ctx.moveTo(x - dx * k, y - dy * k); ctx.lineTo(x, y); ctx.stroke();
                });
                ctx.lineCap = "butt";
            }
            drops.forEach(d => { d.t += d.v * dt; if (d.t > 1) d.t -= 1; });
            if (mouse) {                                     // CAD object snap on the nearest manhole
                let best = null, bd = 140;
                for (let ty = off - period; ty < H + period; ty += period) nodes.forEach(n => {
                    const dd = Math.hypot(n.x - mouse.x, n.y + ty - mouse.y);
                    if (dd < bd) { bd = dd; best = { x: n.x, y: n.y + ty }; }
                });
                if (best) {
                    ctx.strokeStyle = o.snap; ctx.lineWidth = 1.5;
                    ctx.strokeRect(best.x - 8, best.y - 8, 16, 16);
                    ctx.setLineDash([3, 4]); ctx.beginPath(); ctx.moveTo(mouse.x, mouse.y); ctx.lineTo(best.x, best.y); ctx.stroke(); ctx.setLineDash([]);
                }
            }
        }
        function loop(now) {
            if (!running) return;
            if (now - last >= 33) draw(now);                 // ~30 fps is plenty for a background
            requestAnimationFrame(loop);
        }
        function start() { if (!running && visible && !document.hidden && !reduce) { running = true; last = performance.now(); requestAnimationFrame(loop); } }
        function stop() { running = false; }
        build(); draw(performance.now());
        let rt; window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { build(); draw(performance.now()); }, 150); });
        if (reduce) { window.addEventListener("scroll", () => draw(performance.now()), { passive: true }); return; }
        document.addEventListener("visibilitychange", () => document.hidden ? stop() : start());
        if (!o.fixed && "IntersectionObserver" in window) {
            new IntersectionObserver(es => { visible = es[0].isIntersecting; visible ? start() : stop(); }).observe(canvas);
        }
        if (finePointer) {
            const host = o.fixed ? window : canvas.parentElement;
            host.addEventListener("pointermove", e => { const r = canvas.getBoundingClientRect(); mouse = { x: e.clientX - r.left, y: e.clientY - r.top }; });
            (o.fixed ? document.documentElement : host).addEventListener("pointerleave", () => { mouse = null; });
        }
        start();
    }
    const pageNet = document.querySelector(".net--page");
    if (pageNet) pipeNet(pageNet, { fixed: true, parallax: .35, spacing: 150, density: .62, flow: .55, seed: 11,
        line: "rgba(19,78,120,.16)", main: "rgba(19,78,120,.24)", node: "rgba(19,78,120,.45)", nodeFill: "#F3F6F9",
        drop: "rgba(79,163,227,.85)", pulse: "rgba(79,163,227,A)", snap: "rgba(19,78,120,.8)" });
    const ctaNet = document.querySelector(".net--cta");
    if (ctaNet) pipeNet(ctaNet, { fixed: false, spacing: 120, density: .66, flow: .8, seed: 5,
        line: "rgba(124,192,242,.16)", main: "rgba(124,192,242,.28)", node: "rgba(124,192,242,.6)", nodeFill: "#0C2A42",
        drop: "rgba(160,215,255,.95)", pulse: "rgba(124,192,242,A)", snap: "rgba(255,255,255,.85)" });

    if (reduce) {
        document.querySelectorAll("svg").forEach(svg => svg.pauseAnimations && svg.pauseAnimations());
    } else if (finePointer) {
        // hero: soft light under the pointer and a slight tilt of the drawing window
        const hero = document.querySelector(".hero");
        const win = document.querySelector(".win");
        hero.addEventListener("pointermove", e => {
            const r = hero.getBoundingClientRect();
            hero.style.setProperty("--mx", `${e.clientX - r.left}px`);
            hero.style.setProperty("--my", `${e.clientY - r.top}px`);
            const w = win.getBoundingClientRect();
            const dx = (e.clientX - (w.left + w.width / 2)) / w.width;
            const dy = (e.clientY - (w.top + w.height / 2)) / w.height;
            win.style.setProperty("--ry", `${Math.max(-1, Math.min(1, dx)) * 5}deg`);
            win.style.setProperty("--rx", `${Math.max(-1, Math.min(1, dy)) * -4}deg`);
        });
        hero.addEventListener("pointerleave", () => { win.style.setProperty("--rx", "0deg"); win.style.setProperty("--ry", "0deg"); });

        // cards: light follows the pointer
        document.querySelectorAll(".ps, .card, .feat").forEach(c => c.addEventListener("pointermove", e => {
            const r = c.getBoundingClientRect();
            c.style.setProperty("--mx", `${e.clientX - r.left}px`);
            c.style.setProperty("--my", `${e.clientY - r.top}px`);
        }));
    }
})();
