"use strict";
const T = {
  en: {tag:"Navigate Every Tender with Confidence",loadReq:"Load requirements.json",loadReqHint:"Drop the file here or click to browse",upload:"Upload PDF documents",uploadHint:"Drop up to 30 PDFs (max 50 MB total) or click to browse",reset:"Reset",suggest:"Suggest Matches",gen:"Generate Package",
    steps:["Requirements","Upload","Match","Validate","Generate"],tid:"Tender ID",ttl:"Tender Title",ent:"Procuring Entity",bid:"Bidder",dl:"Submission Deadline",
    k:["Total Requirements","Mandatory","Matched","Blocking Issues","Ready"],h:["Order","Document","Requirement","Matched File","Expiry","Status","Action"],
    mand:"Mandatory",opt:"Optional",exp:"Expiry required",none:"— Not matched —",
    st:{Missing:"Missing",ExpiryNeeded:"Expiry date needed",Expired:"Expired",NotProvided:"Not provided",OK:"OK"},
    ready:"READY",notready:"NOT READY",readyTxt:"All checks passed. You can generate the package.",blocking:n=>n+" blocking issue(s)",
    empty:"Load requirements.json to begin.",undo:"Undo",expLabel:"Expiry date",sub:"Prepare, validate and generate a submission-ready tender package.",genH:"Package Generated Successfully",fn:"Filename",pg:"Pages",dc:"Documents",dlb:"Download Package",cls:"Close",gen2:"GENERATED",rg:"READY TO GENERATE",stM:"Missing",stE:"Expiry problem",validF:"Valid",invalidF:"Invalid",mtd:"Matched",noFiles:"No PDFs yet. Upload documents to continue.",
    matched:"Matched →",unmatched:"Unmatched",dup:"Duplicate",pages:"pages",remove:"Remove",
    sel:(n,s)=>n+" / 30 files · "+s+" MB / 50 MB",
    errJson:"Invalid requirements.json: ",notPdf:" is not a PDF and was rejected.",tooMany:"Limit is 30 files. Extra files rejected.",tooBig:"Total size limit of 50 MB exceeded. File rejected: ",
    bad:"Cannot read this PDF (damaged or password protected).",dupBlock:"Identical content is already assigned to another requirement.",
    confirm:"Reset all matches and expiry dates?",done:"Package downloaded: ",suggested:n=>n+" match(es) suggested.",noSug:"No confident suggestions found.",
    needReq:"Load requirements first",missingDocs:"Missing required documents",expNeeded:"Expiry date required",expiredDocs:"Expired documents"},
  bn: {tag:"আত্মবিশ্বাসের সাথে প্রতিটি টেন্ডারে এগিয়ে চলুন",loadReq:"requirements.json লোড করুন",loadReqHint:"ফাইলটি এখানে ছাড়ুন বা ক্লিক করুন",upload:"PDF ডকুমেন্ট আপলোড করুন",uploadHint:"সর্বোচ্চ ৩০টি PDF (মোট ৫০ MB) ছাড়ুন বা ক্লিক করুন",reset:"রিসেট",suggest:"মিল প্রস্তাব করুন",gen:"প্যাকেজ তৈরি করুন",
    steps:["প্রয়োজনীয়তা","আপলোড","মিলান","যাচাই","তৈরি"],tid:"টেন্ডার আইডি",ttl:"টেন্ডারের শিরোনাম",ent:"ক্রয়কারী প্রতিষ্ঠান",bid:"দরদাতা",dl:"জমার শেষ তারিখ",
    k:["মোট প্রয়োজনীয়তা","বাধ্যতামূলক","মিলানো হয়েছে","বাধাদায়ক সমস্যা","প্রস্তুত"],h:["ক্রম","ডকুমেন্ট","প্রয়োজনীয়তা","মিলানো ফাইল","মেয়াদ","অবস্থা","কাজ"],
    mand:"বাধ্যতামূলক",opt:"ঐচ্ছিক",exp:"মেয়াদ প্রয়োজন",none:"— মিলানো হয়নি —",
    st:{Missing:"অনুপস্থিত",ExpiryNeeded:"মেয়াদের তারিখ প্রয়োজন",Expired:"মেয়াদোত্তীর্ণ",NotProvided:"দেওয়া হয়নি",OK:"ঠিক আছে"},
    ready:"প্রস্তুত",notready:"প্রস্তুত নয়",readyTxt:"সব যাচাই সম্পন্ন। এখন প্যাকেজ তৈরি করতে পারেন।",blocking:n=>n+"টি বাধাদায়ক সমস্যা",
    empty:"শুরু করতে requirements.json লোড করুন।",undo:"পূর্বাবস্থা",expLabel:"মেয়াদের তারিখ",sub:"জমা দেওয়ার উপযোগী টেন্ডার প্যাকেজ প্রস্তুত, যাচাই ও তৈরি করুন।",genH:"প্যাকেজ সফলভাবে তৈরি হয়েছে",fn:"ফাইলের নাম",pg:"পৃষ্ঠা",dc:"ডকুমেন্ট",dlb:"প্যাকেজ ডাউনলোড করুন",cls:"বন্ধ করুন",gen2:"তৈরি হয়েছে",rg:"তৈরির জন্য প্রস্তুত",stM:"অনুপস্থিত",stE:"মেয়াদের সমস্যা",validF:"বৈধ",invalidF:"অবৈধ",mtd:"মিলানো",noFiles:"এখনও কোনো PDF নেই। আপলোড করুন।",
    matched:"মিলানো →",unmatched:"মিলানো হয়নি",dup:"ডুপ্লিকেট",pages:"পৃষ্ঠা",remove:"মুছুন",
    sel:(n,s)=>n+" / ৩০ ফাইল · "+s+" MB / ৫০ MB",
    errJson:"requirements.json অবৈধ: ",notPdf:" PDF নয়, তাই বাতিল।",tooMany:"সর্বোচ্চ ৩০টি ফাইল। অতিরিক্ত ফাইল বাতিল।",tooBig:"মোট ৫০ MB সীমা অতিক্রম। বাতিল ফাইল: ",
    bad:"এই PDF পড়া যায়নি (নষ্ট বা পাসওয়ার্ড সুরক্ষিত)।",dupBlock:"একই বিষয়বস্তুর ফাইল ইতিমধ্যে অন্য প্রয়োজনীয়তায় দেওয়া হয়েছে।",
    confirm:"সব মিল ও মেয়াদের তারিখ মুছে ফেলবেন?",done:"প্যাকেজ ডাউনলোড হয়েছে: ",suggested:n=>n+"টি মিল প্রস্তাব করা হয়েছে।",noSug:"নিশ্চিত কোনো প্রস্তাব নেই।",
    needReq:"আগে requirements লোড করুন",missingDocs:"বাধ্যতামূলক ডকুমেন্ট অনুপস্থিত",expNeeded:"মেয়াদের তারিখ প্রয়োজন",expiredDocs:"মেয়াদোত্তীর্ণ ডকুমেন্ট"}
};
const S = {lang:"en", tender:null, reqs:[], files:[], match:{}, expiry:{}, seq:0, out:null, pk:[]};
const $ = s => document.querySelector(s);
const t = () => T[S.lang];
const esc = x => String(x).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const validDate = d => { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(typeof d === "string" ? d : ""); if (!m) return false; const mo = +m[2], da = +m[3]; return +m[1] >= 1900 && mo >= 1 && mo <= 12 && da >= 1 && da <= new Date(Date.UTC(+m[1], mo, 0)).getUTCDate(); };
const MO = {en:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"], bn:["জানু","ফেব","মার্চ","এপ্রি","মে","জুন","জুলাই","আগ","সেপ","অক্টো","নভে","ডিসে"]};
const fmtDate = d => validDate(d) ? (+d.slice(8)) + " " + MO[S.lang][+d.slice(5, 7) - 1] + " " + d.slice(0, 4) : "";
let keepTable = false;
const ICON = {OK:"✓ ",Missing:"! ",Expired:"✕ ",ExpiryNeeded:"⚠ ",NotProvided:"○ "};
const sig = () => JSON.stringify([S.match, S.expiry]);
let toastTimer;
function toast(msg, err) {
  const el = $("#toast"); el.textContent = msg; el.className = "show" + (err ? " err" : "");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => el.className = "", 4000);
}
const fileById = id => S.files.find(f => f.id === id);

/* ---------- requirements ---------- */
function parseReq(text) {
  let j; try { j = JSON.parse(text); } catch (e) { throw new Error("malformed JSON"); }
  const tn = j && j.tender; if (!tn || typeof tn !== "object") throw new Error("tender missing");
  for (const k of ["tender_id","title","procuring_entity","bidder","submission_deadline"])
    if (typeof tn[k] !== "string" || !tn[k].trim()) throw new Error("tender." + k + " missing");
  if (!validDate(tn.submission_deadline)) throw new Error("submission_deadline must be YYYY-MM-DD");
  if (!Array.isArray(j.requirements)) throw new Error("requirements missing");
  const ids = new Set();
  j.requirements.forEach((r, i) => {
    const p = "requirements[" + i + "] ";
    if (!r || r.id === undefined || r.id === null || r.id === "") throw new Error(p + "id missing");
    if (ids.has(String(r.id))) throw new Error("duplicate id " + r.id); ids.add(String(r.id));
    if (typeof r.order !== "number" || !isFinite(r.order)) throw new Error(p + "invalid order");
    if (typeof r.title_en !== "string" || !r.title_en) throw new Error(p + "title_en missing");
    if (typeof r.title_bn !== "string" || !r.title_bn) throw new Error(p + "title_bn missing");
    if (typeof r.mandatory !== "boolean") throw new Error(p + "mandatory must be boolean");
    if (typeof r.has_expiry !== "boolean") throw new Error(p + "has_expiry must be boolean");
  });
  return {tender: tn, reqs: j.requirements.map(r => ({...r, id: String(r.id)})).sort((a, b) => a.order - b.order)};
}
async function loadReq(file) {
  try {
    const p = parseReq(await file.text());
    S.tender = p.tender; S.reqs = p.reqs; S.match = {}; S.expiry = {};
  } catch (e) { toast(t().errJson + e.message, true); }
  render();
}

/* ---------- files ---------- */
async function addFiles(list) {
  for (const f of Array.from(list)) {
    if (!(f.type === "application/pdf" || /\.pdf$/i.test(f.name))) { toast(f.name + t().notPdf, true); continue; }
    if (S.files.length >= 30) { toast(t().tooMany, true); break; }
    if (S.files.reduce((a, x) => a + x.size, 0) + f.size > 50 * 1048576) { toast(t().tooBig + f.name, true); continue; }
    const e = {id: ++S.seq, name: f.name, size: f.size, pages: 0, hash: "", error: false, bytes: null};
    try {
      e.bytes = new Uint8Array(await f.arrayBuffer());
      e.hash = Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", e.bytes))).map(b => b.toString(16).padStart(2, "0")).join("");
      e.pages = (await PDFLib.PDFDocument.load(e.bytes)).getPageCount();
    } catch (err) { e.error = true; toast(f.name + ": " + t().bad, true); }
    S.files.push(e); render();
  }
}
function removeFile(id) {
  for (const r in S.match) if (S.match[r] === id) delete S.match[r];
  S.files = S.files.filter(f => f.id !== id); render();
}
const isDup = f => !f.error && S.files.some(o => o !== f && !o.error && o.hash === f.hash);
function usedElsewhere(f, reqId) {
  return Object.entries(S.match).some(([r, id]) => { if (r === reqId) return false; const o = fileById(id); return o && (o.id === f.id || o.hash === f.hash); });
}
function setMatch(reqId, val) {
  if (!val) { delete S.match[reqId]; delete S.expiry[reqId]; return render(); }
  const f = fileById(+val);
  if (!f || f.error) return render();
  if (usedElsewhere(f, reqId)) { toast(t().dupBlock, true); return render(); }
  S.match[reqId] = f.id; render();
}

/* ---------- status ---------- */
function status(r) {
  const f = fileById(S.match[r.id]);
  if (!f) return r.mandatory ? "Missing" : "NotProvided";
  if (r.has_expiry) {
    const d = S.expiry[r.id];
    if (!validDate(d)) return "ExpiryNeeded";
    if (d < S.tender.submission_deadline) return "Expired";
  }
  return "OK";
}
const blocking = s => s === "Missing" || s === "ExpiryNeeded" || s === "Expired";
function stats() {
  const sts = S.reqs.map(status);
  return {sts, total: S.reqs.length, mand: S.reqs.filter(r => r.mandatory).length, matched: S.reqs.filter(r => S.match[r.id]).length,
    block: sts.filter(blocking).length, ok: sts.filter(s => s === "OK").length,
    miss: sts.filter(s => s === "Missing").length, need: sts.filter(s => s === "ExpiryNeeded").length, exp: sts.filter(s => s === "Expired").length};
}

/* ---------- suggest ---------- */
const norm = s => s.toLowerCase().replace(/\.pdf$/, "").replace(/[^a-z0-9]+/g, " ").trim().split(" ").filter(Boolean);
function suggest() {
  let n = 0;
  for (const r of S.reqs) {
    if (S.match[r.id]) continue;
    const words = norm(r.title_en); if (!words.length) continue;
    let best = null, bs = 0;
    for (const f of S.files) {
      if (f.error || usedElsewhere(f, r.id) || Object.values(S.match).includes(f.id)) continue;
      const fw = norm(f.name), sc = words.filter(w => fw.includes(w)).length / words.length;
      if (sc > bs) { bs = sc; best = f; }
    }
    if (best && bs >= 0.6) { S.match[r.id] = best.id; n++; }
  }
  toast(n ? t().suggested(n) : t().noSug, !n); render();
}

/* ---------- render ---------- */
function render() {
  const L = t(), st = stats(), ready = S.reqs.length && !st.block, gen = !!(ready && S.out && S.out.sig === sig());
  document.documentElement.lang = S.lang;
  document.querySelectorAll("[data-i]").forEach(e => e.textContent = L[e.dataset.i]);
  document.querySelectorAll(".lang button").forEach(b => b.classList.toggle("on", b.dataset.l === S.lang));
  $("#tid").textContent = S.tender ? S.tender.tender_id : "—";
  $("#hs").textContent = gen ? "✓ " + L.gen2 : ready ? "✓ " + L.rg : "⚠ " + L.notready;
  const dn = [!!S.tender, !!S.tender && S.files.length > 0, st.matched > 0, !!ready && st.matched > 0, gen], cur = dn.indexOf(false);
  $("#steps").innerHTML = L.steps.map((s, i) => { const c = dn[i] ? "done" : i === 3 && st.matched > 0 && st.block ? "blocked" : i === cur ? "on" : "";
    return `<li class="${c}" ${i === cur ? 'aria-current="step"' : ""}>${c === "done" ? "✓" : c === "blocked" ? "!" : "0" + (i + 1)} ${s}</li>`; }).join("");
  const tn = S.tender;
  $("#tender").innerHTML = tn ? [["tid", tn.tender_id], ["ttl", tn.title], ["ent", tn.procuring_entity], ["bid", tn.bidder], ["dl", fmtDate(tn.submission_deadline)]]
    .map(([k, v]) => `<div><small>${L[k]}</small><b>${esc(v)}</b></div>`).join("") : `<span class="muted">${L.empty}</span>`;
  const kv = [st.total, st.mand, st.matched, st.block, st.ok];
  const ic = ["▤", "★", "⇄", "⚠", "✓"];
  $("#kpis").innerHTML = kv.map((v, i) => `<div class="kpi ${i === 3 ? "big" + (v ? " bad" : "") : i === 4 ? "big" : ""}"><i class="ic" aria-hidden="true">${ic[i]}</i><b data-v="${v}">${v}</b>${L.k[i]}</div>`).join("");
  document.querySelectorAll(".kpi b").forEach((b, i) => { const to = +b.dataset.v, from = S.pk[i] === undefined ? to : S.pk[i]; S.pk[i] = to;
    if (from === to || matchMedia("(prefers-reduced-motion:reduce)").matches) return; const t0 = performance.now();
    (function f(now) { const p = Math.min(1, (now - t0) / 300); b.textContent = Math.round(from + (to - from) * p); if (p < 1) requestAnimationFrame(f); })(t0); });
  if (!keepTable) $("#table").innerHTML = !S.reqs.length ? `<p class="muted">${L.empty}</p>` :
    `<table><thead><tr>${L.h.map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>${S.reqs.map((r, i) => {
      const s = st.sts[i], mf = S.match[r.id];
      const opts = S.files.filter(f => !f.error && (f.id === mf || !usedElsewhere(f, r.id) && !Object.values(S.match).includes(f.id)))
        .map(f => `<option value="${f.id}" ${f.id === mf ? "selected" : ""}>${esc(f.name)}</option>`).join("");
      const dis = S.lang === "bn" ? r.title_bn : r.title_en;
      return `<tr><td><span class="n">${r.order}</span></td><td><b>📄 ${esc(dis)}</b><br><small class="muted">${esc(r.id)}</small></td>
      <td><span class="badge ${r.mandatory ? "m" : ""}">${r.mandatory ? L.mand : L.opt}</span>${r.has_expiry ? ` <span class="badge">${L.exp}</span>` : ""}</td>
      <td><select data-r="${esc(r.id)}"><option value="">${L.none}</option>${opts}</select></td>
      <td>${r.has_expiry && mf ? `<label class="dl"><span class="sr">${L.expLabel}: ${esc(dis)}</span><input type="date" data-e="${esc(r.id)}" value="${esc(S.expiry[r.id] || "")}"></label>${validDate(S.expiry[r.id]) ? `<small class="muted">${fmtDate(S.expiry[r.id])}</small>` : ""}` : "—"}</td>
      <td><span class="st ${s}">${ICON[s]}${L.st[s]}</span></td><td>${mf ? `<button class="mini" data-undo="${esc(r.id)}">↺ ${L.undo}</button>` : ""}</td></tr>`;
    }).join("")}</tbody></table>`;
  const names = k => S.reqs.filter((r, i) => k.includes(st.sts[i])).map(r => esc(S.lang === "bn" ? r.title_bn : r.title_en)).join(", ");
  const pct = st.total ? Math.round((st.total - st.block) / st.total * 100) : 0;
  $("#health").className = "card health" + (gen ? " gen" : ready ? " ready" : "");
  $("#health").innerHTML = `<h3>${gen ? "✓ " + L.gen2 : ready ? "✓ " + L.rg : "⚠ " + L.notready}</h3>` + (ready ? `<p class="muted">${L.readyTxt}</p>` : S.reqs.length ? `<p><b>${L.blocking(st.block)}</b></p>` + (st.miss ? `<p class="muted">${L.stM}: ${names(["Missing"])}</p>` : "") + (st.need + st.exp ? `<p class="muted">${L.stE}: ${names(["ExpiryNeeded", "Expired"])}</p>` : "") : `<p class="muted">${L.needReq}</p>`)
    + `<div class="meter" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><i style="width:${pct}%"></i></div>`;
  const mb = (S.files.reduce((a, f) => a + f.size, 0) / 1048576).toFixed(1);
  $("#totals").innerHTML = L.sel(S.files.length, mb) + `<div class="meter"><i style="width:${Math.min(100, mb * 2)}%"></i></div>`;
  $("#files").innerHTML = S.files.length ? S.files.map(f => {
    const r = S.reqs.find(q => S.match[q.id] === f.id);
    return `<div class="file ${f.error ? "bad" : ""}"><span class="pdf">PDF</span><div><b title="${esc(f.name)}">${esc(f.name)}</b>
    <small class="muted">${f.error ? L.bad : f.pages + " " + L.pages + " · " + (f.size / 1024).toFixed(0) + " KB"}</small>
    ${f.error ? `<span class="badge m">! ${L.invalidF}</span>` : `<span class="badge okb">✓ ${L.validF}</span>`}${isDup(f) ? ` <span class="badge dup">⚠ ${L.dup}</span>` : ""}${r ? ` <span class="badge mt">↔ ${L.mtd}</span>` : ""}<br><small>${r ? L.matched + " " + esc(S.lang === "bn" ? r.title_bn : r.title_en) : L.unmatched}</small></div>
    <button class="x" data-rm="${f.id}" title="${L.remove}" aria-label="${L.remove}">✕</button></div>`;
  }).join("") : `<p class="muted">${L.noFiles}</p>`;
  const g = $("#gen"); g.disabled = !ready;
  $("#why").textContent = ready ? "" : S.reqs.length ? L.blocking(st.block) + " — " + [st.miss && L.missingDocs, st.need && L.expNeeded, st.exp && L.expiredDocs].filter(Boolean).join(" · ") : L.needReq;
}

/* ---------- PDF generation ---------- */
const safe = s => String(s).replace(/[^\x20-\x7E]/g, "?");
function wrap(text, font, size, w) {
  const out = []; let line = "";
  for (const word of safe(text).split(" ")) {
    const tryL = line ? line + " " + word : word;
    if (font.widthOfTextAtSize(tryL, size) > w && line) { out.push(line); line = word; } else line = tryL;
  }
  if (line) out.push(line); return out;
}
async function generate() {
  if (!S.reqs.length || stats().block) return;
  const g = $("#gen"); g.disabled = true;
  try {
    const {PDFDocument, StandardFonts, rgb} = PDFLib;
    const inc = S.reqs.filter(r => S.match[r.id]);
    const out = await PDFDocument.create();
    const font = await out.embedFont(StandardFonts.Helvetica), bold = await out.embedFont(StandardFonts.HelveticaBold);
    const cover = out.addPage([595.28, 841.89]);
    const startPages = []; let pg = 2;
    for (const r of inc) {
      const f = fileById(S.match[r.id]); startPages.push(pg);
      const src = await PDFDocument.load(f.bytes);
      (await out.copyPages(src, src.getPageIndices())).forEach(p => out.addPage(p));
      pg += src.getPageCount();
    }
    const tn = S.tender, teal = rgb(0.043, 0.365, 0.388);
    cover.drawRectangle({x: 0, y: 760, width: 595.28, height: 82, color: teal});
    cover.drawText("TENDER SUBMISSION PACKAGE", {x: 48, y: 794, size: 22, font: bold, color: rgb(1, 1, 1)});
    let y = 725;
    const rows = [["Tender ID", tn.tender_id], ["Tender Title", tn.title], ["Procuring Entity", tn.procuring_entity], ["Bidder", tn.bidder],
      ["Submission Deadline", tn.submission_deadline], ["Package Made Date", new Date().toISOString().slice(0, 10)]];
    for (const [k, v] of rows) {
      cover.drawText(k, {x: 48, y, size: 10, font: bold, color: teal});
      for (const ln of wrap(v, font, 12, 340)) { cover.drawText(ln, {x: 200, y, size: 12, font}); y -= 16; }
      y -= 6;
    }
    y -= 8; cover.drawText("Included Documents", {x: 48, y, size: 13, font: bold, color: teal}); y -= 20;
    inc.forEach((r, i) => {
      const label = safe(i + 1 + ". " + r.title_en), num = String(startPages[i]);
      cover.drawText(label.length > 70 ? label.slice(0, 67) + "..." : label, {x: 48, y, size: 11, font});
      cover.drawText(num, {x: 520 - font.widthOfTextAtSize(num, 11), y, size: 11, font}); y -= 15;
    });
    const pages = out.getPages(), total = pages.length;
    pages.forEach((p, i) => {
      const txt = safe(tn.tender_id) + " | Page " + (i + 1) + " of " + total, {width} = p.getSize();
      p.drawText(txt, {x: width / 2 - font.widthOfTextAtSize(txt, 8) / 2, y: 10, size: 8, font, color: rgb(0.3, 0.3, 0.3)});
    });
    const blob = new Blob([await out.save()], {type: "application/pdf"});
    const name = tn.tender_id.replace(/[\\/:*?"<>|]/g, "_") + "_Package.pdf";
    if (S.out) URL.revokeObjectURL(S.out.url);
    S.out = {url: URL.createObjectURL(blob), name, pages: total, docs: inc.length, sig: sig()};
    render(); showModal();
  } catch (e) { toast("PDF error: " + e.message, true); }
  render();
}

/* ---------- events ---------- */
function zone(sel, fn) {
  const z = $(sel), inp = z.querySelector("input");
  inp.addEventListener("change", () => { fn(inp.files); inp.value = ""; });
  ["dragenter", "dragover"].forEach(ev => z.addEventListener(ev, e => { e.preventDefault(); z.classList.add("over"); }));
  ["dragleave", "drop"].forEach(ev => z.addEventListener(ev, () => z.classList.remove("over")));
  z.addEventListener("drop", e => { e.preventDefault(); fn(e.dataTransfer.files); });
}
zone("#reqDrop", l => l[0] && loadReq(l[0]));
zone("#pdfDrop", addFiles);
$("#table").addEventListener("change", e => {
  if (e.target.dataset.r !== undefined) setMatch(e.target.dataset.r, e.target.value);
  if (e.target.dataset.e !== undefined) {
    const id = e.target.dataset.e; S.expiry[id] = e.target.value;
    keepTable = true; render(); keepTable = false;
    const r = S.reqs.find(q => q.id === id), tr = e.target.closest("tr");
    if (r && tr) {
      const s = status(r), el = tr.querySelector(".st"); el.className = "st " + s; el.textContent = ICON[s] + t().st[s];
      const lab = tr.querySelector("label.dl"); let sm = lab.nextElementSibling;
      if (validDate(e.target.value)) { if (!sm) { sm = document.createElement("small"); sm.className = "muted"; lab.after(sm); } sm.textContent = fmtDate(e.target.value); }
      else if (sm) sm.remove();
    }
  }
});
$("#files").addEventListener("click", e => { const b = e.target.closest("[data-rm]"); if (b) removeFile(+b.dataset.rm); });
document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => { S.lang = b.dataset.l; render(); }));
$("#reset").addEventListener("click", () => { if (confirm(t().confirm)) { S.match = {}; S.expiry = {}; render(); } });
$("#suggest").addEventListener("click", suggest);
$("#gen").addEventListener("click", generate);
window.addEventListener("dragover", e => e.preventDefault());
window.addEventListener("drop", e => e.preventDefault());
$("#table").addEventListener("click", e => { const b = e.target.closest("[data-undo]"); if (b) setMatch(b.dataset.undo, ""); });
function showModal() {
  const L = t(), o = S.out, m = $("#modal");
  m.innerHTML = `<div class="dlg" role="dialog" aria-modal="true" aria-labelledby="mh"><div class="tick">✓</div><h2 id="mh">${L.genH}</h2><dl><dt>${L.fn}</dt><dd>${esc(o.name)}</dd><dt>${L.pg}</dt><dd>${o.pages}</dd><dt>${L.dc}</dt><dd>${o.docs}</dd></dl><a class="primary" href="${o.url}" download="${esc(o.name)}">${L.dlb}</a> <button class="ghost" id="mc">${L.cls}</button></div>`;
  m.className = "show"; $("#mc").onclick = () => m.className = ""; m.querySelector("a").focus();
}
document.addEventListener("keydown", e => { if (e.key === "Escape") $("#modal").className = ""; });
render();