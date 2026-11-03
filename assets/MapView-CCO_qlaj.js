import{i as e,t}from"./react-DmwM7vua.js";import{n}from"./palantir-Ci2CGsJA.js";import{O as r,a as i,o as a,w as o}from"./palette-DRh-aabA.js";import{C as s,b as c,d as l,f as u,g as d,h as f,i as p,l as m,m as h,o as g,p as _,s as v,t as y,u as b,v as x,y as S}from"./MapTip-CPfmBqzO.js";var C=e(t(),1),w={get:e=>{try{return localStorage.getItem(e)}catch{return null}},set:(e,t)=>{try{localStorage.setItem(e,t)}catch{}}},T=`ares:code:bay`;function E({seed:e=d,fresh:t=!1,code0:n}={}){let[r,o]=(0,C.useState)(()=>t?n??`// Ares · Aftershock response bot (starter)
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
`:w.get(`ares:code:bay`)??`// Ares · Aftershock response bot (starter)
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
`),[s,c]=(0,C.useState)(e),[y,x]=(0,C.useState)(null),[E,D]=(0,C.useState)(null),[O,k]=(0,C.useState)(null),[A,j]=(0,C.useState)(!1),[M,N]=(0,C.useState)(()=>t?[]:v()),[P,F]=(0,C.useState)(null),I=_(!0),L=(0,C.useRef)(null);(0,C.useEffect)(()=>{t||w.set(T,r)},[r,t]),(0,C.useEffect)(()=>()=>y?.dispose(),[y]);let R=(e,t=M)=>{let n=t.filter(t=>t.seed===e).map(e=>e.score);return n.length?Math.max(...n):null},z=(e=s,n={})=>new Promise(i=>{let a=n.withCode??r,o=!!n.preview,s=e===2018?0:h;o||j(!0),u(a,[e],!0,r=>{if(r.kind===`error`){D(r.error),j(!1),i(null);return}if(r.kind!==`island`||!r.full)return;D(r.error??null);let s=new S(r.full.res,n.label??m(e),r.saved,r.full.savedAt,r.full.log,r.full.answers,r.full.error);if(Object.assign(s,{parts:r.parts}),s.onShake=e=>L.current?.(e),s.speed=n.speed??1,s.preview=o,o&&(s.playing=!1),!o&&n.keep===!1)j(!1);else if(!o){let n=R(e);k({seed:e,score:r.saved,parts:r.parts,summary:r.summary,code:a,at:Date.now(),prevBest:n}),(f.includes(e)||e===2018)&&N(n=>{let i=[...n,{seed:e,score:r.saved,parts:r.parts,at:Date.now(),code:g(a)}];return t||b(i),i}),j(!1)}x(s),i(s)},s)});return(0,C.useEffect)(()=>{z(s,{preview:!0})},[]),{code:r,setCode:o,quake:s,setQuake:e=>(c(e),k(null),z(e,{preview:!0})),player:y,err:E,result:O,running:A,run:z,tests:M,best:R,bench:I,entry:P,submit:()=>{let e=[];F({rows:e,busy:!0,avg:null}),u(r,f,!1,t=>{if(t.kind===`island`)e.push({seed:t.seed,saved:t.saved,parts:t.parts,summary:t.summary}),F({rows:[...e],busy:!0,avg:null});else if(t.kind===`error`)D(t.error),F(null);else{let t=e.length?e.reduce((e,t)=>e+t.saved,0)/e.length:null;t!=null&&a(t),p(r,`Entered`,t??void 0),F({rows:[...e],busy:!1,avg:t})}},l(!0))},onShake:L,entered:i()}}var D=n();function O({g:e,tone:t,inspect:n=!0,pop:i=!1,className:a=``,cam:l,children:u}){let d=(0,C.useRef)(null),f=l??d;(0,C.useEffect)(()=>{e.onShake.current=e=>f.current?.shake(e)},[e,f]);let p=e.player;return(0,D.jsxs)(`div`,{className:`a2-map ${a}`,style:t?{"--a2-tone":t}:void 0,children:[p?(0,D.jsxs)(s,{src:p.src,camApi:f,children:[(0,D.jsx)(o,{}),(0,D.jsx)(c,{}),(0,D.jsx)(r,{})]},p.src.current.sc.seed+p.label):(0,D.jsx)(`div`,{className:`a2-map-wait`,children:`Loading the Bay…`}),p&&n&&(i?(0,D.jsx)(x,{player:p,pop:!0}):(0,D.jsx)(`div`,{className:`a2-inspect`,children:(0,D.jsx)(x,{player:p})})),(0,D.jsx)(y,{}),u]})}function k(e){return(0,C.useSyncExternalStore)(e?e.subscribe:A,()=>e?e.v:0),e}var A=()=>()=>{};export{k as n,E as r,O as t};