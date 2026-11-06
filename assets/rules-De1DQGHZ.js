import{i as e,t}from"./react-DmwM7vua.js";import{n}from"./palantir-Ci2CGsJA.js";import{b as r,dt as i,ft as a,x as o}from"./palette-CnBNArY6.js";import{C as s}from"./MapTip-Ki691OAL.js";import{n as c}from"./MapView-D43o3vYS.js";import{a as l}from"./widgets-C9TnvTyR.js";var u=e(t(),1),d=n(),f=e=>{let t=[...e].sort((e,t)=>e-t);return t.length?t[Math.floor(t.length/2)]:0},p=e=>e>=.5?Math.round(e).toLocaleString(`en-US`):`–`;function m(e,t){let n=e.res.snaps[t],s=t>0?e.res.snaps[t-1]:null;if(!n)return[];let c=a.map(e=>{let t=n.d[e],a=n.sent?.[e],c=s?.d[e],l=null;for(let t of r){let r=(n.deathsBy?.[e]?.[t]??0)-(s?.deathsBy?.[e]?.[t]??0);r>.01&&(!l||r>l.n)&&(l={c:t,n:r})}let u=t.deaths-(c?.deaths??0);return{id:e,name:i[e].name,reachable:t.reachable!==!1,trapped:t.trapped,hurt:t.crit+t.serious,fires:t.fires,water:Math.max(0,t.waterNeed-t.water),shelter:Math.max(0,t.displaced-t.sheltered),teams:a?.teams??0,trips:a?.trips??0,lost:(n.lost??[]).filter(t=>t.to===e),died:u,cause:l&&u>=.5?o[l.c]:null,need:t.trapped+t.crit*3+t.serious+10*t.fires+Math.max(0,t.waterNeed-t.water)*4,sentN:(a?.teams??0)+(a?.trips??0),flag:null}}),l=c.reduce((e,t)=>e+t.need,0),u=f(c.map(e=>e.need)),d=f(c.map(e=>e.sentN));for(let e of c)e.need>=Math.max(10,.08*l)&&e.sentN===0?e.flag=e.reachable?`help`:`cut`:e.sentN>=Math.max(3,2*d)&&e.need<=u&&e.need<.04*l&&(e.flag=`extra`);return c.sort((e,t)=>t.need-e.need)}var h={help:`Needs help`,cut:`Cut off`,extra:`Plenty sent`},g={help:`Great need and nothing arrived this turn.`,cut:`Great need, nothing arrived, and no truck could reach it by road.`,extra:`A lot arrived here and the need is small: it may be needed elsewhere.`};function _(e){let t=new Map;for(let n=0;n<4;n++)for(let r of m(e,n))(r.flag===`help`||r.flag===`cut`)&&t.set(r.name,(t.get(r.name)??0)+1);return[...t.entries()].sort((e,t)=>t[1]-e[1]).map(([e])=>e)}function v(e){return[[e.trapped,`${p(e.trapped)} trapped`],[e.hurt*1.5,`${p(e.hurt)} hurt`],[e.fires*10,`${p(e.fires)} fires`],[e.water*4,`${p(e.water)} water short`]].filter(([e])=>e>=1).sort((e,t)=>t[0]-e[0]).slice(0,2).map(([,e])=>e).join(` · `)}var y=e=>e<=0?`0%`:e<.01?`<1%`:`${Math.round(e*100)}%`;function b({p:e,turn:t,mark:n,onRow:r,onTurn:i,onDied:a}){let o=(0,u.useMemo)(()=>Array.from({length:Math.min(28,e.res.snaps.length)},(t,n)=>m(e,n)),[e]),s=Math.max(0,Math.min(o.length-1,t)),c=o[s]??[],l=o.map(e=>e.filter(e=>e.flag===`help`||e.flag===`cut`).length),f=Math.max(1,...l),h=c.reduce((e,t)=>e+t.need,0)||1,g=c.reduce((e,t)=>e+t.sentN,0),_=Math.max(.01,...c.map(e=>e.need/h),...c.map(e=>g?e.sentN/g:0)),b=e=>`${Math.max(e>0?3:0,e/_*100)}%`,x=new Map;for(let e of c)e.died>=.5&&e.cause&&x.set(e.cause,(x.get(e.cause)??0)+1);let S=[...x.entries()].sort((e,t)=>t[1]-e[1])[0]?.[0]??null;return(0,d.jsxs)(`div`,{className:`ex-al`,"data-ref":`own: allocation board (East Grid bounded selection, Axis WMS single flag, Foundry histogram legend)`,children:[(0,d.jsxs)(`div`,{className:`ex-al-hist`,children:[(0,d.jsxs)(`div`,{className:`ex-al-y`,children:[(0,d.jsx)(`span`,{children:`Districts left without help`}),(0,d.jsxs)(`b`,{children:[l[s]??0,(0,d.jsx)(`small`,{children:` now`})]})]}),(0,d.jsx)(`div`,{className:`ex-al-bars`,"aria-hidden":!0,children:l.map((e,t)=>(0,d.jsx)(`i`,{className:t===s?`is-now`:``,style:{height:`${e?18+e/f*82:4}%`},title:`Turn ${t+1}: ${e} district${e===1?``:`s`} with great need got nothing`},t))}),(0,d.jsx)(`div`,{className:`ex-al-days`,"aria-hidden":!0,children:Array.from({length:Math.ceil(o.length/4)},(e,t)=>(0,d.jsx)(`span`,{children:t+1},t))}),(0,d.jsx)(`input`,{type:`range`,min:0,max:o.length-1,step:1,value:s,onChange:e=>i(Number(e.target.value)),"aria-label":`Turn`,"aria-valuetext":`Turn ${s+1}`})]}),(0,d.jsxs)(`p`,{className:`ex-al-key`,"aria-label":`Key`,children:[(0,d.jsxs)(`span`,{children:[(0,d.jsx)(`i`,{className:`is-need`}),`share of the Bay's need`]}),(0,d.jsxs)(`span`,{children:[(0,d.jsx)(`i`,{className:`is-sent`}),`share of what arrived`]}),(0,d.jsxs)(`span`,{children:[(0,d.jsx)(`i`,{className:`is-gap`}),`great need, nothing arrived`]})]}),(0,d.jsxs)(`table`,{"aria-label":`Where help went at this turn`,children:[(0,d.jsx)(`thead`,{children:(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`th`,{scope:`col`,children:`District`}),(0,d.jsx)(`th`,{scope:`col`,children:`Need`}),(0,d.jsx)(`th`,{scope:`col`,children:`Sent`}),(0,d.jsxs)(`th`,{scope:`col`,className:`is-n`,children:[`Died`,S?(0,d.jsxs)(`small`,{children:[`mostly `,S.toLowerCase()]}):null]})]})}),(0,d.jsx)(`tbody`,{children:c.map(e=>{let t=e.flag===`help`||e.flag===`cut`;return(0,d.jsxs)(`tr`,{className:`${t?`is-gap`:``}${e.flag===`extra`?` is-extra`:``}${n===e.id?` is-mark`:``}`,onClick:()=>r(e.id),tabIndex:0,onKeyDown:t=>{t.key===`Enter`&&r(e.id)},children:[(0,d.jsxs)(`th`,{scope:`row`,children:[(0,d.jsx)(`b`,{children:e.name}),!e.reachable&&(0,d.jsx)(`small`,{children:`No road in`})]}),(0,d.jsxs)(`td`,{className:`ex-al-need`,children:[(0,d.jsx)(`span`,{className:`ex-bar`,children:(0,d.jsx)(`i`,{style:{width:b(e.need/h)}})}),(0,d.jsx)(`b`,{children:y(e.need/h)}),(0,d.jsx)(`small`,{children:v(e)||`little`})]}),(0,d.jsxs)(`td`,{className:`ex-al-sent`,children:[(0,d.jsx)(`span`,{className:`ex-bar is-sent`,children:(0,d.jsx)(`i`,{style:{width:b(e.sentN/(g||1))}})}),(0,d.jsx)(`b`,{children:e.sentN>0?y(e.sentN/(g||1)):`0`}),(e.sentN>0||e.lost.length>0)&&(0,d.jsxs)(`small`,{children:[[e.teams&&`${e.teams} team${e.teams>1?`s`:``}`,e.trips&&`${e.trips} trip${e.trips>1?`s`:``}`].filter(Boolean).join(` · `),e.flag===`extra`?`, more than its need`:``,e.lost.length?(0,d.jsxs)(`em`,{className:`ex-lost`,title:e.lost.map(e=>`${e.order}: ${e.reason}`).join(`
`),children:[e.sentN?` · `:``,e.lost.length,` lost`]}):null]})]}),(0,d.jsx)(`td`,{className:`is-n`,children:e.died>=.5?(0,d.jsxs)(`button`,{className:`ex-died`,onClick:t=>{t.stopPropagation(),(a??r)(e.id)},title:`Follow ${e.name}'s deaths to the turn and the code`,children:[(0,d.jsx)(`b`,{children:p(e.died)}),e.cause&&e.cause!==S?(0,d.jsx)(`small`,{children:e.cause.toLowerCase()}):null]}):(0,d.jsx)(`span`,{className:`ex-0`,children:`·`})})]},e.id)})})]})]})}function x({player:e,mark:t,onRow:n}){let r=c(e),i=r?Math.min(27,r.turn):0,a=(0,u.useMemo)(()=>r&&!r.preview?m(r,i):[],[r,i,r?.preview]),o=r&&!r.preview?l(r,i):null;return(0,d.jsxs)(`div`,{className:`al-t`,children:[(0,d.jsxs)(`div`,{className:`al-h`,children:[(0,d.jsx)(`b`,{children:o?`Turn ${i+1} of 28`:`Where help went`}),(0,d.jsx)(`span`,{children:o?`${o.when} · day ${o.day+1}`:`Run your bot to fill this in`})]}),r&&!r.preview&&(0,d.jsx)(`input`,{className:`al-slider`,type:`range`,min:0,max:27,step:1,value:i,onChange:e=>{r.playing=!1,r.seek(Number(e.target.value)+.999)},"aria-label":`Turn`}),a.length===0?(0,d.jsx)(`p`,{className:`al-empty`,children:`One row per district: what it needed, what your bot sent there, what never arrived, and who died. Run your bot and it fills in turn by turn.`}):(0,d.jsxs)(`table`,{children:[(0,d.jsxs)(`thead`,{children:[(0,d.jsxs)(`tr`,{className:`g`,children:[(0,d.jsx)(`th`,{rowSpan:2,children:`District`}),(0,d.jsx)(`th`,{colSpan:5,className:`is-need`,children:`Needs now`}),(0,d.jsx)(`th`,{colSpan:2,className:`is-sent`,children:`Arrived`}),(0,d.jsx)(`th`,{rowSpan:2,className:`is-lost`,children:`Lost`}),(0,d.jsx)(`th`,{rowSpan:2,className:`is-res`,children:`Died`})]}),(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`th`,{title:`Trapped in rubble`,children:`Trapped`}),(0,d.jsx)(`th`,{title:`Badly hurt, untreated`,children:`Hurt`}),(0,d.jsx)(`th`,{title:`Fires burning`,children:`Fires`}),(0,d.jsx)(`th`,{title:`Water loads short`,children:`Water`}),(0,d.jsx)(`th`,{title:`No shelter`,children:`Shelter`}),(0,d.jsx)(`th`,{title:`Teams that arrived`,children:`Teams`}),(0,d.jsx)(`th`,{title:`Supply trips that arrived`,children:`Trips`})]})]}),(0,d.jsx)(`tbody`,{children:a.map(e=>(0,d.jsxs)(`tr`,{className:`${e.flag?`is-${e.flag}`:``}${t===e.id?` is-mark`:``}`,onClick:()=>n?.(e.id),children:[(0,d.jsxs)(`td`,{className:`nm`,children:[(0,d.jsx)(`b`,{children:e.name}),e.flag&&(0,d.jsx)(`em`,{title:g[e.flag],children:h[e.flag]})]}),(0,d.jsx)(`td`,{children:p(e.trapped)}),(0,d.jsx)(`td`,{children:p(e.hurt)}),(0,d.jsx)(`td`,{children:p(e.fires)}),(0,d.jsx)(`td`,{children:p(e.water)}),(0,d.jsx)(`td`,{children:p(e.shelter)}),(0,d.jsx)(`td`,{className:`s`,children:p(e.teams)}),(0,d.jsx)(`td`,{className:`s`,children:p(e.trips)}),(0,d.jsx)(`td`,{className:`l`,title:e.lost.map(e=>`${e.order}: ${e.reason}`).join(`
`),children:e.lost.length?e.lost.length:`–`}),(0,d.jsxs)(`td`,{className:`d`,children:[p(e.died),e.cause&&(0,d.jsx)(`small`,{children:e.cause})]})]},e.id))})]})]})}var S=.95,C=`  // move a team: by road if a sure route fits in the turn, else by helicopter or BART, else the risky road
  const moveTeam = (t, to) => {
    const DD = view.districts
    if (t.at === to) return
    const p = view.path(t.at, to, { by: 'safe' })
    const fits = p.ok && p.hours <= 6
    // a road order counts as the team's one order this turn, even if the road fails under it: no second try
    if (fits && p.chance >= ${S}) { act.move(t.id, to, p.roads); return }
    if (DD[to] && DD[to].landingZone && view.fleet.heli > 0) { if (act.move(t.id, to, 'heli').moved) return }
    if (DD[to] && DD[to].bartStations.length && view.bartPath(t.at, to).ok) { if (act.move(t.id, to, 'bart').moved) return }
    if (fits) act.move(t.id, to, p.roads)
  }
  // how many teams of a kind are in (or heading to) a district
  memory.goal = memory.goal || {}
  const teamsIn = (kind, id) => view.teams.filter(t => t.kind === kind && (t.at === id || memory.goal[t.id] === id)).length
`,w=(e,t)=>n=>{let r=n.spread===`per`?`(${t}) / (1 + teamsIn('${e}', id))`:`(${t})`;return`  // ${e} teams waiting at the depot go to ${n.spread===`per`?`the district that needs them most per team already there`:`the district that needs them most`}
  for (const t of view.teams.filter(t => t.kind === '${e}' && t.at === 'depot')) {
    const need = id => ${r}
    let best = ids[0]
    for (const id of ids) if (need(id) > need(best)) best = id
    memory.goal[t.id] = best
    moveTeam(t, best)
  }`},T=[{id:`rescue`,name:`Rescue`,sentence:`Send each rescue team to {spread}.`,why:`People trapped in collapsed buildings die fast in the first day. Rescue teams are the only ones who can free them.`,choices:[{key:`spread`,label:`where`,options:[{value:`most`,label:`the district with the most people trapped`},{value:`per`,label:`where the most are trapped for each rescue team already there`}]}],code:w(`rescue`,`D[id].trapped`)},{id:`fire`,name:`Fire`,sentence:`Send each fire team to {spread}.`,why:`Fires spread every turn, fastest where the hydrants are dry.`,choices:[{key:`spread`,label:`where`,options:[{value:`most`,label:`the district with the most fires`},{value:`per`,label:`where the most fires burn for each fire team already there`}]}],code:w(`fire`,`D[id].fires * (D[id].firefightingWater === 'hydrants dry' ? 1.5 : 1)`)},{id:`medical`,name:`Medical`,sentence:`Send each medical team to {spread}.`,why:`Critical injuries kill 8% a turn if nobody treats them; hospitals that lost beds can not keep up.`,choices:[{key:`spread`,label:`where`,options:[{value:`most`,label:`the district with the most badly hurt`},{value:`per`,label:`where the most are badly hurt for each medical team already there`}]}],code:w(`medical`,`D[id].critical * 3 + D[id].serious`)},{id:`water`,name:`Water and food`,sentence:`Every turn, send {what} by {vehicle} to the districts shortest of it.`,why:`Where taps are dry people need deliveries, or disease follows within days.`,choices:[{key:`what`,label:`what`,options:[{value:`water`,label:`water`},{value:`both`,label:`water and food`}]},{key:`vehicle`,label:`vehicle`,options:[{value:`truck`,label:`truck (6 loads, damaged roads ok)`},{value:`car`,label:`car (2 loads, open roads only)`}]}],code:e=>{let t=e.vehicle===`truck`?6:2,n=e.what===`both`;return`  // ${n?`water and food`:`water`} by ${e.vehicle}, to the districts shortest of it, while ${e.vehicle}s and stock last
  const short = ids.map(id => ({ id, w: D[id].waterNeed - D[id].water${n?`, r: D[id].rationNeed - D[id].rations`:``} }))
    .filter(s => s.w > 0${n?` || s.r > 0`:``})
    .sort((a, b) => (b.w${n?` + b.r`:``}) - (a.w${n?` + a.r`:``}))
  for (const s of short) {
    if (view.fleet.${e.vehicle} === 0) break
    // one route per district, worked out once
    const p = view.path('depot', s.id, { vehicle: '${e.vehicle}', by: 'safe' })
    if (!p.ok || p.hours > 6) continue
    let guard = 0
    while ((s.w > 0${n?` || s.r > 0`:``}) && view.fleet.${e.vehicle} > 0 && guard++ < 6) {
      const w = Math.max(0, Math.min(${t}, Math.ceil(s.w), view.depot.water))${n?`, r = Math.max(0, Math.min(${t} - w, Math.ceil(s.r), view.depot.rations))`:`, r = 0`}
      if (w + r === 0) break
      if (!act.send('${e.vehicle}', s.id, { water: w${n?`, rations: r`:``} }, p).sent) break
      s.w -= w${n?`; s.r -= r`:``}
    }
  }`}},{id:`engineer`,name:`Engineers`,sentence:`Send engineers to {target}.`,why:`Bridges close for inspection after strong shaking, and broken roads cut districts off. Engineers reopen them.`,choices:[{key:`target`,label:`what`,options:[{value:`bridges`,label:`open closed bridges and tunnels first, then repair roads into the worst-hit districts`},{value:`roads`,label:`repair the roads into the worst-hit districts`}]}],code:e=>`  // engineers: ${e.target===`bridges`?`closed crossings first, then `:``}the roads into the worst-hit districts
  const worst = ids.slice().sort((a, b) => (D[b].trapped + D[b].fires * 20) - (D[a].trapped + D[a].fires * 20))
  view.teams.filter(t => t.kind === 'engineer').forEach((t, k) => {
${e.target===`bridges`?`    const shut = Object.values(view.roads).find(r => r.closedForInspection && r.district === t.at)
    if (shut) { act.repair(t.id, shut.id); return }
`:``}    const target = worst[k % 4]
    if (t.at !== target) { moveTeam(t, target); return }
    const p = view.path('depot', target, { by: 'km', vehicle: 'truck' })
    const fix = p.roads.find(id => view.roads[id].condition > 0 && view.roads[id].district === target)
    if (fix) act.repair(t.id, fix)
  })`},{id:`tents`,name:`Tents`,sentence:`By day, send tents by truck to the {n} districts with the most people sleeping outside.`,why:`People who lost their homes suffer at night and in the rain; tents shelter 250 each.`,choices:[{key:`n`,label:`how many`,options:[{value:`3`,label:`3`},{value:`5`,label:`5`}]}],code:e=>`  // tents to the ${e.n} districts with the most people outside, in daylight
  if (!view.isNight) for (const id of ids.slice().sort((a, b) => D[b].unsheltered - D[a].unsheltered).slice(0, ${e.n})) {
    if (D[id].unsheltered < 1500 || view.depot.tents < 6 || view.fleet.truck === 0) continue
    const p = view.path('depot', id, { vehicle: 'truck', by: 'safe' })
    if (p.ok && p.hours <= 6) act.send('truck', id, { tents: 6 }, p)
  }`},{id:`buy`,name:`Buying`,sentence:`Buy {what} when the depot runs low, keeping {keep} back.`,why:`Stock runs out mid-week, but money left at the end also counts toward the score.`,choices:[{key:`what`,label:`what`,options:[{value:`water`,label:`water`},{value:`all`,label:`water, food and fuel`}]},{key:`keep`,label:`keep`,options:[{value:`4500`,label:`$4.5M`},{value:`2000`,label:`$2M`}]}],code:e=>`  // buy when stock runs low, keeping $${(Number(e.keep)/1e3).toFixed(1)}M back (money left counts at the end)
  if (view.depot.water < 12 && view.depot.money > ${e.keep}) act.buy('water', 10)${e.what===`all`?`
  if (view.depot.rations < 10 && view.depot.money > ${e.keep}) act.buy('rations', 8)
  if (view.depot.fuel < 40 && view.depot.money > ${Math.round(Number(e.keep)/3)}) act.buy('fuel', 20)`:``}`}],E=Object.fromEntries(T.map(e=>[e.id,e])),D=(e,t)=>E[e].sentence.replace(/\{(\w+)\}/g,(n,r)=>E[e].choices.find(e=>e.key===r)?.options.find(e=>e.value===t[r])?.label??r),O=`  // ── rule: `,k=`  // ── starter fallback`,A=e=>e.split(`
`).includes(k),j=e=>`(${Object.entries(e).map(([e,t])=>`${e}: ${t}`).join(`, `)})`,M=e=>{if(e.startsWith(`{`))try{return JSON.parse(e)}catch{return null}let t={};for(let n of e.slice(1,-1).split(`,`)){let e=/^\s*(\w+):\s*(\S+)\s*$/.exec(n);if(!e)return null;t[e[1]]=e[2]}return t},N=(e,t)=>`\n${O}${e} ${j(t)} · ${D(e,t)}\n  { const D = view.districts, ids = Object.keys(D)\n${[`rescue`,`fire`,`medical`,`engineer`].includes(e)?`  if (typeof ruledKinds !== 'undefined') ruledKinds.add('${e}')\n`:``}${E[e].code(t)}\n  } // ── end rule: ${e}`;function P(e){return`// My response bot. onTurn runs every 6 hours, 28 times over the week.
// Each "rule" block below was written from a choice you made; edit anything you like.

/** @param {View} view @param {Act} act @param {Record<string, any>} memory */
function onTurn(view, act, memory) {
${C}  const ruledKinds = new Set()
${e.map(({id:e,o:t})=>N(e,t)).join(`
`)}
}
`}function F(e){let t=e.split(`
`),n=[];return t.forEach((e,r)=>{if(!e.startsWith(O))return;let i=/^ {2}\/\/ ── rule: (\w+) (\{.*?\}|\([^)]*\)) ·/.exec(e);if(!i||!E[i[1]])return;let a=M(i[2])??K(i[1]),o=[];try{o=N(i[1],a).split(`
`).slice(2)}catch{}let s=e=>e.length>0&&e.every((e,n)=>t[r+1+n]===e),c=o.slice();c.length&&(c[c.length-1]=`  }`);let l=c.filter(e=>!e.includes(`if (typeof ruledKinds !== 'undefined') ruledKinds.add(`)),u=[o,c,l].find(s);n.push({id:i[1],o:a,start:r,end:u?r+1+u.length:r+1,safe:!!u})}),n}function I(e,t,n){let r=e.split(`
`),i=r.findIndex(e=>/function\s+onTurn\s*\(/.test(e));if(i<0)return null;e.includes(`const moveTeam = (t, to)`)||(r=[...r.slice(0,i+1),...C.trimEnd().split(`
`),`  const ruledKinds = new Set()`,...r.slice(i+1)]);let a=F(r.join(`
`));if(a.some(e=>!e.safe))return null;let o=r.indexOf(k),s=o>=0?o:a.length?a[a.length-1].end:r.map(e=>e.trimEnd()).lastIndexOf(`}`);return s<0?null:[...r.slice(0,s),...N(t,n).split(`
`),...r.slice(s)].join(`
`)}function L(e,t,n){let r=F(e)[t];if(!r||!r.safe)return e;let i=e.split(`
`);return[...i.slice(0,r.start),...n?N(r.id,n).split(`
`).slice(1):[],...i.slice(r.end)].join(`
`)}var R=e=>e.replace(/\s+/g,` `).trim(),z=`// Ares · Aftershock response bot (starter)`,B=`// Aftershock response bot (starter)`,V=e=>{let t=R(e);return t===R(`// Aftershock response bot (starter)
// onTurn runs once per 6-hour turn, 28 turns (7 days), from 4:18 pm on Wednesday 18 April.
// Read the Bay from \`view\`, give orders through \`act\`. Type \`view.\` or \`act.\` (or hover over a name) to see
// everything you can read and call, with what each one means.
// This bot runs from the first turn to the last without an error. How well it does is another matter.

/** @param {View} view @param {Act} act @param {Record<string, any>} memory */
function onTurn(view, act, memory) {
  const ids = Object.keys(view.districts)

  // Stock up on water at the start, while the money is there.
  if (view.turn === 0) {
    act.buy('water', Math.floor((view.depot.money * 0.8) / view.prices.water))
  }

  // Share the teams out across the Bay, one district after another, so every district gets help.
  memory.next = memory.next || 0
  for (const team of view.teams) {
    if (team.at !== 'depot') continue
    const to = ids[memory.next % ids.length]
    memory.next++
    act.move(team.id, to)
  }

  // Deliver water to every district, a car at a time.
  for (const id of ids) {
    if (view.fleet.car === 0 || view.depot.water < 2) break
    act.send('car', id, { water: 2 })
  }
}
`)||t===R(`// Aftershock response bot (starter)
// onTurn runs once per 6-hour turn, 28 turns (7 days), from 4:18 pm on Wednesday 18 April.
// Read the Bay from \`view\`, give orders through \`act\`. Type \`view.\` or \`act.\` (or hover over a name) to see
// everything you can read and call, with what each one means.
// This bot runs from the first turn to the last without an error. How well it does is another matter.

/** @param {View} view @param {Act} act @param {Record<string, any>} memory */
function onTurn(view, act, memory) {
  const ids = Object.keys(view.districts)

  // Stock up on water at the start, while the money is there.
  if (view.turn === 0) {
    act.buy('water', Math.floor((view.depot.money * 0.8) / view.prices.water))
  }

  // Share the teams out across the Bay, one district after another, so every district gets help.
  memory.next = memory.next || 0
  for (const team of view.teams) {
    if (team.at !== 'depot') continue
    const to = ids[memory.next % ids.length]
    memory.next++
    act.move(team.id, to)
  }

  // Deliver water to every district, a car at a time.
  for (const id of ids) {
    if (view.fleet.car === 0 || view.depot.water < 2) break
    act.send('car', id, { water: 2 })
  }
}
`.replace(B,z))},H=e=>V(e)||R(e)===R(`/** @param {View} view @param {Act} act @param {Record<string, any>} memory */
function onTurn(view, act, memory) {
  // Do nothing: local fire departments still fight fires and neighbours still dig, but no mutual aid moves.
  // Every score is measured against this.
}`);function U(e,t){let n=e.split(`
`),r=t-1,i=F(e).find(e=>r>=e.start&&r<e.end);if(i)return{kind:`rule`,id:i.id};let a=n.findIndex(e=>e.startsWith(`  // move a team: by road`)),o=n.findIndex(e=>e.includes(`const teamsIn = (kind, id)`));return a>=0&&o>=a&&r>=a&&r<=o?{kind:`helper`}:{kind:`mine`}}function W(e){let t=e.split(`
`),n=t.findIndex((t,n)=>/act\.move\(t\.id, to, p\.roads\)/.test(t)&&U(e,n+1).kind===`helper`);return n<0?null:{ln:n+1,sure:/p\.chance/.test(t[n])}}var G=e=>e.split(`
`).map((t,n)=>/\bact\.(move|send|repair|build|buy)\(/.test(t)&&!/^\s*\/\//.test(t)&&U(e,n+1).kind===`mine`?n+1:0).filter(Boolean),K=e=>Object.fromEntries(E[e].choices.map(e=>[e.key,e.options[0].value]));function q(e,t,n,r=K(t)){if(n&&V(e)){let e=s.slice(s.indexOf(`{`,s.indexOf(`function onTurn`))+1,s.lastIndexOf(`}`)).replace(`if (team.at !== 'depot') continue`,`if (team.at !== 'depot' || ruledKinds.has(team.kind)) continue`).replace(`act.move(team.id, to)`,`moveTeam(team, to)`);return`// Rules followed by the starter's remaining orders. Edit either part as you like.
/** @param {View} view @param {Act} act @param {Record<string, any>} memory */
function onTurn(view, act, memory) {
${C}  const ruledKinds = new Set()
${N(t,r)}
${k}${e}}
`}if(n&&R(e)===R(`/** @param {View} view @param {Act} act @param {Record<string, any>} memory */
function onTurn(view, act, memory) {
  // Do nothing: local fire departments still fight fires and neighbours still dig, but no mutual aid moves.
  // Every score is measured against this.
}`))return P([{id:t,o:r}]);let i=F(e);if(i.some(e=>!e.safe))return null;if(n)return i.some(e=>e.id===t)?e:I(e,t,r);let a=e,o;for(;(o=F(a).findIndex(e=>e.id===t))>=0;)a=L(a,o,null);return a}function J(e,t,n){let r=F(e).findIndex(e=>e.id===t);return r<0?e:F(e)[r].safe?L(e,r,n):null}export{J as _,P as a,_ as b,W as c,G as d,U as f,q as g,L as h,I as i,V as l,D as m,T as n,K as o,F as p,S as r,A as s,E as t,H as u,x as v,m as x,b as y};