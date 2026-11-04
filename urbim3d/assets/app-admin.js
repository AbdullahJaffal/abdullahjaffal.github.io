import{A as h,B as z,C as G,D as j,E as U,F as q,H as Y,h as R,i as B,l as v,m as y,n as g,o as E,p as C,q as T,r as L,s as M,t as f,u as O,v as _,z as V}from"./chunk-LIPOU5TN.js";var m=document.getElementById("app"),s=a=>String(a??"").replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[n]),H=864e5,o=G(),e=j[o],c=null,N=null,I="";function F(a){o=z.includes(a)?a:"tr",e=j[o],document.documentElement.lang=o,document.documentElement.dir=o==="ar"?"rtl":"ltr",document.title=e.adminTitle;try{localStorage.setItem("urbim3d-lang",o)}catch{}document.querySelectorAll("[data-lang]").forEach(n=>n.setAttribute("aria-pressed",String(n.dataset.lang===o))),document.querySelectorAll("[data-t]").forEach(n=>{n.textContent=e[n.dataset.t]??n.textContent}),document.querySelectorAll("[data-docs-link]").forEach(n=>{n.href=`/urbim3d/docs/${o}/`}),N&&P()}document.querySelectorAll("[data-lang]").forEach(a=>a.addEventListener("click",()=>F(a.dataset.lang)));document.querySelector("[data-signout]")?.addEventListener("click",()=>c&&B(c.auth));var D=(a,n)=>{let l=new Map;return a.forEach(d=>l.set(d[n]||"\u2014",(l.get(d[n]||"\u2014")??0)+1)),[...l].sort((d,$)=>$[1]-d[1])},w=a=>{let n=a[0]?.[1]||1;return`<div class="hbar">${a.slice(0,8).map(([l,d])=>`<span style="--w:${d/n}" title="${s(l)}">${s(l)}</span><b>${d}</b>`).join("")||`<span>${e.empty}</span>`}</div>`};async function k(){let a=v.fromMillis(Date.now()-30*H),[n,l,d,$,S,x]=await Promise.all([f(y(c.db,"users")),f(y(c.db,"entitlements")),M(g(c.db,"settings","public")),f(E(y(c.db,"leads"),T("t","desc"),L(300))),f(E(y(c.db,"pageViews"),C("t",">=",a),T("t","desc"),L(2e4))),f(E(y(c.db,"events"),C("t",">=",a),T("t","desc"),L(5e3)))]),A=new Map(l.docs.map(r=>[r.id,h(r.data())])),p=h(d.data())??{trialDays:30,promoDays:180};N={settings:p,users:n.docs.map(r=>{let u={id:r.id,...h(r.data())};return u.ent=A.get(r.id)??null,u.st=Y(u.ent,p),u}).sort((r,u)=>(u.createdAt??0)-(r.createdAt??0)),leads:$.docs.map(r=>h(r.data())),views:S.docs.map(r=>h(r.data())),events:x.docs.map(r=>h(r.data()))},P()}function P(){let{users:a,settings:n,views:l,events:d,leads:$}=N,S=t=>a.filter(i=>i.st.state===t).length,x=[[e.kpiUsers,a.length],[e.kpiTrials,a.filter(t=>t.ent?.trialRequestedAt).length],[e.kpiPromo,a.filter(t=>t.ent?.promo).length],[e.kpiActive,a.filter(t=>t.ent?.trialActivatedAt).length],[e.kpiSubReq,S("subRequested")],[e.kpiSubs,S("subActive")],[e.kpiViews,l.length],[e.kpiLeads,$.length]],A=[...Array(30)].map((t,i)=>new Date(Date.now()-(29-i)*H).toISOString().slice(0,10)),p=new Map(A.map(t=>[t,0]));l.forEach(t=>{let i=t.t?.toISOString?.().slice(0,10);p.has(i)&&p.set(i,p.get(i)+1)});let r=Math.max(1,...p.values()),u=I.toLowerCase(),J=a.filter(t=>!u||[t.name,t.email,t.company,t.country].join(" ").toLowerCase().includes(u)),K=t=>t?new Date(t.getTime()-t.getTimezoneOffset()*6e4).toISOString().slice(0,10):"";m.innerHTML=`<div class="adm">
    <div class="kpis">${x.map(([t,i])=>`<div class="kpi"><b>${i}</b><span>${s(t)}</span></div>`).join("")}</div>

    <section class="panel">
        <div class="panel__head"><h2>${e.usersTitle}</h2><input type="search" placeholder="${s(e.search)}" value="${s(I)}" data-filter></div>
        <div class="tbl-wrap"><table class="tbl"><thead><tr><th>${e.colName}</th><th>${e.colEmail}</th><th>${e.colOrg}</th><th>${e.colCountry}</th><th>${e.colCreated}</th><th>${e.colStatus}</th><th></th></tr></thead>
        <tbody>${J.map(t=>`<tr>
            <td>${s(t.name)}<br><small class="muted">${s(e.roles[t.role]??t.role)}</small></td><td>${s(t.email)}</td><td>${s(t.company)}</td><td>${s(t.country)}</td>
            <td>${s(q(t.createdAt,o))}</td>
            <td><span class="pill pill--${t.st.state}">${s(e.st[t.st.state][0])}</span>${t.st.end?`<br><small class="muted">${s(q(t.st.end,o))}</small>`:""}</td>
            <td>${t.st.state==="subActive"?`<button class="btn btn--line" data-expire="${t.id}">${e.expire}</button>`:`<button class="btn btn--primary" data-activate="${t.id}">${e.activate}</button>`}</td>
        </tr>`).join("")||`<tr><td colspan="7" class="muted">${e.empty}</td></tr>`}</tbody></table></div>
    </section>

    <section class="panel">
        <h2>${e.settingsTitle}</h2>
        <form class="settings" data-settings>
            <label class="f"><span>${e.setTrial}</span><input name="trialDays" type="number" min="1" max="365" value="${n.trialDays??30}"></label>
            <label class="f"><span>${e.setPromo}</span><input name="promoDays" type="number" min="1" max="730" value="${n.promoDays??180}"></label>
            <label class="f"><span>${e.setDeadline}</span><input name="promoDeadline" type="date" value="${K(n.promoDeadline)}"></label>
            <label class="f"><span>${e.setPrice}</span><input name="price" inputmode="decimal" value="${s(n.price??"")}"></label>
            <label class="f"><span>${e.setCurrency}</span><input name="currency" maxlength="5" value="${s(n.currency??"")}"></label>
            <button class="btn btn--primary" type="submit">${e.save}</button>
        </form>
    </section>

    <section class="panel">
        <h2>${e.visitsTitle}</h2>
        <div class="bars">${A.map(t=>`<i style="height:${p.get(t)/r*100}%" data-tip="${t} \xB7 ${p.get(t)}"></i>`).join("")}</div>
        <div class="split3">
            <div><h3>${e.topPages}</h3>${w(D(l,"path").map(([t,i])=>[t.replace("/urbim3d",""),i]))}</div>
            <div><h3>${e.byLang}</h3>${w(D(l,"lang"))}<h3 style="margin-top:14px">${e.byDevice}</h3>${w(D(l,"device"))}</div>
            <div><h3>${e.byRef}</h3>${w(D(l,"ref"))}<h3 style="margin-top:14px">${e.eventsTitle}</h3>${w(D(d,"name"))}</div>
        </div>
    </section>

    <section class="panel">
        <h2>${e.leadsTitle}</h2>
        <div class="tbl-wrap"><table class="tbl"><thead><tr><th>${e.colName}</th><th>${e.colEmail}</th><th>${e.colOrg}</th><th>${e.colCountry}</th><th>${e.role}</th><th>${e.colCreated}</th></tr></thead>
        <tbody>${$.map(t=>`<tr><td>${s(t.name)}</td><td>${s(t.email)}</td><td>${s(t.org)}</td><td>${s(t.country)}</td><td>${s(t.role)}</td><td>${s(q(t.t,o))}</td></tr>`).join("")||`<tr><td colspan="6" class="muted">${e.empty}</td></tr>`}</tbody></table></div>
    </section></div>`,m.querySelector("[data-filter]").addEventListener("input",t=>{I=t.target.value;let i=t.target.selectionStart;P();let b=m.querySelector("[data-filter]");b.focus(),b.setSelectionRange(i,i)}),m.querySelectorAll("[data-activate]").forEach(t=>t.addEventListener("click",async()=>{let i=a.find(W=>W.id===t.dataset.activate);if(!confirm(U(e.confirmActivate,{name:i.name})))return;let b=new Date,Q=new Date(b.getTime()+365*H);await O(g(c.db,"entitlements",i.id),{subStatus:"active",subStart:v.fromDate(b),subEnd:v.fromDate(Q)},{merge:!0}),await k()})),m.querySelectorAll("[data-expire]").forEach(t=>t.addEventListener("click",async()=>{await _(g(c.db,"entitlements",t.dataset.expire),{subStatus:"expired",subEnd:v.now()}),await k()})),m.querySelector("[data-settings]").addEventListener("submit",async t=>{t.preventDefault();let i=t.currentTarget;await O(g(c.db,"settings","public"),{trialDays:Number(i.trialDays.value)||30,promoDays:Number(i.promoDays.value)||180,promoDeadline:v.fromDate(new Date(i.promoDeadline.value+"T00:00:00")),price:i.price.value.trim()||null,currency:i.currency.value.trim()||null},{merge:!0}),await k()})}c=V();F(o);c?(m.innerHTML='<div class="acc-center"><span class="spin"></span></div>',R(c.auth,async a=>{if(!a){location.href="../account/?next=admin";return}if(document.querySelector("[data-signout]")?.removeAttribute("hidden"),!(await M(g(c.db,"admins",a.uid)).catch(()=>null))?.exists()){m.innerHTML=`<div class="acc-center acc-off"><p>${s(e.adminOnly)}</p><a class="btn btn--line" href="../account/">${s(e.title.split(" \u2014 ")[0])}</a></div>`;return}try{await k()}catch(l){console.error(l),m.innerHTML=`<div class="acc-center"><p class="msg msg--err">${s(e.err.generic)}</p></div>`}})):m.innerHTML=`<div class="acc-center acc-off"><p>${s(e.notConfigured)}</p></div>`;
