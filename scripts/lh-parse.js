const fs = require('fs');
const r = JSON.parse(fs.readFileSync('./lighthouse-report-20260328.json', 'utf8'));
const prev = JSON.parse(fs.readFileSync('./lighthouse-report-current.json', 'utf8'));
const audits = r.audits;

const lcp = audits['largest-contentful-paint-element'];
console.log('LCP ELEMENT:', JSON.stringify(lcp && lcp.details && lcp.details.items && lcp.details.items.slice(0,2), null, 2));

const pc = audits['uses-rel-preconnect'];
console.log('\nPRECONNECT score:', pc && pc.score, pc && pc.displayValue);
if (pc && pc.details && pc.details.items) pc.details.items.forEach(function(x){ console.log('  ', JSON.stringify(x)); });

const chains = audits['critical-request-chains'];
console.log('\nCRIT CHAINS longest:', JSON.stringify(chains && chains.details && chains.details.longestChain));

console.log('\n=== DELTA vs lighthouse-report-current.json ===');
var metrics = ['first-contentful-paint','largest-contentful-paint','total-blocking-time','cumulative-layout-shift','speed-index','interactive'];
metrics.forEach(function(k) {
  var nv = audits[k] && audits[k].numericValue;
  var pv = prev.audits[k] && prev.audits[k].numericValue;
  var ns = audits[k] && audits[k].score;
  console.log((audits[k] && audits[k].title || k) + ': prev=' + Math.round(pv) + 'ms new=' + Math.round(nv) + 'ms delta=' + (Math.round(nv)-Math.round(pv)) + ' score=' + ns);
});

console.log('\n=== SCORES ===');
Object.values(r.categories).forEach(function(c){ console.log(c.title + ': ' + Math.round(c.score*100)); });

// Top failing audits
console.log('\n=== FAILING AUDITS ===');
Object.values(audits).filter(function(a){ return a.score !== null && a.score < 0.9; }).sort(function(a,b){ return a.score-b.score; }).slice(0,12).forEach(function(a){
  console.log('['+a.score+'] '+a.title+': '+(a.displayValue||''));
});
