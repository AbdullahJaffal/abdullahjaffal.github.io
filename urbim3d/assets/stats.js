/* Visitor statistics for the UrBIM 3D pages — the product page (/urbim3d/) and the guide (/urbim3d/docs/).
   One switch for both: set CODE to the GoatCounter site code (https://<CODE>.goatcounter.com) to turn it on.
   GoatCounter keeps no cookies and no personal data (the IP is only used to derive the country and is not
   stored), so no consent banner is needed. Visitors who set "Do Not Track" are not counted. */
(function () {
    var CODE = "";   // e.g. "urbim3d"  — empty = statistics off
    if (!CODE || /^(localhost|127\.)/.test(location.hostname) || navigator.doNotTrack === "1") return;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://gc.zgo.at/count.js";
    s.setAttribute("data-goatcounter", "https://" + CODE + ".goatcounter.com/count");
    document.head.appendChild(s);
})();

/* Named events (shown in GoatCounter next to pages): call urbimStat("tutorial/01-first-sewer-network/done").
   Safe to call when statistics are off or not loaded yet. */
window.urbimStat = function (name) {
    var send = function () { if (window.goatcounter && window.goatcounter.count) window.goatcounter.count({ path: name, event: true }); };
    if (window.goatcounter && window.goatcounter.count) send(); else setTimeout(send, 1500);
};
