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
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
    }));

    // ---- early-access form ----
    // Temporary (W.1): opens the visitor's mail app with the answers filled in.
    // W.4 replaces this with EmailJS, as on the personal site's contact form.
    const form = document.getElementById("accessForm");
    const status = form.querySelector(".form__status");
    form.addEventListener("submit", e => {
        e.preventDefault();
        const name = form.elements.name, email = form.elements.email;
        const okName = name.value.trim().length > 1;
        const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
        name.setAttribute("aria-invalid", String(!okName));
        email.setAttribute("aria-invalid", String(!okEmail));
        if (!okName || !okEmail) {
            status.textContent = t(current, "msgRequired");
            status.classList.add("err");
            (okName ? email : name).focus();
            return;
        }
        const pick = sel => sel.options[sel.selectedIndex].text;
        const nets = [...form.querySelectorAll('input[name="nets"]:checked')].map(c => c.nextElementSibling.textContent).join(", ");
        const lines = [
            `${t(current, "fName")}: ${name.value.trim()}`,
            `${t(current, "fEmail")}: ${email.value.trim()}`,
            `${t(current, "fOrg")}: ${form.elements.org.value.trim()}`,
            `${t(current, "fCountry")}: ${form.elements.country.value.trim()}`,
            `${t(current, "fRole")}: ${pick(form.elements.role)}`,
            `${t(current, "fVersion")}: ${pick(form.elements.version)}`,
            `${t(current, "fNets")}: ${nets}`,
            "",
            form.elements.note.value.trim(),
            "",
            `[lang: ${current}]`
        ];
        window.location.href = `mailto:${CONTACT}?subject=${encodeURIComponent(t(current, "mailSubject"))}&body=${encodeURIComponent(lines.join("\n"))}`;
        status.textContent = t(current, "msgOpened");
        status.classList.remove("err");
    });

    document.querySelectorAll(".year").forEach(el => { el.textContent = new Date().getFullYear(); });
})();
