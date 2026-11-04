import{A as h,B as G,C as Y,D as O,E as F,F as q,H as J,I,J as j,h as _,i as U,l as v,m as y,n as g,o as E,p as x,q as T,r as L,s as P,t as f,u as M,v as V,z}from"./chunk-OK2EZ4UV.js";var p=document.getElementById("app"),a=s=>String(s??"").replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[n]),H=864e5,o=Y(),e=O[o],c=null,R=null,N="";function K(s){o=G.includes(s)?s:"tr",e=O[o],document.documentElement.lang=o,document.documentElement.dir=o==="ar"?"rtl":"ltr",document.title=e.adminTitle;try{localStorage.setItem("urbim3d-lang",o)}catch{}document.querySelectorAll("[data-lang]").forEach(n=>n.setAttribute("aria-pressed",String(n.dataset.lang===o))),document.querySelectorAll("[data-t]").forEach(n=>{n.textContent=e[n.dataset.t]??n.textContent}),document.querySelectorAll("[data-docs-link]").forEach(n=>{n.href=`/urbim3d/docs/${o}/`}),R&&B()}document.querySelectorAll("[data-lang]").forEach(s=>s.addEventListener("click",()=>K(s.dataset.lang)));document.querySelector("[data-signout]")?.addEventListener("click",()=>c&&U(c.auth));var D=(s,n)=>{let l=new Map;return s.forEach(d=>l.set(d[n]||"\u2014",(l.get(d[n]||"\u2014")??0)+1)),[...l].sort((d,$)=>$[1]-d[1])},S=s=>{let n=s[0]?.[1]||1;return`<div class="hbar">${s.slice(0,8).map(([l,d])=>`<span style="--w:${d/n}" title="${a(l)}">${a(l)}</span><b>${d}</b>`).join("")||`<span>${e.empty}</span>`}</div>`};async function k(){let s=v.fromMillis(Date.now()-30*H),[n,l,d,$,w,C]=await Promise.all([f(y(c.db,"users")),f(y(c.db,"entitlements")),P(g(c.db,"settings","public")),f(E(y(c.db,"leads"),T("t","desc"),L(300))),f(E(y(c.db,"pageViews"),x("t",">=",s),T("t","desc"),L(2e4))),f(E(y(c.db,"events"),x("t",">=",s),T("t","desc"),L(5e3)))]),A=new Map(l.docs.map(r=>[r.id,h(r.data())])),m=h(d.data())??{trialDays:30,promoDays:180};R={settings:m,users:n.docs.map(r=>{let u={id:r.id,...h(r.data())};return u.ent=A.get(r.id)??null,u.st=J(u.ent,m),u}).sort((r,u)=>(u.createdAt??0)-(r.createdAt??0)),leads:$.docs.map(r=>h(r.data())),views:w.docs.map(r=>h(r.data())),events:C.docs.map(r=>h(r.data()))},B()}function B(){let{users:s,settings:n,views:l,events:d,leads:$}=R,w=t=>s.filter(i=>i.st.state===t).length,C=[[e.kpiUsers,s.length],[e.kpiTrials,s.filter(t=>t.ent?.trialRequestedAt).length],[e.kpiPromo,s.filter(t=>t.ent?.promo).length],[e.kpiActive,s.filter(t=>t.ent?.trialActivatedAt).length],[e.kpiSubReq,w("subRequested")],[e.kpiSubs,w("subActive")],[e.kpiViews,l.length],[e.kpiLeads,$.length]],A=[...Array(30)].map((t,i)=>new Date(Date.now()-(29-i)*H).toISOString().slice(0,10)),m=new Map(A.map(t=>[t,0]));l.forEach(t=>{let i=t.t?.toISOString?.().slice(0,10);m.has(i)&&m.set(i,m.get(i)+1)});let r=Math.max(1,...m.values()),u=N.toLowerCase(),Q=s.filter(t=>!u||[t.name,t.email,t.company,t.country,j(t.country,o),t.phone,t.about].join(" ").toLowerCase().includes(u)),W=t=>t?new Date(t.getTime()-t.getTimezoneOffset()*6e4).toISOString().slice(0,10):"";p.innerHTML=`<div class="adm">
    <div class="kpis">${C.map(([t,i])=>`<div class="kpi"><b>${i}</b><span>${a(t)}</span></div>`).join("")}</div>

    <section class="panel">
        <div class="panel__head"><h2>${e.usersTitle}</h2><input type="search" placeholder="${a(e.search)}" value="${a(N)}" data-filter></div>
        <div class="tbl-wrap"><table class="tbl"><thead><tr><th>${e.colName}</th><th>${e.colEmail}</th><th>${e.colOrg}</th><th>${e.colCountry}</th><th>${e.colCreated}</th><th>${e.colStatus}</th><th></th></tr></thead>
        <tbody>${Q.map(t=>`<tr>
            <td>${a(t.name)}<br><small class="muted">${a(e.roles[t.role]??t.role)}</small>${t.about?`<details class="about"><summary>${e.aboutShort}</summary><p>${a(t.about)}</p></details>`:""}</td>
            <td><span dir="ltr">${a(t.email)}</span>${t.phone?`<br><a class="tel-link" dir="ltr" href="tel:+${I.get(t.phoneCc)??""}${a(t.phone)}">+${I.get(t.phoneCc)??"?"} ${a(t.phone)}</a>`:""}</td>
            <td>${t.company?a(t.company):`<span class="pill">${e.kindIndShort}</span>`}</td><td>${a(j(t.country,o))}</td>
            <td>${a(q(t.createdAt,o))}</td>
            <td><span class="pill pill--${t.st.state}">${a(e.st[t.st.state][0])}</span>${t.st.end?`<br><small class="muted">${a(q(t.st.end,o))}</small>`:""}</td>
            <td>${t.st.state==="subActive"?`<button class="btn btn--line" data-expire="${t.id}">${e.expire}</button>`:`<button class="btn btn--primary" data-activate="${t.id}">${e.activate}</button>`}</td>
        </tr>`).join("")||`<tr><td colspan="7" class="muted">${e.empty}</td></tr>`}</tbody></table></div>
    </section>

    <section class="panel">
        <h2>${e.settingsTitle}</h2>
        <form class="settings" data-settings>
            <label class="f"><span>${e.setTrial}</span><input name="trialDays" type="number" min="1" max="365" value="${n.trialDays??30}"></label>
            <label class="f"><span>${e.setPromo}</span><input name="promoDays" type="number" min="1" max="730" value="${n.promoDays??180}"></label>
            <label class="f"><span>${e.setDeadline}</span><input name="promoDeadline" type="date" value="${W(n.promoDeadline)}"></label>
            <label class="f"><span>${e.setPromoPrice}</span><input name="promoPrice" inputmode="decimal" value="${a(n.promoPrice??"")}"></label>
            <label class="f"><span>${e.setPrice}</span><input name="price" inputmode="decimal" value="${a(n.price??"")}"></label>
            <label class="f"><span>${e.setCurrency}</span><input name="currency" maxlength="5" value="${a(n.currency??"")}"></label>
            <button class="btn btn--primary" type="submit">${e.save}</button>
        </form>
    </section>

    <section class="panel">
        <h2>${e.visitsTitle}</h2>
        <div class="bars">${A.map(t=>`<i style="height:${m.get(t)/r*100}%" data-tip="${t} \xB7 ${m.get(t)}"></i>`).join("")}</div>
        <div class="split3">
            <div><h3>${e.topPages}</h3>${S(D(l,"path").map(([t,i])=>[t.replace("/urbim3d",""),i]))}</div>
            <div><h3>${e.byLang}</h3>${S(D(l,"lang"))}<h3 style="margin-top:14px">${e.byDevice}</h3>${S(D(l,"device"))}</div>
            <div><h3>${e.byRef}</h3>${S(D(l,"ref"))}<h3 style="margin-top:14px">${e.eventsTitle}</h3>${S(D(d,"name"))}</div>
        </div>
    </section>

    <section class="panel">
        <h2>${e.leadsTitle}</h2>
        <div class="tbl-wrap"><table class="tbl"><thead><tr><th>${e.colName}</th><th>${e.colEmail}</th><th>${e.colOrg}</th><th>${e.colCountry}</th><th>${e.role}</th><th>${e.colCreated}</th></tr></thead>
        <tbody>${$.map(t=>`<tr><td>${a(t.name)}</td><td>${a(t.email)}</td><td>${a(t.org)}</td><td>${a(t.country)}</td><td>${a(t.role)}</td><td>${a(q(t.t,o))}</td></tr>`).join("")||`<tr><td colspan="6" class="muted">${e.empty}</td></tr>`}</tbody></table></div>
    </section></div>`,p.querySelector("[data-filter]").addEventListener("input",t=>{N=t.target.value;let i=t.target.selectionStart;B();let b=p.querySelector("[data-filter]");b.focus(),b.setSelectionRange(i,i)}),p.querySelectorAll("[data-activate]").forEach(t=>t.addEventListener("click",async()=>{let i=s.find(Z=>Z.id===t.dataset.activate);if(!confirm(F(e.confirmActivate,{name:i.name})))return;let b=new Date,X=new Date(b.getTime()+365*H);await M(g(c.db,"entitlements",i.id),{subStatus:"active",subStart:v.fromDate(b),subEnd:v.fromDate(X)},{merge:!0}),await k()})),p.querySelectorAll("[data-expire]").forEach(t=>t.addEventListener("click",async()=>{await V(g(c.db,"entitlements",t.dataset.expire),{subStatus:"expired",subEnd:v.now()}),await k()})),p.querySelector("[data-settings]").addEventListener("submit",async t=>{t.preventDefault();let i=t.currentTarget;await M(g(c.db,"settings","public"),{trialDays:Number(i.trialDays.value)||30,promoDays:Number(i.promoDays.value)||180,promoDeadline:v.fromDate(new Date(i.promoDeadline.value+"T00:00:00")),promoPrice:i.promoPrice.value.trim()||null,price:i.price.value.trim()||null,currency:i.currency.value.trim().toUpperCase()||null},{merge:!0}),await k()})}c=z();K(o);c?(p.innerHTML='<div class="acc-center"><span class="spin"></span></div>',_(c.auth,async s=>{if(!s){location.href="../account/?next=admin";return}if(document.querySelector("[data-signout]")?.removeAttribute("hidden"),!(await P(g(c.db,"admins",s.uid)).catch(()=>null))?.exists()){p.innerHTML=`<div class="acc-center acc-off"><p>${a(e.adminOnly)}</p><a class="btn btn--line" href="../account/">${a(e.title.split(" \u2014 ")[0])}</a></div>`;return}try{await k()}catch(l){console.error(l),p.innerHTML=`<div class="acc-center"><p class="msg msg--err">${a(e.err.generic)}</p></div>`}})):p.innerHTML=`<div class="acc-center acc-off"><p>${a(e.notConfigured)}</p></div>`;
