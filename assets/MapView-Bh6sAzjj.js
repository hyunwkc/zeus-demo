import{i as e,t}from"./react-DmwM7vua.js";import{n}from"./palantir-Ci2CGsJA.js";import{D as r,j as i,o as a,s as o}from"./palette-CnBNArY6.js";import{T as s,b as c,d as l,f as u,g as d,h as f,i as p,l as m,m as h,o as g,p as _,s as v,t as y,u as b,v as x,w as S,x as C}from"./MapTip-j3XFuhS9.js";var w=e(t(),1),T={get:e=>{try{return localStorage.getItem(e)}catch{return null}},set:(e,t)=>{try{localStorage.setItem(e,t)}catch{}}},E=`ares:code:bay`;function D({seed:e=d,fresh:t=!1,code0:n}={}){let[r,i]=(0,w.useState)(()=>t?n??`// Ares · Aftershock response bot (starter)
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
`:T.get(`ares:code:bay`)??`// Ares · Aftershock response bot (starter)
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
`),[s,y]=(0,w.useState)(e),[x,S]=(0,w.useState)(null),[C,D]=(0,w.useState)(null),[O,k]=(0,w.useState)(null),[A,j]=(0,w.useState)(!1),[M,N]=(0,w.useState)(()=>t?[]:v()),[P,F]=(0,w.useState)(null),I=_(!0),L=(0,w.useRef)(null),R=(0,w.useRef)(0),z=(0,w.useRef)(0),B=(0,w.useRef)(r),V=(0,w.useRef)(null),H=e=>{e!==B.current&&(B.current=e,z.current++,V.current=null,D(null),i(e))};(0,w.useEffect)(()=>{t||T.set(E,r)},[r,t]),(0,w.useEffect)(()=>()=>x?.dispose(),[x]);let U=(e,t=M)=>{let n=t.filter(t=>t.seed===e).map(e=>e.score);return n.length?Math.max(...n):null},W=(e=s,n={})=>new Promise(r=>{let i=n.withCode??B.current,a=!!n.preview,o=++R.current,s=n.withCode===void 0?++z.current:null;s!==null&&(V.current=null,D(null));let l=e===2018?0:h;a||j(!0);let d=(p,h)=>u(p,[e],!0,l=>{if(o!==R.current){r(null);return}if(l.kind===`error`){if(s!==null&&s===z.current&&(V.current=null,D(h??l.error)),j(!1),h===void 0){d(`function onTurn() {}`,l.error);return}r(null);return}if(l.kind!==`island`||!l.full)return;let u=new c(l.full.res,n.label??m(e),l.saved,l.full.savedAt,l.full.log,l.full.answers,l.full.error);if(s!==null&&s===z.current&&(V.current=h===void 0&&l.error?u:null,D(h??l.error??null)),Object.assign(u,{parts:l.parts}),u.onShake=e=>L.current?.(e),u.speed=n.speed??1,u.preview=a||h!==void 0,u.preview&&(u.playing=!1),!u.preview&&n.keep===!1)j(!1);else if(!u.preview){let n=U(e);k({seed:e,score:l.saved,parts:l.parts,summary:l.summary,code:i,at:Date.now(),prevBest:n}),(f.includes(e)||e===2018)&&N(n=>{let r=[...n,{seed:e,score:l.saved,parts:l.parts,at:Date.now(),code:g(i)}];return t||b(r),r}),j(!1)}S(u),r(h===void 0?u:null)},l);d(i)});return(0,w.useEffect)(()=>{W(s,{preview:!0})},[]),{code:r,setCode:H,quake:s,setQuake:e=>(y(e),k(null),j(!1),W(e,{preview:!0})),player:x,err:C,errorPlayer:V.current,result:O,running:A,run:W,tests:M,best:U,bench:I,entry:P,submit:()=>{let e=B.current,t=++z.current;V.current=null,D(null);let n=[];F({rows:n,busy:!0,avg:null}),u(e,f,!1,r=>{if(r.kind===`island`)n.push({seed:r.seed,saved:r.saved,parts:r.parts,summary:r.summary}),F({rows:[...n],busy:!0,avg:null});else if(r.kind===`error`){t===z.current&&D(r.error);let e={rows:[],busy:!1,avg:null,error:r.error};F(e)}else{let t=n.length?n.reduce((e,t)=>e+t.saved,0)/n.length:null;t!=null&&o(t),p(e,`Entered`,t??void 0),F({rows:[...n],busy:!1,avg:t})}},l(!0))},onShake:L,entered:a()}}var O=n();function k({g:e,tone:t,inspect:n=!0,pop:a=!1,hold:o=!1,className:s=``,cam:c,children:l}){let u=(0,w.useRef)(null),d=c??u,f=(0,w.useRef)(null);(0,w.useEffect)(()=>{e.onShake.current=e=>d.current?.shake(e)},[e,d]);let p=e.player;return(0,O.jsxs)(`div`,{ref:f,className:`a2-map ${s}`,"data-held":o?``:void 0,"aria-hidden":o||void 0,style:t?{"--a2-tone":t}:void 0,children:[p?(0,O.jsxs)(S,{src:p.src,camApi:d,hold:o,children:[(0,O.jsx)(r,{}),(0,O.jsx)(C,{}),(0,O.jsx)(i,{})]},p.src.current.sc.seed+p.label):(0,O.jsx)(`div`,{className:`a2-map-wait`,children:`Loading the Bay…`}),p&&n&&(a?(0,O.jsx)(x,{player:p,pop:!0}):(0,O.jsx)(`div`,{className:`a2-inspect`,children:(0,O.jsx)(x,{player:p})})),(0,O.jsx)(y,{}),l,(0,O.jsx)(N,{box:f})]})}var A=`.vw-mode-bar, .vw-mode-menu, .wx-layers-pop, .wx-bay, .wx-tl, .wx-sheet, .ic.is-pop, .a2-inspect .ic, .tu-card`,j=(e,t,n=4)=>e.left<t.right+n&&e.right>t.left-n&&e.top<t.bottom+n&&e.bottom>t.top-n,M=e=>e.width>0&&e.height>0;function N({box:e}){let t=(0,w.useRef)(null);return(0,w.useEffect)(()=>{let n=0,r=0,i=a=>{if(n=requestAnimationFrame(i),a-r<110)return;r=a;let o=e.current;if(!o||o.dataset.held!==void 0)return;let c=o.getBoundingClientRect(),l=[...document.querySelectorAll(A)].map(e=>e.getBoundingClientRect()).filter(e=>M(e)&&j(e,c,0)),u=o.querySelector(`.ic.is-pop.ex-dc`),d=[...o.querySelectorAll(`.ar-chip`)],f=[],p=e=>{let t=e.querySelector(`.ar-chip-n`)?.textContent??``,n=parseFloat(t);return Number.isFinite(n)?n*(/k$/i.test(t.trim())?1e3:1):-1},m=e=>{let t=e.getBoundingClientRect(),n=Number(e.dataset.bwDy??0);return new DOMRect(t.left,t.top-n,t.width,t.height)},h=d.map(e=>({el:e,r:m(e),sel:e.classList.contains(`is-sel`),n:p(e)})).filter(e=>M(e.r)).sort((e,t)=>Number(t.sel)-Number(e.sel)||t.n-e.n),g=e=>e.left<c.left+2||e.right>c.right-2||e.top<c.top+2||e.bottom>c.bottom-2||l.some(t=>j(e,t,2))||f.some(t=>j(e,t,1));for(let{el:e,r:t,sel:n}of h){let r=0;if(!n&&g(t)){let e=f.find(e=>j(t,e,1));r=(e?[e.bottom+3-t.top,e.top-3-t.bottom].filter(e=>Math.abs(e)<=16).sort((e,t)=>Math.abs(e)-Math.abs(t)):[]).find(e=>!g(new DOMRect(t.left,t.top+e,t.width,t.height)))??NaN}let i=Number.isNaN(r);e.classList.toggle(`bw-hide`,i);let a=i?0:Math.round(r);Number(e.dataset.bwDy??0)!==a&&(e.dataset.bwDy=String(a),e.style.position=`relative`,e.style.top=a?`${a}px`:``),i||f.push(new DOMRect(t.left,t.top+a,t.width,t.height))}if(u){let e=u.getBoundingClientRect();for(let t of o.querySelectorAll(`.ar-chip.is-sel`))j(t.getBoundingClientRect(),e,0)&&t.classList.add(`bw-hide`)}for(let e of o.querySelectorAll(`.ar-pop:not([data-ux])`)){let t=e.parentElement?.getBoundingClientRect(),n=e.parentElement?.querySelector(`.ar-chip`),r=e.offsetWidth,i=e.offsetHeight;if(!t||!n||!r||!i)continue;let a=n.getBoundingClientRect(),o=a.left+a.width/2-r/2,s=new DOMRect(o,t.bottom-46-i-20,r,i+28),u=new DOMRect(o,a.bottom+4,r,i+16),d=e=>e.top>c.top+2&&e.bottom<c.bottom-2&&e.left>c.left+2&&e.right<c.right-2&&!l.some(t=>j(e,t,2))&&!f.some(t=>j(e,t,2));d(s)?e.dataset.ux=`ok`:d(u)?(e.classList.add(`ux-pop-below`),e.style.top=`${Math.round(a.bottom+10-t.top)}px`,e.dataset.ux=`below`):(e.classList.add(`ux-pop-off`),e.dataset.ux=`off`)}let _=[...o.querySelectorAll(`.ar-pop:not(.ux-pop-off)`)].map(e=>e.getBoundingClientRect()).filter(M);for(let e of o.querySelectorAll(`.ar-unit, .ar-hosp`)){let t=e.getBoundingClientRect();M(t)&&e.classList.toggle(`bw-under`,!e.classList.contains(`is-sel`)&&(f.some(e=>j(t,e,1))||_.some(e=>j(t,e,1))))}for(let e of o.querySelectorAll(`.ar-place`)){let t=e.getBoundingClientRect();M(t)&&e.classList.toggle(`bw-hide`,l.some(e=>j(t,e,2))||f.some(e=>j(t,e,2)))}let v=o.querySelector(`canvas`);s.canvas=v?v.getBoundingClientRect():null,s.boxes=[...l,...f];let y=t.current,b=u?o.querySelector(`.ar-chip.is-sel`):null;if(!y)return;if(!u||!b||innerWidth<=720){y.style.display=`none`;return}let x=u.getBoundingClientRect(),S=b.getBoundingClientRect();if(l.some(e=>e!==x&&(e.left!==x.left||e.top!==x.top)&&j(S,e,-2))){y.style.display=`none`;return}let C=x.left>=S.right,w=x.right<=S.left;if(!C&&!w){y.style.display=`none`;return}let T=(C?x.left:x.right)-c.left,E=(C?S.right:S.left)-c.left,D=Math.max(x.top+18,Math.min(x.bottom-18,S.top+S.height/2))-c.top,O=S.top+S.height/2-c.top,[k,N]=[y.querySelector(`line`),y.querySelector(`circle`)];k.setAttribute(`x1`,String(T)),k.setAttribute(`y1`,String(D)),k.setAttribute(`x2`,String(E)),k.setAttribute(`y2`,String(O)),N.setAttribute(`cx`,String(E)),N.setAttribute(`cy`,String(O)),y.style.display=``};return n=requestAnimationFrame(i),()=>{cancelAnimationFrame(n),s.canvas=null,s.boxes=[]}},[e]),(0,O.jsxs)(`svg`,{ref:t,className:`bw-lead`,"aria-hidden":!0,style:{display:`none`},children:[(0,O.jsx)(`line`,{}),(0,O.jsx)(`circle`,{r:`2.5`})]})}function P(e){return(0,w.useSyncExternalStore)(e?e.subscribe:F,()=>e?e.v:0),e}var F=()=>()=>{};export{D as i,P as n,E as r,k as t};