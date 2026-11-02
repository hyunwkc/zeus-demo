const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./webgl-DV28SLMn.js","./expression-C4x9yiMU.js","./array-utils-flat-BL8Cekj1.js","./get-attribute-from-layouts-Dd2gixpo.js"])))=>i.map(i=>d[i]);
import{a as e,c as t,l as n,n as r,r as i,s as a,t as o}from"./palantir-BJCyMQAe.js";import{a as s,c,d as l,f as u,i as d,l as f,n as p,o as m,p as h,r as g,s as _,t as v,u as y}from"./data-BWJtKsC3.js";import{C as b,S as x,_ as S,a as C,b as w,c as T,d as E,f as D,h as O,l as k,o as A,p as j,t as M,u as N,v as P,w as ee,x as te,y as ne}from"./array-utils-flat-BL8Cekj1.js";import{C as re,D as ie,E as ae,S as oe,T as se,_ as ce,a as F,b as le,c as ue,d as de,f as fe,g as pe,h as me,i as he,l as ge,m as _e,n as ve,o as ye,p as be,r as xe,s as Se,t as Ce,u as we,w as Te,x as Ee,y as De}from"./expression-C4x9yiMU.js";import{a as Oe,c as ke,d as Ae,f as je,i as Me,l as I,n as Ne,o as Pe,r as Fe,s as Ie,t as Le,u as Re}from"./get-attribute-from-layouts-Dd2gixpo.js";var L=n(e(),1),ze=n(i(),1),Be={truck:6,van:2,heli:3,boat:15},Ve={truck:14,van:10,heli:2,boat:2},He={A:80,B:60,C:50,D:40,T:22},Ue={water:60,rations:50,tents:90,fuel:20};function We(e){let t=4+6*e;return{day:1+Math.floor(t/24),hour:t%24,night:t%24==22||t%24==4,snow:e>=13&&e<=17}}function Ge(e){try{let t=Function(`"use strict";\n${e}\n;return typeof onTurn === "function" ? onTurn : null`)();return t?{bot:t}:{error:`No onTurn function found.`}}catch(e){return{error:e.message}}}function Ke(e){let t=l(e),n=u(e*104729+7),r=u(e*7919+13),i=Object.keys(t.roads),a={};for(let e of Object.values(t.roads))a[e.id]={...e};let o={};for(let e of Object.values(a))(o[e.a]??=[]).push(e.id),(o[e.b]??=[]).push(e.id);let s=e=>Object.values(t.nodes).find(t=>t.kind===`town`&&t.district===e).id,d={};for(let e of c){let n=t.districts[e];d[e]={trapped:n.trapped,injured:n.injured,displaced:n.displaced,water:0,rations:0,tents:0,camps:0,hospital:!1,disease:0,hunger:0,deaths:0,land:n.land,freed:0,treated:0}}let f=Array.from({length:18},(e,t)=>({id:`T${String(t+1).padStart(2,`0`)}`,at:`port`,role:`rescue`,moving:!1,used:!1,ready:!1,arrived:!1})),p={water:60,rations:50,tents:30,fuel:200,money:6e3},m={water:0,rations:0,tents:0,fuel:0},h=[],g=new Set,_=[],v=[],y={},b=0,x=0,S=0,C=(e,t,n={})=>{let r=c.includes(e)?s(e):e,i=c.includes(t)?s(t):t,l=n.vehicle??`truck`,u=new Set(n.avoid??[]),d={[r]:0},f={},p=new Set,m=[r];for(;m.length;){m.sort((e,t)=>d[e]-d[t]);let e=m.shift();if(!p.has(e)){if(p.add(e),e===i)break;for(let t of o[e]??[]){let r=a[t];if(u.has(t)||r.cond>=2||l===`van`&&(r.cond>=1||r.cls===`T`))continue;let i=r.a===e?r.b:r.a,o=r.km/(He[r.cls]*(r.cond===1?.4:1)),s=n.by===`km`?r.km:n.by===`safe`?o*(r.cond===1?8:1):o,c=d[e]+s;(d[i]===void 0||c<d[i])&&(d[i]=c,f[i]=t,m.push(i))}}}if(d[i]===void 0)return{ok:!1,roads:[],nodes:[],km:0,hours:0,damaged:0,chance:0,teamChance:0,fuel:0};let h=[],g=[i],_=i;for(;_!==r;){let e=f[_];h.unshift(e);let t=a[e];_=t.a===_?t.b:t.a,g.unshift(_)}let v=0,y=0,b=0;for(let e of h){let t=a[e];v+=t.km,y+=t.km/(He[t.cls]*(t.cond===1?.4:1)),t.cond===1&&b++}return{ok:!0,roads:h,nodes:g,km:+v.toFixed(1),hours:+y.toFixed(2),damaged:b,chance:+(.7**b).toFixed(3),teamChance:+(.85**b).toFixed(3),fuel:+(v*(l===`van`?.02:.04)).toFixed(1)}},w=-1,T={...Ve},E=[],D=(e,t)=>_.push({t:w,sev:e,msg:t}),O=e=>f.find(t=>t.id===e),k=(e,t)=>typeof t==`string`&&Object.prototype.hasOwnProperty.call(e,t),A=e=>{if(e==null)return{};if(typeof e!=`object`||Array.isArray(e))return`cargo must be an object like { water: 2, rations: 2 }`;let t={};for(let[n,r]of Object.entries(e)){if(n!==`water`&&n!==`rations`&&n!==`tents`)return`unknown cargo "${n}" (water, rations or tents)`;if(typeof r!=`number`||!Number.isFinite(r)||r<0)return`cargo ${n} must be a number ≥ 0`;t[n]=r}return t},j=e=>{for(let t of[`water`,`rations`,`tents`])if((e[t]??0)>p[t])return!1;for(let t of[`water`,`rations`,`tents`])p[t]-=e[t]??0;return!0},M=(e,t)=>{for(let n of[`water`,`rations`,`tents`])d[t][n]+=e[n]??0},N=e=>{for(let t of[`water`,`rations`,`tents`])p[t]+=e[t]??0},P={send(e,n,i,o){if(!k(d,n))return{sent:!1,reason:`unknown district ${String(n)}`};if(!k(Ve,e))return{sent:!1,reason:`unknown vehicle ${String(e)}`};let c=A(i);if(typeof c==`string`)return{sent:!1,reason:c};if(T[e]<=0)return{sent:!1,reason:`no ${e} left this turn`};if((c.water??0)+(c.rations??0)+(c.tents??0)>Be[e])return{sent:!1,reason:`${e} carries ${Be[e]} units`};let l=t.districts[n];if(e===`boat`||e===`heli`){if(e===`boat`&&!l.coastal)return{sent:!1,reason:`${l.name} has no harbour`};if(e===`heli`&&!l.landingZone)return{sent:!1,reason:`${l.name} has no landing zone`};let t=e===`boat`?4:8;return p.fuel<t?{sent:!1,reason:`not enough fuel`}:j(c)?(p.fuel-=t,T[e]--,M(c,n),x++,E.push({vehicle:e,to:n,nodes:[s(`port`),s(n)],ok:!0,failAt:-1,cargo:c,label:`${e} → ${l.name}`}),{sent:!0,arrived:!0}):{sent:!1,reason:`not enough stock at the depot`}}let u=Array.isArray(o)?o:o&&typeof o==`object`&&Array.isArray(o.roads)?o.roads:void 0,f=u?{ok:!0,roads:u}:C(`port`,n,{vehicle:e===`van`?`van`:`truck`});if(!f.ok||!f.roads.length)return{sent:!1,reason:`no open road to ${l.name}`};let m=[s(`port`)],g=0,_=0;for(let t of f.roads){if(!k(a,t))return{sent:!1,reason:`unknown road ${String(t)}`};let n=a[t],r=m[m.length-1];if(n.a!==r&&n.b!==r)return{sent:!1,reason:`route breaks at ${t}`};if(n.cond>=2||e===`van`&&(n.cond>=1||n.cls===`T`))return{sent:!1,reason:`${t} is closed to a ${e}`};m.push(n.a===r?n.b:n.a),g+=n.km,_+=n.km/(He[n.cls]*(n.cond===1?.4:1))}if(m[m.length-1]!==s(n))return{sent:!1,reason:`route doesn't end in ${l.name}`};if(_>6)return{sent:!1,reason:`too far for one turn (${_.toFixed(1)} h)`};let v=g*(e===`van`?.02:.04);if(p.fuel<v)return{sent:!1,reason:`not enough fuel`};if(!j(c))return{sent:!1,reason:`not enough stock at the depot`};p.fuel-=v,T[e]--,x++;let y=-1;for(let e=0;e<f.roads.length;e++)if(a[f.roads[e]].cond===1&&r()>.7){y=e;break}return y>=0?(N(c),h.push(e),S++,D(`warn`,`A ${e} to ${l.name} got stuck on ${a[f.roads[y]].ref} (${f.roads[y]}); cargo back at the depot.`)):M(c,n),E.push({vehicle:e,to:n,nodes:m,ok:y<0,failAt:y,cargo:c,label:`${e} → ${l.name}`}),{sent:!0,arrived:y<0,km:+g.toFixed(1),roads:f.roads}},move(e,n,i){let o=O(e);if(!o)return{moved:!1,reason:`unknown team ${String(e)}`};if(!k(d,n))return{moved:!1,reason:`unknown district ${String(n)}`};if(o.at===n)return{moved:!0};if(o.moving)return{moved:!1,reason:`${e} has already set off this turn`};if(o.used)return{moved:!1,reason:`${e} is busy on a job this turn`};if(i===`heli`)return T.heli<=0||p.fuel<8?{moved:!1,reason:`no helicopter or fuel`}:t.districts[n].landingZone?(T.heli--,p.fuel-=8,E.push({vehicle:`heli`,to:n,nodes:[s(o.at),s(n)],ok:!0,failAt:-1,cargo:{},label:`${e} by air`}),o.at=n,o.moving=!0,o.arrived=!0,o.ready=!0,{moved:!0}):{moved:!1,reason:`no landing zone`};let c=C(o.at,n,{vehicle:`truck`,by:`safe`});if(!c.ok)return{moved:!1,reason:`no open road to ${t.districts[n].name}`};if(c.hours>6)return{moved:!1,reason:`too far for one turn (${c.hours.toFixed(1)} h)`};if(p.fuel<c.fuel)return{moved:!1,reason:`not enough fuel`};p.fuel-=c.fuel;let l=-1;for(let e=0;e<c.roads.length;e++)if(a[c.roads[e]].cond===1&&r()>.85){l=e;break}return E.push({vehicle:`team`,to:n,nodes:c.nodes,ok:l<0,failAt:l,cargo:{},label:`${e} → ${t.districts[n].name}`}),o.moving=!0,o.ready=!0,l<0?(o.at=n,o.arrived=!0):D(`warn`,`${e} was held up on ${a[c.roads[l]].ref} and is back at the depot; it can go again next turn.`),{moved:l<0}},role(e,t){let n=O(e);return!n||![`rescue`,`medical`,`engineer`].includes(t)?{ok:!1,reason:`unknown team or role`}:n.used&&t!==n.role?{ok:!1,reason:`${e} is busy on a job this turn`}:(n.role=t,n.ready=!0,{ok:!0})},repair(e,n){let r=O(e),i=k(a,n)?a[n]:void 0;if(!r||!i)return{ok:!1,reason:`unknown team or road`};if(r.role!==`engineer`||r.used||r.moving)return{ok:!1,reason:`${e} is not a free engineer`};if(i.district!==r.at)return{ok:!1,reason:`${n} is not in ${t.districts[r.at].name}`};if(i.cond===0)return g.add(n),r.used=!0,{ok:!0,shored:!0};let o=i.bridge?300:150;return p.money<o||p.fuel<3?{ok:!1,reason:`not enough money or fuel`}:(p.money-=o,p.fuel-=3,b+=o,i.cond--,r.used=!0,{ok:!0,cond:i.cond})},build(e,n){if(!k(d,e)||n!==`hospital`&&n!==`camp`)return{ok:!1,reason:`unknown district or building`};let r=f.find(t=>t.at===e&&t.role===`engineer`&&!t.used&&!t.moving);if(!r)return{ok:!1,reason:`needs a free engineer in the district`};if(d[e].land<=0)return{ok:!1,reason:`no free land`};let i=n===`hospital`?600:400;return p.money<i||p.fuel<4?{ok:!1,reason:`not enough money or fuel`}:n===`hospital`&&d[e].hospital?{ok:!1,reason:`already has a field hospital`}:(p.money-=i,p.fuel-=4,b+=i,d[e].land--,r.used=!0,n===`hospital`?d[e].hospital=!0:d[e].camps++,D(`info`,`${n===`hospital`?`Field hospital`:`Camp`} built in ${t.districts[e].name}.`),{ok:!0})},buy(e,t){if(!k(Ue,e))return{ok:!1,reason:`unknown item ${String(e)}`};if(typeof t!=`number`||!Number.isFinite(t)||t<=0)return{ok:!1,reason:`qty must be a number > 0`};let n=Ue[e]*t;return p.money<n?{ok:!1,reason:`not enough money`}:(p.money-=n,b+=n,m[e]+=t,{ok:!0})},log(...e){_.filter(e=>e.t===w&&e.sev===`bot`).length>=200||D(`bot`,e.map(e=>typeof e==`string`?e:JSON.stringify(e)).join(` `).slice(0,500))}},ee=()=>{let e=We(w),n={};for(let e of c){let r=d[e],i=t.districts[e],a=r.tents*250+r.camps*2e3;n[e]={id:e,name:i.name,trapped:Math.round(r.trapped),injured:Math.round(r.injured),displaced:Math.round(r.displaced),unsheltered:Math.max(0,Math.round(r.displaced-a)),shelterCapacity:a,water:r.water,rations:r.rations,waterNeed:+(r.displaced/2e3).toFixed(2),rationNeed:+(r.displaced/2500).toFixed(2),disease:+r.disease.toFixed(2),hunger:+r.hunger.toFixed(2),hills:i.hills,coastal:i.coastal,landingZone:i.landingZone,freeLand:r.land,fieldHospital:r.hospital,camps:r.camps,teams:f.filter(t=>t.at===e).map(e=>e.id),node:s(e)}}return{turn:w,day:e.day,hour:e.hour,isNight:e.night,snow:e.snow,turnsLeft:28-w,forecast:{snow:{from:13,to:17},aftershocks:t.zones.map(e=>({id:e.id,x:e.x,y:e.y,r:e.r,turn:e.turn,chance:e.chance,near:e.near}))},districts:n,roads:Object.fromEntries(Object.values(a).map(e=>[e.id,{...e}])),nodes:Object.fromEntries(Object.entries(t.nodes).map(([e,t])=>[e,{...t}])),teams:f.map(e=>({id:e.id,at:e.at,role:e.role})),fleet:{...T},depot:{...p},path:(e,t,n)=>C(e,t,n),neighbors:e=>[...(c.includes(e)?o[s(e)]:k(o,e)?o[e]:void 0)??[]]}},te;return{island:t,roadIds:i,frames:v,log:_,memory:y,act:P,view:ee,path:C,begin:()=>{w++,te=void 0,T={...Ve};for(let e of h)T[e]--;h=[],E=[],g.clear();for(let e of f)e.moving=!1,e.used=!1,e.arrived=!1;for(let e of t.zones)if(e.fires&&e.turn===w){te={kind:`aftershock`,x:e.x,y:e.y,r:e.r,mag:e.mag,near:e.near};let r=0;for(let i of Object.values(a)){let a=t.nodes[i.a],o=t.nodes[i.b];Math.hypot((a.x+o.x)/2-e.x,(a.y+o.y)/2-e.y)<e.r&&n()<.42&&i.cond<3&&(i.cond++,r++)}let i=Math.round(e.mag*55);d[e.near].trapped+=i,d[e.near].injured+=Math.round(i*.6),d[e.near].displaced+=i*9,D(`crit`,`Magnitude ${e.mag} aftershock near ${t.districts[e.near].name}: ${r} road segments worse, ${i} newly trapped.`)}w===13&&D(`warn`,`Snowstorm: road decay doubles and cold deaths rise by 60% until Day 5.`)},end:()=>{let e=We(w);for(let e of c){let t=d[e],n=t=>!t.ready||t.at!==e?0:t.moving?t.arrived?.75:0:1,r=f.filter(e=>e.role===`rescue`).reduce((e,t)=>e+n(t),0),i=Math.min(t.trapped,r*12);t.trapped-=i,t.injured+=i*.4,t.displaced+=i*.6,t.freed+=i;let a=f.filter(e=>e.role===`medical`).reduce((e,t)=>e+n(t),0),o=t.hospital&&a>0&&p.fuel>=2;o&&(p.fuel-=2);let s=a*(o?35:20)+(e===`port`?30:0),c=Math.min(t.injured,s);t.injured-=c,t.displaced+=c,t.treated+=c}for(let n of[...c].sort((e,n)=>Number(t.districts[n].hills)-Number(t.districts[e].hills))){let r=d[n],i=t.districts[n],a=r.displaced/2e3,o=r.displaced/2500,s=Math.min(r.water,a),c=Math.min(r.rations,o);r.water-=s,r.rations-=c;let l=a>0?1-s/a:0,u=o>0?1-c/o:0;r.disease=Math.max(0,Math.min(3,r.disease+(l>.05?.32*l:-.25))),r.hunger=Math.max(0,Math.min(3,r.hunger+(u>.05?.22*u:-.25)));let f=6*w,m=f<24?.95:f<72?.9:.78,h=e.night&&i.hills?.03:0,g=r.trapped*(1-m+h);r.trapped-=r.trapped*(1-m+h);let _=r.injured*(i.hills?.05:.04);if(r.injured-=_,g+=_,e.night){let t=r.camps,n=r.camps*2;p.fuel>=n?p.fuel-=n:t=r.camps/2;let a=r.tents*250+t*2e3,o=Math.max(0,r.displaced-a)*(i.hills?.006:.0015)*(e.snow?1.6:1);r.displaced-=o,g+=o}if(r.disease>1){let e=r.displaced*.003*(r.disease-1);r.displaced-=e,g+=e;let t=r.displaced*.0015*(r.disease-1);r.displaced-=t,r.injured+=t}if(r.hunger>1){let e=r.displaced*.002*(r.hunger-1);r.displaced-=e,g+=e}r.deaths+=g}for(let t of Object.values(a)){let r=n();g.has(t.id)||t.cond>=3||r<t.risk*(e.snow?2:1)&&t.cond++}p.water+=18+m.water,p.rations+=14+m.rations,p.tents+=6+m.tents,p.fuel+=25+m.fuel,m.water=m.rations=m.tents=m.fuel=0;let r=new Uint8Array(i.length);i.forEach((e,t)=>{r[t]=a[e].cond});let o={};for(let e of c)o[e]={...d[e]};v.push({t:w,d:o,deaths:c.reduce((e,t)=>e+d[t].deaths,0),trips:E,cond:r,teams:f.map(e=>({...e})),money:p.money,fuel:p.fuel,event:te})},say:D,get t(){return w},get trips(){return E},get depot(){return p},get fleet(){return T},get teams(){return f},get state(){return d},roads:a,townNode:s,stats:()=>({spent:b,trips:x,failed:S}),get event(){return te},dev:{quake(e,r=6){let i=t.districts[e];te={kind:`aftershock`,x:i.x,y:i.y,r:120,mag:r,near:e};for(let e of Object.values(a)){let r=t.nodes[e.a],a=t.nodes[e.b];Math.hypot((r.x+a.x)/2-i.x,(r.y+a.y)/2-i.y)<120&&n()<.42&&e.cond<3&&e.cond++}let o=Math.round(r*55);d[e].trapped+=o,d[e].injured+=Math.round(o*.6),d[e].displaced+=o*9,D(`crit`,`Developer aftershock M${r} near ${i.name}: ${o} newly trapped.`)},setCond(e,t){a[e]&&(a[e].cond=Math.max(0,Math.min(3,t)))},repairAll(){for(let e of Object.values(a))e.cond=0},give(e,t){p[e]+=t}}}}function qe(e,t){let n=Ke(e),r;for(let e=0;e<28;e++){if(n.begin(),t&&!r)try{t(n.view(),n.act,n.memory)}catch(t){r=`Turn ${e}: ${t.message}`,n.say(`err`,r)}n.end()}let i=n.stats();return{island:n.island,frames:n.frames,log:n.log,deaths:n.frames[n.frames.length-1].deaths,error:r,roadIds:n.roadIds,spent:i.spent,trips:i.trips,failed:i.failed}}function Je(e,t){let n=qe(e,null),r=qe(e,t),i=r.frames.map((e,t)=>Math.max(0,n.frames[t].deaths-e.deaths)),a=r.roadIds.map((e,t)=>[r.island.roads[e],t]).filter(([e])=>e.cls===`A`||e.cls===`B`||e.cls===`C`),o=r.frames[r.frames.length-1].cond,s=a.reduce((e,[t,n])=>e+(o[n]<=1?t.km:0),0)/a.reduce((e,[t])=>e+t.km,0);return{res:r,base:n,saved:Math.round(n.deaths-r.deaths),possible:Math.round(n.deaths*.8),savedAt:i,roadsOpen:s}}var Ye=`// Aftershock · Round 2 · starter bot
// This is what you did by hand, written as code. onTurn runs once every 6 hours, 28 times in all.
// view = what you saw on the map. act = the buttons you pressed.

function onTurn(view, act, memory) {
  if (view.turn === 0) {
    // every team digs where the most people are trapped
    const worst = Object.values(view.districts)
      .sort((a, b) => b.trapped - a.trapped)
      .slice(0, 3)
    view.teams.forEach((t, i) => {
      act.role(t.id, 'rescue')
      act.move(t.id, worst[i % 3].id)
    })
  }

  // a truck of water and food to each district that is short
  for (const d of Object.values(view.districts)) {
    if (d.water < d.waterNeed && view.fleet.truck > 0) {
      act.send('truck', d.id, { water: 3, rations: 3 })
    }
  }
}
`,Xe=`// Does nothing: the baseline every score is measured against.
function onTurn(view, act, memory) {}
`,Ze=`// Reference bot: a plan, not a script. It reads the island each turn, so it works on islands it has never seen.

function onTurn(view, act, memory) {
  const D = Object.values(view.districts)
  const hrs = view.turn * 6

  // 1 · roles by the clock: dig while people can still be found alive, then treat
  const rescuers = hrs < 54 ? 12 : hrs < 84 ? 6 : 0
  const engineers = 3
  view.teams.forEach((t, i) => {
    act.role(t.id, i < engineers ? 'engineer' : i < engineers + rescuers ? 'rescue' : 'medical')
  })

  // 2 · send each team where its role is needed most, by the safest road (helicopter for the hills)
  const need = { rescue: (d) => d.trapped, medical: (d) => d.injured }
  for (const role of ['rescue', 'medical']) {
    const pool = view.teams.filter((t, i) => (role === 'rescue' ? i >= engineers && i < engineers + rescuers : i >= engineers + rescuers))
    const targets = D.filter((d) => need[role](d) > 15).sort((a, b) => need[role](b) - need[role](a))
    if (!targets.length) continue
    const total = targets.reduce((s, d) => s + need[role](d), 0)
    let k = 0
    for (const d of targets) {
      const n = Math.max(1, Math.round((need[role](d) / total) * pool.length))
      for (let j = 0; j < n && k < pool.length; j++, k++) {
        const t = pool[k]
        if (t.at === d.id) continue
        const p = view.path(t.at, d.id, { by: 'safe' })
        if (!p.ok || p.damaged > 1) act.move(t.id, d.id, d.landingZone && view.fleet.heli > 0 ? 'heli' : undefined)
        else act.move(t.id, d.id)
      }
    }
  }

  // 3 · engineers: a field hospital where the injured are, then keep the road to the hills open
  const eng = view.teams.slice(0, engineers)
  if (!memory.hospital) {
    const worst = D.filter((d) => d.freeLand > 0 && d.id !== 'port').sort((a, b) => b.injured - a.injured)[0]
    if (worst) {
      if (eng[0].at !== worst.id) act.move(eng[0].id, worst.id)
      else if (act.build(worst.id, 'hospital').ok) memory.hospital = worst.id
    }
  }
  for (const e of eng.slice(1)) {
    const hill = D.filter((d) => d.hills).sort((a, b) => b.unsheltered - a.unsheltered)[0]
    const p = view.path('port', hill.id, { by: 'km' })
    const bad = p.roads.map((id) => view.roads[id]).find((r) => r.cond >= 1)
    if (bad && bad.district !== e.at) act.move(e.id, bad.district)
    else if (bad) act.repair(e.id, bad.id)
  }

  // 4 · shelter before the cold: tents to the hills first, camps when the snow is forecast
  if (view.turn >= 8 && view.turn <= 11 && view.depot.money > 1500) act.buy('tents', 6)
  for (const d of D.sort((a, b) => (b.hills - a.hills) || (b.unsheltered - a.unsheltered))) {
    if (d.unsheltered < 400 || view.depot.tents < 3) continue
    const v = view.fleet.truck > 0 ? 'truck' : null
    if (!v) break
    const p = view.path('port', d.id, { by: 'safe' })
    if (p.ok) act.send(v, d.id, { tents: Math.min(6, view.depot.tents) }, p)
  }

  // 5 · water and food by the safest road; boats for the coast
  for (const d of D.sort((a, b) => (b.waterNeed - b.water) - (a.waterNeed - a.water))) {
    const short = Math.ceil(d.waterNeed * 2 - d.water)
    if (short <= 0) continue
    if (d.coastal && view.fleet.boat > 0 && view.depot.water >= 8) { act.send('boat', d.id, { water: 8, rations: Math.min(7, view.depot.rations) }); continue }
    const p = view.path('port', d.id, { by: 'safe' })
    if (p.ok && view.fleet.truck > 0 && view.depot.water >= 3) act.send('truck', d.id, { water: 3, rations: Math.min(3, view.depot.rations) }, p)
  }
  if (view.depot.water < 10 && view.depot.money > 1200) act.buy('water', 4)
}
`,R=r(),Qe=(e,t)=>getComputedStyle(e).getPropertyValue(t).trim(),$e=new WeakMap;function et(e){let t=$e.get(e);if(t)return t;let n=e.coast.map(e=>e[0]),r=e.coast.map(e=>e[1]),i=[Math.min(...n)-10,Math.min(...r)-10,Math.max(...n)+10,Math.max(...r)+10],a=Math.ceil((i[2]-i[0])/9)+1,o=Math.ceil((i[3]-i[1])/9)+1,s=new Float32Array(a*o);for(let t=0;t<o;t++)for(let n=0;n<a;n++)s[t*a+n]=f(e,i[0]+n*9,i[1]+t*9);let c=[.08,.16,.24,.32,.4,.48,.56,.64,.72,.8,.88].map(e=>{let t=[];for(let n=0;n<o-1;n++)for(let r=0;r<a-1;r++){let o=[s[n*a+r],s[n*a+r+1],s[(n+1)*a+r+1],s[(n+1)*a+r]],c=i[0]+r*9,l=i[1]+n*9,u=[],d=(t,n,r,i,a,s)=>{if(o[t]<e==o[n]<e)return;let c=(e-o[t])/(o[n]-o[t]);u.push(r+(a-r)*c,i+(s-i)*c)};d(0,1,c,l,c+9,l),d(1,2,c+9,l,c+9,l+9),d(2,3,c+9,l+9,c,l+9),d(3,0,c,l+9,c,l),u.length>=4&&t.push(u[0],u[1],u[2],u[3]),u.length===8&&t.push(u[4],u[5],u[6],u[7])}return t}),l=u(e.seed*31+5),d=[];for(let t of Object.values(e.nodes)){if(t.kind===`junction`)continue;let n=t.kind===`town`,r=n?Math.round(e.districts[t.district].pop/1400):10,i=n?26:9;for(let a=0;a<r;a++){let r=l()*Math.PI*2,a=i*Math.sqrt(-2*Math.log(l()+1e-9))*.6,o=t.x+Math.cos(r)*a,s=t.y+Math.sin(r)*a;y(e.coast,o,s)&&d.push(o,s,n&&a<i*.5?1.6:1.1)}}let p={bbox:i,contours:c,lights:d};return $e.set(e,p),p}function tt(e,t,n){let r=Math.min(2,window.devicePixelRatio||1),i=e.clientWidth,a=e.clientHeight;e.width=i*r,e.height=a*r;let o=e.getContext(`2d`);o.setTransform(r,0,0,r,0,0);let s=Math.min(i/940,a/680),c=(i-900*s)/2-55*s,l=(a-640*s)/2-40*s,u=Qe(e,`--g-ink-rgb`);o.beginPath(),t.coast.forEach(([e,t],n)=>n?o.lineTo(c+e*s,l+t*s):o.moveTo(c+e*s,l+t*s)),o.closePath(),o.fillStyle=n===null?`rgb(${u} / .06)`:`rgb(${u} / ${.12+.62*n})`,o.fill(),o.strokeStyle=`rgb(${u} / .3)`,o.lineWidth=1,o.stroke()}function nt(e,t){if(!e)throw Error(t||`loader assertion failed.`)}var rt={self:typeof self<`u`&&self,window:typeof window<`u`&&window,global:typeof global<`u`&&global,document:typeof document<`u`&&document};rt.self||rt.window||rt.global,rt.window||rt.self||rt.global,rt.global||rt.self||rt.window,rt.document;var it=!!(typeof process!=`object`||String(process)!==`[object process]`||process.browser),at=typeof process<`u`&&process.version&&/v([0-9]*)/.exec(process.version);at&&parseFloat(at[1]);function ot(e){return!e&&!x()?`Node`:b(e)?`Electron`:(e||ee.userAgent||``).indexOf(`Edge`)>-1?`Edge`:globalThis.chrome?`Chrome`:globalThis.safari?`Safari`:globalThis.mozInnerScreenX?`Firefox`:`Unknown`}var st=`v4.5.4`;function ct(){let e=new te({id:`loaders.gl`});return globalThis.loaders||={},globalThis.loaders.log=e,globalThis.loaders.version=st,globalThis.probe||={},globalThis.probe.loaders=e,e}var lt=ct(),ut=e=>typeof e==`boolean`,dt=e=>typeof e==`function`,ft=e=>typeof e==`object`&&!!e,pt=e=>ft(e)&&e.constructor==={}.constructor,mt=e=>typeof SharedArrayBuffer<`u`&&e instanceof SharedArrayBuffer,ht=e=>ft(e)&&typeof e.byteLength==`number`&&typeof e.slice==`function`,gt=e=>!!e&&dt(e[Symbol.iterator]),_t=e=>!!e&&dt(e[Symbol.asyncIterator]),vt=e=>typeof Response<`u`&&e instanceof Response||ft(e)&&dt(e.arrayBuffer)&&dt(e.text)&&dt(e.json),yt=e=>typeof Blob<`u`&&e instanceof Blob,bt=e=>typeof ReadableStream<`u`&&e instanceof ReadableStream||ft(e)&&dt(e.tee)&&dt(e.cancel)&&dt(e.getReader),xt=e=>ft(e)&&dt(e.read)&&dt(e.pipe)&&ut(e.readable),St=e=>bt(e)||xt(e);function Ct(e,t){return wt(e||{},t)}function wt(e,t,n=0){if(n>3)return t;let r={...e};for(let[e,i]of Object.entries(t))r[e]=i&&typeof i==`object`&&!Array.isArray(i)?wt(r[e]||{},t[e],n+1):t[e];return r}var Tt=`latest`;function Et(){return globalThis._loadersgl_?.version||(globalThis._loadersgl_=globalThis._loadersgl_||{},globalThis._loadersgl_.version=`4.5.4`),globalThis._loadersgl_.version}var Dt=Et();function Ot(e,t){if(!e)throw Error(t||`loaders.gl assertion failed.`)}var kt={self:typeof self<`u`&&self,window:typeof window<`u`&&window,global:typeof global<`u`&&global,document:typeof document<`u`&&document};kt.self||kt.window||kt.global,kt.window||kt.self||kt.global,kt.global||kt.self||kt.window,kt.document;var At=typeof process!=`object`||String(process)!==`[object process]`||process.browser,jt=typeof window<`u`&&window.orientation!==void 0,Mt=typeof process<`u`&&process.version&&/v([0-9]*)/.exec(process.version);Mt&&parseFloat(Mt[1]);var Nt=class{name;workerThread;isRunning=!0;result;_resolve=()=>{};_reject=()=>{};constructor(e,t){this.name=e,this.workerThread=t,this.result=new Promise((e,t)=>{this._resolve=e,this._reject=t})}postMessage(e,t){this.workerThread.postMessage({source:`loaders.gl`,type:e,payload:t})}done(e){Ot(this.isRunning),this.isRunning=!1,this._resolve(e)}error(e){Ot(this.isRunning),this.isRunning=!1,this._reject(e)}},Pt=class{terminate(){}},Ft=new Map;function It(e){Ot(e.source&&!e.url||!e.source&&e.url);let t=Ft.get(e.source||e.url);return t||(e.url&&(t=Lt(e.url),Ft.set(e.url,t)),e.source&&(t=Rt(e.source),Ft.set(e.source,t))),Ot(t),t}function Lt(e){return e.startsWith(`http`)?Rt(zt(e)):e}function Rt(e){let t=new Blob([e],{type:`application/javascript`});return URL.createObjectURL(t)}function zt(e){return`\
try {
  importScripts('${e}');
} catch (error) {
  console.error(error);
  throw error;
}`}function Bt(e,t=!0,n){let r=n||new Set;if(e){if(Vt(e))r.add(e);else if(Vt(e.buffer))r.add(e.buffer);else if(!ArrayBuffer.isView(e)&&t&&typeof e==`object`)for(let n in e)Bt(e[n],t,r)}return n===void 0?Array.from(r):[]}function Vt(e){return e?e instanceof ArrayBuffer||typeof MessagePort<`u`&&e instanceof MessagePort||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas:!1}var Ht=()=>{},Ut=class{name;source;url;terminated=!1;worker;onMessage;onError;_loadableURL=``;static isSupported(){return typeof Worker<`u`&&At||Pt!==void 0&&!At}constructor(e){let{name:t,source:n,url:r}=e;Ot(n||r),this.name=t,this.source=n,this.url=r,this.onMessage=Ht,this.onError=e=>console.log(e),this.worker=At?this._createBrowserWorker():this._createNodeWorker()}destroy(){this.onMessage=Ht,this.onError=Ht,this.worker.terminate(),this.terminated=!0}get isRunning(){return!!this.onMessage}postMessage(e,t){t||=Bt(e),this.worker.postMessage(e,t)}_getErrorFromErrorEvent(e){let t=`Failed to load `;return t+=`worker ${this.name} from ${this.url}. `,e.message&&(t+=`${e.message} in `),e.lineno&&(t+=`:${e.lineno}:${e.colno}`),Error(t)}_createBrowserWorker(){this._loadableURL=It({source:this.source,url:this.url});let e=new Worker(this._loadableURL,{name:this.name});return e.onmessage=e=>{e.data?this.onMessage(e.data):this.onError(Error(`No data received`))},e.onerror=e=>{this.onError(this._getErrorFromErrorEvent(e)),this.terminated=!0},e.onmessageerror=e=>console.error(e),e}_createNodeWorker(){let e;if(this.url)e=new Pt(this.url.includes(`:/`)||this.url.startsWith(`/`)?this.url:`./${this.url}`,{eval:!1,type:this.url.endsWith(`.ts`)||this.url.endsWith(`.mjs`)?`module`:`commonjs`});else if(this.source)e=new Pt(this.source,{eval:!0});else throw Error(`no worker`);return e.on(`message`,e=>{this.onMessage(e)}),e.on(`error`,e=>{this.onError(e)}),e.on(`exit`,e=>{}),e}},Wt=class{name=`unnamed`;source;url;maxConcurrency=1;maxMobileConcurrency=1;onDebug=()=>{};reuseWorkers=!0;props={};jobQueue=[];idleQueue=[];count=0;isDestroyed=!1;static isSupported(){return Ut.isSupported()}constructor(e){this.source=e.source,this.url=e.url,this.setProps(e)}destroy(){this.idleQueue.forEach(e=>e.destroy()),this.isDestroyed=!0}setProps(e){this.props={...this.props,...e},e.name!==void 0&&(this.name=e.name),e.maxConcurrency!==void 0&&(this.maxConcurrency=e.maxConcurrency),e.maxMobileConcurrency!==void 0&&(this.maxMobileConcurrency=e.maxMobileConcurrency),e.reuseWorkers!==void 0&&(this.reuseWorkers=e.reuseWorkers),e.onDebug!==void 0&&(this.onDebug=e.onDebug)}async startJob(e,t=(e,t,n)=>e.done(n),n=(e,t)=>e.error(t)){let r=new Promise(r=>(this.jobQueue.push({name:e,onMessage:t,onError:n,onStart:r}),this));return this._startQueuedJob(),await r}async _startQueuedJob(){if(!this.jobQueue.length)return;let e=this._getAvailableWorker();if(!e)return;let t=this.jobQueue.shift();if(t){this.onDebug({message:`Starting job`,name:t.name,workerThread:e,backlog:this.jobQueue.length});let n=new Nt(t.name,e);e.onMessage=e=>t.onMessage(n,e.type,e.payload),e.onError=e=>t.onError(n,e),t.onStart(n);try{await n.result}catch(e){console.error(`Worker exception: ${e}`)}finally{this.returnWorkerToQueue(e)}}}returnWorkerToQueue(e){!At||this.isDestroyed||!this.reuseWorkers||this.count>this._getMaxConcurrency()?(e.destroy(),this.count--):this.idleQueue.push(e),this.isDestroyed||this._startQueuedJob()}_getAvailableWorker(){return this.idleQueue.length>0?this.idleQueue.shift()||null:this.count<this._getMaxConcurrency()?(this.count++,new Ut({name:`${this.name.toLowerCase()} (#${this.count} of ${this.maxConcurrency})`,source:this.source,url:this.url})):null}_getMaxConcurrency(){return jt?this.maxMobileConcurrency:this.maxConcurrency}},Gt={maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:!0,onDebug:()=>{}},Kt=class e{props;workerPools=new Map;static _workerFarm;static isSupported(){return Ut.isSupported()}static getWorkerFarm(t={}){return e._workerFarm=e._workerFarm||new e({}),e._workerFarm.setProps(t),e._workerFarm}constructor(e){this.props={...Gt},this.setProps(e),this.workerPools=new Map}destroy(){for(let e of this.workerPools.values())e.destroy();this.workerPools=new Map}setProps(e){this.props={...this.props,...e};for(let e of this.workerPools.values())e.setProps(this._getWorkerPoolProps())}getWorkerPool(e){let{name:t,source:n,url:r}=e,i=this.workerPools.get(t);return i||(i=new Wt({name:t,source:n,url:r}),i.setProps(this._getWorkerPoolProps()),this.workerPools.set(t,i)),i}_getWorkerPoolProps(){return{maxConcurrency:this.props.maxConcurrency,maxMobileConcurrency:this.props.maxMobileConcurrency,reuseWorkers:this.props.reuseWorkers,onDebug:this.props.onDebug}}};function qt(e,t={}){let n=t[e.id]||{},r=At?e.workerFile||`${e.id}-worker.js`:`${e.id}-worker-node.js`,i=n.workerUrl;if(!i&&e.id===`compression`&&(i=t.workerUrl),(t._workerType||t?.core?._workerType)===`test`&&(i=At?`modules/${e.module}/dist/${r}`:`modules/${e.module}/src/workers/${e.id}-worker-node.ts`),!i){let t=e.version;t===`latest`&&(t=Tt);let n=t?`@${t}`:``;i=`https://unpkg.com/@loaders.gl/${e.module}${n}/dist/${r}`}return Ot(i),i}function Jt(e,t=Dt){Ot(e,`no worker provided`);let n=e.version;return!(!t||!n)}function Yt(e,t){if(!Kt.isSupported())return!1;let n=t?._nodeWorkers??t?.core?._nodeWorkers;if(!At&&!n)return!1;let r=t?.worker??t?.core?.worker;return!!(e.worker&&r)}async function Xt(e,t,n,r,i){let a=e.id,o=qt(e,n),s=Kt.getWorkerFarm(n?.core).getWorkerPool({name:a,url:o});n=JSON.parse(JSON.stringify(n||{})),n._workerLoaderId=e.id,r=JSON.parse(JSON.stringify(r||{}));let c=await s.startJob(`process-on-worker`,Zt.bind(null,i));return c.postMessage(`process`,{input:t,options:n,context:r}),await(await c.result).result}async function Zt(e,t,n,r){switch(n){case`done`:t.done(r);break;case`error`:t.error(Error(r.error));break;case`process`:let{id:i,input:a,options:o}=r;try{let n=await e(a,o);t.postMessage(`done`,{id:i,result:n})}catch(e){let n=e instanceof Error?e.message:`unknown error`;t.postMessage(`error`,{id:i,error:n})}break;default:console.warn(`parse-with-worker unknown message ${n}`)}}function Qt(e,t,n){if(n||=e.byteLength,e.byteLength<n||t.byteLength<n)return!1;let r=new Uint8Array(e),i=new Uint8Array(t);for(let e=0;e<r.length;++e)if(r[e]!==i[e])return!1;return!0}function $t(...e){return en(e)}function en(e){let t=e.map(e=>e instanceof ArrayBuffer?new Uint8Array(e):e),n=t.reduce((e,t)=>e+t.byteLength,0),r=new Uint8Array(n),i=0;for(let e of t)r.set(e,i),i+=e.byteLength;return r.buffer}async function tn(e){let t=[];for await(let n of e)t.push(nn(n));return $t(...t)}function nn(e){if(e instanceof ArrayBuffer)return e;if(ArrayBuffer.isView(e)){let{buffer:t,byteOffset:n,byteLength:r}=e;return rn(t,n,r)}return rn(e)}function rn(e,t=0,n=e.byteLength-t){let r=new Uint8Array(e,t,n),i=new Uint8Array(r.length);return i.set(r),i.buffer}function an(){let e;if(typeof window<`u`&&window.performance)e=window.performance.now();else if(typeof process<`u`&&process.hrtime){let t=process.hrtime();e=t[0]*1e3+t[1]/1e6}else e=Date.now();return e}var on=class{constructor(e,t){this.sampleSize=1,this.time=0,this.count=0,this.samples=0,this.lastTiming=0,this.lastSampleTime=0,this.lastSampleCount=0,this._count=0,this._time=0,this._samples=0,this._startTime=0,this._timerPending=!1,this.name=e,this.type=t,this.reset()}reset(){return this.time=0,this.count=0,this.samples=0,this.lastTiming=0,this.lastSampleTime=0,this.lastSampleCount=0,this._count=0,this._time=0,this._samples=0,this._startTime=0,this._timerPending=!1,this}setSampleSize(e){return this.sampleSize=e,this}incrementCount(){return this.addCount(1),this}decrementCount(){return this.subtractCount(1),this}addCount(e){return this._count+=e,this._samples++,this._checkSampling(),this}subtractCount(e){return this._count-=e,this._samples++,this._checkSampling(),this}addTime(e){return this._time+=e,this.lastTiming=e,this._samples++,this._checkSampling(),this}timeStart(){return this._startTime=an(),this._timerPending=!0,this}timeEnd(){return this._timerPending&&(this.addTime(an()-this._startTime),this._timerPending=!1,this._checkSampling()),this}getSampleAverageCount(){return this.sampleSize>0?this.lastSampleCount/this.sampleSize:0}getSampleAverageTime(){return this.sampleSize>0?this.lastSampleTime/this.sampleSize:0}getSampleHz(){return this.lastSampleTime>0?this.sampleSize/(this.lastSampleTime/1e3):0}getAverageCount(){return this.samples>0?this.count/this.samples:0}getAverageTime(){return this.samples>0?this.time/this.samples:0}getHz(){return this.time>0?this.samples/(this.time/1e3):0}_checkSampling(){this._samples===this.sampleSize&&(this.lastSampleTime=this._time,this.lastSampleCount=this._count,this.count+=this._count,this.time+=this._time,this.samples+=this._samples,this._time=0,this._count=0,this._samples=0)}},sn=class{constructor(e){this.stats={},this.id=e.id,this.stats={},this._initializeStats(e.stats),Object.seal(this)}get(e,t=`count`){return this._getOrCreate({name:e,type:t})}get size(){return Object.keys(this.stats).length}reset(){for(let e of Object.values(this.stats))e.reset();return this}forEach(e){for(let t of Object.values(this.stats))e(t)}getTable(){let e={};return this.forEach(t=>{e[t.name]={time:t.time||0,count:t.count||0,average:t.getAverageTime()||0,hz:t.getHz()||0}}),e}_initializeStats(e=[]){e.forEach(e=>this._getOrCreate(e))}_getOrCreate(e){let{name:t,type:n}=e,r=this.stats[t];return r||(r=e instanceof on?e:new on(t,n),this.stats[t]=r),r}},cn=``,ln={};function un(e){for(let t in ln)if(e.startsWith(t)){let n=ln[t];e=e.replace(t,n)}return!e.startsWith(`http://`)&&!e.startsWith(`https://`)&&(e=`${cn}${e}`),e}function dn(e){return e}function fn(e){return e&&typeof e==`object`&&e.isBuffer}function pn(e){if(fn(e))return dn(e);if(e instanceof ArrayBuffer)return e;if(mt(e))return hn(e);if(ArrayBuffer.isView(e)){let t=e.buffer;return e.byteOffset===0&&e.byteLength===e.buffer.byteLength?t:t.slice(e.byteOffset,e.byteOffset+e.byteLength)}if(typeof e==`string`){let t=e;return new TextEncoder().encode(t).buffer}if(e&&typeof e==`object`&&e._toArrayBuffer)return e._toArrayBuffer();throw Error(`toArrayBuffer`)}function mn(e){if(e instanceof ArrayBuffer)return e;if(mt(e))return hn(e);let{buffer:t,byteOffset:n,byteLength:r}=e;return t instanceof ArrayBuffer&&n===0&&r===t.byteLength?t:hn(t,n,r)}function hn(e,t=0,n=e.byteLength-t){let r=new Uint8Array(e,t,n),i=new Uint8Array(r.length);return i.set(r),i.buffer}function gn(e){return ArrayBuffer.isView(e)?e:new Uint8Array(e)}function _n(e){let t=e?e.lastIndexOf(`/`):-1;return t>=0?e.substr(t+1):e}function vn(e){let t=e?e.lastIndexOf(`/`):-1;return t>=0?e.substr(0,t):``}var yn=class extends Error{constructor(e,t){super(e),this.reason=t.reason,this.url=t.url,this.response=t.response}reason;url;response},bn=/^data:([-\w.]+\/[-\w.+]+)(;|,)/,xn=/^([-\w.]+\/[-\w.+]+)/;function Sn(e,t){return e.toLowerCase()===t.toLowerCase()}function Cn(e){let t=xn.exec(e);return t?t[1]:e}function wn(e){let t=bn.exec(e);return t?t[1]:``}var Tn=/\?.*/;function En(e){let t=e.match(Tn);return t&&t[0]}function Dn(e){return e.replace(Tn,``)}function On(e){if(e.length<50)return e;let t=e.slice(e.length-15);return`${e.substr(0,32)}...${t}`}function kn(e){return vt(e)?e.url:yt(e)?(`name`in e?e.name:``)||``:typeof e==`string`?e:``}function An(e){if(vt(e)){let t=e.headers.get(`content-type`)||``,n=Dn(e.url);return Cn(t)||wn(n)}return yt(e)?e.type||``:typeof e==`string`?wn(e):``}function jn(e){return vt(e)?e.headers[`content-length`]||-1:yt(e)?e.size:typeof e==`string`?e.length:e instanceof ArrayBuffer||ArrayBuffer.isView(e)?e.byteLength:-1}async function Mn(e){if(vt(e))return e;let t={},n=jn(e);n>=0&&(t[`content-length`]=String(n));let r=kn(e),i=An(e);i&&(t[`content-type`]=i);let a=await Fn(e);a&&(t[`x-first-bytes`]=a),typeof e==`string`&&(e=new TextEncoder().encode(e));let o=new Response(e,{headers:t});return Object.defineProperty(o,"url",{value:r}),o}async function Nn(e){if(!e.ok)throw await Pn(e)}async function Pn(e){let t=On(e.url),n=`Failed to fetch resource (${e.status}) ${e.statusText}: ${t}`;n=n.length>100?`${n.slice(0,100)}...`:n;let r={reason:e.statusText,url:e.url,response:e};try{let t=e.headers.get(`Content-Type`);r.reason=!e.bodyUsed&&t?.includes(`application/json`)?await e.json():await e.text()}catch{}return new yn(n,r)}async function Fn(e){if(typeof e==`string`)return`data:,${e.slice(0,5)}`;if(e instanceof Blob){let t=e.slice(0,5);return await new Promise(e=>{let n=new FileReader;n.onload=t=>e(t?.target?.result),n.readAsDataURL(t)})}return e instanceof ArrayBuffer?`data:base64,${In(e.slice(0,5))}`:null}function In(e){let t=``,n=new Uint8Array(e);for(let e=0;e<n.byteLength;e++)t+=String.fromCharCode(n[e]);return btoa(t)}function Ln(e){return!Rn(e)&&!zn(e)}function Rn(e){return e.startsWith(`http:`)||e.startsWith(`https:`)}function zn(e){return e.startsWith(`data:`)}async function Bn(e,t){if(typeof e==`string`){let n=un(e);return Ln(n)&&globalThis.loaders?.fetchNode?globalThis.loaders?.fetchNode(n,t):await fetch(n,t)}return await Mn(e)}var Vn=new te({id:`loaders.gl`}),Hn=class{log(){return()=>{}}info(){return()=>{}}warn(){return()=>{}}error(){return()=>{}}},Un={core:{baseUrl:void 0,fetch:null,mimeType:void 0,fallbackMimeType:void 0,ignoreRegisteredLoaders:void 0,nothrow:!1,log:new class{console;constructor(){this.console=console}log(...e){return this.console.log.bind(this.console,...e)}info(...e){return this.console.info.bind(this.console,...e)}warn(...e){return this.console.warn.bind(this.console,...e)}error(...e){return this.console.error.bind(this.console,...e)}},useLocalLibraries:!1,CDN:`https://unpkg.com/@loaders.gl`,worker:!0,maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:it,_nodeWorkers:!1,_workerType:``,limit:0,_limitMB:0,batchSize:`auto`,batchDebounceMs:0,metadata:!1,transforms:[]}},Wn={baseUri:`core.baseUrl`,fetch:`core.fetch`,mimeType:`core.mimeType`,fallbackMimeType:`core.fallbackMimeType`,ignoreRegisteredLoaders:`core.ignoreRegisteredLoaders`,nothrow:`core.nothrow`,log:`core.log`,useLocalLibraries:`core.useLocalLibraries`,CDN:`core.CDN`,worker:`core.worker`,maxConcurrency:`core.maxConcurrency`,maxMobileConcurrency:`core.maxMobileConcurrency`,reuseWorkers:`core.reuseWorkers`,_nodeWorkers:`core.nodeWorkers`,_workerType:`core._workerType`,_worker:`core._workerType`,limit:`core.limit`,_limitMB:`core._limitMB`,batchSize:`core.batchSize`,batchDebounceMs:`core.batchDebounceMs`,metadata:`core.metadata`,transforms:`core.transforms`,throws:`nothrow`,dataType:`(no longer used)`,uri:`core.baseUrl`,method:`core.fetch.method`,headers:`core.fetch.headers`,body:`core.fetch.body`,mode:`core.fetch.mode`,credentials:`core.fetch.credentials`,cache:`core.fetch.cache`,redirect:`core.fetch.redirect`,referrer:`core.fetch.referrer`,referrerPolicy:`core.fetch.referrerPolicy`,integrity:`core.fetch.integrity`,keepalive:`core.fetch.keepalive`,signal:`core.fetch.signal`},Gn=[`baseUrl`,`fetch`,`mimeType`,`fallbackMimeType`,`ignoreRegisteredLoaders`,`nothrow`,`log`,`useLocalLibraries`,`CDN`,`worker`,`maxConcurrency`,`maxMobileConcurrency`,`reuseWorkers`,`_nodeWorkers`,`_workerType`,`limit`,`_limitMB`,`batchSize`,`batchDebounceMs`,`metadata`,`transforms`];function Kn(){globalThis.loaders=globalThis.loaders||{};let{loaders:e}=globalThis;return e._state||={},e._state}function qn(){let e=Kn();return e.globalOptions=e.globalOptions||{...Un,core:{...Un.core}},Yn(e.globalOptions)}function Jn(e,t,n,r){return n||=[],n=Array.isArray(n)?n:[n],Xn(e,n),Yn($n(t,e,r))}function Yn(e){let t=nr(e);rr(t);for(let e of Gn)t.core&&t.core[e]!==void 0&&delete t[e];return t.core&&t.core._workerType!==void 0&&delete t._worker,t}function Xn(e,t){Zn(e,null,Un,Wn,t);for(let n of t){let r=e&&e[n.id]||{},i=n.options&&n.options[n.id]||{},a=n.deprecatedOptions&&n.deprecatedOptions[n.id]||{};Zn(r,n.id,i,a,t)}}function Zn(e,t,n,r,i){let a=t||`Top level`,o=t?`${t}.`:``;for(let s in e){let c=!t&&ft(e[s]),l=s===`baseUri`&&!t,u=s===`workerUrl`&&t;if(!(s in n)&&!l&&!u){if(s in r)Vn.level>0&&Vn.warn(`${a} loader option \'${o}${s}\' no longer supported, use \'${r[s]}\'`)();else if(!c&&Vn.level>0){let e=Qn(s,i);Vn.warn(`${a} loader option \'${o}${s}\' not recognized. ${e}`)()}}}}function Qn(e,t){let n=e.toLowerCase(),r=``;for(let i of t)for(let t in i.options){if(e===t)return`Did you mean \'${i.id}.${t}\'?`;let a=t.toLowerCase();(n.startsWith(a)||a.startsWith(n))&&(r||=`Did you mean \'${i.id}.${t}\'?`)}return r}function $n(e,t,n){let r=e.options||{},i={...r};return r.core&&(i.core={...r.core}),rr(i),i.core?.log===null&&(i.core={...i.core,log:new Hn}),er(i,Yn(qn())),er(i,Yn(t)),tr(i,n),ir(i),i}function er(e,t){for(let n in t)if(n in t){let r=t[n];e[n]=pt(r)&&pt(e[n])?{...e[n],...t[n]}:t[n]}}function tr(e,t){t&&e.core?.baseUrl===void 0&&(e.core||={},e.core.baseUrl=vn(Dn(t)))}function nr(e){let t={...e};return e.core&&(t.core={...e.core}),t}function rr(e){e.baseUri!==void 0&&(e.core||={},e.core.baseUrl===void 0&&(e.core.baseUrl=e.baseUri));for(let t of Gn)if(e[t]!==void 0){let n=e.core=e.core||{};n[t]===void 0&&(n[t]=e[t])}let t=e._worker;t!==void 0&&(e.core||={},e.core._workerType===void 0&&(e.core._workerType=t))}function ir(e){let t=e.core;if(t)for(let n of Gn)t[n]!==void 0&&(e[n]=t[n])}function ar(e){return e?(Array.isArray(e)&&(e=e[0]),Array.isArray(e?.extensions)):!1}function or(e){nt(e,`null loader`),nt(ar(e),`invalid loader`);let t;return Array.isArray(e)&&(t=e[1],e=e[0],e={...e,options:{...e.options,...t}}),(e?.parseTextSync||e?.parseText)&&(e.text=!0),e.text||(e.binary=!0),e}var sr=()=>{let e=Kn();return e.loaderRegistry=e.loaderRegistry||[],e.loaderRegistry};function cr(e){let t=sr();e=Array.isArray(e)?e:[e];for(let n of e){let e=or(n);t.find(t=>e===t)||t.unshift(e)}}function lr(){return sr()}var ur=/\.([^.]+)$/;async function dr(e,t=[],n,r){if(!hr(e))return null;let i=Yn(n||{});if(i.core||={},e instanceof Response&&fr(e)){let n=pr(await e.clone().text(),t,{...i,core:{...i.core,nothrow:!0}},r);if(n)return n}let a=pr(e,t,{...i,core:{...i.core,nothrow:!0}},r);if(a)return a;if(yt(e)&&(e=await e.slice(0,10).arrayBuffer(),a=pr(e,t,i,r)),!a&&e instanceof Response&&fr(e)&&(a=pr(await e.clone().text(),t,i,r)),!a&&!i.core.nothrow)throw Error(gr(e));return a}function fr(e){let t=An(e);return!!(t&&(t.startsWith(`text/`)||t===`application/json`||t.endsWith(`+json`)))}function pr(e,t=[],n,r){if(!hr(e))return null;let i=Yn(n||{});if(i.core||={},t&&!Array.isArray(t))return or(t);let a=[];t&&(a=a.concat(t)),i.core.ignoreRegisteredLoaders||a.push(...lr()),_r(a);let o=mr(e,a,i,r);if(!o&&!i.core.nothrow)throw Error(gr(e));return o}function mr(e,t,n,r){let i=kn(e),a=An(e),o=Dn(i)||r?.url,s=null,c=``;return n?.core?.mimeType&&(s=br(t,n?.core?.mimeType),c=`match forced by supplied MIME type ${n?.core?.mimeType}`),s||=vr(t,o),c||=s?`matched url ${o}`:``,s||=br(t,a),c||=s?`matched MIME type ${a}`:``,s||=xr(t,e),c||=s?`matched initial data ${Tr(e)}`:``,n?.core?.fallbackMimeType&&(s||=br(t,n?.core?.fallbackMimeType),c||=s?`matched fallback MIME type ${a}`:``),c&&lt.log(1,`selectLoader selected ${s?.name}: ${c}.`),s}function hr(e){return!(e instanceof Response&&e.status===204)}function gr(e){let t=kn(e),n=An(e),r=`No valid loader found (`;r+=t?`${_n(t)}, `:`no url provided, `,r+=`MIME type: ${n?`"${n}"`:`not provided`}, `;let i=e?Tr(e):``;return r+=i?` first bytes: "${i}"`:`first bytes: not available`,r+=`)`,r}function _r(e){for(let t of e)or(t)}function vr(e,t){let n=t&&ur.exec(t),r=n&&n[1];return r?yr(e,r):null}function yr(e,t){t=t.toLowerCase();for(let n of e)for(let e of n.extensions)if(e.toLowerCase()===t)return n;return null}function br(e,t){for(let n of e)if(n.mimeTypes?.some(e=>Sn(t,e))||Sn(t,`application/x.${n.id}`))return n;return null}function xr(e,t){if(!t)return null;for(let n of e)if(typeof t==`string`){if(Sr(t,n))return n}else if(ArrayBuffer.isView(t)){if(Cr(t.buffer,t.byteOffset,n))return n}else if(t instanceof ArrayBuffer&&Cr(t,0,n))return n;return null}function Sr(e,t){return t.testText?t.testText(e):(Array.isArray(t.tests)?t.tests:[t.tests]).some(t=>e.startsWith(t))}function Cr(e,t,n){return(Array.isArray(n.tests)?n.tests:[n.tests]).some(r=>wr(e,t,n,r))}function wr(e,t,n,r){if(ht(r))return Qt(r,e,r.byteLength);switch(typeof r){case`function`:return r(mn(e));case`string`:return r===Er(e,t,r.length);default:return!1}}function Tr(e,t=5){return typeof e==`string`?e.slice(0,t):ArrayBuffer.isView(e)?Er(e.buffer,e.byteOffset,t):e instanceof ArrayBuffer?Er(e,0,t):``}function Er(e,t,n){if(e.byteLength<t+n)return``;let r=new DataView(e),i=``;for(let e=0;e<n;e++)i+=String.fromCharCode(r.getUint8(t+e));return i}var Dr=262144;function*Or(e,t){let n=t?.chunkSize||Dr,r=0,i=new TextEncoder;for(;r<e.length;){let t=Math.min(e.length-r,n),a=e.slice(r,r+t);r+=t,yield mn(i.encode(a))}}var kr=262144;function*Ar(e,t={}){let{chunkSize:n=kr}=t,r=0;for(;r<e.byteLength;){let t=Math.min(e.byteLength-r,n),i=new ArrayBuffer(t),a=new Uint8Array(e,r,t);new Uint8Array(i).set(a),r+=t,yield i}}var jr=1048576;async function*Mr(e,t){let n=t?.chunkSize||jr,r=0;for(;r<e.size;){let t=r+n,i=await e.slice(r,t).arrayBuffer();r=t,yield i}}function Nr(e,t){return it?Pr(e,t):Fr(e,t)}async function*Pr(e,t){let n=e.getReader(),r;try{for(;;){let e=r||n.read();t?._streamReadAhead&&(r=n.read());let{done:i,value:a}=await e;if(i)return;yield pn(a)}}catch{n.releaseLock()}}async function*Fr(e,t){for await(let t of e)yield pn(t)}function Ir(e,t){if(typeof e==`string`)return Or(e,t);if(e instanceof ArrayBuffer)return Ar(e,t);if(yt(e))return Mr(e,t);if(St(e))return Nr(e,t);if(vt(e)){let n=e.body;if(!n)throw Error(`Readable stream not available on Response`);return Nr(n,t)}throw Error(`makeIterator`)}var Lr=`Cannot convert supplied data type`;function Rr(e,t,n){if(t.text&&typeof e==`string`)return e;if(fn(e)&&(e=e.buffer),ht(e)){let n=gn(e);return t.text&&!t.binary?new TextDecoder(`utf8`).decode(n):pn(n)}throw Error(Lr)}async function zr(e,t,n){if(typeof e==`string`||ht(e))return Rr(e,t,n);if(yt(e)&&(e=await Mn(e)),vt(e))return await Nn(e),t.binary?await e.arrayBuffer():await e.text();if(St(e)&&(e=Ir(e,n)),gt(e)||_t(e))return tn(e);throw Error(Lr)}function Br(e,t){let n=qn(),r=e||n,i=r.fetch??r.core?.fetch;return typeof i==`function`?i:ft(i)?e=>Bn(e,i):t?.fetch?t?.fetch:Bn}function Vr(e,t,n){if(n)return n;let r={fetch:Br(t,e),...e};if(r.url){let e=Dn(r.url);r.baseUrl=e,r.queryString=En(r.url),r.filename=_n(e),r.baseUrl=vn(e)}return Array.isArray(r.loaders)||(r.loaders=null),r}function Hr(e,t){if(e&&!Array.isArray(e))return e;let n;if(e&&(n=Array.isArray(e)?e:[e]),t&&t.loaders){let e=Array.isArray(t.loaders)?t.loaders:[t.loaders];n=n?[...n,...e]:e}return n&&n.length?n:void 0}async function Ur(e,t,n,r){t&&!Array.isArray(t)&&!ar(t)&&(r=void 0,n=t,t=void 0),e=await e,n||={};let i=kn(e),a=Hr(t,r),o=await dr(e,a,n);if(!o)return null;let s=Jn(n,o,a,i);return r=Vr({url:i,_parse:Ur,loaders:a},s,r||null),await Wr(o,e,s,r)}async function Wr(e,t,n,r){if(Jt(e),n=Ct(e.options,n),vt(t)){let{ok:e,redirected:n,status:i,statusText:a,type:o,url:s}=t;r.response={headers:Object.fromEntries(t.headers.entries()),ok:e,redirected:n,status:i,statusText:a,type:o,url:s}}t=await zr(t,e,n);let i=e;if(i.parseTextSync&&typeof t==`string`)return i.parseTextSync(t,n,r);if(Yt(e,n))return await Xt(e,t,n,r,Ur);if(i.parseText&&typeof t==`string`)return await i.parseText(t,n,r);if(i.parse)return await i.parse(t,n,r);throw Ot(!i.parseSync),Error(`${e.id} loader - no parser found and worker is disabled`)}async function Gr(e,t,n,r){let i,a;!Array.isArray(t)&&!ar(t)?(i=[],a=t,r=void 0):(i=t,a=n);let o=Br(a),s=e;return typeof e==`string`&&(s=await o(e)),yt(e)&&(s=await o(e)),typeof e==`string`&&(Yn(a||{}).core?.baseUrl||(a={...a,core:{...a?.core,baseUrl:e}})),await Ur(s,i,a)}var Kr=`4.5.4`,qr=globalThis.loaders?.parseImageNode,Jr=typeof Image<`u`,Yr=typeof ImageBitmap<`u`,Xr=it?!0:!!qr;function Zr(e){switch(e){case`auto`:return Yr||Jr||Xr;case`imagebitmap`:return Yr;case`image`:return Jr;case`data`:return Xr;default:throw Error(`@loaders.gl/images: image ${e} not supported in this environment`)}}function Qr(){if(Yr)return`imagebitmap`;if(Jr)return`image`;if(Xr)return`data`;throw Error(`Install '@loaders.gl/polyfills' to parse images under Node.js`)}function $r(e){let t=ti(e);if(!t)throw Error(`Not an image`);return t}function ei(e){switch($r(e)){case`data`:return e;case`image`:case`imagebitmap`:let t=document.createElement(`canvas`),n=t.getContext(`2d`);if(!n)throw Error(`getImageData`);return t.width=e.width,t.height=e.height,n.drawImage(e,0,0),n.getImageData(0,0,e.width,e.height);default:throw Error(`getImageData`)}}function ti(e){return typeof ImageBitmap<`u`&&e instanceof ImageBitmap?`imagebitmap`:typeof Image<`u`&&e instanceof Image?`image`:e&&typeof e==`object`&&e.data&&e.width&&e.height?`data`:null}var ni=/^data:image\/svg\+xml/,ri=/\.svg((\?|#).*)?$/;function ii(e){return e&&(ni.test(e)||ri.test(e))}function ai(e,t){if(ii(t)){let t=new TextDecoder().decode(e);try{typeof unescape==`function`&&typeof encodeURIComponent==`function`&&(t=unescape(encodeURIComponent(t)))}catch(e){throw Error(e.message)}return`data:image/svg+xml;base64,${btoa(t)}`}return oi(e,t)}function oi(e,t){if(ii(t))throw Error(`SVG cannot be parsed directly to imagebitmap`);return new Blob([new Uint8Array(e)])}async function si(e,t,n){let r=ai(e,n),i=self.URL||self.webkitURL,a=typeof r!=`string`&&i.createObjectURL(r);try{return await ci(a||r,t)}finally{a&&i.revokeObjectURL(a)}}async function ci(e,t){let n=new Image;return n.src=e,t.image&&t.image.decode&&n.decode?(await n.decode(),n):await new Promise((e,t)=>{try{n.onload=()=>e(n),n.onerror=e=>{let n=e instanceof Error?e.message:`error`;t(Error(n))}}catch(e){t(e)}})}var li=!0;async function ui(e,t,n){let r;r=ii(n)?await si(e,t,n):oi(e,n);let i=t&&t.imagebitmap;return await di(r,i)}async function di(e,t=null){if((fi(t)||!li)&&(t=null),t)try{return await createImageBitmap(e,t)}catch(e){console.warn(e),li=!1}return await createImageBitmap(e)}function fi(e){if(!e)return!0;for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function pi(e){return!_i(e,`ftyp`,4)||!(e[8]&96)?null:mi(e)}function mi(e){switch(hi(e,8,12).replace(`\0`,` `).trim()){case`avif`:case`avis`:return{extension:`avif`,mimeType:`image/avif`};default:return null}}function hi(e,t,n){return String.fromCharCode(...e.slice(t,n))}function gi(e){return[...e].map(e=>e.charCodeAt(0))}function _i(e,t,n=0){let r=gi(t);for(let t=0;t<r.length;++t)if(r[t]!==e[t+n])return!1;return!0}var vi=!1,yi=!0;function bi(e){let t=Di(e);return Si(t)||Ti(t)||Ci(t)||wi(t)||xi(t)}function xi(e){let t=pi(new Uint8Array(e instanceof DataView?e.buffer:e));return t?{mimeType:t.mimeType,width:0,height:0}:null}function Si(e){let t=Di(e);return t.byteLength>=24&&t.getUint32(0,vi)===2303741511?{mimeType:`image/png`,width:t.getUint32(16,vi),height:t.getUint32(20,vi)}:null}function Ci(e){let t=Di(e);return t.byteLength>=10&&t.getUint32(0,vi)===1195984440?{mimeType:`image/gif`,width:t.getUint16(6,yi),height:t.getUint16(8,yi)}:null}function wi(e){let t=Di(e);return t.byteLength>=14&&t.getUint16(0,vi)===16973&&t.getUint32(2,yi)===t.byteLength?{mimeType:`image/bmp`,width:t.getUint32(18,yi),height:t.getUint32(22,yi)}:null}function Ti(e){let t=Di(e);if(!(t.byteLength>=3&&t.getUint16(0,vi)===65496&&t.getUint8(2)===255))return null;let{tableMarkers:n,sofMarkers:r}=Ei(),i=2;for(;i+9<t.byteLength;){let e=t.getUint16(i,vi);if(r.has(e))return{mimeType:`image/jpeg`,height:t.getUint16(i+5,vi),width:t.getUint16(i+7,vi)};if(!n.has(e))return null;i+=2,i+=t.getUint16(i,vi)}return null}function Ei(){let e=new Set([65499,65476,65484,65501,65534]);for(let t=65504;t<65520;++t)e.add(t);return{tableMarkers:e,sofMarkers:new Set([65472,65473,65474,65475,65477,65478,65479,65481,65482,65483,65485,65486,65487,65502])}}function Di(e){if(e instanceof DataView)return e;if(ArrayBuffer.isView(e))return new DataView(e.buffer);if(e instanceof ArrayBuffer)return new DataView(e);throw Error(`toDataView`)}async function Oi(e,t){let{mimeType:n}=bi(e)||{},r=globalThis.loaders?.parseImageNode;return nt(r),await r(e,n)}async function ki(e,t,n){t||={};let r=(t.image||{}).type||`auto`,{url:i}=n||{},a=Ai(r),o;switch(a){case`imagebitmap`:o=await ui(e,t,i);break;case`image`:o=await si(e,t,i);break;case`data`:o=await Oi(e,t);break;default:nt(!1)}return r===`data`&&(o=ei(o)),o}function Ai(e){switch(e){case`auto`:case`data`:return Qr();default:return Zr(e),e}}var ji={dataType:null,batchType:null,id:`image`,module:`images`,name:`Images`,version:Kr,mimeTypes:[`image/png`,`image/jpeg`,`image/gif`,`image/webp`,`image/avif`,`image/bmp`,`image/vnd.microsoft.icon`,`image/svg+xml`],extensions:[`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`ico`,`svg`,`avif`],parse:ki,tests:[e=>!!bi(new DataView(e))],options:{image:{type:`auto`,decode:!0}}},z=new te({id:`deck`}),Mi={};function Ni(e){Mi=e}function B(e,t,n,r){z.level>0&&Mi[e]&&Mi[e].call(null,t,n,r)}function Pi(e){let t=e[0],n=e[e.length-1];return t===`{`&&n===`}`||t===`[`&&n===`]`}var Fi={dataType:null,batchType:null,id:`JSON`,name:`JSON`,module:``,version:``,options:{},extensions:[`json`,`geojson`],mimeTypes:[`application/json`,`application/geo+json`],testText:Pi,parseTextSync:JSON.parse};function Ii(){let e=`9.4.1`,t=globalThis.deck&&globalThis.deck.VERSION;if(t&&t!==e)throw Error(`deck.gl - multiple versions detected: ${t} vs ${e}`);return t||(z.log(1,`deck.gl ${e}`)(),globalThis.deck={...globalThis.deck,VERSION:e,version:e,log:z,_registerLoggers:Ni},cr([Fi,[ji,{imagebitmap:{premultiplyAlpha:`none`}}]])),e}var Li=Ii(),Ri={id:null,powerPreference:`high-performance`,failIfMajorPerformanceCaveat:!1,featureLevel:void 0,optionalFeatures:[],xrCompatible:!1,createCanvasContext:void 0,webgl:{},onError:(e,t)=>{},onResize:(e,t)=>{let[n,r]=e.getDevicePixelSize();w.log(1,`${e} resized => ${n}x${r}px`)()},onPositionChange:(e,t)=>{let[n,r]=e.getPosition();w.log(1,`${e} repositioned => ${n},${r}`)()},onVisibilityChange:e=>w.log(1,`${e} Visibility changed ${e.isVisible}`)(),onDevicePixelRatioChange:(e,t)=>w.log(1,`${e} DPR changed ${t.oldRatio} => ${e.devicePixelRatio}`)(),debug:Bi(),debugGPUTime:!1,debugShaders:w.get(`debug-shaders`)||void 0,debugFramebuffers:!!w.get(`debug-framebuffers`),debugFactories:!!w.get(`debug-factories`),debugWebGL:!!w.get(`debug-webgl`),debugSpectorJS:void 0,debugSpectorJSUrl:void 0,_reuseDevices:!1,_cacheShaders:!0,_destroyShaders:!1,_cachePipelines:!0,_sharePipelines:!0,_destroyPipelines:!1,_initializeFeatures:!0,_disabledFeatures:{"compilation-status-async-webgl":!0},_handle:void 0};function zi(e,t){return e==null?t!==void 0&&t!==`production`:!!e}function Bi(){return zi(w.get(`debug`),Vi())}function Vi(){let e=globalThis.process;if(e?.env)return e.env.NODE_ENV}var Hi=`GPU Time and Memory`,Ui=[`Adapter`,`GPU`,`GPU Type`,`GPU Backend`,`Frame Rate`,`CPU Time`,`GPU Time`,`GPU Memory`,`Buffer Memory`,`Texture Memory`,`External Buffer Memory`,`External Texture Memory`,`Swap Chain Texture`],Wi=new WeakMap,Gi=new WeakMap,Ki=new class{stats=new Map;getStats(e){return this.get(e)}get(e){this.stats.has(e)||this.stats.set(e,new sn({id:e}));let t=this.stats.get(e);return e===Hi&&qi(t,Ui),t}};function qi(e,t){let n=e.stats,r=!1;for(let i of t)n[i]||(e.get(i),r=!0);let i=Object.keys(n).length,a=Wi.get(e);if(!r&&a?.orderedStatNames===t&&a.statCount===i)return;let o={},s=Gi.get(t);s||(s=new Set(t),Gi.set(t,s));for(let e of t)n[e]&&(o[e]=n[e]);for(let[e,t]of Object.entries(n))s.has(e)||(o[e]=t);for(let e of Object.keys(n))delete n[e];Object.assign(n,o),Wi.set(e,{orderedStatNames:t,statCount:i})}var Ji=`set luma.log.level=1 (or higher) to trace rendering`,Yi="No matching device found. Ensure `@luma.gl/webgl` and/or `@luma.gl/webgpu` modules are imported.",Xi=new class e{static defaultProps={...Ri,type:`best-available`,adapters:void 0,waitForPageLoad:!0};stats=Ki;log=w;VERSION=`9.4.2`;spector;preregisteredAdapters=new Map;constructor(){if(globalThis.luma){if(globalThis.luma.VERSION!==this.VERSION)throw w.error(`Found luma.gl ${globalThis.luma.VERSION} while initialzing ${this.VERSION}`)(),w.error(`'yarn why @luma.gl/core' can help identify the source of the conflict`)(),Error(`luma.gl - multiple versions detected: see console log`);w.error(`This version of luma.gl has already been initialized`)()}w.log(1,`${this.VERSION} - ${Ji}`)(),globalThis.luma=this}async createDevice(t={}){let n={...e.defaultProps,...t},r=this.selectAdapter(n.type,n.adapters);if(!r)throw Error(Yi);return n.waitForPageLoad&&await r.pageLoaded,await r.create(n)}async attachDevice(e,t){let n=this._getTypeFromHandle(e,t.adapters),r=n&&this.selectAdapter(n,t.adapters);if(!r)throw Error(Yi);return await r?.attach?.(e,t)}registerAdapters(e){for(let t of e)this.preregisteredAdapters.set(t.type,t)}getSupportedAdapters(e=[]){let t=this._getAdapterMap(e);return Array.from(t).map(([,e])=>e).filter(e=>e.isSupported?.()).map(e=>e.type)}getBestAvailableAdapterType(e=[]){let t=[`webgpu`,`webgl`,`null`],n=this._getAdapterMap(e);for(let e of t)if(n.get(e)?.isSupported?.())return e;return null}selectAdapter(e,t=[]){let n=e;e===`best-available`&&(n=this.getBestAvailableAdapterType(t));let r=this._getAdapterMap(t);return n&&r.get(n)||null}enforceWebGL2(e=!0,t=[]){let n=this._getAdapterMap(t).get(`webgl`);n||w.warn(`enforceWebGL2: webgl adapter not found`)(),n?.enforceWebGL2?.(e)}setDefaultDeviceProps(t){Object.assign(e.defaultProps,t)}_getAdapterMap(e=[]){let t=new Map(this.preregisteredAdapters);for(let n of e)t.set(n.type,n);return t}_getTypeFromHandle(e,t=[]){return e instanceof WebGL2RenderingContext?`webgl`:typeof GPUDevice<`u`&&e instanceof GPUDevice||e?.queue?`webgpu`:e===null?`null`:(e instanceof WebGLRenderingContext?w.warn(`WebGL1 is not supported`,e)():w.warn(`Unknown handle type`,e)(),null)}},Zi=class{get pageLoaded(){return ta()}},Qi=x()&&typeof document<`u`,$i=()=>Qi&&document.readyState===`complete`,ea=null;function ta(){return ea||=$i()||typeof window>`u`?Promise.resolve():new Promise(e=>window.addEventListener(`load`,()=>e())),ea}function na(e){return typeof ImageData<`u`&&e instanceof ImageData||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLVideoElement<`u`&&e instanceof HTMLVideoElement||typeof VideoFrame<`u`&&e instanceof VideoFrame||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas}function ra(e){if(typeof ImageData<`u`&&e instanceof ImageData||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas)return{width:e.width,height:e.height};if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement)return{width:e.naturalWidth,height:e.naturalHeight};if(typeof HTMLVideoElement<`u`&&e instanceof HTMLVideoElement)return{width:e.videoWidth,height:e.videoHeight};if(typeof VideoFrame<`u`&&e instanceof VideoFrame)return{width:e.displayWidth,height:e.displayHeight};throw Error(`Unknown image type`)}var ia=class{};function aa(e,t){return[oa(e),...t.map(oa).filter(e=>e!==void 0)].filter(e=>e!==void 0)}function oa(e){if(e!==void 0){if(e===null||typeof e==`string`||typeof e==`number`||typeof e==`boolean`)return e;if(e instanceof Error)return e.message;if(Array.isArray(e))return e.map(oa);if(typeof e==`object`){if(sa(e)){let t=String(e);if(t!==`[object Object]`)return t}return ca(e)?la(e):e.constructor?.name||`Object`}return String(e)}}function sa(e){return`toString`in e&&typeof e.toString==`function`&&e.toString!==Object.prototype.toString}function ca(e){return`message`in e&&`type`in e}function la(e){let t=typeof e.type==`string`?e.type:`message`,n=typeof e.message==`string`?e.message:``,r=typeof e.lineNum==`number`?e.lineNum:null,i=typeof e.linePos==`number`?e.linePos:null;return`${t}${r!==null&&i!==null?` @ ${r}:${i}`:r===null?``:` @ ${r}`}: ${n}`.trim()}var ua=class{features;disabledFeatures;constructor(e=[],t){this.features=new Set(e),this.disabledFeatures=t||{}}*[Symbol.iterator](){yield*this.features}has(e){return!this.disabledFeatures?.[e]&&this.features.has(e)}};function da(){if(typeof HTMLCanvasElement>`u`)return!1;let e=HTMLCanvasElement.prototype;return`layoutSubtree`in e&&typeof e.requestPaint==`function`}var fa=class e{static defaultProps={...Ri};get[Symbol.toStringTag](){return`Device`}toString(){return`Device(${this.id})`}toJSON(){return this.toString()}id;props;userData={};statsManager=Ki;_factories={};timestamp=0;_reused=!1;_moduleData={};wgslLanguageFeatures=new Set;_textureCaps={};_debugGPUTimeQuery=null;constructor(t){this.props={...e.defaultProps,...t},this.id=this.props.id||ne(this[Symbol.toStringTag].toLowerCase())}getVertexFormatInfo(e){return D.getVertexFormatInfo(e)}isVertexFormatSupported(e){return!0}getTextureFormatInfo(e){return Ae.getInfo(e)}getTextureFormatCapabilities(e){let t=this._textureCaps[e];if(!t){let n=this._getDeviceTextureFormatCapabilities(e);t=this._getDeviceSpecificTextureFormatCapabilities(n),this._textureCaps[e]=t}return t}getMipLevelCount(e,t,n=1){return 1+Math.floor(Math.log2(Math.max(e,t,n)))}isExternalImage(e){return na(e)}getExternalImageSize(e){return ra(e)}isTextureFormatSupported(e){return this.getTextureFormatCapabilities(e).create}isTextureFormatFilterable(e){return this.getTextureFormatCapabilities(e).filter}isTextureFormatRenderable(e){return this.getTextureFormatCapabilities(e).render}isTextureFormatCompressed(e){return Ae.isCompressed(e)}getSupportedCompressedTextureFormats(){let e=[];for(let t of Object.keys(je()))this.isTextureFormatCompressed(t)&&this.isTextureFormatSupported(t)&&e.push(t);return e}pushDebugGroup(e){this.commandEncoder.pushDebugGroup(e)}popDebugGroup(){this.commandEncoder?.popDebugGroup()}insertDebugMarker(e){this.commandEncoder?.insertDebugMarker(e)}loseDevice(){return!1}incrementTimestamp(){return this.timestamp++}reportError(e,t,...n){if(!this.props.onError(e,t)){let r=aa(t,n);return w.error(this.type===`webgl`?`%cWebGL`:`%cWebGPU`,`color: white; background: red; padding: 2px 6px; border-radius: 3px;`,e.message,...r)}return()=>{}}debug(){this.props.debug||w.once(0,`'Type luma.log.set({debug: true}) in console to enable debug breakpoints',
or create a device with the 'debug: true' prop.`)()}getDefaultCanvasContext(){if(!this.canvasContext)throw Error(`Device has no default CanvasContext. See props.createCanvasContext`);return this.canvasContext}createFence(){throw Error(`createFence() not implemented`)}beginRenderPass(e){return this.commandEncoder.beginRenderPass(e)}beginComputePass(e){return this.commandEncoder.beginComputePass(e)}writeBufferViaCommandEncoder(e,t,n,r=0){throw Error(`writeBufferViaCommandEncoder() not implemented`)}generateMipmapsWebGPU(e){throw Error(`not implemented`)}_createSharedRenderPipelineWebGL(e){throw Error(`_createSharedRenderPipelineWebGL() not implemented`)}_createBindGroupLayoutWebGPU(e,t){throw Error(`_createBindGroupLayoutWebGPU() not implemented`)}_createBindGroupWebGPU(e,t,n,r,i){throw Error(`_createBindGroupWebGPU() not implemented`)}_supportsDebugGPUTime(){return this.features.has(`timestamp-query`)&&!!(this.props.debug||this.props.debugGPUTime)}_enableDebugGPUTime(e=256){if(!this._supportsDebugGPUTime())return null;if(this._debugGPUTimeQuery)return this._debugGPUTimeQuery;try{this._debugGPUTimeQuery=this.createQuerySet({type:`timestamp`,count:e}),this.commandEncoder=this.createCommandEncoder({id:this.commandEncoder.props.id,timeProfilingQuerySet:this._debugGPUTimeQuery})}catch{this._debugGPUTimeQuery=null}return this._debugGPUTimeQuery}_disableDebugGPUTime(){this._debugGPUTimeQuery&&=(this.commandEncoder.getTimeProfilingQuerySet()===this._debugGPUTimeQuery&&(this.commandEncoder=this.createCommandEncoder({id:this.commandEncoder.props.id})),this._debugGPUTimeQuery.destroy(),null)}_isDebugGPUTimeEnabled(){return this._debugGPUTimeQuery!==null}getCanvasContext(){return this.getDefaultCanvasContext()}readPixelsToArrayWebGL(e,t){throw Error(`not implemented`)}readPixelsToBufferWebGL(e,t){throw Error(`not implemented`)}setParametersWebGL(e){throw Error(`not implemented`)}getParametersWebGL(e){throw Error(`not implemented`)}withParametersWebGL(e,t){throw Error(`not implemented`)}clearWebGL(e){throw Error(`not implemented`)}resetWebGL(){throw Error(`not implemented`)}getModuleData(e){return this._moduleData[e]||={},this._moduleData[e]}static _getCanvasContextProps(e){return e.createCanvasContext===!0?{}:e.createCanvasContext}_getDeviceTextureFormatCapabilities(e){let t=Ae.getCapabilities(e),n=e=>(typeof e==`string`?this.features.has(e):e)??!0,r=n(t.create);return{format:e,create:r,render:r&&n(t.render),filter:r&&n(t.filter),blend:r&&n(t.blend),store:r&&n(t.store)}}_normalizeBufferProps(e){(e instanceof ArrayBuffer||ArrayBuffer.isView(e))&&(e={data:e});let t={...e};if((e.usage||0)&S.INDEX&&(e.indexType||(e.data instanceof Uint32Array?t.indexType=`uint32`:e.data instanceof Uint16Array?t.indexType=`uint16`:e.data instanceof Uint8Array&&(t.data=new Uint16Array(e.data),t.indexType=`uint16`)),!t.indexType))throw Error(`indices buffer content must be of type uint16 or uint32`);return t}},pa=class{props;_resizeObserver;_intersectionObserver;_observeDevicePixelRatioTimeout=null;_observeDevicePixelRatioMediaQuery=null;_handleDevicePixelRatioChange=()=>this._refreshDevicePixelRatio();_trackPositionInterval=null;_started=!1;get started(){return this._started}constructor(e){this.props=e}start(){if(this._started||!this.props.canvas)return;this._started=!0,this._intersectionObserver||=new IntersectionObserver(e=>this.props.onIntersection(e)),this._resizeObserver||=new ResizeObserver(e=>this.props.onResize(e)),this._intersectionObserver.observe(this.props.canvas);let e=this.props.resizeObserverBox;try{this._resizeObserver.observe(this.props.canvas,{box:e})}catch{this._resizeObserver.observe(this.props.canvas,{box:`content-box`})}this._observeDevicePixelRatioTimeout=setTimeout(()=>this._refreshDevicePixelRatio(),0),this.props.trackPosition&&this._trackPosition()}stop(){this._started&&(this._started=!1,this._observeDevicePixelRatioTimeout&&=(clearTimeout(this._observeDevicePixelRatioTimeout),null),this._observeDevicePixelRatioMediaQuery&&=(this._observeDevicePixelRatioMediaQuery.removeEventListener(`change`,this._handleDevicePixelRatioChange),null),this._trackPositionInterval&&=(clearInterval(this._trackPositionInterval),null),this._resizeObserver?.disconnect(),this._intersectionObserver?.disconnect())}_refreshDevicePixelRatio(){this._started&&(this.props.onDevicePixelRatioChange(),this._observeDevicePixelRatioMediaQuery?.removeEventListener(`change`,this._handleDevicePixelRatioChange),this._observeDevicePixelRatioMediaQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this._observeDevicePixelRatioMediaQuery.addEventListener(`change`,this._handleDevicePixelRatioChange,{once:!0}))}_trackPosition(e=100){this._trackPositionInterval||=setInterval(()=>{this._started?this.props.onPositionChange():this._trackPositionInterval&&=(clearInterval(this._trackPositionInterval),null)},e)}};function ma(){let e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}var ha=class e{static isHTMLCanvas(e){return typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement}static isOffscreenCanvas(e){return typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas}static defaultProps={id:void 0,canvas:null,width:800,height:600,useDevicePixels:!0,pixelSizeSource:`exact`,autoResize:!0,container:null,visible:!0,alphaMode:`opaque`,colorSpace:`srgb`,colorFormat:void 0,toneMapping:`standard`,trackPosition:!1};id;props;canvas;htmlCanvas;offscreenCanvas;type;initialized;isInitialized=!1;isVisible=!0;cssWidth;cssHeight;devicePixelRatio;devicePixelWidth;devicePixelHeight;drawingBufferWidth;drawingBufferHeight;_initializedResolvers=ma();_canvasObserver;_position=[0,0];destroyed=!1;_needsDrawingBufferResize=!0;_configuredDrawingBufferSize=[0,0];toString(){return`${this[Symbol.toStringTag]}(${this.id})`}constructor(t){this.props={...e.defaultProps,...t},t=this.props,this.initialized=this._initializedResolvers.promise,this.canvas=x()?t.canvas?typeof t.canvas==`string`?_a(t.canvas):t.canvas:va(t):{width:t.width||1,height:t.height||1},e.isHTMLCanvas(this.canvas)?(this.id=t.id||this.canvas.id,this.type=`html-canvas`,this.htmlCanvas=this.canvas):e.isOffscreenCanvas(this.canvas)?(this.id=t.id||`offscreen-canvas`,this.type=`offscreen-canvas`,this.offscreenCanvas=this.canvas):(this.id=t.id||`node-canvas-context`,this.type=`node`),this.cssWidth=this.htmlCanvas?.clientWidth||this.canvas.width,this.cssHeight=this.htmlCanvas?.clientHeight||this.canvas.height,this.devicePixelWidth=this.canvas.width,this.devicePixelHeight=this.canvas.height,this.drawingBufferWidth=this.canvas.width,this.drawingBufferHeight=this.canvas.height,this._configuredDrawingBufferSize=[this.canvas.width,this.canvas.height],this.devicePixelRatio=globalThis.devicePixelRatio||1,this._position=[0,0],this._canvasObserver=new pa({canvas:this.htmlCanvas,trackPosition:this.props.trackPosition,resizeObserverBox:this.props.pixelSizeSource===`css-dpr`?`content-box`:`device-pixel-content-box`,onResize:e=>this._handleResize(e),onIntersection:e=>this._handleIntersection(e),onDevicePixelRatioChange:()=>this._observeDevicePixelRatio(),onPositionChange:()=>this.updatePosition()})}destroy(){this.destroyed||(this.destroyed=!0,this._stopObservers(),this.device=null)}setProps(e){return`useDevicePixels`in e&&(this.props.useDevicePixels=e.useDevicePixels||!1,this._updateDrawingBufferSize()),this}getCurrentFramebuffer(e){return this._resizeDrawingBufferIfNeeded(),this._getCurrentFramebuffer(e)}getCSSSize(){return[this.cssWidth,this.cssHeight]}getPosition(){return this._position}getDevicePixelSize(){return[this.devicePixelWidth,this.devicePixelHeight]}getDrawingBufferSize(){return[this.drawingBufferWidth,this.drawingBufferHeight]}getMaxDrawingBufferSize(){let e=this.device.limits.maxTextureDimension2D;return[e,e]}setDrawingBufferSize(e,t){e=Math.floor(e),t=Math.floor(t),(this.drawingBufferWidth!==e||this.drawingBufferHeight!==t)&&(this.drawingBufferWidth=e,this.drawingBufferHeight=t,this._needsDrawingBufferResize=!0)}getDevicePixelRatio(){return typeof window<`u`&&window.devicePixelRatio||1}cssToDevicePixels(e,t=!0){let n=this.cssToDeviceRatio(),[r,i]=this.getDrawingBufferSize();return ya(e,n,r,i,t)}getPixelSize(){return this.getDevicePixelSize()}getAspect(){let[e,t]=this.getDrawingBufferSize();return e>0&&t>0?e/t:1}cssToDeviceRatio(){try{let[e]=this.getDrawingBufferSize(),[t]=this.getCSSSize();return t?e/t:1}catch{return 1}}resize(e){this.setDrawingBufferSize(e.width,e.height)}_setAutoCreatedCanvasId(e){this.htmlCanvas?.id===`lumagl-auto-created-canvas`&&(this.htmlCanvas.id=e)}_startObservers(){this.destroyed||this._canvasObserver.start()}_stopObservers(){this._canvasObserver.stop()}_handleIntersection(e){if(this.destroyed)return;let t=e.find(e=>e.target===this.canvas);if(!t)return;let n=t.isIntersecting;this.isVisible!==n&&(this.isVisible=n,this.device.props.onVisibilityChange(this))}_handleResize(e){if(this.destroyed)return;let t=e.find(e=>e.target===this.canvas);if(!t)return;let n=E(t.contentBoxSize?.[0]);this.cssWidth=n.inlineSize,this.cssHeight=n.blockSize;let r=this.getDevicePixelSize();this._setDevicePixelSize(this._getDevicePixelSizeFromResizeEntry(t)),this._updateDrawingBufferSize(),this.device.props.onResize(this,{oldPixelSize:r})}_updateDrawingBufferSize(){if(this.props.autoResize){if(typeof this.props.useDevicePixels==`number`){let e=this.props.useDevicePixels;this.setDrawingBufferSize(this.cssWidth*e,this.cssHeight*e)}else this.props.useDevicePixels?this.setDrawingBufferSize(this.devicePixelWidth,this.devicePixelHeight):this.setDrawingBufferSize(this.cssWidth,this.cssHeight)}this._initializedResolvers.resolve(),this.isInitialized=!0,this.updatePosition()}_getDevicePixelSizeFromResizeEntry(e){let t=E(e.contentBoxSize?.[0]);return this.props.pixelSizeSource===`css-dpr`?this._getDevicePixelSizeFromCSSSize(t.inlineSize,t.blockSize):{devicePixelWidth:e.devicePixelContentBoxSize?.[0]?.inlineSize||t.inlineSize*devicePixelRatio,devicePixelHeight:e.devicePixelContentBoxSize?.[0]?.blockSize||t.blockSize*devicePixelRatio}}_getDevicePixelSizeFromCSSSize(e,t){let n=this.getDevicePixelRatio();return{devicePixelWidth:Math.floor(e*n),devicePixelHeight:Math.floor(t*n)}}_setDevicePixelSize({devicePixelWidth:e,devicePixelHeight:t}){let[n,r]=this.getMaxDrawingBufferSize();this.devicePixelWidth=Math.max(1,Math.min(e,n)),this.devicePixelHeight=Math.max(1,Math.min(t,r))}_resizeDrawingBufferIfNeeded(){if(this._needsDrawingBufferResize){this._needsDrawingBufferResize=!1,(this.drawingBufferWidth!==this.canvas.width||this.drawingBufferHeight!==this.canvas.height)&&(this.canvas.width=this.drawingBufferWidth,this.canvas.height=this.drawingBufferHeight);let[e,t]=this._configuredDrawingBufferSize;(this.drawingBufferWidth!==e||this.drawingBufferHeight!==t)&&(this._configureDevice(),this._configuredDrawingBufferSize=[this.drawingBufferWidth,this.drawingBufferHeight])}}_observeDevicePixelRatio(){if(this.destroyed||!this._canvasObserver.started)return;let e=this.devicePixelRatio;if(this.devicePixelRatio=window.devicePixelRatio,this.props.pixelSizeSource===`css-dpr`){let e=this.getDevicePixelSize();this._setDevicePixelSize(this._getDevicePixelSizeFromCSSSize(this.cssWidth,this.cssHeight)),this._updateDrawingBufferSize(),this.device.props.onResize(this,{oldPixelSize:e})}this.updatePosition(),this.device.props.onDevicePixelRatioChange?.(this,{oldRatio:e})}updatePosition(){if(this.destroyed)return;let e=this.htmlCanvas?.getBoundingClientRect();if(e){let t=[e.left,e.top];if(this._position??=t,t[0]!==this._position[0]||t[1]!==this._position[1]){let e=this._position;this._position=t,this.device.props.onPositionChange?.(this,{oldPosition:e})}}}};function ga(e){if(typeof e==`string`){let t=document.getElementById(e);if(!t)throw Error(`${e} is not an HTML element`);return t}return e||document.body}function _a(e){let t=document.getElementById(e);if(!ha.isHTMLCanvas(t))throw Error(`Object is not a canvas element`);return t}function va(e){let{width:t,height:n}=e,r=document.createElement(`canvas`);r.id=ne(`lumagl-auto-created-canvas`),r.width=t||1,r.height=n||1,r.style.width=Number.isFinite(t)?`${t}px`:`100%`,r.style.height=Number.isFinite(n)?`${n}px`:`100%`,e?.visible||(r.style.visibility=`hidden`);let i=ga(e?.container||null);return i.insertBefore(r,i.firstChild),r}function ya(e,t,n,r,i){let a=e,o=ba(a[0],t,n),s=xa(a[1],t,r,i),c=ba(a[0]+1,t,n),l=c===n-1?c:c-1;c=xa(a[1]+1,t,r,i);let u;return i?(c=c===0?c:c+1,u=s,s=c):u=c===r-1?c:c-1,{x:o,y:s,width:Math.max(l-o+1,1),height:Math.max(u-s+1,1)}}function ba(e,t,n){return Math.min(Math.round(e*t),n-1)}function xa(e,t,n,r){return r?Math.max(0,n-1-Math.round(e*t)):Math.min(Math.round(e*t),n-1)}var Sa=class extends ha{static defaultProps=ha.defaultProps},Ca=class extends ha{},wa=class e extends P{width;height;updateTimestamp;get[Symbol.toStringTag](){return`ExternalTexture`}constructor(t,n){super(t,n,e.defaultProps);let r=this.props.source?t.getExternalImageSize(this.props.source):null;this.width=this.props.width||r?.width||0,this.height=this.props.height||r?.height||0,this.updateTimestamp=t.incrementTimestamp()}static defaultProps={...P.defaultProps,source:void 0,width:0,height:0,colorSpace:`srgb`,sampler:{}}},Ta=class e extends P{get[Symbol.toStringTag](){return`Framebuffer`}width;height;constructor(t,n={}){super(t,n,e.defaultProps),this.width=this.props.width,this.height=this.props.height}clone(e){let t=this.colorAttachments.map(t=>t.texture.clone(e)),n=this.depthStencilAttachment&&this.depthStencilAttachment.texture.clone(e);return this.device.createFramebuffer({...this.props,...e,colorAttachments:t,depthStencilAttachment:n})}resize(e){let t=!e;if(e){let[n,r]=Array.isArray(e)?e:[e.width,e.height];t=t||r!==this.height||n!==this.width,this.width=n,this.height=r}t&&(w.log(2,`Resizing framebuffer ${this.id} to ${this.width}x${this.height}`)(),this.resizeAttachments(this.width,this.height))}autoCreateAttachmentTextures(){if(this.props.colorAttachments.length===0&&!this.props.depthStencilAttachment)throw Error(`Framebuffer has noattachments`);this.colorAttachments=this.props.colorAttachments.map((e,t)=>{if(typeof e==`string`){let n=this.createColorTexture(e,t);return this.attachResource(n),n.view}return e instanceof I?e.view:e});let e=this.props.depthStencilAttachment;if(e){if(typeof e==`string`){let t=this.createDepthStencilTexture(e);this.attachResource(t),this.depthStencilAttachment=t.view}else this.depthStencilAttachment=e instanceof I?e.view:e}}createColorTexture(e,t){return this.device.createTexture({id:`${this.id}-color-attachment-${t}`,usage:I.RENDER_ATTACHMENT,format:e,width:this.width,height:this.height,sampler:{magFilter:`linear`,minFilter:`linear`}})}createDepthStencilTexture(e){return this.device.createTexture({id:`${this.id}-depth-stencil-attachment`,usage:I.RENDER_ATTACHMENT|I.SAMPLE,format:e,width:this.width,height:this.height})}resizeAttachments(e,t){if(this.colorAttachments.forEach((n,r)=>{let i=n.texture.clone({width:e,height:t});this.destroyAttachedResource(n),this.colorAttachments[r]=i.view,this.attachResource(i.view)}),this.depthStencilAttachment){let n=this.depthStencilAttachment.texture.clone({width:e,height:t});this.destroyAttachedResource(this.depthStencilAttachment),this.depthStencilAttachment=n.view,this.attachResource(n)}this.updateAttachments()}static defaultProps={...P.defaultProps,width:1,height:1,colorAttachments:[],depthStencilAttachment:null}},Ea=class extends P{get[Symbol.toStringTag](){return`SharedRenderPipeline`}constructor(e,t){super(e,t,{...P.defaultProps,handle:void 0,vs:void 0,fs:void 0,varyings:void 0,bufferMode:void 0})}},Da=class e extends P{static defaultClearColor=[0,0,0,1];static defaultClearDepth=1;static defaultClearStencil=0;get[Symbol.toStringTag](){return`RenderPass`}constructor(t,n,r=e.defaultProps){n=e.normalizeProps(t,n),super(t,n,r)}static normalizeProps(e,t){return t}static defaultProps={...P.defaultProps,framebuffer:null,resolveTargets:void 0,parameters:void 0,clearColor:e.defaultClearColor,clearColors:void 0,clearDepth:e.defaultClearDepth,clearStencil:e.defaultClearStencil,depthReadOnly:!1,stencilReadOnly:!1,discard:!1,occlusionQuerySet:void 0,timestampQuerySet:void 0,beginTimestampIndex:void 0,endTimestampIndex:void 0}},Oa=class e extends P{get[Symbol.toStringTag](){return`CommandEncoder`}_timeProfilingQuerySet=null;_timeProfilingSlotCount=0;_gpuTimeMs;constructor(t,n){super(t,n,e.defaultProps),this._timeProfilingQuerySet=n.timeProfilingQuerySet??null,this._timeProfilingSlotCount=0,this._gpuTimeMs=void 0}async resolveTimeProfilingQuerySet(){if(this._gpuTimeMs=void 0,!this._timeProfilingQuerySet)return;let e=Math.floor(this._timeProfilingSlotCount/2);if(e<=0)return;let t=e*2,n=await this._timeProfilingQuerySet.readResults({firstQuery:0,queryCount:t}),r=0n;for(let e=0;e<t;e+=2)r+=n[e+1]-n[e];this._gpuTimeMs=Number(r)/1e6}getTimeProfilingSlotCount(){return this._timeProfilingSlotCount}getTimeProfilingQuerySet(){return this._timeProfilingQuerySet}_applyTimeProfilingToPassProps(e){let t=e||{};if(!this._supportsTimestampQueries()||!this._timeProfilingQuerySet||t.timestampQuerySet!==void 0||t.beginTimestampIndex!==void 0||t.endTimestampIndex!==void 0)return t;let n=this._timeProfilingSlotCount;return n+1>=this._timeProfilingQuerySet.props.count?t:(this._timeProfilingSlotCount+=2,{...t,timestampQuerySet:this._timeProfilingQuerySet,beginTimestampIndex:n,endTimestampIndex:n+1})}_supportsTimestampQueries(){return this.device.features.has(`timestamp-query`)}static defaultProps={...P.defaultProps,measureExecutionTime:void 0,timeProfilingQuerySet:void 0}},ka=class e extends P{get[Symbol.toStringTag](){return`CommandBuffer`}constructor(t,n){super(t,n,e.defaultProps)}static defaultProps={...P.defaultProps}},Aa=class e extends P{static defaultProps={...P.defaultProps,shaderLayout:void 0,bufferLayout:[]};get[Symbol.toStringTag](){return`VertexArray`}maxVertexAttributes;indexBuffer=null;attributes;constructor(t,n){super(t,n,e.defaultProps),this.maxVertexAttributes=t.limits.maxVertexAttributes,this.attributes=Array(this.maxVertexAttributes).fill(null)}getBufferSlot(e){return null}getDrawValidationError(){return null}setConstantWebGL(e,t){this.device.reportError(Error(`constant attributes not supported`),this)()}},ja=class e extends P{static defaultProps={...P.defaultProps,layout:void 0,buffers:{}};get[Symbol.toStringTag](){return`TransformFeedback`}constructor(t,n){super(t,n,e.defaultProps)}},Ma=class e extends P{get[Symbol.toStringTag](){return`QuerySet`}constructor(t,n){super(t,n,e.defaultProps)}static defaultProps={...P.defaultProps,type:void 0,count:void 0}},Na=class e extends P{static defaultProps={...P.defaultProps};get[Symbol.toStringTag](){return`Fence`}constructor(t,n={}){super(t,n,e.defaultProps)}},Pa=`#version 300 es
out vec4 transform_output;
void main() {
  transform_output = vec4(0);
}`;function Fa(e){let{input:t,inputChannels:n,output:r}=e||{};if(!t)return Pa;if(!n)throw Error(`inputChannels`);return`\
#version 300 es
in ${Ia(n)} ${t};
out vec4 ${r};
void main() {
  ${r} = ${La(t,n)};
}`}function Ia(e){switch(e){case 1:return`float`;case 2:return`vec2`;case 3:return`vec3`;case 4:return`vec4`;default:throw Error(`invalid channels: ${e}`)}}function La(e,t){switch(t){case 1:return`vec4(${e}, 0.0, 0.0, 1.0)`;case 2:return`vec4(${e}, 0.0, 1.0)`;case 3:return`vec4(${e}, 1.0)`;case 4:return e;default:throw Error(`invalid channels: ${t}`)}}globalThis.mathgl=globalThis.mathgl||{config:{EPSILON:1e-12,debug:!1,precision:4,printTypes:!1,printDegrees:!1,printRowMajor:!0,_cartographicRadians:!1}};var Ra=globalThis.mathgl.config;function za(e,{precision:t=Ra.precision}={}){return e=Ua(e),`${parseFloat(e.toPrecision(t))}`}function Ba(e){return Array.isArray(e)||ArrayBuffer.isView(e)&&!(e instanceof DataView)}function V(e,t,n){return Ga(e,e=>Math.max(t,Math.min(n,e)))}function Va(e,t,n){return Ba(e)?e.map((e,r)=>Va(e,t[r],n)):n*t+(1-n)*e}function Ha(e,t,n){let r=Ra.EPSILON;n&&(Ra.EPSILON=n);try{if(e===t)return!0;if(Ba(e)&&Ba(t)){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!Ha(e[n],t[n]))return!1;return!0}return e&&e.equals?e.equals(t):t&&t.equals?t.equals(e):typeof e==`number`&&typeof t==`number`&&Math.abs(e-t)<=Ra.EPSILON*Math.max(1,Math.abs(e),Math.abs(t))}finally{Ra.EPSILON=r}}function Ua(e){return Math.round(e/Ra.EPSILON)*Ra.EPSILON}function Wa(e){return e.clone?e.clone():Array(e.length)}function Ga(e,t,n){if(Ba(e)){let r=e;n||=Wa(r);for(let i=0;i<n.length&&i<r.length;++i){let r=typeof e==`number`?e:e[i];n[i]=t(r,i,n)}return n}return t(e)}var Ka=class extends Array{clone(){return new this.constructor().copy(this)}fromArray(e,t=0){for(let n=0;n<this.ELEMENTS;++n)this[n]=e[n+t];return this.check()}toArray(e=[],t=0){for(let n=0;n<this.ELEMENTS;++n)e[t+n]=this[n];return e}toObject(e){return e}from(e){return Array.isArray(e)?this.copy(e):this.fromObject(e)}to(e){return e===this?this:Ba(e)?this.toArray(e):this.toObject(e)}toTarget(e){return e?this.to(e):this}toFloat32Array(){return new Float32Array(this)}toString(){return this.formatString(Ra)}formatString(e){let t=``;for(let n=0;n<this.ELEMENTS;++n)t+=(n>0?`, `:``)+za(this[n],e);return`${e.printTypes?this.constructor.name:``}[${t}]`}equals(e){if(!e||this.length!==e.length)return!1;for(let t=0;t<this.ELEMENTS;++t)if(!Ha(this[t],e[t]))return!1;return!0}exactEquals(e){if(!e||this.length!==e.length)return!1;for(let t=0;t<this.ELEMENTS;++t)if(this[t]!==e[t])return!1;return!0}negate(){for(let e=0;e<this.ELEMENTS;++e)this[e]=-this[e];return this.check()}lerp(e,t,n){if(n===void 0)return this.lerp(this,e,t);for(let r=0;r<this.ELEMENTS;++r){let i=e[r],a=typeof t==`number`?t:t[r];this[r]=i+n*(a-i)}return this.check()}min(e){for(let t=0;t<this.ELEMENTS;++t)this[t]=Math.min(e[t],this[t]);return this.check()}max(e){for(let t=0;t<this.ELEMENTS;++t)this[t]=Math.max(e[t],this[t]);return this.check()}clamp(e,t){for(let n=0;n<this.ELEMENTS;++n)this[n]=Math.min(Math.max(this[n],e[n]),t[n]);return this.check()}add(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]+=t[e];return this.check()}subtract(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]-=t[e];return this.check()}scale(e){if(typeof e==`number`)for(let t=0;t<this.ELEMENTS;++t)this[t]*=e;else for(let t=0;t<this.ELEMENTS&&t<e.length;++t)this[t]*=e[t];return this.check()}multiplyByScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]*=e;return this.check()}check(){if(Ra.debug&&!this.validate())throw Error(`math.gl: ${this.constructor.name} some fields set to invalid numbers'`);return this}validate(){let e=this.length===this.ELEMENTS;for(let t=0;t<this.ELEMENTS;++t)e&&=Number.isFinite(this[t]);return e}sub(e){return this.subtract(e)}setScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]=e;return this.check()}addScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]+=e;return this.check()}subScalar(e){return this.addScalar(-e)}multiplyScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]*=e;return this.check()}divideScalar(e){return this.multiplyByScalar(1/e)}clampScalar(e,t){for(let n=0;n<this.ELEMENTS;++n)this[n]=Math.min(Math.max(this[n],e),t);return this.check()}get elements(){return this}};function qa(e,t){if(e.length!==t)return!1;for(let t=0;t<e.length;++t)if(!Number.isFinite(e[t]))return!1;return!0}function Ja(e){if(!Number.isFinite(e))throw Error(`Invalid number ${JSON.stringify(e)}`);return e}function Ya(e,t,n=``){if(Ra.debug&&!qa(e,t))throw Error(`math.gl: ${n} some fields set to invalid numbers'`);return e}function Xa(e,t){if(!e)throw Error(`math.gl assertion ${t}`)}var Za=class extends Ka{get x(){return this[0]}set x(e){this[0]=Ja(e)}get y(){return this[1]}set y(e){this[1]=Ja(e)}len(){return Math.sqrt(this.lengthSquared())}magnitude(){return this.len()}lengthSquared(){let e=0;for(let t=0;t<this.ELEMENTS;++t)e+=this[t]*this[t];return e}magnitudeSquared(){return this.lengthSquared()}distance(e){return Math.sqrt(this.distanceSquared(e))}distanceSquared(e){let t=0;for(let n=0;n<this.ELEMENTS;++n){let r=this[n]-e[n];t+=r*r}return Ja(t)}dot(e){let t=0;for(let n=0;n<this.ELEMENTS;++n)t+=this[n]*e[n];return Ja(t)}normalize(){let e=this.magnitude();if(e!==0)for(let t=0;t<this.ELEMENTS;++t)this[t]/=e;return this.check()}multiply(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]*=t[e];return this.check()}divide(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]/=t[e];return this.check()}lengthSq(){return this.lengthSquared()}distanceTo(e){return this.distance(e)}distanceToSquared(e){return this.distanceSquared(e)}getComponent(e){return Xa(e>=0&&e<this.ELEMENTS,`index is out of range`),Ja(this[e])}setComponent(e,t){return Xa(e>=0&&e<this.ELEMENTS,`index is out of range`),this[e]=t,this.check()}addVectors(e,t){return this.copy(e).add(t)}subVectors(e,t){return this.copy(e).subtract(t)}multiplyVectors(e,t){return this.copy(e).multiply(t)}addScaledVector(e,t){return this.add(new this.constructor(e).multiplyScalar(t))}},Qa=typeof Float32Array<`u`?Float32Array:Array;function $a(){let e=new Qa(2);return Qa!=Float32Array&&(e[0]=0,e[1]=0),e}function eo(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e}function to(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e}function no(e,t){return e[0]=-t[0],e[1]=-t[1],e}function ro(e,t,n,r){let i=t[0],a=t[1];return e[0]=i+r*(n[0]-i),e[1]=a+r*(n[1]-a),e}function io(e,t,n){let r=t[0],i=t[1];return e[0]=n[0]*r+n[4]*i+n[12],e[1]=n[1]*r+n[5]*i+n[13],e}var ao=to;(function(){let e=$a();return function(t,n,r,i,a,o){let s,c;for(n||=2,r||=0,c=i?Math.min(i*n+r,t.length):t.length,s=r;s<c;s+=n)e[0]=t[s],e[1]=t[s+1],a(e,e,o),t[s]=e[0],t[s+1]=e[1];return t}})();function oo(e,t,n){let r=t[0],i=t[1],a=n[3]*r+n[7]*i||1;return e[0]=(n[0]*r+n[4]*i)/a,e[1]=(n[1]*r+n[5]*i)/a,e}function so(e,t,n){let r=t[0],i=t[1],a=t[2],o=n[3]*r+n[7]*i+n[11]*a||1;return e[0]=(n[0]*r+n[4]*i+n[8]*a)/o,e[1]=(n[1]*r+n[5]*i+n[9]*a)/o,e[2]=(n[2]*r+n[6]*i+n[10]*a)/o,e}function co(e,t,n){let r=t[0],i=t[1];return e[0]=n[0]*r+n[2]*i,e[1]=n[1]*r+n[3]*i,e[2]=t[2],e}function lo(){let e=new Qa(3);return Qa!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function uo(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function fo(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function po(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function mo(e,t,n){let r=t[0],i=t[1],a=t[2],o=n[0],s=n[1],c=n[2];return e[0]=i*c-a*s,e[1]=a*o-r*c,e[2]=r*s-i*o,e}function ho(e,t,n){let r=t[0],i=t[1],a=t[2],o=n[3]*r+n[7]*i+n[11]*a+n[15];return o||=1,e[0]=(n[0]*r+n[4]*i+n[8]*a+n[12])/o,e[1]=(n[1]*r+n[5]*i+n[9]*a+n[13])/o,e[2]=(n[2]*r+n[6]*i+n[10]*a+n[14])/o,e}function go(e,t,n){let r=t[0],i=t[1],a=t[2];return e[0]=r*n[0]+i*n[3]+a*n[6],e[1]=r*n[1]+i*n[4]+a*n[7],e[2]=r*n[2]+i*n[5]+a*n[8],e}function _o(e,t,n){let r=n[0],i=n[1],a=n[2],o=n[3],s=t[0],c=t[1],l=t[2],u=i*l-a*c,d=a*s-r*l,f=r*c-i*s,p=i*f-a*d,m=a*u-r*f,h=r*d-i*u,g=o*2;return u*=g,d*=g,f*=g,p*=2,m*=2,h*=2,e[0]=s+u+p,e[1]=c+d+m,e[2]=l+f+h,e}function vo(e,t,n,r){let i=[],a=[];return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],a[0]=i[0],a[1]=i[1]*Math.cos(r)-i[2]*Math.sin(r),a[2]=i[1]*Math.sin(r)+i[2]*Math.cos(r),e[0]=a[0]+n[0],e[1]=a[1]+n[1],e[2]=a[2]+n[2],e}function yo(e,t,n,r){let i=[],a=[];return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],a[0]=i[2]*Math.sin(r)+i[0]*Math.cos(r),a[1]=i[1],a[2]=i[2]*Math.cos(r)-i[0]*Math.sin(r),e[0]=a[0]+n[0],e[1]=a[1]+n[1],e[2]=a[2]+n[2],e}function bo(e,t,n,r){let i=[],a=[];return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],a[0]=i[0]*Math.cos(r)-i[1]*Math.sin(r),a[1]=i[0]*Math.sin(r)+i[1]*Math.cos(r),a[2]=i[2],e[0]=a[0]+n[0],e[1]=a[1]+n[1],e[2]=a[2]+n[2],e}function xo(e,t){let n=e[0],r=e[1],i=e[2],a=t[0],o=t[1],s=t[2],c=Math.sqrt((n*n+r*r+i*i)*(a*a+o*o+s*s)),l=c&&po(e,t)/c;return Math.acos(Math.min(Math.max(l,-1),1))}var So=uo;(function(){let e=lo();return function(t,n,r,i,a,o){let s,c;for(n||=3,r||=0,c=i?Math.min(i*n+r,t.length):t.length,s=r;s<c;s+=n)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2];return t}})();var Co=[0,0,0],wo,To=class e extends Za{static get ZERO(){return wo||(wo=new e(0,0,0),Object.freeze(wo)),wo}constructor(e=0,t=0,n=0){super(-0,-0,-0),arguments.length===1&&Ba(e)?this.copy(e):(Ra.debug&&(Ja(e),Ja(t),Ja(n)),this[0]=e,this[1]=t,this[2]=n)}set(e,t,n){return this[0]=e,this[1]=t,this[2]=n,this.check()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this.check()}fromObject(e){return Ra.debug&&(Ja(e.x),Ja(e.y),Ja(e.z)),this[0]=e.x,this[1]=e.y,this[2]=e.z,this.check()}toObject(e){return e.x=this[0],e.y=this[1],e.z=this[2],e}get ELEMENTS(){return 3}get z(){return this[2]}set z(e){this[2]=Ja(e)}angle(e){return xo(this,e)}cross(e){return mo(this,this,e),this.check()}rotateX({radians:e,origin:t=Co}){return vo(this,this,t,e),this.check()}rotateY({radians:e,origin:t=Co}){return yo(this,this,t,e),this.check()}rotateZ({radians:e,origin:t=Co}){return bo(this,this,t,e),this.check()}transform(e){return this.transformAsPoint(e)}transformAsPoint(e){return ho(this,this,e),this.check()}transformAsVector(e){return so(this,this,e),this.check()}transformByMatrix3(e){return go(this,this,e),this.check()}transformByMatrix2(e){return co(this,this,e),this.check()}transformByQuaternion(e){return _o(this,this,e),this.check()}},Eo=class extends Ka{toString(){let e=`[`;if(Ra.printRowMajor){e+=`row-major:`;for(let t=0;t<this.RANK;++t)for(let n=0;n<this.RANK;++n)e+=` ${this[n*this.RANK+t]}`}else{e+=`column-major:`;for(let t=0;t<this.ELEMENTS;++t)e+=` ${this[t]}`}return e+=`]`,e}getElementIndex(e,t){return t*this.RANK+e}getElement(e,t){return this[t*this.RANK+e]}setElement(e,t,n){return this[t*this.RANK+e]=Ja(n),this}getColumn(e,t=Array(this.RANK).fill(-0)){let n=e*this.RANK;for(let e=0;e<this.RANK;++e)t[e]=this[n+e];return t}setColumn(e,t){let n=e*this.RANK;for(let e=0;e<this.RANK;++e)this[n+e]=t[e];return this}};function Do(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Oo(e,t){if(e===t){let n=t[1],r=t[2],i=t[3],a=t[6],o=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=n,e[6]=t[9],e[7]=t[13],e[8]=r,e[9]=a,e[11]=t[14],e[12]=i,e[13]=o,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}function ko(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],p=t[11],m=t[12],h=t[13],g=t[14],_=t[15],v=n*s-r*o,y=n*c-i*o,b=n*l-a*o,x=r*c-i*s,S=r*l-a*s,C=i*l-a*c,w=u*h-d*m,T=u*g-f*m,E=u*_-p*m,D=d*g-f*h,O=d*_-p*h,k=f*_-p*g,A=v*k-y*O+b*D+x*E-S*T+C*w;return A?(A=1/A,e[0]=(s*k-c*O+l*D)*A,e[1]=(i*O-r*k-a*D)*A,e[2]=(h*C-g*S+_*x)*A,e[3]=(f*S-d*C-p*x)*A,e[4]=(c*E-o*k-l*T)*A,e[5]=(n*k-i*E+a*T)*A,e[6]=(g*b-m*C-_*y)*A,e[7]=(u*C-f*b+p*y)*A,e[8]=(o*O-s*E+l*w)*A,e[9]=(r*E-n*O-a*w)*A,e[10]=(m*S-h*b+_*v)*A,e[11]=(d*b-u*S-p*v)*A,e[12]=(s*T-o*D-c*w)*A,e[13]=(n*D-r*T+i*w)*A,e[14]=(h*y-m*x-g*v)*A,e[15]=(u*x-d*y+f*v)*A,e):null}function Ao(e){let t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=n*s-r*o,b=l*m-u*p,x=l*h-d*p,S=u*h-d*m,C=t*S-n*x+r*b,w=a*S-o*x+s*b,T=l*y-u*v+d*_,E=p*y-m*v+h*_;return c*C-i*w+g*T-f*E}function jo(e,t,n){let r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=t[9],p=t[10],m=t[11],h=t[12],g=t[13],_=t[14],v=t[15],y=n[0],b=n[1],x=n[2],S=n[3];return e[0]=y*r+b*s+x*d+S*h,e[1]=y*i+b*c+x*f+S*g,e[2]=y*a+b*l+x*p+S*_,e[3]=y*o+b*u+x*m+S*v,y=n[4],b=n[5],x=n[6],S=n[7],e[4]=y*r+b*s+x*d+S*h,e[5]=y*i+b*c+x*f+S*g,e[6]=y*a+b*l+x*p+S*_,e[7]=y*o+b*u+x*m+S*v,y=n[8],b=n[9],x=n[10],S=n[11],e[8]=y*r+b*s+x*d+S*h,e[9]=y*i+b*c+x*f+S*g,e[10]=y*a+b*l+x*p+S*_,e[11]=y*o+b*u+x*m+S*v,y=n[12],b=n[13],x=n[14],S=n[15],e[12]=y*r+b*s+x*d+S*h,e[13]=y*i+b*c+x*f+S*g,e[14]=y*a+b*l+x*p+S*_,e[15]=y*o+b*u+x*m+S*v,e}function Mo(e,t,n){let r=n[0],i=n[1],a=n[2],o,s,c,l,u,d,f,p,m,h,g,_;return t===e?(e[12]=t[0]*r+t[4]*i+t[8]*a+t[12],e[13]=t[1]*r+t[5]*i+t[9]*a+t[13],e[14]=t[2]*r+t[6]*i+t[10]*a+t[14],e[15]=t[3]*r+t[7]*i+t[11]*a+t[15]):(o=t[0],s=t[1],c=t[2],l=t[3],u=t[4],d=t[5],f=t[6],p=t[7],m=t[8],h=t[9],g=t[10],_=t[11],e[0]=o,e[1]=s,e[2]=c,e[3]=l,e[4]=u,e[5]=d,e[6]=f,e[7]=p,e[8]=m,e[9]=h,e[10]=g,e[11]=_,e[12]=o*r+u*i+m*a+t[12],e[13]=s*r+d*i+h*a+t[13],e[14]=c*r+f*i+g*a+t[14],e[15]=l*r+p*i+_*a+t[15]),e}function No(e,t,n){let r=n[0],i=n[1],a=n[2];return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function Po(e,t,n,r){let i=r[0],a=r[1],o=r[2],s=Math.sqrt(i*i+a*a+o*o),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;return s<1e-6?null:(s=1/s,i*=s,a*=s,o*=s,l=Math.sin(n),c=Math.cos(n),u=1-c,d=t[0],f=t[1],p=t[2],m=t[3],h=t[4],g=t[5],_=t[6],v=t[7],y=t[8],b=t[9],x=t[10],S=t[11],C=i*i*u+c,w=a*i*u+o*l,T=o*i*u-a*l,E=i*a*u-o*l,D=a*a*u+c,O=o*a*u+i*l,k=i*o*u+a*l,A=a*o*u-i*l,j=o*o*u+c,e[0]=d*C+h*w+y*T,e[1]=f*C+g*w+b*T,e[2]=p*C+_*w+x*T,e[3]=m*C+v*w+S*T,e[4]=d*E+h*D+y*O,e[5]=f*E+g*D+b*O,e[6]=p*E+_*D+x*O,e[7]=m*E+v*D+S*O,e[8]=d*k+h*A+y*j,e[9]=f*k+g*A+b*j,e[10]=p*k+_*A+x*j,e[11]=m*k+v*A+S*j,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function Fo(e,t,n){let r=Math.sin(n),i=Math.cos(n),a=t[4],o=t[5],s=t[6],c=t[7],l=t[8],u=t[9],d=t[10],f=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*i+l*r,e[5]=o*i+u*r,e[6]=s*i+d*r,e[7]=c*i+f*r,e[8]=l*i-a*r,e[9]=u*i-o*r,e[10]=d*i-s*r,e[11]=f*i-c*r,e}function Io(e,t,n){let r=Math.sin(n),i=Math.cos(n),a=t[0],o=t[1],s=t[2],c=t[3],l=t[8],u=t[9],d=t[10],f=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*i-l*r,e[1]=o*i-u*r,e[2]=s*i-d*r,e[3]=c*i-f*r,e[8]=a*r+l*i,e[9]=o*r+u*i,e[10]=s*r+d*i,e[11]=c*r+f*i,e}function Lo(e,t,n){let r=Math.sin(n),i=Math.cos(n),a=t[0],o=t[1],s=t[2],c=t[3],l=t[4],u=t[5],d=t[6],f=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*i+l*r,e[1]=o*i+u*r,e[2]=s*i+d*r,e[3]=c*i+f*r,e[4]=l*i-a*r,e[5]=u*i-o*r,e[6]=d*i-s*r,e[7]=f*i-c*r,e}function Ro(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=n+n,s=r+r,c=i+i,l=n*o,u=r*o,d=r*s,f=i*o,p=i*s,m=i*c,h=a*o,g=a*s,_=a*c;return e[0]=1-d-m,e[1]=u+_,e[2]=f-g,e[3]=0,e[4]=u-_,e[5]=1-l-m,e[6]=p+h,e[7]=0,e[8]=f+g,e[9]=p-h,e[10]=1-l-d,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function zo(e,t,n,r,i,a,o){let s=1/(n-t),c=1/(i-r),l=1/(a-o);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*c,e[6]=0,e[7]=0,e[8]=(n+t)*s,e[9]=(i+r)*c,e[10]=(o+a)*l,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*a*2*l,e[15]=0,e}function Bo(e,t,n,r,i){let a=1/Math.tan(t/2);if(e[0]=a/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,i!=null&&i!==1/0){let t=1/(r-i);e[10]=(i+r)*t,e[14]=2*i*r*t}else e[10]=-1,e[14]=-2*r;return e}var Vo=Bo;function Ho(e,t,n,r,i,a,o){let s=1/(t-n),c=1/(r-i),l=1/(a-o);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*l,e[11]=0,e[12]=(t+n)*s,e[13]=(i+r)*c,e[14]=(o+a)*l,e[15]=1,e}var Uo=Ho;function Wo(e,t,n,r){let i,a,o,s,c,l,u,d,f,p,m=t[0],h=t[1],g=t[2],_=r[0],v=r[1],y=r[2],b=n[0],x=n[1],S=n[2];return Math.abs(m-b)<1e-6&&Math.abs(h-x)<1e-6&&Math.abs(g-S)<1e-6?Do(e):(d=m-b,f=h-x,p=g-S,i=1/Math.sqrt(d*d+f*f+p*p),d*=i,f*=i,p*=i,a=v*p-y*f,o=y*d-_*p,s=_*f-v*d,i=Math.sqrt(a*a+o*o+s*s),i?(i=1/i,a*=i,o*=i,s*=i):(a=0,o=0,s=0),c=f*s-p*o,l=p*a-d*s,u=d*o-f*a,i=Math.sqrt(c*c+l*l+u*u),i?(i=1/i,c*=i,l*=i,u*=i):(c=0,l=0,u=0),e[0]=a,e[1]=c,e[2]=d,e[3]=0,e[4]=o,e[5]=l,e[6]=f,e[7]=0,e[8]=s,e[9]=u,e[10]=p,e[11]=0,e[12]=-(a*m+o*h+s*g),e[13]=-(c*m+l*h+u*g),e[14]=-(d*m+f*h+p*g),e[15]=1,e)}function Go(){let e=new Qa(4);return Qa!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function Ko(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e}function qo(e,t,n){let r=t[0],i=t[1],a=t[2],o=t[3];return e[0]=n[0]*r+n[4]*i+n[8]*a+n[12]*o,e[1]=n[1]*r+n[5]*i+n[9]*a+n[13]*o,e[2]=n[2]*r+n[6]*i+n[10]*a+n[14]*o,e[3]=n[3]*r+n[7]*i+n[11]*a+n[15]*o,e}(function(){let e=Go();return function(t,n,r,i,a,o){let s,c;for(n||=4,r||=0,c=i?Math.min(i*n+r,t.length):t.length,s=r;s<c;s+=n)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],e[3]=t[s+3],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2],t[s+3]=e[3];return t}})();var Jo;(function(e){e[e.COL0ROW0=0]=`COL0ROW0`,e[e.COL0ROW1=1]=`COL0ROW1`,e[e.COL0ROW2=2]=`COL0ROW2`,e[e.COL0ROW3=3]=`COL0ROW3`,e[e.COL1ROW0=4]=`COL1ROW0`,e[e.COL1ROW1=5]=`COL1ROW1`,e[e.COL1ROW2=6]=`COL1ROW2`,e[e.COL1ROW3=7]=`COL1ROW3`,e[e.COL2ROW0=8]=`COL2ROW0`,e[e.COL2ROW1=9]=`COL2ROW1`,e[e.COL2ROW2=10]=`COL2ROW2`,e[e.COL2ROW3=11]=`COL2ROW3`,e[e.COL3ROW0=12]=`COL3ROW0`,e[e.COL3ROW1=13]=`COL3ROW1`,e[e.COL3ROW2=14]=`COL3ROW2`,e[e.COL3ROW3=15]=`COL3ROW3`})(Jo||={});var Yo=45*Math.PI/180,Xo=1,Zo=.1,Qo=500,$o=Object.freeze([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),es=class extends Eo{static get IDENTITY(){return is()}static get ZERO(){return rs()}get ELEMENTS(){return 16}get RANK(){return 4}get INDICES(){return Jo}constructor(e){super(-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0),arguments.length===1&&Array.isArray(e)?this.copy(e):this.identity()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this[3]=e[3],this[4]=e[4],this[5]=e[5],this[6]=e[6],this[7]=e[7],this[8]=e[8],this[9]=e[9],this[10]=e[10],this[11]=e[11],this[12]=e[12],this[13]=e[13],this[14]=e[14],this[15]=e[15],this.check()}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){return this[0]=e,this[1]=t,this[2]=n,this[3]=r,this[4]=i,this[5]=a,this[6]=o,this[7]=s,this[8]=c,this[9]=l,this[10]=u,this[11]=d,this[12]=f,this[13]=p,this[14]=m,this[15]=h,this.check()}setRowMajor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){return this[0]=e,this[1]=i,this[2]=c,this[3]=f,this[4]=t,this[5]=a,this[6]=l,this[7]=p,this[8]=n,this[9]=o,this[10]=u,this[11]=m,this[12]=r,this[13]=s,this[14]=d,this[15]=h,this.check()}toRowMajor(e){return e[0]=this[0],e[1]=this[4],e[2]=this[8],e[3]=this[12],e[4]=this[1],e[5]=this[5],e[6]=this[9],e[7]=this[13],e[8]=this[2],e[9]=this[6],e[10]=this[10],e[11]=this[14],e[12]=this[3],e[13]=this[7],e[14]=this[11],e[15]=this[15],e}identity(){return this.copy($o)}fromObject(e){return this.check()}fromQuaternion(e){return Ro(this,e),this.check()}frustum(e){let{left:t,right:n,bottom:r,top:i,near:a=Zo,far:o=Qo}=e;return o===1/0?os(this,t,n,r,i,a):zo(this,t,n,r,i,a,o),this.check()}lookAt(e){let{eye:t,center:n=[0,0,0],up:r=[0,1,0]}=e;return Wo(this,t,n,r),this.check()}ortho(e){let{left:t,right:n,bottom:r,top:i,near:a=Zo,far:o=Qo}=e;return Uo(this,t,n,r,i,a,o),this.check()}orthographic(e){let{fovy:t=Yo,aspect:n=Xo,focalDistance:r=1,near:i=Zo,far:a=Qo}=e;as(t);let o=t/2,s=r*Math.tan(o),c=s*n;return this.ortho({left:-c,right:c,bottom:-s,top:s,near:i,far:a})}perspective(e){let{fovy:t=45*Math.PI/180,aspect:n=1,near:r=.1,far:i=500}=e;return as(t),Vo(this,t,n,r,i),this.check()}determinant(){return Ao(this)}getScale(e=[-0,-0,-0]){return e[0]=Math.sqrt(this[0]*this[0]+this[1]*this[1]+this[2]*this[2]),e[1]=Math.sqrt(this[4]*this[4]+this[5]*this[5]+this[6]*this[6]),e[2]=Math.sqrt(this[8]*this[8]+this[9]*this[9]+this[10]*this[10]),e}getTranslation(e=[-0,-0,-0]){return e[0]=this[12],e[1]=this[13],e[2]=this[14],e}getRotation(e,t){e||=[-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0],t||=[-0,-0,-0];let n=this.getScale(t),r=1/n[0],i=1/n[1],a=1/n[2];return e[0]=this[0]*r,e[1]=this[1]*i,e[2]=this[2]*a,e[3]=0,e[4]=this[4]*r,e[5]=this[5]*i,e[6]=this[6]*a,e[7]=0,e[8]=this[8]*r,e[9]=this[9]*i,e[10]=this[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}getRotationMatrix3(e,t){e||=[-0,-0,-0,-0,-0,-0,-0,-0,-0],t||=[-0,-0,-0];let n=this.getScale(t),r=1/n[0],i=1/n[1],a=1/n[2];return e[0]=this[0]*r,e[1]=this[1]*i,e[2]=this[2]*a,e[3]=this[4]*r,e[4]=this[5]*i,e[5]=this[6]*a,e[6]=this[8]*r,e[7]=this[9]*i,e[8]=this[10]*a,e}transpose(){return Oo(this,this),this.check()}invert(){return ko(this,this),this.check()}multiplyLeft(e){return jo(this,e,this),this.check()}multiplyRight(e){return jo(this,this,e),this.check()}rotateX(e){return Fo(this,this,e),this.check()}rotateY(e){return Io(this,this,e),this.check()}rotateZ(e){return Lo(this,this,e),this.check()}rotateXYZ(e){return this.rotateX(e[0]).rotateY(e[1]).rotateZ(e[2])}rotateAxis(e,t){return Po(this,this,e,t),this.check()}scale(e){return No(this,this,Array.isArray(e)?e:[e,e,e]),this.check()}translate(e){return Mo(this,this,e),this.check()}transform(e,t){return e.length===4?(t=qo(t||[-0,-0,-0,-0],e,this),Ya(t,4),t):this.transformAsPoint(e,t)}transformAsPoint(e,t){let{length:n}=e,r;switch(n){case 2:r=io(t||[-0,-0],e,this);break;case 3:r=ho(t||[-0,-0,-0],e,this);break;default:throw Error(`Illegal vector`)}return Ya(r,e.length),r}transformAsVector(e,t){let n;switch(e.length){case 2:n=oo(t||[-0,-0],e,this);break;case 3:n=so(t||[-0,-0,-0],e,this);break;default:throw Error(`Illegal vector`)}return Ya(n,e.length),n}transformPoint(e,t){return this.transformAsPoint(e,t)}transformVector(e,t){return this.transformAsPoint(e,t)}transformDirection(e,t){return this.transformAsVector(e,t)}makeRotationX(e){return this.identity().rotateX(e)}makeTranslation(e,t,n){return this.identity().translate([e,t,n])}},ts,ns;function rs(){return ts||(ts=new es([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),Object.freeze(ts)),ts}function is(){return ns||(ns=new es,Object.freeze(ns)),ns}function as(e){if(e>Math.PI*2)throw Error(`expected radians`)}function os(e,t,n,r,i,a){let o=2*a/(n-t),s=2*a/(i-r),c=(n+t)/(n-t),l=(i+r)/(i-r),u=-2*a;return e[0]=o,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s,e[6]=0,e[7]=0,e[8]=c,e[9]=l,e[10]=-1,e[11]=-1,e[12]=0,e[13]=0,e[14]=u,e[15]=0,e}function ss(e,t=[],n=0){let r=Math.fround(e),i=e-r;return t[n]=r,t[n+1]=i,t}function cs(e){return e-Math.fround(e)}function ls(e){let t=new Float32Array(32);for(let n=0;n<4;++n)for(let r=0;r<4;++r){let i=n*4+r;ss(e[r*4+n],t,i*2)}return t}function us(e,t=!0){return e??t}function ds(e=[0,0,0],t=!0){return t?e.map(e=>e/255):[...e]}function fs(e,t=!0){let n=ds(e.slice(0,3),t),r=Number.isFinite(e[3]),i=r?e[3]:1;return[n[0],n[1],n[2],t&&r?i/255:i]}var ps=`
layout(std140) uniform fp64arithmeticUniforms {
  uniform float ONE;
  uniform float SPLIT;
} fp64;

/*
About LUMA_FP64_CODE_ELIMINATION_WORKAROUND

The purpose of this workaround is to prevent shader compilers from
optimizing away necessary arithmetic operations by swapping their sequences
or transform the equation to some 'equivalent' form.

These helpers implement Dekker/Veltkamp-style error tracking. If the compiler
folds constants or reassociates the arithmetic, the high/low split can stop
tracking the rounding error correctly. That failure mode tends to look fine in
simple coordinate setup, but then breaks down inside iterative arithmetic such
as fp64 Mandelbrot loops.

The method is to multiply an artifical variable, ONE, which will be known to
the compiler to be 1 only at runtime. The whole expression is then represented
as a polynomial with respective to ONE. In the coefficients of all terms, only one a
and one b should appear

err = (a + b) * ONE^6 - a * ONE^5 - (a + b) * ONE^4 + a * ONE^3 - b - (a + b) * ONE^2 + a * ONE
*/

float prevent_fp64_optimization(float value) {
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  return value + fp64.ONE * 0.0;
#else
  return value;
#endif
}

// Divide float number to high and low floats to extend fraction bits
vec2 split(float a) {
  // Keep SPLIT as a runtime uniform so the compiler cannot fold the Dekker
  // split into a constant expression and reassociate the recovery steps.
  float split = prevent_fp64_optimization(fp64.SPLIT);
  float t = prevent_fp64_optimization(a * split);
  float temp = t - a;
  float a_hi = t - temp;
  float a_lo = a - a_hi;
  return vec2(a_hi, a_lo);
}

// Divide float number again when high float uses too many fraction bits
vec2 split2(vec2 a) {
  vec2 b = split(a.x);
  b.y += a.y;
  return b;
}

// Special sum operation when a > b
vec2 quickTwoSum(float a, float b) {
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float sum = (a + b) * fp64.ONE;
  float err = b - (sum - a) * fp64.ONE;
#else
  float sum = a + b;
  float err = b - (sum - a);
#endif
  return vec2(sum, err);
}

// General sum operation
vec2 twoSum(float a, float b) {
  float s = (a + b);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float v = (s * fp64.ONE - a) * fp64.ONE;
  float err = (a - (s - v) * fp64.ONE) * fp64.ONE * fp64.ONE * fp64.ONE + (b - v);
#else
  float v = s - a;
  float err = (a - (s - v)) + (b - v);
#endif
  return vec2(s, err);
}

vec2 twoSub(float a, float b) {
  float s = (a - b);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float v = (s * fp64.ONE - a) * fp64.ONE;
  float err = (a - (s - v) * fp64.ONE) * fp64.ONE * fp64.ONE * fp64.ONE - (b + v);
#else
  float v = s - a;
  float err = (a - (s - v)) - (b + v);
#endif
  return vec2(s, err);
}

vec2 twoSqr(float a) {
  float prod = a * a;
  vec2 a_fp64 = split(a);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float err = ((a_fp64.x * a_fp64.x - prod) * fp64.ONE + 2.0 * a_fp64.x *
    a_fp64.y * fp64.ONE * fp64.ONE) + a_fp64.y * a_fp64.y * fp64.ONE * fp64.ONE * fp64.ONE;
#else
  float err = ((a_fp64.x * a_fp64.x - prod) + 2.0 * a_fp64.x * a_fp64.y) + a_fp64.y * a_fp64.y;
#endif
  return vec2(prod, err);
}

vec2 twoProd(float a, float b) {
  float prod = a * b;
  vec2 a_fp64 = split(a);
  vec2 b_fp64 = split(b);
  // twoProd is especially sensitive because mul_fp64 and div_fp64 both depend
  // on the split terms and cross terms staying in the original evaluation
  // order. If the compiler folds or reassociates them, the low part tends to
  // collapse to zero or NaN on some drivers.
  float highProduct = prevent_fp64_optimization(a_fp64.x * b_fp64.x);
  float crossProduct1 = prevent_fp64_optimization(a_fp64.x * b_fp64.y);
  float crossProduct2 = prevent_fp64_optimization(a_fp64.y * b_fp64.x);
  float lowProduct = prevent_fp64_optimization(a_fp64.y * b_fp64.y);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float err1 = (highProduct - prod) * fp64.ONE;
  float err2 = crossProduct1 * fp64.ONE * fp64.ONE;
  float err3 = crossProduct2 * fp64.ONE * fp64.ONE * fp64.ONE;
  float err4 = lowProduct * fp64.ONE * fp64.ONE * fp64.ONE * fp64.ONE;
#else
  float err1 = highProduct - prod;
  float err2 = crossProduct1;
  float err3 = crossProduct2;
  float err4 = lowProduct;
#endif
  float err = ((err1 + err2) + err3) + err4;
  return vec2(prod, err);
}

vec2 sum_fp64(vec2 a, vec2 b) {
  vec2 s, t;
  s = twoSum(a.x, b.x);
  t = twoSum(a.y, b.y);
  s.y += t.x;
  s = quickTwoSum(s.x, s.y);
  s.y += t.y;
  s = quickTwoSum(s.x, s.y);
  return s;
}

vec2 sub_fp64(vec2 a, vec2 b) {
  vec2 s, t;
  s = twoSub(a.x, b.x);
  t = twoSub(a.y, b.y);
  s.y += t.x;
  s = quickTwoSum(s.x, s.y);
  s.y += t.y;
  s = quickTwoSum(s.x, s.y);
  return s;
}

vec2 mul_fp64(vec2 a, vec2 b) {
  vec2 prod = twoProd(a.x, b.x);
  // y component is for the error
  prod.y += a.x * b.y;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  prod.y += a.y * b.x;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  return prod;
}

vec2 div_fp64(vec2 a, vec2 b) {
  float xn = 1.0 / b.x;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  vec2 yn = mul_fp64(a, vec2(xn, 0));
#else
  vec2 yn = a * xn;
#endif
  float diff = (sub_fp64(a, mul_fp64(b, yn))).x;
  vec2 prod = twoProd(xn, diff);
  return sum_fp64(yn, prod);
}

vec2 sqrt_fp64(vec2 a) {
  if (a.x == 0.0 && a.y == 0.0) return vec2(0.0, 0.0);
  if (a.x < 0.0) return vec2(0.0 / 0.0, 0.0 / 0.0);

  float x = 1.0 / sqrt(a.x);
  float yn = a.x * x;
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  vec2 yn_sqr = twoSqr(yn) * fp64.ONE;
#else
  vec2 yn_sqr = twoSqr(yn);
#endif
  float diff = sub_fp64(a, yn_sqr).x;
  vec2 prod = twoProd(x * 0.5, diff);
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  return sum_fp64(split(yn), prod);
#else
  return sum_fp64(vec2(yn, 0.0), prod);
#endif
}
`,ms={name:`fp64arithmetic`,source:`struct Fp64ArithmeticUniforms {
  ONE: f32,
  SPLIT: f32,
};

@group(0) @binding(auto) var<uniform> fp64arithmetic : Fp64ArithmeticUniforms;

#ifndef LUMA_FP64_F32_INPUT_ONLY
struct Fp64Bits {
  sign: u32,
  exponent: i32,
  significand: vec2u,
  isZero: bool,
  isInf: bool,
  isNan: bool,
};
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_nan(seed: f32) -> f32 {
  let nanBits = 0x7fc00000u | select(0u, 1u, seed < 0.0);
  return bitcast<f32>(nanBits);
}
#endif

fn fp64_u64_is_zero(value: vec2u) -> bool {
  return value.x == 0u && value.y == 0u;
}

fn fp64_u64_compare(a: vec2u, b: vec2u) -> i32 {
  if (a.x != b.x) {
    return select(-1, 1, a.x > b.x);
  }
  if (a.y != b.y) {
    return select(-1, 1, a.y > b.y);
  }
  return 0;
}

fn fp64_u64_add(a: vec2u, b: vec2u) -> vec2u {
  let low = a.y + b.y;
  let carry = select(0u, 1u, low < a.y);
  return vec2u(a.x + b.x + carry, low);
}

fn fp64_u64_sub(a: vec2u, b: vec2u) -> vec2u {
  let borrow = select(0u, 1u, a.y < b.y);
  return vec2u(a.x - b.x - borrow, a.y - b.y);
}

fn fp64_u64_shift_left(value: vec2u, shift: u32) -> vec2u {
  if (shift == 0u) {
    return value;
  }
  if (shift < 32u) {
    return vec2u((value.x << shift) | (value.y >> (32u - shift)), value.y << shift);
  }
  if (shift == 32u) {
    return vec2u(value.y, 0u);
  }
  if (shift < 64u) {
    return vec2u(value.y << (shift - 32u), 0u);
  }
  return vec2u(0u);
}

fn fp64_u64_shift_right(value: vec2u, shift: u32) -> vec2u {
  if (shift == 0u) {
    return value;
  }
  if (shift < 32u) {
    return vec2u(value.x >> shift, (value.y >> shift) | (value.x << (32u - shift)));
  }
  if (shift == 32u) {
    return vec2u(0u, value.x);
  }
  if (shift < 64u) {
    return vec2u(0u, value.x >> (shift - 32u));
  }
  return vec2u(0u);
}

fn fp64_u64_get_bit(value: vec2u, bitIndex: u32) -> bool {
  if (bitIndex >= 64u) {
    return false;
  }
  if (bitIndex >= 32u) {
    return ((value.x >> (bitIndex - 32u)) & 1u) != 0u;
  }
  return ((value.y >> bitIndex) & 1u) != 0u;
}

fn fp64_u64_has_bits_below(value: vec2u, bitCount: u32) -> bool {
  if (bitCount == 0u) {
    return false;
  }
  if (bitCount >= 64u) {
    return !fp64_u64_is_zero(value);
  }
  if (bitCount > 32u) {
    let highBitCount = bitCount - 32u;
    let highMask = (1u << highBitCount) - 1u;
    return value.y != 0u || (value.x & highMask) != 0u;
  }
  if (bitCount == 32u) {
    return value.y != 0u;
  }
  let lowMask = (1u << bitCount) - 1u;
  return (value.y & lowMask) != 0u;
}

#ifndef LUMA_FP64_F32_INPUT_ONLY
fn fp64_u64_shift_right_sticky(value: vec2u, shift: u32) -> vec2u {
  var shifted = fp64_u64_shift_right(value, shift);
  if (fp64_u64_has_bits_below(value, shift)) {
    shifted.y = shifted.y | 1u;
  }
  return shifted;
}
#endif

fn fp64_u64_count_leading_zeros(value: vec2u) -> u32 {
  if (value.x != 0u) {
    return countLeadingZeros(value.x);
  }
  return 32u + countLeadingZeros(value.y);
}

fn fp64_round_shift_right_to_u32(value: vec2u, shift: u32) -> u32 {
  if (shift == 0u) {
    return value.y;
  }

  let truncated = fp64_u64_shift_right(value, shift);
  var rounded = truncated.y;
  let guard = fp64_u64_get_bit(value, shift - 1u);
  let hasTrailingBits = fp64_u64_has_bits_below(value, shift - 1u);
  if (guard && (hasTrailingBits || (rounded & 1u) == 1u)) {
    rounded = rounded + 1u;
  }
  return rounded;
}

#ifndef LUMA_FP64_F32_INPUT_ONLY
fn fp64_round_shift_right(value: vec2u, shift: u32) -> vec2u {
  if (shift == 0u) {
    return value;
  }

  var rounded = fp64_u64_shift_right(value, shift);
  let guard = fp64_u64_get_bit(value, shift - 1u);
  let hasTrailingBits = fp64_u64_has_bits_below(value, shift - 1u);
  if (guard && (hasTrailingBits || (rounded.y & 1u) == 1u)) {
    rounded = fp64_u64_add(rounded, vec2u(0u, 1u));
  }
  return rounded;
}
#endif

fn fp64_make_f32_bits_from_u64(sign: u32, significand: vec2u, baseExponent: i32) -> u32 {
  if (fp64_u64_is_zero(significand)) {
    return sign << 31u;
  }

  let leadingZeros = fp64_u64_count_leading_zeros(significand);
  let mostSignificantBit = 63u - leadingZeros;
  var exponent = baseExponent + i32(mostSignificantBit);

  if (exponent > 127) {
    return (sign << 31u) | 0x7f800000u;
  }

  if (exponent >= -126) {
    let shift = i32(mostSignificantBit) - 23;
    var significand24: u32;
    if (shift > 0) {
      significand24 = fp64_round_shift_right_to_u32(significand, u32(shift));
    } else {
      significand24 = fp64_u64_shift_left(significand, u32(-shift)).y;
    }

    if (significand24 >= 0x1000000u) {
      significand24 = significand24 >> 1u;
      exponent = exponent + 1;
      if (exponent > 127) {
        return (sign << 31u) | 0x7f800000u;
      }
    }

    return (sign << 31u) | (u32(exponent + 127) << 23u) | (significand24 & 0x7fffffu);
  }

  let scaleExponent = baseExponent + 149;
  var mantissa: u32;
  if (scaleExponent >= 0) {
    mantissa = fp64_u64_shift_left(significand, u32(scaleExponent)).y;
  } else {
    mantissa = fp64_round_shift_right_to_u32(significand, u32(-scaleExponent));
  }

  if (mantissa >= 0x800000u) {
    return (sign << 31u) | 0x00800000u;
  }
  return (sign << 31u) | mantissa;
}

#ifndef LUMA_FP64_F32_INPUT_ONLY
fn fp64_decode_bits(bits: vec2u) -> Fp64Bits {
  let sign = bits.x >> 31u;
  let exponentBits = (bits.x >> 20u) & 0x7ffu;
  let fractionHigh = bits.x & 0xfffffu;
  let fractionLow = bits.y;
  let fraction = vec2u(fractionHigh, fractionLow);

  if (exponentBits == 0x7ffu) {
    let isInf = fp64_u64_is_zero(fraction);
    return Fp64Bits(sign, 0, vec2u(0u), false, isInf, !isInf);
  }

  if (exponentBits == 0u) {
    let isZero = fp64_u64_is_zero(fraction);
    return Fp64Bits(sign, -1022, fraction, isZero, false, false);
  }

  return Fp64Bits(sign, i32(exponentBits) - 1023, vec2u((1u << 20u) | fractionHigh, fractionLow), false, false, false);
}

fn fp64_finite_magnitude_compare(a: Fp64Bits, b: Fp64Bits) -> i32 {
  if (a.exponent != b.exponent) {
    return select(-1, 1, a.exponent > b.exponent);
  }
  return fp64_u64_compare(a.significand, b.significand);
}
#endif

#ifndef LUMA_FP64_F32_INPUT_ONLY
struct Fp64RawF32Bits {
  sign: u32,
  baseExponent: i32,
  significand: u32,
  isZero: bool,
  isInf: bool,
  isNan: bool,
};

// Decode an f32 as (-1)^sign * significand * 2^baseExponent. This shared
// integer representation lets normalization remain independent of the
// selected double-single arithmetic implementation.
fn fp64_decode_raw_f32_bits(bits: u32) -> Fp64RawF32Bits {
  let sign = bits >> 31u;
  let exponentBits = (bits >> 23u) & 0xffu;
  let fraction = bits & 0x7fffffu;

  if (exponentBits == 0xffu) {
    return Fp64RawF32Bits(sign, 0, 0u, false, fraction == 0u, fraction != 0u);
  }
  if (exponentBits == 0u) {
    return Fp64RawF32Bits(sign, -149, fraction, fraction == 0u, false, false);
  }
  return Fp64RawF32Bits(
    sign,
    i32(exponentBits) - 150,
    0x800000u | fraction,
    false,
    false,
    false
  );
}

fn fp64_raw_f32_magnitude_compare(aBits: u32, bBits: u32) -> i32 {
  let aMagnitude = aBits & 0x7fffffffu;
  let bMagnitude = bBits & 0x7fffffffu;
  if (aMagnitude == bMagnitude) {
    return 0;
  }
  return select(-1, 1, aMagnitude > bMagnitude);
}

fn fp64_make_raw_residual_f32_bits(
  exactSign: u32,
  exactMagnitude: vec2u,
  exactBaseExponent: i32,
  highBits: u32
) -> u32 {
  if (fp64_u64_is_zero(exactMagnitude)) {
    return 0u;
  }

  let high = fp64_decode_raw_f32_bits(highBits);
  if (high.isInf || high.isNan) {
    return 0u;
  }
  if (high.isZero) {
    return fp64_make_f32_bits_from_u64(exactSign, exactMagnitude, exactBaseExponent);
  }

  let commonBaseExponent = min(exactBaseExponent, high.baseExponent);
  let exactShift = exactBaseExponent - commonBaseExponent;
  let highShift = high.baseExponent - commonBaseExponent;
  if (exactShift >= 64 || highShift >= 64) {
    return 0u;
  }

  let exactAligned = fp64_u64_shift_left(exactMagnitude, u32(exactShift));
  let highAligned = fp64_u64_shift_left(vec2u(0u, high.significand), u32(highShift));
  let comparison = fp64_u64_compare(exactAligned, highAligned);
  if (comparison == 0) {
    return 0u;
  }

  var residualSign = exactSign;
  var residualMagnitude: vec2u;
  if (comparison > 0) {
    residualMagnitude = fp64_u64_sub(exactAligned, highAligned);
  } else {
    residualSign = exactSign ^ 1u;
    residualMagnitude = fp64_u64_sub(highAligned, exactAligned);
  }
  return fp64_make_f32_bits_from_u64(
    residualSign,
    residualMagnitude,
    commonBaseExponent
  );
}

fn fp64_split_raw_accumulator_bits(
  sign: u32,
  magnitude: vec2u,
  baseExponent: i32
) -> vec2u {
  if (fp64_u64_is_zero(magnitude)) {
    return vec2u(0u);
  }
  let highBits = fp64_make_f32_bits_from_u64(sign, magnitude, baseExponent);
  let rawLowBits = fp64_make_raw_residual_f32_bits(sign, magnitude, baseExponent, highBits);
  let lowBits = select(rawLowBits, 0u, (rawLowBits & 0x7fffffffu) == 0u);
  if ((highBits & 0x7fffffffu) == 0u && (lowBits & 0x7fffffffu) == 0u) {
    return vec2u(0u);
  }
  return vec2u(highBits, lowBits);
}
#endif

#ifndef LUMA_FP64_F32_INPUT_ONLY
// Round an arithmetic accumulator to binary64 before splitting it. The
// aligned add/subtract paths retain three guard bits plus a sticky bit, which
// is sufficient for round-to-nearest-even at the binary64 boundary.
fn fp64_split_binary64_accumulator_bits(
  sign: u32,
  magnitude: vec2u,
  baseExponent: i32
) -> vec2u {
  if (fp64_u64_is_zero(magnitude)) {
    return vec2u(0u);
  }

  let mostSignificantBit = 63u - fp64_u64_count_leading_zeros(magnitude);
  let exponent = baseExponent + i32(mostSignificantBit);
  if (exponent > 1023) {
    return vec2u((sign << 31u) | 0x7f800000u, 0u);
  }

  var roundedMagnitude = magnitude;
  var roundedBaseExponent = baseExponent;
  if (exponent >= -1022) {
    if (mostSignificantBit > 52u) {
      let shift = mostSignificantBit - 52u;
      roundedMagnitude = fp64_round_shift_right(magnitude, shift);
      roundedBaseExponent = baseExponent + i32(shift);
    }
  } else {
    let shift = -1074 - baseExponent;
    if (shift > 0) {
      roundedMagnitude = fp64_round_shift_right(magnitude, u32(shift));
      roundedBaseExponent = -1074;
    }
  }

  if (fp64_u64_is_zero(roundedMagnitude)) {
    return vec2u(0u);
  }
  return fp64_split_raw_accumulator_bits(sign, roundedMagnitude, roundedBaseExponent);
}
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_add_raw_f32_bits(aBits: u32, bBits: u32) -> vec2u {
  let a = fp64_decode_raw_f32_bits(aBits);
  let b = fp64_decode_raw_f32_bits(bBits);

  if (a.isNan || b.isNan) {
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf || b.isInf) {
    if (a.isInf && b.isInf && a.sign != b.sign) {
      return vec2u(0x7fc00000u, 0u);
    }
    return select(vec2u(bBits, 0u), vec2u(aBits, 0u), a.isInf);
  }
  if (a.isZero && b.isZero) {
    return vec2u(0u);
  }
  if (a.isZero) {
    return vec2u(bBits, 0u);
  }
  if (b.isZero) {
    return vec2u(aBits, 0u);
  }

  let exponentDifference = abs(a.baseExponent - b.baseExponent);
  if (exponentDifference > 25) {
    if (fp64_raw_f32_magnitude_compare(aBits, bBits) >= 0) {
      return vec2u(aBits, bBits);
    }
    return vec2u(bBits, aBits);
  }

  let commonBaseExponent = min(a.baseExponent, b.baseExponent);
  let aMagnitude = fp64_u64_shift_left(
    vec2u(0u, a.significand),
    u32(a.baseExponent - commonBaseExponent)
  );
  let bMagnitude = fp64_u64_shift_left(
    vec2u(0u, b.significand),
    u32(b.baseExponent - commonBaseExponent)
  );

  var resultSign = a.sign;
  var resultMagnitude: vec2u;
  if (a.sign == b.sign) {
    resultMagnitude = fp64_u64_add(aMagnitude, bMagnitude);
  } else {
    let comparison = fp64_u64_compare(aMagnitude, bMagnitude);
    if (comparison == 0) {
      return vec2u(0u);
    }
    if (comparison > 0) {
      resultMagnitude = fp64_u64_sub(aMagnitude, bMagnitude);
    } else {
      resultSign = b.sign;
      resultMagnitude = fp64_u64_sub(bMagnitude, aMagnitude);
    }
  }

  return fp64_split_raw_accumulator_bits(
    resultSign,
    resultMagnitude,
    commonBaseExponent
  );
}
#endif

#ifndef LUMA_FP64_F32_INPUT_ONLY
fn fp64_add_aligned_magnitudes_to_fp64_bits(
  sign: u32,
  larger: Fp64Bits,
  smaller: Fp64Bits
) -> vec2u {
  let largeSignificand = fp64_u64_shift_left(larger.significand, 3u);
  let smallSignificand = fp64_u64_shift_right_sticky(
    fp64_u64_shift_left(smaller.significand, 3u),
    u32(larger.exponent - smaller.exponent)
  );
  let resultSignificand = fp64_u64_add(largeSignificand, smallSignificand);
  return fp64_split_binary64_accumulator_bits(
    sign,
    resultSignificand,
    larger.exponent - 55
  );
}

fn fp64_sub_aligned_magnitudes_to_fp64_bits(
  sign: u32,
  larger: Fp64Bits,
  smaller: Fp64Bits
) -> vec2u {
  let largeSignificand = fp64_u64_shift_left(larger.significand, 3u);
  let smallSignificand = fp64_u64_shift_right_sticky(
    fp64_u64_shift_left(smaller.significand, 3u),
    u32(larger.exponent - smaller.exponent)
  );
  let resultSignificand = fp64_u64_sub(largeSignificand, smallSignificand);
  return fp64_split_binary64_accumulator_bits(
    sign,
    resultSignificand,
    larger.exponent - 55
  );
}

fn fp64_add_aligned_magnitudes_to_f32_bits(sign: u32, larger: Fp64Bits, smaller: Fp64Bits) -> u32 {
  let largeSignificand = fp64_u64_shift_left(larger.significand, 3u);
  let smallSignificand = fp64_u64_shift_right_sticky(
    fp64_u64_shift_left(smaller.significand, 3u),
    u32(larger.exponent - smaller.exponent)
  );
  let resultSignificand = fp64_u64_add(largeSignificand, smallSignificand);
  return fp64_make_f32_bits_from_u64(sign, resultSignificand, larger.exponent - 55);
}

fn fp64_sub_aligned_magnitudes_to_f32_bits(sign: u32, larger: Fp64Bits, smaller: Fp64Bits) -> u32 {
  let largeSignificand = fp64_u64_shift_left(larger.significand, 3u);
  let smallSignificand = fp64_u64_shift_right_sticky(
    fp64_u64_shift_left(smaller.significand, 3u),
    u32(larger.exponent - smaller.exponent)
  );
  let resultSignificand = fp64_u64_sub(largeSignificand, smallSignificand);
  return fp64_make_f32_bits_from_u64(sign, resultSignificand, larger.exponent - 55);
}

// Subtract two raw binary64 values and round the exact result once to f32.
// The input words are canonical high/low words: .x contains sign/exponent/high
// fraction bits, and .y contains the low 32 fraction bits.
fn sub_fp64u32_to_f32_bits(aBits: vec2u, bBits: vec2u) -> u32 {
  let a = fp64_decode_bits(aBits);
  let b = fp64_decode_bits(bBits);
  let bSubtractionSign = b.sign ^ 1u;

  if (a.isNan || b.isNan) {
    return 0x7fc00000u;
  }
  if (a.isInf && b.isInf) {
    if (a.sign == bSubtractionSign) {
      return (a.sign << 31u) | 0x7f800000u;
    }
    return 0x7fc00000u;
  }
  if (a.isInf) {
    return (a.sign << 31u) | 0x7f800000u;
  }
  if (b.isInf) {
    return (bSubtractionSign << 31u) | 0x7f800000u;
  }
  if (a.isZero && b.isZero) {
    return select(0u, 0x80000000u, a.sign == 1u && b.sign == 0u);
  }

  let magnitudeComparison = fp64_finite_magnitude_compare(a, b);
  if (a.sign == bSubtractionSign) {
    if (magnitudeComparison >= 0) {
      return fp64_add_aligned_magnitudes_to_f32_bits(a.sign, a, b);
    }
    return fp64_add_aligned_magnitudes_to_f32_bits(a.sign, b, a);
  }

  if (magnitudeComparison == 0) {
    return 0u;
  }
  if (magnitudeComparison > 0) {
    return fp64_sub_aligned_magnitudes_to_f32_bits(a.sign, a, b);
  }
  return fp64_sub_aligned_magnitudes_to_f32_bits(bSubtractionSign, b, a);
}

fn sub_fp64u32_to_f32(aBits: vec2u, bBits: vec2u) -> f32 {
  return bitcast<f32>(sub_fp64u32_to_f32_bits(aBits, bBits));
}

// Subtract two raw binary64 values, round once to binary64, then split the
// result into normalized f32 limbs. Finite results must fit within the f32
// exponent range; larger magnitudes map to infinity and smaller magnitudes
// map to zero. The input words use canonical high/low word order.
fn sub_fp64u32_to_fp64_bits(aBits: vec2u, bBits: vec2u) -> vec2u {
  let a = fp64_decode_bits(aBits);
  let b = fp64_decode_bits(bBits);
  let bSubtractionSign = b.sign ^ 1u;

  if (a.isNan || b.isNan) {
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf && b.isInf) {
    if (a.sign == bSubtractionSign) {
      return vec2u((a.sign << 31u) | 0x7f800000u, 0u);
    }
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf) {
    return vec2u((a.sign << 31u) | 0x7f800000u, 0u);
  }
  if (b.isInf) {
    return vec2u((bSubtractionSign << 31u) | 0x7f800000u, 0u);
  }
  if (a.isZero && b.isZero) {
    return vec2u(0u);
  }

  let magnitudeComparison = fp64_finite_magnitude_compare(a, b);
  if (a.sign == bSubtractionSign) {
    if (magnitudeComparison >= 0) {
      return fp64_add_aligned_magnitudes_to_fp64_bits(a.sign, a, b);
    }
    return fp64_add_aligned_magnitudes_to_fp64_bits(a.sign, b, a);
  }

  if (magnitudeComparison == 0) {
    return vec2u(0u);
  }
  if (magnitudeComparison > 0) {
    return fp64_sub_aligned_magnitudes_to_fp64_bits(a.sign, a, b);
  }
  return fp64_sub_aligned_magnitudes_to_fp64_bits(bSubtractionSign, b, a);
}

fn sub_fp64u32_to_fp64(aBits: vec2u, bBits: vec2u) -> vec2f {
  let resultBits = sub_fp64u32_to_fp64_bits(aBits, bBits);
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_runtime_zero() -> f32 {
  return fp64arithmetic.ONE * 0.0;
}

fn prevent_fp64_optimization(value: f32) -> f32 {
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  return value + fp64_runtime_zero();
#else
  return value;
#endif
}
#endif

#ifdef LUMA_FP64_INTEGER_ARITHMETIC
struct Fp64F32Bits {
  sign: u32,
  baseExponent: i32,
  significand: u32,
  isZero: bool,
  isInf: bool,
  isNan: bool,
};

// Decode an f32 as (-1)^sign * significand * 2^baseExponent.
fn fp64_decode_f32_bits(bits: u32) -> Fp64F32Bits {
  let sign = bits >> 31u;
  let exponentBits = (bits >> 23u) & 0xffu;
  let fraction = bits & 0x7fffffu;

  if (exponentBits == 0xffu) {
    return Fp64F32Bits(sign, 0, 0u, false, fraction == 0u, fraction != 0u);
  }
  if (exponentBits == 0u) {
    return Fp64F32Bits(sign, -149, fraction, fraction == 0u, false, false);
  }
  return Fp64F32Bits(sign, i32(exponentBits) - 150, 0x800000u | fraction, false, false, false);
}

fn fp64_f32_magnitude_compare(aBits: u32, bBits: u32) -> i32 {
  let aMagnitude = aBits & 0x7fffffffu;
  let bMagnitude = bBits & 0x7fffffffu;
  if (aMagnitude == bMagnitude) {
    return 0;
  }
  return select(-1, 1, aMagnitude > bMagnitude);
}

fn fp64_make_residual_f32_bits(
  exactSign: u32,
  exactMagnitude: vec2u,
  exactBaseExponent: i32,
  highBits: u32
) -> u32 {
  if (fp64_u64_is_zero(exactMagnitude)) {
    return 0u;
  }

  let high = fp64_decode_f32_bits(highBits);
  if (high.isInf || high.isNan) {
    return exactSign << 31u;
  }
  if (high.isZero) {
    return fp64_make_f32_bits_from_u64(exactSign, exactMagnitude, exactBaseExponent);
  }

  let commonBaseExponent = min(exactBaseExponent, high.baseExponent);
  let exactShift = exactBaseExponent - commonBaseExponent;
  let highShift = high.baseExponent - commonBaseExponent;

  // A normal two-sum/two-product residual never needs a shift this large.
  // This guard gives deterministic underflow behavior outside that contract.
  if (exactShift >= 64 || highShift >= 64) {
    return exactSign << 31u;
  }

  let exactAligned = fp64_u64_shift_left(exactMagnitude, u32(exactShift));
  let highAligned = fp64_u64_shift_left(vec2u(0u, high.significand), u32(highShift));
  let comparison = fp64_u64_compare(exactAligned, highAligned);
  if (comparison == 0) {
    return 0u;
  }

  var residualSign = exactSign;
  var residualMagnitude: vec2u;
  if (comparison > 0) {
    residualMagnitude = fp64_u64_sub(exactAligned, highAligned);
  } else {
    residualSign = exactSign ^ 1u;
    residualMagnitude = fp64_u64_sub(highAligned, exactAligned);
  }
  return fp64_make_f32_bits_from_u64(
    residualSign,
    residualMagnitude,
    commonBaseExponent
  );
}

fn fp64_split_accumulator_bits(
  sign: u32,
  magnitude: vec2u,
  baseExponent: i32
) -> vec2u {
  let highBits = fp64_make_f32_bits_from_u64(sign, magnitude, baseExponent);
  let lowBits = fp64_make_residual_f32_bits(sign, magnitude, baseExponent, highBits);
  return vec2u(highBits, lowBits);
}

fn fp64_two_sum_integer_bits(aBits: u32, bBits: u32) -> vec2u {
  let a = fp64_decode_f32_bits(aBits);
  let b = fp64_decode_f32_bits(bBits);

  if (a.isNan || b.isNan) {
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf || b.isInf) {
    if (a.isInf && b.isInf && a.sign != b.sign) {
      return vec2u(0x7fc00000u, 0u);
    }
    return select(vec2u(bBits, 0u), vec2u(aBits, 0u), a.isInf);
  }
  if (a.isZero && b.isZero) {
    return vec2u((a.sign & b.sign) << 31u, 0u);
  }
  if (a.isZero) {
    return vec2u(bBits, 0u);
  }
  if (b.isZero) {
    return vec2u(aBits, 0u);
  }

  let exponentDifference = select(
    b.baseExponent - a.baseExponent,
    a.baseExponent - b.baseExponent,
    a.baseExponent >= b.baseExponent
  );

  // Beyond half an ulp, rounding cannot change the larger operand. Returning
  // the smaller operand intact also avoids an unbounded integer alignment.
  // At a power-of-two boundary the spacing below the larger operand is half
  // the spacing above it, so an opposite-sign gap-25 operand can still change
  // the rounded high limb. Gap 26 is the first universally safe early-out.
  if (exponentDifference > 25) {
    if (fp64_f32_magnitude_compare(aBits, bBits) >= 0) {
      return vec2u(aBits, bBits);
    }
    return vec2u(bBits, aBits);
  }

  let commonBaseExponent = min(a.baseExponent, b.baseExponent);
  let aMagnitude = fp64_u64_shift_left(
    vec2u(0u, a.significand),
    u32(a.baseExponent - commonBaseExponent)
  );
  let bMagnitude = fp64_u64_shift_left(
    vec2u(0u, b.significand),
    u32(b.baseExponent - commonBaseExponent)
  );

  var resultSign = a.sign;
  var resultMagnitude: vec2u;
  if (a.sign == b.sign) {
    resultMagnitude = fp64_u64_add(aMagnitude, bMagnitude);
  } else {
    let comparison = fp64_u64_compare(aMagnitude, bMagnitude);
    if (comparison == 0) {
      return vec2u(0u, 0u);
    }
    if (comparison > 0) {
      resultMagnitude = fp64_u64_sub(aMagnitude, bMagnitude);
    } else {
      resultSign = b.sign;
      resultMagnitude = fp64_u64_sub(bMagnitude, aMagnitude);
    }
  }

  return fp64_split_accumulator_bits(resultSign, resultMagnitude, commonBaseExponent);
}

fn fp64_two_sum_integer(a: f32, b: f32) -> vec2f {
  let resultBits = fp64_two_sum_integer_bits(bitcast<u32>(a), bitcast<u32>(b));
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}

fn fp64_multiply_significands(a: u32, b: u32) -> vec2u {
  let aLow = a & 0xffffu;
  let aHigh = a >> 16u;
  let bLow = b & 0xffffu;
  let bHigh = b >> 16u;
  let lowProduct = aLow * bLow;
  let crossProduct = aLow * bHigh + aHigh * bLow;
  let highProduct = aHigh * bHigh;

  var result = vec2u(0u, lowProduct);
  result = fp64_u64_add(
    result,
    fp64_u64_shift_left(vec2u(0u, crossProduct), 16u)
  );
  result = fp64_u64_add(result, vec2u(highProduct, 0u));
  return result;
}

fn fp64_two_prod_integer_bits(aBits: u32, bBits: u32) -> vec2u {
  let a = fp64_decode_f32_bits(aBits);
  let b = fp64_decode_f32_bits(bBits);
  let resultSign = a.sign ^ b.sign;

  if (a.isNan || b.isNan || ((a.isZero || b.isZero) && (a.isInf || b.isInf))) {
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf || b.isInf) {
    return vec2u((resultSign << 31u) | 0x7f800000u, resultSign << 31u);
  }
  if (a.isZero || b.isZero) {
    return vec2u(resultSign << 31u, resultSign << 31u);
  }

  let magnitude = fp64_multiply_significands(a.significand, b.significand);
  return fp64_split_accumulator_bits(
    resultSign,
    magnitude,
    a.baseExponent + b.baseExponent
  );
}

fn fp64_two_prod_integer(a: f32, b: f32) -> vec2f {
  let resultBits = fp64_two_prod_integer_bits(bitcast<u32>(a), bitcast<u32>(b));
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}

fn fp64_round_add_integer(a: f32, b: f32) -> f32 {
  return fp64_two_sum_integer(a, b).x;
}

fn fp64_round_mul_integer(a: f32, b: f32) -> f32 {
  return fp64_two_prod_integer(a, b).x;
}

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_f32_finite_exponent(value: Fp64F32Bits) -> i32 {
  let mostSignificantBit = 31u - countLeadingZeros(value.significand);
  return value.baseExponent + i32(mostSignificantBit);
}

fn fp64_scale_f32_integer(value: f32, exponent: i32) -> f32 {
  let decoded = fp64_decode_f32_bits(bitcast<u32>(value));
  if (decoded.isZero || decoded.isInf || decoded.isNan) {
    return value;
  }
  let resultBits = fp64_make_f32_bits_from_u64(
    decoded.sign,
    vec2u(0u, decoded.significand),
    decoded.baseExponent + exponent
  );
  return bitcast<f32>(resultBits);
}

// Divide normalized significands so the hardware operation cannot overflow,
// underflow, or flush a subnormal result. Reapply the exponent with integer
// packing, which also produces subnormal correction limbs without relying on
// floating-point arithmetic to preserve them.
fn fp64_divide_f32_integer(aValue: f32, bValue: f32) -> f32 {
  let a = fp64_decode_f32_bits(bitcast<u32>(aValue));
  let b = fp64_decode_f32_bits(bitcast<u32>(bValue));
  if (a.isZero || b.isZero || a.isInf || b.isInf || a.isNan || b.isNan) {
    return aValue / bValue;
  }

  let aMostSignificantBit = 31u - countLeadingZeros(a.significand);
  let bMostSignificantBit = 31u - countLeadingZeros(b.significand);
  let normalizedABits = fp64_make_f32_bits_from_u64(
    a.sign,
    vec2u(0u, a.significand),
    -i32(aMostSignificantBit)
  );
  let normalizedBBits = fp64_make_f32_bits_from_u64(
    b.sign,
    vec2u(0u, b.significand),
    -i32(bMostSignificantBit)
  );
  let normalizedQuotient = bitcast<f32>(normalizedABits) / bitcast<f32>(normalizedBBits);
  let quotient = fp64_decode_f32_bits(bitcast<u32>(normalizedQuotient));
  let exponentShift =
    a.baseExponent + i32(aMostSignificantBit) -
    b.baseExponent - i32(bMostSignificantBit);
  let quotientBits = fp64_make_f32_bits_from_u64(
    quotient.sign,
    vec2u(0u, quotient.significand),
    quotient.baseExponent + exponentShift
  );
  return bitcast<f32>(quotientBits);
}
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn split(a: f32) -> vec2f {
  let aBits = bitcast<u32>(a);
  let decoded = fp64_decode_f32_bits(aBits);
  if (decoded.isZero || decoded.isInf || decoded.isNan) {
    return vec2f(a, 0.0);
  }

  var roundedHigh = decoded.significand >> 12u;
  let remainder = decoded.significand & 0xfffu;
  if (remainder > 0x800u || (remainder == 0x800u && (roundedHigh & 1u) == 1u)) {
    roundedHigh = roundedHigh + 1u;
  }
  var highMagnitude = vec2u(0u, roundedHigh << 12u);
  var highBits = fp64_make_f32_bits_from_u64(
    decoded.sign,
    highMagnitude,
    decoded.baseExponent
  );
  // Rounding the high limb of a maximum-exponent value can overflow even
  // though the original value is finite. Truncate only in that boundary case
  // so split remains an exact finite decomposition.
  if (fp64_decode_f32_bits(highBits).isInf) {
    roundedHigh = decoded.significand >> 12u;
    highMagnitude = vec2u(0u, roundedHigh << 12u);
    highBits = fp64_make_f32_bits_from_u64(
      decoded.sign,
      highMagnitude,
      decoded.baseExponent
    );
  }
  let lowBits = fp64_make_residual_f32_bits(
    decoded.sign,
    vec2u(0u, decoded.significand),
    decoded.baseExponent,
    highBits
  );
  return vec2f(bitcast<f32>(highBits), bitcast<f32>(lowBits));
}

fn split2(a: vec2f) -> vec2f {
  var result = split(a.x);
  result.y = fp64_round_add_integer(result.y, a.y);
  return result;
}
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn quickTwoSum(a: f32, b: f32) -> vec2f {
  return fp64_two_sum_integer(a, b);
}
#endif

fn twoSum(a: f32, b: f32) -> vec2f {
  return fp64_two_sum_integer(a, b);
}

fn twoSub(a: f32, b: f32) -> vec2f {
  let bBits = bitcast<u32>(b) ^ 0x80000000u;
  let resultBits = fp64_two_sum_integer_bits(bitcast<u32>(a), bBits);
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}

#ifndef LUMA_FP64_PREDICATE_ONLY
fn twoSqr(a: f32) -> vec2f {
  return fp64_two_prod_integer(a, a);
}

fn twoProd(a: f32, b: f32) -> vec2f {
  return fp64_two_prod_integer(a, b);
}
#endif

fn sum_fp64(a: vec2f, b: vec2f) -> vec2f {
  var sum = fp64_two_sum_integer(a.x, b.x);
  let lowSum = fp64_two_sum_integer(a.y, b.y);
  sum.y = fp64_round_add_integer(sum.y, lowSum.x);
  sum = fp64_two_sum_integer(sum.x, sum.y);
  sum.y = fp64_round_add_integer(sum.y, lowSum.y);
  return fp64_two_sum_integer(sum.x, sum.y);
}

fn sub_fp64(a: vec2f, b: vec2f) -> vec2f {
  let negatedB = vec2f(
    bitcast<f32>(bitcast<u32>(b.x) ^ 0x80000000u),
    bitcast<f32>(bitcast<u32>(b.y) ^ 0x80000000u)
  );
  return sum_fp64(a, negatedB);
}

fn mul_fp64(a: vec2f, b: vec2f) -> vec2f {
  var product = fp64_two_prod_integer(a.x, b.x);
  let crossProduct1 = fp64_round_mul_integer(a.x, b.y);
  product.y = fp64_round_add_integer(product.y, crossProduct1);
  product = fp64_two_sum_integer(product.x, product.y);
  let crossProduct2 = fp64_round_mul_integer(a.y, b.x);
  product.y = fp64_round_add_integer(product.y, crossProduct2);
  return fp64_two_sum_integer(product.x, product.y);
}

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_scale_fp64_integer(value: vec2f, exponent: i32) -> vec2f {
  let high = fp64_scale_f32_integer(value.x, exponent);
  let low = fp64_scale_f32_integer(value.y, exponent);
  return sum_fp64(vec2f(high, 0.0), vec2f(low, 0.0));
}

fn fp64_div_fp64_normalized(a: vec2f, b: vec2f) -> vec2f {
  let quotientHigh = fp64_divide_f32_integer(a.x, b.x);
  var quotient = vec2f(quotientHigh, 0.0);

  let remainder = sub_fp64(a, mul_fp64(b, quotient));
  let quotientLow = fp64_divide_f32_integer(remainder.x, b.x);
  quotient = sum_fp64(quotient, vec2f(quotientLow, 0.0));

  let secondRemainder = sub_fp64(a, mul_fp64(b, quotient));
  let correction = fp64_divide_f32_integer(secondRemainder.x, b.x);
  return sum_fp64(quotient, vec2f(correction, 0.0));
}

fn div_fp64(a: vec2f, b: vec2f) -> vec2f {
  let decodedA = fp64_decode_f32_bits(bitcast<u32>(a.x));
  let decodedB = fp64_decode_f32_bits(bitcast<u32>(b.x));
  if (
    decodedA.isZero || decodedB.isZero ||
    decodedA.isInf || decodedB.isInf ||
    decodedA.isNan || decodedB.isNan
  ) {
    return fp64_div_fp64_normalized(a, b);
  }

  let exponentA = fp64_f32_finite_exponent(decodedA);
  let exponentB = fp64_f32_finite_exponent(decodedB);
  // Correct the quotient near unity so b * q and the remainder stay clear of
  // both f32 underflow and overflow. The exponent difference is applied once.
  let normalizedA = fp64_scale_fp64_integer(a, -exponentA);
  let normalizedB = fp64_scale_fp64_integer(b, -exponentB);
  let normalizedQuotient = fp64_div_fp64_normalized(normalizedA, normalizedB);
  return fp64_scale_fp64_integer(normalizedQuotient, exponentA - exponentB);
}

fn fp64_sqrt_fp64_normalized(a: vec2f) -> vec2f {
  let estimate = sqrt(a.x);
  let difference = sub_fp64(a, fp64_two_prod_integer(estimate, estimate)).x;
  let denominator = fp64_round_add_integer(estimate, estimate);
  let correction = fp64_divide_f32_integer(difference, denominator);
  return sum_fp64(vec2f(estimate, 0.0), vec2f(correction, 0.0));
}

fn sqrt_fp64(a: vec2f) -> vec2f {
  let decoded = fp64_decode_f32_bits(bitcast<u32>(a.x));
  let decodedLow = fp64_decode_f32_bits(bitcast<u32>(a.y));
  if (decoded.isZero && decodedLow.isZero) {
    return vec2f(0.0, 0.0);
  }
  if (decoded.sign == 1u) {
    let nanValue = fp64_nan(a.x);
    return vec2f(nanValue, nanValue);
  }

  if (decoded.isInf || decoded.isNan) {
    return fp64_sqrt_fp64_normalized(a);
  }
  let exponent = fp64_f32_finite_exponent(decoded);
  // An even scale lets the final square-root rescale use an integer exponent.
  let evenExponent = exponent - (exponent & 1);
  let normalizedA = fp64_scale_fp64_integer(a, -evenExponent);
  let normalizedRoot = fp64_sqrt_fp64_normalized(normalizedA);
  return fp64_scale_fp64_integer(normalizedRoot, evenExponent / 2);
}
#endif

#else
fn split(a: f32) -> vec2f {
  let splitValue = prevent_fp64_optimization(fp64arithmetic.SPLIT + fp64_runtime_zero());
  let t = prevent_fp64_optimization(a * splitValue);
  let temp = prevent_fp64_optimization(t - a);
  let aHi = prevent_fp64_optimization(t - temp);
  let aLo = prevent_fp64_optimization(a - aHi);
  return vec2f(aHi, aLo);
}

fn split2(a: vec2f) -> vec2f {
  var b = split(a.x);
  b.y = b.y + a.y;
  return b;
}

fn quickTwoSum(a: f32, b: f32) -> vec2f {
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let sum = prevent_fp64_optimization((a + b) * fp64arithmetic.ONE);
  let err = prevent_fp64_optimization(b - (sum - a) * fp64arithmetic.ONE);
#else
  let sum = prevent_fp64_optimization(a + b);
  let err = prevent_fp64_optimization(b - (sum - a));
#endif
  return vec2f(sum, err);
}

fn twoSum(a: f32, b: f32) -> vec2f {
  let s = prevent_fp64_optimization(a + b);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let v = prevent_fp64_optimization((s * fp64arithmetic.ONE - a) * fp64arithmetic.ONE);
  let err =
    prevent_fp64_optimization((a - (s - v) * fp64arithmetic.ONE) *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE) +
    prevent_fp64_optimization(b - v);
#else
  let v = prevent_fp64_optimization(s - a);
  let err = prevent_fp64_optimization(a - (s - v)) + prevent_fp64_optimization(b - v);
#endif
  return vec2f(s, err);
}

fn twoSub(a: f32, b: f32) -> vec2f {
  let s = prevent_fp64_optimization(a - b);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let v = prevent_fp64_optimization((s * fp64arithmetic.ONE - a) * fp64arithmetic.ONE);
  let err =
    prevent_fp64_optimization((a - (s - v) * fp64arithmetic.ONE) *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE) -
    prevent_fp64_optimization(b + v);
#else
  let v = prevent_fp64_optimization(s - a);
  let err = prevent_fp64_optimization(a - (s - v)) - prevent_fp64_optimization(b + v);
#endif
  return vec2f(s, err);
}

fn twoSqr(a: f32) -> vec2f {
  let prod = prevent_fp64_optimization(a * a);
  let aFp64 = split(a);
  let highProduct = prevent_fp64_optimization(aFp64.x * aFp64.x);
  let crossProduct = prevent_fp64_optimization(2.0 * aFp64.x * aFp64.y);
  let lowProduct = prevent_fp64_optimization(aFp64.y * aFp64.y);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let err =
    (prevent_fp64_optimization(highProduct - prod) * fp64arithmetic.ONE +
      crossProduct * fp64arithmetic.ONE * fp64arithmetic.ONE) +
    lowProduct * fp64arithmetic.ONE * fp64arithmetic.ONE * fp64arithmetic.ONE;
#else
  let err = ((prevent_fp64_optimization(highProduct - prod) + crossProduct) + lowProduct);
#endif
  return vec2f(prod, err);
}

fn twoProd(a: f32, b: f32) -> vec2f {
  let prod = prevent_fp64_optimization(a * b);
  let aFp64 = split(a);
  let bFp64 = split(b);
  let highProduct = prevent_fp64_optimization(aFp64.x * bFp64.x);
  let crossProduct1 = prevent_fp64_optimization(aFp64.x * bFp64.y);
  let crossProduct2 = prevent_fp64_optimization(aFp64.y * bFp64.x);
  let lowProduct = prevent_fp64_optimization(aFp64.y * bFp64.y);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let err1 = (highProduct - prod) * fp64arithmetic.ONE;
  let err2 = crossProduct1 * fp64arithmetic.ONE * fp64arithmetic.ONE;
  let err3 = crossProduct2 * fp64arithmetic.ONE * fp64arithmetic.ONE * fp64arithmetic.ONE;
  let err4 =
    lowProduct *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE;
#else
  let err1 = highProduct - prod;
  let err2 = crossProduct1;
  let err3 = crossProduct2;
  let err4 = lowProduct;
#endif
  let err12InputA = prevent_fp64_optimization(err1);
  let err12InputB = prevent_fp64_optimization(err2);
  let err12 = prevent_fp64_optimization(err12InputA + err12InputB);
  let err123InputA = prevent_fp64_optimization(err12);
  let err123InputB = prevent_fp64_optimization(err3);
  let err123 = prevent_fp64_optimization(err123InputA + err123InputB);
  let err1234InputA = prevent_fp64_optimization(err123);
  let err1234InputB = prevent_fp64_optimization(err4);
  let err = prevent_fp64_optimization(err1234InputA + err1234InputB);
  return vec2f(prod, err);
}

fn sum_fp64(a: vec2f, b: vec2f) -> vec2f {
  var s = twoSum(a.x, b.x);
  let t = twoSum(a.y, b.y);
  s.y = prevent_fp64_optimization(s.y + t.x);
  s = quickTwoSum(s.x, s.y);
  s.y = prevent_fp64_optimization(s.y + t.y);
  s = quickTwoSum(s.x, s.y);
  return s;
}

fn sub_fp64(a: vec2f, b: vec2f) -> vec2f {
  var s = twoSub(a.x, b.x);
  let t = twoSub(a.y, b.y);
  s.y = prevent_fp64_optimization(s.y + t.x);
  s = quickTwoSum(s.x, s.y);
  s.y = prevent_fp64_optimization(s.y + t.y);
  s = quickTwoSum(s.x, s.y);
  return s;
}

fn mul_fp64(a: vec2f, b: vec2f) -> vec2f {
  var prod = twoProd(a.x, b.x);
  let crossProduct1 = prevent_fp64_optimization(a.x * b.y);
  prod.y = prevent_fp64_optimization(prod.y + crossProduct1);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  let crossProduct2 = prevent_fp64_optimization(a.y * b.x);
  prod.y = prevent_fp64_optimization(prod.y + crossProduct2);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  return prod;
}

#ifndef LUMA_FP64_PREDICATE_ONLY
fn div_fp64(a: vec2f, b: vec2f) -> vec2f {
  let xn = prevent_fp64_optimization(1.0 / b.x);
  let yn = mul_fp64(a, vec2f(xn, fp64_runtime_zero()));
  let diff = prevent_fp64_optimization(sub_fp64(a, mul_fp64(b, yn)).x);
  let prod = twoProd(xn, diff);
  return sum_fp64(yn, prod);
}

fn sqrt_fp64(a: vec2f) -> vec2f {
  if (a.x == 0.0 && a.y == 0.0) {
    return vec2f(0.0, 0.0);
  }
  if (a.x < 0.0) {
    let nanValue = fp64_nan(a.x);
    return vec2f(nanValue, nanValue);
  }

  let x = prevent_fp64_optimization(1.0 / sqrt(a.x));
  let yn = prevent_fp64_optimization(a.x * x);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let ynSqr = twoSqr(yn) * fp64arithmetic.ONE;
#else
  let ynSqr = twoSqr(yn);
#endif
  let diff = prevent_fp64_optimization(sub_fp64(a, ynSqr).x);
  let prod = twoProd(prevent_fp64_optimization(x * 0.5), diff);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  return sum_fp64(split(yn), prod);
#else
  return sum_fp64(vec2f(yn, 0.0), prod);
#endif
}
#endif
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_f32_bits_is_nan(bits: u32) -> bool {
  return (bits & 0x7fffffffu) > 0x7f800000u;
}

fn fp64_f32_bits_is_inf(bits: u32) -> bool {
  return (bits & 0x7fffffffu) == 0x7f800000u;
}

fn fp64_compare_f32_bits(aBits: u32, bBits: u32) -> i32 {
  let aMagnitude = aBits & 0x7fffffffu;
  let bMagnitude = bBits & 0x7fffffffu;
  if (aMagnitude == 0u && bMagnitude == 0u) {
    return 0;
  }
  let aSign = aBits >> 31u;
  let bSign = bBits >> 31u;
  if (aSign != bSign) {
    return select(1, -1, aSign == 1u);
  }
  if (aMagnitude == bMagnitude) {
    return 0;
  }
  let magnitudeComparison = select(-1, 1, aMagnitude > bMagnitude);
  return select(magnitudeComparison, -magnitudeComparison, aSign == 1u);
}

// Normalize an arbitrary pair of finite f32 limbs with integer accumulation.
// This is independent of LUMA_FP64_INTEGER_ARITHMETIC and canonicalizes every
// representation of zero to vec2f(+0.0, +0.0).
fn normalize_fp64(value: vec2f) -> vec2f {
  let resultBits = fp64_add_raw_f32_bits(bitcast<u32>(value.x), bitcast<u32>(value.y));
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}

fn is_nan_fp64(value: vec2f) -> bool {
  let normalized = normalize_fp64(value);
  return fp64_f32_bits_is_nan(bitcast<u32>(normalized.x)) ||
    fp64_f32_bits_is_nan(bitcast<u32>(normalized.y));
}

fn is_finite_fp64(value: vec2f) -> bool {
  let normalized = normalize_fp64(value);
  let highBits = bitcast<u32>(normalized.x);
  let lowBits = bitcast<u32>(normalized.y);
  return !fp64_f32_bits_is_nan(highBits) && !fp64_f32_bits_is_nan(lowBits) &&
    !fp64_f32_bits_is_inf(highBits) && !fp64_f32_bits_is_inf(lowBits);
}

// Returns -1, 0, or 1. NaN is unordered and returns 0; call is_nan_fp64 or
// is_finite_fp64 first when 0 must mean a finite zero.
fn sign_fp64(value: vec2f) -> i32 {
  let normalized = normalize_fp64(value);
  let highBits = bitcast<u32>(normalized.x);
  let lowBits = bitcast<u32>(normalized.y);
  if (fp64_f32_bits_is_nan(highBits) || fp64_f32_bits_is_nan(lowBits)) {
    return 0;
  }
  if ((highBits & 0x7fffffffu) != 0u) {
    return select(1, -1, (highBits >> 31u) == 1u);
  }
  if ((lowBits & 0x7fffffffu) != 0u) {
    return select(1, -1, (lowBits >> 31u) == 1u);
  }
  return 0;
}

// Compares double-single values and returns -1, 0, or 1. NaN is unordered
// and returns 0; callers that require equality semantics must first check
// is_nan_fp64 or is_finite_fp64.
fn compare_fp64(a: vec2f, b: vec2f) -> i32 {
  let normalizedA = normalize_fp64(a);
  let normalizedB = normalize_fp64(b);
  let aHighBits = bitcast<u32>(normalizedA.x);
  let aLowBits = bitcast<u32>(normalizedA.y);
  let bHighBits = bitcast<u32>(normalizedB.x);
  let bLowBits = bitcast<u32>(normalizedB.y);
  if (fp64_f32_bits_is_nan(aHighBits) || fp64_f32_bits_is_nan(aLowBits) ||
      fp64_f32_bits_is_nan(bHighBits) || fp64_f32_bits_is_nan(bLowBits)) {
    return 0;
  }
  let highComparison = fp64_compare_f32_bits(aHighBits, bHighBits);
  if (highComparison != 0) {
    return highComparison;
  }
  return fp64_compare_f32_bits(aLowBits, bLowBits);
}
#endif
`,fs:ps,vs:ps,defaultUniforms:{ONE:1,SPLIT:4097},uniformTypes:{ONE:`f32`,SPLIT:`f32`},fp64ify:ss,fp64LowPart:cs,fp64ifyMatrix4:ls},hs={RGBA8UNORM:0,RGBA16FLOAT:1,RGBA32FLOAT:2},gs={rgba8unorm:4,rgba16float:8,rgba32float:16};hs.RGBA8UNORM,hs.RGBA16FLOAT,hs.RGBA32FLOAT,hs.RGBA8UNORM,hs.RGBA16FLOAT,hs.RGBA32FLOAT;var _s={useByteColors:`f32`},vs={useByteColors:!0};hs.RGBA8UNORM,gs.rgba8unorm/Uint32Array.BYTES_PER_ELEMENT,xs(`colors`);var ys=xs(`floatColors`);Ss(`colors`);var bs=Ss(`floatColors`);`${hs.RGBA8UNORM}${hs.RGBA16FLOAT}`;function xs(e){return`\
layout(std140) uniform ${e}Uniforms {
  float useByteColors;
} ${e};

vec3 ${e}_normalize(vec3 inputColor) {
  return ${e}.useByteColors > 0.5 ? inputColor / 255.0 : inputColor;
}

vec4 ${e}_normalize(vec4 inputColor) {
  return ${e}.useByteColors > 0.5 ? inputColor / 255.0 : inputColor;
}

vec4 ${e}_premultiplyAlpha(vec4 inputColor) {
  return vec4(inputColor.rgb * inputColor.a, inputColor.a);
}

vec4 ${e}_unpremultiplyAlpha(vec4 inputColor) {
  return inputColor.a > 0.0 ? vec4(inputColor.rgb / inputColor.a, inputColor.a) : vec4(0.0);
}

vec4 ${e}_premultiply_alpha(vec4 inputColor) {
  return ${e}_premultiplyAlpha(inputColor);
}

vec4 ${e}_unpremultiply_alpha(vec4 inputColor) {
  return ${e}_unpremultiplyAlpha(inputColor);
}
`}function Ss(e){return`\
struct ${e}Uniforms {
  useByteColors: f32
};

@group(0) @binding(auto) var<uniform> ${e} : ${e}Uniforms;

fn ${e}_normalize(inputColor: vec3<f32>) -> vec3<f32> {
  return select(inputColor, inputColor / 255.0, ${e}.useByteColors > 0.5);
}

fn ${e}_normalize4(inputColor: vec4<f32>) -> vec4<f32> {
  return select(inputColor, inputColor / 255.0, ${e}.useByteColors > 0.5);
}

fn ${e}_premultiplyAlpha(inputColor: vec4<f32>) -> vec4<f32> {
  return vec4<f32>(inputColor.rgb * inputColor.a, inputColor.a);
}

fn ${e}_unpremultiplyAlpha(inputColor: vec4<f32>) -> vec4<f32> {
  return select(
    vec4<f32>(0.0),
    vec4<f32>(inputColor.rgb / inputColor.a, inputColor.a),
    inputColor.a > 0.0
  );
}

fn ${e}_premultiply_alpha(inputColor: vec4<f32>) -> vec4<f32> {
  return ${e}_premultiplyAlpha(inputColor);
}

fn ${e}_unpremultiply_alpha(inputColor: vec4<f32>) -> vec4<f32> {
  return ${e}_unpremultiplyAlpha(inputColor);
}
`}var Cs={name:`floatColors`,props:{},uniforms:{},vs:ys,fs:ys,source:bs,uniformTypes:_s,defaultUniforms:vs},ws={props:{},uniforms:{},name:`picking`,uniformTypes:{isActive:`f32`,isAttribute:`f32`,isHighlightActive:`f32`,useByteColors:`f32`,highlightedObjectColor:`vec3<f32>`,highlightColor:`vec4<f32>`},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useByteColors:!0,highlightedObjectColor:[0,0,0],highlightColor:[0,1,1,1]},vs:`layout(std140) uniform pickingUniforms {
  float isActive;
  float isAttribute;
  float isHighlightActive;
  float useByteColors;
  vec3 highlightedObjectColor;
  vec4 highlightColor;
} picking;

out vec4 picking_vRGBcolor_Avalid;

// Normalize unsigned byte color to 0-1 range
vec3 picking_normalizeColor(vec3 color) {
  return picking.useByteColors > 0.5 ? color / 255.0 : color;
}

// Normalize unsigned byte color to 0-1 range
vec4 picking_normalizeColor(vec4 color) {
  return picking.useByteColors > 0.5 ? color / 255.0 : color;
}

bool picking_isColorZero(vec3 color) {
  return dot(color, vec3(1.0)) < 0.00001;
}

bool picking_isColorValid(vec3 color) {
  return dot(color, vec3(1.0)) > 0.00001;
}

// Check if this vertex is highlighted 
bool isVertexHighlighted(vec3 vertexColor) {
  vec3 highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
  return
    bool(picking.isHighlightActive) && picking_isColorZero(abs(vertexColor - highlightedObjectColor));
}

// Set the current picking color
void picking_setPickingColor(vec3 pickingColor) {
  pickingColor = picking_normalizeColor(pickingColor);

  if (bool(picking.isActive)) {
    // Use alpha as the validity flag. If pickingColor is [0, 0, 0] fragment is non-pickable
    picking_vRGBcolor_Avalid.a = float(picking_isColorValid(pickingColor));

    if (!bool(picking.isAttribute)) {
      // Stores the picking color so that the fragment shader can render it during picking
      picking_vRGBcolor_Avalid.rgb = pickingColor;
    }
  } else {
    // Do the comparison with selected item color in vertex shader as it should mean fewer compares
    picking_vRGBcolor_Avalid.a = float(isVertexHighlighted(pickingColor));
  }
}

void picking_setPickingAttribute(float value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.r = value;
  }
}

void picking_setPickingAttribute(vec2 value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.rg = value;
  }
}

void picking_setPickingAttribute(vec3 value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.rgb = value;
  }
}
`,fs:`layout(std140) uniform pickingUniforms {
  float isActive;
  float isAttribute;
  float isHighlightActive;
  float useByteColors;
  vec3 highlightedObjectColor;
  vec4 highlightColor;
} picking;

in vec4 picking_vRGBcolor_Avalid;

/*
 * Returns highlight color if this item is selected.
 */
vec4 picking_filterHighlightColor(vec4 color) {
  // If we are still picking, we don't highlight
  if (picking.isActive > 0.5) {
    return color;
  }

  bool selected = bool(picking_vRGBcolor_Avalid.a);

  if (selected) {
    // Blend in highlight color based on its alpha value
    float highLightAlpha = picking.highlightColor.a;
    float blendedAlpha = highLightAlpha + color.a * (1.0 - highLightAlpha);
    float highLightRatio = highLightAlpha / blendedAlpha;

    vec3 blendedRGB = mix(color.rgb, picking.highlightColor.rgb, highLightRatio);
    return vec4(blendedRGB, blendedAlpha);
  } else {
    return color;
  }
}

/*
 * Returns picking color if picking enabled else unmodified argument.
 */
vec4 picking_filterPickingColor(vec4 color) {
  if (bool(picking.isActive)) {
    if (picking_vRGBcolor_Avalid.a == 0.0) {
      discard;
    }
    return picking_vRGBcolor_Avalid;
  }
  return color;
}

/*
 * Returns picking color if picking is enabled if not
 * highlight color if this item is selected, otherwise unmodified argument.
 */
vec4 picking_filterColor(vec4 color) {
  vec4 highlightColor = picking_filterHighlightColor(color);
  return picking_filterPickingColor(highlightColor);
}
`,getUniforms:Ts};function Ts(e={},t){let n={},r=us(e.useByteColors,!0);return e.highlightedObjectColor===void 0||(e.highlightedObjectColor===null?n.isHighlightActive=!1:(n.isHighlightActive=!0,n.highlightedObjectColor=e.highlightedObjectColor.slice(0,3))),e.highlightColor&&(n.highlightColor=fs(e.highlightColor,r)),e.isActive!==void 0&&(n.isActive=!!e.isActive,n.isAttribute=!!e.isAttribute),e.useByteColors!==void 0&&(n.useByteColors=!!e.useByteColors),n}var Es=`precision highp int;

// #if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))
struct AmbientLight {
  vec3 color;
};

struct PointLight {
  vec3 color;
  vec3 position;
  vec3 attenuation; // 2nd order x:Constant-y:Linear-z:Exponential
};

struct SpotLight {
  vec3 color;
  vec3 position;
  vec3 direction;
  vec3 attenuation;
  vec2 coneCos;
};

struct DirectionalLight {
  vec3 color;
  vec3 direction;
};

struct UniformLight {
  vec3 color;
  vec3 position;
  vec3 direction;
  vec3 attenuation;
  vec2 coneCos;
};

layout(std140) uniform lightingUniforms {
  int enabled;
  int directionalLightCount;
  int pointLightCount;
  int spotLightCount;
  vec3 ambientColor;
  UniformLight lights[5];
} lighting;

PointLight lighting_getPointLight(int index) {
  UniformLight light = lighting.lights[index];
  return PointLight(light.color, light.position, light.attenuation);
}

SpotLight lighting_getSpotLight(int index) {
  UniformLight light = lighting.lights[lighting.pointLightCount + index];
  return SpotLight(light.color, light.position, light.direction, light.attenuation, light.coneCos);
}

DirectionalLight lighting_getDirectionalLight(int index) {
  UniformLight light =
    lighting.lights[lighting.pointLightCount + lighting.spotLightCount + index];
  return DirectionalLight(light.color, light.direction);
}

float getPointLightAttenuation(PointLight pointLight, float distance) {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

float getSpotLightAttenuation(SpotLight spotLight, vec3 positionWorldspace) {
  vec3 light_direction = normalize(positionWorldspace - spotLight.position);
  float coneFactor = smoothstep(
    spotLight.coneCos.y,
    spotLight.coneCos.x,
    dot(normalize(spotLight.direction), light_direction)
  );
  float distanceAttenuation = getPointLightAttenuation(
    PointLight(spotLight.color, spotLight.position, spotLight.attenuation),
    distance(spotLight.position, positionWorldspace)
  );
  return distanceAttenuation / max(coneFactor, 0.0001);
}

// #endif
`,Ds=`// #if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))
const MAX_LIGHTS: i32 = 5;

struct AmbientLight {
  color: vec3<f32>,
};

struct PointLight {
  color: vec3<f32>,
  position: vec3<f32>,
  attenuation: vec3<f32>, // 2nd order x:Constant-y:Linear-z:Exponential
};

struct SpotLight {
  color: vec3<f32>,
  position: vec3<f32>,
  direction: vec3<f32>,
  attenuation: vec3<f32>,
  coneCos: vec2<f32>,
};

struct DirectionalLight {
  color: vec3<f32>,
  direction: vec3<f32>,
};

struct UniformLight {
  color: vec3<f32>,
  position: vec3<f32>,
  direction: vec3<f32>,
  attenuation: vec3<f32>,
  coneCos: vec2<f32>,
};

struct lightingUniforms {
  enabled: i32,
  directionalLightCount: i32,
  pointLightCount: i32,
  spotLightCount: i32,
  ambientColor: vec3<f32>,
  lights: array<UniformLight, 5>,
};

@group(2) @binding(auto) var<uniform> lighting : lightingUniforms;

fn lighting_getPointLight(index: i32) -> PointLight {
  let light = lighting.lights[index];
  return PointLight(light.color, light.position, light.attenuation);
}

fn lighting_getSpotLight(index: i32) -> SpotLight {
  let light = lighting.lights[lighting.pointLightCount + index];
  return SpotLight(light.color, light.position, light.direction, light.attenuation, light.coneCos);
}

fn lighting_getDirectionalLight(index: i32) -> DirectionalLight {
  let light = lighting.lights[lighting.pointLightCount + lighting.spotLightCount + index];
  return DirectionalLight(light.color, light.direction);
}

fn getPointLightAttenuation(pointLight: PointLight, distance: f32) -> f32 {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

fn getSpotLightAttenuation(spotLight: SpotLight, positionWorldspace: vec3<f32>) -> f32 {
  let lightDirection = normalize(positionWorldspace - spotLight.position);
  let coneFactor = smoothstep(
    spotLight.coneCos.y,
    spotLight.coneCos.x,
    dot(normalize(spotLight.direction), lightDirection)
  );
  let distanceAttenuation = getPointLightAttenuation(
    PointLight(spotLight.color, spotLight.position, spotLight.attenuation),
    distance(spotLight.position, positionWorldspace)
  );
  return distanceAttenuation / max(coneFactor, 0.0001);
}
`,Os=5,ks={props:{},uniforms:{},name:`lighting`,defines:{},uniformTypes:{enabled:`i32`,directionalLightCount:`i32`,pointLightCount:`i32`,spotLightCount:`i32`,ambientColor:`vec3<f32>`,lights:[{color:`vec3<f32>`,position:`vec3<f32>`,direction:`vec3<f32>`,attenuation:`vec3<f32>`,coneCos:`vec2<f32>`},Os]},defaultUniforms:Ps(),bindingLayout:[{name:`lighting`,group:2}],firstBindingSlot:0,source:Ds,vs:Es,fs:Es,getUniforms:As};function As(e,t={}){if(e&&={...e},!e)return Ps();e.lights&&(e={...e,...Ms(e.lights),lights:void 0});let{useByteColors:n,ambientLight:r,pointLights:i,spotLights:a,directionalLights:o}=e||{};if(!(r||i&&i.length>0||a&&a.length>0||o&&o.length>0))return{...Ps(),enabled:0};let s={...Ps(),...js({useByteColors:n,ambientLight:r,pointLights:i,spotLights:a,directionalLights:o})};return e.enabled!==void 0&&(s.enabled=+!!e.enabled),s}function js({useByteColors:e,ambientLight:t,pointLights:n=[],spotLights:r=[],directionalLights:i=[]}){let a=Fs(),o=0,s=0,c=0,l=0;for(let t of n){if(o>=Os)break;a[o]={...a[o],color:Ns(t,e),position:t.position,attenuation:t.attenuation||[1,0,0]},o++,s++}for(let t of r){if(o>=Os)break;a[o]={...a[o],color:Ns(t,e),position:t.position,direction:t.direction,attenuation:t.attenuation||[1,0,0],coneCos:Ls(t)},o++,c++}for(let t of i){if(o>=Os)break;a[o]={...a[o],color:Ns(t,e),direction:t.direction},o++,l++}return n.length+r.length+i.length>Os&&w.warn(`MAX_LIGHTS exceeded, truncating to ${Os}`)(),{ambientColor:Ns(t,e),directionalLightCount:l,pointLightCount:s,spotLightCount:c,lights:a}}function Ms(e){let t={pointLights:[],spotLights:[],directionalLights:[]};for(let n of e||[])switch(n.type){case`ambient`:t.ambientLight=n;break;case`directional`:t.directionalLights?.push(n);break;case`point`:t.pointLights?.push(n);break;case`spot`:t.spotLights?.push(n)}return t}function Ns(e={},t){let{color:n=[0,0,0],intensity:r=1}=e;return ds(n,us(t,!0)).map(e=>e*r)}function Ps(){return{enabled:1,directionalLightCount:0,pointLightCount:0,spotLightCount:0,ambientColor:[.1,.1,.1],lights:Fs()}}function Fs(){return Array.from({length:Os},()=>Is())}function Is(){return{color:[1,1,1],position:[1,1,2],direction:[1,1,1],attenuation:[1,0,0],coneCos:[1,0]}}function Ls(e){let t=e.innerConeAngle??0,n=e.outerConeAngle??Math.PI/4;return[Math.cos(t),Math.cos(n)]}var Rs=`layout(std140) uniform phongMaterialUniforms {
  uniform bool unlit;
  uniform float ambient;
  uniform float diffuse;
  uniform float shininess;
  uniform vec3  specularColor;
} material;
`,zs=`layout(std140) uniform phongMaterialUniforms {
  uniform bool unlit;
  uniform float ambient;
  uniform float diffuse;
  uniform float shininess;
  uniform vec3  specularColor;
} material;

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 light_direction, vec3 view_direction, vec3 normal_worldspace, vec3 color) {
  vec3 halfway_direction = normalize(light_direction + view_direction);
  float lambertian = dot(light_direction, normal_worldspace);
  float specular = 0.0;
  if (lambertian > 0.0) {
    float specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
    specular = pow(specular_angle, material.shininess);
  }
  lambertian = max(lambertian, 0.0);
  return (lambertian * material.diffuse * surfaceColor + specular * floatColors_normalize(material.specularColor)) * color;
}

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {
  vec3 lightColor = surfaceColor;

  if (material.unlit) {
    return surfaceColor;
  }

  if (lighting.enabled == 0) {
    return lightColor;
  }

  vec3 view_direction = normalize(cameraPosition - position_worldspace);
  lightColor = material.ambient * surfaceColor * lighting.ambientColor;

  for (int i = 0; i < lighting.pointLightCount; i++) {
    PointLight pointLight = lighting_getPointLight(i);
    vec3 light_position_worldspace = pointLight.position;
    vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
    float light_attenuation = getPointLightAttenuation(pointLight, distance(light_position_worldspace, position_worldspace));
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color / light_attenuation);
  }

  for (int i = 0; i < lighting.spotLightCount; i++) {
    SpotLight spotLight = lighting_getSpotLight(i);
    vec3 light_position_worldspace = spotLight.position;
    vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
    float light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, spotLight.color / light_attenuation);
  }

  for (int i = 0; i < lighting.directionalLightCount; i++) {
    DirectionalLight directionalLight = lighting_getDirectionalLight(i);
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }
  
  return lightColor;
}
`,Bs=`struct phongMaterialUniforms {
  unlit: u32,
  ambient: f32,
  diffuse: f32,
  shininess: f32,
  specularColor: vec3<f32>,
};

@group(3) @binding(auto) var<uniform> phongMaterial : phongMaterialUniforms;

fn lighting_getLightColor(surfaceColor: vec3<f32>, light_direction: vec3<f32>, view_direction: vec3<f32>, normal_worldspace: vec3<f32>, color: vec3<f32>) -> vec3<f32> {
  let halfway_direction: vec3<f32> = normalize(light_direction + view_direction);
  var lambertian: f32 = dot(light_direction, normal_worldspace);
  var specular: f32 = 0.0;
  if (lambertian > 0.0) {
    let specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
    specular = pow(specular_angle, phongMaterial.shininess);
  }
  lambertian = max(lambertian, 0.0);
  return (
    lambertian * phongMaterial.diffuse * surfaceColor +
    specular * floatColors_normalize(phongMaterial.specularColor)
  ) * color;
}

fn lighting_getLightColor2(surfaceColor: vec3<f32>, cameraPosition: vec3<f32>, position_worldspace: vec3<f32>, normal_worldspace: vec3<f32>) -> vec3<f32> {
  var lightColor: vec3<f32> = surfaceColor;

  if (phongMaterial.unlit != 0u) {
    return surfaceColor;
  }

  if (lighting.enabled == 0) {
    return lightColor;
  }

  let view_direction: vec3<f32> = normalize(cameraPosition - position_worldspace);
  lightColor = phongMaterial.ambient * surfaceColor * lighting.ambientColor;

  for (var i: i32 = 0; i < lighting.pointLightCount; i++) {
    let pointLight: PointLight = lighting_getPointLight(i);
    let light_position_worldspace: vec3<f32> = pointLight.position;
    let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
    let light_attenuation = getPointLightAttenuation(
      pointLight,
      distance(light_position_worldspace, position_worldspace)
    );
    lightColor += lighting_getLightColor(
      surfaceColor,
      light_direction,
      view_direction,
      normal_worldspace,
      pointLight.color / light_attenuation
    );
  }

  for (var i: i32 = 0; i < lighting.spotLightCount; i++) {
    let spotLight: SpotLight = lighting_getSpotLight(i);
    let light_position_worldspace: vec3<f32> = spotLight.position;
    let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
    let light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
    lightColor += lighting_getLightColor(
      surfaceColor,
      light_direction,
      view_direction,
      normal_worldspace,
      spotLight.color / light_attenuation
    );
  }

  for (var i: i32 = 0; i < lighting.directionalLightCount; i++) {
    let directionalLight: DirectionalLight = lighting_getDirectionalLight(i);
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }  
  
  return lightColor;
}

fn lighting_getSpecularLightColor(cameraPosition: vec3<f32>, position_worldspace: vec3<f32>, normal_worldspace: vec3<f32>) -> vec3<f32>{
  var lightColor = vec3<f32>(0, 0, 0);
  let surfaceColor = vec3<f32>(0, 0, 0);

  if (lighting.enabled != 0) {
    let view_direction = normalize(cameraPosition - position_worldspace);

    for (var i: i32 = 0; i < lighting.pointLightCount; i++) {
      let pointLight: PointLight = lighting_getPointLight(i);
      let light_position_worldspace: vec3<f32> = pointLight.position;
      let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
      let light_attenuation = getPointLightAttenuation(
        pointLight,
        distance(light_position_worldspace, position_worldspace)
      );
      lightColor += lighting_getLightColor(
        surfaceColor,
        light_direction,
        view_direction,
        normal_worldspace,
        pointLight.color / light_attenuation
      );
    }

    for (var i: i32 = 0; i < lighting.spotLightCount; i++) {
      let spotLight: SpotLight = lighting_getSpotLight(i);
      let light_position_worldspace: vec3<f32> = spotLight.position;
      let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
      let light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
      lightColor += lighting_getLightColor(
        surfaceColor,
        light_direction,
        view_direction,
        normal_worldspace,
        spotLight.color / light_attenuation
      );
    }

    for (var i: i32 = 0; i < lighting.directionalLightCount; i++) {
        let directionalLight: DirectionalLight = lighting_getDirectionalLight(i);
        lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
    }
  }
  return lightColor;
}
`,Vs={props:{},name:`gouraudMaterial`,bindingLayout:[{name:`gouraudMaterial`,group:3}],vs:zs.replace(`phongMaterial`,`gouraudMaterial`),fs:Rs.replace(`phongMaterial`,`gouraudMaterial`),source:Bs.replaceAll(`phongMaterial`,`gouraudMaterial`),defines:{LIGHTING_VERTEX:!0},dependencies:[ks,Cs],uniformTypes:{unlit:`i32`,ambient:`f32`,diffuse:`f32`,shininess:`f32`,specularColor:`vec3<f32>`},defaultUniforms:{unlit:!1,ambient:.35,diffuse:.6,shininess:32,specularColor:[38.25,38.25,38.25]},getUniforms(e){return{...Vs.defaultUniforms,...e}}},Hs={name:`phongMaterial`,firstBindingSlot:0,bindingLayout:[{name:`phongMaterial`,group:3}],dependencies:[ks,Cs],source:Bs,vs:Rs,fs:zs,defines:{LIGHTING_FRAGMENT:!0},uniformTypes:{unlit:`i32`,ambient:`f32`,diffuse:`f32`,shininess:`f32`,specularColor:`vec3<f32>`},defaultUniforms:{unlit:!1,ambient:.35,diffuse:.6,shininess:32,specularColor:[38.25,38.25,38.25]},getUniforms(e){return{...Hs.defaultUniforms,...e}}},Us=`struct LayerUniforms {
  opacity: f32,
};

@group(0) @binding(auto)
var<uniform> layer: LayerUniforms;
`,Ws=`layout(std140) uniform layerUniforms {
  uniform float opacity;
} layer;
`,Gs={name:`layer`,source:Us,vs:Ws,fs:Ws,getUniforms:e=>({opacity:e.opacity**(1/2.2)}),uniformTypes:{opacity:`f32`}},Ks={name:`color`,dependencies:[],source:`

@must_use
fn deckgl_premultiplied_alpha(fragColor: vec4<f32>) -> vec4<f32> {
    return vec4(fragColor.rgb * fragColor.a, fragColor.a); 
};
`,getUniforms:e=>({})},qs=`const SMOOTH_EDGE_RADIUS: f32 = 0.5;

struct VertexGeometry {
  position: vec4<f32>,
  worldPosition: vec3<f32>,
  worldPositionAlt: vec3<f32>,
  normal: vec3<f32>,
  uv: vec2<f32>,
  pickingColor: vec3<f32>,
};

var<private> geometry_: VertexGeometry = VertexGeometry(
  vec4<f32>(0.0, 0.0, 1.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec2<f32>(0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0)
);

struct FragmentGeometry {
  uv: vec2<f32>,
};

var<private> fragmentGeometry: FragmentGeometry;

fn smoothedge(edge: f32, x: f32) -> f32 {
  return smoothstep(edge - SMOOTH_EDGE_RADIUS, edge + SMOOTH_EDGE_RADIUS, x);
}
`,Js=`#define SMOOTH_EDGE_RADIUS 0.5`,Ys={name:`geometry`,source:qs,vs:`\
${Js}

struct VertexGeometry {
  vec4 position;
  vec3 worldPosition;
  vec3 worldPositionAlt;
  vec3 normal;
  vec2 uv;
  vec3 pickingColor;
} geometry = VertexGeometry(
  vec4(0.0, 0.0, 1.0, 0.0),
  vec3(0.0),
  vec3(0.0),
  vec3(0.0),
  vec2(0.0),
  vec3(0.0)
);
`,fs:`\
${Js}

struct FragmentGeometry {
  vec2 uv;
};
FragmentGeometry geometry;

float smoothedge(float edge, float x) {
  return smoothstep(edge - SMOOTH_EDGE_RADIUS, edge + SMOOTH_EDGE_RADIUS, x);
}
`},H;(function(e){e[e.Start=1]=`Start`,e[e.Move=2]=`Move`,e[e.End=4]=`End`,e[e.Cancel=8]=`Cancel`})(H||={});var U;(function(e){e[e.None=0]=`None`,e[e.Left=1]=`Left`,e[e.Right=2]=`Right`,e[e.Up=4]=`Up`,e[e.Down=8]=`Down`,e[e.Horizontal=3]=`Horizontal`,e[e.Vertical=12]=`Vertical`,e[e.All=15]=`All`})(U||={});var W;(function(e){e[e.Possible=1]=`Possible`,e[e.Began=2]=`Began`,e[e.Changed=4]=`Changed`,e[e.Ended=8]=`Ended`,e[e.Recognized=8]=`Recognized`,e[e.Cancelled=16]=`Cancelled`,e[e.Failed=32]=`Failed`})(W||={});var Xs=`auto`,Zs=`manipulation`,Qs=`none`,$s=`pan-x`,ec=`pan-y`;function tc(e){if(e.includes(`none`))return Qs;let t=e.includes($s),n=e.includes(ec);return t&&n?Qs:t||n?t?$s:ec:e.includes(`manipulation`)?Zs:Xs}var nc=class{constructor(e,t){this.actions=``,this.manager=e,this.set(t)}set(e){e===`compute`&&(e=this.compute()),this.manager.element&&(this.manager.element.style.touchAction=e,this.actions=e)}update(){this.set(this.manager.options.touchAction)}compute(){let e=[];for(let t of this.manager.recognizers)t.options.enable&&(e=e.concat(t.getTouchAction()));return tc(e.join(` `))}};function rc(e){return e.trim().split(/\s+/g)}function ic(e,t,n){if(e)for(let r of rc(t))e.addEventListener(r,n,!1)}function ac(e,t,n){if(e)for(let r of rc(t))e.removeEventListener(r,n,!1)}function oc(e){return(e.ownerDocument||e).defaultView}function sc(e,t){let n=e;for(;n;){if(n===t)return!0;n=n.parentNode}return!1}function cc(e){let t=e.length;if(t===1)return{x:Math.round(e[0].clientX),y:Math.round(e[0].clientY)};let n=0,r=0,i=0;for(;i<t;)n+=e[i].clientX,r+=e[i].clientY,i++;return{x:Math.round(n/t),y:Math.round(r/t)}}function lc(e){let t=[],n=0;for(;n<e.pointers.length;)t[n]={clientX:Math.round(e.pointers[n].clientX),clientY:Math.round(e.pointers[n].clientY)},n++;return{timeStamp:Date.now(),pointers:t,center:cc(t),deltaX:e.deltaX,deltaY:e.deltaY}}function uc(e,t){let n=t.x-e.x,r=t.y-e.y;return Math.sqrt(n*n+r*r)}function dc(e,t){let n=t.clientX-e.clientX,r=t.clientY-e.clientY;return Math.sqrt(n*n+r*r)}function fc(e,t){let n=t.x-e.x,r=t.y-e.y;return Math.atan2(r,n)*180/Math.PI}function pc(e,t){let n=t.clientX-e.clientX,r=t.clientY-e.clientY;return Math.atan2(r,n)*180/Math.PI}function mc(e,t){return e===t?U.None:Math.abs(e)>=Math.abs(t)?e<0?U.Left:U.Right:t<0?U.Up:U.Down}function hc(e,t){let n=t.center,r=e.offsetDelta,i=e.prevDelta,a=e.prevInput;return(t.eventType===H.Start||a?.eventType===H.End)&&(i=e.prevDelta={x:a?.deltaX||0,y:a?.deltaY||0},r=e.offsetDelta={x:n.x,y:n.y}),{deltaX:i.x+(n.x-r.x),deltaY:i.y+(n.y-r.y)}}function gc(e,t,n){return{x:t/e||0,y:n/e||0}}function _c(e,t){return dc(t[0],t[1])/dc(e[0],e[1])}function vc(e,t){return pc(t[1],t[0])-pc(e[1],e[0])}function yc(e,t){let n=e.lastInterval||t,r=t.timeStamp-n.timeStamp,i,a,o,s;if(t.eventType!==H.Cancel&&(r>25||n.velocity===void 0)){let c=t.deltaX-n.deltaX,l=t.deltaY-n.deltaY,u=gc(r,c,l);a=u.x,o=u.y,i=Math.abs(u.x)>Math.abs(u.y)?u.x:u.y,s=mc(c,l),e.lastInterval=t}else i=n.velocity,a=n.velocityX,o=n.velocityY,s=n.direction;t.velocity=i,t.velocityX=a,t.velocityY=o,t.direction=s}function bc(e,t){return`pointerId`in e?e.pointerId:t}function xc(e,t){e.movementOrigin=new Map(t.map((e,t)=>[bc(e,t),{clientX:e.clientX,clientY:e.clientY}])),e.firstMovementTime=void 0}function Sc(e,t){let n=t.pointers.map(bc);if(e.movementOrigin?.size===n.length&&n.every(t=>e.movementOrigin.has(t))||xc(e,t.pointers),t.distancePerPointer=t.pointers.map((t,r)=>dc(e.movementOrigin.get(n[r]),t)),t.eventType&H.Move&&t.distancePerPointer.some(e=>e>0)&&(e.firstMovementTime??=t.timeStamp),t.movementDeltaTime=e.firstMovementTime===void 0?0:t.timeStamp-e.firstMovementTime,t.eventType&(H.End|H.Cancel)){let r=t.changedPointers.map(e=>bc(e,t.pointers.indexOf(e)));xc(e,t.pointers.filter((e,t)=>!r.includes(n[t])))}}function Cc(e,t){let{session:n}=e,{pointers:r}=t,{length:i}=r;n.firstInput||=lc(t),i>1&&!n.firstMultiple?n.firstMultiple=lc(t):i===1&&(n.firstMultiple=!1);let{firstInput:a,firstMultiple:o}=n,s=o?o.center:a.center,c=t.center=cc(r);t.timeStamp=Date.now(),t.deltaTime=t.timeStamp-a.timeStamp,Sc(n,t),t.angle=fc(s,c),t.distance=uc(s,c);let{deltaX:l,deltaY:u}=hc(n,t);t.deltaX=l,t.deltaY=u,t.offsetDirection=mc(t.deltaX,t.deltaY);let d=gc(t.deltaTime,t.deltaX,t.deltaY);t.overallVelocityX=d.x,t.overallVelocityY=d.y,t.overallVelocity=Math.abs(d.x)>Math.abs(d.y)?d.x:d.y,t.scale=o?_c(o.pointers,r):1,t.rotation=o?vc(o.pointers,r):0,t.maxPointers=n.prevInput?t.pointers.length>n.prevInput.maxPointers?t.pointers.length:n.prevInput.maxPointers:t.pointers.length;let f=e.element;return sc(t.srcEvent.target,f)&&(f=t.srcEvent.target),t.target=f,yc(n,t),t}function wc(e,t,n){let r=n.pointers.length,i=n.changedPointers.length,a=t&H.Start&&r-i===0,o=t&(H.End|H.Cancel)&&r-i===0;n.isFirst=!!a,n.isFinal=!!o,a&&(e.session={}),n.eventType=t;let s=Cc(e,n);e.emit(`hammer.input`,s),e.recognize(s),e.session.prevInput=s}var Tc=class{constructor(e){this.evEl=``,this.evWin=``,this.evTarget=``,this.domHandler=e=>{this.manager.options.enable&&this.handler(e)},this.manager=e,this.element=e.element,this.target=e.options.inputTarget||e.element}callback(e,t){wc(this.manager,e,t)}init(){ic(this.element,this.evEl,this.domHandler),ic(this.target,this.evTarget,this.domHandler),ic(oc(this.element),this.evWin,this.domHandler)}destroy(){ac(this.element,this.evEl,this.domHandler),ac(this.target,this.evTarget,this.domHandler),ac(oc(this.element),this.evWin,this.domHandler)}},Ec={pointerdown:H.Start,pointermove:H.Move,pointerup:H.End,pointercancel:H.Cancel,pointerout:H.Cancel},Dc=`pointerdown`,Oc=`pointermove pointerup pointercancel`,kc=class extends Tc{constructor(e){super(e),this.evEl=Dc,this.evWin=Oc,this.store=this.manager.session.pointerEvents=[],this.init()}handler(e){let{store:t}=this,n=!1,r=Ec[e.type],i=e.pointerType,a=i===`touch`,o=t.findIndex(t=>t.pointerId===e.pointerId);r&H.Start&&(e.buttons||a)?o<0&&(t.push(e),o=t.length-1):r&(H.End|H.Cancel)&&(n=!0),!(o<0)&&(t[o]=e,this.callback(r,{pointers:t,changedPointers:[e],eventType:r,pointerType:i,srcEvent:e}),n&&t.splice(o,1))}},Ac=[``,`webkit`,`Moz`,`MS`,`ms`,`o`];function jc(e,t){let n=t[0].toUpperCase()+t.slice(1);for(let r of Ac){let i=r?r+n:t;if(i in e)return i}}var Mc=1,Nc=2,Pc={touchAction:`compute`,enable:!0,inputTarget:null,cssProps:{userSelect:`none`,userDrag:`none`,touchCallout:`none`,tapHighlightColor:`rgba(0,0,0,0)`}},Fc=class{constructor(e,t){this.options={...Pc,...t,cssProps:{...Pc.cssProps,...t.cssProps},inputTarget:t.inputTarget||e},this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=e,this.input=new kc(this),this.touchAction=new nc(this,this.options.touchAction),this.toggleCssProps(!0)}set(e){return Object.assign(this.options,e),e.touchAction&&this.touchAction.update(),e.inputTarget&&(this.input.destroy(),this.input.target=e.inputTarget,this.input.init()),this}stop(e){this.session.stopped=e?Nc:Mc}recognize(e){let{session:t}=this;if(t.stopped)return;this.session.prevented&&e.srcEvent.preventDefault();let n,{recognizers:r}=this,{curRecognizer:i}=t;(!i||i&&i.state&W.Recognized)&&(i=t.curRecognizer=null);let a=0;for(;a<r.length;)n=r[a],t.stopped!==Nc&&(!i||n===i||n.canRecognizeWith(i))?n.recognize(e):n.reset(),!i&&n.state&(W.Began|W.Changed|W.Ended)&&(i=t.curRecognizer=n),a++}get(e){let{recognizers:t}=this;for(let n=0;n<t.length;n++)if(t[n].options.event===e)return t[n];return null}add(e){if(Array.isArray(e)){for(let t of e)this.add(t);return this}let t=this.get(e.options.event);return t&&this.remove(t),this.recognizers.push(e),e.manager=this,this.touchAction.update(),e}remove(e){if(Array.isArray(e)){for(let t of e)this.remove(t);return this}let t=typeof e==`string`?this.get(e):e;if(t){let{recognizers:e}=this,n=e.indexOf(t);n!==-1&&(e.splice(n,1),this.touchAction.update())}return this}on(e,t){if(!e||!t)return;let{handlers:n}=this;for(let r of rc(e))n[r]=n[r]||[],n[r].push(t)}off(e,t){if(!e)return;let{handlers:n}=this;for(let r of rc(e))t?n[r]&&n[r].splice(n[r].indexOf(t),1):delete n[r]}emit(e,t){let n=this.handlers[e]&&this.handlers[e].slice();if(!n||!n.length)return;let r=t;r.type=e,r.preventDefault=function(){t.srcEvent.preventDefault()};let i=0;for(;i<n.length;)n[i](r),i++}destroy(){this.toggleCssProps(!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}toggleCssProps(e){let{element:t}=this;if(t){for(let[n,r]of Object.entries(this.options.cssProps)){let i=jc(t.style,n);e?(this.oldCssProps[i]=t.style[i],t.style[i]=r):t.style[i]=this.oldCssProps[i]||``}e||(this.oldCssProps={})}}},Ic=1;function Lc(){return Ic++}function Rc(e){return e&W.Cancelled?`cancel`:e&W.Ended?`end`:e&W.Changed?`move`:e&W.Began?`start`:``}var zc=class{constructor(e){this.options=e,this.id=Lc(),this.state=W.Possible,this.simultaneous={},this.requireFail=[]}set(e){return Object.assign(this.options,e),this.manager.touchAction.update(),this}recognizeWith(e){if(Array.isArray(e)){for(let t of e)this.recognizeWith(t);return this}let t;if(typeof e==`string`){if(t=this.manager.get(e),!t)throw Error(`Cannot find recognizer ${e}`)}else t=e;let{simultaneous:n}=this;return n[t.id]||(n[t.id]=t,t.recognizeWith(this)),this}dropRecognizeWith(e){if(Array.isArray(e)){for(let t of e)this.dropRecognizeWith(t);return this}let t;return t=typeof e==`string`?this.manager.get(e):e,t&&delete this.simultaneous[t.id],this}requireFailure(e){if(Array.isArray(e)){for(let t of e)this.requireFailure(t);return this}let t;if(typeof e==`string`){if(t=this.manager.get(e),!t)throw Error(`Cannot find recognizer ${e}`)}else t=e;let{requireFail:n}=this;return n.indexOf(t)===-1&&(n.push(t),t.requireFailure(this)),this}dropRequireFailure(e){if(Array.isArray(e)){for(let t of e)this.dropRequireFailure(t);return this}let t;if(t=typeof e==`string`?this.manager.get(e):e,t){let e=this.requireFail.indexOf(t);e>-1&&this.requireFail.splice(e,1)}return this}hasRequireFailures(){return!!this.requireFail.find(e=>e.options.enable)}canRecognizeWith(e){return!!this.simultaneous[e.id]}emit(e){if(!e)return;let{state:t}=this;t<W.Ended&&this.manager.emit(this.options.event+Rc(t),e),this.manager.emit(this.options.event,e),e.additionalEvent&&this.manager.emit(e.additionalEvent,e),t>=W.Ended&&this.manager.emit(this.options.event+Rc(t),e)}tryEmit(e){this.canEmit()?this.emit(e):this.state=W.Failed}canEmit(){let e=0;for(;e<this.requireFail.length;){if(!(this.requireFail[e].state&(W.Failed|W.Possible)))return!1;e++}return!0}recognize(e){let t={...e};this.options.enable?(this.state&(W.Recognized|W.Cancelled|W.Failed)&&(this.state=W.Possible),this.state=this.process(t),this.state&(W.Began|W.Changed|W.Ended|W.Cancelled)&&this.tryEmit(t)):(this.reset(),this.state=W.Failed)}getEventNames(){return[this.options.event]}reset(){}};function Bc(e){return Math.abs(((e+180)%360+360)%360-180)}function Vc(e,t){return(t.distance===void 0||e.distance>=t.distance)&&(t.distancePerPointer===void 0||e.distancePerPointer.length>0&&e.distancePerPointer.every(e=>e>=t.distancePerPointer))&&(t.movementDeltaTime===void 0||e.movementDeltaTime>=t.movementDeltaTime)&&(t.rotation===void 0||Bc(e.rotation)>=t.rotation)&&(t.scale===void 0||Math.abs(e.scale-1)>=t.scale)}var Hc=class extends zc{attrTest(e){let t=this.options.pointers;return t===0||e.pointers.length===t}coherentTest(e){let t=this.options.coherent;return!t?.length||t.some(t=>Vc(e,t))}process(e){let{state:t}=this,{eventType:n}=e,r=t&(W.Began|W.Changed),i=this.attrTest(e);return r&&(n&H.Cancel||!i)?t|W.Cancelled:r||i?n&H.End?t|W.Ended:t&W.Began?t|W.Changed:W.Began:W.Failed}},Uc=[``,`start`,`move`,`end`,`cancel`],Wc=class extends zc{constructor(e={}){super({enable:!0,event:`doubleclickdrag`,pointers:1,interval:500,time:350,threshold:28,dragThreshold:1,pixelsPerScale:120,...e}),this._tapStart=null,this._lastTap=null,this._drag=null,this._emittedStart=!1}getTouchAction(){return[Zs]}getEventNames(){return Uc.map(e=>this.options.event+e)}process(e){let{options:t}=this;return e.pointers.length===t.pointers?e.eventType&H.Start?this._handleStart(e):e.eventType&H.Move?this._handleMove(e):e.eventType&H.Cancel?this._handleEnd(e,!0):e.eventType&H.End?this._handleEnd(e,!1):W.Failed:(this.reset(),W.Failed)}reset(){this._tapStart=null,this._lastTap=null,this._drag=null,this._emittedStart=!1}emit(e){if(e){if(this.state===W.Began){if(!this._drag?.active||this._emittedStart)return;this._emittedStart=!0,this.manager.emit(`${this.options.event}start`,e),this.manager.emit(this.options.event,e)}else if(this.state===W.Changed){if(!this._emittedStart)return;this.manager.emit(`${this.options.event}move`,e),this.manager.emit(this.options.event,e)}else if(this.state===W.Ended){if(!this._emittedStart)return;this.manager.emit(this.options.event,e),this.manager.emit(`${this.options.event}end`,e),this._emittedStart=!1}else if(this.state===W.Cancelled){if(!this._emittedStart)return;this.manager.emit(this.options.event,e),this.manager.emit(`${this.options.event}cancel`,e),this._emittedStart=!1}}}_handleStart(e){let t=this._getPointerId(e);return this._lastTap&&this._isTapMatch(e,this._lastTap)?(this._tapStart=null,this._lastTap=null,this._drag={startCenter:e.center,pointerId:t,active:!1},this._emittedStart=!1,W.Began):(this._tapStart={center:e.center,timeStamp:e.timeStamp,pointerId:t},this._lastTap=null,this._drag=null,this._emittedStart=!1,W.Failed)}_handleMove(e){if(!this._drag||!this._isSamePointer(e,this._drag.pointerId))return W.Failed;let t=this._drag.startCenter.y-e.center.y;return!this._drag.active&&Math.abs(t)<this.options.dragThreshold?W.Began:(this._drag.active=!0,e.scale=2**(t/this.options.pixelsPerScale),this._emittedStart?W.Changed:W.Began)}_handleEnd(e,t){if(this._drag&&this._isSamePointer(e,this._drag.pointerId)){let{active:n,startCenter:r}=this._drag;return this._drag=null,this._tapStart=null,this._lastTap=null,n?(e.scale=2**((r.y-e.center.y)/this.options.pixelsPerScale),t?W.Cancelled:W.Ended):(this._emittedStart=!1,W.Failed)}return!this._tapStart||!this._isSamePointer(e,this._tapStart.pointerId)?(t&&this.reset(),W.Failed):(this._lastTap=this._isValidTap(e)?{center:e.center,timeStamp:e.timeStamp,pointerId:this._tapStart.pointerId}:null,this._tapStart=null,W.Failed)}_isTapMatch(e,t){return e.timeStamp-t.timeStamp<=this.options.interval&&uc(e.center,t.center)<=this.options.threshold}_isValidTap(e){return e.deltaTime<=this.options.time&&e.distance<=this.options.threshold}_getPointerId(e){return`pointerId`in e.srcEvent?e.srcEvent.pointerId:null}_isSamePointer(e,t){return t===null||this._getPointerId(e)===t}},Gc=class extends zc{constructor(e={}){super({enable:!0,event:`tap`,pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10,...e}),this.pTime=null,this.pCenter=null,this._timer=null,this._input=null,this.count=0}getTouchAction(){return[Zs]}process(e){let{options:t}=this,n=e.pointers.length===t.pointers,r=e.distance<t.threshold,i=e.deltaTime<t.time;if(this.reset(),e.eventType&H.Start&&this.count===0)return this.failTimeout();if(r&&i&&n){if(e.eventType!==H.End)return this.failTimeout();let n=!this.pTime||e.timeStamp-this.pTime<t.interval,r=!this.pCenter||uc(this.pCenter,e.center)<t.posThreshold;if(this.pTime=e.timeStamp,this.pCenter=e.center,!r||!n?this.count=1:this.count+=1,this._input=e,this.count%t.taps===0)return this.hasRequireFailures()?(this._timer=setTimeout(()=>{this.state=W.Recognized,this.tryEmit(this._input)},t.interval),W.Began):W.Recognized}return W.Failed}failTimeout(){return this._timer=setTimeout(()=>{this.state=W.Failed},this.options.interval),W.Failed}reset(){clearTimeout(this._timer)}emit(e){this.state===W.Recognized&&(e.tapCount=this.count,this.manager.emit(this.options.event,e))}},Kc=class extends Hc{constructor(){super(...arguments),this.wheelSession=null,this.wheelSessionUnsubscribe=null,this.handleWheelSessionEvent=e=>{e.device===`trackpad`&&this.handleTrackpadEvent(e)}}set(e){let{wheelSession:t,...n}=e;return t&&t!==this.wheelSession&&(this.wheelSessionUnsubscribe?.(),this.wheelSessionUnsubscribe=null,this.wheelSession=t),super.set(n),this.updateWheelSessionSubscription(),this}getTrackpadInput(e,t={}){let{srcEvent:n}=e,r=t.deltaX??e.deltaX,i=t.deltaY??e.deltaY,a=mc(r,i),o=Math.sqrt(e.deltaX*e.deltaX+e.deltaY*e.deltaY),s=n;return{pointers:[s,s],changedPointers:[s,s],pointerType:`trackpad`,srcEvent:s,eventType:e.eventType,timeStamp:e.timeStamp,deltaTime:e.deltaTime,center:e.center,deltaX:r,deltaY:i,angle:Math.atan2(i,r)*180/Math.PI,distance:Math.sqrt(r*r+i*i),distancePerPointer:[o,o],movementDeltaTime:e.deltaTime,scale:1,rotation:0,direction:a,offsetDirection:a,velocity:e.velocity,velocityX:e.velocityX,velocityY:e.velocityY,overallVelocity:e.overallVelocity,overallVelocityX:e.overallVelocityX,overallVelocityY:e.overallVelocityY,maxPointers:2,target:n.target||this.manager.element,additionalEvent:``,...t}}updateWheelSessionSubscription(){let e=!!(this.wheelSession&&this.options.enable&&this.options.trackpad&&this.options.pointers===2);e&&!this.wheelSessionUnsubscribe?this.wheelSessionUnsubscribe=this.wheelSession.on(this.handleWheelSessionEvent):!e&&this.wheelSessionUnsubscribe&&(this.wheelSessionUnsubscribe(),this.wheelSessionUnsubscribe=null)}},qc=[``,`start`,`move`,`end`,`cancel`,`up`,`down`,`left`,`right`],Jc=class extends Kc{constructor(e={}){super({enable:!0,pointers:1,event:`pan`,threshold:10,direction:U.All,trackpad:!1,coherent:[],...e}),this.trackpadGesture=!1,this.pX=null,this.pY=null}getTouchAction(){let{options:{direction:e}}=this,t=[];return e&U.Horizontal&&t.push(ec),e&U.Vertical&&t.push($s),t}getEventNames(){return qc.map(e=>this.options.event+e)}directionTest(e){let{options:t}=this,n=!0,{distance:r}=e,{direction:i}=e,a=e.deltaX,o=e.deltaY;return i&t.direction||(t.direction&U.Horizontal?(i=a===0?U.None:a<0?U.Left:U.Right,n=a!==this.pX,r=Math.abs(e.deltaX)):(i=o===0?U.None:o<0?U.Up:U.Down,n=o!==this.pY,r=Math.abs(e.deltaY))),e.direction=i,n&&r>t.threshold&&!!(i&t.direction)}attrTest(e){let t=!!(this.state&W.Began),n=!(this.options.coherent?.length&&e.eventType&(H.End|H.Cancel));return super.attrTest(e)&&(t||n&&this.coherentTest(e)&&this.directionTest(e))}emit(e){this.pX=e.deltaX,this.pY=e.deltaY;let t=U[e.direction].toLowerCase();t&&(e.additionalEvent=this.options.event+t),super.emit(e)}handleTrackpadEvent(e){e.isFirst&&(this.trackpadGesture=!e.srcEvent.ctrlKey,!this.trackpadGesture&&this.state&(W.Recognized|W.Cancelled|W.Failed)&&(this.state=W.Possible)),this.trackpadGesture&&(this.recognize(this.getTrackpadInput(e,{deltaX:-e.deltaX,deltaY:-e.deltaY,velocity:-e.velocity,velocityX:-e.velocityX,velocityY:-e.velocityY,overallVelocity:-e.overallVelocity,overallVelocityX:-e.overallVelocityX,overallVelocityY:-e.overallVelocityY})),e.isFinal&&(this.trackpadGesture=!1))}},Yc=[``,`start`,`move`,`end`,`cancel`,`in`,`out`],Xc=class extends Kc{constructor(e={}){super({enable:!0,event:`pinch`,threshold:0,pointers:2,trackpad:!1,coherent:[],...e}),this.trackpadGesture=!1}getTouchAction(){return[Qs]}getEventNames(){return Yc.map(e=>this.options.event+e)}attrTest(e){let t=!!this.options.coherent?.length,n=!!(this.state&W.Began),r=!(t&&e.eventType&(H.End|H.Cancel));return super.attrTest(e)&&(n||r&&(t?this.coherentTest(e):Math.abs(e.scale-1)>this.options.threshold))}emit(e){if(e.scale!==1){let t=e.scale<1?`in`:`out`;e.additionalEvent=this.options.event+t}super.emit(e)}handleTrackpadEvent(e){e.isFirst&&(this.trackpadGesture=e.srcEvent.ctrlKey,!this.trackpadGesture&&this.state&(W.Recognized|W.Cancelled|W.Failed)&&(this.state=W.Possible)),this.trackpadGesture&&(this.recognize(this.getTrackpadInput(e,{deltaX:0,deltaY:0,velocity:0,velocityX:0,velocityY:0,overallVelocity:0,overallVelocityX:0,overallVelocityY:0,scale:Math.exp(-e.deltaY/100)})),e.isFinal&&(this.trackpadGesture=!1))}},Zc=class{constructor(e,t,n){this.element=e,this.callback=t,this.options=n}listen(e,t){t?this.element.addEventListener(e,this.handleEvent,{passive:!1}):this.element.removeEventListener(e,this.handleEvent)}},Qc=(typeof navigator<`u`&&navigator.userAgent?navigator.userAgent.toLowerCase():``).indexOf(`firefox`)!==-1,$c=40,el=.25,tl=class extends Zc{constructor(e,t,n){n.enable=n.enable??!1,super(e,t,n),this.handleEvent=e=>{if(!this.options.enable)return;let t=e.deltaY;globalThis.WheelEvent&&(Qc&&e.deltaMode===globalThis.WheelEvent.DOM_DELTA_PIXEL&&(t/=globalThis.devicePixelRatio),e.deltaMode===globalThis.WheelEvent.DOM_DELTA_LINE&&(t*=$c)),e.shiftKey&&t&&(t*=el),this.callback({type:`wheel`,center:{x:e.clientX,y:e.clientY},delta:-t,device:this.options.wheelSession?.device??`unknown`,srcEvent:e,pointerType:`mouse`,target:e.target})},n.enable&&(this.wheelSessionUnsubscribe=this.options.wheelSession?.on(()=>{}),this.listen(`wheel`,!0))}destroy(){this.listen(`wheel`,!1),this.wheelSessionUnsubscribe?.(),this.wheelSessionUnsubscribe=void 0}enableEventType(e,t){e===`wheel`&&this.options.enable!==t&&(this.options.enable=t,t&&!this.wheelSessionUnsubscribe&&(this.wheelSessionUnsubscribe=this.options.wheelSession?.on(()=>{})),this.listen(`wheel`,t),t||(this.wheelSessionUnsubscribe?.(),this.wheelSessionUnsubscribe=void 0))}},nl=4.000244140625,rl=40,il=0,al=1,ol=40,sl=40,cl=120,ll={classificationDelay:32,endDelay:80},ul=class{constructor(e,t={}){this.subscriptions=new Map,this.session=null,this.classificationTimer=null,this.endTimer=null,this.pressedControlKeys=new Set,this.listeningForControlKeys=!1,this.handleEvent=e=>{if(!this.hasSubscribers)return`unknown`;let t=fl(e,this.pressedControlKeys.size>0),n=this.session;if(n&&t.timeStamp-n.lastTimeStamp>=this.options.endDelay){if(this.end(),!this.hasSubscribers)return`unknown`;n=null}n?(this.scheduleEnd(),this.addSample(n,t)):(n=this.startPendingSession(t),this.scheduleEnd());let{device:r}=n;return r===`unknown`&&(r=pl(n.samples,!1),r!==`unknown`&&this.begin(n,r)),r},this.finishClassification=()=>{if(this.classificationTimer=null,!this.session||this.session.device!==`unknown`)return;let e=this.session,t=pl(e.samples,!0);this.begin(e,t===`unknown`?`mouse`:t)},this.end=()=>{if(!this.session)return;if(this.session.device===`unknown`){let e=this.session,t=pl(e.samples,!0);this.begin(e,t===`unknown`?`mouse`:t)}if(!this.session)return;let e=this.session;this.emit(H.End,e.lastEvent),this.reset()},this.handleKeyDown=e=>{e.key===`Control`&&this.pressedControlKeys.add(e.code||e.key)},this.handleKeyUp=e=>{e.key===`Control`&&(e.code?this.pressedControlKeys.delete(e.code):this.pressedControlKeys.clear())},this.handleWindowBlur=()=>{this.pressedControlKeys.clear()},this.element=e,this.options={...ll,...t},this.element?.addEventListener(`wheel`,this.handleEvent,{passive:!0})}get hasSubscribers(){return this.subscriptions.size>0}get device(){return this.session?.device??`unknown`}on(e){let t={listener:e};return this.subscriptions.set(e,t),this.updateControlKeyEventListeners(),()=>{this.subscriptions.get(e)===t&&this.off(e)}}off(e){this.subscriptions.delete(e),this.updateControlKeyEventListeners(),this.hasSubscribers||this.reset()}cancel(){let e=this.session;e&&e.device!==`unknown`&&this.emit(H.Cancel,e.lastEvent),this.reset()}destroy(){this.cancel(),this.subscriptions.clear(),this.updateControlKeyEventListeners(),this.element?.removeEventListener(`wheel`,this.handleEvent)}startPendingSession(e){let t={samples:[e],device:`unknown`,firstTimeStamp:e.timeStamp,lastTimeStamp:e.timeStamp,totalDeltaX:e.deltaX,totalDeltaY:e.deltaY,velocityX:0,velocityY:0,lastEvent:e.event};return this.session=t,this.classificationTimer=globalThis.setTimeout(this.finishClassification,this.options.classificationDelay),t}addSample(e,t){if(e.samples.push(t),e.lastTimeStamp=t.timeStamp,e.lastEvent=t.event,e.totalDeltaX+=t.deltaX,e.totalDeltaY+=t.deltaY,e.device!==`unknown`){let n=e.samples[e.samples.length-2],r=t.timeStamp-n.timeStamp;e.velocityX=r>0?t.deltaX/r:0,e.velocityY=r>0?t.deltaY/r:0,this.emit(H.Move,t.event,{velocityX:e.velocityX,velocityY:e.velocityY})}}begin(e,t){e.device=t,this.clearClassificationTimer(),this.emit(H.Start,e.samples[0].event);let n=e.lastTimeStamp-e.firstTimeStamp;e.velocityX=n>0?e.totalDeltaX/n:0,e.velocityY=n>0?e.totalDeltaY/n:0,this.emit(H.Move,e.lastEvent,{velocityX:e.velocityX,velocityY:e.velocityY})}scheduleEnd(){this.clearEndTimer(),this.endTimer=globalThis.setTimeout(this.end,this.options.endDelay)}emit(e,t,n){let r=this.session;if(!r||r.device===`unknown`)return;let i=e===H.Start,a=e===H.End||e===H.Cancel,o=i?r.firstTimeStamp:r.lastTimeStamp,s=i?0:Math.max(0,o-r.firstTimeStamp),c=i?0:r.totalDeltaX,l=i?0:r.totalDeltaY,u=s>0?c/s:0,d=s>0?l/s:0,f=i?0:n?.velocityX??r.velocityX,p=i?0:n?.velocityY??r.velocityY,m={eventType:e,device:r.device,srcEvent:t,timeStamp:o,center:{x:t.clientX,y:t.clientY},deltaX:c,deltaY:l,deltaTime:s,velocity:Math.abs(f)>Math.abs(p)?f:p,velocityX:f,velocityY:p,overallVelocity:Math.abs(u)>Math.abs(d)?u:d,overallVelocityX:u,overallVelocityY:d,isFirst:i,isFinal:a};for(let{listener:e}of[...this.subscriptions.values()])e(m)}reset(){this.clearClassificationTimer(),this.clearEndTimer(),this.session=null}clearClassificationTimer(){this.classificationTimer!==null&&(globalThis.clearTimeout(this.classificationTimer),this.classificationTimer=null)}clearEndTimer(){this.endTimer!==null&&(globalThis.clearTimeout(this.endTimer),this.endTimer=null)}updateControlKeyEventListeners(){let e=this.hasSubscribers,t=dl();t&&e!==this.listeningForControlKeys&&(this.listeningForControlKeys=e,e?(t.addEventListener(`keydown`,this.handleKeyDown,!0),t.addEventListener(`keyup`,this.handleKeyUp,!0),t.addEventListener(`blur`,this.handleWindowBlur)):(t.removeEventListener(`keydown`,this.handleKeyDown,!0),t.removeEventListener(`keyup`,this.handleKeyUp,!0),t.removeEventListener(`blur`,this.handleWindowBlur),this.pressedControlKeys.clear()))}};function dl(){return typeof window<`u`?window:globalThis.document?.defaultView}function fl(e,t){let n=e.deltaX,r=e.deltaY;return e.deltaMode===al&&(n*=rl,r*=rl),{event:e,timeStamp:e.timeStamp,deltaX:n,deltaY:r,isControlKeyDown:t}}function pl(e,t){return e.some(({event:e,isControlKeyDown:t})=>e.ctrlKey&&!t)?`trackpad`:e.some(({event:e})=>e.deltaMode!==il)||e.some(ml)||e.every(({event:e})=>{let t=e.wheelDelta;return t!==void 0&&Math.abs(t)%40==0})?`mouse`:e.some(({deltaX:e})=>e!==0)||e.length>1&&hl(e)?`trackpad`:t?`mouse`:`unknown`}function ml({event:e,deltaX:t,deltaY:n}){if(t!==0||n===0)return!1;let r=Math.abs(n/nl);if(Number.isInteger(r))return!0;let i=e.wheelDelta;return typeof i==`number`&&i!==0&&i%cl===0}function hl(e){for(let t=0;t<e.length;t++){let n=e[t];if(Math.abs(n.deltaX)>sl||Math.abs(n.deltaY)>sl||t>0&&n.timeStamp-e[t-1].timeStamp>ol)return!1}return!0}var gl=[`mousedown`,`mousemove`,`mouseup`,`mouseover`,`mouseout`,`mouseenter`,`mouseleave`],_l=class extends Zc{constructor(e,t,n){super(e,t,{enable:!0,...n}),this.handleEvent=e=>{this.handleOverEvent(e),this.handleOutEvent(e),this.handleEnterEvent(e),this.handleLeaveEvent(e),this.handleMoveEvent(e)},this.pressed=!1;let{enable:r=!1}=this.options;this.enableMoveEvent=r,this.enableLeaveEvent=r,this.enableEnterEvent=r,this.enableOutEvent=r,this.enableOverEvent=r,r&&gl.forEach(e=>this.listen(e,!0))}destroy(){gl.forEach(e=>this.listen(e,!1))}enableEventType(e,t){switch(e){case`pointermove`:this.enableMoveEvent!==t&&(this.enableMoveEvent=t,this.listen(`mousedown`,t),this.listen(`mousemove`,t),this.listen(`mouseup`,t));break;case`pointerover`:this.enableOverEvent!==t&&(this.enableOverEvent=t,this.listen(`mouseover`,t));break;case`pointerout`:this.enableOutEvent!==t&&(this.enableOutEvent=t,this.listen(`mouseout`,t));break;case`pointerenter`:this.enableEnterEvent!==t&&(this.enableEnterEvent=t,this.listen(`mouseenter`,t));break;case`pointerleave`:this.enableLeaveEvent!==t&&(this.enableLeaveEvent=t,this.listen(`mouseleave`,t))}}handleOverEvent(e){this.enableOverEvent&&e.type===`mouseover`&&this._emit(`pointerover`,e)}handleOutEvent(e){this.enableOutEvent&&e.type===`mouseout`&&this._emit(`pointerout`,e)}handleEnterEvent(e){this.enableEnterEvent&&e.type===`mouseenter`&&this._emit(`pointerenter`,e)}handleLeaveEvent(e){this.enableLeaveEvent&&e.type===`mouseleave`&&this._emit(`pointerleave`,e)}handleMoveEvent(e){if(this.enableMoveEvent)switch(e.type){case`mousedown`:e.button>=0&&(this.pressed=!0);break;case`mousemove`:e.buttons===0&&(this.pressed=!1),this.pressed||this._emit(`pointermove`,e);break;case`mouseup`:this.pressed=!1}}_emit(e,t){this.callback({type:e,center:{x:t.clientX,y:t.clientY},srcEvent:t,pointerType:`mouse`,target:t.target})}},vl=[`keydown`,`keyup`],yl=class extends Zc{constructor(e,t,n){super(e,t,{enable:!0,tabIndex:0,...n}),this.handleEvent=e=>{let t=e.target||e.srcElement;t.tagName===`INPUT`&&t.type===`text`||t.tagName===`TEXTAREA`||(this.enableDownEvent&&e.type===`keydown`&&this.callback({type:`keydown`,srcEvent:e,key:e.key,target:e.target}),this.enableUpEvent&&e.type===`keyup`&&this.callback({type:`keyup`,srcEvent:e,key:e.key,target:e.target}))};let{enable:r=!1}=this.options;this.enableDownEvent=r,this.enableUpEvent=r,e.tabIndex=this.options.tabIndex,e.style.outline=`none`,r&&vl.forEach(e=>this.listen(e,!0))}destroy(){vl.forEach(e=>this.listen(e,!1))}enableEventType(e,t){e===`keydown`&&this.enableDownEvent!==t&&(this.enableDownEvent=t,this.listen(e,t)),e===`keyup`&&this.enableUpEvent!==t&&(this.enableUpEvent=t,this.listen(e,t))}},bl=class extends Zc{constructor(e,t,n){n.enable=n.enable??!1,super(e,t,n),this.handleEvent=e=>{this.options.enable&&this.callback({type:`contextmenu`,center:{x:e.clientX,y:e.clientY},srcEvent:e,pointerType:`mouse`,target:e.target})},n.enable&&this.listen(`contextmenu`,!0)}destroy(){this.listen(`contextmenu`,!1)}enableEventType(e,t){e===`contextmenu`&&this.options.enable!==t&&(this.options.enable=t,this.listen(`contextmenu`,t))}},xl=1,Sl=2,Cl=4,wl={pointerdown:xl,pointermove:Sl,pointerup:Cl,mousedown:xl,mousemove:Sl,mouseup:Cl},Tl=0,El=1,Dl=2,Ol=1,kl=2,Al=4;function jl(e){let t=wl[e.srcEvent.type];if(!t)return null;let{buttons:n,button:r}=e.srcEvent,i=!1,a=!1,o=!1;return t===Sl?(i=!!(n&Ol),a=!!(n&Al),o=!!(n&kl)):(i=r===Tl,a=r===El,o=r===Dl),{leftButton:i,middleButton:a,rightButton:o}}function Ml(e,t){let n=e.center;if(!n)return null;let r=t.getBoundingClientRect(),i=r.width/t.offsetWidth||1,a=r.height/t.offsetHeight||1;return{center:n,offsetCenter:{x:(n.x-r.left-t.clientLeft)/i,y:(n.y-r.top-t.clientTop)/a}}}var Nl={srcElement:`root`,priority:0},Pl=class{constructor(e,t){this.handleEvent=e=>{if(this.isEmpty())return;let t=this._normalizeEvent(e),n=e.srcEvent.target;for(;n&&n!==t.rootElement;){if(this._emit(t,n),t.handled)return;n=n.parentNode}this._emit(t,`root`)},this.eventManager=e,this.recognizerName=t,this.handlers=[],this.handlersByElement=new Map,this._active=!1}isEmpty(){return!this._active}add(e,t,n,r=!1,i=!1){let{handlers:a,handlersByElement:o}=this,s={...Nl,...n},c=o.get(s.srcElement);c||(c=[],o.set(s.srcElement,c));let l={type:e,handler:t,srcElement:s.srcElement,priority:s.priority};r&&(l.once=!0),i&&(l.passive=!0),a.push(l),this._active=this._active||!l.passive;let u=c.length-1;for(;u>=0&&!(c[u].priority>=l.priority);)u--;c.splice(u+1,0,l)}remove(e,t){let{handlers:n,handlersByElement:r}=this;for(let i=n.length-1;i>=0;i--){let a=n[i];if(a.type===e&&a.handler===t){n.splice(i,1);let e=r.get(a.srcElement);e.splice(e.indexOf(a),1),e.length===0&&r.delete(a.srcElement)}}this._active=n.some(e=>!e.passive)}_emit(e,t){let n=this.handlersByElement.get(t);if(n){let t=!1,r=()=>{e.handled=!0},i=()=>{e.handled=!0,t=!0},a=[];for(let o=0;o<n.length;o++){let{type:s,handler:c,once:l}=n[o];if(c({...e,type:s,stopPropagation:r,stopImmediatePropagation:i}),l&&a.push(n[o]),t)break}for(let e=0;e<a.length;e++){let{type:t,handler:n}=a[e];this.remove(t,n)}}}_normalizeEvent(e){let t=this.eventManager.getElement();return{...e,...jl(e),...Ml(e,t),preventDefault:()=>{e.srcEvent.preventDefault()},stopImmediatePropagation:null,stopPropagation:null,handled:!1,rootElement:t}}};function Fl(e){if(`recognizer`in e)return e;let t,n=Array.isArray(e)?[...e]:[e];return t=typeof n[0]==`function`?new(n.shift())(n.shift()||{}):n.shift(),{recognizer:t,recognizeWith:typeof n[0]==`string`?[n[0]]:n[0],requireFailure:typeof n[1]==`string`?[n[1]]:n[1]}}var Il=class{constructor(e=null,t={}){if(this._onBasicInput=e=>{this.manager.emit(e.srcEvent.type,e)},this._onOtherEvent=e=>{this.manager.emit(e.type,e)},this.options={recognizers:[],events:{},touchAction:`compute`,tabIndex:0,cssProps:{},...t},this.events=new Map,this.element=e,this.wheelSession=new ul(e),e){this.manager=new Fc(e,this.options);for(let e of this.options.recognizers){let{recognizer:t,recognizeWith:n,requireFailure:r}=Fl(e);this.manager.add(t),n&&t.recognizeWith(n),r&&t.requireFailure(r)}this.manager.on(`hammer.input`,this._onBasicInput),this.wheelInput=new tl(e,this._onOtherEvent,{enable:!1,wheelSession:this.wheelSession}),this.moveInput=new _l(e,this._onOtherEvent,{enable:!1}),this.keyInput=new yl(e,this._onOtherEvent,{enable:!1,tabIndex:t.tabIndex}),this.contextmenuInput=new bl(e,this._onOtherEvent,{enable:!1}),this.on(this.options.events)}}getElement(){return this.element}destroy(){this.element?(this.wheelInput.destroy(),this.wheelSession.destroy(),this.moveInput.destroy(),this.keyInput.destroy(),this.contextmenuInput.destroy(),this.manager.destroy()):this.wheelSession.destroy()}on(e,t,n){this._addEventHandler(e,t,n,!1)}once(e,t,n){this._addEventHandler(e,t,n,!0)}watch(e,t,n){this._addEventHandler(e,t,n,!1,!0)}off(e,t){this._removeEventHandler(e,t)}emit(e){this.manager?.emit(e.type,e)}_toggleRecognizer(e,t){let{manager:n}=this;if(!n)return;let r=n.get(e);r&&(r.set({enable:t,wheelSession:this.wheelSession}),n.touchAction.update()),this.wheelInput?.enableEventType(e,t),this.moveInput?.enableEventType(e,t),this.keyInput?.enableEventType(e,t),this.contextmenuInput?.enableEventType(e,t)}_addEventHandler(e,t,n,r,i){if(typeof e!=`string`){n=t;for(let[t,a]of Object.entries(e))this._addEventHandler(t,a,n,r,i);return}let{manager:a,events:o}=this;if(!a)return;let s=o.get(e);if(!s){let t=this._getRecognizerName(e)||e;s=new Pl(this,t),o.set(e,s),a&&a.on(e,s.handleEvent)}s.add(e,t,n,r,i),s.isEmpty()||this._toggleRecognizer(s.recognizerName,!0)}_removeEventHandler(e,t){if(typeof e!=`string`){for(let[t,n]of Object.entries(e))this._removeEventHandler(t,n);return}let{events:n}=this,r=n.get(e);if(r&&(r.remove(e,t),r.isEmpty())){let{recognizerName:e}=r,t=!1;for(let r of n.values())if(r.recognizerName===e&&!r.isEmpty()){t=!0;break}t||this._toggleRecognizer(e,!1)}}_getRecognizerName(e){return this.manager.recognizers.find(t=>t.getEventNames().includes(e))?.options.event}},Ll={DEFAULT:`default`,LNGLAT:`lnglat`,METER_OFFSETS:`meter-offsets`,LNGLAT_OFFSETS:`lnglat-offsets`,CARTESIAN:`cartesian`};Object.defineProperty(Ll,"IDENTITY",{get:()=>(z.deprecated(`COORDINATE_SYSTEM.IDENTITY`,`COORDINATE_SYSTEM.CARTESIAN`)(),Ll.CARTESIAN)});var Rl={WEB_MERCATOR:1,GLOBE:2,WEB_MERCATOR_AUTO_OFFSET:4,IDENTITY:0},zl={common:0,meters:1,pixels:2},Bl={click:`onClick`,dblclick:`onClick`,panstart:`onDragStart`,panmove:`onDrag`,panend:`onDragEnd`},Vl={multipan:[Jc,{threshold:10,pointers:2,trackpad:!0}],pinch:[Xc,{trackpad:!0},null,[`multipan`]],pan:[Jc,{threshold:1},[`pinch`],[`multipan`]],dblclick:[Gc,{event:`dblclick`,taps:2,enable:!1}],dblclickdrag:[Wc,{event:`dblclickdrag`,enable:!1},[`dblclick`],null],click:[Gc,{event:`click`},[`dblclickdrag`],[`dblclick`,`dblclickdrag`]]};function Hl(e,t){if(e===t)return!0;if(Array.isArray(e)){let n=e.length;if(!t||t.length!==n)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}return!1}function Ul(e){let t={},n;return r=>{for(let i in r)if(!Hl(r[i],t[i])){n=e(r),t=r;break}return n}}var Wl=[0,0,0,0],Gl=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],Kl=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],ql=[0,0,0],Jl=[0,0,0],Yl={default:-1,cartesian:0,lnglat:1,"meter-offsets":2,"lnglat-offsets":3};function Xl(e){let t=Yl[e];if(t===void 0)throw Error(`Invalid coordinateSystem: ${e}`);return t}var Zl=Ul(tu);function Ql(e,t,n=Jl){n.length<3&&(n=[n[0],n[1],0]);let r=n,i,a=!0;switch(i=t===`lnglat-offsets`||t===`meter-offsets`?n:e.isGeospatial?[Math.fround(e.longitude),Math.fround(e.latitude),0]:null,e.projectionMode){case Rl.WEB_MERCATOR:t===`lnglat`?(i=[0,0,0],a=!1):t===`cartesian`&&(a=!1,i=e.unprojectPosition([Math.fround(e.center[0]),Math.fround(e.center[1]),0]));break;case Rl.WEB_MERCATOR_AUTO_OFFSET:t===`lnglat`?r=i:t===`cartesian`&&(r=[Math.fround(e.center[0]),Math.fround(e.center[1]),0],i=e.unprojectPosition(r),r[0]-=n[0],r[1]-=n[1],r[2]-=n[2]);break;case Rl.IDENTITY:r=e.position.map(Math.fround),r[2]=r[2]||0;break;case Rl.GLOBE:a=!1,i=null;break;default:a=!1}return{geospatialOrigin:i,shaderCoordinateOrigin:r,offsetMode:a}}function $l(e,t,n){let{viewMatrixUncentered:r,projectionMatrix:i}=e,{viewMatrix:a,viewProjectionMatrix:o}=e,s=Wl,c=Wl,l=e.cameraPosition,{geospatialOrigin:u,shaderCoordinateOrigin:d,offsetMode:f}=Ql(e,t,n);return f&&(c=e.projectPosition(u||d),l=[l[0]-c[0],l[1]-c[1],l[2]-c[2]],c[3]=1,s=qo([],c,o),a=r||a,o=jo([],i,a),o=jo([],o,Gl)),{viewMatrix:a,viewProjectionMatrix:o,projectionCenter:s,originCommon:c,cameraPosCommon:l,shaderCoordinateOrigin:d,geospatialOrigin:u}}function eu({viewport:e,devicePixelRatio:t=1,modelMatrix:n=null,coordinateSystem:r=`default`,coordinateOrigin:i=Jl,autoWrapLongitude:a=!1}){r==="default"&&(r=e.isGeospatial?`lnglat`:`cartesian`);let o=Zl({viewport:e,devicePixelRatio:t,coordinateSystem:r,coordinateOrigin:i});return o.wrapLongitude=a,o.modelMatrix=n||Kl,o}function tu({viewport:e,devicePixelRatio:t,coordinateSystem:n,coordinateOrigin:r}){let{projectionCenter:i,viewProjectionMatrix:a,originCommon:o,cameraPosCommon:s,shaderCoordinateOrigin:c,geospatialOrigin:l}=$l(e,n,r),u=e.getDistanceScales(),d=[e.width*t,e.height*t],f=qo([],[0,0,-e.focalDistance,1],e.projectionMatrix)[3]||1,p={coordinateSystem:Xl(n),projectionMode:e.projectionMode,coordinateOrigin:c,commonOrigin:o.slice(0,3),center:i,pseudoMeters:!!e._pseudoMeters,viewportSize:d,devicePixelRatio:t,focalDistance:f,commonUnitsPerMeter:u.unitsPerMeter,commonUnitsPerWorldUnit:u.unitsPerMeter,commonUnitsPerWorldUnit2:ql,scale:e.scale,wrapLongitude:!1,viewProjectionMatrix:a,modelMatrix:Kl,cameraPosition:s};if(l){let t=e.getDistanceScales(l);switch(n){case`meter-offsets`:p.commonUnitsPerWorldUnit=t.unitsPerMeter,p.commonUnitsPerWorldUnit2=t.unitsPerMeter2;break;case`lnglat`:case`lnglat-offsets`:e._pseudoMeters||(p.commonUnitsPerMeter=t.unitsPerMeter),p.commonUnitsPerWorldUnit=t.unitsPerDegree,p.commonUnitsPerWorldUnit2=t.unitsPerDegree2;break;case`cartesian`:p.commonUnitsPerWorldUnit=[1,1,t.unitsPerMeter[2]],p.commonUnitsPerWorldUnit2=[0,0,t.unitsPerMeter2[2]]}}if(e.projectionMode===Rl.GLOBE&&n===`meter-offsets`){let e=r[0]*Math.PI/180,t=r[1]*Math.PI/180,n=Math.cos(t),i=((r[2]||0)/6370972+1)*256;p.commonOrigin=[Math.sin(e)*n*i,-Math.cos(e)*n*i,Math.sin(t)*i]}return p}var nu=`\
${`\
${[`default`,`lnglat`,`meter-offsets`,`lnglat-offsets`,`cartesian`].map(e=>`const COORDINATE_SYSTEM_${e.toUpperCase().replaceAll(`-`,`_`)}: i32 = ${Xl(e)};`).join(``)}
${Object.keys(Rl).map(e=>`const PROJECTION_MODE_${e}: i32 = ${Rl[e]};`).join(``)}
${Object.keys(zl).map(e=>`const UNIT_${e.toUpperCase()}: i32 = ${zl[e]};`).join(``)}

const TILE_SIZE: f32 = 512.0;
const PI: f32 = 3.1415926536;
const WORLD_SCALE: f32 = TILE_SIZE / (PI * 2.0);
const ZERO_64_LOW: vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);
const EARTH_RADIUS: f32 = 6370972.0; // meters
const GLOBE_RADIUS: f32 = 256.0;

// -----------------------------------------------------------------------------
// Uniform block (converted from GLSL uniform block)
// -----------------------------------------------------------------------------
struct ProjectUniforms {
  wrapLongitude: i32,
  coordinateSystem: i32,
  commonUnitsPerMeter: vec3<f32>,
  projectionMode: i32,
  scale: f32,
  commonUnitsPerWorldUnit: vec3<f32>,
  commonUnitsPerWorldUnit2: vec3<f32>,
  center: vec4<f32>,
  modelMatrix: mat4x4<f32>,
  viewProjectionMatrix: mat4x4<f32>,
  viewportSize: vec2<f32>,
  devicePixelRatio: f32,
  focalDistance: f32,
  cameraPosition: vec3<f32>,
  coordinateOrigin: vec3<f32>,
  commonOrigin: vec3<f32>,
  pseudoMeters: i32,
};

@group(0) @binding(auto)
var<uniform> project: ProjectUniforms;

// -----------------------------------------------------------------------------
// Geometry data shared across the project helpers.
// The active layer shader is responsible for populating this private module
// state before calling the project functions below.
// -----------------------------------------------------------------------------

// Structure to carry additional geometry data used by deck.gl filters.
struct Geometry {
  worldPosition: vec3<f32>,
  worldPositionAlt: vec3<f32>,
  position: vec4<f32>,
  normal: vec3<f32>,
  uv: vec2<f32>,
  pickingColor: vec3<f32>,
};

var<private> geometry: Geometry;
`}

// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------

// Returns an adjustment factor for commonUnitsPerMeter
fn _project_size_at_latitude(lat: f32) -> f32 {
  let y = clamp(lat, -89.9, 89.9);
  return 1.0 / cos(radians(y));
}

// Overloaded version: scales a value in meters at a given latitude.
fn _project_size_at_latitude_m(meters: f32, lat: f32) -> f32 {
  return meters * project.commonUnitsPerMeter.z * _project_size_at_latitude(lat);
}

// Computes a non-linear scale factor based on geometry.
// (Note: This function relies on "geometry" being provided.)
fn project_size() -> f32 {
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR &&
      project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT &&
      project.pseudoMeters == 0) {
    if (geometry.position.w == 0.0) {
      return _project_size_at_latitude(geometry.worldPosition.y);
    }
    let y: f32 = geometry.position.y / TILE_SIZE * 2.0 - 1.0;
    let y2 = y * y;
    let y4 = y2 * y2;
    let y6 = y4 * y2;
    return 1.0 + 4.9348 * y2 + 4.0587 * y4 + 1.5642 * y6;
  }
  return 1.0;
}

// Overloads to scale offsets (meters to world units)
fn project_size_float(meters: f32) -> f32 {
  return meters * project.commonUnitsPerMeter.z * project_size();
}

fn project_size_vec2(meters: vec2<f32>) -> vec2<f32> {
  return meters * project.commonUnitsPerMeter.xy * project_size();
}

fn project_size_vec3(meters: vec3<f32>) -> vec3<f32> {
  return meters * project.commonUnitsPerMeter * project_size();
}

fn project_size_vec4(meters: vec4<f32>) -> vec4<f32> {
  return vec4<f32>(meters.xyz * project.commonUnitsPerMeter, meters.w);
}

// Returns a rotation matrix aligning the z‑axis with the given up vector.
fn project_get_orientation_matrix(up: vec3<f32>) -> mat3x3<f32> {
  let uz = normalize(up);
  let ux = select(
    vec3<f32>(1.0, 0.0, 0.0),
    normalize(vec3<f32>(uz.y, -uz.x, 0.0)),
    abs(uz.z) == 1.0
  );
  let uy = cross(uz, ux);
  return mat3x3<f32>(ux, uy, uz);
}

// Since WGSL does not support "out" parameters, we return a struct.
struct RotationResult {
  needsRotation: bool,
  transform: mat3x3<f32>,
};

fn project_needs_rotation(commonPosition: vec3<f32>) -> RotationResult {
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    return RotationResult(true, project_get_orientation_matrix(commonPosition));
  } else {
    return RotationResult(false, mat3x3<f32>());  // identity alternative if needed
  };
}

// Projects a normal vector from the current coordinate system to world space.
fn project_normal(vector: vec3<f32>) -> vec3<f32> {
  let normal_modelspace = project.modelMatrix * vec4<f32>(vector, 0.0);
  var n = normalize(normal_modelspace.xyz * project.commonUnitsPerMeter);
  let rotResult = project_needs_rotation(geometry.position.xyz);
  if (rotResult.needsRotation) {
    n = rotResult.transform * n;
  }
  return n;
}

// Applies a scale offset based on y-offset (dy)
fn project_offset_(offset: vec4<f32>) -> vec4<f32> {
  let dy: f32 = offset.y;
  let commonUnitsPerWorldUnit = project.commonUnitsPerWorldUnit + project.commonUnitsPerWorldUnit2 * dy;
  return vec4<f32>(offset.xyz * commonUnitsPerWorldUnit, offset.w);
}

// Projects lng/lat coordinates to a unit tile [0,1]
fn project_mercator_(lnglat: vec2<f32>) -> vec2<f32> {
  var x = lnglat.x;
  if (project.wrapLongitude != 0) {
    x = ((x + 180.0) % 360.0) - 180.0;
  }
  let y = clamp(lnglat.y, -89.9, 89.9);
  return vec2<f32>(
    radians(x) + PI,
    PI + log(tan_fp32(PI * 0.25 + radians(y) * 0.5))
  ) * WORLD_SCALE;
}

// Projects lng/lat/z coordinates for a globe projection.
fn project_globe_(lnglatz: vec3<f32>) -> vec3<f32> {
  let lambda = radians(lnglatz.x);
  let phi = radians(lnglatz.y);
  let cosPhi = cos(phi);
  let D = (lnglatz.z / EARTH_RADIUS + 1.0) * GLOBE_RADIUS;
  return vec3<f32>(
    sin(lambda) * cosPhi,
    -cos(lambda) * cosPhi,
    sin(phi)
  ) * D;
}

// Mercator y of project_mercator_'s latitude clamp: log(tan(PI / 4 + radians(89.9) / 2))
const MAX_MERCATOR_Y: f32 = 7.0439589847;

// Inverse of project_globe_ followed by project_mercator_, without forming lat/lng:
// Mercator y = atanh(sin(lat)) = log((D + |z|) / |xy|), which stays accurate near the poles
fn project_globe_to_mercator_(spherePos: vec3<f32>) -> vec2<f32> {
  let D = length(spherePos);
  let h = max(length(spherePos.xy), 1e-20);
  let y = sign(spherePos.z) * min(log((D + abs(spherePos.z)) / h), MAX_MERCATOR_Y);
  let x = atan2(spherePos.x, -spherePos.y);
  return (vec2<f32>(x, y) + PI) * WORLD_SCALE;
}

// Flat common space (Mercator or cartesian) of a common position; identity except under GLOBE.
// WGSL has no function overloading: pass position.xyz for a vec4. See project.glsl.ts.
fn project_common_position_to_flat(commonPosition: vec3<f32>) -> vec2<f32> {
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    return project_globe_to_mercator_(commonPosition);
  }
  return commonPosition.xy;
}

// World copy of a flat x nearest to referenceX
fn project_wrap_flat_x_(x: f32, referenceX: f32) -> f32 {
  return x - TILE_SIZE * floor((x - referenceX) / TILE_SIZE + 0.5);
}

// Flat position in the world copy nearest to referenceX (e.g. a bounds centre); geospatial only
fn project_common_position_to_flat_wrapped(commonPosition: vec3<f32>, referenceX: f32) -> vec2<f32> {
  var flatPosition = project_common_position_to_flat(commonPosition);
  if (project.projectionMode != PROJECTION_MODE_IDENTITY) {
    flatPosition.x = project_wrap_flat_x_(flatPosition.x, referenceX);
  }
  return flatPosition;
}

// Flat position continuous across the antimeridian under GLOBE (seam moved opposite referenceX,
// e.g. the camera); identity for flat modes. For periodic patterns.
fn project_common_position_to_flat_continuous(commonPosition: vec3<f32>, referenceX: f32) -> vec2<f32> {
  var flatPosition = project_common_position_to_flat(commonPosition);
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    flatPosition.x = project_wrap_flat_x_(flatPosition.x, referenceX);
  }
  return flatPosition;
}

// Projects positions (with an optional 64-bit low part) from the input
// coordinate system to the common space.
fn project_position_vec4_f64(position: vec4<f32>, position64Low: vec3<f32>) -> vec4<f32> {
  var position_world = project.modelMatrix * position;

  // Work around for a Mac+NVIDIA bug:
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      return vec4<f32>(
        project_mercator_(position_world.xy),
        _project_size_at_latitude_m(position_world.z, position_world.y),
        position_world.w
      );
    }
    if (project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN) {
      position_world = vec4f(position_world.xyz + project.coordinateOrigin, position_world.w);
    }
  }
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      return vec4<f32>(
        project_globe_(position_world.xyz),
        position_world.w
      );
    }
    if (project.coordinateSystem == COORDINATE_SYSTEM_METER_OFFSETS) {
      let enuMatrix = project_get_orientation_matrix(project.commonOrigin);
      let metersToCommon = GLOBE_RADIUS / EARTH_RADIUS;
      let offsetCommon = (enuMatrix * vec3<f32>(-position_world.x, -position_world.y, position_world.z)) * metersToCommon;
      return vec4<f32>(project.commonOrigin + offsetCommon, position_world.w);
    }
  }
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      if (abs(position_world.y - project.coordinateOrigin.y) > 0.25) {
        return vec4<f32>(
          project_mercator_(position_world.xy) - project.commonOrigin.xy,
          project_size_float(position_world.z),
          position_world.w
        );
      }
    }
  }
  if (project.projectionMode == PROJECTION_MODE_IDENTITY ||
      (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET &&
       (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
        project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN))) {
    position_world = vec4f(position_world.xyz - project.coordinateOrigin, position_world.w);
  }

  return project_offset_(position_world) +
         project_offset_(project.modelMatrix * vec4<f32>(position64Low, 0.0));
}

// Overloaded versions for different input types.
fn project_position_vec4_f32(position: vec4<f32>) -> vec4<f32> {
  return project_position_vec4_f64(position, ZERO_64_LOW);
}

fn project_position_vec3_f64(position: vec3<f32>, position64Low: vec3<f32>) -> vec3<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 1.0), position64Low);
  return projected_position.xyz;
}

fn project_position_vec3_f32(position: vec3<f32>) -> vec3<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 1.0), ZERO_64_LOW);
  return projected_position.xyz;
}

fn project_position_vec2_f32(position: vec2<f32>) -> vec2<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 0.0, 1.0), ZERO_64_LOW);
  return projected_position.xy;
}

// Transforms a common space position to clip space.
fn project_common_position_to_clipspace_with_projection(position: vec4<f32>, viewProjectionMatrix: mat4x4<f32>, center: vec4<f32>) -> vec4<f32> {
  var clipPosition = viewProjectionMatrix * position + center;
  // deck.gl projection matrices use WebGL's [-w, w] depth range; WebGPU clips z to [0, w].
  clipPosition.z = (clipPosition.z + clipPosition.w) * 0.5;
  return clipPosition;
}

// Uses the project viewProjectionMatrix and center.
fn project_common_position_to_clipspace(position: vec4<f32>) -> vec4<f32> {
  return project_common_position_to_clipspace_with_projection(position, project.viewProjectionMatrix, project.center);
}

// Returns a clip space offset corresponding to a given number of screen pixels.
fn project_pixel_size_to_clipspace(pixels: vec2<f32>) -> vec2<f32> {
  let offset = pixels / project.viewportSize * project.devicePixelRatio * 2.0;
  return offset * project.focalDistance;
}

fn project_meter_size_to_pixel(meters: f32) -> f32 {
  return project_size_float(meters) * project.scale;
}

fn project_unit_size_to_pixel(size: f32, unit: i32) -> f32 {
  if (unit == UNIT_METERS) {
    return project_meter_size_to_pixel(size);
  } else if (unit == UNIT_COMMON) {
    return size * project.scale;
  }
  // UNIT_PIXELS: no scaling applied.
  return size;
}

fn project_pixel_size_float(pixels: f32) -> f32 {
  return pixels / project.scale;
}

fn project_pixel_size_vec2(pixels: vec2<f32>) -> vec2<f32> {
  return pixels / project.scale;
}
`,ru=`\
${[`default`,`lnglat`,`meter-offsets`,`lnglat-offsets`,`cartesian`].map(e=>`const int COORDINATE_SYSTEM_${e.toUpperCase().replaceAll(`-`,`_`)} = ${Xl(e)};`).join(``)}
${Object.keys(Rl).map(e=>`const int PROJECTION_MODE_${e} = ${Rl[e]};`).join(``)}
${Object.keys(zl).map(e=>`const int UNIT_${e.toUpperCase()} = ${zl[e]};`).join(``)}
layout(std140) uniform projectUniforms {
bool wrapLongitude;
int coordinateSystem;
vec3 commonUnitsPerMeter;
int projectionMode;
float scale;
vec3 commonUnitsPerWorldUnit;
vec3 commonUnitsPerWorldUnit2;
vec4 center;
mat4 modelMatrix;
mat4 viewProjectionMatrix;
vec2 viewportSize;
float devicePixelRatio;
float focalDistance;
vec3 cameraPosition;
vec3 coordinateOrigin;
vec3 commonOrigin;
bool pseudoMeters;
} project;
const float TILE_SIZE = 512.0;
const float PI = 3.1415926536;
const float WORLD_SCALE = TILE_SIZE / (PI * 2.0);
const vec3 ZERO_64_LOW = vec3(0.0);
const float EARTH_RADIUS = 6370972.0;
const float GLOBE_RADIUS = 256.0;
float project_size_at_latitude(float lat) {
float y = clamp(lat, -89.9, 89.9);
return 1.0 / cos(radians(y));
}
float project_size() {
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR &&
project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT &&
project.pseudoMeters == false) {
if (geometry.position.w == 0.0) {
return project_size_at_latitude(geometry.worldPosition.y);
}
float y = geometry.position.y / TILE_SIZE * 2.0 - 1.0;
float y2 = y * y;
float y4 = y2 * y2;
float y6 = y4 * y2;
return 1.0 + 4.9348 * y2 + 4.0587 * y4 + 1.5642 * y6;
}
return 1.0;
}
float project_size_at_latitude(float meters, float lat) {
return meters * project.commonUnitsPerMeter.z * project_size_at_latitude(lat);
}
float project_size(float meters) {
return meters * project.commonUnitsPerMeter.z * project_size();
}
vec2 project_size(vec2 meters) {
return meters * project.commonUnitsPerMeter.xy * project_size();
}
vec3 project_size(vec3 meters) {
return meters * project.commonUnitsPerMeter * project_size();
}
vec4 project_size(vec4 meters) {
return vec4(meters.xyz * project.commonUnitsPerMeter, meters.w);
}
mat3 project_get_orientation_matrix(vec3 up) {
vec3 uz = normalize(up);
vec3 ux = abs(uz.z) == 1.0 ? vec3(1.0, 0.0, 0.0) : normalize(vec3(uz.y, -uz.x, 0));
vec3 uy = cross(uz, ux);
return mat3(ux, uy, uz);
}
bool project_needs_rotation(vec3 commonPosition, out mat3 transform) {
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
transform = project_get_orientation_matrix(commonPosition);
return true;
}
return false;
}
vec3 project_normal(vec3 vector) {
vec4 normal_modelspace = project.modelMatrix * vec4(vector, 0.0);
vec3 n = normalize(normal_modelspace.xyz * project.commonUnitsPerMeter);
mat3 rotation;
if (project_needs_rotation(geometry.position.xyz, rotation)) {
n = rotation * n;
}
return n;
}
vec4 project_offset_(vec4 offset) {
float dy = offset.y;
vec3 commonUnitsPerWorldUnit = project.commonUnitsPerWorldUnit + project.commonUnitsPerWorldUnit2 * dy;
return vec4(offset.xyz * commonUnitsPerWorldUnit, offset.w);
}
vec2 project_mercator_(vec2 lnglat) {
float x = lnglat.x;
if (project.wrapLongitude) {
x = mod(x + 180., 360.0) - 180.;
}
float y = clamp(lnglat.y, -89.9, 89.9);
return vec2(
radians(x) + PI,
PI + log(tan_fp32(PI * 0.25 + radians(y) * 0.5))
) * WORLD_SCALE;
}
vec3 project_globe_(vec3 lnglatz) {
float lambda = radians(lnglatz.x);
float phi = radians(lnglatz.y);
float cosPhi = cos(phi);
float D = (lnglatz.z / EARTH_RADIUS + 1.0) * GLOBE_RADIUS;
return vec3(
sin(lambda) * cosPhi,
-cos(lambda) * cosPhi,
sin(phi)
) * D;
}
const float MAX_MERCATOR_Y = 7.0439589847;
vec2 project_globe_to_mercator_(vec3 spherePos) {
float D = length(spherePos);
float h = max(length(spherePos.xy), 1e-20);
float y = sign(spherePos.z) * min(log((D + abs(spherePos.z)) / h), MAX_MERCATOR_Y);
float x = atan(spherePos.x, -spherePos.y);
return (vec2(x, y) + PI) * WORLD_SCALE;
}
vec2 project_common_position_to_flat(vec3 commonPosition) {
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
return project_globe_to_mercator_(commonPosition);
}
return commonPosition.xy;
}
vec2 project_common_position_to_flat(vec4 commonPosition) {
return project_common_position_to_flat(commonPosition.xyz);
}
float project_wrap_flat_x_(float x, float referenceX) {
return x - TILE_SIZE * floor((x - referenceX) / TILE_SIZE + 0.5);
}
vec2 project_common_position_to_flat_wrapped(vec3 commonPosition, float referenceX) {
vec2 flatPosition = project_common_position_to_flat(commonPosition);
if (project.projectionMode != PROJECTION_MODE_IDENTITY) {
flatPosition.x = project_wrap_flat_x_(flatPosition.x, referenceX);
}
return flatPosition;
}
vec2 project_common_position_to_flat_wrapped(vec4 commonPosition, float referenceX) {
return project_common_position_to_flat_wrapped(commonPosition.xyz, referenceX);
}
vec2 project_common_position_to_flat_continuous(vec3 commonPosition, float referenceX) {
vec2 flatPosition = project_common_position_to_flat(commonPosition);
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
flatPosition.x = project_wrap_flat_x_(flatPosition.x, referenceX);
}
return flatPosition;
}
vec2 project_common_position_to_flat_continuous(vec4 commonPosition, float referenceX) {
return project_common_position_to_flat_continuous(commonPosition.xyz, referenceX);
}
vec4 project_position(vec4 position, vec3 position64Low) {
vec4 position_world = project.modelMatrix * position;
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
return vec4(
project_mercator_(position_world.xy),
project_size_at_latitude(position_world.z, position_world.y),
position_world.w
);
}
if (project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN) {
position_world.xyz += project.coordinateOrigin;
}
}
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
return vec4(
project_globe_(position_world.xyz),
position_world.w
);
}
if (project.coordinateSystem == COORDINATE_SYSTEM_METER_OFFSETS) {
mat3 enuMatrix = project_get_orientation_matrix(project.commonOrigin);
float metersToCommon = GLOBE_RADIUS / EARTH_RADIUS;
vec3 offsetCommon = (enuMatrix * vec3(-position_world.xy, position_world.z)) * metersToCommon;
return vec4(project.commonOrigin + offsetCommon, position_world.w);
}
}
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
if (abs(position_world.y - project.coordinateOrigin.y) > 0.25) {
return vec4(
project_mercator_(position_world.xy) - project.commonOrigin.xy,
project_size(position_world.z),
position_world.w
);
}
}
}
if (project.projectionMode == PROJECTION_MODE_IDENTITY ||
(project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET &&
(project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN))) {
position_world.xyz -= project.coordinateOrigin;
}
return project_offset_(position_world) + project_offset_(project.modelMatrix * vec4(position64Low, 0.0));
}
vec4 project_position(vec4 position) {
return project_position(position, ZERO_64_LOW);
}
vec3 project_position(vec3 position, vec3 position64Low) {
vec4 projected_position = project_position(vec4(position, 1.0), position64Low);
return projected_position.xyz;
}
vec3 project_position(vec3 position) {
vec4 projected_position = project_position(vec4(position, 1.0), ZERO_64_LOW);
return projected_position.xyz;
}
vec2 project_position(vec2 position) {
vec4 projected_position = project_position(vec4(position, 0.0, 1.0), ZERO_64_LOW);
return projected_position.xy;
}
vec4 project_common_position_to_clipspace(vec4 position, mat4 viewProjectionMatrix, vec4 center) {
return viewProjectionMatrix * position + center;
}
vec4 project_common_position_to_clipspace(vec4 position) {
return project_common_position_to_clipspace(position, project.viewProjectionMatrix, project.center);
}
vec2 project_pixel_size_to_clipspace(vec2 pixels) {
vec2 offset = pixels / project.viewportSize * project.devicePixelRatio * 2.0;
return offset * project.focalDistance;
}
float project_size_to_pixel(float meters) {
return project_size(meters) * project.scale;
}
vec2 project_size_to_pixel(vec2 meters) {
return project_size(meters) * project.scale;
}
float project_size_to_pixel(float size, int unit) {
if (unit == UNIT_METERS) return project_size_to_pixel(size);
if (unit == UNIT_COMMON) return size * project.scale;
return size;
}
float project_pixel_size(float pixels) {
return pixels / project.scale;
}
vec2 project_pixel_size(vec2 pixels) {
return pixels / project.scale;
}
`,iu={};function au(e=iu){return`viewport`in e?eu(e):{}}var ou={name:`project`,dependencies:[ce,Ys],source:nu,vs:ru,getUniforms:au,uniformTypes:{wrapLongitude:`f32`,coordinateSystem:`i32`,commonUnitsPerMeter:`vec3<f32>`,projectionMode:`i32`,scale:`f32`,commonUnitsPerWorldUnit:`vec3<f32>`,commonUnitsPerWorldUnit2:`vec3<f32>`,center:`vec4<f32>`,modelMatrix:`mat4x4<f32>`,viewProjectionMatrix:`mat4x4<f32>`,viewportSize:`vec2<f32>`,devicePixelRatio:`f32`,focalDistance:`f32`,cameraPosition:`vec3<f32>`,coordinateOrigin:`vec3<f32>`,commonOrigin:`vec3<f32>`,pseudoMeters:`f32`}},su={name:`project32`,dependencies:[ou],source:`// Define a structure to hold both the clip-space position and the common position.
struct ProjectResult {
  clipPosition: vec4<f32>,
  commonPosition: vec4<f32>,
};

// This function mimics the GLSL version with the 'out' parameter by returning both values.
fn project_position_to_clipspace_and_commonspace(
    position: vec3<f32>,
    position64Low: vec3<f32>,
    offset: vec3<f32>
) -> ProjectResult {
  // Compute the projected position.
  let projectedPosition: vec3<f32> = project_position_vec3_f64(position, position64Low);

  // Start with the provided offset.
  var finalOffset: vec3<f32> = offset;

  // Get whether a rotation is needed and the rotation matrix.
  let rotationResult = project_needs_rotation(projectedPosition);

  // If rotation is needed, update the offset.
  if (rotationResult.needsRotation) {
    finalOffset = rotationResult.transform * offset;
  }

  // Compute the common position.
  let commonPosition: vec4<f32> = vec4<f32>(projectedPosition + finalOffset, 1.0);

  // Convert to clip-space.
  let clipPosition: vec4<f32> = project_common_position_to_clipspace(commonPosition);

  return ProjectResult(clipPosition, commonPosition);
}

// A convenience overload that returns only the clip-space position.
fn project_position_to_clipspace(
    position: vec3<f32>,
    position64Low: vec3<f32>,
    offset: vec3<f32>
) -> vec4<f32> {
  return project_position_to_clipspace_and_commonspace(position, position64Low, offset).clipPosition;
}
`,vs:`vec4 project_position_to_clipspace(
  vec3 position, vec3 position64Low, vec3 offset, out vec4 commonPosition
) {
  vec3 projectedPosition = project_position(position, position64Low);
  mat3 rotation;
  if (project_needs_rotation(projectedPosition, rotation)) {
    // offset is specified as ENU
    // when in globe projection, rotate offset so that the ground alighs with the surface of the globe
    offset = rotation * offset;
  }
  commonPosition = vec4(projectedPosition + offset, 1.0);
  return project_common_position_to_clipspace(commonPosition);
}

vec4 project_position_to_clipspace(
  vec3 position, vec3 position64Low, vec3 offset
) {
  vec4 commonPosition;
  return project_position_to_clipspace(position, position64Low, offset, commonPosition);
}
`};function cu(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function lu(e,t){let n=qo([],t,e);return Ko(n,n,1/n[3]),n}function uu(e,t,n){return e<t?t:e>n?n:e}function du(e){return Math.log(e)*Math.LOG2E}var fu=Math.log2||du;function pu(e,t){if(!e)throw Error(t||`@math.gl/web-mercator: assertion failed.`)}var mu=Math.PI,hu=mu/4,gu=mu/180,_u=180/mu,vu=512,yu=4003e4,bu=85.051129,xu=1.5;function Su(e){return fu(e)}function Cu(e){let[t,n]=e;pu(Number.isFinite(t)),pu(Number.isFinite(n)&&n>=-90&&n<=90,`invalid latitude`);let r=t*gu,i=n*gu;return[vu*(r+mu)/(2*mu),vu*(mu+Math.log(Math.tan(hu+i*.5)))/(2*mu)]}function wu(e){let[t,n]=e,r=t/vu*(2*mu)-mu,i=2*(Math.atan(Math.exp(n/vu*(2*mu)-mu))-hu);return[r*_u,i*_u]}function Tu(e){let{latitude:t}=e;return pu(Number.isFinite(t)),Su(yu*Math.cos(t*gu))-9}function Eu(e){let t=Math.cos(e*gu);return vu/yu/t}function Du(e){let{latitude:t,longitude:n,highPrecision:r=!1}=e;pu(Number.isFinite(t)&&Number.isFinite(n));let i=vu,a=Math.cos(t*gu),o=i/360,s=o/a,c=i/yu/a,l={unitsPerMeter:[c,c,c],metersPerUnit:[1/c,1/c,1/c],unitsPerDegree:[o,s,c],degreesPerUnit:[1/o,1/s,1/c]};if(r){let e=gu*Math.tan(t*gu)/a,n=o*e/2,r=i/yu*e,u=r/s*c;l.unitsPerDegree2=[0,n,r],l.unitsPerMeter2=[u,0,u]}return l}function Ou(e,t){let[n,r,i]=e,[a,o,s]=t,{unitsPerMeter:c,unitsPerMeter2:l}=Du({longitude:n,latitude:r,highPrecision:!0}),u=Cu(e);u[0]+=a*(c[0]+l[0]*o),u[1]+=o*(c[1]+l[1]*o);let d=wu(u),f=(i||0)+(s||0);return Number.isFinite(i)||Number.isFinite(s)?[d[0],d[1],f]:d}function ku(e){let{height:t,pitch:n,bearing:r,altitude:i,scale:a,center:o}=e,s=cu();Mo(s,s,[0,0,-i]),Fo(s,s,-n*gu),Lo(s,s,r*gu);let c=a/t;return No(s,s,[c,c,c]),o&&Mo(s,s,fo([],o)),s}function Au(e){let{width:t,height:n,altitude:r,pitch:i=0,offset:a,center:o,scale:s,nearZMultiplier:c=1,farZMultiplier:l=1}=e,{fovy:u=ju(xu)}=e;r!==void 0&&(u=ju(r));let d=u*gu,f=i*gu,p=Mu(u),m=p;o&&(m+=o[2]*s/Math.cos(f)/n);let h=d*(.5+(a?a[1]:0)/n),g=Math.sin(h)*m/Math.sin(uu(Math.PI/2-f-h,.01,Math.PI-.01)),_=Math.sin(f)*g+m,v=m*10,y=Math.min(_*l,v);return{fov:d,aspect:t/n,focalDistance:p,near:c,far:y}}function ju(e){return 2*Math.atan(.5/e)*_u}function Mu(e){return .5/Math.tan(.5*e*gu)}function Nu(e,t){let[n,r,i=0]=e;return pu(Number.isFinite(n)&&Number.isFinite(r)&&Number.isFinite(i)),lu(t,[n,r,i,1])}function Pu(e,t,n=0){let[r,i,a]=e;if(pu(Number.isFinite(r)&&Number.isFinite(i),`invalid pixel coordinate`),Number.isFinite(a))return lu(t,[r,i,a,1]);let o=lu(t,[r,i,0,1]),s=lu(t,[r,i,1,1]),c=o[2],l=s[2];return ro([],o,s,c===l?0:((n||0)-c)/(l-c))}function Fu(e){let{width:t,height:n,bounds:r,minExtent:i=0,maxZoom:a=24,offset:o=[0,0]}=e,[[s,c],[l,u]]=r,d=Iu(e.padding),f=Cu([s,uu(u,-bu,bu)]),p=Cu([l,uu(c,-bu,bu)]),m=[Math.max(Math.abs(p[0]-f[0]),i),Math.max(Math.abs(p[1]-f[1]),i)],h=[t-d.left-d.right-Math.abs(o[0])*2,n-d.top-d.bottom-Math.abs(o[1])*2];pu(h[0]>0&&h[1]>0);let g=h[0]/m[0],_=h[1]/m[1],v=(d.right-d.left)/2/g,y=(d.top-d.bottom)/2/_,b=wu([(p[0]+f[0])/2+v,(p[1]+f[1])/2+y]),x=Math.min(a,fu(Math.abs(Math.min(g,_))));return pu(Number.isFinite(x)),{longitude:b[0],latitude:b[1],zoom:x}}function Iu(e=0){return typeof e==`number`?{top:e,bottom:e,left:e,right:e}:(pu(Number.isFinite(e.top)&&Number.isFinite(e.bottom)&&Number.isFinite(e.left)&&Number.isFinite(e.right)),e)}var Lu=Math.PI/180;function Ru(e,t=0){let{width:n,height:r,unproject:i}=e,a={targetZ:t},o=i([0,r],a),s=i([n,r],a),c,l;return(e.fovy?.5*e.fovy*Lu:Math.atan(.5/e.altitude))>(90-e.pitch)*Lu-.01?(c=zu(e,0,t),l=zu(e,n,t)):(c=i([0,0],a),l=i([n,0],a)),[o,s,l,c]}function zu(e,t,n){let{pixelUnprojectionMatrix:r}=e,i=lu(r,[t,0,1,1]),a=lu(r,[t,e.height,1,1]),o=wu(ro([],i,a,(n*e.distanceScales.unitsPerMeter[2]-i[2])/(a[2]-i[2])));return o.push(n),o}var Bu=`
layout(std140) uniform shadowUniforms {
  bool drawShadowMap;
  bool useShadowMap;
  vec4 color;
  highp int lightId;
  float lightCount;
  mat4 viewProjectionMatrix0;
  mat4 viewProjectionMatrix1;
  vec4 projectCenter0;
  vec4 projectCenter1;
} shadow;
`,Vu=`
${Bu}

const int max_lights = 2;

out vec3 shadow_vPosition[max_lights];

vec4 shadow_setVertexPosition(vec4 position_commonspace) {
  mat4 viewProjectionMatrices[max_lights];
  viewProjectionMatrices[0] = shadow.viewProjectionMatrix0;
  viewProjectionMatrices[1] = shadow.viewProjectionMatrix1;
  vec4 projectCenters[max_lights];
  projectCenters[0] = shadow.projectCenter0;
  projectCenters[1] = shadow.projectCenter1;

  if (shadow.drawShadowMap) {
    return project_common_position_to_clipspace(position_commonspace, viewProjectionMatrices[shadow.lightId], projectCenters[shadow.lightId]);
  }
  if (shadow.useShadowMap) {
    for (int i = 0; i < max_lights; i++) {
      if(i < int(shadow.lightCount)) {
        vec4 shadowMap_position = project_common_position_to_clipspace(position_commonspace, viewProjectionMatrices[i], projectCenters[i]);
        shadow_vPosition[i] = (shadowMap_position.xyz / shadowMap_position.w + 1.0) / 2.0;
      }
    }
  }
  return gl_Position;
}

`,Hu=`
${Bu}

const int max_lights = 2;
uniform sampler2D shadow_uShadowMap0;
uniform sampler2D shadow_uShadowMap1;

in vec3 shadow_vPosition[max_lights];

const vec4 bitPackShift = vec4(1.0, 255.0, 65025.0, 16581375.0);
const vec4 bitUnpackShift = 1.0 / bitPackShift;
const vec4 bitMask = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0,  0.0);

float shadow_getShadowWeight(vec3 position, sampler2D shadowMap) {
  vec4 rgbaDepth = texture(shadowMap, position.xy);

  float z = dot(rgbaDepth, bitUnpackShift);
  return smoothstep(0.001, 0.01, position.z - z);
}

vec4 shadow_filterShadowColor(vec4 color) {
  if (shadow.drawShadowMap) {
    vec4 rgbaDepth = fract(gl_FragCoord.z * bitPackShift);
    rgbaDepth -= rgbaDepth.gbaa * bitMask;
    return rgbaDepth;
  }
  if (shadow.useShadowMap) {
    float shadowAlpha = 0.0;
    shadowAlpha += shadow_getShadowWeight(shadow_vPosition[0], shadow_uShadowMap0);
    if(shadow.lightCount > 1.0) {
      shadowAlpha += shadow_getShadowWeight(shadow_vPosition[1], shadow_uShadowMap1);
    }
    shadowAlpha *= shadow.color.a / shadow.lightCount;
    float blendedAlpha = shadowAlpha + color.a * (1.0 - shadowAlpha);

    return vec4(
      mix(color.rgb, shadow.color.rgb, shadowAlpha / blendedAlpha),
      blendedAlpha
    );
  }
  return color;
}

`,Uu=Ul(Ju),Wu=Ul(Yu),Gu=[0,0,0,1],Ku=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0];function qu(e){let{width:t,height:n,pixelUnprojectionMatrix:r}=e,i=[[0,0],[t,0],[t,n],[0,n]],a=i.map(([e,t])=>Pu([e,t,-1],r)),o=i.map(([e,t])=>Pu([e,t,1],r));if(!e.isGeospatial)return a.concat(o);let s=a.concat(o).filter(e=>e[2]>=0);for(let e=0;e<4;e++){let t=(e+1)%4;for(let[n,r]of[[a[e],o[e]],[a[e],a[t]],[o[e],o[t]]])if(n[2]<0!=r[2]<0){let e=n[2]/(n[2]-r[2]);s.push([n[0]+(r[0]-n[0])*e,n[1]+(r[1]-n[1])*e,0])}}return s.length>0?s:a.concat(o)}function Ju({viewport:e,center:t}){return new es(e.viewProjectionMatrix).invert().transform(t)}function Yu({viewport:e,shadowMatrices:t}){let n=[],r=qu(e);for(let i of t){let t=i.clone().translate(new To(e.center).negate()),a=r.map(e=>t.transform(e)),o=new es().ortho({left:Math.min(...a.map(e=>e[0])),right:Math.max(...a.map(e=>e[0])),bottom:Math.min(...a.map(e=>e[1])),top:Math.max(...a.map(e=>e[1])),near:Math.min(...a.map(e=>-e[2])),far:Math.max(...a.map(e=>-e[2]))});n.push(o.multiplyRight(i))}return n}function Xu(e){let{shadowEnabled:t=!0,project:n}=e;if(!t||!n||!e.shadowMatrices||!e.shadowMatrices.length)return{drawShadowMap:!1,useShadowMap:!1,shadow_uShadowMap0:e.dummyShadowMap,shadow_uShadowMap1:e.dummyShadowMap};let r=ou.getUniforms(n),i=Uu({viewport:n.viewport,center:r.center}),a=[],o=Wu({shadowMatrices:e.shadowMatrices,viewport:n.viewport}).slice();for(let t=0;t<e.shadowMatrices.length;t++){let e=o[t],s=e.clone().translate(new To(n.viewport.center).negate());r.coordinateSystem===Xl(`lnglat`)&&r.projectionMode===Rl.WEB_MERCATOR?(o[t]=s,a[t]=i):(o[t]=e.clone().multiplyRight(Ku),a[t]=s.transform(i))}let s={drawShadowMap:!!e.drawToShadowMap,useShadowMap:e.shadowMaps?e.shadowMaps.length>0:!1,color:e.shadowColor||Gu,lightId:e.shadowLightId||0,lightCount:e.shadowMatrices.length,shadow_uShadowMap0:e.dummyShadowMap,shadow_uShadowMap1:e.dummyShadowMap};for(let e=0;e<o.length;e++)s[`viewProjectionMatrix${e}`]=o[e],s[`projectCenter${e}`]=a[e];for(let t=0;t<2;t++)s[`shadow_uShadowMap${t}`]=e.shadowMaps&&e.shadowMaps[t]||e.dummyShadowMap;return s}var Zu={name:`shadow`,dependencies:[ou],vs:Vu,fs:Hu,inject:{"vs:DECKGL_FILTER_GL_POSITION":`
    position = shadow_setVertexPosition(geometry.position);
    `,"fs:DECKGL_FILTER_COLOR":`
    color = shadow_filterShadowColor(color);
    `},getUniforms:Xu,uniformTypes:{drawShadowMap:`f32`,useShadowMap:`f32`,color:`vec4<f32>`,lightId:`i32`,lightCount:`f32`,viewProjectionMatrix0:`mat4x4<f32>`,viewProjectionMatrix1:`mat4x4<f32>`,projectCenter0:`vec4<f32>`,projectCenter1:`vec4<f32>`}},Qu=16777215;function $u(e,t){e.length===10?z.warn(`pickMultipleObjects can only exclude 10 previously picked objects for layers without picking buffers`)():e.push(t)}var ed=`  float disabledPickingIndexCount;
  vec4 disabledPickingIndices0;
  vec4 disabledPickingIndices1;
  vec4 disabledPickingIndices2;
`;function td(e){return e.replace(`  vec4 highlightColor;
} picking;`,`  vec4 highlightColor;\n${ed}} picking;`)}function nd(e,t){return[e[t]||0,e[t+1]||0,e[t+2]||0,e[t+3]||0]}var rd=`\
vec3 picking_getPickingColorFromIndex(float objectIndex) {
  if (objectIndex < 0.0 || objectIndex >= ${Qu}.0) {
    return vec3(0.0);
  }

  for (int i = 0; i < 10; i++) {
    if (float(i) >= picking.disabledPickingIndexCount) {
      break;
    }
    vec4 disabledIndices = i < 4
      ? picking.disabledPickingIndices0
      : (i < 8 ? picking.disabledPickingIndices1 : picking.disabledPickingIndices2);
    float disabledIndex = disabledIndices[i - (i / 4) * 4];
    if (disabledIndex == objectIndex) {
      return vec3(0.0);
    }
  }

  float encodedIndex = objectIndex + 1.0;
  return vec3(
    mod(encodedIndex, 256.0),
    mod(floor(encodedIndex / 256.0), 256.0),
    mod(floor(encodedIndex / 65536.0), 256.0)
  );
}

vec3 picking_getPickingColorFromIndex(uint objectIndex) {
  return picking_getPickingColorFromIndex(float(objectIndex));
}

vec3 picking_getPickingColorFromInstanceID() {
  return picking_getPickingColorFromIndex(float(gl_InstanceID));
}

void picking_setPickingColorFromInstanceID() {
  picking_setPickingColor(picking_getPickingColorFromInstanceID());
}
`,id=`\
struct pickingUniforms {
  isActive: f32,
  isAttribute: f32,
  isHighlightActive: f32,
  useByteColors: f32,
  highlightedObjectColor: vec3<f32>,
  highlightColor: vec4<f32>,
  disabledPickingIndexCount: f32,
  disabledPickingIndices0: vec4<f32>,
  disabledPickingIndices1: vec4<f32>,
  disabledPickingIndices2: vec4<f32>,
};

@group(0) @binding(auto) var<uniform> picking: pickingUniforms;

fn picking_normalizeColor(color: vec3<f32>) -> vec3<f32> {
  return select(color, color / 255.0, picking.useByteColors > 0.5);
}

fn picking_normalizeColor4(color: vec4<f32>) -> vec4<f32> {
  return select(color, color / 255.0, picking.useByteColors > 0.5);
}

fn picking_isColorZero(color: vec3<f32>) -> bool {
  return dot(color, vec3<f32>(1.0)) < 0.00001;
}

fn picking_isColorValid(color: vec3<f32>) -> bool {
  return dot(color, vec3<f32>(1.0)) > 0.00001;
}

fn picking_getPickingColorFromIndex(objectIndex: u32) -> vec3<f32> {
  if (objectIndex >= ${Qu}u) {
    return vec3<f32>(0.0);
  }

  for (var i = 0; i < 10; i = i + 1) {
    if (f32(i) >= picking.disabledPickingIndexCount) {
      break;
    }
    let disabledIndices = select(
      picking.disabledPickingIndices2,
      select(picking.disabledPickingIndices1, picking.disabledPickingIndices0, i < 4),
      i < 8
    );
    let disabledIndex = disabledIndices[i % 4];
    if (disabledIndex == f32(objectIndex)) {
      return vec3<f32>(0.0);
    }
  }

  let encodedIndex = objectIndex + 1u;
  return vec3<f32>(
    f32(encodedIndex % 256u),
    f32((encodedIndex / 256u) % 256u),
    f32((encodedIndex / 65536u) % 256u)
  ) / 255.0;
}
`,ad={...ws,vs:`${td(ws.vs)}\n${rd}`,fs:td(ws.fs),source:id,uniformTypes:{...ws.uniformTypes,disabledPickingIndexCount:`f32`,disabledPickingIndices0:`vec4<f32>`,disabledPickingIndices1:`vec4<f32>`,disabledPickingIndices2:`vec4<f32>`},defaultUniforms:{...ws.defaultUniforms,useByteColors:!0,disabledPickingIndexCount:0,disabledPickingIndices0:[0,0,0,0],disabledPickingIndices1:[0,0,0,0],disabledPickingIndices2:[0,0,0,0]},getUniforms(e,t){let n=ws.getUniforms(e,t),r=e.disabledPickingIndices||[];return n.disabledPickingIndexCount=r.length,n.disabledPickingIndices0=nd(r,0),n.disabledPickingIndices1=nd(r,4),n.disabledPickingIndices2=nd(r,8),n},inject:{"vs:DECKGL_FILTER_GL_POSITION":`
    // for picking depth values
    picking_setPickingAttribute(position.z / position.w);
  `,"vs:DECKGL_FILTER_COLOR":`
  picking_setPickingColor(geometry.pickingColor);
  `,"fs:DECKGL_FILTER_COLOR":{order:99,injection:`
  // use highlight color if this fragment belongs to the selected object.
  color = picking_filterHighlightColor(color);

  // use picking color if rendering to picking FBO.
  color = picking_filterPickingColor(color);
    `}}},od=[Ys],sd=[`vs:DECKGL_FILTER_SIZE(inout vec3 size, VertexGeometry geometry)`,`vs:DECKGL_FILTER_GL_POSITION(inout vec4 position, VertexGeometry geometry)`,`vs:DECKGL_FILTER_COLOR(inout vec4 color, VertexGeometry geometry)`,`fs:DECKGL_FILTER_COLOR(inout vec4 color, FragmentGeometry geometry)`],cd=[];function ld(e){let t=De.getDefaultShaderAssembler(e);for(let e of od)t.addDefaultModule(e);t._hookFunctions.length=0;let n=e===`glsl`?sd:cd;for(let e of n)t.addShaderHook(e);return t}var ud=[255,255,255],dd=1,fd=0,pd=class{constructor(e={}){this.type=`ambient`;let{color:t=ud}=e,{intensity:n=dd}=e;this.id=e.id||`ambient-${fd++}`,this.color=t,this.intensity=n}},md=[255,255,255],hd=1,gd=[0,0,-1],_d=0,vd=class{constructor(e={}){this.type=`directional`;let{color:t=md}=e,{intensity:n=hd}=e,{direction:r=gd}=e,{_shadow:i=!1}=e;this.id=e.id||`directional-${_d++}`,this.color=t,this.intensity=n,this.type=`directional`,this.direction=new To(r).normalize().toArray(),this.shadow=i}getProjectedLight(e){return this}},yd=class{constructor(e,t={id:`pass`}){let{id:n}=t;this.id=n,this.device=e,this.props={...t}}setProps(e){Object.assign(this.props,e)}render(e){}cleanup(){}},bd={depthWriteEnabled:!0,depthCompare:`less-equal`,blendColorOperation:`add`,blendColorSrcFactor:`one`,blendColorDstFactor:`one-minus-src-alpha`,blendAlphaOperation:`add`,blendAlphaSrcFactor:`one`,blendAlphaDstFactor:`one-minus-src-alpha`},xd=class extends yd{constructor(){super(...arguments),this._lastRenderIndex=-1}render(e){this._render(e)}_render(e){let{canvasContext:t=this.device.canvasContext}=e,n=e.target??t.getCurrentFramebuffer(),[r,i]=t.getDrawingBufferSize(),a=e.clearCanvas??!0,o=e.clearColor??(a?[0,0,0,0]:!1),s=a?1:!1,c=a?0:!1,l=e.colorMask??15,u={viewport:[0,0,r,i]};e.colorMask&&(u.colorMask=l),e.scissorRect&&(u.scissorRect=e.scissorRect);let{shaderModuleProps:d,viewports:f,views:p,onViewportActive:m,clearStack:h=!0}=e,g=e.pass||`unknown`,_=this.device.type===`webgpu`;h&&(this._lastRenderIndex=-1);let v=[];if(!f.length)return this.device.beginRenderPass({framebuffer:n,parameters:u,clearColor:o,clearDepth:s,clearStencil:c}).end(),this.device.submit(),v;try{for(let r of f){m?.(r);let i=this._getDrawLayerParams(r,e),a=p&&p[r.id],l=r.subViewports||[r],f=_?l.map(e=>[e]):[l];for(let r of f){let l=this.device.beginRenderPass({framebuffer:n,parameters:u,clearColor:o,clearDepth:s,clearStencil:c});try{for(let o of r){let r=this._drawLayersInViewport(l,{target:n,canvasContext:t,shaderModuleProps:d,viewport:o,view:a,pass:g,layers:e.layers,isPicking:e.isPicking},i);v.push(r)}}finally{l.end(),_&&this.device.submit()}o=!1,s=!1,c=!1}}return v}finally{_||this.device.submit()}}_getDrawLayerParams(e,{layers:t,pass:n,isPicking:r=!1,layerFilter:i,cullRect:a,views:o,effects:s,canvasContext:c=this.device.canvasContext,shaderModuleProps:l},u=!1){let d=[],f=Sd(this._lastRenderIndex+1),p={layer:t[0],viewport:e,isPicking:r,renderPass:n,cullRect:a},m={};for(let r=0;r<t.length;r++){let a=t[r],h=this._shouldDrawLayer(a,p,i,m),g={shouldDrawLayer:h};h&&!u&&(g.shouldDrawLayer=!0,g.layerRenderIndex=f(a,h),g.shaderModuleProps=this._getShaderModuleProps(a,s,n,c,l),g.layerParameters={...a.context.device.type===`webgpu`?bd:null,...a.context.deck?.props.parameters,...o?.[e.id]?.props.parameters,...this.getLayerParameters(a,r,e)}),d[r]=g}return d}_drawLayersInViewport(e,{layers:t,shaderModuleProps:n,pass:r,target:i,canvasContext:a,viewport:o,view:s,isPicking:c},l){let u=Cd(this.device,{canvasContext:a,shaderModuleProps:n,target:i,viewport:o});if(s){let{clear:e,clearColor:t,clearDepth:n,clearStencil:r}=s.props;if(e){let e=[0,0,0,0],a=1,o=0;Array.isArray(t)&&!c?e=[...t.slice(0,3),t[3]||255].map(e=>e/255):t===!1&&(e=!1),n!==void 0&&(a=n),r!==void 0&&(o=r),this.device.beginRenderPass({framebuffer:i,parameters:{viewport:u,scissorRect:u},clearColor:e,clearDepth:a,clearStencil:o}).end()}}let d={totalCount:t.length,visibleCount:0,compositeCount:0,pickableCount:0};e.setParameters({viewport:u});for(let n=0;n<t.length;n++){let i=t[n],a=l[n],{shouldDrawLayer:s}=a;if(s&&i.props.pickable&&d.pickableCount++,i.isComposite&&d.compositeCount++,i.isDrawable&&a.shouldDrawLayer){let{layerRenderIndex:t,shaderModuleProps:n,layerParameters:s}=a;d.visibleCount++,this._lastRenderIndex=Math.max(this._lastRenderIndex,t),n.project&&(n.project.viewport=o),i.context.renderPass=e;try{i._drawLayer({renderPass:e,shaderModuleProps:n,uniforms:{layerIndex:t},parameters:s})}catch(e){i.raiseError(e,`drawing ${i} to ${r}`)}}}return d}shouldDrawLayer(e){return!0}getShaderModuleProps(e,t,n){return null}getLayerParameters(e,t,n){return e.props.parameters}_shouldDrawLayer(e,t,n,r){if(!(e.props.visible&&this.shouldDrawLayer(e)))return!1;t.layer=e;let i=e.parent;for(;i;){if(!i.props.visible||!i.filterSubLayer(t))return!1;t.layer=i,i=i.parent}if(n){let e=t.layer.id;if(e in r||(r[e]=n(t)),!r[e])return!1}return e.activateViewport(t.viewport),!0}_getShaderModuleProps(e,t,n,r,i){let a=r.cssToDeviceRatio(),o=e.internalState?.propsInTransition||e.props,s={layer:o,picking:{isActive:!1},project:{viewport:e.context.viewport,devicePixelRatio:a,modelMatrix:o.modelMatrix,coordinateSystem:o.coordinateSystem,coordinateOrigin:o.coordinateOrigin,autoWrapLongitude:e.wrapLongitude}};if(t)for(let n of t)wd(s,n.getShaderModuleProps?.(e,s));for(let t of e.context.defaultShaderModules)t.name in s||(s[t.name]={});return wd(s,this.getShaderModuleProps(e,t,s),i)}};function Sd(e=0,t={}){let n={},r=(i,a)=>{let o=i.props._offset,s=i.id,c=i.parent&&i.parent.id,l;if(c&&!(c in t)&&r(i.parent,!1),c in n){let e=n[c]=n[c]||Sd(t[c],t);l=e(i,a),n[s]=e}else Number.isFinite(o)?(l=o+(t[c]||0),n[s]=null):l=e;return a&&l>=e&&(e=l+1),t[s]=l,l};return r}function Cd(e,{canvasContext:t=e.canvasContext,shaderModuleProps:n,target:r,viewport:i}){let a=n?.project?.devicePixelRatio??t.cssToDeviceRatio(),[,o]=t.getDrawingBufferSize(),s=r?r.height:o,c=i;return[c.x*a,s-(c.y+c.height)*a,c.width*a,c.height*a]}function wd(e,...t){for(let n of t)if(n)for(let t in n)e[t]?Object.assign(e[t],n[t]):e[t]=n[t];return e}var Td=class extends xd{constructor(e,t){super(e,t);let n=e.createTexture({format:`rgba8unorm`,width:1,height:1,sampler:{minFilter:`linear`,magFilter:`linear`,addressModeU:`clamp-to-edge`,addressModeV:`clamp-to-edge`}}),r=e.createTexture({format:`depth16unorm`,width:1,height:1});this.fbo=e.createFramebuffer({id:`shadowmap`,width:1,height:1,colorAttachments:[n],depthStencilAttachment:r})}delete(){this.fbo&&=(this.fbo.destroy(),null)}getShadowMap(){return this.fbo.colorAttachments[0].texture}render(e){let t=this.fbo,n=this.device.canvasContext.cssToDeviceRatio(),r=e.viewports[0],i=r.width*n,a=r.height*n,o=[1,1,1,1];(i!==t.width||a!==t.height)&&t.resize({width:i,height:a}),super.render({...e,clearColor:o,target:t,pass:`shadow`})}getLayerParameters(e,t,n){return{...e.props.parameters,blend:!1,depthWriteEnabled:!0,depthCompare:`less-equal`,depthBias:0}}shouldDrawLayer(e){return e.props.shadowEnabled!==!1}getShaderModuleProps(e,t,n){return{shadow:{project:n.project,drawToShadowMap:!0},lighting:{enabled:!1}}}},Ed={color:[255,255,255],intensity:1},Dd=[{color:[255,255,255],intensity:1,direction:[-1,3,-1]},{color:[255,255,255],intensity:.9,direction:[1,-8,-2.5]}],Od=[0,0,0,200/255],kd=class{constructor(e={}){this.id=`lighting-effect`,this.shadowColor=Od,this.shadow=!1,this.directionalLights=[],this.pointLights=[],this.shadowPasses=[],this.dummyShadowMap=null,this.setProps(e)}setup(e){this.context=e;let{device:t,deck:n}=e;this.shadow&&!this.dummyShadowMap&&(this._createShadowPasses(t),n._addDefaultShaderModule(Zu),this.dummyShadowMap=t.createTexture({width:1,height:1}))}setProps(e){this.ambientLight=void 0,this.directionalLights=[],this.pointLights=[];for(let t in e){let n=e[t];switch(n.type){case`ambient`:this.ambientLight=n;break;case`directional`:this.directionalLights.push(n);break;case`point`:this.pointLights.push(n)}}this._applyDefaultLights(),this.shadow=this.directionalLights.some(e=>e.shadow),this.context&&(this.shadow||this.cleanup(this.context),this.setup(this.context)),this.props=e}preRender({layers:e,layerFilter:t,viewports:n,onViewportActive:r,views:i}){if(this.shadow){this.shadowMatrices=this._calculateMatrices();for(let a=0;a<this.shadowPasses.length;a++)this.shadowPasses[a].render({layers:e,layerFilter:t,viewports:n,onViewportActive:r,views:i,shaderModuleProps:{shadow:{shadowLightId:a,dummyShadowMap:this.dummyShadowMap,shadowMatrices:this.shadowMatrices}}})}}getShaderModuleProps(e,t){let n=this.shadow?{project:t.project,shadowMaps:this.shadowPasses.map(e=>e.getShadowMap()),dummyShadowMap:this.dummyShadowMap,shadowColor:this.shadowColor,shadowMatrices:this.shadowMatrices}:{},r={enabled:!0,lights:this._getLights(e)},i=e.props.material;return{shadow:n,lighting:r,phongMaterial:i,gouraudMaterial:i}}cleanup(e){for(let e of this.shadowPasses)e.delete();this.shadowPasses.length=0,this.dummyShadowMap&&(this.dummyShadowMap.destroy(),this.dummyShadowMap=null,e.deck._removeDefaultShaderModule(Zu))}_calculateMatrices(){let e=[];for(let t of this.directionalLights){let n=new es().lookAt({eye:new To(t.direction).negate()});e.push(n)}return e}_createShadowPasses(e){for(let t=0;t<this.directionalLights.length;t++){let n=new Td(e);this.shadowPasses[t]=n}}_applyDefaultLights(){let{ambientLight:e,pointLights:t,directionalLights:n}=this;!e&&t.length===0&&n.length===0&&(this.ambientLight=new pd(Ed),this.directionalLights.push(new vd(Dd[0]),new vd(Dd[1])))}_getLights(e){let t=[];this.ambientLight&&t.push(this.ambientLight);for(let n of this.pointLights)t.push(n.getProjectedLight({layer:e}));for(let n of this.directionalLights)t.push(n.getProjectedLight({layer:e}));return t}},Ad=new class{constructor(e={}){this._pool=[],this.opts={overAlloc:2,poolSize:100},this.setOptions(e)}setOptions(e){Object.assign(this.opts,e)}allocate(e,t,{size:n=1,type:r,padding:i=0,copy:a=!1,initialize:o=!1,maxCount:s}){let c=r||e&&e.constructor||Float32Array,l=t*n+i;if(ArrayBuffer.isView(e)){if(l<=e.length)return e;if(l*e.BYTES_PER_ELEMENT<=e.buffer.byteLength)return new c(e.buffer,0,l)}let u=1/0;s&&(u=s*n+i);let d=this._allocate(c,l,o,u);return e&&a?d.set(e):o||d.fill(0,0,4),this._release(e),d}release(e){this._release(e)}_allocate(e,t,n,r){let i=Math.max(Math.ceil(t*this.opts.overAlloc),1);i>r&&(i=r);let a=this._pool,o=e.BYTES_PER_ELEMENT*i,s=a.findIndex(e=>e.byteLength>=o);if(s>=0){let t=new e(a.splice(s,1)[0],0,i);return n&&t.fill(0),t}return new e(i)}_release(e){if(!ArrayBuffer.isView(e))return;let t=this._pool,{buffer:n}=e,{byteLength:r}=n,i=t.findIndex(e=>e.byteLength>=r);i<0?t.push(n):(i>0||t.length<this.opts.poolSize)&&t.splice(i,0,n),t.length>this.opts.poolSize&&t.shift()}};function jd(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function Md(e,t){let n=e%t;return n<0?t+n:n}function Nd(e){return[e[12],e[13],e[14]]}function Pd(e){return{left:Id(e[3]+e[0],e[7]+e[4],e[11]+e[8],e[15]+e[12]),right:Id(e[3]-e[0],e[7]-e[4],e[11]-e[8],e[15]-e[12]),bottom:Id(e[3]+e[1],e[7]+e[5],e[11]+e[9],e[15]+e[13]),top:Id(e[3]-e[1],e[7]-e[5],e[11]-e[9],e[15]-e[13]),near:Id(e[3]+e[2],e[7]+e[6],e[11]+e[10],e[15]+e[14]),far:Id(e[3]-e[2],e[7]-e[6],e[11]-e[10],e[15]-e[14])}}var Fd=new To;function Id(e,t,n,r){Fd.set(e,t,n);let i=Fd.len();return{distance:r/i,normal:new To(-e/i,-t/i,-n/i)}}function Ld(e){return e-Math.fround(e)}var Rd;function zd(e,t){let{size:n=1,startIndex:r=0}=t,i=t.endIndex===void 0?e.length:t.endIndex,a=(i-r)/n;Rd=Ad.allocate(Rd,a,{type:Float32Array,size:n*2});let o=r,s=0;for(;o<i;){for(let t=0;t<n;t++){let r=e[o++];Rd[s+t]=r,Rd[s+t+n]=Ld(r)}s+=n*2}return Rd.subarray(0,a*n*2)}function Bd(e){let t=null,n=!1;for(let r of e)r&&(t?(n||=(t=[[t[0][0],t[0][1]],[t[1][0],t[1][1]]],!0),t[0][0]=Math.min(t[0][0],r[0][0]),t[0][1]=Math.min(t[0][1],r[0][1]),t[1][0]=Math.max(t[1][0],r[1][0]),t[1][1]=Math.max(t[1][1],r[1][1])):t=r);return t}var Vd=Math.PI/180,Hd=jd(),Ud=[0,0,0],Wd={unitsPerMeter:[1,1,1],metersPerUnit:[1,1,1]};function Gd({width:e,height:t,orthographic:n,fovyRadians:r,focalDistance:i,padding:a,near:o,far:s}){let c=e/t,l=n?new es().orthographic({fovy:r,aspect:c,focalDistance:i,near:o,far:s}):new es().perspective({fovy:r,aspect:c,near:o,far:s});if(a){let{left:n=0,right:r=0,top:i=0,bottom:o=0}=a,s=V((n+e-r)/2,0,e)-e/2,c=V((i+t-o)/2,0,t)-t/2;l[8]-=s*2/e,l[9]+=c*2/t}return l}var Kd=class e{constructor(e={}){this._frustumPlanes={},this.id=e.id||this.constructor.displayName||`viewport`,this.x=e.x||0,this.y=e.y||0,this.width=e.width||1,this.height=e.height||1,this.zoom=e.zoom||0,this.padding=e.padding,this.distanceScales=e.distanceScales||Wd,this.focalDistance=e.focalDistance||1,this.position=e.position||Ud,this.modelMatrix=e.modelMatrix||null;let{longitude:t,latitude:n}=e;this.isGeospatial=Number.isFinite(n)&&Number.isFinite(t),this._initProps(e),this._initMatrices(e),this.equals=this.equals.bind(this),this.project=this.project.bind(this),this.unproject=this.unproject.bind(this),this.projectPosition=this.projectPosition.bind(this),this.unprojectPosition=this.unprojectPosition.bind(this),this.projectFlat=this.projectFlat.bind(this),this.unprojectFlat=this.unprojectFlat.bind(this)}get subViewports(){return null}get metersPerPixel(){return this.distanceScales.metersPerUnit[2]/this.scale}get projectionMode(){return this.isGeospatial?this.zoom<12?Rl.WEB_MERCATOR:Rl.WEB_MERCATOR_AUTO_OFFSET:Rl.IDENTITY}equals(t){return t instanceof e?this===t||t.width===this.width&&t.height===this.height&&t.scale===this.scale&&t.projectionMode===this.projectionMode&&t.resolution===this.resolution&&Ha(t.distanceScales.unitsPerMeter,this.distanceScales.unitsPerMeter)&&Ha(t.projectionMatrix,this.projectionMatrix)&&Ha(t.viewMatrix,this.viewMatrix):!1}project(e,{topLeft:t=!0}={}){let n=Nu(this.projectPosition(e),this.pixelProjectionMatrix),[r,i]=n,a=t?i:this.height-i;return e.length===2?[r,a]:[r,a,n[2]]}unproject(e,{topLeft:t=!0,targetZ:n}={}){let[r,i,a]=e,o=t?i:this.height-i,s=n&&n*this.distanceScales.unitsPerMeter[2],c=Pu([r,o,a],this.pixelUnprojectionMatrix,s),[l,u,d]=this.unprojectPosition(c);return Number.isFinite(a)?[l,u,d]:Number.isFinite(n)?[l,u,n]:[l,u]}projectPosition(e){let[t,n]=this.projectFlat(e);return[t,n,(e[2]||0)*this.distanceScales.unitsPerMeter[2]]}unprojectPosition(e){let[t,n]=this.unprojectFlat(e);return[t,n,(e[2]||0)*this.distanceScales.metersPerUnit[2]]}projectFlat(e){if(this.isGeospatial){let t=Cu(e);return t[1]=V(t[1],-318,830),t}return e}unprojectFlat(e){return this.isGeospatial?wu(e):e}getBounds(e={}){let t={targetZ:e.z||0},n=this.unproject([0,0],t),r=this.unproject([this.width,0],t),i=this.unproject([0,this.height],t),a=this.unproject([this.width,this.height],t);return[Math.min(n[0],r[0],i[0],a[0]),Math.min(n[1],r[1],i[1],a[1]),Math.max(n[0],r[0],i[0],a[0]),Math.max(n[1],r[1],i[1],a[1])]}getDistanceScales(e){return e&&this.isGeospatial?Du({longitude:e[0],latitude:e[1],highPrecision:!0}):this.distanceScales}containsPixel({x:e,y:t,width:n=1,height:r=1}){return e<this.x+this.width&&this.x<e+n&&t<this.y+this.height&&this.y<t+r}getFrustumPlanes(){return this._frustumPlanes.near||Object.assign(this._frustumPlanes,Pd(this.viewProjectionMatrix)),this._frustumPlanes}panByPosition(e,t,n){return null}_initProps(e){let t=e.longitude,n=e.latitude;this.isGeospatial&&(Number.isFinite(e.zoom)||(this.zoom=Tu({latitude:n})+Math.log2(this.focalDistance)),this.distanceScales=e.distanceScales||Du({latitude:n,longitude:t}));let r=2**this.zoom;this.scale=r;let{position:i,modelMatrix:a}=e,o=Ud;if(i&&(o=a?new es(a).transformAsVector(i,[]):i),this.isGeospatial){let e=this.projectPosition([t,n,0]);this.center=new To(o).scale(this.distanceScales.unitsPerMeter).add(e)}else this.center=this.projectPosition(o)}_initMatrices(e){let{viewMatrix:t=Hd,projectionMatrix:n=null,orthographic:r=!1,fovyRadians:i,fovy:a=75,near:o=.1,far:s=1e3,padding:c=null,focalDistance:l=1}=e;this.viewMatrixUncentered=t,this.viewMatrix=new es().multiplyRight(t).translate(new To(this.center).negate()),this.projectionMatrix=n||Gd({width:this.width,height:this.height,orthographic:r,fovyRadians:i||a*Vd,focalDistance:l,padding:c,near:o,far:s});let u=jd();jo(u,u,this.projectionMatrix),jo(u,u,this.viewMatrix),this.viewProjectionMatrix=u,this.viewMatrixInverse=ko([],this.viewMatrix)||this.viewMatrix,this.cameraPosition=Nd(this.viewMatrixInverse);let d=jd(),f=jd();No(d,d,[this.width/2,-this.height/2,1]),Mo(d,d,[1,-1,0]),jo(f,d,this.viewProjectionMatrix),this.pixelProjectionMatrix=f,this.pixelUnprojectionMatrix=ko(jd(),this.pixelProjectionMatrix),this.pixelUnprojectionMatrix||z.warn(`Pixel project matrix not invertible`)()}};Kd.displayName=`Viewport`;var qd=class e extends Kd{constructor(e={}){let{latitude:t=0,longitude:n=0,zoom:r=0,pitch:i=0,bearing:a=0,nearZMultiplier:o=.1,farZMultiplier:s=1.01,nearZ:c,farZ:l,orthographic:u=!1,projectionMatrix:d,repeat:f=!1,worldOffset:p=0,position:m,padding:h,legacyMeterSizes:g=!1}=e,{width:_,height:v,altitude:y=1.5}=e,b=2**r;_||=1,v||=1;let x,S=null;if(d)y=d[5]/2,x=ju(y);else{e.fovy?(x=e.fovy,y=Mu(x)):x=ju(y);let n;if(h){let{top:e=0,bottom:t=0}=h;n=[0,V((e+v-t)/2,0,v)-v/2]}S=Au({width:_,height:v,scale:b,center:m&&[0,0,m[2]*Eu(t)],offset:n,pitch:i,fovy:x,nearZMultiplier:o,farZMultiplier:s}),Number.isFinite(c)&&(S.near=c),Number.isFinite(l)&&(S.far=l)}let C=ku({height:v,pitch:i,bearing:a,scale:b,altitude:y});p&&(C=new es().translate([512*p,0,0]).multiplyLeft(C)),super({...e,width:_,height:v,viewMatrix:C,longitude:n,latitude:t,zoom:r,...S,fovy:x,focalDistance:y}),this.latitude=t,this.longitude=n,this.zoom=r,this.pitch=i,this.bearing=a,this.altitude=y,this.fovy=x,this.orthographic=u,this._subViewports=f?[]:null,this._pseudoMeters=g,Object.freeze(this)}get subViewports(){if(this._subViewports&&!this._subViewports.length){let t=this.getBounds(),n=Math.floor((t[0]+180)/360),r=Math.ceil((t[2]-180)/360);for(let t=n;t<=r;t++){let n=t?new e({...this,worldOffset:t}):this;this._subViewports.push(n)}}return this._subViewports}equals(t){return t instanceof e&&t._pseudoMeters===this._pseudoMeters&&super.equals(t)}projectPosition(e){if(this._pseudoMeters)return super.projectPosition(e);let[t,n]=this.projectFlat(e);return[t,n,(e[2]||0)*Eu(e[1])]}unprojectPosition(e){if(this._pseudoMeters)return super.unprojectPosition(e);let[t,n]=this.unprojectFlat(e);return[t,n,(e[2]||0)/Eu(n)]}addMetersToLngLat(e,t){return Ou(e,t)}panByPosition(e,t,n){let r=Pu(t,this.pixelUnprojectionMatrix),i=eo([],this.projectFlat(e),no([],r)),a=eo([],this.center,i),[o,s]=this.unprojectFlat(a);return{longitude:o,latitude:s}}panByPosition3D(e,t){let n=e[2]||0,r=ao([],e,this.unproject(t,{targetZ:n}));return{longitude:this.longitude+r[0],latitude:this.latitude+r[1]}}getBounds(e={}){let t=Ru(this,e.z||0);return[Math.min(t[0][0],t[1][0],t[2][0],t[3][0]),Math.min(t[0][1],t[1][1],t[2][1],t[3][1]),Math.max(t[0][0],t[1][0],t[2][0],t[3][0]),Math.max(t[0][1],t[1][1],t[2][1],t[3][1])]}fitBounds(t,n={}){let{width:r,height:i}=this,{longitude:a,latitude:o,zoom:s}=Fu({width:r,height:i,bounds:t,...n});return new e({width:r,height:i,longitude:a,latitude:o,zoom:s})}};qd.displayName=`WebMercatorViewport`;var Jd=[0,0,0];function Yd(e,t,n=!1){let r=t.projectPosition(e);if(n&&t instanceof qd){let[n,i,a=0]=e;r[2]=a*t.getDistanceScales([n,i]).unitsPerMeter[2]}return r}function Xd(e){let{viewport:t,modelMatrix:n,coordinateOrigin:r}=e,{coordinateSystem:i,fromCoordinateSystem:a,fromCoordinateOrigin:o}=e;return i==="default"&&(i=t.isGeospatial?`lnglat`:`cartesian`),a===void 0?a=i:a==="default"&&(a=t.isGeospatial?`lnglat`:`cartesian`),o===void 0&&(o=r),{viewport:t,coordinateSystem:i,coordinateOrigin:r,modelMatrix:n,fromCoordinateSystem:a,fromCoordinateOrigin:o}}function Zd(e,{viewport:t,modelMatrix:n,coordinateSystem:r,coordinateOrigin:i,offsetMode:a}){let[o,s,c=0]=e;switch(n&&([o,s,c]=qo([],[o,s,c,1],n)),r){case`default`:return Zd(e,{viewport:t,modelMatrix:n,coordinateSystem:t.isGeospatial?`lnglat`:`cartesian`,coordinateOrigin:i,offsetMode:a});case`lnglat`:return Yd([o,s,c],t,a);case`lnglat-offsets`:return Yd([o+i[0],s+i[1],c+(i[2]||0)],t,a);case`meter-offsets`:return Yd(Ou(i,[o,s,c]),t,a);case`cartesian`:return t.isGeospatial?[o+i[0],s+i[1],c+i[2]]:t.projectPosition([o,s,c]);default:throw Error(`Invalid coordinateSystem: ${r}`)}}function Qd(e,t){let{viewport:n,coordinateSystem:r,coordinateOrigin:i,modelMatrix:a,fromCoordinateSystem:o,fromCoordinateOrigin:s}=Xd(t),{autoOffset:c=!0}=t,{geospatialOrigin:l=Jd,shaderCoordinateOrigin:u=Jd,offsetMode:d=!1}=c?Ql(n,r,i):{},f=Zd(e,{viewport:n,modelMatrix:a,coordinateSystem:o,coordinateOrigin:s,offsetMode:d});return d&&So(f,f,n.projectPosition(l||u)),f}var $d=class{id;topology;vertexCount;indices;attributes;bufferLayout;userData={};constructor(e){let{attributes:t={},indices:n=null,vertexCount:r=null}=e;this.id=e.id||pe(`geometry`),this.topology=e.topology,n&&(this.indices=ArrayBuffer.isView(n)?{value:n,size:1}:n),this.attributes={};for(let[e,n]of Object.entries(t)){let t=ArrayBuffer.isView(n)?{value:n}:n;if(!ArrayBuffer.isView(t.value))throw Error(`${this._print(e)}: must be typed array or object with value as typed array`);if(e!==`POSITION`&&e!==`positions`||t.size||(t.size=3),e===`indices`){if(this.indices)throw Error(`Multiple indices detected`);this.indices=t}else{let n=ef(e),r=Object.keys(this.attributes).find(e=>ef(e)===n);r&&delete this.attributes[r],this.attributes[e]=t}}this.indices&&this.indices.isIndexed!==void 0&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=r||this._calculateVertexCount(this.attributes,this.indices),this.bufferLayout=e.bufferLayout||tf(this.attributes)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(e){return`Geometry ${this.id} attribute ${e}`}_setAttributes(e,t){return this}_calculateVertexCount(e,t){if(t)return t.value.length;let n=1/0;for(let t of Object.values(e)){if(!t)continue;let{value:e,size:r,constant:i}=t;!i&&e&&r!==void 0&&r>=1&&(n=Math.min(n,e.length/r))}return n}};function ef(e){switch(e){case`POSITION`:return`positions`;case`NORMAL`:return`normals`;case`TEXCOORD_0`:return`texCoords`;case`TEXCOORD_1`:return`texCoords1`;case`COLOR_0`:return`colors`;default:return e}}function tf(e){let t=[];for(let[n,r]of Object.entries(e)){if(!r)continue;let{value:e,size:i,normalized:a}=r;if(i===void 0)throw Error(`Attribute ${n} is missing a size`);t.push({name:ef(n),format:D.getVertexFormatFromAttribute(e,i,a)})}return t}function nf(e,t={}){let n=t.bufferName||`geometry`;if(rf(e,n))return e;let r=t.minAttributeAlignment||4,i=af(e,t.attributes),a=[],o=0,s=1/0;for(let[e,t]of i){if(!t)continue;if(t.constant)throw Error(`Attribute ${e} is constant`);let{value:n,size:i,normalized:c}=t;if(!ArrayBuffer.isView(n))throw Error(`Attribute ${e} is missing typed array data`);if(i===void 0)throw Error(`Attribute ${e} is missing a size`);let l=D.getVertexFormatFromAttribute(n,i,c),u=D.getVertexFormatInfo(l);o=sf(o,r),a.push({sourceName:e,attributeName:ef(e),value:n,size:i,format:l,byteOffset:o,byteLength:u.byteLength}),o+=u.byteLength;let d=n.length/i;if(!Number.isInteger(d))throw Error(`Attribute ${e} length is not divisible by size`);s=Math.min(s,d)}if(a.length===0||!Number.isFinite(s))throw Error(`Geometry ${e.id} has no interleavable attributes`);let c=sf(o,r),l=new ArrayBuffer(s*c);for(let e of a)of(l,s,c,e);return new $d({id:e.id,topology:e.topology||`triangle-list`,vertexCount:e.vertexCount,indices:e.indices,attributes:{[n]:{value:new Uint8Array(l),size:c,byteStride:c}},bufferLayout:[{name:n,stepMode:`vertex`,byteStride:c,attributes:a.map(e=>({attribute:e.attributeName,format:e.format,byteOffset:e.byteOffset}))}]})}function rf(e,t){if(e.bufferLayout.length!==1)return!1;let n=e.bufferLayout[0];return n.name===t&&!!n.attributes?.length&&!!e.attributes[t]}function af(e,t){return t?t.map(t=>[t,e.attributes[t]]):Object.entries(e.attributes)}function of(e,t,n,r){let i=r.value.constructor,a=i.BYTES_PER_ELEMENT;if(r.byteOffset%a!==0||n%a!==0)throw Error(`Attribute ${r.sourceName} is not aligned to its component type`);let o=new i(e),s=r.value,c=r.byteOffset/a,l=n/a;for(let e=0;e<t;e++){let t=e*r.size,n=e*l+c;for(let e=0;e<r.size;e++)o[n+e]=s[t+e]}}function sf(e,t){return Math.ceil(e/t)*t}var cf=1,lf=1,uf=class{time=0;channels=new Map;animations=new Map;playing=!1;lastEngineTime=-1;constructor(){}addChannel(e){let{delay:t=0,duration:n=1/0,rate:r=1,repeat:i=1}=e,a=cf++,o={time:0,delay:t,duration:n,rate:r,repeat:i};return this._setChannelTime(o,this.time),this.channels.set(a,o),a}removeChannel(e){this.channels.delete(e);for(let[t,n]of this.animations)n.channel===e&&this.detachAnimation(t)}isFinished(e){let t=this.channels.get(e);return t!==void 0&&this.time>=t.delay+t.duration*t.repeat}getTime(e){if(e===void 0)return this.time;let t=this.channels.get(e);return t===void 0?-1:t.time}setTime(e){this.time=Math.max(0,e);let t=this.channels.values();for(let e of t)this._setChannelTime(e,this.time);let n=this.animations.values();for(let e of n){let{animation:t,channel:n}=e;t.setTime(this.getTime(n))}}play(){this.playing=!0}pause(){this.playing=!1,this.lastEngineTime=-1}reset(){this.setTime(0)}attachAnimation(e,t){let n=lf++;return this.animations.set(n,{animation:e,channel:t}),e.setTime(this.getTime(t)),n}detachAnimation(e){this.animations.delete(e)}update(e){this.playing&&(this.lastEngineTime===-1&&(this.lastEngineTime=e),this.setTime(this.time+(e-this.lastEngineTime)),this.lastEngineTime=e)}_setChannelTime(e,t){let n=t-e.delay;n>=e.duration*e.repeat?e.time=e.duration*e.rate:(e.time=Math.max(0,n)%e.duration,e.time*=e.rate)}};function df(e){let t=typeof window<`u`?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:null;return t?t.call(window,e):setTimeout(()=>e(typeof performance<`u`?performance.now():Date.now()),1e3/60)}function ff(e){let t=typeof window<`u`?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame:null;t?t.call(window,e):clearTimeout(e)}var pf=0,mf=`Animation Loop`,hf={requestAnimationFrame:e=>df(e),cancelAnimationFrame:e=>ff(e)},gf=class e{static defaultAnimationLoopProps={device:null,onAddHTML:()=>``,onInitialize:async()=>null,onRender:()=>{},onFinalize:()=>{},onError:e=>{console.error(e)},stats:void 0,autoResizeViewport:!1,animationFrameProvider:hf};device=null;canvas=null;props;animationProps=null;timeline=null;stats;sharedStats;cpuTime;gpuTime;frameRate;display;_needsRedraw=`initialized`;_initialized=!1;_running=!1;_animationFrameId=null;_nextFramePromise=null;_resolveNextFrame=null;_cpuStartTime=0;_error=null;_lastFrameTime=0;constructor(t){if(this.props={...e.defaultAnimationLoopProps,...t},t=this.props,!t.device)throw Error(`No device provided`);this.stats=t.stats||new sn({id:`animation-loop-${pf++}`}),this.sharedStats=Xi.stats.get(mf),this.frameRate=this.stats.get(`Frame Rate`),this.frameRate.setSampleSize(1),this.cpuTime=this.stats.get(`CPU Time`),this.gpuTime=this.stats.get(`GPU Time`),this.setProps({autoResizeViewport:t.autoResizeViewport,animationFrameProvider:t.animationFrameProvider}),this.start=this.start.bind(this),this.stop=this.stop.bind(this),this._onMousemove=this._onMousemove.bind(this),this._onMouseleave=this._onMouseleave.bind(this)}destroy(){this.stop(),this._setDisplay(null),this.device?._disableDebugGPUTime()}delete(){this.destroy()}reportError(t){this._error=t,this.props.onError(t),this.props.onError===e.defaultAnimationLoopProps.onError&&typeof window<`u`&&typeof ErrorEvent<`u`&&window.dispatchEvent(new ErrorEvent(`error`,{error:t,message:t.message}))}setNeedsRedraw(e){return this._needsRedraw=this._needsRedraw||e,this}needsRedraw(){let e=this._needsRedraw;return this._needsRedraw=!1,e}setProps(e){if(`autoResizeViewport`in e&&(this.props.autoResizeViewport=e.autoResizeViewport||!1),`animationFrameProvider`in e){let t=e.animationFrameProvider||hf;if(t!==this.props.animationFrameProvider){let e=this._animationFrameId!==null;e&&this._cancelAnimationFrame(),this.props.animationFrameProvider=t,e&&this._requestAnimationFrame()}}return this}async start(){if(this._running)return this;this._running=!0;try{if(!this._initialized){if(this._initialized=!0,await this._initDevice(),this._initialize(),!this._running)return null;await this.props.onInitialize(this._getAnimationProps())}return this._running?(this._cancelAnimationFrame(),this._requestAnimationFrame(),this):null}catch(e){let t=e instanceof Error?e:Error(`Unknown error`);throw this.props.onError(t),t}}stop(){if(this._running){let e=this.animationProps;this._cancelAnimationFrame(),this._nextFramePromise=null,this._resolveNextFrame=null,this._running=!1,this._lastFrameTime=0,e&&this.props.onFinalize(e)}return this}redraw(e,t=null){return this.device?.isLost||this._error||(this._beginFrameTimers(e),this._setupFrame(),this.animationProps&&(this.animationProps.animationFrame=t),this._updateAnimationProps(),this._renderFrame(this._getAnimationProps()),this._clearNeedsRedraw(),this._resolveNextFrame&&=(this._resolveNextFrame(this),this._nextFramePromise=null,null),this._endFrameTimers()),this}attachTimeline(e){return this.timeline=e,this.timeline}detachTimeline(){this.timeline=null}waitForRender(){return this.setNeedsRedraw(`waitForRender`),this._nextFramePromise||=new Promise(e=>{this._resolveNextFrame=e}),this._nextFramePromise}async toDataURL(){if(this.setNeedsRedraw(`toDataURL`),await this.waitForRender(),this.canvas instanceof HTMLCanvasElement)return this.canvas.toDataURL();throw Error(`OffscreenCanvas`)}_initialize(){this._startEventHandling(),this._initializeAnimationProps(),this._updateAnimationProps(),this._resizeViewport(),this.device?._enableDebugGPUTime()}_setDisplay(e){this.display&&(this.display.destroy(),this.display.animationLoop=null),e&&(e.animationLoop=this),this.display=e}_requestAnimationFrame(){this._running&&(this._animationFrameId=this.props.animationFrameProvider.requestAnimationFrame(this._animationFrame.bind(this)))}_cancelAnimationFrame(){this._animationFrameId!==null&&(this.props.animationFrameProvider.cancelAnimationFrame(this._animationFrameId),this._animationFrameId=null)}_animationFrame(e,t){if(this._running)try{this.redraw(e,t??null),this._requestAnimationFrame()}catch(e){let t=e instanceof Error?e:Error(String(e));this.reportError(t),this.stop()}}_renderFrame(e){if(this.display){this.display._renderFrame(e);return}let t=this.props.onRender(this._getAnimationProps());this.device&&t!==!1&&this.device.submit()}_clearNeedsRedraw(){this._needsRedraw=!1}_setupFrame(){this._resizeViewport()}_initializeAnimationProps(){let e=this.device?.getDefaultCanvasContext();if(!this.device||!e)throw Error(`loop`);let t=e?.canvas,n=e.props.useDevicePixels;this.animationProps={animationLoop:this,device:this.device,canvasContext:e,canvas:t,useDevicePixels:n,timeline:this.timeline,needsRedraw:!1,width:1,height:1,aspect:1,time:0,startTime:Date.now(),engineTime:0,tick:0,tock:0,animationFrame:null,_mousePosition:null}}_getAnimationProps(){if(!this.animationProps)throw Error(`animationProps`);return this.animationProps}_updateAnimationProps(){if(!this.animationProps)return;let{width:e,height:t,aspect:n}=this._getSizeAndAspect();(e!==this.animationProps.width||t!==this.animationProps.height)&&this.setNeedsRedraw(`drawing buffer resized`),n!==this.animationProps.aspect&&this.setNeedsRedraw(`drawing buffer aspect changed`),this.animationProps.width=e,this.animationProps.height=t,this.animationProps.aspect=n,this.animationProps.needsRedraw=this._needsRedraw,this.animationProps.engineTime=Date.now()-this.animationProps.startTime,this.timeline&&this.timeline.update(this.animationProps.engineTime),this.animationProps.tick=Math.floor(this.animationProps.time/1e3*60),this.animationProps.tock++,this.animationProps.time=this.timeline?this.timeline.getTime():this.animationProps.engineTime}async _initDevice(){if(this.device=await this.props.device,!this.device)throw Error(`No device provided`);this.canvas=this.device.getDefaultCanvasContext().canvas||null}_createInfoDiv(){if(this.canvas&&this.props.onAddHTML){let e=document.createElement(`div`);document.body.appendChild(e),e.style.position=`relative`;let t=document.createElement(`div`);t.style.position=`absolute`,t.style.left=`10px`,t.style.bottom=`10px`,t.style.width=`300px`,t.style.background=`white`,this.canvas instanceof HTMLCanvasElement&&e.appendChild(this.canvas),e.appendChild(t);let n=this.props.onAddHTML(t);n&&(t.innerHTML=n)}}_getSizeAndAspect(){if(!this.device)return{width:1,height:1,aspect:1};let[e,t]=this.device.getDefaultCanvasContext().getDrawingBufferSize();return{width:e,height:t,aspect:e>0&&t>0?e/t:1}}_resizeViewport(){this.props.autoResizeViewport&&this.device.gl&&this.device.gl.viewport(0,0,this.device.gl.drawingBufferWidth,this.device.gl.drawingBufferHeight)}_beginFrameTimers(e){let t=e??(typeof performance<`u`?performance.now():Date.now());if(this._lastFrameTime){let e=t-this._lastFrameTime;e>0&&this.frameRate.addTime(e)}this._lastFrameTime=t,this.device?._isDebugGPUTimeEnabled()&&this._consumeEncodedGpuTime(),this.cpuTime.timeStart()}_endFrameTimers(){this.device?._isDebugGPUTimeEnabled()&&this._consumeEncodedGpuTime(),this.cpuTime.timeEnd(),this._updateSharedStats()}_consumeEncodedGpuTime(){if(!this.device)return;let e=this.device.commandEncoder._gpuTimeMs;e!==void 0&&(this.gpuTime.addTime(e),this.device.commandEncoder._gpuTimeMs=void 0)}_updateSharedStats(){if(this.stats!==this.sharedStats){for(let e of Object.keys(this.sharedStats.stats))this.stats.stats[e]||delete this.sharedStats.stats[e];this.stats.forEach(e=>{let t=this.sharedStats.get(e.name,e.type);t.sampleSize=e.sampleSize,t.time=e.time,t.count=e.count,t.samples=e.samples,t.lastTiming=e.lastTiming,t.lastSampleTime=e.lastSampleTime,t.lastSampleCount=e.lastSampleCount,t._count=e._count,t._time=e._time,t._samples=e._samples,t._startTime=e._startTime,t._timerPending=e._timerPending})}}_startEventHandling(){this.canvas&&(this.canvas.addEventListener(`mousemove`,this._onMousemove.bind(this)),this.canvas.addEventListener(`mouseleave`,this._onMouseleave.bind(this)))}_onMousemove(e){e instanceof MouseEvent&&(this._getAnimationProps()._mousePosition=[e.offsetX,e.offsetY])}_onMouseleave(e){this._getAnimationProps()._mousePosition=null}},_f=class{id;userData={};topology;bufferLayout=[];vertexCount;indices;attributes;constructor(e){if(this.id=e.id||pe(`geometry`),this.topology=e.topology,this.indices=e.indices||null,this.attributes=e.attributes,this.vertexCount=e.vertexCount,this.bufferLayout=e.bufferLayout||[],this.indices&&!(this.indices.usage&S.INDEX))throw Error(`Index buffer must have INDEX usage`)}destroy(){this.indices?.destroy();for(let e of Object.values(this.attributes))e.destroy()}getVertexCount(){return this.vertexCount}getAttributes(){return this.attributes}getIndexes(){return this.indices||null}_calculateVertexCount(e){return e.byteLength/12}};function vf(e,t){if(t instanceof _f)return t;let n=nf(t),r=yf(e,n),{attributes:i,bufferLayout:a}=bf(e,n);return new _f({topology:n.topology||`triangle-list`,bufferLayout:a,vertexCount:n.vertexCount,indices:r,attributes:i})}function yf(e,t){if(!t.indices)return;let n=t.indices.value;return e.createBuffer({usage:S.INDEX,data:n})}function bf(e,t){let n={};for(let[r,i]of Object.entries(t.attributes)){let a=t.bufferLayout.find(e=>e.name===r)?.name||ef(r);i&&(n[a]=e.createBuffer({data:i.value,id:`${r}-buffer`}))}return{attributes:n,bufferLayout:t.bufferLayout,vertexCount:t.vertexCount}}function xf(e,t){let n={},r=`Values`;if(e.attributes.length===0&&!e.varyings?.length)return{"No attributes or varyings":{[r]:`N/A`}};for(let t of e.attributes)if(t){let e=`${t.location} ${t.name}: ${t.type}`;n[`in ${e}`]={[r]:t.stepMode||`vertex`}}for(let t of e.varyings||[]){let e=`${t.location} ${t.name}`;n[`out ${e}`]={[r]:JSON.stringify(t)}}return n}var Sf=`__debugFramebufferState`,Cf=8;function wf(e,t,n){if(e.device.type!==`webgl`)return;let r=Df(e.device);r.flushing||(kf(e)?Tf(e,n,r):t&&Of(t)&&t.handle!==null&&(r.queuedFramebuffers.includes(t)||r.queuedFramebuffers.push(t)))}function Tf(e,t,n){if(n.queuedFramebuffers.length===0)return;let{gl:r}=e.device,i=r.getParameter(36010),a=r.getParameter(36006),[o,s]=e.device.getDefaultCanvasContext().getDrawingBufferSize(),c=Af(t.top,Cf),l=Af(t.left,Cf);n.flushing=!0;try{for(let e of n.queuedFramebuffers){let[n,i,a,u,d]=Ef({framebuffer:e,targetWidth:o,targetHeight:s,topPx:c,leftPx:l,minimap:t.minimap});r.bindFramebuffer(36008,e.handle),r.bindFramebuffer(36009,null),r.blitFramebuffer(0,0,e.width,e.height,n,i,a,u,16384,9728),c+=d+Cf}}finally{r.bindFramebuffer(36008,i),r.bindFramebuffer(36009,a),n.flushing=!1}}function Ef(e){let{framebuffer:t,targetWidth:n,targetHeight:r,topPx:i,leftPx:a,minimap:o}=e,s=o?Math.max(Math.floor(n/4),1):n,c=o?Math.max(Math.floor(r/4),1):r,l=Math.min(s/t.width,c/t.height),u=Math.max(Math.floor(t.width*l),1),d=Math.max(Math.floor(t.height*l),1),f=a,p=Math.max(r-i-d,0);return[f,p,f+u,p+d,d]}function Df(e){return e.userData[Sf]||={flushing:!1,queuedFramebuffers:[]},e.userData[Sf]}function Of(e){return`colorAttachments`in e}function kf(e){let t=e.props.framebuffer;return!t||t.handle===null}function Af(e,t){if(!e)return t;let n=Number.parseInt(e,10);return Number.isFinite(n)?n:t}function jf(e,t,n){if(e===t)return!0;if(!n||!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!jf(e[r],t[r],n-1))return!1;return!0}if(Array.isArray(t))return!1;if(typeof e==`object`&&typeof t==`object`){let r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(let i of r)if(!t.hasOwnProperty(i)||!jf(e[i],t[i],n-1))return!1;return!0}return!1}var Mf=class{bufferLayouts;constructor(e){this.bufferLayouts=e}getBufferLayout(e){return this.bufferLayouts.find(t=>t.name===e)||null}getAttributeNamesForBuffer(e){return Ne(e)}mergeBufferLayouts(e,t){let n=[...e];for(let e of t){let t=n.findIndex(t=>t.name===e.name);t<0?n.push(e):n[t]=e}return n}};function Nf(e,t){let n=Me(e),r=t.slice();return r.sort((e,t)=>Fe(Ne(e).map(e=>n[e]))-Fe(Ne(t).map(e=>n[e]))),r}function Pf(e){return typeof e==`object`&&!!e&&`resolveTextureBinding`in e&&typeof e.resolveTextureBinding==`function`}function Ff(e){return e?.type===`texture`||e?.type===`external-texture`}function If(e,t,n){let r=Pe(e,t,{ignoreWarnings:!0});return Ff(r)?r:e.bindings.length===0&&n?.fallbackGroup!==void 0?{type:`texture`,name:t,group:n.fallbackGroup,location:0}:null}var Lf=2,Rf=1e4,zf=`render pipeline initialization failed`,Bf=[`stencil8`,`depth16unorm`,`depth24plus`,`depth24plus-stencil8`,`depth32float`,`depth32float-stencil8`],Vf=class e{static defaultProps={...T.defaultProps,source:void 0,vs:null,fs:null,id:`unnamed`,handle:void 0,userData:{},defines:{},modules:[],plugins:[],geometry:null,indexBuffer:null,indexCount:void 0,firstVertex:0,firstIndex:0,attributes:{},constantAttributes:{},bindings:{},uniforms:{},varyings:[],isInstanced:void 0,instanceCount:0,vertexCount:0,shaderInputs:void 0,material:void 0,pipelineFactory:void 0,shaderFactory:void 0,transformFeedback:void 0,shaderAssembler:De.getDefaultShaderAssembler(`glsl`),debugShaders:void 0,disableWarnings:void 0};device;id;source;vs;fs;pipelineFactory;shaderFactory;userData={};parameters;topology;bufferLayout;isInstanced=void 0;instanceCount=0;vertexCount;indexCount;firstVertex;firstIndex;indexBuffer=null;bufferAttributes={};constantAttributes={};bindings={};vertexArray;transformFeedback=null;pipeline;shaderInputs;material=null;_uniformStore;_attributeInfos={};_gpuGeometry=null;props;_dynamicIndexBufferSource=null;_dynamicAttributeBufferSources={};_colorAttachmentFormats;_depthStencilAttachmentFormat;_pipelineNeedsUpdate=`newly created`;_needsRedraw=`initializing`;_drawBlockedReason=!1;_destroyed=!1;_vertexCountSet=!1;_lastDrawTimestamp=-1;_bindingTable=[];get[Symbol.toStringTag](){return`Model`}toString(){return`Model(${this.id})`}constructor(t,n){let r=e.defaultProps.shaderAssembler,i=n.vertexCount!==void 0;this.props={...e.defaultProps,...n,shaderAssembler:n.shaderAssembler??(Hf(r,t.info.shadingLanguage)?r:De.getDefaultShaderAssembler(t.info.shadingLanguage))},this._vertexCountSet=i,n=this.props,this.id=n.id||pe(`model`),this.device=t,Object.assign(this.userData,n.userData),this.material=n.material||null;let a=Jf(t),o=oe(this.props.plugins,a.shaderLanguage),s=Ee(this.props.modules,o.modules),c=Object.fromEntries(s.map(e=>[e.name,e])),l=n.shaderInputs||new we(c,{disableWarnings:this.props.disableWarnings});n.shaderInputs&&o.modules.length>0&&l.addModules(o.modules),this.setShaderInputs(l);let u=_e(this.props.modules,l.getModules()),d={...o.defines,...this.props.defines};if(this.device.type===`webgl`&&(this.props._uniformBlockLayouts=de(u)),this.props.shaderLayout=be(this.props.shaderLayout,u)||null,this.device.type===`webgpu`&&this.props.source){let e=this.props.shaderAssembler;N(Hf(e,`wgsl`));let{source:n,getUniforms:r,bindingTable:i,shaderLayout:s}=e.assembleWGSLShader({platformInfo:a,...this.props,modules:u,defines:d,pluginInjections:o.injections,pluginVertexInputs:o.vertexInputs,pluginVaryings:o.varyings});this.source=n,this._getModuleUniforms=r,this._bindingTable=i;let c=Uf(s??t.getShaderLayout?.(this.source),o.vertexInputs),l=fe(this.props.shaderLayout,c,Object.keys(o.vertexInputs));this.props.shaderLayout=be(l||null,u)||null}else{let e=this.props.shaderAssembler;N(Hf(e,`glsl`));let{vs:t,fs:n,getUniforms:r}=e.assembleGLSLShaderPair({platformInfo:a,...this.props,modules:u,defines:d,pluginInjections:o.injections,pluginVertexInputs:o.vertexInputs,pluginVaryings:o.varyings});this.vs=t,this.fs=n,this._getModuleUniforms=r,this._bindingTable=[]}this.vertexCount=this.props.vertexCount,this.indexCount=this.props.indexCount,this.firstVertex=this.props.firstVertex,this.firstIndex=this.props.firstIndex,this.instanceCount=this.props.instanceCount,this.topology=this.props.topology,this.bufferLayout=this.props.bufferLayout,this.parameters=this.props.parameters,this._colorAttachmentFormats=this.props.colorAttachmentFormats,this._depthStencilAttachmentFormat=this.props.depthStencilAttachmentFormat,n.geometry&&this.setGeometry(n.geometry),this.pipelineFactory=n.pipelineFactory||se.getDefaultPipelineFactory(this.device),this.shaderFactory=n.shaderFactory||Te.getDefaultShaderFactory(this.device),this.pipeline=this._updatePipeline(),this.vertexArray=t.createVertexArray({shaderLayout:this.pipeline.shaderLayout,bufferLayout:this.pipeline.bufferLayout}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry),`isInstanced`in n&&(this.isInstanced=n.isInstanced),n.instanceCount&&this.setInstanceCount(n.instanceCount),n.vertexCount&&this.setVertexCount(n.vertexCount),n.indexBuffer&&this.setIndexBuffer(n.indexBuffer),n.attributes&&this.setAttributes(n.attributes),n.constantAttributes&&this.setConstantAttributes(n.constantAttributes),n.bindings&&this.setBindings(n.bindings),n.transformFeedback&&(this.transformFeedback=n.transformFeedback)}destroy(){this._destroyed||=(this.pipelineFactory.release(this.pipeline),this.shaderFactory.release(this.pipeline.vs),this.pipeline.fs&&this.pipeline.fs!==this.pipeline.vs&&this.shaderFactory.release(this.pipeline.fs),this._uniformStore.destroy(),this._gpuGeometry?.destroy(),!0)}needsRedraw(){this._getBindingsUpdateTimestamp()>this._lastDrawTimestamp&&this.setNeedsRedraw(`contents of bound textures or buffers updated`);let e=this._needsRedraw;return this._needsRedraw=!1,e}setNeedsRedraw(e){this._needsRedraw||=e}getBindingDebugTable(){return this._bindingTable}predraw(e){this._syncDynamicBuffers(),this.updateShaderInputs(e),this.material?.updateShaderInputs(e),this.pipeline=this._updatePipeline()}draw(e){if(this._drawBlockedReason&&!this._pipelineNeedsUpdate)return w.info(Lf,`>>> DRAWING ABORTED ${this.id}: ${this._drawBlockedReason}`)(),!1;let t=this._areBindingsLoading();if(t)return w.info(Lf,`>>> DRAWING ABORTED ${this.id}: ${t} not loaded`)(),!1;this._syncAttachmentFormats(e);try{e.pushDebugGroup(`${this}.predraw(${e})`),this.device.type===`webgpu`?(this.updateShaderInputs(),this.material?.updateShaderInputs(),this._syncDynamicBuffers(),this.pipeline=this._updatePipeline()):this.predraw(this.device.commandEncoder)}finally{e.popDebugGroup()}let n,r=this.pipeline.isErrored;try{if(e.pushDebugGroup(`${this}.draw(${e})`),this._logDrawCallStart(),this.pipeline=this._updatePipeline(),r=this.pipeline.isErrored,r)w.info(Lf,`>>> DRAWING ABORTED ${this.id}: ${zf}`)(),n=!1;else{let t=this.vertexArray.getDrawValidationError();if(t)w.info(Lf,`>>> DRAWING ABORTED ${this.id}: ${t}`)(),this._drawBlockedReason=t,n=!1;else{let t=this._getCurrentShaderLayout(),r=this._getBindings(t),i=this._getBindGroups(t,r),{indexBuffer:a}=this.vertexArray,o=a?this.indexCount??(this._vertexCountSet?this.vertexCount:a.byteLength/(a.indexType===`uint32`?4:2)):void 0;e.setPipeline(this.pipeline),e.setBindings(i,{_bindGroupCacheKeys:this._getBindGroupCacheKeys()}),e.setVertexArray(this.vertexArray),n=this.isInstanced===!0&&this.instanceCount===0||e.draw({isInstanced:this.isInstanced,vertexCount:this.vertexCount,instanceCount:this.isInstanced?this.instanceCount:void 0,indexCount:o,firstVertex:this.firstVertex,firstIndex:this.firstIndex,transformFeedback:this.transformFeedback||void 0,uniforms:this.props.uniforms,parameters:this.parameters,topology:this.topology})}}}finally{e.popDebugGroup(),this._logDrawCallEnd()}return this._logFramebuffer(e),n?(this._lastDrawTimestamp=this.device.timestamp,this._needsRedraw=!1):r?(this._needsRedraw=zf,this._drawBlockedReason=zf):this._needsRedraw=this._drawBlockedReason?this._drawBlockedReason:`waiting for resource initialization`,n}setGeometry(e){this._gpuGeometry?.destroy();let t=e&&vf(this.device,e);if(t){this.setTopology(t.topology||`triangle-list`);let e=new Mf(this.bufferLayout);this.bufferLayout=e.mergeBufferLayouts(t.bufferLayout,this.bufferLayout),this.vertexArray&&this._setGeometryAttributes(t)}this._gpuGeometry=t}setTopology(e){e!==this.topology&&(this.topology=e,this._setPipelineNeedsUpdate(`topology`))}setBufferLayout(e){let t=new Mf(this.bufferLayout),n=this._gpuGeometry?t.mergeBufferLayouts(e,this._gpuGeometry.bufferLayout):e;jf(n,this.bufferLayout,-1)||(this.bufferLayout=n,this._setPipelineNeedsUpdate(`bufferLayout`),this.pipeline=this._updatePipeline(),this.vertexArray=this.device.createVertexArray({shaderLayout:this.pipeline.shaderLayout,bufferLayout:this.pipeline.bufferLayout}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry))}setParameters(e){jf(e,this.parameters,2)||(this.parameters=e,this._setPipelineNeedsUpdate(`parameters`))}setInstanceCount(e){this.instanceCount=e,this.isInstanced===void 0&&e>0&&(this.isInstanced=!0),this.setNeedsRedraw(`instanceCount`)}setVertexCount(e){this.vertexCount=e,this._vertexCountSet=!0,this.setNeedsRedraw(`vertexCount`)}setIndexCount(e){this.indexCount=e,this.setNeedsRedraw(`indexCount`)}setDrawOffsets({firstVertex:e,firstIndex:t}){this.firstVertex=e,this.firstIndex=t,this.setNeedsRedraw(`drawOffsets`)}setShaderInputs(e){this.shaderInputs=e,this._uniformStore=new re(this.device,this.shaderInputs.modules);for(let[e,t]of Object.entries(this.shaderInputs.modules))if(me(t)&&!this.material?.ownsModule(e)){let t=this._uniformStore.getManagedUniformBuffer(e);this.bindings[`${e}Uniforms`]=t}this.setNeedsRedraw(`shaderInputs`)}setMaterial(e){this.material=e,this.setNeedsRedraw(`material`)}updateShaderInputs(e){this._uniformStore.setUniforms(this.shaderInputs.getUniformValues(),e),this.setBindings(this._getNonMaterialBindings(this.shaderInputs.getBindingValues())),this.setNeedsRedraw(`shaderInputs`)}setBindings(e){Object.assign(this.bindings,e),this.setNeedsRedraw(`bindings`)}setTransformFeedback(e){this.transformFeedback=e,this.setNeedsRedraw(`transformFeedback`)}setIndexBuffer(e){let t=e instanceof Se?e.buffer:e;this.indexBuffer=t,this._dynamicIndexBufferSource=e instanceof Se?{source:e,generation:e.generation}:null,this.vertexArray.setIndexBuffer(t),this.setNeedsRedraw(`indexBuffer`)}setAttributes(e,t){this._drawBlockedReason=!1;let n=t?.disableWarnings??this.props.disableWarnings;e.indices&&w.warn(`Model:${this.id} setAttributes() - indexBuffer should be set using setIndexBuffer()`)(),this.bufferLayout=Nf(this.pipeline.shaderLayout,this.bufferLayout);let r=new Mf(this.bufferLayout);for(let[t,i]of Object.entries(e)){let e=i instanceof Se?i.buffer:i,a=r.getBufferLayout(t);if(!a){n||w.warn(`Model(${this.id}): Missing layout for buffer "${t}".`)();continue}let o=r.getAttributeNamesForBuffer(a),s=!1;for(let t of o){let r=this._attributeInfos[t];if(r){let t=this.device.type===`webgpu`?this.vertexArray.getBufferSlot(r.bufferName):r.location;if(t===null){n||w.warn(`Model(${this.id}): Missing vertex array slot for buffer "${r.bufferName}".`)();continue}this.vertexArray.setBuffer(t,e),i instanceof Se?this._dynamicAttributeBufferSources[t]={source:i,generation:i.generation}:delete this._dynamicAttributeBufferSources[t],s=!0}}!s&&!n&&w.warn(`Model(${this.id}): Ignoring buffer "${e.id}" for unknown attribute "${t}"`)()}this.setNeedsRedraw(`attributes`)}setConstantAttributes(e,t){for(let[n,r]of Object.entries(e)){let e=this._attributeInfos[n];e?this.vertexArray.setConstantWebGL(e.location,r):(t?.disableWarnings??this.props.disableWarnings)||w.warn(`Model "${this.id}: Ignoring constant supplied for unknown attribute "${n}"`)()}this.setNeedsRedraw(`constants`)}_areBindingsLoading(){for(let e of Object.values(this.bindings))if(Pf(e)&&!e.isReady)return e.id;for(let e of Object.values(this.material?.bindings||{}))if(Pf(e)&&!e.isReady)return e.id;return!1}_getBindings(e=this._getCurrentShaderLayout()){let t={};for(let[n,r]of Object.entries(this.bindings)){let i=Wf(n,r,e);i&&(t[n]=i)}return t}_getBindGroups(e=this._getCurrentShaderLayout(),t=this._getBindings(e)){let n=e.bindings.length?Ie(e,t):{0:t};if(!this.material)return n;for(let[t,r]of Object.entries(this.material.getBindingsByGroup(e))){let e=Number(t);n[e]={...n[e]||{},...r}}return n}_getBindGroupCacheKeys(){let e=this.material?.getBindGroupCacheKey(3);return e?{3:e}:{}}_getBindingsUpdateTimestamp(){let e=0;this._dynamicIndexBufferSource&&(e=Math.max(e,this._dynamicIndexBufferSource.source.updateTimestamp));for(let t of Object.values(this._dynamicAttributeBufferSources))e=Math.max(e,t.source.updateTimestamp);for(let t of Object.values(this.bindings))t instanceof ke?e=Math.max(e,t.texture.updateTimestamp):t instanceof S||t instanceof I||t instanceof wa||t instanceof Se?e=Math.max(e,t.updateTimestamp):Pf(t)?e=t.isReady?Math.max(e,t.updateTimestamp):1/0:ue(t)&&(e=Math.max(e,(t.buffer instanceof Se,t.buffer.updateTimestamp)));return Math.max(e,this.material?.getBindingsUpdateTimestamp()||0)}_setGeometryAttributes(e){let t={...e.attributes};for(let[e]of Object.entries(t))!this.pipeline.shaderLayout.attributes.find(t=>t.name===e)&&e!==`positions`&&delete t[e];this.vertexCount=e.vertexCount,this._vertexCountSet=!0,this.setIndexBuffer(e.indices||null),this.setAttributes(e.attributes,{disableWarnings:!0}),this.setAttributes(t,{disableWarnings:this.props.disableWarnings}),this.setNeedsRedraw(`geometry attributes`)}_setPipelineNeedsUpdate(e){this._pipelineNeedsUpdate||=e,this._drawBlockedReason=!1,this.setNeedsRedraw(e)}_updatePipeline(){if(this._pipelineNeedsUpdate){let e=null,t=null;this.pipeline&&(w.log(1,`Model ${this.id}: Recreating pipeline because "${this._pipelineNeedsUpdate}".`)(),e=this.pipeline.vs,t=this.pipeline.fs),this._pipelineNeedsUpdate=!1;let n=this.shaderFactory.createShader({id:`${this.id}-vertex`,stage:`vertex`,source:this.source||this.vs,debugShaders:this.props.debugShaders}),r=null;this.source?r=n:this.fs&&(r=this.shaderFactory.createShader({id:`${this.id}-fragment`,stage:`fragment`,source:this.source||this.fs,debugShaders:this.props.debugShaders})),this.pipeline=this.pipelineFactory.createRenderPipeline({...this.props,bindings:void 0,bufferLayout:this.bufferLayout,colorAttachmentFormats:this._colorAttachmentFormats,depthStencilAttachmentFormat:this._depthStencilAttachmentFormat,topology:this.topology,parameters:this.parameters,bindGroups:void 0,vs:n,fs:r}),this._attributeInfos=Le(this.pipeline.shaderLayout,this.bufferLayout),e&&this.shaderFactory.release(e),t&&t!==e&&this.shaderFactory.release(t)}return this.pipeline}_lastLogTime=0;_logOpen=!1;_logDrawCallStart(){let e=w.level>3?0:Rf;w.level<2||Date.now()-this._lastLogTime<e||(this._lastLogTime=Date.now(),this._logOpen=!0,w.group(Lf,`>>> DRAWING MODEL ${this.id}`,{collapsed:w.level<=2})())}_logDrawCallEnd(){if(this._logOpen){let e=xf(this.pipeline.shaderLayout,this.id);w.table(Lf,e)();let t=this.shaderInputs.getDebugTable();w.table(Lf,t)();let n=this._getAttributeDebugTable();w.table(Lf,this._attributeInfos)(),w.table(Lf,n)(),w.groupEnd(Lf)(),this._logOpen=!1}}_drawCount=0;_logFramebuffer(e){let t=this.device.props.debugFramebuffers;if(this._drawCount++,!t)return;let n=e.props.framebuffer;wf(e,n,{id:n?.id||`${this.id}-framebuffer`,minimap:!0})}_getAttributeDebugTable(){let e={};for(let[t,n]of Object.entries(this._attributeInfos)){let r=this.vertexArray.attributes[n.location];e[n.location]={name:t,type:n.shaderType,values:r?this._getBufferOrConstantValues(r,n.bufferDataType):`null`}}if(this.vertexArray.indexBuffer){let{indexBuffer:t}=this.vertexArray,n=t.indexType===`uint32`?new Uint32Array(t.debugData):new Uint16Array(t.debugData);e.indices={name:`indices`,type:t.indexType,values:n.toString()}}return e}_getBufferOrConstantValues(e,t){let n=j.getTypedArrayConstructor(t);return(e instanceof S?new n(e.debugData):e).toString()}_getNonMaterialBindings(e){if(!this.material)return e;let t={};for(let[n,r]of Object.entries(e))this.material.ownsBinding(n)||(t[n]=r);return t}_getCurrentShaderLayout(){return this.pipeline?.shaderLayout||this.props.shaderLayout||{bindings:[]}}_syncDynamicBuffers(){if(this._dynamicIndexBufferSource&&this._dynamicIndexBufferSource.generation!==this._dynamicIndexBufferSource.source.generation){let e=this._dynamicIndexBufferSource.source.buffer;this.indexBuffer=e,this.vertexArray.setIndexBuffer(e),this._dynamicIndexBufferSource.generation=this._dynamicIndexBufferSource.source.generation,this.setNeedsRedraw(`dynamic index buffer`)}for(let[e,t]of Object.entries(this._dynamicAttributeBufferSources))t.generation!==t.source.generation&&(this.vertexArray.setBuffer(Number(e),t.source.buffer),t.generation=t.source.generation,this.setNeedsRedraw(`dynamic attribute buffer`))}_syncAttachmentFormats(e){if(this.device.type!==`webgpu`)return;let t=e.framebuffer||e.props.framebuffer,n=e.props,r=n.colorAttachmentFormats??t?.colorAttachments?.map(e=>Gf(e?.texture?.format)),i=n.depthStencilAttachmentFormat===!1?void 0:n.depthStencilAttachmentFormat??Kf(t?.depthStencilAttachment?.texture?.format);jf(this._colorAttachmentFormats,r,1)&&this._depthStencilAttachmentFormat===i||(this._colorAttachmentFormats=r,this._depthStencilAttachmentFormat=i,this._setPipelineNeedsUpdate(`attachment formats`))}};function Hf(e,t){return e.shaderLanguage!==void 0&&e.shaderLanguage!==t?!1:t===`glsl`?`assembleGLSLShaderPair`in e&&typeof e.assembleGLSLShaderPair==`function`:`assembleWGSLShader`in e&&typeof e.assembleWGSLShader==`function`}function Uf(e,t){return!e||Object.keys(t).length===0?e:{...e,attributes:e.attributes.map(e=>{let n=e.name.startsWith(`_luma_`)?e.name.slice(6):null;return n&&t[n]?{...e,name:n}:e})}}function Wf(e,t,n){if(Pf(t)){let r=If(n,e,{fallbackGroup:0});return r?t.resolveTextureBinding(r):null}return t instanceof Se?t.buffer:ue(t)?ge(t):t}function Gf(e){return e&&!qf(e)?e:null}function Kf(e){return e&&qf(e)?e:void 0}function qf(e){return Bf.includes(e)}function Jf(e){return{type:e.type,shaderLanguage:e.info.shadingLanguage,shaderLanguageVersion:e.info.shadingLanguageVersion,gpu:e.info.gpu,limits:e.limits,features:e.features}}var Yf=35980,Xf=35981,Zf=class e{device;model;transformFeedback;static defaultProps={...Vf.defaultProps,feedbackBufferMode:`separate`,outputs:void 0,feedbackBuffers:void 0};static isSupported(e){return e?.info?.type===`webgl`}constructor(t,n=e.defaultProps){if(!e.isSupported(t))throw Error(`BufferTransform not yet implemented on WebGPU`);this.device=t,this.model=new Vf(this.device,{id:n.id||`buffer-transform-model`,fs:n.fs||Fa(),topology:n.topology||`point-list`,varyings:n.outputs||n.varyings,...n,bufferMode:n.bufferMode||(n.feedbackBufferMode===`interleaved`?Yf:Xf)}),this.transformFeedback=this.device.createTransformFeedback({layout:this.model.pipeline.shaderLayout,buffers:n.feedbackBuffers}),this.model.setTransformFeedback(this.transformFeedback)}destroy(){this.model&&this.model.destroy()}delete(){this.destroy()}run(e){e?.inputBuffers&&this.model.setAttributes(e.inputBuffers),e?.outputBuffers&&this.transformFeedback.setBuffers(e.outputBuffers);let t=this.device.beginRenderPass({discard:!0,...e});this.model.draw(t),t.end()}getBuffer(e){return this.transformFeedback.getBuffer(e)}readAsync(e){let t=this.getBuffer(e);if(!t)throw Error(`BufferTransform#getBuffer`);if(t instanceof S)return t.readAsync();let{buffer:n,byteOffset:r=0,byteLength:i=n.byteLength}=t;return n.readAsync(r,i)}},Qf=2,$f=1e4,ep=class e{static defaultProps={...ae.defaultProps,id:`unnamed`,handle:void 0,userData:{},source:``,modules:[],defines:{},plugins:[],bindings:void 0,shaderInputs:void 0,pipelineFactory:void 0,shaderFactory:void 0,shaderAssembler:De.getDefaultShaderAssembler(`wgsl`),debugShaders:void 0};device;id;pipelineFactory;shaderFactory;userData={};bindings={};pipeline;source;shader;shaderInputs;_uniformStore;_pipelineNeedsUpdate=`newly created`;_getModuleUniforms;props;_destroyed=!1;constructor(t,n){if(t.type!==`webgpu`)throw Error(`Computation is only supported in WebGPU`);this.props={...e.defaultProps,...n},n=this.props,this.id=n.id||pe(`model`),this.device=t,Object.assign(this.userData,n.userData);let r=tp(t),i=oe(this.props.plugins,r.shaderLanguage);if(Object.keys(i.vertexInputs).length>0||Object.keys(i.varyings).length>0)throw Error(`Computation does not support ShaderPlugin vertex inputs or varyings`);let a=Ee(this.props.modules,i.modules),o=Object.fromEntries(a.map(e=>[e.name,e]));this.shaderInputs=n.shaderInputs||new we(o),n.shaderInputs&&i.modules.length>0&&this.shaderInputs.addModules(i.modules),this.setShaderInputs(this.shaderInputs);let s=_e(this.props.modules,this.shaderInputs?.getModules()),c={...i.defines,...this.props.defines};this.props.shaderLayout=be(this.props.shaderLayout,s)||null,this.pipelineFactory=n.pipelineFactory||se.getDefaultPipelineFactory(this.device),this.shaderFactory=n.shaderFactory||Te.getDefaultShaderFactory(this.device);let l=this.props.shaderAssembler;N(l instanceof le);let{source:u,getUniforms:d,shaderLayout:f}=l.assembleWGSLShader({platformInfo:r,...this.props,modules:s,defines:c,scanVertexAttributes:!1,pluginInjections:i.injections});this.source=u,this._getModuleUniforms=d;let p=f??t.getShaderLayout?.(this.source,{scanVertexAttributes:!1});this.props.shaderLayout=be(this.props.shaderLayout||p||null,s)||null,this.pipeline=this._updatePipeline(),n.bindings&&this.setBindings(n.bindings)}destroy(){this._destroyed||=(this.pipelineFactory.release(this.pipeline),this.shaderFactory.release(this.shader),this._uniformStore.destroy(),!0)}predraw(e){this.updateShaderInputs(e)}dispatch(e,t,n,r){try{this._logDrawCallStart(),this._setPipeline(e),e.dispatch(t,n,r)}finally{this._logDrawCallEnd()}}dispatchIndirect(e,t,n=0){try{this._logDrawCallStart(),this._setPipeline(e),e.dispatchIndirect(t,n)}finally{this._logDrawCallEnd()}}_setPipeline(e){this.pipeline=this._updatePipeline(),this.pipeline.setBindings(this.bindings),e.setPipeline(this.pipeline),e.setBindings({})}setVertexCount(e){}setInstanceCount(e){}setShaderInputs(e){this.shaderInputs=e,this._uniformStore=new re(this.device,this.shaderInputs.modules);for(let[e,t]of Object.entries(this.shaderInputs.modules))if(me(t)){let t=this._uniformStore.getManagedUniformBuffer(e);this.bindings[`${e}Uniforms`]=t}}setShaderModuleProps(e){let t=this._getModuleUniforms(e),n=Object.keys(t).filter(e=>{let n=t[e];return!ie(n)&&typeof n!=`number`&&typeof n!=`boolean`}),r={};for(let e of n)r[e]=t[e],delete t[e]}updateShaderInputs(e){this._uniformStore.setUniforms(this.shaderInputs.getUniformValues(),e)}setBindings(e){Object.assign(this.bindings,e)}_setPipelineNeedsUpdate(e){this._pipelineNeedsUpdate=this._pipelineNeedsUpdate||e}_updatePipeline(){if(this._pipelineNeedsUpdate){let e=null;this.pipeline&&(w.log(1,`Model ${this.id}: Recreating pipeline because "${this._pipelineNeedsUpdate}".`)(),e=this.shader),this._pipelineNeedsUpdate=!1,this.shader=this.shaderFactory.createShader({id:`${this.id}-fragment`,stage:`compute`,source:this.source,debugShaders:this.props.debugShaders}),this.pipeline=this.pipelineFactory.createComputePipeline({...this.props,shader:this.shader}),e&&this.shaderFactory.release(e)}return this.pipeline}_lastLogTime=0;_logOpen=!1;_logDrawCallStart(){let e=w.level>3?0:$f;w.level<2||Date.now()-this._lastLogTime<e||(this._lastLogTime=Date.now(),this._logOpen=!0,w.group(Qf,`>>> DRAWING MODEL ${this.id}`,{collapsed:w.level<=2})())}_logDrawCallEnd(){if(this._logOpen){let e=this.shaderInputs.getDebugTable();w.table(Qf,e)(),w.groupEnd(Qf)(),this._logOpen=!1}}_drawCount=0;_getBufferOrConstantValues(e,t){let n=j.getTypedArrayConstructor(t);return(e instanceof S?new n(e.debugData):e).toString()}};function tp(e){return{type:e.type,shaderLanguage:e.info.shadingLanguage,shaderLanguageVersion:e.info.shadingLanguageVersion,gpu:e.info.gpu,limits:e.limits,features:e.features}}var np={blendColorOperation:`add`,blendColorSrcFactor:`one`,blendColorDstFactor:`zero`,blendAlphaOperation:`add`,blendAlphaSrcFactor:`constant`,blendAlphaDstFactor:`zero`},rp=class extends xd{constructor(){super(...arguments),this._colorEncoderState=null}render(e){return`pickingFBO`in e?this._drawPickingBuffer(e):{decodePickingColor:null,stats:super._render(e)}}_drawPickingBuffer({layers:e,layerFilter:t,views:n,viewports:r,onViewportActive:i,pickingFBO:a,deviceRect:{x:o,y:s,width:c,height:l},cullRect:u,effects:d,pass:f=`picking`,pickZ:p,canvasContext:m,shaderModuleProps:h,clearColor:g}){this.pickZ=p;let _=this._resetColorEncoder(p),v=[o,s,c,l],y=super._render({target:a,layers:e,layerFilter:t,views:n,viewports:r,onViewportActive:i,cullRect:u,effects:d?.filter(e=>e.useInPicking),pass:f,canvasContext:m,isPicking:!0,shaderModuleProps:h,clearColor:g??[0,0,0,0],colorMask:15,scissorRect:v});return this._colorEncoderState=null,{decodePickingColor:_&&ap.bind(null,_),stats:y}}shouldDrawLayer(e){let{pickable:t,operation:n}=e.props;return t&&n.includes(`draw`)||n.includes(`terrain`)||n.includes(`mask`)}getShaderModuleProps(e,t,n){return{picking:{isActive:1,isAttribute:this.pickZ,disabledPickingIndices:e.internalState?.disabledPickingIndices},lighting:{enabled:!1}}}getLayerParameters(e,t,n){let r={...e.props.parameters},{pickable:i,operation:a}=e.props;return this._colorEncoderState?i&&a.includes(`draw`)?(Object.assign(r,np),r.blend=!0,this.device.type===`webgpu`?r.blendConstant=ip(this._colorEncoderState,e,n):r.blendColor=ip(this._colorEncoderState,e,n),a.includes(`terrain`)&&e.state?._hasPickingCover&&(r.blendAlphaSrcFactor=`one`)):a.includes(`terrain`)&&(r.blend=!1):r.blend=!1,r}_resetColorEncoder(e){return this._colorEncoderState=e?null:{byLayer:new Map,byAlpha:[]},this._colorEncoderState}};function ip(e,t,n){let{byLayer:r,byAlpha:i}=e,a,o=r.get(t);return o?(o.viewports.push(n),a=o.a):(a=r.size+1,a<=255?(o={a,layer:t,viewports:[n]},r.set(t,o),i[a]=o):(z.warn(`Too many pickable layers, only picking the first 255`)(),a=0)),[0,0,0,a/255]}function ap(e,t){let n=e.byAlpha[t[3]];return n&&{pickedLayer:n.layer,pickedViewports:n.viewports,pickedObjectIndex:n.layer.decodePickingColor(t)}}var op={NO_STATE:`Awaiting state`,MATCHED:`Matched. State transferred from previous layer`,INITIALIZED:`Initialized`,AWAITING_GC:`Discarded. Awaiting garbage collection`,AWAITING_FINALIZATION:`No longer matched. Awaiting garbage collection`,FINALIZED:`Finalized! Awaiting garbage collection`},sp=Symbol.for(`component`),cp=Symbol.for(`propTypes`),lp=Symbol.for(`deprecatedProps`),up=Symbol.for(`asyncPropDefaults`),dp=Symbol.for(`asyncPropOriginal`),fp=Symbol.for(`asyncPropResolved`);function pp(e,t=()=>!0){return Array.isArray(e)?mp(e,t,[]):t(e)?[e]:[]}function mp(e,t,n){let r=-1;for(;++r<e.length;){let i=e[r];Array.isArray(i)?mp(i,t,n):t(i)&&n.push(i)}return n}function hp({target:e,source:t,start:n=0,count:r=1}){let i=t.length,a=r*i,o=0;for(let r=n;o<i;o++)e[r++]=t[o];for(;o<a;)o<a-o?(e.copyWithin(n+o,n,n+o),o*=2):(e.copyWithin(n+o,n,n+a-o),o=a);return e}var gp=class{constructor(e,t,n){this._loadCount=0,this._subscribers=new Set,this.id=e,this.context=n,this.setData(t)}subscribe(e){this._subscribers.add(e)}unsubscribe(e){this._subscribers.delete(e)}inUse(){return this._subscribers.size>0}delete(){}getData(){return this.isLoaded?this._error?Promise.reject(this._error):this._content:this._loader.then(()=>this.getData())}setData(e,t){if(e===this._data&&!t)return;this._data=e;let n=++this._loadCount,r=e;typeof e==`string`&&(r=Gr(e)),r instanceof Promise?(this.isLoaded=!1,this._loader=r.then(e=>{this._loadCount===n&&(this.isLoaded=!0,this._error=void 0,this._content=e)}).catch(e=>{this._loadCount===n&&(this.isLoaded=!0,this._error=e||!0)})):(this.isLoaded=!0,this._error=void 0,this._content=e);for(let e of this._subscribers)e.onChange(this.getData())}},_p=class{constructor(e){this.protocol=e.protocol||`resource://`,this._context={device:e.device,gl:e.device?.gl,resourceManager:this},this._resources={},this._consumers={},this._pruneRequest=null}contains(e){return e.startsWith(this.protocol)?!0:e in this._resources}add({resourceId:e,data:t,forceUpdate:n=!1,persistent:r=!0}){let i=this._resources[e];i?i.setData(t,n):(i=new gp(e,t,this._context),this._resources[e]=i),i.persistent=r}remove(e){let t=this._resources[e];t&&(t.delete(),delete this._resources[e])}unsubscribe({consumerId:e}){let t=this._consumers[e];if(t){for(let e in t){let n=t[e],r=this._resources[n.resourceId];r&&r.unsubscribe(n)}delete this._consumers[e],this.prune()}}subscribe({resourceId:e,onChange:t,consumerId:n,requestId:r=`default`}){let{_resources:i,protocol:a}=this;e.startsWith(a)&&(e=e.replace(a,``),i[e]||this.add({resourceId:e,data:null,persistent:!1}));let o=i[e];if(this._track(n,r,o,t),o)return o.getData()}prune(){this._pruneRequest||=setTimeout(()=>this._prune(),0)}finalize(){for(let e in this._resources)this._resources[e].delete()}_track(e,t,n,r){let i=this._consumers,a=i[e]=i[e]||{},o=a[t],s=o&&o.resourceId&&this._resources[o.resourceId];s&&(s.unsubscribe(o),this.prune()),n&&(o?(o.onChange=r,o.resourceId=n.id):o={onChange:r,resourceId:n.id},a[t]=o,n.subscribe(o))}_prune(){this._pruneRequest=null;for(let e of Object.keys(this._resources)){let t=this._resources[e];!t.persistent&&!t.inUse()&&(t.delete(),delete this._resources[e])}}},vp=`layerManager.setLayers`,yp=`layerManager.activateViewport`,bp=class{constructor(e,t){this._lastRenderedLayers=[],this._needsRedraw=!1,this._needsUpdate=!1,this._nextLayers=null,this._debug=!1,this._defaultShaderModulesChanged=!1,this.activateViewport=e=>{B(yp,this,e),e&&(this.context.viewport=e)};let{deck:n,stats:r,viewport:i,timeline:a}=t||{};this.layers=[],this.resourceManager=new _p({device:e,protocol:`deck://`}),this.context={mousePosition:null,userData:{},layerManager:this,device:e,gl:e?.gl,deck:n,shaderAssembler:ld(e?.info?.shadingLanguage||`glsl`),defaultShaderModules:[Gs],renderPass:void 0,stats:r||new sn({id:`deck.gl`}),viewport:i||new Kd({id:`DEFAULT-INITIAL-VIEWPORT`}),timeline:a||new uf,resourceManager:this.resourceManager,onError:void 0},Object.seal(this)}finalize(){this.resourceManager.finalize();for(let e of this.layers)this._finalizeLayer(e)}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;e.clearRedrawFlags&&(this._needsRedraw=!1);for(let n of this.layers){let r=n.getNeedsRedraw(e);t||=r}return t}needsUpdate(){return this._nextLayers&&this._nextLayers!==this._lastRenderedLayers?`layers changed`:this._defaultShaderModulesChanged?`shader modules changed`:this._needsUpdate}setNeedsRedraw(e){this._needsRedraw=this._needsRedraw||e}setNeedsUpdate(e){this._needsUpdate=this._needsUpdate||e}getLayers({layerIds:e}={}){return e?this.layers.filter(t=>e.find(e=>t.id.indexOf(e)===0)):this.layers}setProps(e){`debug`in e&&(this._debug=e.debug),`userData`in e&&(this.context.userData=e.userData),`layers`in e&&(this._nextLayers=e.layers),`onError`in e&&(this.context.onError=e.onError)}setLayers(e,t){B(vp,this,t,e),this._lastRenderedLayers=e;let n=pp(e,Boolean);for(let e of n)e.context=this.context;this._updateLayers(this.layers,n)}updateLayers(){let e=this.needsUpdate();e&&(this.setNeedsRedraw(`updating layers: ${e}`),this.setLayers(this._nextLayers||this._lastRenderedLayers,e)),this._nextLayers=null}addDefaultShaderModule(e){let{defaultShaderModules:t}=this.context;t.find(t=>t.name===e.name)||(t.push(e),this._defaultShaderModulesChanged=!0)}removeDefaultShaderModule(e){let{defaultShaderModules:t}=this.context,n=t.findIndex(t=>t.name===e.name);n>=0&&(t.splice(n,1),this._defaultShaderModulesChanged=!0)}_handleError(e,t,n){n.raiseError(t,`${e} of ${n}`)}_updateLayers(e,t){let n={};for(let t of e)n[t.id]?z.warn(`Multiple old layers with same id ${t.id}`)():n[t.id]=t;if(this._defaultShaderModulesChanged){for(let t of e)t.setNeedsUpdate(),t.setChangeFlags({extensionsChanged:!0});this._defaultShaderModulesChanged=!1}let r=[];this._updateSublayersRecursively(t,n,r),this._finalizeOldLayers(n);let i=!1;for(let e of r)if(e.hasUniformTransition()){i=`Uniform transition in ${e}`;break}this._needsUpdate=i,this.layers=r}_updateSublayersRecursively(e,t,n){for(let r of e){r.context=this.context;let e=t[r.id];e===null&&z.warn(`Multiple new layers with same id ${r.id}`)(),t[r.id]=null;let i=null;try{this._debug&&e!==r&&r.validateProps(),e?(this._transferLayerState(e,r),this._updateLayer(r)):this._initializeLayer(r),n.push(r),i=r.isComposite?r.getSubLayers():null}catch(e){this._handleError(`matching`,e,r)}i&&this._updateSublayersRecursively(i,t,n)}}_finalizeOldLayers(e){for(let t in e){let n=e[t];n&&this._finalizeLayer(n)}}_initializeLayer(e){try{e._initialize(),e.lifecycle=op.INITIALIZED}catch(t){this._handleError(`initialization`,t,e)}}_transferLayerState(e,t){t._transferState(e),t.lifecycle=op.MATCHED,t!==e&&(e.lifecycle=op.AWAITING_GC)}_updateLayer(e){try{e._update()}catch(t){this._handleError(`update`,t,e)}}_finalizeLayer(e){this._needsRedraw=this._needsRedraw||`finalized ${e}`,e.lifecycle=op.AWAITING_FINALIZATION;try{e._finalize(),e.lifecycle=op.FINALIZED}catch(t){this._handleError(`finalization`,t,e)}}};function G(e,t,n){if(e===t)return!0;if(!n||!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!G(e[r],t[r],n-1))return!1;return!0}if(Array.isArray(t))return!1;if(typeof e==`object`&&typeof t==`object`){let r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(let i of r)if(!t.hasOwnProperty(i)||!G(e[i],t[i],n-1))return!1;return!0}return!1}var xp=`default-canvas`,Sp=class{constructor(e){this.views=[],this.width=100,this.height=100,this.viewState={},this.controllers={},this.timeline=e.timeline,this._viewports=[],this._viewportMap={},this._isUpdating=!1,this._needsRedraw=`First render`,this._needsUpdate=`Initialize`,this._eventManager=e.eventManager,this._eventManagers=e.eventManagers||{},this._viewEventManagers={},this._eventCallbacks={onViewStateChange:e.onViewStateChange,onInteractionStateChange:e.onInteractionStateChange},this._pickPosition=e.pickPosition,this._getCanvasContext=e.getCanvasContext,Object.seal(this),this.setProps(e)}finalize(){for(let e in this.controllers){let t=this.controllers[e];t&&t.finalize()}this.controllers={}}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;return e.clearRedrawFlags&&(this._needsRedraw=!1),t}setNeedsUpdate(e){this._needsUpdate=this._needsUpdate||e,this._needsRedraw=this._needsRedraw||e}updateViewStates(){for(let e in this.controllers){let t=this.controllers[e];t&&t.updateTransition()}}getViewports(e){return e?this._viewports.filter(t=>{let n=!e.canvasId||this.getCanvasId(t.id)===e.canvasId,r=!(`x`in e)||t.containsPixel(e);return n&&r}):this._viewports}getViews(){let e={};return this.views.forEach(t=>{e[t.id]=t}),e}getView(e){return this.views.find(t=>t.id===e)}getViewState(e){let t=typeof e==`string`?this.getView(e):e,n=t&&this.viewState[t.getViewStateId()]||this.viewState;return t?t.filterViewState(n):n}getViewport(e){return this._viewportMap[e]}getCanvasId(e){let t=typeof e==`string`?this.getView(e):e;return t?this._viewEventManagers[t.id]?.canvasId||this._getCanvasIdFromView(t):void 0}unproject(e,t){let n=this.getViewports(),r={x:e[0],y:e[1]};for(let i=n.length-1;i>=0;--i){let a=n[i];if(a.containsPixel(r)){let n=e.slice();return n[0]-=a.x,n[1]-=a.y,a.unproject(n,t)}}return null}setProps(e){e.views&&this._setViews(e.views),e.viewState&&this._setViewState(e.viewState),(`width`in e||`height`in e)&&this._setSize(e.width,e.height),`pickPosition`in e&&(this._pickPosition=e.pickPosition),`eventManagers`in e&&this._setEventManagers(e.eventManagers||{}),this._isUpdating||this._update()}_update(){this._isUpdating=!0;try{this._needsUpdate&&(this._needsUpdate=!1,this._rebuildViewports()),this._needsUpdate&&(this._needsUpdate=!1,this._rebuildViewports())}finally{this._isUpdating=!1}}_hasViewState(e){let t=e.props.viewState;if(t&&typeof t==`object`&&!t.id||this.viewState[e.getViewStateId()])return!0;let n=Object.values(this.viewState);return n.length===0||n.some(e=>!e||typeof e!=`object`||Array.isArray(e))}_setSize(e,t){(e!==this.width||t!==this.height)&&(this.width=e,this.height=t,this.setNeedsUpdate(`Size changed`))}_setViews(e){e=pp(e,Boolean),this._diffViews(e,this.views)&&this.setNeedsUpdate(`views changed`),this.views=e}_setViewState(e){e?(G(e,this.viewState,3)||this.setNeedsUpdate(`viewState changed`),this.viewState=e):z.warn("missing `viewState` or `initialViewState`")()}_setEventManagers(e){this._eventManagers!==e&&(this._eventManagers=e,this.setNeedsUpdate(`eventManagers changed`))}_getCanvasIdFromView(e){return e.props.canvasId||this._getCanvasContext?.(e.id)?.id||`default-canvas`}_getCanvasDimensions(e){let[t,n]=(this._getCanvasContext?.(e.id))?.getCSSSize()||[this.width,this.height];return{width:t,height:n}}_getViewEventManager(e){let t=this.getCanvasId(e)||`default-canvas`;return{canvasId:t,eventManager:this._eventManagers[t]||this._eventManager}}_startViewportRebuild(){let e=this.controllers,t=this._viewEventManagers;return this._viewports=[],this.controllers={},this._viewEventManagers={},{oldControllers:e,oldViewEventManagers:t}}_getReusableController(e,t,n){return e&&(t?.canvasId!==n.canvasId||t?.eventManager!==n.eventManager)?(e.finalize(),null):e}_createController(e,t){let n=t.type;return new n({timeline:this.timeline,eventManager:this._getViewEventManager(e).eventManager,onViewStateChange:this._eventCallbacks.onViewStateChange,onStateChange:this._eventCallbacks.onInteractionStateChange,makeViewport:t=>this.getView(e.id)?.makeViewport({viewState:t,...this._getCanvasDimensions(e)}),pickPosition:(t,n)=>this._pickPosition?.(t,n,e.id)})}_updateController(e,t,n,r){let i=e.controller;if(i&&n){let a={...t,...i,id:e.id,x:n.x,y:n.y,width:n.width,height:n.height};return r&&r.constructor===i.type||(r=this._createController(e,a)),r&&r.setProps(a),r}return null}_rebuildViewports(){let{views:e}=this,{oldControllers:t,oldViewEventManagers:n}=this._startViewportRebuild(),r=!1;for(let i=e.length;i--;){let a=e[i],{width:o,height:s}=this._getCanvasDimensions(a),c=this._getViewEventManager(a);this._viewEventManagers[a.id]=c;let l=this.getViewState(a),u=a.makeViewport({viewState:l,width:o,height:s}),d=this._getReusableController(t[a.id],n[a.id],c),f=!!a.controller;f&&!this._hasViewState(a)&&(f=!1),f&&!d&&(r=!0),(r||!f)&&d&&(d.finalize(),d=null),this.controllers[a.id]=f?this._updateController(a,l,u,d):null,u&&this._viewports.unshift(u)}for(let e in t){let n=t[e];n&&!this.controllers[e]&&n.finalize()}this._buildViewportMap()}_buildViewportMap(){this._viewportMap={},this._viewports.forEach(e=>{e.id&&(this._viewportMap[e.id]=this._viewportMap[e.id]||e)})}_diffViews(e,t){return e.length!==t.length||e.some((n,r)=>!e[r].equals(t[r]))}},Cp=/^(?:\d+\.?\d*|\.\d+)$/;function wp(e){switch(typeof e){case`number`:if(!Number.isFinite(e))throw Error(`Could not parse position string ${e}`);return{type:`literal`,value:e};case`string`:try{return new Op(Dp(e)).parseExpression()}catch(t){let n=t instanceof Error?t.message:String(t);throw Error(`Could not parse position string ${e}: ${n}`)}default:throw Error(`Could not parse position string ${e}`)}}function Tp(e,t){switch(e.type){case`literal`:return e.value;case`percentage`:return Math.round(e.value*t);case`binary`:let n=Tp(e.left,t),r=Tp(e.right,t);return e.operator===`+`?n+r:n-r;default:throw Error(`Unknown layout expression type`)}}function Ep(e,t){return Tp(e,t)}function Dp(e){let t=[],n=0;for(;n<e.length;){let r=e[n];if(/\s/.test(r))n++;else if(r===`+`||r===`-`||r===`(`||r===`)`||r===`%`)t.push({type:`symbol`,value:r}),n++;else if(kp(r)||r===`.`){let i=n,a=r===`.`;for(n++;n<e.length;){let t=e[n];if(kp(t))n++;else if(t===`.`&&!a)a=!0,n++;else break}let o=e.slice(i,n);if(!Cp.test(o))throw Error(`Invalid number token`);t.push({type:`number`,value:parseFloat(o)})}else if(Ap(r)){let r=n;for(;n<e.length&&Ap(e[n]);)n++;let i=e.slice(r,n).toLowerCase();t.push({type:`word`,value:i})}else throw Error(`Invalid token in position string`)}return t}var Op=class{constructor(e){this.index=0,this.tokens=e}parseExpression(){let e=this.parseBinaryExpression();if(this.index<this.tokens.length)throw Error(`Unexpected token at end of expression`);return e}parseBinaryExpression(){let e=this.parseFactor(),t=this.peek();for(;jp(t);){this.index++;let n=this.parseFactor();e={type:`binary`,operator:t.value,left:e,right:n},t=this.peek()}return e}parseFactor(){let e=this.peek();if(!e)throw Error(`Unexpected end of expression`);if(e.type===`symbol`&&e.value===`+`)return this.index++,this.parseFactor();if(e.type===`symbol`&&e.value===`-`)return this.index++,{type:`binary`,operator:`-`,left:{type:`literal`,value:0},right:this.parseFactor()};if(e.type===`symbol`&&e.value===`(`){this.index++;let e=this.parseBinaryExpression();if(!this.consumeSymbol(`)`))throw Error(`Missing closing parenthesis`);return e}if(e.type===`word`&&e.value===`calc`){if(this.index++,!this.consumeSymbol(`(`))throw Error(`Missing opening parenthesis after calc`);let e=this.parseBinaryExpression();if(!this.consumeSymbol(`)`))throw Error(`Missing closing parenthesis`);return e}if(e.type===`number`){this.index++;let t=e.value,n=this.peek();return n&&n.type===`symbol`&&n.value===`%`?(this.index++,{type:`percentage`,value:t/100}):(n&&n.type===`word`&&n.value===`px`&&this.index++,{type:`literal`,value:t})}throw Error(`Unexpected token in expression`)}consumeSymbol(e){let t=this.peek();return t&&t.type===`symbol`&&t.value===e?(this.index++,!0):!1}peek(){return this.tokens[this.index]||null}};function kp(e){return e>=`0`&&e<=`9`}function Ap(e){return e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`}function jp(e){return!(!e||e.type!==`symbol`||e.value!==`+`&&e.value!==`-`)}function Mp(e,t){let n={...e};for(let e in t)e!==`id`&&(n[e]=Array.isArray(n[e])&&Array.isArray(t[e])?Np(n[e],t[e]):t[e]);return n}function Np(e,t){e=e.slice();for(let n=0;n<t.length;n++){let r=t[n];Number.isFinite(r)&&(e[n]=r)}return e}var Pp=class{constructor(e){let{id:t,x:n=0,y:r=0,width:i=`100%`,height:a=`100%`,padding:o=null}=e;this.id=t||this.constructor.displayName||`view`,this.props={...e,id:this.id},this._x=wp(n),this._y=wp(r),this._width=wp(i),this._height=wp(a),this._padding=o&&{left:wp(o.left||0),right:wp(o.right||0),top:wp(o.top||0),bottom:wp(o.bottom||0)},this.equals=this.equals.bind(this),Object.seal(this)}equals(e){return this===e||this.constructor===e.constructor&&G(this.props,e.props,2)}clone(e){let t=this.constructor;return new t({...this.props,...e})}makeViewport({width:e,height:t,viewState:n}){n=this.filterViewState(n);let r=this.getDimensions({width:e,height:t});return!r.height||!r.width?null:new(this.getViewportType(n))({...n,...this.props,...r})}getViewStateId(){let{viewState:e}=this.props;return typeof e==`string`?e:e?.id||this.id}filterViewState(e){return this.props.viewState&&typeof this.props.viewState==`object`?this.props.viewState.id?Mp(e,this.props.viewState):this.props.viewState:e}getDimensions({width:e,height:t}){let n={x:Ep(this._x,e),y:Ep(this._y,t),width:Ep(this._width,e),height:Ep(this._height,t)};return this._padding&&(n.padding={left:Ep(this._padding.left,e),top:Ep(this._padding.top,t),right:Ep(this._padding.right,e),bottom:Ep(this._padding.bottom,t)}),n}get controller(){let e=this.props.controller;return e?e===!0?{type:this.ControllerType}:typeof e==`function`?{type:e}:{type:this.ControllerType,...e}:null}},Fp=class{constructor(e){this._inProgress=!1,this._handle=null,this.time=0,this.settings={duration:0},this._timeline=e}get inProgress(){return this._inProgress}start(e){this.cancel(),this.settings=e,this._inProgress=!0,this.settings.onStart?.(this)}end(){this._inProgress&&(this._timeline.removeChannel(this._handle),this._handle=null,this._inProgress=!1,this.settings.onEnd?.(this))}cancel(){this._inProgress&&=(this.settings.onInterrupt?.(this),this._timeline.removeChannel(this._handle),this._handle=null,!1)}update(){if(!this._inProgress)return!1;if(this._handle===null){let{_timeline:e,settings:t}=this;this._handle=e.addChannel({delay:e.getTime(),duration:t.duration})}return this.time=this._timeline.getTime(this._handle),this._onUpdate(),this.settings.onUpdate?.(this),this._timeline.isFinished(this._handle)&&this.end(),!0}_onUpdate(){}},Ip=()=>{},Lp={mode:`preserve`},Rp={mode:`hard`},zp={BREAK:1,SNAP_TO_END:2,IGNORE:3},Bp=e=>e,Vp=zp.BREAK,Hp=class{constructor(e){this._onTransitionUpdate=e=>{let{time:t,settings:{interpolator:n,startProps:r,endProps:i,duration:a,easing:o}}=e,s=o(t/a),c=n.interpolateProps(r,i,s);this.propsInTransition=this.getControllerState({...this.props,...c},Lp).getViewportProps(),this.onViewStateChange({viewState:this.propsInTransition,oldViewState:this.props})},this.getControllerState=e.getControllerState,this.propsInTransition=null,this.transition=new Fp(e.timeline),this.onViewStateChange=e.onViewStateChange||Ip,this.onStateChange=e.onStateChange||Ip}finalize(){this.transition.cancel()}getViewportInTransition(){return this.propsInTransition}processViewStateChange(e){let t=!1,n=this.props;if(this.props=e,!n||this._shouldIgnoreViewportChange(n,e))return!1;if(this._isTransitionEnabled(e)){let r=n;if(this.transition.inProgress){let{interruption:e,endProps:t}=this.transition.settings;r={...n,...e===zp.SNAP_TO_END?t:this.propsInTransition||n}}this._triggerTransition(r,e),t=!0}else this.transition.cancel();return t}updateTransition(){this.transition.update()}_isTransitionEnabled(e){let{transitionDuration:t,transitionInterpolator:n}=e;return(t>0||t===`auto`)&&!!n}_isUpdateDueToCurrentTransition(e){return this.transition.inProgress&&this.propsInTransition?this.transition.settings.interpolator.arePropsEqual(e,this.propsInTransition):!1}_shouldIgnoreViewportChange(e,t){return this.transition.inProgress?this.transition.settings.interruption===zp.IGNORE||this._isUpdateDueToCurrentTransition(t):!this._isTransitionEnabled(t)||t.transitionInterpolator.arePropsEqual(e,t)}_triggerTransition(e,t){let n=this.getControllerState(e,Lp),r=this.getControllerState(t,Rp).shortestPathFrom(n),i=t.transitionInterpolator,a=i.getDuration?i.getDuration(e,t):t.transitionDuration;if(a===0)return;let o=i.initializeProps(e,r);this.propsInTransition={};let s={duration:a,easing:t.transitionEasing||Bp,interpolator:i,interruption:t.transitionInterruption||Vp,startProps:o.start,endProps:o.end,onStart:t.onTransitionStart,onUpdate:this._onTransitionUpdate,onInterrupt:this._onTransitionEnd(t.onTransitionInterrupt),onEnd:this._onTransitionEnd(t.onTransitionEnd)};this.transition.start(s),this.onStateChange({inTransition:!0}),this.updateTransition()}_onTransitionEnd(e){return t=>{this.propsInTransition=null,this.onStateChange({inTransition:!1,isZooming:!1,isPanning:!1,isRotating:!1}),e?.(t)}}};function K(e,t){if(!e)throw Error(t||`deck.gl: assertion failed.`)}var Up=class{constructor(e){let{compare:t,extract:n,required:r}=e;this._propsToCompare=t,this._propsToExtract=n||t,this._requiredProps=r}arePropsEqual(e,t){for(let n of this._propsToCompare)if(!(n in e)||!(n in t)||!Ha(e[n],t[n]))return!1;return!0}initializeProps(e,t){let n={},r={};for(let i of this._propsToExtract)(i in e||i in t)&&(n[i]=e[i],r[i]=t[i]);return this._checkRequiredProps(n),this._checkRequiredProps(r),{start:n,end:r}}getDuration(e,t){return t.transitionDuration}_checkRequiredProps(e){this._requiredProps&&this._requiredProps.forEach(t=>{let n=e[t];K(Number.isFinite(n)||Array.isArray(n),`${t} is required for transition`)})}},Wp=[`longitude`,`latitude`,`zoom`,`bearing`,`pitch`],Gp=[`longitude`,`latitude`,`zoom`],Kp=class extends Up{constructor(e={}){let t=Array.isArray(e)?e:e.transitionProps,n=Array.isArray(e)?{}:e;n.transitionProps=Array.isArray(t)?{compare:t,required:t}:t||{compare:Wp,required:Gp},super(n.transitionProps),this.opts=n}initializeProps(e,t){let n=super.initializeProps(e,t),{makeViewport:r,around:i}=this.opts;if(r&&i){let a=r(e),o=r(t),s=a.unproject(i);n.start.around=i,Object.assign(n.end,{around:o.project(s),aroundPosition:s,width:t.width,height:t.height})}return n}interpolateProps(e,t,n){let r={};for(let i of this._propsToExtract)r[i]=Va(e[i]||0,t[i]||0,n);if(t.aroundPosition&&this.opts.makeViewport){let i=this.opts.makeViewport({...t,...r});Object.assign(r,i.panByPosition(t.aroundPosition,Va(e.around,t.around,n)))}return r}},qp={transitionDuration:0},Jp=300,Yp=300,Xp=e=>1-(1-e)*(1-e),Zp=e=>e===1?1:1-2**(-10*e),Qp={WHEEL:[`wheel`],PAN:[`panstart`,`panmove`,`panend`],PINCH:[`pinchstart`,`pinchmove`,`pinchend`],MULTI_PAN:[`multipanstart`,`multipanmove`,`multipanend`],DOUBLE_CLICK:[`dblclick`],DOUBLE_CLICK_DRAG:[`dblclickdragstart`,`dblclickdragmove`,`dblclickdragend`,`dblclickdragcancel`],KEYBOARD:[`keydown`]},$p={},em=class{constructor(e){this.state={},this._events={},this._interactionState={isDragging:!1},this._customEvents=[],this._eventStartBlocked=null,this._panMove=!1,this._multiPanMode=null,this._multiPanStartCenter=null,this._doubleClickDragAnchor=null,this._suppressDoubleClickUntil=0,this.invertPan=!1,this.dragMode=`rotate`,this.inertia=0,this.scrollZoom=!0,this.dragPan=!0,this.dragRotate=!0,this.doubleClickZoom=!0,this.doubleClickDragZoom=!0,this.touchZoom=!0,this.touchRotate=!1,this.multiTouchDrag=null,this.trackpadGesture=!1,this.zoomAround=`pointer`,this.keyboard=!0,this.transitionManager=new Hp({...e,getControllerState:(t,n)=>new this.ControllerState({...t,constraintContext:n,makeViewport:e.makeViewport}),onViewStateChange:this._onTransition.bind(this),onStateChange:this._setInteractionState.bind(this)}),this.handleEvent=this.handleEvent.bind(this),this.eventManager=e.eventManager,this.onViewStateChange=e.onViewStateChange||(()=>{}),this.onStateChange=e.onStateChange||(()=>{}),this.makeViewport=e.makeViewport,this.pickPosition=e.pickPosition}set events(e){this.toggleEvents(this._customEvents,!1),this.toggleEvents(e,!0),this._customEvents=e,this.props&&this.setProps(this.props)}finalize(){for(let e in this._events)this._events[e]&&this.eventManager?.off(e,this.handleEvent);this.transitionManager.finalize()}handleEvent(e){this._controllerState=void 0;let t=this._eventStartBlocked;switch(e.type){case`panstart`:return!t&&this._onPanStart(e);case`panmove`:return this._onPan(e);case`panend`:return this._onPanEnd(e);case`pinchstart`:return t||!this._isTrackpadGestureAllowed(e)?!1:this._onPinchStart(e);case`pinchmove`:return this._isTrackpadGestureAllowed(e)?this._onPinch(e):!1;case`pinchend`:return this._isTrackpadGestureAllowed(e)?this._onPinchEnd(e):!1;case`multipanstart`:return!t&&this._onMultiPanStart(e);case`multipanmove`:return this._onMultiPan(e);case`multipanend`:return this._onMultiPanEnd(e);case`dblclick`:return this._onDoubleClick(e);case`dblclickdragstart`:return!t&&this._onDoubleClickDragStart(e);case`dblclickdragmove`:return this._onDoubleClickDrag(e);case`dblclickdragend`:case`dblclickdragcancel`:return this._onDoubleClickDragEnd(e);case`wheel`:return this._onWheel(e);case`keydown`:return this._onKeyDown(e);default:return!1}}get controllerState(){return this._controllerState=this._controllerState||new this.ControllerState({makeViewport:this.makeViewport,...this.props,...this.state}),this._controllerState}getCenter(e){let{x:t,y:n}=this.props,{offsetCenter:r}=e;return[r.x-t,r.y-n]}getZoomPosition(e){if(this.zoomAround===`pointer`)return e;let t=this.makeViewport(this.controllerState.getViewportProps()),[n,r]=Nu(t.center,t.pixelProjectionMatrix);return[n,r]}isPointInBounds(e,t){let{width:n,height:r}=this.props;if(t&&t.handled)return!1;let i=e[0]>=0&&e[0]<=n&&e[1]>=0&&e[1]<=r;return i&&t&&t.stopPropagation(),i}isFunctionKeyPressed(e){let{srcEvent:t}=e;return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}isDragging(){return this._interactionState.isDragging||!1}blockEvents(e){let t=setTimeout(()=>{this._eventStartBlocked===t&&(this._eventStartBlocked=null)},e);this._eventStartBlocked=t}setProps(e){e.maxBoundsPadding===void 0&&(e.maxBoundsPadding=null),e.dragMode&&(this.dragMode=e.dragMode);let t=this.props;this.props=e,`transitionInterpolator`in e||(e.transitionInterpolator=this._getTransitionProps().transitionInterpolator),this.transitionManager.processViewStateChange(e);let{inertia:n}=e;this.inertia=Number.isFinite(n)?n:n===!0?Jp:0;let{scrollZoom:r=!0,dragPan:i=!0,dragRotate:a=!0,doubleClickZoom:o=!0,doubleClickDragZoom:s=!1,touchZoom:c=!0,touchRotate:l=!1,multiTouchDrag:u=l?`rotate`:null,trackpadGesture:d=!1,zoomAround:f=`pointer`,keyboard:p=!0}=e,m=!!this.onViewStateChange;if(this.toggleEvents(Qp.WHEEL,m&&r),this.toggleEvents(Qp.PAN,m),this.toggleEvents(Qp.PINCH,m&&(c||u===`rotate`)),this.toggleEvents(Qp.MULTI_PAN,m&&!!u),this.toggleEvents(Qp.DOUBLE_CLICK,m&&o),this.toggleEvents(Qp.DOUBLE_CLICK_DRAG,m&&s),this.toggleEvents(Qp.KEYBOARD,m&&p),this.scrollZoom=r,this.dragPan=i,this.dragRotate=a,this.doubleClickZoom=o,this.doubleClickDragZoom=s,this.touchZoom=c,this.touchRotate=u===`rotate`,this.multiTouchDrag=u,this.trackpadGesture=d,this.zoomAround=f,this.keyboard=p,(!t||t.height!==e.height||t.width!==e.width||t.maxBounds!==e.maxBounds||t.maxBoundsPadding!==e.maxBoundsPadding)&&e.maxBounds){let t=new this.ControllerState({...e,makeViewport:this.makeViewport}),n=t.getViewportProps();Object.keys(n).some(t=>!G(n[t],e[t],1))&&this.updateViewport(t)}}updateTransition(){this.transitionManager.updateTransition()}toggleEvents(e,t){this.eventManager&&e.forEach(e=>{this._events[e]!==t&&(this._events[e]=t,t?this.eventManager.on(e,this.handleEvent):this.eventManager.off(e,this.handleEvent))})}updateViewport(e,t=null,n={}){let r={...e.getViewportProps(),...t},i=this.controllerState!==e;if(this.state=e.getState(),this._setInteractionState(n),i){let e=this.controllerState&&this.controllerState.getViewportProps();this.onViewStateChange&&this.onViewStateChange({viewState:r,interactionState:this._interactionState,oldViewState:e,viewId:this.props.id})}}_onTransition(e){this.onViewStateChange({...e,interactionState:this._interactionState,viewId:this.props.id})}_setInteractionState(e){Object.assign(this._interactionState,e),this.onStateChange(this._interactionState)}_getConstraintContext(e,t){return this.props.rubberBand?{mode:t===`update`?`elastic`:t===`end`?`rebound`:`hard`}:{mode:`hard`}}_getReboundTransition(e,t){if(e.mode!==`rebound`)return null;let n=t.getViewportProps();return Object.keys(n).some(e=>!G(this.props[e],n[e],1))?{...this._getTransitionProps(),transitionDuration:Yp,transitionEasing:Zp}:null}_onPanStart(e){let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;let n=this.isFunctionKeyPressed(e)||e.rightButton||!1;(this.invertPan||this.dragMode===`pan`)&&(n=!n);let r=n?`pan`:`rotate`,i=this._getConstraintContext(r,`start`),a=n?this.controllerState.panStart({pos:t},i):this.controllerState.rotateStart({pos:t},i);return this._panMove=n,this.updateViewport(a,qp,{isDragging:!0}),!0}_onPan(e){return this.isDragging()?this._panMove?this._onPanMove(e):this._onPanRotate(e):!1}_onPanEnd(e){return this.isDragging()?this._panMove?this._onPanMoveEnd(e):this._onPanRotateEnd(e):!1}_onPanMove(e){if(!this.dragPan)return!1;let t=this.getCenter(e),n=this.controllerState.pan({pos:t},this._getConstraintContext(`pan`,`update`));return this.updateViewport(n,qp,{isDragging:!0,isPanning:!0}),!0}_onPanMoveEnd(e){let{inertia:t}=this;if(this.dragPan&&t&&e.velocity){let n=this.getCenter(e),r=[n[0]+e.velocityX*t/2,n[1]+e.velocityY*t/2],i=this.controllerState.pan({pos:r}).panEnd();this.updateViewport(i,{...this._getTransitionProps(),transitionDuration:t,transitionEasing:Xp},{isDragging:!1,isPanning:!0})}else{let e=this.controllerState,t=this._getConstraintContext(`pan`,`end`),n=e.panEnd(t),r=this._getReboundTransition(t,n);this.updateViewport(n,r,{isDragging:!1,isPanning:!!r})}return!0}_onPanRotate(e){if(!this.dragRotate)return!1;let t=this.getCenter(e),n=this.controllerState.rotate({pos:t},this._getConstraintContext(`rotate`,`update`));return this.updateViewport(n,qp,{isDragging:!0,isRotating:!0}),!0}_onPanRotateEnd(e){let{inertia:t}=this;if(this.dragRotate&&t&&e.velocity){let n=this.getCenter(e),r=[n[0]+e.velocityX*t/2,n[1]+e.velocityY*t/2],i=this.controllerState.rotate({pos:r}).rotateEnd();this.updateViewport(i,{...this._getTransitionProps(),transitionDuration:t,transitionEasing:Xp},{isDragging:!1,isRotating:!0})}else{let e=this.controllerState,t=this._getConstraintContext(`rotate`,`end`),n=e.rotateEnd(t),r=this._getReboundTransition(t,n);this.updateViewport(n,r,{isDragging:!1,isRotating:!!r})}return!0}_onWheel(e){if(!this.scrollZoom||this.trackpadGesture&&e.device!==`mouse`)return!1;let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;e.srcEvent.preventDefault();let{speed:n=.01,smooth:r=!1}=this.scrollZoom===!0?{}:this.scrollZoom,{delta:i}=e,a=2/(1+Math.exp(-Math.abs(i*n)));i<0&&a!==0&&(a=1/a);let o=this.getZoomPosition(t),s=r?{...this._getTransitionProps({around:o}),transitionDuration:250}:qp,c=this.controllerState.zoom({pos:o,scale:a});return this.updateViewport(c,s,{isZooming:!0,isPanning:!0}),r||this._setInteractionState({isZooming:!1,isPanning:!1}),!0}_onMultiPanStart(e){let{multiTouchDrag:t}=this;if(!t||!this._isMultiPanEventAllowed(e,t))return!1;let n=e.offsetCenter;if(!this.isPointInBounds(this.getCenter(e),e))return!1;let r=e.pointerType===`trackpad`,i={x:n.x-(r?0:e.deltaX),y:n.y-(r?0:e.deltaY)},a={...e,offsetCenter:i},o=this.getCenter(a),s=t===`pan`?this.controllerState.panStart({pos:o},this._getConstraintContext(`pan`,`start`)):this.controllerState.rotateStart({pos:o},this._getConstraintContext(`rotate`,`start`));return this._multiPanMode=t,this._multiPanStartCenter=i,this.updateViewport(s,qp,{isDragging:!0}),!0}_onMultiPan(e){let{mode:t,event:n}=this._getMultiPanEvent(e);return!t||!n||!this.isDragging()?!1:t===`pan`?this._onPanMove(n):this._onPanRotate(n)}_onMultiPanEnd(e){let{mode:t,event:n}=this._getMultiPanEvent(e);if(!t||!n||!this.isDragging())return this._resetMultiPan(),!1;let r=t===`pan`?this._onPanMoveEnd(n):this._onPanRotateEnd(n);return this._resetMultiPan(),r}_isTrackpadGestureAllowed(e){return e.pointerType!==`trackpad`||this.trackpadGesture}_isMultiPanEventAllowed(e,t){return e.pointerType===`trackpad`?this.trackpadGesture&&(t===`pan`?this.dragPan:this.dragRotate):e.pointerType===`touch`&&(t===`pan`?this.dragPan:this.dragRotate)}_getMultiPanEvent(e){let t=this._multiPanMode,n=this._multiPanStartCenter;return!t||!n?{mode:null,event:null}:{mode:t,event:{...e,offsetCenter:{x:n.x+e.deltaX,y:n.y+e.deltaY}}}}_resetMultiPan(){this._multiPanMode=null,this._multiPanStartCenter=null}_onPinchStart(e){this._doubleClickDragAnchor=null;let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;let n=this.controllerState.zoomStart({pos:this.getZoomPosition(t)},this._getConstraintContext(`zoom`,`start`)).rotateStart({pos:t},this._getConstraintContext(`rotate`,`start`));return $p._startPinchRotation=e.rotation,$p._lastPinchEvent=e,this.updateViewport(n,qp,{isDragging:!0}),!0}_onPinch(e){if(!this.touchZoom&&!this.touchRotate||!this.isDragging())return!1;let t=this.controllerState;if(this.touchZoom){let{scale:n}=e,r=this.getCenter(e);t=t.zoom({pos:this.getZoomPosition(r),scale:n},this._getConstraintContext(`zoom`,`update`))}if(this.touchRotate){let{rotation:n}=e;t=t.rotate({deltaAngleX:$p._startPinchRotation-n},this._getConstraintContext(`rotate`,`update`))}return this.updateViewport(t,qp,{isDragging:!0,isPanning:this.touchZoom,isZooming:this.touchZoom,isRotating:this.touchRotate}),$p._lastPinchEvent=e,!0}_onPinchEnd(e){if(!this.isDragging())return!1;let{inertia:t}=this,{_lastPinchEvent:n}=$p;if(this.touchZoom&&t&&n&&e.scale!==n.scale){let r=this.getCenter(e),i=this.getZoomPosition(r),a=this.controllerState.rotateEnd(),o=Math.log2(e.scale),s=2**(o+(o-Math.log2(n.scale))/(e.deltaTime-n.deltaTime)*t/2);a=a.zoom({pos:i,scale:s}).zoomEnd(),this.updateViewport(a,{...this._getTransitionProps({around:i}),transitionDuration:t,transitionEasing:Xp},{isDragging:!1,isPanning:this.touchZoom,isZooming:this.touchZoom,isRotating:!1}),this.blockEvents(t)}else{let e=this.controllerState,t=this._getConstraintContext(`zoom`,`end`),n=this._getConstraintContext(`rotate`,`end`),r=e.zoomEnd(t).rotateEnd(n),i=this._getReboundTransition(this.touchZoom?t:n,r);this.updateViewport(r,i,{isDragging:!1,isPanning:!!i&&this.touchZoom,isZooming:!!i&&this.touchZoom,isRotating:!!i&&this.touchRotate})}return $p._startPinchRotation=null,$p._lastPinchEvent=null,!0}_onDoubleClick(e){if(!this.doubleClickZoom||Date.now()<this._suppressDoubleClickUntil)return!1;let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;let n=this.isFunctionKeyPressed(e),r=this.getZoomPosition(t),i=this.controllerState.zoom({pos:r,scale:n?.5:2});return this.updateViewport(i,this._getTransitionProps({around:r}),{isZooming:!0,isPanning:!0}),this.blockEvents(100),!0}_onDoubleClickDragStart(e){if(!this.doubleClickDragZoom)return this._doubleClickDragAnchor=null,!1;let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return this._doubleClickDragAnchor=null,!1;this._doubleClickDragAnchor=this.getZoomPosition(t);let n=this.controllerState.zoomStart({pos:this._doubleClickDragAnchor},this._getConstraintContext(`zoom`,`start`));return e.scale!==1&&(n=n.zoom({pos:this._doubleClickDragAnchor,scale:e.scale},this._getConstraintContext(`zoom`,`update`))),this.updateViewport(n,qp,{isDragging:!0,isPanning:!0,isZooming:!0}),!0}_onDoubleClickDrag(e){let t=this._doubleClickDragAnchor;if(!t)return!1;let n=this.controllerState.zoom({pos:t,scale:e.scale},this._getConstraintContext(`zoom`,`update`));return this.updateViewport(n,qp,{isDragging:!0,isPanning:!0,isZooming:!0}),!0}_onDoubleClickDragEnd(e){if(!this._doubleClickDragAnchor)return!1;this._doubleClickDragAnchor=null;let t=this.controllerState,n=this._getConstraintContext(`zoom`,`end`),r=t.zoomEnd(n),i=this._getReboundTransition(n,r);return this.updateViewport(r,i,{isDragging:!1,isPanning:!!i,isZooming:!!i}),this._suppressDoubleClickUntil=Date.now()+100,this.blockEvents(100),!0}_onKeyDown(e){if(!this.keyboard)return!1;let t=this.isFunctionKeyPressed(e),{zoomSpeed:n,moveSpeed:r,rotateSpeedX:i,rotateSpeedY:a}=this.keyboard===!0?{}:this.keyboard,{controllerState:o}=this,s,c={};switch(e.srcEvent.code){case`Minus`:s=t?o.zoomOut(n).zoomOut(n):o.zoomOut(n),c.isZooming=!0;break;case`Equal`:s=t?o.zoomIn(n).zoomIn(n):o.zoomIn(n),c.isZooming=!0;break;case`ArrowLeft`:t?(s=o.rotateLeft(i),c.isRotating=!0):(s=o.moveLeft(r),c.isPanning=!0);break;case`ArrowRight`:t?(s=o.rotateRight(i),c.isRotating=!0):(s=o.moveRight(r),c.isPanning=!0);break;case`ArrowUp`:t?(s=o.rotateUp(a),c.isRotating=!0):(s=o.moveUp(r),c.isPanning=!0);break;case`ArrowDown`:t?(s=o.rotateDown(a),c.isRotating=!0):(s=o.moveDown(r),c.isPanning=!0);break;default:return!1}return this.updateViewport(s,this._getTransitionProps(),c),!0}_getTransitionProps(e){let{transition:t}=this;return!t||!t.transitionInterpolator?qp:e?{...t,transitionInterpolator:new Kp({...e,...t.transitionInterpolator.opts,makeViewport:this.controllerState.makeViewport})}:t}},tm=Symbol(`constraintAround`),nm=class{constructor(e,t,n,r){this.makeViewport=n,this._viewportProps=this.applyConstraints(e,r),this._state=t}getViewportProps(){return this._viewportProps}getState(){return this._state}};function rm(e,t,n){let r=e-t;return r&&Number.isFinite(r)?t+r*n/(n+Math.abs(r)):t}function im(e,t,n){let r=Ep(wp(n?.left??0),e),i=Ep(wp(n?.right??0),e),a=Ep(wp(n?.top??0),t),o=Ep(wp(n?.bottom??0),t);return{x:r,y:a,width:e-r-i,height:t-a-o}}function am(e,t,n){let[r,i]=e.project(t);return r=Number.isFinite(r)?r:e.width/2,i=Number.isFinite(i)?i:e.height/2,{left:r-n.x,right:n.x+n.width-r,top:i-n.y,bottom:n.y+n.height-i}}var om=5,sm=1.2,cm=512,lm=[[-1/0,-90],[1/0,90]],um=1;function dm([e,t]){if(Math.abs(t)>90&&(t=Math.sign(t)*90),Number.isFinite(e)){let[n,r]=Cu([e,t]);return[n,V(r,0,cm)]}let[,n]=Cu([0,t]);return[e,V(n,0,cm)]}var fm=class extends nm{constructor(e){let{width:t,height:n,latitude:r,longitude:i,zoom:a,bearing:o=0,pitch:s=0,altitude:c=1.5,position:l=[0,0,0],maxZoom:u=20,minZoom:d=0,maxPitch:f=60,minPitch:p=0,startPanLngLat:m,startZoomLngLat:h,startRotatePos:g,startRotateLngLat:_,startBearing:v,startPitch:y,startZoom:b,normalize:x=!0,rubberBand:S=!1}=e,{[tm]:C}=e;K(Number.isFinite(i)),K(Number.isFinite(r)),K(Number.isFinite(a));let w=e.maxBounds||(x?lm:null),T=e.maxBoundsPadding||null;super({width:t,height:n,latitude:r,longitude:i,zoom:a,bearing:o,pitch:s,altitude:c,maxZoom:u,minZoom:d,maxPitch:f,minPitch:p,normalize:x,position:l,maxBounds:w,maxBoundsPadding:T,rubberBand:S,[tm]:C},{startPanLngLat:m,startZoomLngLat:h,startRotatePos:g,startRotateLngLat:_,startBearing:v,startPitch:y,startZoom:b},e.makeViewport,e.constraintContext),this.getAltitude=e.getAltitude}panStart({pos:e},t){return this._getUpdatedState({startPanLngLat:this._unproject(e)},t)}pan({pos:e,startPos:t},n){let r=this.getState().startPanLngLat||this._unproject(t);if(!r)return this;let i=this.makeViewport(this.getViewportProps()).panByPosition(r,e);return this._getUpdatedState(i,n)}panEnd(e){return this._getUpdatedState({startPanLngLat:null},e)}rotateStart({pos:e}){let t=this.getAltitude?.(e);return this._getUpdatedState({startRotatePos:e,startRotateLngLat:t===void 0?void 0:this._unproject3D(e,t),startBearing:this.getViewportProps().bearing,startPitch:this.getViewportProps().pitch})}rotate({pos:e,deltaAngleX:t=0,deltaAngleY:n=0}){let{startRotatePos:r,startRotateLngLat:i,startBearing:a,startPitch:o}=this.getState();if(!r||a===void 0||o===void 0)return this;let s;if(s=e?this._getNewRotation(e,r,o,a):{bearing:a+t,pitch:o+n},i){let e=this.makeViewport({...this.getViewportProps(),...s}),t=`panByPosition3D`in e?`panByPosition3D`:`panByPosition`;return this._getUpdatedState({...s,...e[t](i,r)})}return this._getUpdatedState(s)}rotateEnd(){return this._getUpdatedState({startRotatePos:null,startRotateLngLat:null,startBearing:null,startPitch:null})}zoomStart({pos:e},t){return this._getUpdatedState({startZoomLngLat:this._unproject(e),startZoom:this.getViewportProps().zoom},t)}zoom({pos:e,startPos:t,scale:n},r){let{startZoom:i,startZoomLngLat:a}=this.getState();return a||=(i=this.getViewportProps().zoom,this._unproject(t)||this._unproject(e)),a?this._getUpdatedState({zoom:i+Math.log2(n),[tm]:{position:a,screenPosition:e}},r):this}zoomEnd(e){return this._getUpdatedState({startZoomLngLat:null,startZoom:null},e)}zoomIn(e=2,t){return this._zoomFromCenter(e,t)}zoomOut(e=2,t){return this._zoomFromCenter(1/e,t)}moveLeft(e=100,t){return this._panFromCenter([e,0],t)}moveRight(e=100,t){return this._panFromCenter([-e,0],t)}moveUp(e=100,t){return this._panFromCenter([0,e],t)}moveDown(e=100,t){return this._panFromCenter([0,-e],t)}rotateLeft(e=15){return this._getUpdatedState({bearing:this.getViewportProps().bearing-e})}rotateRight(e=15){return this._getUpdatedState({bearing:this.getViewportProps().bearing+e})}rotateUp(e=10){return this._getUpdatedState({pitch:this.getViewportProps().pitch+e})}rotateDown(e=10){return this._getUpdatedState({pitch:this.getViewportProps().pitch-e})}shortestPathFrom(e){let t=e.getViewportProps(),n={...this.getViewportProps()},{bearing:r,longitude:i}=n;return Math.abs(r-t.bearing)>180&&(n.bearing=r<0?r+360:r-360),Math.abs(i-t.longitude)>180&&(n.longitude=i<0?i+360:i-360),n}applyConstraints(e,t){let n=e,r=n[tm];delete n[tm];let{maxPitch:i,minPitch:a,pitch:o,bearing:s,normalize:c,maxBounds:l,rubberBand:u}=e;c&&(s<-180||s>180)&&(e.bearing=Md(s+180,360)-180),e.pitch=V(o,a,i);let d=this._constrainZoom(e.zoom,e),f=u&&t?.mode===`elastic`;if(e.zoom=t?.mode===`preserve`?e.zoom:f?rm(e.zoom,d,um):d,r){let t=this.makeViewport(e);Object.assign(e,t.panByPosition(r.position,r.screenPosition))}if(c&&(e.longitude<-180||e.longitude>180)&&(e.longitude=Md(e.longitude+180,360)-180),l){let n=im(e.width,e.height,e.maxBoundsPadding),r=am(this.makeViewport({...e,bearing:0,pitch:0}),[e.longitude,e.latitude],n),i=dm(l[0]),a=dm(l[1]),o=2**e.zoom,s=[i[0]+r.left/o,i[1]+r.bottom/o],c=[a[0]-r.right/o,a[1]-r.top/o],u=dm([e.longitude,e.latitude]),d=[V(u[0],s[0],c[0]),V(u[1],s[1],c[1])],p=u.slice();if(n.width>=0&&(p[0]=t?.mode===`preserve`?u[0]:f?rm(u[0],d[0],n.width/2/o):d[0]),n.height>=0&&(p[1]=t?.mode===`preserve`?u[1]:f?rm(u[1],d[1],n.height/2/o):d[1]),p[0]!==u[0]||p[1]!==u[1]){let[t,n]=wu(p);p[0]!==u[0]&&(e.longitude=t),p[1]!==u[1]&&(e.latitude=n)}}return e}_constrainZoom(e,t){t||=this.getViewportProps();let{maxZoom:n,maxBounds:r}=t,i=r!==null&&t.width>0&&t.height>0,{minZoom:a}=t;if(i){let e=im(t.width,t.height,t.maxBoundsPadding),i=dm(r[0]),o=dm(r[1]),s=o[0]-i[0],c=o[1]-i[1];e.width>0&&Number.isFinite(s)&&s>0&&(a=Math.max(a,Math.log2(e.width/s))),e.height>0&&Number.isFinite(c)&&c>0&&(a=Math.max(a,Math.log2(e.height/c))),a>n&&(a=n)}return V(e,a,n)}_zoomFromCenter(e,t){let{width:n,height:r}=this.getViewportProps();return this.zoom({pos:[n/2,r/2],scale:e},t)}_panFromCenter(e,t){let{width:n,height:r}=this.getViewportProps();return this.pan({startPos:[n/2,r/2],pos:[n/2+e[0],r/2+e[1]]},t)}_getUpdatedState(e,t){return new this.constructor({makeViewport:this.makeViewport,...this.getViewportProps(),...this.getState(),...e,constraintContext:t})}_unproject(e){let t=this.makeViewport(this.getViewportProps());return e&&t.unproject(e)}_unproject3D(e,t){return this.makeViewport(this.getViewportProps()).unproject(e,{targetZ:t})}_getNewRotation(e,t,n,r){let i=e[0]-t[0],a=e[1]-t[1],o=e[1],s=t[1],{width:c,height:l}=this.getViewportProps(),u=i/c,d=0;a>0?Math.abs(l-s)>om&&(d=a/(s-l)*sm):a<0&&s>om&&(d=1-o/s),d=V(d,-1,1);let{minPitch:f,maxPitch:p}=this.getViewportProps(),m=r+180*u,h=n;return d>0?h=n+d*(p-n):d<0&&(h=n-d*(f-n)),{pitch:h,bearing:m}}},pm=class extends em{constructor(){super(...arguments),this.ControllerState=fm,this.transition={transitionDuration:300,transitionInterpolator:new Kp({transitionProps:{compare:[`longitude`,`latitude`,`zoom`,`bearing`,`pitch`,`position`],required:[`longitude`,`latitude`,`zoom`]}})},this.dragMode=`pan`,this.rotationPivot=`center`,this._getAltitude=e=>{if(this.rotationPivot===`2d`)return 0;if(this.rotationPivot===`3d`&&this.pickPosition){let{x:t,y:n}=this.props,r=this.pickPosition(t+e[0],n+e[1]);if(r&&r.coordinate&&r.coordinate.length>=3)return r.coordinate[2]}}}setProps(e){`rotationPivot`in e&&(this.rotationPivot=e.rotationPivot||`center`),e.getAltitude=this._getAltitude,e.position=e.position||[0,0,0],e.maxBounds=e.maxBounds||(e.normalize===!1?null:lm),super.setProps(e)}updateViewport(e,t=null,n={}){let r=e.getState();n.isDragging&&r.startRotateLngLat?n={...n,rotationPivotPosition:r.startRotateLngLat}:n.isDragging===!1&&(n={...n,rotationPivotPosition:void 0}),super.updateViewport(e,t,n)}},mm=class extends Pp{constructor(e={}){super(e)}getViewportType(){return qd}get ControllerType(){return pm}};mm.displayName=`MapView`;var hm=new kd;function gm(e,t){return(e.order??1/0)-(t.order??1/0)}var _m=class{constructor(e){this._resolvedEffects=[],this._defaultEffects=[],this.effects=[],this._context=e,this._needsRedraw=`Initial render`,this._setEffects([])}addDefaultEffect(e){let t=this._defaultEffects;if(!t.find(t=>t.id===e.id)){let n=t.findIndex(t=>gm(t,e)>0);n<0?t.push(e):t.splice(n,0,e),e.setup(this._context),this._setEffects(this.effects)}}setProps(e){`effects`in e&&(G(e.effects,this.effects,1)||this._setEffects(e.effects))}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;return e.clearRedrawFlags&&(this._needsRedraw=!1),t}getEffects(){return this._resolvedEffects}_setEffects(e){let t={};for(let e of this.effects)t[e.id]=e;let n=[];for(let r of e){let e=t[r.id],i=r;e&&e!==r?e.setProps?(e.setProps(r.props),i=e):e.cleanup(this._context):e||r.setup(this._context),n.push(i),delete t[r.id]}for(let e in t)t[e].cleanup(this._context);this.effects=n,this._resolvedEffects=n.concat(this._defaultEffects),e.some(e=>e instanceof kd)||this._resolvedEffects.push(hm),this._needsRedraw=`effects changed`}finalize(){for(let e of this._resolvedEffects)e.cleanup(this._context);this.effects.length=0,this._resolvedEffects.length=0,this._defaultEffects.length=0}},vm=class extends xd{shouldDrawLayer(e){let{operation:t}=e.props;return t.includes(`draw`)||t.includes(`terrain`)}render(e){return this._render(e)}},ym=`deckRenderer.renderLayers`,bm=class{constructor(e,t={}){this.device=e,this.stats=t.stats,this.layerFilter=null,this.drawPickingColors=!1,this.drawLayersPass=new vm(e),this.pickLayersPass=new rp(e),this.renderCount=0,this._needsRedraw=`Initial render`,this.renderBuffers=[],this.lastPostProcessEffect=null}setProps(e){this.layerFilter!==e.layerFilter&&(this.layerFilter=e.layerFilter,this._needsRedraw=`layerFilter changed`),this.drawPickingColors!==e.drawPickingColors&&(this.drawPickingColors=e.drawPickingColors,this._needsRedraw=`drawPickingColors changed`)}renderLayers(e){let t=this.drawPickingColors?this.pickLayersPass:this.drawLayersPass,n={layerFilter:this.layerFilter,isPicking:this.drawPickingColors,...e};if(!e.viewports.length){let e=t.render(n),r=`stats`in e?e.stats:e;this._updateStats(r);return}n.effects&&this._preRender(n.effects,n);let r=this.lastPostProcessEffect?this.renderBuffers[0]:n.target;this.lastPostProcessEffect&&(n.clearColor=[0,0,0,0],n.clearCanvas=!0);let i=t.render({...n,target:r}),a=`stats`in i?i.stats:i;n.effects&&(this.lastPostProcessEffect&&(n.clearCanvas=e.clearCanvas===void 0||e.clearCanvas),this._postRender(n.effects,n)),this.renderCount++,B(ym,this,a,e),this._updateStats(a)}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;return e.clearRedrawFlags&&(this._needsRedraw=!1),t}finalize(){let{renderBuffers:e}=this;for(let t of e)t.delete();e.length=0}_updateStats(e){if(!this.stats)return;let t=0;for(let{visibleCount:n}of e)t+=n;this.stats.get(`Layers rendered`).addCount(t)}_preRender(e,t){this.lastPostProcessEffect=null,t.preRenderStats=t.preRenderStats||{};for(let n of e)t.preRenderStats[n.id]=n.preRender(t),n.postRender&&(this.lastPostProcessEffect=n.id);this.lastPostProcessEffect&&this._resizeRenderBuffers(t.canvasContext)}_resizeRenderBuffers(e=this.device.canvasContext){let{renderBuffers:t}=this,n=e.getDrawingBufferSize(),[r,i]=n;t.length===0&&[0,1].map(e=>{let n=this.device.createTexture({sampler:{minFilter:`linear`,magFilter:`linear`},width:r,height:i});t.push(this.device.createFramebuffer({id:`deck-renderbuffer-${e}`,colorAttachments:[n]}))});for(let e of t)e.resize(n)}_postRender(e,t){let{renderBuffers:n}=this,r=t.target??t.canvasContext?.getCurrentFramebuffer()??t.target,i={...t,inputBuffer:n[0],swapBuffer:n[1]};for(let t of e)if(t.postRender){i.target=t.id===this.lastPostProcessEffect?r:void 0;let e=t.postRender(i);i.inputBuffer=e,i.swapBuffer=e===n[0]?n[1]:n[0]}}},xm={pickedColor:null,pickedObjectIndex:-1};function Sm({pickedColors:e,decodePickingColor:t,deviceX:n,deviceY:r,deviceRadius:i,deviceRect:a}){let{x:o,y:s,width:c,height:l}=a,u=i*i,d=-1,f=0;for(let t=0;t<l;t++){let i=t+s-r,a=i*i;if(a>u)f+=4*c;else for(let t=0;t<c;t++){if(e[f+3]-1>=0){let e=t+o-n,r=e*e+a;r<=u&&(u=r,d=f)}f+=4}}if(d>=0){let n=e.slice(d,d+4),r=t(n);if(r){let e=Math.floor(d/4/c),t=d/4-e*c;return{...r,pickedColor:n,pickedX:o+t,pickedY:s+e}}z.error(`Picked non-existent layer. Is picking buffer corrupt?`)()}return xm}function Cm({pickedColors:e,decodePickingColor:t}){let n=new Map;if(e){for(let r=0;r<e.length;r+=4)if(e[r+3]-1>=0){let i=e.slice(r,r+4),a=i.join(`,`);if(!n.has(a)){let e=t(i);e?n.set(a,{...e,color:i}):z.error(`Picked non-existent layer. Is picking buffer corrupt?`)()}}}return Array.from(n.values())}function wm({pickInfo:e,viewports:t,pixelRatio:n,x:r,y:i,z:a}){let o=t[0];t.length>1&&(o=Dm(e?.pickedViewports||t,{x:r,y:i}));let s;if(o){let e=[r-o.x,i-o.y];a!==void 0&&(e[2]=a),s=o.unproject(e)}return{color:null,layer:null,viewport:o,index:-1,picked:!1,x:r,y:i,pixel:[r,i],coordinate:s,devicePixel:e&&`pickedX`in e?[e.pickedX,e.pickedY]:void 0,pixelRatio:n}}function Tm(e){let{pickInfo:t,lastPickedInfo:n,mode:r,layers:i}=e,{pickedColor:a,pickedLayer:o,pickedObjectIndex:s}=t,c=o?[o]:[];if(r===`hover`){let e=n.index,t=n.layerId,r=o?o.props.id:null;if(r!==t||s!==e){if(r!==t){let e=i.find(e=>e.props.id===t);e&&c.unshift(e)}n.layerId=r,n.index=s,n.info=null}}let l=wm(e),u=new Map;return u.set(null,l),c.forEach(e=>{let t={...l};e===o&&(t.color=a,t.index=s,t.picked=!0),t=Em({layer:e,info:t,mode:r});let i=t.layer;e===o&&r===`hover`&&(n.info=t),u.set(i.id,t),r===`hover`&&i.updateAutoHighlight(t)}),u}function Em({layer:e,info:t,mode:n}){for(;e&&t;){let r=t.layer||null;t.sourceLayer=r,t.layer=e,t=e.getPickingInfo({info:t,mode:n,sourceLayer:r}),e=e.parent}return t}function Dm(e,t){for(let n=e.length-1;n>=0;n--){let r=e[n];if(r.containsPixel(t))return r}return e[0]}var Om=class{constructor(e,t={}){this._pickable=!0,this.device=e,this.stats=t.stats,this.pickLayersPass=new rp(e),this.lastPickedInfo={index:-1,layerId:null,info:null}}setProps(e){`layerFilter`in e&&(this.layerFilter=e.layerFilter),`_pickable`in e&&(this._pickable=e._pickable)}finalize(){this.pickingFBO&&this.pickingFBO.destroy(),this.depthFBO&&this.depthFBO.destroy()}pickObjectAsync(e){return this._pickClosestObjectAsync(e)}pickObjectsAsync(e){return this._pickVisibleObjectsAsync(e)}pickObject(e){return this._pickClosestObject(e)}pickObjects(e){return this._pickVisibleObjects(e)}getLastPickedObject({x:e,y:t,layers:n,viewports:r},i=this.lastPickedInfo.info){let a=i&&i.layer&&i.layer.id,o=i&&i.viewport&&i.viewport.id,s=a?n.find(e=>e.id===a):null,c=o&&r.find(e=>e.id===o)||r[0],l={x:e,y:t,viewport:c,coordinate:c&&c.unproject([e-c.x,t-c.y]),layer:s};return{...i,...l}}_resizeBuffer(e=this.device.getDefaultCanvasContext()){if(!this.pickingFBO){let e=this.device.createTexture({format:`rgba8unorm`,width:1,height:1,usage:I.RENDER_ATTACHMENT|I.COPY_SRC});if(this.pickingFBO=this.device.createFramebuffer({colorAttachments:[e],depthStencilAttachment:`depth16unorm`}),this.device.isTextureFormatRenderable(`rgba32float`)){let e=this.device.createTexture({format:`rgba32float`,width:1,height:1,usage:I.RENDER_ATTACHMENT|I.COPY_SRC}),t=this.device.createFramebuffer({colorAttachments:[e],depthStencilAttachment:`depth16unorm`});this.depthFBO=t}}let[t,n]=e.getDrawingBufferSize();this.pickingFBO?.resize({width:t,height:n}),this.depthFBO?.resize({width:t,height:n})}_getPickable(e){if(this._pickable===!1)return null;let t=e.filter(e=>this.pickLayersPass.shouldDrawLayer(e)&&!e.isComposite);return t.length?t:null}async _pickClosestObjectAsync({layers:e,views:t,viewports:n,x:r,y:i,radius:a=0,depth:o=1,mode:s=`query`,unproject3D:c,canvasContext:l=this.device.getDefaultCanvasContext(),onViewportActive:u,effects:d}){let f=l.cssToDeviceRatio(),p=this._getPickable(e);if(!p||n.length===0)return{result:[],emptyInfo:wm({viewports:n,x:r,y:i,pixelRatio:f})};this._resizeBuffer(l);let m=l.cssToDevicePixels([r,i],!0),h=[m.x+Math.floor(m.width/2),m.y+Math.floor(m.height/2)],g=Math.round(a*f),{width:_,height:v}=this.pickingFBO,y=this._getPickingRect({deviceX:h[0],deviceY:h[1],deviceRadius:g,deviceWidth:_,deviceHeight:v}),b={x:r-a,y:i-a,width:a*2+1,height:a*2+1},x,S=[],C=new Set;for(let e=0;e<o;e++){let a;a=y?Sm({...await this._drawAndSampleAsync({layers:p,views:t,viewports:n,onViewportActive:u,deviceRect:y,cullRect:b,effects:d,pass:`picking:${s}`,canvasContext:l}),deviceX:h[0],deviceY:h[1],deviceRadius:g,deviceRect:y}):{pickedColor:null,pickedObjectIndex:-1};let m,_=this._getDepthLayers(a,p,c);if(_.length>0){let{pickedColors:e}=await this._drawAndSampleAsync({layers:_,views:t,viewports:n,onViewportActive:u,deviceRect:{x:a.pickedX??h[0],y:a.pickedY??h[1],width:1,height:1},cullRect:b,effects:d,pass:`picking:${s}:z`,canvasContext:l},!0);e[3]&&(m=e[0])}a.pickedLayer&&e+1<o&&(C.add(a.pickedLayer),a.pickedLayer.disablePickingIndex(a.pickedObjectIndex)),x=Tm({pickInfo:a,lastPickedInfo:this.lastPickedInfo,mode:s,layers:p,viewports:n,x:r,y:i,z:m,pixelRatio:f});for(let e of x.values())e.layer&&S.push(e);if(!a.pickedColor)break}for(let e of C)e.restorePickingColors();return{result:S,emptyInfo:x.get(null)}}_pickClosestObject({layers:e,views:t,viewports:n,x:r,y:i,radius:a=0,depth:o=1,mode:s=`query`,unproject3D:c,canvasContext:l=this.device.getDefaultCanvasContext(),onViewportActive:u,effects:d}){let f=l.cssToDeviceRatio(),p=this._getPickable(e);if(!p||n.length===0)return{result:[],emptyInfo:wm({viewports:n,x:r,y:i,pixelRatio:f})};this._resizeBuffer(l);let m=l.cssToDevicePixels([r,i],!0),h=[m.x+Math.floor(m.width/2),m.y+Math.floor(m.height/2)],g=Math.round(a*f),{width:_,height:v}=this.pickingFBO,y=this._getPickingRect({deviceX:h[0],deviceY:h[1],deviceRadius:g,deviceWidth:_,deviceHeight:v}),b={x:r-a,y:i-a,width:a*2+1,height:a*2+1},x,S=[],C=new Set;for(let e=0;e<o;e++){let a;a=y?Sm({...this._drawAndSample({layers:p,views:t,viewports:n,onViewportActive:u,deviceRect:y,cullRect:b,effects:d,pass:`picking:${s}`,canvasContext:l}),deviceX:h[0],deviceY:h[1],deviceRadius:g,deviceRect:y}):{pickedColor:null,pickedObjectIndex:-1};let m,_=this._getDepthLayers(a,p,c);if(_.length>0){let{pickedColors:e}=this._drawAndSample({layers:_,views:t,viewports:n,onViewportActive:u,deviceRect:{x:a.pickedX??h[0],y:a.pickedY??h[1],width:1,height:1},cullRect:b,effects:d,pass:`picking:${s}:z`,canvasContext:l},!0);e[3]&&(m=e[0])}a.pickedLayer&&e+1<o&&(C.add(a.pickedLayer),a.pickedLayer.disablePickingIndex(a.pickedObjectIndex)),x=Tm({pickInfo:a,lastPickedInfo:this.lastPickedInfo,mode:s,layers:p,viewports:n,x:r,y:i,z:m,pixelRatio:f});for(let e of x.values())e.layer&&S.push(e);if(!a.pickedColor)break}for(let e of C)e.restorePickingColors();return{result:S,emptyInfo:x.get(null)}}async _pickVisibleObjectsAsync({layers:e,views:t,viewports:n,x:r,y:i,width:a=1,height:o=1,mode:s=`query`,maxObjects:c=null,canvasContext:l=this.device.getDefaultCanvasContext(),onViewportActive:u,effects:d}){let f=this._getPickable(e);if(!f||n.length===0)return[];this._resizeBuffer(l);let p=l.cssToDeviceRatio(),m=l.cssToDevicePixels([r,i],!0),h=m.x,g=m.y+m.height,_=l.cssToDevicePixels([r+a,i+o],!0),v=_.x+_.width,y=_.y,b={x:h,y,width:v-h,height:g-y},x=Cm(await this._drawAndSampleAsync({layers:f,views:t,viewports:n,onViewportActive:u,deviceRect:b,cullRect:{x:r,y:i,width:a,height:o},effects:d,pass:`picking:${s}`,canvasContext:l})),S=new Map,C=[],w=Number.isFinite(c);for(let e=0;e<x.length&&!(w&&C.length>=c);e++){let t=x[e],n={color:t.pickedColor,layer:null,index:t.pickedObjectIndex,picked:!0,x:r,y:i,pixelRatio:p};n=Em({layer:t.pickedLayer,info:n,mode:s});let a=n.layer.id;S.has(a)||S.set(a,new Set);let o=S.get(a),c=n.object??n.index;o.has(c)||(o.add(c),C.push(n))}return C}_pickVisibleObjects({layers:e,views:t,viewports:n,x:r,y:i,width:a=1,height:o=1,mode:s=`query`,maxObjects:c=null,canvasContext:l=this.device.getDefaultCanvasContext(),onViewportActive:u,effects:d}){let f=this._getPickable(e);if(!f||n.length===0)return[];this._resizeBuffer(l);let p=l.cssToDeviceRatio(),m=l.cssToDevicePixels([r,i],!0),h=m.x,g=m.y+m.height,_=l.cssToDevicePixels([r+a,i+o],!0),v=_.x+_.width,y=_.y,b={x:h,y,width:v-h,height:g-y},x=Cm(this._drawAndSample({layers:f,views:t,viewports:n,onViewportActive:u,deviceRect:b,cullRect:{x:r,y:i,width:a,height:o},effects:d,pass:`picking:${s}`,canvasContext:l})),S=new Map,C=[],w=Number.isFinite(c);for(let e=0;e<x.length&&!(w&&C.length>=c);e++){let t=x[e],n={color:t.pickedColor,layer:null,index:t.pickedObjectIndex,picked:!0,x:r,y:i,pixelRatio:p};n=Em({layer:t.pickedLayer,info:n,mode:s});let a=n.layer.id;S.has(a)||S.set(a,new Set);let o=S.get(a),c=n.object??n.index;o.has(c)||(o.add(c),C.push(n))}return C}async _drawAndSampleAsync({layers:e,views:t,viewports:n,onViewportActive:r,deviceRect:i,cullRect:a,effects:o,pass:s,canvasContext:c},l=!1){let u=l?this.depthFBO:this.pickingFBO,d={layers:e,layerFilter:this.layerFilter,views:t,viewports:n,onViewportActive:r,pickingFBO:u,deviceRect:i,cullRect:a,effects:o,pass:s,canvasContext:c,pickZ:l,preRenderStats:{},isPicking:!0};for(let e of o)e.useInPicking&&(d.preRenderStats[e.id]=e.preRender(d));let{decodePickingColor:f,stats:p}=this.pickLayersPass.render(d);this._updateStats(p);let{x:m,y:h,width:g,height:_}=i,v=u.colorAttachments[0]?.texture;if(!v)throw Error(`Picking framebuffer color attachment is missing`);let y=await this._readTextureDataAsync(v,{x:m,y:h,width:g,height:_},l?Float32Array:Uint8Array);if(!l){let e=!1;for(let t=3;t<y.length;t+=4)if(y[t]!==0){e=!0;break}!e&&y.length>0&&z.warn(`Async pick readback returned only zero alpha values`,{deviceRect:i,bytes:Array.from(y.subarray(0,Math.min(y.length,16)))})()}return{pickedColors:y,decodePickingColor:f}}async _readTextureDataAsync(e,t,n){let{width:r,height:i}=t,a=e.computeMemoryLayout(t),o=this.device.createBuffer({byteLength:a.byteLength,usage:S.COPY_DST|S.MAP_READ});try{e.readBuffer(t,o);let s=await o.readAsync(0,a.byteLength),c=n.BYTES_PER_ELEMENT;if(a.bytesPerRow%c!==0)throw Error(`Texture readback row stride ${a.bytesPerRow} is not aligned to ${c}-byte elements.`);let l=new n(s.buffer,s.byteOffset,a.byteLength/c),u=r*4,d=a.bytesPerRow/c;if(d<u)throw Error(`Texture readback row stride ${d} is smaller than packed row length ${u}.`);let f=new n(r*i*4);for(let e=0;e<i;e++){let t=e*d;f.set(l.subarray(t,t+u),e*u)}return f}finally{o.destroy()}}_drawAndSample({layers:e,views:t,viewports:n,onViewportActive:r,deviceRect:i,cullRect:a,effects:o,pass:s,canvasContext:c},l=!1){let u=l?this.depthFBO:this.pickingFBO,d={layers:e,layerFilter:this.layerFilter,views:t,viewports:n,onViewportActive:r,pickingFBO:u,deviceRect:i,cullRect:a,effects:o,pass:s,canvasContext:c,pickZ:l,preRenderStats:{},isPicking:!0};for(let e of o)e.useInPicking&&(d.preRenderStats[e.id]=e.preRender(d));let{decodePickingColor:f,stats:p}=this.pickLayersPass.render(d);this._updateStats(p);let{x:m,y:h,width:g,height:_}=i,v=new(l?Float32Array:Uint8Array)(g*_*4);return this.device.readPixelsToArrayWebGL(u,{sourceX:m,sourceY:h,sourceWidth:g,sourceHeight:_,target:v}),{pickedColors:v,decodePickingColor:f}}_updateStats(e){if(!this.stats)return;let t=0;for(let{visibleCount:n}of e)t+=n;this.stats.get(`Layers picked`).addCount(t)}_getDepthLayers(e,t,n){if(!n||!this.depthFBO)return[];let{pickedLayer:r}=e,i=r?.state?.terrainDrawMode===`drape`;return r&&!i?[r]:t.filter(e=>e.props.operation.includes(`terrain`))}_getPickingRect({deviceX:e,deviceY:t,deviceRadius:n,deviceWidth:r,deviceHeight:i}){let a=Math.max(0,e-n),o=Math.max(0,t-n),s=Math.min(r,e+n+1)-a,c=Math.min(i,t+n+1)-o;return s<=0||c<=0?null:{x:a,y:o,width:s,height:c}}},km={"top-left":{top:0,left:0},"top-right":{top:0,right:0},"bottom-left":{bottom:0,left:0},"bottom-right":{bottom:0,right:0},fill:{top:0,left:0,bottom:0,right:0}},Am=`top-left`,jm=`root`,Mm=class{constructor({deck:e,parentElement:t}){this.defaultWidgets=[],this.widgets=[],this.resolvedWidgets=[],this.containers={},this.lastViewports={},this.deck=e,t?.classList.add(`deck-widget-container`),this.parentElement=t}getWidgets(){return this.resolvedWidgets}setProps(e){if(e.widgets&&!G(e.widgets,this.widgets,1)){let t=e.widgets.filter(Boolean);this._setWidgets(t)}}finalize(){for(let e of this.getWidgets())this._removeWidget(e);this.defaultWidgets.length=0,this.resolvedWidgets.length=0;for(let e in this.containers)this.containers[e].remove()}addDefault(e){this.defaultWidgets.find(t=>t.id===e.id)||(this._addWidget(e),this.defaultWidgets.push(e),this._setWidgets(this.widgets))}onRedraw({viewports:e,layers:t}){let n=e.reduce((e,t)=>(e[t.id]=t,e),{});for(let r of this.getWidgets()){let{viewId:i}=r;if(i){let e=n[i];e&&(r.onViewportChange&&r.onViewportChange(e),r.onRedraw?.({viewports:[e],layers:t}))}else{if(r.onViewportChange)for(let t of e)r.onViewportChange(t);r.onRedraw?.({viewports:e,layers:t})}}this.lastViewports=n,this._updateContainers()}onHover(e,t){for(let n of this.getWidgets()){let{viewId:r}=n;r&&r!==e.viewport?.id||n.onHover?.(e,t)}}getCanvasBounds(e){let t=(this.deck?.getCanvas?.())?.getBoundingClientRect(),n=this.parentElement?.getBoundingClientRect(),r=this.deck?.getCanvasContext?.(e?.id);if(r&&n){r.updatePosition();let[e,t]=r.getPosition(),[i,a]=r.getCSSSize();return{x:e-n.left,y:t-n.top,width:i,height:a}}return{x:t&&n?t.left-n.left:0,y:t&&n?t.top-n.top:0,width:t?.width||this.deck?.width||0,height:t?.height||this.deck?.height||0}}onEvent(e,t){let n=Bl[t.type];if(n)for(let r of this.getWidgets()){let{viewId:i}=r;i&&i!==e.viewport?.id||r[n]?.(e,t)}}_setWidgets(e){let t={};for(let e of this.resolvedWidgets)t[e.id]=e;this.resolvedWidgets.length=0;for(let e of this.defaultWidgets)t[e.id]=null,this.resolvedWidgets.push(e);for(let n of e){let e=t[n.id];e?e.viewId!==n.viewId||e.placement!==n.placement?(this._removeWidget(e),this._addWidget(n)):n!==e&&(e.setProps(n.props),n=e):this._addWidget(n),t[n.id]=null,this.resolvedWidgets.push(n)}for(let e in t){let n=t[e];n&&this._removeWidget(n)}this.widgets=e}_addWidget(e){let{viewId:t=null,placement:n=Am}=e,r=e.props._container??t;e.widgetManager=this,e.deck=this.deck,e.rootElement=e._onAdd({deck:this.deck,viewId:t}),e.rootElement&&this._getContainer(r,n).append(e.rootElement),e.updateHTML()}_removeWidget(e){e.onRemove?.(),e.rootElement&&e.rootElement.remove(),e.rootElement=void 0,e.deck=void 0,e.widgetManager=void 0}_getContainer(e,t){if(e&&typeof e!=`string`)return e;let n=e||jm,r=this.containers[n];r||(r=document.createElement(`div`),r.style.pointerEvents=`none`,r.style.position=`absolute`,r.style.overflow=`hidden`,this.parentElement?.append(r),this.containers[n]=r);let i=r.querySelector(`.${t}`);return i||(i=globalThis.document.createElement(`div`),i.className=t,i.style.position=`absolute`,i.style.zIndex=`2`,Object.assign(i.style,km[t]),r.append(i)),i}_updateContainers(){for(let e in this.containers){let t=this.lastViewports[e]||null,n=e===jm||t,r=this.containers[e];if(n){let e=this._getContainerBounds(t);r.style.display=`block`,r.style.left=`${e.x}px`,r.style.top=`${e.y}px`,r.style.width=`${e.width}px`,r.style.height=`${e.height}px`}else r.style.display=`none`}}_getContainerBounds(e){if(!e)return{x:0,y:0,width:this.parentElement?.clientWidth||this.deck.width,height:this.parentElement?.clientHeight||this.deck.height};let t=this.getCanvasBounds(e);return{x:t.x+e.x,y:t.y+e.y,width:e.width,height:e.height}}};function Nm(e,t){t&&Object.entries(t).map(([t,n])=>{t.startsWith(`--`)?e.style.setProperty(t,n):e.style[t]=n})}function Pm(e,t){t&&Object.keys(t).map(t=>{t.startsWith(`--`)?e.style.removeProperty(t):e.style[t]=``})}var Fm=class{constructor(e){this.viewId=null,this.props={...this.constructor.defaultProps,...e},this.id=this.props.id}setProps(e){let t=this.props,n=this.rootElement;n&&t.className!==e.className&&(t.className&&n.classList.remove(t.className),e.className&&n.classList.add(e.className)),n&&!G(t.style,e.style,1)&&(Pm(n,t.style),Nm(n,e.style)),Object.assign(this.props,e),this.updateHTML()}updateHTML(){this.rootElement&&this.onRenderHTML(this.rootElement)}get viewIds(){return this.viewId?[this.viewId]:this.deck?.getViews().map(e=>e.id)??[]}getViewState(e){return this.deck?.viewManager?.getViewState(e)||{}}setViewState(e,t){this.deck?._onViewStateChange({viewId:e,viewState:t,interactionState:{}})}onCreateRootElement(){let e=[`deck-widget`,this.className,this.props.className],t=document.createElement(`div`);return e.filter(e=>typeof e==`string`&&e.length>0).forEach(e=>t.classList.add(e)),Nm(t,this.props.style),t}_onAdd(e){return this.onAdd(e)??this.onCreateRootElement()}onAdd(e){}onRemove(){}onViewportChange(e){}onRedraw(e){}onHover(e,t){}onClick(e,t){}onDrag(e,t){}onDragStart(e,t){}onDragEnd(e,t){}};Fm.defaultProps={id:`widget`,style:{},_container:null,className:``};var Im={zIndex:`1`,position:`absolute`,pointerEvents:`none`,color:`#a0a7b4`,backgroundColor:`#29323c`,padding:`10px`,top:`0`,left:`0`,display:`none`},Lm=class extends Fm{constructor(e={}){super(e),this.id=`default-tooltip`,this.placement=`fill`,this.className=`deck-tooltip`,this.isVisible=!1,this.setProps(e)}onCreateRootElement(){let e=document.createElement(`div`);return e.className=this.className,Object.assign(e.style,Im),e}onRenderHTML(e){}onViewportChange(e){this.isVisible&&e.id===this.lastViewport?.id&&!e.equals(this.lastViewport)&&this.setTooltip(null),this.lastViewport=e}onHover(e){let{deck:t}=this,n=t&&t.props.getTooltip;if(!n)return;let r=n(e),i=this.widgetManager?.getCanvasBounds(e.viewport),a=e.x+(i?.x||0),o=e.y+(i?.y||0);this.setTooltip(r,a,o)}setTooltip(e,t,n){let r=this.rootElement;if(r){if(typeof e==`string`)r.innerText=e;else if(e)e.text&&(r.innerText=e.text),e.html&&(r.innerHTML=e.html),e.className&&(r.className=e.className);else{this.isVisible=!1,r.style.display=`none`;return}this.isVisible=!0,r.style.display=`block`,r.style.transform=`translate(${t}px, ${n}px)`,e&&typeof e==`object`&&`style`in e&&Object.assign(r.style,e.style)}}};Lm.defaultProps={...Fm.defaultProps};var Rm=class{constructor(e){this.targets={},this.order=[],this.eventManagers={},this._eventRootToCanvasId=new WeakMap,this._createEventManager=e.createEventManager,this._getEventRoot=e.getEventRoot}finalize(){for(let e of Object.values(this.targets))e.eventManager.destroy(),e.presentationContext.destroy();this.targets={},this.order=[],this.eventManagers={},this._eventRootToCanvasId=new WeakMap}syncCanvasEntries(e){let t=this._normalizeCanvasList(e.canvases),n={},r=[],i=new Map;for(let{canvas:e}of t){let t=this._getEventRoot(e);i.set(t,(i.get(t)||0)+1)}for(let{id:a,canvas:o}of t){let t=this._getEventRoot(o),s=i.get(t)===1?t:o,c=this.targets[a];if(!c||c.device!==e.device||c.canvas!==o||c.eventRoot!==s){c?.eventManager.destroy(),c?.presentationContext.destroy();let t=e.device.createPresentationContext({id:a,canvas:o,useDevicePixels:e.useDevicePixels,autoResize:!0});c={id:a,device:e.device,canvas:o,eventRoot:s,presentationContext:t,eventManager:this._createEventManager(s)}}this._eventRootToCanvasId.set(s,a),this._eventRootToCanvasId.set(o,a),n[a]=c,r.push(a)}for(let[e,t]of Object.entries(this.targets))n[e]||(t.eventManager.destroy(),t.presentationContext.destroy());this.targets=n,this.order=r;let a=Object.fromEntries(Object.entries(n).map(([e,t])=>[e,t.eventManager]));this._haveSameEventManagers(a)||(this.eventManagers=a)}getCanvasIdFromEvent(e){return e?this._eventRootToCanvasId.get(e):void 0}getTarget(e){return this.targets[e||this.order[0]||`default-canvas`]||null}_normalizeCanvasList(e=[]){let t=new Set;return e.map((e,n)=>{let r,i;return typeof e==`string`?(r=document.getElementById(e),K(r,`Canvas with id ${e} not found`),i=e):(r=e,i=r.id||`deckgl-canvas-${n}`),K(!t.has(i),`Duplicate canvas id ${i}`),t.add(i),{id:i,canvas:r}})}_haveSameEventManagers(e){let t=Object.keys(e),n=Object.keys(this.eventManagers);return t.length===n.length&&t.every(t=>e[t]===this.eventManagers[t])}},zm={WEBGL_depth_texture:{UNSIGNED_INT_24_8_WEBGL:34042},OES_element_index_uint:{},OES_texture_float:{},OES_texture_half_float:{HALF_FLOAT_OES:5131},EXT_color_buffer_float:{},OES_standard_derivatives:{FRAGMENT_SHADER_DERIVATIVE_HINT_OES:35723},EXT_frag_depth:{},EXT_blend_minmax:{MIN_EXT:32775,MAX_EXT:32776},EXT_shader_texture_lod:{}},Bm=e=>({drawBuffersWEBGL(t){return e.drawBuffers(t)},COLOR_ATTACHMENT0_WEBGL:36064,COLOR_ATTACHMENT1_WEBGL:36065,COLOR_ATTACHMENT2_WEBGL:36066,COLOR_ATTACHMENT3_WEBGL:36067}),Vm=e=>({VERTEX_ARRAY_BINDING_OES:34229,createVertexArrayOES(){return e.createVertexArray()},deleteVertexArrayOES(t){return e.deleteVertexArray(t)},isVertexArrayOES(t){return e.isVertexArray(t)},bindVertexArrayOES(t){return e.bindVertexArray(t)}}),Hm=e=>({VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE:35070,drawArraysInstancedANGLE(...t){return e.drawArraysInstanced(...t)},drawElementsInstancedANGLE(...t){return e.drawElementsInstanced(...t)},vertexAttribDivisorANGLE(...t){return e.vertexAttribDivisor(...t)}});function Um(e=!0){let t=HTMLCanvasElement.prototype;!e&&t.originalGetContext?(t.getContext=t.originalGetContext,t.originalGetContext=void 0):(t.originalGetContext=t.getContext,t.getContext=function(e,t){if(e===`webgl`||e===`experimental-webgl`){let e=this.originalGetContext(`webgl2`,t);return e instanceof HTMLElement&&Wm(e),e}return this.originalGetContext(e,t)})}function Wm(e){e.getExtension(`EXT_color_buffer_float`);let t={...zm,WEBGL_disjoint_timer_query:e.getExtension(`EXT_disjoint_timer_query_webgl2`),WEBGL_draw_buffers:Bm(e),OES_vertex_array_object:Vm(e),ANGLE_instanced_arrays:Hm(e)},n=e.getExtension.bind(e);e.getExtension=function(e){return n(e)||(e in t?t[e]:null)};let r=e.getSupportedExtensions;e.getSupportedExtensions=function(){return(r.apply(e)||[])?.concat(Object.keys(t))}}var Gm=null,Km=!1;async function qm(){Zm()}function Jm(e,t){return Zm(),e}async function Ym(e){Zm()}function Xm(e){return Gm?.initialize(e)||null}function Zm(){Km||(Km=!0,w.warn(`Import @luma.gl/webgl/debug before enabling WebGL debugging.`)())}var Qm=1,$m=class extends Zi{type=`webgl`;enforceWebGL2(e){Um(e)}isSupported(){return typeof WebGL2RenderingContext<`u`}isDeviceHandle(e){return typeof WebGL2RenderingContext<`u`&&e instanceof WebGL2RenderingContext||(typeof WebGLRenderingContext<`u`&&e instanceof WebGLRenderingContext&&w.warn(`WebGL1 is not supported`,e)(),!1)}async attach(e,t={}){let{WebGLDevice:n}=await h(async()=>{let{WebGLDevice:e}=await Promise.resolve().then(()=>tv);return{WebGLDevice:e}},void 0,import.meta.url);if(e instanceof n)return e;let r=n.getDeviceFromContext(e);if(r)return r;if(!eh(e))throw Error(`Invalid WebGL2RenderingContext`);t=nh(t),await rh(t);let i=t.createCanvasContext===!0?{}:t.createCanvasContext;return new n({...t,_handle:e,createCanvasContext:{canvas:e.canvas,autoResize:!1,...i}})}async create(e={}){let{WebGLDevice:t}=await h(async()=>{let{WebGLDevice:e}=await Promise.resolve().then(()=>tv);return{WebGLDevice:e}},void 0,import.meta.url);e=nh(e),await rh(e);try{let n=new t(e);w.groupCollapsed(Qm,`WebGLDevice ${n.id} created`)();let r=`\
${n._reused?`Reusing`:`Created`} device with WebGL2 ${n.props.debug?`debug `:``}context: \
${n.info.vendor}, ${n.info.renderer} for canvas: ${n.canvasContext.id}`;return w.probe(Qm,r)(),w.table(Qm,n.info)(),n}finally{w.groupEnd(Qm)(),w.info(Qm,`%cWebGL call tracing: luma.log.set('debug-webgl') `,`color: white; background: blue; padding: 2px 6px; border-radius: 3px;`)()}}};function eh(e){return typeof WebGL2RenderingContext<`u`&&e instanceof WebGL2RenderingContext||!!(e&&typeof e.createVertexArray==`function`)}var th=new $m;function nh(e){return{...e,debug:e.debug??fa.defaultProps.debug,debugWebGL:e.debugWebGL??fa.defaultProps.debugWebGL,debugSpectorJS:e.debugSpectorJS??!!w.get(`debug-spectorjs`)}}async function rh(e){let t=[];(e.debugWebGL||e.debug)&&t.push(qm()),e.debugSpectorJS&&t.push(Ym(e));let n=await Promise.allSettled(t);for(let e of n)e.status===`rejected`&&w.error(`Failed to initialize debug libraries ${e.reason}`)()}var ih={3042:!1,32773:new Float32Array([0,0,0,0]),32777:32774,34877:32774,32969:1,32968:0,32971:1,32970:0,3106:new Float32Array([0,0,0,0]),3107:[!0,!0,!0,!0],2884:!1,2885:1029,2929:!1,2931:1,2932:513,2928:new Float32Array([0,1]),2930:!0,3024:!0,35725:null,36006:null,36007:null,34229:null,34964:null,2886:2305,33170:4352,2849:1,32823:!1,32824:0,10752:0,32926:!1,32928:!1,32938:1,32939:!1,3089:!1,3088:new Int32Array([0,0,1024,1024]),2960:!1,2961:0,2968:4294967295,36005:4294967295,2962:519,2967:0,2963:4294967295,34816:519,36003:0,36004:4294967295,2964:7680,2965:7680,2966:7680,34817:7680,34818:7680,34819:7680,2978:[0,0,1024,1024],36389:null,36662:null,36663:null,35053:null,35055:null,35723:4352,36010:null,35977:!1,3333:4,3317:4,37440:!1,37441:!1,37443:37444,3330:0,3332:0,3331:0,3314:0,32878:0,3316:0,3315:0,32877:0},q=(e,t,n)=>t?e.enable(n):e.disable(n),ah=(e,t,n)=>e.hint(n,t),oh=(e,t,n)=>e.pixelStorei(n,t),sh=(e,t,n)=>{let r=n===36006?36009:36008;return e.bindFramebuffer(r,t)},ch=(e,t,n)=>{let r={34964:34962,36662:36662,36663:36663,35053:35051,35055:35052}[n];e.bindBuffer(r,t)};function lh(e){return Array.isArray(e)||ArrayBuffer.isView(e)&&!(e instanceof DataView)}var uh={3042:q,32773:(e,t)=>e.blendColor(...t),32777:`blendEquation`,34877:`blendEquation`,32969:`blendFunc`,32968:`blendFunc`,32971:`blendFunc`,32970:`blendFunc`,3106:(e,t)=>e.clearColor(...t),3107:(e,t)=>e.colorMask(...t),2884:q,2885:(e,t)=>e.cullFace(t),2929:q,2931:(e,t)=>e.clearDepth(t),2932:(e,t)=>e.depthFunc(t),2928:(e,t)=>e.depthRange(...t),2930:(e,t)=>e.depthMask(t),3024:q,35723:ah,35725:(e,t)=>e.useProgram(t),36007:(e,t)=>e.bindRenderbuffer(36161,t),36389:(e,t)=>e.bindTransformFeedback?.(36386,t),34229:(e,t)=>e.bindVertexArray(t),36006:sh,36010:sh,34964:ch,36662:ch,36663:ch,35053:ch,35055:ch,2886:(e,t)=>e.frontFace(t),33170:ah,2849:(e,t)=>e.lineWidth(t),32823:q,32824:`polygonOffset`,10752:`polygonOffset`,35977:q,32926:q,32928:q,32938:`sampleCoverage`,32939:`sampleCoverage`,3089:q,3088:(e,t)=>e.scissor(...t),2960:q,2961:(e,t)=>e.clearStencil(t),2968:(e,t)=>e.stencilMaskSeparate(1028,t),36005:(e,t)=>e.stencilMaskSeparate(1029,t),2962:`stencilFuncFront`,2967:`stencilFuncFront`,2963:`stencilFuncFront`,34816:`stencilFuncBack`,36003:`stencilFuncBack`,36004:`stencilFuncBack`,2964:`stencilOpFront`,2965:`stencilOpFront`,2966:`stencilOpFront`,34817:`stencilOpBack`,34818:`stencilOpBack`,34819:`stencilOpBack`,2978:(e,t)=>e.viewport(...t),34383:q,10754:q,12288:q,12289:q,12290:q,12291:q,12292:q,12293:q,12294:q,12295:q,3333:oh,3317:oh,37440:oh,37441:oh,37443:oh,3330:oh,3332:oh,3331:oh,3314:oh,32878:oh,3316:oh,3315:oh,32877:oh,framebuffer:(e,t)=>{let n=t&&`handle`in t?t.handle:t;return e.bindFramebuffer(36160,n)},blend:(e,t)=>t?e.enable(3042):e.disable(3042),blendColor:(e,t)=>e.blendColor(...t),blendEquation:(e,t)=>{let n=typeof t==`number`?[t,t]:t;e.blendEquationSeparate(...n)},blendFunc:(e,t)=>{let n=t?.length===2?[...t,...t]:t;e.blendFuncSeparate(...n)},clearColor:(e,t)=>e.clearColor(...t),clearDepth:(e,t)=>e.clearDepth(t),clearStencil:(e,t)=>e.clearStencil(t),colorMask:(e,t)=>e.colorMask(...t),cull:(e,t)=>t?e.enable(2884):e.disable(2884),cullFace:(e,t)=>e.cullFace(t),depthTest:(e,t)=>t?e.enable(2929):e.disable(2929),depthFunc:(e,t)=>e.depthFunc(t),depthMask:(e,t)=>e.depthMask(t),depthRange:(e,t)=>e.depthRange(...t),dither:(e,t)=>t?e.enable(3024):e.disable(3024),derivativeHint:(e,t)=>{e.hint(35723,t)},frontFace:(e,t)=>e.frontFace(t),mipmapHint:(e,t)=>e.hint(33170,t),lineWidth:(e,t)=>e.lineWidth(t),polygonOffsetFill:(e,t)=>t?e.enable(32823):e.disable(32823),polygonOffset:(e,t)=>e.polygonOffset(...t),sampleCoverage:(e,t)=>e.sampleCoverage(t[0],t[1]||!1),scissorTest:(e,t)=>t?e.enable(3089):e.disable(3089),scissor:(e,t)=>e.scissor(...t),stencilTest:(e,t)=>t?e.enable(2960):e.disable(2960),stencilMask:(e,t)=>{t=lh(t)?t:[t,t];let[n,r]=t;e.stencilMaskSeparate(1028,n),e.stencilMaskSeparate(1029,r)},stencilFunc:(e,t)=>{t=lh(t)&&t.length===3?[...t,...t]:t;let[n,r,i,a,o,s]=t;e.stencilFuncSeparate(1028,n,r,i),e.stencilFuncSeparate(1029,a,o,s)},stencilOp:(e,t)=>{t=lh(t)&&t.length===3?[...t,...t]:t;let[n,r,i,a,o,s]=t;e.stencilOpSeparate(1028,n,r,i),e.stencilOpSeparate(1029,a,o,s)},viewport:(e,t)=>e.viewport(...t)};function J(e,t,n){return t[e]===void 0?n[e]:t[e]}var dh={blendEquation:(e,t,n)=>e.blendEquationSeparate(J(32777,t,n),J(34877,t,n)),blendFunc:(e,t,n)=>e.blendFuncSeparate(J(32969,t,n),J(32968,t,n),J(32971,t,n),J(32970,t,n)),polygonOffset:(e,t,n)=>e.polygonOffset(J(32824,t,n),J(10752,t,n)),sampleCoverage:(e,t,n)=>e.sampleCoverage(J(32938,t,n),J(32939,t,n)),stencilFuncFront:(e,t,n)=>e.stencilFuncSeparate(1028,J(2962,t,n),J(2967,t,n),J(2963,t,n)),stencilFuncBack:(e,t,n)=>e.stencilFuncSeparate(1029,J(34816,t,n),J(36003,t,n),J(36004,t,n)),stencilOpFront:(e,t,n)=>e.stencilOpSeparate(1028,J(2964,t,n),J(2965,t,n),J(2966,t,n)),stencilOpBack:(e,t,n)=>e.stencilOpSeparate(1029,J(34817,t,n),J(34818,t,n),J(34819,t,n))},fh={enable:(e,t)=>e({[t]:!0}),disable:(e,t)=>e({[t]:!1}),pixelStorei:(e,t,n)=>e({[t]:n}),hint:(e,t,n)=>e({[t]:n}),useProgram:(e,t)=>e({35725:t}),bindRenderbuffer:(e,t,n)=>e({36007:n}),bindTransformFeedback:(e,t,n)=>e({36389:n}),bindVertexArray:(e,t)=>e({34229:t}),bindFramebuffer:(e,t,n)=>{switch(t){case 36160:return e({36006:n,36010:n});case 36009:return e({36006:n});case 36008:return e({36010:n});default:return null}},bindBuffer:(e,t,n)=>{let r={34962:[34964],36662:[36662],36663:[36663],35051:[35053],35052:[35055]}[t];return r?e({[r]:n}):{valueChanged:!0}},blendColor:(e,t,n,r,i)=>e({32773:new Float32Array([t,n,r,i])}),blendEquation:(e,t)=>e({32777:t,34877:t}),blendEquationSeparate:(e,t,n)=>e({32777:t,34877:n}),blendFunc:(e,t,n)=>e({32969:t,32968:n,32971:t,32970:n}),blendFuncSeparate:(e,t,n,r,i)=>e({32969:t,32968:n,32971:r,32970:i}),clearColor:(e,t,n,r,i)=>e({3106:new Float32Array([t,n,r,i])}),clearDepth:(e,t)=>e({2931:t}),clearStencil:(e,t)=>e({2961:t}),colorMask:(e,t,n,r,i)=>e({3107:[t,n,r,i]}),cullFace:(e,t)=>e({2885:t}),depthFunc:(e,t)=>e({2932:t}),depthRange:(e,t,n)=>e({2928:new Float32Array([t,n])}),depthMask:(e,t)=>e({2930:t}),frontFace:(e,t)=>e({2886:t}),lineWidth:(e,t)=>e({2849:t}),polygonOffset:(e,t,n)=>e({32824:t,10752:n}),sampleCoverage:(e,t,n)=>e({32938:t,32939:n}),scissor:(e,t,n,r,i)=>e({3088:new Int32Array([t,n,r,i])}),stencilMask:(e,t)=>e({2968:t,36005:t}),stencilMaskSeparate:(e,t,n)=>e({[t===1028?2968:36005]:n}),stencilFunc:(e,t,n,r)=>e({2962:t,2967:n,2963:r,34816:t,36003:n,36004:r}),stencilFuncSeparate:(e,t,n,r,i)=>e({[t===1028?2962:34816]:n,[t===1028?2967:36003]:r,[t===1028?2963:36004]:i}),stencilOp:(e,t,n,r)=>e({2964:t,2965:n,2966:r,34817:t,34818:n,34819:r}),stencilOpSeparate:(e,t,n,r,i)=>e({[t===1028?2964:34817]:n,[t===1028?2965:34818]:r,[t===1028?2966:34819]:i}),viewport:(e,t,n,r,i)=>e({2978:[t,n,r,i]})},ph=(e,t)=>e.isEnabled(t),mh={3042:ph,2884:ph,2929:ph,3024:ph,32823:ph,32926:ph,32928:ph,3089:ph,2960:ph,35977:ph},hh=new Set([34016,36388,36387,35983,35368,34965,35739,35738,3074,34853,34854,34855,34856,34857,34858,34859,34860,34861,34862,34863,34864,34865,34866,34867,34868,35097,32873,35869,32874,34068]);function gh(e,t){if(yh(t))return;let n={};for(let r in t){let i=Number(r),a=uh[r];a&&(typeof a==`string`?n[a]=!0:a(e,t[r],i))}let r=e.lumaState?.cache;if(r)for(let i in n){let n=dh[i];n(e,t,r)}}function _h(e,t=ih){if(typeof t==`number`){let n=t,r=mh[n];return r?r(e,n):e.getParameter(n)}let n=Array.isArray(t)?t:Object.keys(t),r={};for(let t of n){let n=mh[t];r[t]=n?n(e,Number(t)):e.getParameter(Number(t))}return r}function vh(e){gh(e,ih)}function yh(e){for(let t in e)return!1;return!0}function bh(e,t){if(e===t)return!0;if(xh(e)&&xh(t)&&e.length===t.length){for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}return!1}function xh(e){return Array.isArray(e)||ArrayBuffer.isView(e)}var Sh=class{static get(e){return e.lumaState}gl;program=null;stateStack=[];enable=!0;cache=null;log;initialized=!1;constructor(e,t){this.gl=e,this.log=t?.log||(()=>{}),this._updateCache=this._updateCache.bind(this),Object.seal(this)}push(e={}){this.stateStack.push({})}pop(){let e=this.stateStack[this.stateStack.length-1];gh(this.gl,e),this.stateStack.pop()}trackState(e,t){if(this.cache=t?.copyState?_h(e):Object.assign({},ih),this.initialized)throw Error(`WebGLStateTracker`);this.initialized=!0,this.gl.lumaState=this,Th(e);for(let t in fh){let n=fh[t];wh(e,t,n)}Ch(e,`getParameter`),Ch(e,`isEnabled`)}_updateCache(e){let t=!1,n,r=this.stateStack.length>0?this.stateStack[this.stateStack.length-1]:null;for(let i in e){let a=e[i],o=this.cache[i];bh(a,o)||(t=!0,n=o,r&&!(i in r)&&(r[i]=o),this.cache[i]=a)}return{valueChanged:t,oldValue:n}}};function Ch(e,t){let n=e[t].bind(e);e[t]=function(t){if(t===void 0||hh.has(t))return n(t);let r=Sh.get(e);return t in r.cache||(r.cache[t]=n(t)),r.enable?r.cache[t]:n(t)},Object.defineProperty(e[t],"name",{value:`${t}-from-cache`,configurable:!1})}function wh(e,t,n){if(!e[t])return;let r=e[t].bind(e);e[t]=function(...t){let{valueChanged:i,oldValue:a}=n(Sh.get(e)._updateCache,...t);return i&&r(...t),a},Object.defineProperty(e[t],"name",{value:`${t}-to-cache`,configurable:!1})}function Th(e){let t=e.useProgram.bind(e);e.useProgram=function(n){let r=Sh.get(e);r.program!==n&&(t(n),r.program=n)}}function Eh(e){let t=e.luma||{_polyfilled:!1,extensions:{},softwareRenderer:!1};return t._polyfilled??=!1,t.extensions||={},e.luma=t,t}function Dh(e,t,n){let r=``,i=e=>{let t=e.statusMessage;t&&(r||=t)};e.addEventListener(`webglcontextcreationerror`,i,!1);let a=n.failIfMajorPerformanceCaveat!==!0,o={preserveDrawingBuffer:!0,...n,failIfMajorPerformanceCaveat:!0},s=null;try{s||=e.getContext(`webgl2`,o),!s&&o.failIfMajorPerformanceCaveat&&(r||="Only software GPU is available. Set `failIfMajorPerformanceCaveat: false` to allow.");let n=!1;if(!s&&a&&(o.failIfMajorPerformanceCaveat=!1,s=e.getContext(`webgl2`,o),n=!0),s||(s=e.getContext(`webgl`,{}),s&&(s=null,r||=`Your browser only supports WebGL1`)),!s)throw r||=`Your browser does not support WebGL`,Error(`Failed to create WebGL context: ${r}`);let i=Eh(s);i.softwareRenderer=n;let{onContextLost:c,onContextRestored:l}=t;return e.addEventListener(`webglcontextlost`,e=>c(e),!1),e.addEventListener(`webglcontextrestored`,e=>l(e),!1),s}finally{e.removeEventListener(`webglcontextcreationerror`,i,!1)}}function Oh(e,t,n){return n[t]===void 0&&(n[t]=e.getExtension(t)||null),n[t]}function kh(e,t){let n=e.getParameter(7936),r=e.getParameter(7937);Oh(e,`WEBGL_debug_renderer_info`,t);let i=t.WEBGL_debug_renderer_info,a=e.getParameter(i?i.UNMASKED_VENDOR_WEBGL:7936),o=e.getParameter(i?i.UNMASKED_RENDERER_WEBGL:7937),s=a||n,c=o||r,l=e.getParameter(7938),u=Ah(s,c),d=jh(s,c);return{type:`webgl`,gpu:u,gpuType:Mh(s,c),gpuBackend:d,vendor:s,renderer:c,version:l,shadingLanguage:`glsl`,shadingLanguageVersion:300}}function Ah(e,t){return/NVIDIA/i.exec(e)||/NVIDIA/i.exec(t)?`nvidia`:/INTEL/i.exec(e)||/INTEL/i.exec(t)?`intel`:/Apple/i.exec(e)||/Apple/i.exec(t)?`apple`:/AMD/i.exec(e)||/AMD/i.exec(t)||/ATI/i.exec(e)||/ATI/i.exec(t)?`amd`:/SwiftShader/i.exec(e)||/SwiftShader/i.exec(t)?`software`:`unknown`}function jh(e,t){return/Metal/i.exec(e)||/Metal/i.exec(t)?`metal`:/ANGLE/i.exec(e)||/ANGLE/i.exec(t)?`opengl`:`unknown`}function Mh(e,t){if(/SwiftShader/i.exec(e)||/SwiftShader/i.exec(t))return`cpu`;switch(Ah(e,t)){case`apple`:return Nh(e,t)?`integrated`:`unknown`;case`intel`:return`integrated`;case`software`:return`cpu`;case`unknown`:return`unknown`;default:return`discrete`}}function Nh(e,t){return/Apple (M\d|A\d|GPU)/i.test(`${e} ${t}`)}function Ph(e){switch(e){case`uint8`:return 5121;case`sint8`:return 5120;case`unorm8`:return 5121;case`snorm8`:return 5120;case`uint16`:return 5123;case`sint16`:return 5122;case`unorm16`:return 5123;case`snorm16`:return 5122;case`uint32`:return 5125;case`sint32`:return 5124;case`float16`:return 5131;case`float32`:return 5126}throw Error(String(e))}var Fh=`WEBGL_compressed_texture_s3tc`,Ih=`WEBGL_compressed_texture_s3tc_srgb`,Lh=`EXT_texture_compression_rgtc`,Rh=`EXT_texture_compression_bptc`,zh=`WEBGL_compressed_texture_etc`,Bh=`WEBGL_compressed_texture_astc`,Vh=`WEBGL_compressed_texture_etc1`,Hh=`WEBGL_compressed_texture_pvrtc`,Uh=`WEBGL_compressed_texture_atc`,Wh=`EXT_texture_norm16`,Gh=`EXT_render_snorm`,Kh=`EXT_color_buffer_float`,qh=`snorm8-renderable-webgl`,Jh=`norm16-renderable-webgl`,Yh=`snorm16-renderable-webgl`,Xh=`float16-renderable-webgl`,Zh=`float32-renderable-webgl`,Qh=`rgb9e5ufloat-renderable-webgl`,$h={"float32-renderable-webgl":{extensions:[Kh]},"float16-renderable-webgl":{extensions:[`EXT_color_buffer_half_float`]},"rgb9e5ufloat-renderable-webgl":{extensions:[`WEBGL_render_shared_exponent`]},"snorm8-renderable-webgl":{extensions:[Gh]},"norm16-webgl":{extensions:[Wh]},"norm16-renderable-webgl":{features:[`norm16-webgl`]},"snorm16-renderable-webgl":{features:[`norm16-webgl`],extensions:[Gh]},"float32-filterable":{extensions:[`OES_texture_float_linear`]},"float16-filterable-webgl":{extensions:[`OES_texture_half_float_linear`]},"texture-filterable-anisotropic-webgl":{extensions:[`EXT_texture_filter_anisotropic`]},"texture-blend-float-webgl":{extensions:[`EXT_float_blend`]},"texture-compression-bc":{extensions:[Fh,Ih,Lh,Rh]},"texture-compression-bc5-webgl":{extensions:[Lh]},"texture-compression-bc7-webgl":{extensions:[Rh]},"texture-compression-etc2":{extensions:[zh]},"texture-compression-astc":{extensions:[Bh]},"texture-compression-etc1-webgl":{extensions:[Vh]},"texture-compression-pvrtc-webgl":{extensions:[Hh]},"texture-compression-atc-webgl":{extensions:[Uh]}};function eg(e){return e in $h}function tg(e,t,n){return ng(e,t,n,new Set)}function ng(e,t,n,r){let i=$h[t];if(!i||r.has(t))return!1;r.add(t);let a=(i.features||[]).every(t=>ng(e,t,n,r));return r.delete(t),a?(i.extensions||[]).every(t=>!!Oh(e,t,n)):!1}var rg={r8unorm:{gl:33321,rb:!0},r8snorm:{gl:36756,r:qh},r8uint:{gl:33330,rb:!0},r8sint:{gl:33329,rb:!0},rg8unorm:{gl:33323,rb:!0},rg8snorm:{gl:36757,r:qh},rg8uint:{gl:33336,rb:!0},rg8sint:{gl:33335,rb:!0},r16uint:{gl:33332,rb:!0},r16sint:{gl:33331,rb:!0},r16float:{gl:33325,rb:!0,r:Xh},r16unorm:{gl:33322,rb:!0,r:Jh},r16snorm:{gl:36760,r:Yh},"rgba4unorm-webgl":{gl:32854,rb:!0},"rgb565unorm-webgl":{gl:36194,rb:!0},"rgb5a1unorm-webgl":{gl:32855,rb:!0},"rgb8unorm-webgl":{gl:32849},"rgb8snorm-webgl":{gl:36758},rgba8unorm:{gl:32856},"rgba8unorm-srgb":{gl:35907},rgba8snorm:{gl:36759,r:qh},rgba8uint:{gl:36220},rgba8sint:{gl:36238},bgra8unorm:{},"bgra8unorm-srgb":{},rg16uint:{gl:33338},rg16sint:{gl:33337},rg16float:{gl:33327,rb:!0,r:Xh},rg16unorm:{gl:33324,r:Jh},rg16snorm:{gl:36761,r:Yh},r32uint:{gl:33334,rb:!0},r32sint:{gl:33333,rb:!0},r32float:{gl:33326,r:Zh},rgb9e5ufloat:{gl:35901,r:Qh},rg11b10ufloat:{gl:35898,rb:!0},rgb10a2unorm:{gl:32857,rb:!0},rgb10a2uint:{gl:36975,rb:!0},"rgb16unorm-webgl":{gl:32852,r:!1},"rgb16snorm-webgl":{gl:36762,r:!1},rg32uint:{gl:33340,rb:!0},rg32sint:{gl:33339,rb:!0},rg32float:{gl:33328,rb:!0,r:Zh},rgba16uint:{gl:36214,rb:!0},rgba16sint:{gl:36232,rb:!0},rgba16float:{gl:34842,r:Xh},rgba16unorm:{gl:32859,rb:!0,r:Jh},rgba16snorm:{gl:36763,r:Yh},"rgb32float-webgl":{gl:34837,x:Kh,r:Zh,dataFormat:6407,types:[5126]},rgba32uint:{gl:36208,rb:!0},rgba32sint:{gl:36226,rb:!0},rgba32float:{gl:34836,rb:!0,r:Zh},stencil8:{gl:36168,rb:!0},depth16unorm:{gl:33189,dataFormat:6402,types:[5123],rb:!0},depth24plus:{gl:33190,dataFormat:6402,types:[5125]},depth32float:{gl:36012,dataFormat:6402,types:[5126],rb:!0},"depth24plus-stencil8":{gl:35056,rb:!0,depthTexture:!0,dataFormat:34041,types:[34042]},"depth32float-stencil8":{gl:36013,dataFormat:34041,types:[36269],rb:!0},"bc1-rgb-unorm-webgl":{gl:33776,x:Fh},"bc1-rgb-unorm-srgb-webgl":{gl:35916,x:Ih},"bc1-rgba-unorm":{gl:33777,x:Fh},"bc1-rgba-unorm-srgb":{gl:35916,x:Ih},"bc2-rgba-unorm":{gl:33778,x:Fh},"bc2-rgba-unorm-srgb":{gl:35918,x:Ih},"bc3-rgba-unorm":{gl:33779,x:Fh},"bc3-rgba-unorm-srgb":{gl:35919,x:Ih},"bc4-r-unorm":{gl:36283,x:Lh},"bc4-r-snorm":{gl:36284,x:Lh},"bc5-rg-unorm":{gl:36285,x:Lh},"bc5-rg-snorm":{gl:36286,x:Lh},"bc6h-rgb-ufloat":{gl:36495,x:Rh},"bc6h-rgb-float":{gl:36494,x:Rh},"bc7-rgba-unorm":{gl:36492,x:Rh},"bc7-rgba-unorm-srgb":{gl:36493,x:Rh},"etc2-rgb8unorm":{gl:37492},"etc2-rgb8unorm-srgb":{gl:37494},"etc2-rgb8a1unorm":{gl:37496},"etc2-rgb8a1unorm-srgb":{gl:37497},"etc2-rgba8unorm":{gl:37493},"etc2-rgba8unorm-srgb":{gl:37495},"eac-r11unorm":{gl:37488},"eac-r11snorm":{gl:37489},"eac-rg11unorm":{gl:37490},"eac-rg11snorm":{gl:37491},"astc-4x4-unorm":{gl:37808},"astc-4x4-unorm-srgb":{gl:37840},"astc-5x4-unorm":{gl:37809},"astc-5x4-unorm-srgb":{gl:37841},"astc-5x5-unorm":{gl:37810},"astc-5x5-unorm-srgb":{gl:37842},"astc-6x5-unorm":{gl:37811},"astc-6x5-unorm-srgb":{gl:37843},"astc-6x6-unorm":{gl:37812},"astc-6x6-unorm-srgb":{gl:37844},"astc-8x5-unorm":{gl:37813},"astc-8x5-unorm-srgb":{gl:37845},"astc-8x6-unorm":{gl:37814},"astc-8x6-unorm-srgb":{gl:37846},"astc-8x8-unorm":{gl:37815},"astc-8x8-unorm-srgb":{gl:37847},"astc-10x5-unorm":{gl:37816},"astc-10x5-unorm-srgb":{gl:37848},"astc-10x6-unorm":{gl:37817},"astc-10x6-unorm-srgb":{gl:37849},"astc-10x8-unorm":{gl:37818},"astc-10x8-unorm-srgb":{gl:37850},"astc-10x10-unorm":{gl:37819},"astc-10x10-unorm-srgb":{gl:37851},"astc-12x10-unorm":{gl:37820},"astc-12x10-unorm-srgb":{gl:37852},"astc-12x12-unorm":{gl:37821},"astc-12x12-unorm-srgb":{gl:37853},"pvrtc-rgb4unorm-webgl":{gl:35840},"pvrtc-rgba4unorm-webgl":{gl:35842},"pvrtc-rgb2unorm-webgl":{gl:35841},"pvrtc-rgba2unorm-webgl":{gl:35843},"etc1-rbg-unorm-webgl":{gl:36196},"atc-rgb-unorm-webgl":{gl:35986},"atc-rgba-unorm-webgl":{gl:35986},"atc-rgbai-unorm-webgl":{gl:34798}};function ig(e,t,n){let r=t.create,i=rg[t.format];i?.gl===void 0&&(r=!1),i?.x&&(r&&=!!Oh(e,i.x,n)),t.format===`stencil8`&&(r=!1);let a=i?.r===!1?!1:i?.r===void 0||tg(e,i.r,n),o=r&&t.render&&a&&ag(e,t.format,n);return{format:t.format,create:r&&t.create,render:o,filter:r&&t.filter,blend:r&&t.blend,store:r&&t.store}}function ag(e,t,n){let r=rg[t],i=r?.gl;if(i===void 0||r?.x&&!Oh(e,r.x,n))return!1;let a=e.getParameter(32873),o=e.getParameter(36006),s=e.createTexture(),c=e.createFramebuffer();if(!s||!c)return!1;let l=Number(e.getError());for(;l!==0;)l=e.getError();let u=!1;try{if(e.bindTexture(3553,s),e.texStorage2D(3553,1,i,1,1),Number(e.getError())!==0)return!1;e.bindFramebuffer(36160,c),e.framebufferTexture2D(36160,36064,3553,s,0),u=Number(e.checkFramebufferStatus(36160))===36053&&Number(e.getError())===0}finally{e.bindFramebuffer(36160,o),e.deleteFramebuffer(c),e.bindTexture(3553,a),e.deleteTexture(s)}return u}function og(e){let t=rg[e],n=lg(e),r=Ae.getInfo(e);return r.compressed&&(t.dataFormat=n),{internalFormat:n,format:t?.dataFormat||cg(r.channels,r.integer,r.normalized,n),type:r.dataType?Ph(r.dataType):t?.types?.[0]||5121,compressed:r.compressed||!1}}function sg(e){switch(Ae.getInfo(e).attachment){case`depth`:return 36096;case`stencil`:return 36128;case`depth-stencil`:return 33306;default:throw Error(`Not a depth stencil format: ${e}`)}}function cg(e,t,n,r){if(r===6408||r===6407)return r;switch(e){case`r`:return t&&!n?36244:6403;case`rg`:return t&&!n?33320:33319;case`rgb`:return t&&!n?36248:6407;case`rgba`:return t&&!n?36249:6408;case`bgra`:throw Error(`bgra pixels not supported by WebGL`);default:return 6408}}function lg(e){let t=rg[e]?.gl;if(t===void 0)throw Error(`Unsupported texture format ${e}`);return t}var ug={"depth-clip-control":`EXT_depth_clamp`,"timestamp-query":`EXT_disjoint_timer_query_webgl2`,"compilation-status-async-webgl":`KHR_parallel_shader_compile`,"html-in-canvas":e=>da()&&typeof e.texElementImage2D==`function`,"polygon-mode-webgl":`WEBGL_polygon_mode`,"provoking-vertex-webgl":`WEBGL_provoking_vertex`,"shader-clip-cull-distance-webgl":`WEBGL_clip_cull_distance`,"shader-noperspective-interpolation-webgl":`NV_shader_noperspective_interpolation`,"shader-conservative-depth-webgl":`EXT_conservative_depth`},dg=class extends ua{gl;extensions;testedFeatures=new Set;constructor(e,t,n){super([],n),this.gl=e,this.extensions=t,Oh(e,`EXT_color_buffer_float`,t)}*[Symbol.iterator](){let e=this.getFeatures();for(let t of e)this.has(t)&&(yield t);return[]}has(e){return!this.disabledFeatures?.[e]&&(this.testedFeatures.has(e)||(this.testedFeatures.add(e),eg(e)&&tg(this.gl,e,this.extensions)&&this.features.add(e),this.getWebGLFeature(e)&&this.features.add(e)),this.features.has(e))}initializeFeatures(){let e=this.getFeatures().filter(e=>e!==`polygon-mode-webgl`);for(let t of e)this.has(t)}getFeatures(){return[...Object.keys(ug),...Object.keys($h)]}getWebGLFeature(e){let t=ug[e];return typeof t==`string`?!!Oh(this.gl,t,this.extensions):typeof t==`function`?t(this.gl):!!t}},fg=class extends ia{get maxTextureDimension1D(){return 0}get maxTextureDimension2D(){return this.getParameter(3379)}get maxTextureDimension3D(){return this.getParameter(32883)}get maxTextureArrayLayers(){return this.getParameter(35071)}get maxBindGroups(){return 0}get maxBindGroupsPlusVertexBuffers(){return 0}get maxBindingsPerBindGroup(){return 0}get maxDynamicUniformBuffersPerPipelineLayout(){return 0}get maxDynamicStorageBuffersPerPipelineLayout(){return 0}get maxSampledTexturesPerShaderStage(){return this.getParameter(35660)}get maxSamplersPerShaderStage(){return this.getParameter(35661)}get maxStorageBuffersPerShaderStage(){return 0}get maxStorageBuffersInVertexStage(){return 0}get maxStorageBuffersInFragmentStage(){return 0}get maxStorageTexturesPerShaderStage(){return 0}get maxStorageTexturesInVertexStage(){return 0}get maxStorageTexturesInFragmentStage(){return 0}get maxUniformBuffersPerShaderStage(){return this.getParameter(35375)}get maxUniformBufferBindingSize(){return this.getParameter(35376)}get maxStorageBufferBindingSize(){return 0}get maxBufferSize(){return 2**53-1}get minUniformBufferOffsetAlignment(){return this.getParameter(35380)}get minStorageBufferOffsetAlignment(){return 0}get maxVertexBuffers(){return 16}get maxVertexAttributes(){return this.getParameter(34921)}get maxVertexBufferArrayStride(){return 2048}get maxInterStageShaderVariables(){return this.getParameter(35659)}get maxColorAttachments(){return this.getParameter(36063)}get maxColorAttachmentBytesPerSample(){return 0}get maxComputeWorkgroupStorageSize(){return 0}get maxComputeInvocationsPerWorkgroup(){return 0}get maxComputeWorkgroupSizeX(){return 0}get maxComputeWorkgroupSizeY(){return 0}get maxComputeWorkgroupSizeZ(){return 0}get maxComputeWorkgroupsPerDimension(){return 0}gl;limits={};constructor(e){super(),this.gl=e}getParameter(e){return this.limits[e]===void 0&&(this.limits[e]=this.gl.getParameter(e)),this.limits[e]||0}},pg=class extends Ta{device;gl;handle;colorAttachments=[];depthStencilAttachment=null;constructor(e,t){super(e,t);let n=t.handle,r=n===null;this.device=e,this.gl=e.gl,this.handle=n||r?n:this.gl.createFramebuffer(),r||(e._setWebGLDebugMetadata(this.handle,this,{spector:this.props}),t.handle||(this.autoCreateAttachmentTextures(),this.updateAttachments()))}destroy(){super.destroy(),!this.destroyed&&this.handle!==null&&!this.props.handle&&this.gl.deleteFramebuffer(this.handle)}updateAttachments(){let e=this.gl.bindFramebuffer(36160,this.handle);for(let e=0;e<this.colorAttachments.length;++e){let t=this.colorAttachments[e];if(t){let n=36064+e;this._attachTextureView(n,t)}}if(this.depthStencilAttachment){let e=sg(this.depthStencilAttachment.props.format);this._attachTextureView(e,this.depthStencilAttachment)}if(this.device.props.debug){let e=this.gl.checkFramebufferStatus(36160);if(e!==36053)throw Error(`Framebuffer ${hg(e)}`)}this.gl.bindFramebuffer(36160,e)}_attachTextureView(e,t){let{gl:n}=this.device,{texture:r}=t,i=t.props.baseMipLevel,a=t.props.baseArrayLayer;switch(n.bindTexture(r.glTarget,r.handle),r.glTarget){case 35866:case 32879:n.framebufferTextureLayer(36160,e,r.handle,i,a);break;case 34067:let t=mg(a);n.framebufferTexture2D(36160,e,t,r.handle,i);break;case 3553:n.framebufferTexture2D(36160,e,3553,r.handle,i);break;default:throw Error(`Illegal texture type`)}n.bindTexture(r.glTarget,null)}resizeAttachments(e,t){this.handle===null?(this.width=e,this.height=t):super.resizeAttachments(e,t)}};function mg(e){return e<34069?e+34069:e}function hg(e){switch(e){case 36053:return`success`;case 36054:return`Mismatched attachments`;case 36055:return`No attachments`;case 36057:return`Height/width mismatch`;case 36061:return`Unsupported or split attachments`;case 36182:return`Samples mismatch`;default:return`${e}`}}var gg=class extends Sa{device;handle=null;_framebuffer=null;get[Symbol.toStringTag](){return`WebGLCanvasContext`}constructor(e,t){super(t),this.device=e,this._setAutoCreatedCanvasId(`${this.device.id}-canvas`),this._configureDevice()}_configureDevice(){(this.drawingBufferWidth!==this._framebuffer?.width||this.drawingBufferHeight!==this._framebuffer?.height)&&this._framebuffer?.resize([this.drawingBufferWidth,this.drawingBufferHeight])}_getCurrentFramebuffer(){return this._framebuffer||=new pg(this.device,{id:`canvas-context-framebuffer`,handle:null,width:this.drawingBufferWidth,height:this.drawingBufferHeight}),this._framebuffer}},_g=class extends Ca{device;handle=null;context2d;get[Symbol.toStringTag](){return`WebGLPresentationContext`}constructor(e,t={}){super(t),this.device=e;let n=`${this[Symbol.toStringTag]}(${this.id})`;if(!this.device.getDefaultCanvasContext().offscreenCanvas)throw Error(`${n}: WebGL PresentationContext requires the default CanvasContext canvas to be an OffscreenCanvas`);let r=this.canvas.getContext(`2d`);if(!r)throw Error(`${n}: Failed to create 2d presentation context`);this.context2d=r,this._setAutoCreatedCanvasId(`${this.device.id}-presentation-canvas`),this._configureDevice(),this._startObservers()}present(){this._resizeDrawingBufferIfNeeded(),this.device.submit();let e=this.device.getDefaultCanvasContext(),[t,n]=e.getDrawingBufferSize();if(this.drawingBufferWidth!==0&&this.drawingBufferHeight!==0&&t!==0&&n!==0&&e.canvas.width!==0&&e.canvas.height!==0){if(t!==this.drawingBufferWidth||n!==this.drawingBufferHeight||e.canvas.width!==this.drawingBufferWidth||e.canvas.height!==this.drawingBufferHeight)throw Error(`${this[Symbol.toStringTag]}(${this.id}): Default canvas context size ${t}x${n} does not match presentation size ${this.drawingBufferWidth}x${this.drawingBufferHeight}`);this.context2d.clearRect(0,0,this.drawingBufferWidth,this.drawingBufferHeight),this.context2d.drawImage(e.canvas,0,0)}}_configureDevice(){}_getCurrentFramebuffer(e){let t=this.device.getDefaultCanvasContext();return t.setDrawingBufferSize(this.drawingBufferWidth,this.drawingBufferHeight),t.getCurrentFramebuffer(e)}},vg={};function yg(e=`id`){return vg[e]=vg[e]||1,`${e}-${vg[e]++}`}var bg=class extends S{device;gl;handle;glTarget;glUsage;glIndexType=5123;byteLength=0;bytesUsed=0;constructor(e,t={}){super(e,t),this.device=e,this.gl=this.device.gl;let n=typeof t==`object`?t.handle:void 0;this.handle=n||this.gl.createBuffer(),e._setWebGLDebugMetadata(this.handle,this,{spector:{...this.props,data:typeof this.props.data}}),this.glTarget=xg(this.props.usage),this.glUsage=Sg(this.props.usage),this.glIndexType=this.props.indexType===`uint32`?5125:5123,t.data?this._initWithData(t.data,t.byteOffset,t.byteLength):this._initWithByteLength(t.byteLength||0)}destroy(){!this.destroyed&&this.handle&&(this.removeStats(),this.props.handle?this.trackDeallocatedReferencedMemory(`Buffer`):(this.trackDeallocatedMemory(),this.gl.deleteBuffer(this.handle)),this.destroyed=!0,this.handle=null)}_initWithData(e,t=0,n=e.byteLength+t){let r=this.glTarget;this.gl.bindBuffer(r,this.handle),this.gl.bufferData(r,n,this.glUsage),this.gl.bufferSubData(r,t,e),this.gl.bindBuffer(r,null),this.bytesUsed=n,this.byteLength=n,this._setDebugData(e,t,n),this.props.handle?this.trackReferencedMemory(n,`Buffer`):this.trackAllocatedMemory(n)}_initWithByteLength(e){let t=e;e===0&&(t=new Float32Array);let n=this.glTarget;return this.gl.bindBuffer(n,this.handle),this.gl.bufferData(n,t,this.glUsage),this.gl.bindBuffer(n,null),this.bytesUsed=e,this.byteLength=e,this._setDebugData(null,0,e),this.props.handle?this.trackReferencedMemory(e,`Buffer`):this.trackAllocatedMemory(e),this}write(e,t=0){let n=ArrayBuffer.isView(e)?e:new Uint8Array(e),r=36663;this.gl.bindBuffer(r,this.handle),this.gl.bufferSubData(r,t,n),this.gl.bindBuffer(r,null),this._setDebugData(e,t,e.byteLength)}async mapAndWriteAsync(e,t=0,n=this.byteLength-t){let r=new ArrayBuffer(n);await e(r,`copied`),this.write(r,t)}async readAsync(e=0,t){return this.readSyncWebGL(e,t)}async mapAndReadAsync(e,t=0,n){return await e((await this.readAsync(t,n)).buffer,`copied`)}readSyncWebGL(e=0,t){t??=this.byteLength-e;let n=new Uint8Array(t);return this.gl.bindBuffer(36662,this.handle),this.gl.getBufferSubData(36662,e,n,0,t),this.gl.bindBuffer(36662,null),this._setDebugData(n,e,t),n}};function xg(e){return e&S.INDEX?34963:e&S.VERTEX?34962:e&S.UNIFORM?35345:34962}function Sg(e){return e&S.INDEX||e&S.VERTEX?35044:e&S.UNIFORM?35048:35044}function Cg(e){let t=e.split(/\r?\n/),n=[];for(let e of t){if(e.length<=1)continue;let t=e.trim(),r=e.split(`:`),i=r[0]?.trim();if(r.length===2){let[e,a]=r;if(!e||!a){n.push({message:t,type:wg(i||`info`),lineNum:0,linePos:0});continue}n.push({message:a.trim(),type:wg(e),lineNum:0,linePos:0});continue}let[a,o,s,...c]=r;if(!a||!o||!s){n.push({message:r.slice(1).join(`:`).trim()||t,type:wg(i||`info`),lineNum:0,linePos:0});continue}let l=parseInt(s,10);Number.isNaN(l)&&(l=0);let u=parseInt(o,10);Number.isNaN(u)&&(u=0),n.push({message:c.join(`:`).trim(),type:wg(a),lineNum:l,linePos:u})}return n}function wg(e){let t=[`warning`,`error`,`info`],n=e.toLowerCase();return t.includes(n)?n:`info`}var Tg=class extends k{device;handle;_compilationInfoLog=``;constructor(e,t){super(e,t),this.device=e;let n=this.props.handle;switch(this.props.stage){case`vertex`:this.handle=n||this.device.gl.createShader(35633);break;case`fragment`:this.handle=n||this.device.gl.createShader(35632);break;default:throw Error(this.props.stage)}e._setWebGLDebugMetadata(this.handle,this,{spector:this.props});let r=this._compile(this.source);r&&typeof r.catch==`function`&&r.catch(()=>{this.compilationStatus=`error`})}destroy(){this.handle&&(this.removeStats(),this.device.gl.deleteShader(this.handle),this.destroyed=!0,this.handle.destroyed=!0)}get asyncCompilationStatus(){return this._waitForCompilationComplete().then(()=>(this._getCompilationStatus(),this.compilationStatus))}async getCompilationInfo(){return await this._waitForCompilationComplete(),this.getCompilationInfoSync()}getCompilationInfoSync(){let e=this._getCompilationInfoLog();return e?Cg(e):[]}getTranslatedSource(){return this.device.getExtension(`WEBGL_debug_shaders`).WEBGL_debug_shaders?.getTranslatedShaderSource(this.handle)||null}_compile(e){e=e.startsWith(`#version `)?e:`#version 300 es\n${e}`;let{gl:t}=this.device;if(t.shaderSource(this.handle,e),t.compileShader(this.handle),!this.device.props.debug)this.compilationStatus=`pending`;else{if(this.device.features.has(`compilation-status-async-webgl`))return w.once(1,`Shader compilation is asynchronous`)(),this._waitForCompilationComplete().then(()=>{w.info(2,`Shader ${this.id} - async compilation complete: ${this.compilationStatus}`)(),this._getCompilationStatus(),this.debugShader()});if(this._getCompilationStatus(),this.debugShader(),this.compilationStatus===`error`)throw Error(this._getCompilationErrorMessage(e))}}async _waitForCompilationComplete(){let e=async e=>await new Promise(t=>setTimeout(t,e));if(!this.device.features.has(`compilation-status-async-webgl`)){await e(10);return}let{gl:t}=this.device;for(;;){if(t.getShaderParameter(this.handle,37297))return;await e(10)}}_getCompilationStatus(){this.compilationStatus=this.device.gl.getShaderParameter(this.handle,35713)?`success`:`error`,this.compilationStatus===`error`&&this._getCompilationInfoLog()}_getCompilationErrorMessage(e){let t=`${this.props.stage} shader ${this.props.id}`,n=Eg(this._getCompilationInfoLog()),r=this.getCompilationInfoSync(),i=r.find(e=>e.type===`error`&&e.message.trim())||r.find(e=>e.message.trim())||r.find(e=>e.type===`error`)||r[0];if(!i)return n?`GLSL compilation errors in ${t}: ${n}`:`GLSL compilation errors in ${t}: WebGL did not provide a shader compiler log`;let a=i.lineNum?e.split(/\r?\n/)[i.lineNum-1]?.trim():void 0,o=i.lineNum?` line ${i.lineNum}`:``,s=a?`\nSource: ${a}`:``;return`GLSL compilation errors in ${t}:${o}: ${i.message.trim()||n||`WebGL did not provide a shader compiler log`}${s}`}_getCompilationInfoLog(){let e=this.device.gl.getShaderInfoLog(this.handle)?.trim();return e&&(this._compilationInfoLog=e),this._compilationInfoLog}};function Eg(e){return e.split(/\r?\n/).find(e=>e.trim())?.trim()}function Dg(e,t,n,r){if(Ig(t))return r(e);let i=e;i.pushState();try{return Og(e,t),gh(i.gl,n),r(e)}finally{i.popState()}}function Og(e,t){let n=e,{gl:r}=n;if(t.cullMode)switch(t.cullMode){case`none`:r.disable(2884);break;case`front`:r.enable(2884),r.cullFace(1028);break;case`back`:r.enable(2884),r.cullFace(1029)}if(t.frontFace&&r.frontFace(Pg(`frontFace`,t.frontFace,{ccw:2305,cw:2304})),t.unclippedDepth&&e.features.has(`depth-clip-control`)&&r.enable(34383),t.depthBias!==void 0&&(r.enable(32823),r.polygonOffset(t.depthBias,t.depthBiasSlopeScale||0)),t.provokingVertex&&e.features.has(`provoking-vertex-webgl`)){let e=n.getExtension(`WEBGL_provoking_vertex`).WEBGL_provoking_vertex,r=Pg(`provokingVertex`,t.provokingVertex,{first:36429,last:36430});e?.provokingVertexWEBGL(r)}if((t.polygonMode||t.polygonOffsetLine)&&e.features.has(`polygon-mode-webgl`)){if(t.polygonMode){let e=n.getExtension(`WEBGL_polygon_mode`).WEBGL_polygon_mode,r=Pg(`polygonMode`,t.polygonMode,{fill:6914,line:6913});e?.polygonModeWEBGL(1028,r),e?.polygonModeWEBGL(1029,r)}t.polygonOffsetLine&&r.enable(10754)}if(e.features.has(`shader-clip-cull-distance-webgl`)&&(t.clipDistance0&&r.enable(12288),t.clipDistance1&&r.enable(12289),t.clipDistance2&&r.enable(12290),t.clipDistance3&&r.enable(12291),t.clipDistance4&&r.enable(12292),t.clipDistance5&&r.enable(12293),t.clipDistance6&&r.enable(12294),t.clipDistance7&&r.enable(12295)),t.depthWriteEnabled!==void 0&&r.depthMask(Fg(`depthWriteEnabled`,t.depthWriteEnabled)),t.depthCompare&&(t.depthCompare===`always`?r.disable(2929):r.enable(2929),r.depthFunc(kg(`depthCompare`,t.depthCompare))),t.clearDepth!==void 0&&r.clearDepth(t.clearDepth),t.stencilWriteMask){let e=t.stencilWriteMask;r.stencilMaskSeparate(1028,e),r.stencilMaskSeparate(1029,e)}if(t.stencilReadMask&&w.warn(`stencilReadMask not supported under WebGL`),t.stencilCompare){let e=t.stencilReadMask||4294967295,n=kg(`depthCompare`,t.stencilCompare);t.stencilCompare===`always`?r.disable(2960):r.enable(2960),r.stencilFuncSeparate(1028,n,0,e),r.stencilFuncSeparate(1029,n,0,e)}if(t.stencilPassOperation&&t.stencilFailOperation&&t.stencilDepthFailOperation){let e=Ag(`stencilPassOperation`,t.stencilPassOperation),n=Ag(`stencilFailOperation`,t.stencilFailOperation),i=Ag(`stencilDepthFailOperation`,t.stencilDepthFailOperation);r.stencilOpSeparate(1028,n,i,e),r.stencilOpSeparate(1029,n,i,e)}switch(t.blend){case!0:r.enable(3042);break;case!1:r.disable(3042)}if(t.blendColorOperation||t.blendAlphaOperation){let e=jg(`blendColorOperation`,t.blendColorOperation||`add`),n=jg(`blendAlphaOperation`,t.blendAlphaOperation||`add`);r.blendEquationSeparate(e,n);let i=Mg(`blendColorSrcFactor`,t.blendColorSrcFactor||`one`),a=Mg(`blendColorDstFactor`,t.blendColorDstFactor||`zero`),o=Mg(`blendAlphaSrcFactor`,t.blendAlphaSrcFactor||`one`),s=Mg(`blendAlphaDstFactor`,t.blendAlphaDstFactor||`zero`);r.blendFuncSeparate(i,a,o,s)}}function kg(e,t){return Pg(e,t,{never:512,less:513,equal:514,"less-equal":515,greater:516,"not-equal":517,"greater-equal":518,always:519})}function Ag(e,t){return Pg(e,t,{keep:7680,zero:0,replace:7681,invert:5386,"increment-clamp":7682,"decrement-clamp":7683,"increment-wrap":34055,"decrement-wrap":34056})}function jg(e,t){return Pg(e,t,{add:32774,subtract:32778,"reverse-subtract":32779,min:32775,max:32776})}function Mg(e,t,n=`color`){return Pg(e,t,{one:1,zero:0,src:768,"one-minus-src":769,dst:774,"one-minus-dst":775,"src-alpha":770,"one-minus-src-alpha":771,"dst-alpha":772,"one-minus-dst-alpha":773,"src-alpha-saturated":776,constant:n===`color`?32769:32771,"one-minus-constant":n===`color`?32770:32772,src1:768,"one-minus-src1":769,"src1-alpha":770,"one-minus-src1-alpha":771})}function Ng(e,t){return`Illegal parameter ${t} for ${e}`}function Pg(e,t,n){if(!(t in n))throw Error(Ng(e,t));return n[t]}function Fg(e,t){return t}function Ig(e){let t=!0;for(let n in e){t=!1;break}return t}function Lg(e){let t={};return e.addressModeU&&(t[10242]=Rg(e.addressModeU)),e.addressModeV&&(t[10243]=Rg(e.addressModeV)),e.addressModeW&&(t[32882]=Rg(e.addressModeW)),e.magFilter&&(t[10240]=zg(e.magFilter)),(e.minFilter||e.mipmapFilter)&&(t[10241]=Bg(e.minFilter||`linear`,e.mipmapFilter)),e.lodMinClamp!==void 0&&(t[33082]=e.lodMinClamp),e.lodMaxClamp!==void 0&&(t[33083]=e.lodMaxClamp),e.type===`comparison-sampler`&&(t[34892]=34894),e.compare&&(t[34893]=kg(`compare`,e.compare)),e.maxAnisotropy&&(t[34046]=e.maxAnisotropy),t}function Rg(e){switch(e){case`clamp-to-edge`:return 33071;case`repeat`:return 10497;case`mirror-repeat`:return 33648}}function zg(e){switch(e){case`nearest`:return 9728;case`linear`:return 9729}}function Bg(e,t=`none`){if(!t)return zg(e);switch(t){case`none`:return zg(e);case`nearest`:switch(e){case`nearest`:return 9984;case`linear`:return 9985}break;case`linear`:switch(e){case`nearest`:return 9986;case`linear`:return 9987}}}var Vg=class extends Re{device;handle;parameters;constructor(e,t){super(e,t),this.device=e,this.parameters=Lg(t),this.handle=t.handle||this.device.gl.createSampler(),this._setSamplerParameters(this.parameters)}destroy(){this.handle&&=(this.device.gl.deleteSampler(this.handle),void 0)}toString(){return`Sampler(${this.id},${JSON.stringify(this.props)})`}_setSamplerParameters(e){for(let[t,n]of Object.entries(e)){let e=Number(t);switch(e){case 33082:case 33083:this.device.gl.samplerParameterf(this.handle,e,n);break;default:this.device.gl.samplerParameteri(this.handle,e,n)}}}};function Hg(e,t,n){if(Ug(t))return n(e);let{nocatch:r=!0}=t,i=Sh.get(e);i.push(),gh(e,t);let a;if(r)a=n(e),i.pop();else try{a=n(e)}finally{i.pop()}return a}function Ug(e){for(let t in e)return!1;return!0}var Wg=class extends ke{device;gl;handle;texture;constructor(e,t){super(e,{...I.defaultProps,...t}),this.device=e,this.gl=this.device.gl,this.handle=null,this.texture=t.texture}};function Gg(e){return Kg[e]}var Kg={5124:`sint32`,5125:`uint32`,5122:`sint16`,5123:`uint16`,5120:`sint8`,5121:`uint8`,5126:`float32`,5131:`float16`,33635:`uint16`,32819:`uint16`,32820:`uint16`,33640:`uint32`,35899:`uint32`,35902:`uint32`,34042:`uint32`,36269:`uint32`},qg=class extends I{device;gl;handle;sampler=void 0;view;glTarget;glFormat;glType;glInternalFormat;compressed;_textureUnit=0;_framebuffer=null;_framebufferAttachmentKey=null;constructor(e,t){super(e,t,{byteAlignment:1}),this.device=e,this.gl=this.device.gl;let n=og(this.props.format);if(this.glTarget=Xg(this.props.dimension),this.glInternalFormat=n.internalFormat,this.glFormat=n.format,this.glType=n.type,this.compressed=n.compressed,this.isHandleBorrowed&&this.props.handle===void 0)throw Error(`Borrowed WebGL textures require a texture handle`);if(this.handle=this.props.handle||this.gl.createTexture(),this.device._setWebGLDebugMetadata(this.handle,this,{spector:this.props}),!this.isHandleBorrowed){this.gl.bindTexture(this.glTarget,this.handle);let{dimension:e,width:n,height:r,depth:i,mipLevels:a,glTarget:o,glInternalFormat:s}=this;if(!this.compressed)switch(e){case`2d`:case`cube`:this.gl.texStorage2D(o,a,s,n,r);break;case`2d-array`:case`3d`:this.gl.texStorage3D(o,a,s,n,r,i);break;default:throw Error(e)}this.gl.bindTexture(this.glTarget,null),this._initializeData(t.data)}this.ownsHandle?this.trackAllocatedMemory(this.getAllocatedByteLength(),`Texture`):this.trackReferencedMemory(this.getAllocatedByteLength(),`Texture`),this.isHandleBorrowed||this.setSampler(this.props.sampler),this.view=new Wg(this.device,{...this.props,texture:this}),Object.seal(this)}destroy(){this.handle&&(this._framebuffer?.destroy(),this._framebuffer=null,this._framebufferAttachmentKey=null,this.removeStats(),this.ownsHandle?(this.gl.deleteTexture(this.handle),this.trackDeallocatedMemory(`Texture`)):this.trackDeallocatedReferencedMemory(`Texture`),this.destroyed=!0)}createView(e){return new Wg(this.device,{...e,texture:this})}clone(e){if(this.isHandleBorrowed&&e&&(e.width!==this.width||e.height!==this.height))throw Error(`Cannot resize borrowed read-only ${this}`);return super.clone(e)}setSampler(e={}){this._assertWritable(`set sampler parameters on`),super.setSampler(e);let t=Lg(this.sampler.props);this._setSamplerParameters(t)}copyExternalImage(e){this._assertWritable(`copy external image data into`);let t=this._normalizeCopyExternalImageOptions(e);if(t.sourceX||t.sourceY)throw Error(`WebGL does not support sourceX/sourceY)`);let{glFormat:n,glType:r}=this,{image:i,depth:a,mipLevel:o,x:s,y:c,z:l,width:u,height:d}=t,f=Zg(this.glTarget,this.dimension,l),p=t.flipY?{37440:!0}:{};return this.gl.bindTexture(this.glTarget,this.handle),Hg(this.gl,p,()=>{switch(this.dimension){case`2d`:case`cube`:this.gl.texSubImage2D(f,o,s,c,u,d,n,r,i);break;case`2d-array`:case`3d`:this.gl.texSubImage3D(f,o,s,c,l,u,d,a,n,r,i)}}),this.gl.bindTexture(this.glTarget,null),{width:t.width,height:t.height}}copyElementImage(e){this._assertWritable(`copy element image data into`);let t=this._normalizeCopyElementImageOptions(e),{glFormat:n}=this,{element:r,depth:i,mipLevel:a,sourceX:o,sourceY:s,sourceWidth:c,sourceHeight:l,x:u,y:d,z:f,width:p,height:m}=t,h=Zg(this.glTarget,this.dimension,f),g=t.flipY?{37440:!0}:{},_=this.gl;if(i!==1||this.dimension!==`2d`&&this.dimension!==`cube`)throw Error(`${this} copyElementImage only supports 2d and cube textures on WebGL`);if(a!==0||u!==0||d!==0)throw Error(`${this} copyElementImage only supports full base-level uploads on WebGL`);if(typeof _.texElementImage2D!=`function`)throw Error(`${this} copyElementImage is not supported by this WebGL implementation`);return this.gl.bindTexture(this.glTarget,this.handle),Hg(this.gl,g,()=>{_.texElementImage2D?.(h,n,r,{sx:o,sy:s,swidth:c??p,sheight:l??m,width:p,height:m})}),this.gl.bindTexture(this.glTarget,null),{width:t.width,height:t.height}}copyImageData(e){super.copyImageData(e)}readBuffer(e={},t){if(!t)throw Error(`${this} readBuffer requires a destination buffer`);let n=this._getSupportedColorReadOptions(e),r=e.byteOffset??0,i=this.computeMemoryLayout(n);if(t.byteLength<r+i.byteLength)throw Error(`${this} readBuffer target is too small (${t.byteLength} < ${r+i.byteLength})`);let a=t;this.gl.bindBuffer(35051,a.handle);try{this._readColorTextureLayers(n,i,e=>{this.gl.readPixels(n.x,n.y,n.width,n.height,this.glFormat,this.glType,r+e)})}finally{this.gl.bindBuffer(35051,null)}return t}async readDataAsync(e={}){throw Error(`${this} readDataAsync is deprecated; use readBuffer() with an explicit destination buffer or DynamicTexture.readAsync()`)}writeBuffer(e,t={}){this._assertWritable(`write buffer data into`);let n=this._normalizeTextureWriteOptions(t),{width:r,height:i,depthOrArrayLayers:a,mipLevel:o,byteOffset:s,x:c,y:l,z:u}=n,{glFormat:d,glType:f,compressed:p}=this,m=Zg(this.glTarget,this.dimension,u);if(p)throw Error(`writeBuffer for compressed textures is not implemented in WebGL`);let{bytesPerPixel:h}=this.device.getTextureFormatInfo(this.format),g=h?n.bytesPerRow/h:void 0,_={3317:this.byteAlignment,...g===void 0?{}:{3314:g},32878:n.rowsPerImage};this.gl.bindTexture(this.glTarget,this.handle),this.gl.bindBuffer(35052,e.handle),Hg(this.gl,_,()=>{switch(this.dimension){case`2d`:case`cube`:this.gl.texSubImage2D(m,o,c,l,r,i,d,f,s);break;case`2d-array`:case`3d`:this.gl.texSubImage3D(m,o,c,l,u,r,i,a,d,f,s)}}),this.gl.bindBuffer(35052,null),this.gl.bindTexture(this.glTarget,null)}writeData(e,t={}){this._assertWritable(`write data into`);let n=this._normalizeTextureWriteOptions(t),r=ArrayBuffer.isView(e)?e:new Uint8Array(e),{width:i,height:a,depthOrArrayLayers:o,mipLevel:s,x:c,y:l,z:u,byteOffset:d}=n,{glFormat:f,glType:p,compressed:m}=this,h=Zg(this.glTarget,this.dimension,u),g;if(!m){let{bytesPerPixel:e}=this.device.getTextureFormatInfo(this.format);e&&(g=n.bytesPerRow/e)}let _=this.compressed?{}:{3317:this.byteAlignment,...g===void 0?{}:{3314:g},32878:n.rowsPerImage},v=Yg(r,d),y=m?Jg(r,d):r,b=this._getMipLevelSize(s),x=c===0&&l===0&&u===0&&i===b.width&&a===b.height&&o===b.depthOrArrayLayers;this.gl.bindTexture(this.glTarget,this.handle),this.gl.bindBuffer(35052,null),Hg(this.gl,_,()=>{switch(this.dimension){case`2d`:case`cube`:m?x?this.gl.compressedTexImage2D(h,s,f,i,a,0,y):this.gl.compressedTexSubImage2D(h,s,c,l,i,a,f,y):this.gl.texSubImage2D(h,s,c,l,i,a,f,p,r,v);break;case`2d-array`:case`3d`:m?x?this.gl.compressedTexImage3D(h,s,f,i,a,o,0,y):this.gl.compressedTexSubImage3D(h,s,c,l,u,i,a,o,f,y):this.gl.texSubImage3D(h,s,c,l,u,i,a,o,f,p,r,v)}}),this.gl.bindTexture(this.glTarget,null)}_getRowByteAlignment(e,t){return 1}_getFramebuffer(){return this._framebuffer||=this.device.createFramebuffer({id:`framebuffer-for-${this.id}`,width:this.width,height:this.height,colorAttachments:[this]}),this._framebuffer}readDataSyncWebGL(e={}){let t=this._getSupportedColorReadOptions(e),n=this.computeMemoryLayout(t),r=Gg(this.glType),i=O(r),a=new i(n.byteLength/i.BYTES_PER_ELEMENT);return this._readColorTextureLayers(t,n,e=>{let r=new i(a.buffer,a.byteOffset+e,n.bytesPerImage/i.BYTES_PER_ELEMENT);this.gl.readPixels(t.x,t.y,t.width,t.height,this.glFormat,this.glType,r)}),a.buffer}_readColorTextureLayers(e,t,n){let r=this._getFramebuffer(),i=t.bytesPerRow/t.bytesPerPixel,a={3333:this.byteAlignment,...i===e.width?{}:{3330:i}},o=this.gl.getParameter(3074),s=this.gl.bindFramebuffer(36160,r.handle);try{this.gl.readBuffer(36064),Hg(this.gl,a,()=>{for(let i=0;i<e.depthOrArrayLayers;i++)this._attachReadSubresource(r,e.mipLevel,e.z+i),n(i*t.bytesPerImage)})}finally{this.gl.bindFramebuffer(36160,s||null),this.gl.readBuffer(o)}}_attachReadSubresource(e,t,n){let r=`${t}:${n}`;if(this._framebufferAttachmentKey!==r){switch(this.dimension){case`2d`:this.gl.framebufferTexture2D(36160,36064,3553,this.handle,t);break;case`cube`:this.gl.framebufferTexture2D(36160,36064,Zg(this.glTarget,this.dimension,n),this.handle,t);break;case`2d-array`:case`3d`:this.gl.framebufferTextureLayer(36160,36064,this.handle,t,n);break;default:throw Error(`${this} color readback does not support ${this.dimension} textures`)}if(this.device.props.debug){let t=Number(this.gl.checkFramebufferStatus(36160));if(t!==36053)throw Error(`${e} incomplete for ${this} readback (${t})`)}this._framebufferAttachmentKey=r}}generateMipmapsWebGL(e){if(this._assertWritable(`generate mipmaps for`),!(!(this.device.isTextureFormatRenderable(this.props.format)&&this.device.isTextureFormatFilterable(this.props.format))&&(w.warn(`${this} is not renderable or filterable, may not be able to generate mipmaps`)(),!e?.force)))try{this.gl.bindTexture(this.glTarget,this.handle),this.gl.generateMipmap(this.glTarget)}catch(e){w.warn(`Error generating mipmap for ${this}: ${e.message}`)()}finally{this.gl.bindTexture(this.glTarget,null)}}_setSamplerParameters(e){w.level>=2&&w.log(2,`${this.id} sampler parameters`,this.device.getGLKeys(e))(),this.gl.bindTexture(this.glTarget,this.handle);for(let[t,n]of Object.entries(e)){let e=Number(t),r=n;switch(e){case 33082:case 33083:this.gl.texParameterf(this.glTarget,e,r);break;case 10240:case 10241:this.gl.texParameteri(this.glTarget,e,r);break;case 10242:case 10243:case 32882:this.gl.texParameteri(this.glTarget,e,r);break;case 34046:this.device.features.has(`texture-filterable-anisotropic-webgl`)&&this.gl.texParameteri(this.glTarget,e,r);break;case 34892:case 34893:this.gl.texParameteri(this.glTarget,e,r)}}this.gl.bindTexture(this.glTarget,null)}_getActiveUnit(){return this.gl.getParameter(34016)-33984}_bind(e){let{gl:t}=this;return e!==void 0&&(this._textureUnit=e,t.activeTexture(33984+e)),t.bindTexture(this.glTarget,this.handle),e}_unbind(e){let{gl:t}=this;return e!==void 0&&(this._textureUnit=e,t.activeTexture(33984+e)),t.bindTexture(this.glTarget,null),e}_assertWritable(e){if(this.isHandleBorrowed)throw Error(`Cannot ${e} borrowed read-only ${this}`)}};function Jg(e,t=0){return t?new e.constructor(e.buffer,e.byteOffset+t,(e.byteLength-t)/e.BYTES_PER_ELEMENT):e}function Yg(e,t){if(t%e.BYTES_PER_ELEMENT!==0)throw Error(`Texture byteOffset ${t} must align to typed array element size ${e.BYTES_PER_ELEMENT}`);return t/e.BYTES_PER_ELEMENT}function Xg(e){switch(e){case`1d`:break;case`2d`:return 3553;case`3d`:return 32879;case`cube`:return 34067;case`2d-array`:return 35866}throw Error(e)}function Zg(e,t,n){return t===`cube`?34069+n:e}function Qg(e,t,n,r){let i=e,a=r;a===!0&&(a=1),a===!1&&(a=0);let o=typeof a==`number`?[a]:a;switch(n){case 35678:case 35680:case 35679:case 35682:case 36289:case 36292:case 36293:case 36298:case 36299:case 36300:case 36303:case 36306:case 36307:case 36308:case 36311:if(typeof r!=`number`)throw Error(`samplers must be set to integers`);return e.uniform1i(t,r);case 5126:return e.uniform1fv(t,o);case 35664:return e.uniform2fv(t,o);case 35665:return e.uniform3fv(t,o);case 35666:return e.uniform4fv(t,o);case 5124:return e.uniform1iv(t,o);case 35667:return e.uniform2iv(t,o);case 35668:return e.uniform3iv(t,o);case 35669:return e.uniform4iv(t,o);case 35670:return e.uniform1iv(t,o);case 35671:return e.uniform2iv(t,o);case 35672:return e.uniform3iv(t,o);case 35673:return e.uniform4iv(t,o);case 5125:return i.uniform1uiv(t,o,1);case 36294:return i.uniform2uiv(t,o,2);case 36295:return i.uniform3uiv(t,o,3);case 36296:return i.uniform4uiv(t,o,4);case 35674:return e.uniformMatrix2fv(t,!1,o);case 35675:return e.uniformMatrix3fv(t,!1,o);case 35676:return e.uniformMatrix4fv(t,!1,o);case 35685:return i.uniformMatrix2x3fv(t,!1,o);case 35686:return i.uniformMatrix2x4fv(t,!1,o);case 35687:return i.uniformMatrix3x2fv(t,!1,o);case 35688:return i.uniformMatrix3x4fv(t,!1,o);case 35689:return i.uniformMatrix4x2fv(t,!1,o);case 35690:return i.uniformMatrix4x3fv(t,!1,o)}throw Error(`Illegal uniform`)}function $g(e){return a_[e]}function e_(e){return r_[e]}function t_(e){return!!i_[e]}function n_(e){return i_[e]}var r_={5126:`f32`,35664:`vec2<f32>`,35665:`vec3<f32>`,35666:`vec4<f32>`,5124:`i32`,35667:`vec2<i32>`,35668:`vec3<i32>`,35669:`vec4<i32>`,5125:`u32`,36294:`vec2<u32>`,36295:`vec3<u32>`,36296:`vec4<u32>`,35670:`f32`,35671:`vec2<f32>`,35672:`vec3<f32>`,35673:`vec4<f32>`,35674:`mat2x2<f32>`,35685:`mat2x3<f32>`,35686:`mat2x4<f32>`,35687:`mat3x2<f32>`,35675:`mat3x3<f32>`,35688:`mat3x4<f32>`,35689:`mat4x2<f32>`,35690:`mat4x3<f32>`,35676:`mat4x4<f32>`},i_={35678:{viewDimension:`2d`,sampleType:`float`},35680:{viewDimension:`cube`,sampleType:`float`},35679:{viewDimension:`3d`,sampleType:`float`},35682:{viewDimension:`3d`,sampleType:`depth`},36289:{viewDimension:`2d-array`,sampleType:`float`},36292:{viewDimension:`2d-array`,sampleType:`depth`},36293:{viewDimension:`cube`,sampleType:`float`},36298:{viewDimension:`2d`,sampleType:`sint`},36299:{viewDimension:`3d`,sampleType:`sint`},36300:{viewDimension:`cube`,sampleType:`sint`},36303:{viewDimension:`2d-array`,sampleType:`uint`},36306:{viewDimension:`2d`,sampleType:`uint`},36307:{viewDimension:`3d`,sampleType:`uint`},36308:{viewDimension:`cube`,sampleType:`uint`},36311:{viewDimension:`2d-array`,sampleType:`uint`}},a_={uint8:5121,sint8:5120,unorm8:5121,snorm8:5120,uint16:5123,sint16:5122,unorm16:5123,snorm16:5122,uint32:5125,sint32:5124,float16:5131,float32:5126};function o_(e,t,n={}){let r={attributes:[],bindings:[]};r.attributes=s_(e,t);let i=u_(e,t,n);for(let e of i){let t=e.uniforms.map(e=>({name:e.name,format:e.format,byteOffset:e.byteOffset,byteStride:e.byteStride,arrayLength:e.arrayLength}));r.bindings.push({type:`uniform`,name:e.name,group:0,location:e.location,visibility:+!!e.vertex|(e.fragment?2:0),minBindingSize:e.byteLength,uniforms:t})}let a=l_(e,t),o=0;for(let e of a)if(t_(e.type)){let{viewDimension:t,sampleType:n}=n_(e.type);r.bindings.push({type:`texture`,name:e.name,group:0,location:o,viewDimension:t,sampleType:n}),e.textureUnit=o,o+=1}a.length&&(r.uniforms=a);let s=c_(e,t);return s?.length&&(r.varyings=s),r}function s_(e,t){let n=[],r=e.getProgramParameter(t,35721);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i);if(!r)throw Error(`activeInfo`);let{name:a,type:o}=r,s=e.getAttribLocation(t,a);if(s>=0){let e=e_(o),t=/instance/i.test(a)?`instance`:`vertex`;n.push({name:a,location:s,stepMode:t,type:e})}}return n.sort((e,t)=>e.location-t.location),n}function c_(e,t){let n=[],r=e.getProgramParameter(t,35971);for(let i=0;i<r;i++){let r=e.getTransformFeedbackVarying(t,i);if(!r)throw Error(`activeInfo`);let{name:a,type:o,size:s}=r,c=e_(o),{type:l,components:u}=A(c);n.push({location:i,name:a,type:l,size:s*u})}return n.sort((e,t)=>e.location-t.location),n}function l_(e,t){let n=[],r=e.getProgramParameter(t,35718);for(let i=0;i<r;i++){let r=e.getActiveUniform(t,i);if(!r)throw Error(`activeInfo`);let{name:a,size:o,type:s}=r,{name:c,isArray:l}=x_(a),u=e.getUniformLocation(t,c),d={location:u,name:c,size:o,type:s,isArray:l};if(n.push(d),d.size>1)for(let r=0;r<d.size;r++){let i=`${c}[${r}]`;u=e.getUniformLocation(t,i);let a={...d,name:i,location:u};n.push(a)}}return n}function u_(e,t,n){let r=[],i=f_(e,t,n);for(let[n,a]of i){r.push(a);try{d_(m_(e,t,n,a.name),a)}catch(e){let t=e instanceof Error?e.message:String(e);w.once(0,`WebGL uniform block reflection failed for "${a.name}"; using supplied std140 metadata. ${t}`)()}}let a=e.getProgramParameter(t,35382);if(!Number.isInteger(a)||a<0)throw Error(`Failed to reflect WebGL uniform blocks: ACTIVE_UNIFORM_BLOCKS returned ${String(a)}`);for(let n=0;n<a;n++)i.has(n)||r.push(m_(e,t,n));return r.sort((e,t)=>e.location-t.location),r}function d_(e,t){for(let n of e.uniforms){let e=t.uniforms.find(e=>n.name===e.name||n.name.endsWith(`.${e.name}`));if(!e)throw Error(`Failed to validate WebGL uniform block "${t.name}": reflected unexpected member "${n.name}"`);if(n.format!==e.format||n.arrayLength!==e.arrayLength||n.byteOffset!==e.byteOffset||n.byteStride!==e.byteStride)throw Error(`Failed to validate WebGL uniform block "${t.name}": reflected layout for "${n.name}" does not match supplied std140 metadata`)}}function f_(e,t,n){let r=new Map;for(let e of n.uniformBlockLayouts||[])r.set(e.name,v_(e));for(let e of n.shaderLayout?.bindings||[])b_(e)&&r.set(e.name,e);let i=new Map;for(let n of r.values()){let r=p_(e,t,n.name);if(!r)continue;let{blockIndex:a,blockName:o}=r;if(i.has(a))throw Error(`Multiple supplied uniform block layouts resolve to active WebGL block "${o}"`);i.set(a,{name:o,location:a,byteLength:n.minBindingSize,vertex:!!(n.visibility&&n.visibility&1),fragment:!!(n.visibility&&n.visibility&2),uniformCount:n.uniforms.length,uniforms:n.uniforms.map(e=>({...e}))})}return i}function p_(e,t,n){let r=n.endsWith(`Uniforms`)?[n,n.slice(0,-8)]:[n,`${n}Uniforms`];for(let n of r){let r=e.getUniformBlockIndex(t,n);if(r!==4294967295){if(!Number.isInteger(r)||r<0)throw Error(`Failed to resolve WebGL uniform block "${n}": getUniformBlockIndex returned ${String(r)}`);return{blockIndex:r,blockName:n}}}return null}function m_(e,t,n,r){let i=r||e.getActiveUniformBlockName(t,n);if(!i)throw Error(`Failed to reflect WebGL uniform block at index ${n}: missing block name`);let a=(r,a)=>{let o=e.getActiveUniformBlockParameter(t,n,r);if(o==null)throw Error(`Failed to reflect WebGL uniform block "${i}": ${a} returned null`);return o},o=__(a(35391,`UNIFORM_BLOCK_BINDING`),i,`UNIFORM_BLOCK_BINDING`,0),s=__(a(35392,`UNIFORM_BLOCK_DATA_SIZE`),i,`UNIFORM_BLOCK_DATA_SIZE`,0),c=__(a(35394,`UNIFORM_BLOCK_ACTIVE_UNIFORMS`),i,`UNIFORM_BLOCK_ACTIVE_UNIFORMS`,0),l=g_(a(35395,`UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES`),i,`UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES`,c),u=h_(e,t,l,35383,`UNIFORM_TYPE`,i,c),d=h_(e,t,l,35384,`UNIFORM_SIZE`,i,c),f=h_(e,t,l,35386,`UNIFORM_BLOCK_INDEX`,i,c),p=h_(e,t,l,35387,`UNIFORM_OFFSET`,i,c),m=h_(e,t,l,35388,`UNIFORM_ARRAY_STRIDE`,i,c),h=[];for(let r=0;r<c;r++){if(f[r]!==n)throw Error(`Failed to reflect WebGL uniform block "${i}": active uniform index ${l[r]} belongs to block ${f[r]}, expected ${n}`);let a=l[r],o=e.getActiveUniform(t,a);if(!o)throw Error(`Failed to reflect WebGL uniform block "${i}": getActiveUniform(${a}) returned null`);let s=__(u[r],i,`UNIFORM_TYPE[${r}]`,1),c=__(d[r],i,`UNIFORM_SIZE[${r}]`,1),g=__(p[r],i,`UNIFORM_OFFSET[${r}]`,0),_=__(m[r],i,`UNIFORM_ARRAY_STRIDE[${r}]`,0);if(o.type!==s||o.size!==c)throw Error(`Failed to reflect WebGL uniform block "${i}": getActiveUniform(${a}) disagrees with getActiveUniforms`);h.push({name:o.name,format:e_(s),arrayLength:c,byteOffset:g,byteStride:_})}let g={name:i,location:o,byteLength:s,vertex:!!a(35396,`UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER`),fragment:!!a(35398,`UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER`),uniformCount:c,uniforms:h},_=new Set(g.uniforms.map(e=>e.name.split(`.`)[0]).filter(e=>!!e)),v=g.name.replace(/Uniforms$/,``);if(_.size===1&&!_.has(g.name)&&!_.has(v)){let[e]=_;w.warn(`Uniform block "${g.name}" uses GLSL instance "${e}". luma.gl binds uniform buffers by block name ("${g.name}") and alias ("${v}"). Prefer matching the instance name to one of those to avoid confusing silent mismatches.`)()}return g}function h_(e,t,n,r,i,a,o){let s=e.getActiveUniforms(t,n,r);if(s===null)throw Error(`Failed to reflect WebGL uniform block "${a}": ${i} returned null`);return g_(s,a,i,o)}function g_(e,t,n,r){if(!Array.isArray(e)&&!ArrayBuffer.isView(e))throw Error(`Failed to reflect WebGL uniform block "${t}": ${n} returned a non-array value`);let i=Array.from(e);if(i.length!==r||i.some(e=>!Number.isInteger(e)))throw Error(`Failed to reflect WebGL uniform block "${t}": ${n} returned ${i.length} invalid values, expected ${r}`);return i}function __(e,t,n,r){if(!Number.isInteger(e)||e<r)throw Error(`Failed to reflect WebGL uniform block "${t}": ${n} returned ${String(e)}`);return e}function v_(e){let t=C(e.uniformTypes,{layout:`std140`}),n=y_(e.uniformTypes,t.fields);return{type:`uniform`,name:e.name,group:0,location:0,minBindingSize:t.byteLength,uniforms:n}}function y_(e,t){let n=[],r=(e,a)=>{if(typeof a==`string`){let r=t[e];if(!r)throw Error(`Missing std140 layout field ${e}`);n.push({name:e,format:r.shaderType,arrayLength:1,byteOffset:r.offset*4,byteStride:0})}else if(Array.isArray(a))i(e,a[0],a[1]);else for(let[t,n]of Object.entries(a))r(`${e}.${t}`,n)},i=(e,r,i)=>{if(typeof r==`string`){let r=t[`${e}[0]`],a=i>1?t[`${e}[1]`]:void 0;if(!r)throw Error(`Missing std140 array layout field ${e}[0]`);n.push({name:`${e}[0]`,format:r.shaderType,arrayLength:i,byteOffset:r.offset*4,byteStride:a?(a.offset-r.offset)*4:0})}else{if(Array.isArray(r))throw Error(`Nested uniform arrays are not supported for ${e}`);for(let[a,o]of Object.entries(r)){if(typeof o!=`string`)throw Error(`Composite uniform array members are not supported for ${e}`);let r=`${e}[0].${a}`,s=`${e}[1].${a}`,c=t[r],l=i>1?t[s]:void 0;if(!c)throw Error(`Missing std140 array layout field ${r}`);n.push({name:r,format:c.shaderType,arrayLength:i,byteOffset:c.offset*4,byteStride:l?(l.offset-c.offset)*4:0})}}};for(let[t,n]of Object.entries(e))r(t,n);return n}function b_(e){return e.type===`uniform`&&Number.isInteger(e.minBindingSize)&&e.minBindingSize>=0&&Array.isArray(e.uniforms)&&e.uniforms.every(e=>typeof e.name==`string`&&typeof e.format==`string`&&Number.isInteger(e.arrayLength)&&e.arrayLength>0&&Number.isInteger(e.byteOffset)&&e.byteOffset>=0&&Number.isInteger(e.byteStride)&&e.byteStride>=0)}function x_(e){if(e[e.length-1]!==`]`)return{name:e,length:1,isArray:!1};let t=/([^[]*)(\[[0-9]+\])?/.exec(e);return{name:E(t?.[1],`Failed to parse GLSL uniform name ${e}`),length:+!!t?.[2],isArray:!!t?.[2]}}var S_=class extends T{device;handle;vs;fs;introspectedLayout;bindings={};uniforms={};varyings=null;_uniformCount=0;_uniformSetters={};get[Symbol.toStringTag](){return`WEBGLRenderPipeline`}constructor(e,t){super(e,t),this.device=e;let n=this.sharedRenderPipeline||this.device._createSharedRenderPipelineWebGL(t);this.sharedRenderPipeline=n,this.handle=n.handle,this.vs=n.vs,this.fs=n.fs,this.linkStatus=n.linkStatus,this.introspectedLayout=o_(this.device.gl,this.handle,{uniformBlockLayouts:t._uniformBlockLayouts,shaderLayout:t.shaderLayout}),this.device._setWebGLDebugMetadata(this.handle,this,{spector:{id:this.props.id}}),this.shaderLayout=t.shaderLayout?C_(this.introspectedLayout,t.shaderLayout):this.introspectedLayout}destroy(){this.destroyed||(this.sharedRenderPipeline&&!this.props._sharedRenderPipeline&&this.sharedRenderPipeline.destroy(),this.destroyResource())}setBindings(e,t){let n=Oe(Ie(this.shaderLayout,e));for(let[e,r]of Object.entries(n)){let n=w_(this.shaderLayout,e);if(n){switch(r||w.warn(`Unsetting binding "${e}" in render pipeline "${this.id}"`)(),n.type){case`uniform`:if(!(r instanceof bg)&&!(r.buffer instanceof bg))throw Error(`buffer value`);break;case`texture`:if(!(r instanceof Wg||r instanceof qg||r instanceof pg))throw Error(`${this} Bad texture binding for ${e}`);break;case`sampler`:w.warn(`Ignoring sampler ${e}`)();break;default:throw Error(n.type)}this.bindings[e]=r}else{let n=this.shaderLayout.bindings.map(e=>`"${e.name}"`).join(`, `);t?.disableWarnings||w.warn(`No binding "${e}" in render pipeline "${this.id}", expected one of ${n}`,r)()}}}draw(e){let t=e.renderPass,n=e.bindGroups?Oe(e.bindGroups):e.bindings||this.bindings;return t.setPipeline(this),t.setBindings(n),t.setVertexArray(e.vertexArray),t.draw({parameters:e.parameters,topology:e.topology,isInstanced:e.isInstanced,vertexCount:e.vertexCount,indexCount:e.indexCount,instanceCount:e.instanceCount,firstVertex:e.firstVertex,firstIndex:e.firstIndex,firstInstance:e.firstInstance,baseVertex:e.baseVertex,transformFeedback:e.transformFeedback,uniforms:e.uniforms})}_areTexturesRenderable(e){let t=!0;for(let n of this.shaderLayout.bindings)T_(e,n.name)||(w.warn(`Binding ${n.name} not found in ${this.id}`)(),t=!1);return t}_applyBindings(e,t){if(this._syncLinkStatus(),this.linkStatus!==`success`)return;let{gl:n}=this.device;n.useProgram(this.handle);let r=0,i=0;for(let t of this.shaderLayout.bindings){let a=T_(e,t.name);if(!a)throw Error(`No value for binding ${t.name} in ${this.id}`);switch(t.type){case`uniform`:let{name:e}=t,o=n.getUniformBlockIndex(this.handle,e);if(o===4294967295)throw Error(`Invalid uniform block name ${e}`);if(n.uniformBlockBinding(this.handle,o,i),a instanceof bg)n.bindBufferBase(35345,i,a.handle);else{let e=a;n.bindBufferRange(35345,i,e.buffer.handle,e.offset||0,e.size||e.buffer.byteLength-(e.offset||0))}i+=1;break;case`texture`:if(!(a instanceof Wg||a instanceof qg||a instanceof pg))throw Error(`texture`);let s;if(a instanceof Wg)s=a.texture;else if(a instanceof qg)s=a;else if(a instanceof pg&&a.colorAttachments[0]instanceof Wg)w.warn(`Passing framebuffer in texture binding may be deprecated. Use fbo.colorAttachments[0] instead`)(),s=a.colorAttachments[0].texture;else throw Error(`No texture`);n.activeTexture(33984+r),n.bindTexture(s.glTarget,s.handle),r+=1;break;case`sampler`:break;case`storage`:case`read-only-storage`:throw Error(`binding type '${t.type}' not supported in WebGL`)}}}_applyUniforms(e){for(let t of this.shaderLayout.uniforms||[]){let{name:n,location:r,type:i,textureUnit:a}=t,o=e[n]??a;o!==void 0&&Qg(this.device.gl,r,i,o)}}_syncLinkStatus(){this.linkStatus=this.sharedRenderPipeline.linkStatus}};function C_(e,t){let n={...e,attributes:e.attributes.map(e=>({...e})),bindings:e.bindings.map(e=>({...e}))};for(let e of t?.attributes||[]){let t=n.attributes.find(t=>t.name===e.name);t?(t.type=e.type||t.type,t.stepMode=e.stepMode||t.stepMode):w.warn(`shader layout attribute ${e.name} not present in shader`)}for(let e of t?.bindings||[]){let t=w_(n,e.name);t?Object.assign(t,e):w.warn(`shader layout binding ${e.name} not present in shader`)}return n}function w_(e,t){return e.bindings.find(e=>e.name===t||e.name===`${t}Uniforms`||`${e.name}Uniforms`===t)}function T_(e,t){return e[t]||e[`${t}Uniforms`]||e[t.replace(/Uniforms$/,``)]}var E_=4,D_=class extends Ea{device;handle;vs;fs;linkStatus=`pending`;constructor(e,t){super(e,t),this.device=e,this.handle=t.handle||this.device.gl.createProgram(),this.vs=t.vs,this.fs=t.fs,t.varyings&&t.varyings.length>0&&this.device.gl.transformFeedbackVaryings(this.handle,t.varyings,t.bufferMode||35981),this._linkShaders()}destroy(){this.destroyed||(this.device.gl.useProgram(null),this.device.gl.deleteProgram(this.handle),this.handle.destroyed=!0,this.destroyResource())}async _linkShaders(){let{gl:e}=this.device;if(e.attachShader(this.handle,this.vs.handle),e.attachShader(this.handle,this.fs.handle),w.time(E_,`linkProgram for ${this.id}`)(),e.linkProgram(this.handle),w.timeEnd(E_,`linkProgram for ${this.id}`)(),!this.device.features.has(`compilation-status-async-webgl`)){let e=this._getLinkStatus();this._reportLinkStatus(e);return}w.once(1,`RenderPipeline linking is asynchronous`)(),await this._waitForLinkComplete(),w.info(2,`RenderPipeline ${this.id} - async linking complete: ${this.linkStatus}`)();let t=this._getLinkStatus();this._reportLinkStatus(t)}async _reportLinkStatus(e){switch(e){case`success`:return;default:let t=e===`link-error`?`Link error`:`Validation error`;switch(this.vs.compilationStatus){case`error`:throw this.vs.debugShader(),Error(`${this} ${t} during compilation of ${this.vs}`);case`pending`:await this.vs.asyncCompilationStatus,this.vs.debugShader()}switch(this.fs?.compilationStatus){case`error`:throw this.fs.debugShader(),Error(`${this} ${t} during compilation of ${this.fs}`);case`pending`:await this.fs.asyncCompilationStatus,this.fs.debugShader()}let n=this.device.gl.getProgramInfoLog(this.handle);this.device.reportError(Error(`${t} during ${e}: ${n}`),this)(),this.device.debug()}}_getLinkStatus(){let{gl:e}=this.device;return e.getProgramParameter(this.handle,35714)?(this._initializeSamplerUniforms(),e.validateProgram(this.handle),e.getProgramParameter(this.handle,35715)?(this.linkStatus=`success`,`success`):(this.linkStatus=`error`,`validation-error`)):(this.linkStatus=`error`,`link-error`)}_initializeSamplerUniforms(){let{gl:e}=this.device;e.useProgram(this.handle);let t=0,n=e.getProgramParameter(this.handle,35718);for(let r=0;r<n;r++){let n=e.getActiveUniform(this.handle,r);if(n&&t_(n.type)){let r=n.name.endsWith(`[0]`),i=r?n.name.slice(0,-3):n.name,a=e.getUniformLocation(this.handle,i);a!==null&&(t=this._assignSamplerUniform(a,n,r,t))}}}_assignSamplerUniform(e,t,n,r){let{gl:i}=this.device;if(n&&t.size>1){let n=Int32Array.from({length:t.size},(e,t)=>r+t);return i.uniform1iv(e,n),r+t.size}return i.uniform1i(e,r),r+1}async _waitForLinkComplete(){let e=async e=>await new Promise(t=>setTimeout(t,e));if(!this.device.features.has(`compilation-status-async-webgl`)){await e(10);return}let{gl:t}=this.device;for(;;){if(t.getProgramParameter(this.handle,37297))return;await e(10)}}},O_=class extends ka{device;handle=null;commands=[];constructor(e,t={}){super(e,t),this.device=e}_executeCommands(e=this.commands){for(let t of e)switch(t.name){case`copy-buffer-to-buffer`:k_(this.device,t.options);break;case`copy-buffer-to-texture`:A_(this.device,t.options);break;case`copy-texture-to-buffer`:j_(this.device,t.options);break;case`copy-texture-to-texture`:M_(this.device,t.options);break;default:throw Error(t.name)}}};function k_(e,t){let n=t.sourceBuffer,r=t.destinationBuffer;e.gl.bindBuffer(36662,n.handle),e.gl.bindBuffer(36663,r.handle),e.gl.copyBufferSubData(36662,36663,t.sourceOffset??0,t.destinationOffset??0,t.size),e.gl.bindBuffer(36662,null),e.gl.bindBuffer(36663,null)}function A_(e,t){let{sourceBuffer:n,byteOffset:r=0,destinationTexture:i,mipLevel:a=0,origin:o=[0,0,0],aspect:s=`all`,bytesPerRow:c,rowsPerImage:l,size:u}=t;if(s!==`all`)throw Error(`copyBufferToTexture aspect is not supported in WebGL`);i.writeBuffer(n,{byteOffset:r,bytesPerRow:c,rowsPerImage:l,mipLevel:a,x:o[0]??0,y:o[1]??0,z:o[2]??0,width:u[0],height:u[1],depthOrArrayLayers:u[2]})}function j_(e,t){let{sourceTexture:n,mipLevel:r=0,aspect:i=`all`,width:a=t.sourceTexture.width,height:o=t.sourceTexture.height,depthOrArrayLayers:s,origin:c=[0,0,0],destinationBuffer:l,byteOffset:u=0,bytesPerRow:d,rowsPerImage:f}=t;if(n instanceof I){n.readBuffer({x:c[0]??0,y:c[1]??0,z:c[2]??0,width:a,height:o,depthOrArrayLayers:s,mipLevel:r,aspect:i,byteOffset:u},l);return}if(i!==`all`)throw Error(`aspect not supported in WebGL`);if(r!==0||s!==void 0||d||f)throw Error(`not implemented`);let{framebuffer:p,destroyFramebuffer:m}=N_(n),h;try{let t=l,n=a||p.width,r=o||p.height,i=og(E(p.colorAttachments[0]).texture.props.format),s=i.format,d=i.type;e.gl.bindBuffer(35051,t.handle),h=e.gl.bindFramebuffer(36160,p.handle),e.gl.readPixels(c[0],c[1],n,r,s,d,u)}finally{e.gl.bindBuffer(35051,null),h!==void 0&&e.gl.bindFramebuffer(36160,h),m&&p.destroy()}}function M_(e,t){let{sourceTexture:n,destinationMipLevel:r=0,origin:i=[0,0],destinationOrigin:a=[0,0,0],destinationTexture:o}=t,{width:s=t.destinationTexture.width,height:c=t.destinationTexture.height}=t,{framebuffer:l,destroyFramebuffer:u}=N_(n),[d=0,f=0]=i,[p,m,h]=a,g=e.gl.bindFramebuffer(36160,l.handle),_,v;if(o instanceof qg)_=o,s=Number.isFinite(s)?s:_.width,c=Number.isFinite(c)?c:_.height,_._bind(0),v=_.glTarget;else throw Error(`invalid destination`);switch(v){case 3553:case 34067:e.gl.copyTexSubImage2D(v,r,p,m,d,f,s,c);break;case 35866:case 32879:e.gl.copyTexSubImage3D(v,r,p,m,h,d,f,s,c)}_&&_._unbind(),e.gl.bindFramebuffer(36160,g),u&&l.destroy()}function N_(e){if(e instanceof I){let{width:t,height:n,id:r}=e;return{framebuffer:e.device.createFramebuffer({id:`framebuffer-for-${r}`,width:t,height:n,colorAttachments:[e]}),destroyFramebuffer:!0}}return{framebuffer:e,destroyFramebuffer:!1}}function P_(e){switch(e){case`point-list`:return 0;case`line-list`:return 1;case`line-strip`:return 3;case`triangle-list`:return 4;case`triangle-strip`:return 5;default:throw Error(e)}}function F_(e){switch(e){case`point-list`:return 0;case`line-list`:return 1;case`line-strip`:return 1;case`triangle-list`:return 4;case`triangle-strip`:return 4;default:throw Error(e)}}var I_=[1,2,4,8],L_=class extends Da{device;handle=null;glParameters={};pipeline=null;bindings={};bindingsPipeline=null;vertexArray=null;constructor(e,t){super(e,t),this.device=e;let n=this.props.framebuffer,r=!n||n.handle===null;r&&e.getDefaultCanvasContext()._resizeDrawingBufferIfNeeded();let i;if(!t?.parameters?.viewport){if(!r&&n){let{width:e,height:t}=n;i=[0,0,e,t]}else{let[t,n]=e.getDefaultCanvasContext().getDrawingBufferSize();i=[0,0,t,n]}}if(this.device.pushState(),this.setParameters({viewport:i,...this.props.parameters}),!r&&n?.colorAttachments.length){let e=n.colorAttachments.map((e,t)=>36064+t);this.device.gl.drawBuffers(e)}else r&&this.device.gl.drawBuffers([1029]);this.clear(),this.props.timestampQuerySet&&this.props.beginTimestampIndex!==void 0&&this.props.timestampQuerySet.writeTimestamp(this.props.beginTimestampIndex)}end(){this.destroyed||(this.props.timestampQuerySet&&this.props.endTimestampIndex!==void 0&&this.props.timestampQuerySet.writeTimestamp(this.props.endTimestampIndex),this.device.popState(),this.destroy())}pushDebugGroup(e){}popDebugGroup(){}insertDebugMarker(e){}executeBundles(e){throw Error(`Render bundles are only supported in WebGPU`)}setParameters(e={}){let t={...this.glParameters};t.framebuffer=this.props.framebuffer||null,this.props.depthReadOnly&&(t.depthMask=!this.props.depthReadOnly),t.stencilMask=+!this.props.stencilReadOnly,t[35977]=this.props.discard,e.viewport&&(e.viewport.length>=6?(t.viewport=e.viewport.slice(0,4),t.depthRange=[e.viewport[4],e.viewport[5]]):t.viewport=e.viewport),e.scissorRect&&(t.scissorTest=!0,t.scissor=e.scissorRect),e.blendConstant&&(t.blendColor=e.blendConstant),e.stencilReference!==void 0&&(t[2967]=e.stencilReference,t[36003]=e.stencilReference),`colorMask`in e&&(t.colorMask=I_.map(t=>!!(t&e.colorMask))),this.glParameters=t,gh(this.device.gl,t)}setPipeline(e){this.pipeline=e}setBindings(e,t){if(!this.pipeline)throw Error(`RenderPass.setPipeline() must be called before setBindings()`);this.bindings=Oe(Ie(this.pipeline.shaderLayout,e)),this.bindingsPipeline=this.pipeline}setVertexArray(e){this.vertexArray=e}draw(e){let t=this.pipeline,n=this.vertexArray;if(!t)throw Error(`RenderPass.setPipeline() must be called before draw()`);if(!n)throw Error(`RenderPass.setVertexArray() must be called before draw()`);if(t.shaderLayout.bindings.length>0&&this.bindingsPipeline!==t)throw Error(`RenderPass.setBindings() must be called after setPipeline() before draw()`);t._syncLinkStatus();let{parameters:r=t.props.parameters,topology:i=t.props.topology,vertexCount:a,indexCount:o,instanceCount:s,isInstanced:c=!1,firstVertex:l=0,transformFeedback:u,uniforms:d=t.uniforms}=e,f=P_(i),p=!!n.indexBuffer,m=n.indexBuffer?.glIndexType,h=o??a??0;if(t.linkStatus!==`success`)return w.info(2,`RenderPipeline:${t.id}.draw() aborted - waiting for shader linking`)(),!1;if(!t._areTexturesRenderable(this.bindings))return w.info(2,`RenderPipeline:${t.id}.draw() aborted - textures not yet loaded`)(),!1;this.device.gl.useProgram(t.handle),n.bindBeforeRender(this);let g=u;return g&&g.begin(t.props.topology),t._applyBindings(this.bindings,{disableWarnings:t.props.disableWarnings}),t._applyUniforms(d),Dg(this.device,r,this.glParameters,()=>{p&&c?this.device.gl.drawElementsInstanced(f,h,m,l,s||0):p?this.device.gl.drawElements(f,h,m,l):c?this.device.gl.drawArraysInstanced(f,l,a||0,s||0):this.device.gl.drawArrays(f,l,a||0),g&&g.end()}),n.unbindAfterRender(this),!0}drawIndirect(e,t=0){throw Error(`Indirect drawing is only supported in WebGPU`)}drawIndexedIndirect(e,t=0){throw Error(`Indirect drawing is only supported in WebGPU`)}beginOcclusionQuery(e){this.props.occlusionQuerySet?.beginOcclusionQuery()}endOcclusionQuery(){this.props.occlusionQuerySet?.endOcclusionQuery()}clear(){let e={...this.glParameters},t=0;this.props.clearColors&&this.props.clearColors.forEach((e,t)=>{e&&this.clearColorBuffer(t,e)}),this.props.clearColor!==!1&&this.props.clearColors===void 0&&(t|=16384,e.clearColor=this.props.clearColor),this.props.clearDepth!==!1&&(t|=256,e.clearDepth=this.props.clearDepth),this.props.clearStencil!==!1&&(t|=1024,e.clearStencil=this.props.clearStencil),t!==0&&Hg(this.device.gl,e,()=>{this.device.gl.clear(t)})}clearColorBuffer(e=0,t=[0,0,0,0]){Hg(this.device.gl,{framebuffer:this.props.framebuffer},()=>{switch(t.constructor){case Int8Array:case Int16Array:case Int32Array:this.device.gl.clearBufferiv(6144,e,t);break;case Uint8Array:case Uint8ClampedArray:case Uint16Array:case Uint32Array:this.device.gl.clearBufferuiv(6144,e,t);break;case Float32Array:this.device.gl.clearBufferfv(6144,e,t);break;default:throw Error(`clearColorBuffer: color must be typed array`)}})}},R_=class extends Oa{device;handle=null;commandBuffer;constructor(e,t){super(e,t),this.device=e,this.commandBuffer=new O_(e,{id:this.id,userData:this.userData})}destroy(){this.destroyResource()}finish(){return this.destroy(),this.commandBuffer}beginRenderPass(e={}){return new L_(this.device,this._applyTimeProfilingToPassProps(e))}beginComputePass(e={}){throw Error(`ComputePass not supported in WebGL`)}copyBufferToBuffer(e){this.commandBuffer.commands.push({name:`copy-buffer-to-buffer`,options:e})}copyBufferToTexture(e){this.commandBuffer.commands.push({name:`copy-buffer-to-texture`,options:e})}copyTextureToBuffer(e){this.commandBuffer.commands.push({name:`copy-texture-to-buffer`,options:e})}copyTextureToTexture(e){this.commandBuffer.commands.push({name:`copy-texture-to-texture`,options:e})}pushDebugGroup(e){}popDebugGroup(){}insertDebugMarker(e){}resolveQuerySet(e,t,n){throw Error(`resolveQuerySet is not supported in WebGL`)}writeTimestamp(e,t){e.writeTimestamp(t)}};function z_(e){let{target:t,source:n,start:r=0,count:i=1}=e,a=n.length,o=i*a,s=0;for(let e=r;s<a;s++)t[e++]=n[s]??0;for(;s<o;)s<o-s?(t.copyWithin(r+s,r,r+s),s*=2):(t.copyWithin(r+s,r,r+o-s),s=o);return e.target}var B_=class e extends Aa{get[Symbol.toStringTag](){return`VertexArray`}device;handle;attributeInfosByLocation;buffer=null;bufferValue=null;static isConstantAttributeZeroSupported(e){return ot()===`Chrome`}constructor(e,t){super(e,t),this.device=e,this.handle=this.device.gl.createVertexArray(),this.attributeInfosByLocation=Array(this.maxVertexAttributes).fill(null);for(let e of Object.values(Le(t.shaderLayout,t.bufferLayout)))this.attributeInfosByLocation[e.location]=e}destroy(){super.destroy(),this.buffer&&this.buffer?.destroy(),this.handle&&=(this.device.gl.deleteVertexArray(this.handle),void 0)}setIndexBuffer(e){let t=e;if(t&&t.glTarget!==34963)throw Error(`Use .setBuffer()`);this.device.gl.bindVertexArray(this.handle),this.device.gl.bindBuffer(34963,t?t.handle:null),this.indexBuffer=t,this.device.gl.bindVertexArray(null)}setBuffer(e,t){let n=t;if(n.glTarget===34963)throw Error(`Use .setIndexBuffer()`);let{size:r,type:i,stride:a,offset:o,normalized:s,integer:c,divisor:l}=this._getAccessor(e);this.device.gl.bindVertexArray(this.handle),this.device.gl.bindBuffer(34962,n.handle),c?this.device.gl.vertexAttribIPointer(e,r,i,a,o):this.device.gl.vertexAttribPointer(e,r,i,s,a,o),this.device.gl.bindBuffer(34962,null),this.device.gl.enableVertexAttribArray(e),this.device.gl.vertexAttribDivisor(e,l||0),this.attributes[e]=n,this.device.gl.bindVertexArray(null)}setConstantWebGL(e,t){this._enable(e,!1),this.attributes[e]=t}bindBeforeRender(){this.device.gl.bindVertexArray(this.handle),this._applyConstantAttributes()}unbindAfterRender(){this.device.gl.bindVertexArray(null)}_applyConstantAttributes(){for(let e=0;e<this.maxVertexAttributes;++e){let t=this.attributes[e];ArrayBuffer.isView(t)&&this.device.setConstantAttributeWebGL(e,t)}}_getAccessor(e){let t=this.attributeInfosByLocation[e];if(!t)throw Error(`Unknown attribute location ${e}`);let n=Ph(t.bufferDataType);return{size:t.bufferComponents,type:n,stride:t.byteStride,offset:t.byteOffset,normalized:t.normalized,integer:t.integer,divisor:+(t.stepMode===`instance`)}}_enable(t,n=!0){let r=e.isConstantAttributeZeroSupported(this.device)||t!==0;(n||r)&&(t=Number(t),this.device.gl.bindVertexArray(this.handle),n?this.device.gl.enableVertexAttribArray(t):this.device.gl.disableVertexAttribArray(t),this.device.gl.bindVertexArray(null))}getConstantBuffer(e,t){let n=V_(t),r=n.byteLength*e,i=n.length*e;if(this.buffer&&r!==this.buffer.byteLength)throw Error(`Buffer size is immutable, byte length ${r} !== ${this.buffer.byteLength}.`);let a=!this.buffer;if(this.buffer=this.buffer||this.device.createBuffer({byteLength:r}),a||=!H_(n,this.bufferValue),a){let e=M(t.constructor,i);z_({target:e,source:n,start:0,count:i}),this.buffer.write(e),this.bufferValue=t}return this.buffer}};function V_(e){return Array.isArray(e)?new Float32Array(e):e}function H_(e,t){if(!e||!t||e.length!==t.length||e.constructor!==t.constructor)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}var U_=class extends ja{device;gl;handle;layout;buffers={};unusedBuffers={};bindOnUse=!0;_bound=!1;constructor(e,t){super(e,t),this.device=e,this.gl=e.gl,this.handle=this.props.handle||this.gl.createTransformFeedback(),this.layout=this.props.layout,t.buffers&&this.setBuffers(t.buffers),Object.seal(this)}destroy(){this.gl.deleteTransformFeedback(this.handle),super.destroy()}begin(e=`point-list`){this.gl.bindTransformFeedback(36386,this.handle),this.bindOnUse&&this._bindBuffers(),this.gl.beginTransformFeedback(F_(e))}end(){this.gl.endTransformFeedback(),this.bindOnUse&&this._unbindBuffers(),this.gl.bindTransformFeedback(36386,null)}setBuffers(e){this.buffers={},this.unusedBuffers={},this.bind(()=>{for(let[t,n]of Object.entries(e))this.setBuffer(t,n)})}setBuffer(e,t){let n=this._getVaryingIndex(e),{buffer:r,byteLength:i,byteOffset:a}=this._getBufferRange(t);n<0?(this.unusedBuffers[e]=r,w.warn(`${this.id} unusedBuffers varying buffer ${e}`)()):(this.buffers[n]={buffer:r,byteLength:i,byteOffset:a},this.bindOnUse||this._bindBuffer(n,r,a,i))}getBuffer(e){if(W_(e))return this.buffers[e]||null;let t=this._getVaryingIndex(e);return this.buffers[t]??null}bind(e=this.handle){if(typeof e!=`function`)return this.gl.bindTransformFeedback(36386,e),this;let t;return this._bound?t=e():(this.gl.bindTransformFeedback(36386,this.handle),this._bound=!0,t=e(),this._bound=!1,this.gl.bindTransformFeedback(36386,null)),t}unbind(){this.bind(null)}_getBufferRange(e){if(e instanceof bg)return{buffer:e,byteOffset:0,byteLength:e.byteLength};let{buffer:t,byteOffset:n=0,byteLength:r=e.buffer.byteLength}=e;return{buffer:t,byteOffset:n,byteLength:r}}_getVaryingIndex(e){if(W_(e))return Number(e);for(let t of this.layout.varyings||[])if(e===t.name)return t.location;return-1}_bindBuffers(){for(let[e,t]of Object.entries(this.buffers)){let{buffer:n,byteLength:r,byteOffset:i}=this._getBufferRange(t);this._bindBuffer(Number(e),n,i,r)}}_unbindBuffers(){for(let e in this.buffers)this.gl.bindBufferBase(35982,Number(e),null)}_bindBuffer(e,t,n=0,r){let i=t&&t.handle;!i||r===void 0?this.gl.bindBufferBase(35982,e,i):this.gl.bindBufferRange(35982,e,i,n,r)}};function W_(e){return typeof e==`number`?Number.isInteger(e):/^\d+$/.test(e)}var G_=class extends Ma{device;handle;_timestampPairs=[];_pendingReads=new Set;_occlusionQuery=null;_occlusionActive=!1;get[Symbol.toStringTag](){return`QuerySet`}constructor(e,t){if(super(e,t),this.device=e,t.type===`timestamp`){if(t.count<2)throw Error(`Timestamp QuerySet requires at least two query slots`);this._timestampPairs=Array(Math.ceil(t.count/2)).fill(null).map(()=>({activeQuery:null,completedQueries:[]})),this.handle=null}else{if(t.count>1)throw Error(`WebGL occlusion QuerySet can only have one value`);let e=this.device.gl.createQuery();if(!e)throw Error(`WebGL query not supported`);this.handle=e}Object.seal(this)}destroy(){if(!this.destroyed){this.handle&&this.device.gl.deleteQuery(this.handle);for(let e of this._timestampPairs){e.activeQuery&&(this._cancelPendingQuery(e.activeQuery),this.device.gl.deleteQuery(e.activeQuery.handle));for(let t of e.completedQueries)this._cancelPendingQuery(t),this.device.gl.deleteQuery(t.handle)}this._occlusionQuery&&(this._cancelPendingQuery(this._occlusionQuery),this.device.gl.deleteQuery(this._occlusionQuery.handle));for(let e of Array.from(this._pendingReads))this._cancelPendingQuery(e);this.destroyResource()}}isResultAvailable(e){return this.props.type===`timestamp`?e===void 0?this._timestampPairs.some((e,t)=>this._isTimestampPairAvailable(t)):this._isTimestampPairAvailable(this._getTimestampPairIndex(e)):this._occlusionQuery?this._pollQueryAvailability(this._occlusionQuery):!1}async readResults(e){let t=e?.firstQuery||0,n=e?.queryCount||this.props.count-t;if(this._validateRange(t,n),this.props.type===`timestamp`){let e=Array(n).fill(0n),r=Math.floor(t/2),i=Math.floor((t+n-1)/2);for(let a=r;a<=i;a++){let r=await this._consumeTimestampPairResult(a),i=a*2,o=i+1;i>=t&&i<t+n&&(e[i-t]=0n),o>=t&&o<t+n&&(e[o-t]=r)}return e}if(!this._occlusionQuery)throw Error(`Occlusion query has not been started`);return[await this._consumeQueryResult(this._occlusionQuery)]}async readTimestampDuration(e,t){if(this.props.type!==`timestamp`)throw Error(`Timestamp durations require a timestamp QuerySet`);if(e<0||t>=this.props.count||t<=e)throw Error(`Timestamp duration range is out of bounds`);if(e%2!=0||t!==e+1)throw Error(`WebGL timestamp durations require adjacent even/odd query indices`);let n=await this._consumeTimestampPairResult(this._getTimestampPairIndex(e));return Number(n)/1e6}beginOcclusionQuery(){if(this.props.type!==`occlusion`)throw Error(`Occlusion queries require an occlusion QuerySet`);if(!this.handle)throw Error(`WebGL occlusion query is not available`);if(this._occlusionActive)throw Error(`Occlusion query is already active`);this.device.gl.beginQuery(35887,this.handle),this._occlusionQuery={handle:this.handle,promise:null,result:null,disjoint:!1,cancelled:!1,pollRequestId:null,resolve:null,reject:null},this._occlusionActive=!0}endOcclusionQuery(){if(!this._occlusionActive)throw Error(`Occlusion query is not active`);this.device.gl.endQuery(35887),this._occlusionActive=!1}writeTimestamp(e){if(this.props.type!==`timestamp`)throw Error(`Timestamp writes require a timestamp QuerySet`);let t=this._getTimestampPairIndex(e),n=this._timestampPairs[t];if(e%2==0){if(n.activeQuery)throw Error(`Timestamp query pair is already active`);let e=this.device.gl.createQuery();if(!e)throw Error(`WebGL query not supported`);let t={handle:e,promise:null,result:null,disjoint:!1,cancelled:!1,pollRequestId:null,resolve:null,reject:null};this.device.gl.beginQuery(35007,e),n.activeQuery=t}else{if(!n.activeQuery)throw Error(`Timestamp query pair was ended before it was started`);this.device.gl.endQuery(35007),n.completedQueries.push(n.activeQuery),n.activeQuery=null}}_validateRange(e,t){if(e<0||t<0||e+t>this.props.count)throw Error(`Query read range is out of bounds`)}_getTimestampPairIndex(e){if(e<0||e>=this.props.count)throw Error(`Query index is out of bounds`);return Math.floor(e/2)}_isTimestampPairAvailable(e){let t=this._timestampPairs[e];return!t||t.completedQueries.length===0?!1:this._pollQueryAvailability(t.completedQueries[0])}_pollQueryAvailability(e){if(e.cancelled||this.destroyed)return e.result=0n,!0;if(e.result!==null||e.disjoint)return!0;if(!this.device.gl.getQueryParameter(e.handle,34919))return!1;let t=!!this.device.gl.getParameter(36795);return e.disjoint=t,e.result=t?0n:BigInt(this.device.gl.getQueryParameter(e.handle,34918)),!0}async _consumeTimestampPairResult(e){let t=this._timestampPairs[e];if(!t||t.completedQueries.length===0)throw Error(`Timestamp query pair has no completed result`);let n=t.completedQueries.shift();try{return await this._consumeQueryResult(n)}finally{this.device.gl.deleteQuery(n.handle)}}_consumeQueryResult(e){return e.promise||=(this._pendingReads.add(e),new Promise((t,n)=>{e.resolve=t,e.reject=n;let r=()=>{e.pollRequestId=null,e.cancelled||this.destroyed?(this._pendingReads.delete(e),e.promise=null,e.resolve=null,e.reject=null,t(0n)):this._pollQueryAvailability(e)?(this._pendingReads.delete(e),e.promise=null,e.resolve=null,e.reject=null,e.disjoint?n(Error(`GPU timestamp query was invalidated by a disjoint event`)):t(e.result||0n)):e.pollRequestId=this._requestAnimationFrame(r)};r()})),e.promise}_cancelPendingQuery(e){if(this._pendingReads.delete(e),e.cancelled=!0,e.pollRequestId!==null&&(this._cancelAnimationFrame(e.pollRequestId),e.pollRequestId=null),e.resolve){let t=e.resolve;e.promise=null,e.resolve=null,e.reject=null,t(0n)}}_requestAnimationFrame(e){return requestAnimationFrame(e)}_cancelAnimationFrame(e){cancelAnimationFrame(e)}},K_=class extends Na{device;gl;handle;signaled;_signaled=!1;constructor(e,t={}){super(e,{}),this.device=e,this.gl=e.gl;let n=this.props.handle||this.gl.fenceSync(this.gl.SYNC_GPU_COMMANDS_COMPLETE,0);if(!n)throw Error(`Failed to create WebGL fence`);this.handle=n,this.signaled=new Promise(e=>{let t=()=>{let n=this.gl.clientWaitSync(this.handle,0,0);n===this.gl.ALREADY_SIGNALED||n===this.gl.CONDITION_SATISFIED?(this._signaled=!0,e()):setTimeout(t,1)};t()})}isSignaled(){if(this._signaled)return!0;let e=this.gl.getSyncParameter(this.handle,this.gl.SYNC_STATUS);return this._signaled=e===this.gl.SIGNALED,this._signaled}destroy(){this.destroyed||this.gl.deleteSync(this.handle)}};function q_(e){switch(e){case 6406:case 33326:case 6403:case 36244:return 1;case 33339:case 33340:case 33328:case 33320:case 33319:return 2;case 6407:case 36248:case 34837:return 3;case 6408:case 36249:case 34836:return 4;default:return 0}}function J_(e){switch(e){case 5121:return 1;case 33635:case 32819:case 32820:return 2;case 5126:return 4;default:return 0}}function Y_(e,t){let{sourceX:n=0,sourceY:r=0,sourceAttachment:i=0}=t||{},{target:a=null,sourceWidth:o,sourceHeight:s,sourceDepth:c,sourceFormat:l,sourceType:u}=t||{},{framebuffer:d,deleteFramebuffer:f}=Z_(e),{gl:p,handle:m}=d;o||=d.width,s||=d.height;let h=d.colorAttachments[i]?.texture;if(!h)throw Error(`Invalid framebuffer attachment ${i}`);c=h?.depth||1,l||=h?.glFormat||6408,u||=h?.glType||5121,a=$_(a,u,l,o,s,c);let g=j.getDataType(a);u||=$g(g);let _=p.bindFramebuffer(36160,m);return p.readBuffer(36064+i),p.readPixels(n,r,o,s,l,u,a),p.readBuffer(36064),p.bindFramebuffer(36160,_||null),f&&d.destroy(),a}function X_(e,t){let{target:n,sourceX:r=0,sourceY:i=0,sourceFormat:a=6408,targetByteOffset:o=0}=t||{},{sourceWidth:s,sourceHeight:c,sourceType:l}=t||{},{framebuffer:u,deleteFramebuffer:d}=Z_(e);s||=u.width,c||=u.height;let f=u;l||=5121;let p=n;if(!p){let e=q_(a),t=J_(l),n=o+s*c*e*t;p=f.device.createBuffer({byteLength:n})}let m=e.device.createCommandEncoder();return m.copyTextureToBuffer({sourceTexture:e,width:s,height:c,origin:[r,i],destinationBuffer:p,byteOffset:o}),m.destroy(),d&&u.destroy(),p}function Z_(e){return e instanceof Ta?{framebuffer:e,deleteFramebuffer:!1}:{framebuffer:Q_(e),deleteFramebuffer:!0}}function Q_(e,t){let{device:n,width:r,height:i,id:a}=e;return n.createFramebuffer({...t,id:`framebuffer-for-${a}`,width:r,height:i,colorAttachments:[e]})}function $_(e,t,n,r,i,a){if(e)return e;t||=5121;let o=Gg(t),s=j.getTypedArrayConstructor(o),c=q_(n);return new s(r*i*c)}function ev(e){let t=new Map;for(let n in e){let r=e[n];if(n<`a`){let e=t.get(r);t.set(r,e?`${e}, GL.${n}`:`GL.${n}`)}}return t}var tv=t({WebGLDevice:()=>nv}),nv=class e extends fa{static getDeviceFromContext(e){return e?e.luma?.device??null:null}type=`webgl`;handle;features;limits;info;canvasContext;preferredColorFormat=`rgba8unorm`;preferredDepthFormat=`depth24plus`;commandEncoder;lost;_resolveContextLost;_isLost=!1;gl;_glKeyByValue=null;_constants;extensions;_polyfilled=!1;spectorJS;get[Symbol.toStringTag](){return`WebGLDevice`}toString(){return`${this[Symbol.toStringTag]}(${this.id})`}isVertexFormatSupported(e){switch(e){case`unorm8x4-bgra`:return!1;default:return!0}}constructor(t){super({...t,id:t.id||yg(`webgl-device`)});let n=fa._getCanvasContextProps(t);if(!n)throw Error(`WebGLDevice requires props.createCanvasContext to be set`);let r=n.canvas?.gl??null,i=e.getDeviceFromContext(r);if(i)throw Error(`WebGL context already attached to device ${i.id}`);this.canvasContext=new gg(this,n),this.lost=new Promise(e=>{this._resolveContextLost=e});let a={...t.webgl};n.alphaMode===`premultiplied`&&(a.premultipliedAlpha=!0),t.powerPreference!==void 0&&(a.powerPreference=t.powerPreference),t.failIfMajorPerformanceCaveat!==void 0&&(a.failIfMajorPerformanceCaveat=t.failIfMajorPerformanceCaveat);let o=this.props._handle||Dh(this.canvasContext.canvas,{onContextLost:e=>this._resolveContextLost?.({reason:`destroyed`,message:`Entered sleep mode, or too many apps or browser tabs are using the GPU.`}),onContextRestored:e=>{console.log(`WebGL context restored`)}},a);if(!o)throw Error(`WebGL context creation failed`);if(i=e.getDeviceFromContext(o),i){if(t._reuseDevices)return w.log(1,`Not creating a new Device, instead returning a reference to Device ${i.id} already attached to WebGL context`,i)(),this.canvasContext.destroy(),i._reused=!0,i;throw Error(`WebGL context already attached to device ${i.id}`)}this.handle=o,this.gl=o,this.spectorJS=Xm({...this.props,gl:this.handle});let s=Eh(this.handle);s.device=this,s.extensions||={},this.extensions=s.extensions,this.info=kh(this.gl,this.extensions),this.limits=new fg(this.gl),this.features=new dg(this.gl,this.extensions,this.props._disabledFeatures),this.props._initializeFeatures&&this.features.initializeFeatures(),new Sh(this.gl,{log:(...e)=>w.log(1,...e)()}).trackState(this.gl,{copyState:!1}),(t.debug||t.debugWebGL)&&(this.gl=Jm(this.gl,{debugWebGL:!0,traceWebGL:t.debugWebGL}),w.warn(`WebGL debug mode activated. Performance reduced.`)()),t.debugWebGL&&(w.level=Math.max(w.level,1)),this.commandEncoder=new R_(this,{id:`${this}-command-encoder`}),this.canvasContext._startObservers()}destroy(){if(!this.props._reuseDevices&&!this._reused){this._isLost=!0,this.commandEncoder?.destroy();let e=Eh(this.handle);e.device=null}}get isLost(){return this._isLost||this.gl.isContextLost()}createCanvasContext(e){throw Error(`WebGL only supports a single canvas`)}createPresentationContext(e){return new _g(this,e||{})}createBuffer(e){let t=this._normalizeBufferProps(e);return new bg(this,t)}createTexture(e){return new qg(this,e)}createExternalTexture(e){throw Error(`ExternalTexture is not available on WebGL`)}createSampler(e){return new Vg(this,e)}createShader(e){return new Tg(this,e)}createFramebuffer(e){return new pg(this,e)}createVertexArray(e){return new B_(this,e)}createTransformFeedback(e){return new U_(this,e)}createQuerySet(e){return new G_(this,e)}createFence(){return new K_(this)}createRenderPipeline(e){return new S_(this,e)}_createSharedRenderPipelineWebGL(e){return new D_(this,e)}createComputePipeline(e){throw Error(`ComputePipeline not supported in WebGL`)}createRenderBundleEncoder(e){throw Error(`Render bundles are only supported in WebGPU`)}createCommandEncoder(e={}){return new R_(this,e)}submit(e){let t=null;e||({submittedCommandEncoder:t,commandBuffer:e}=this._finalizeDefaultCommandEncoderForSubmit());try{e._executeCommands(),t&&t.resolveTimeProfilingQuerySet().then(()=>{this.commandEncoder._gpuTimeMs=t._gpuTimeMs}).catch(()=>{})}finally{e.destroy()}}writeBufferViaCommandEncoder(e,t,n,r=0){t.write(n,r)}_finalizeDefaultCommandEncoderForSubmit(){let e=this.commandEncoder,t=e.finish();return this.commandEncoder.destroy(),this.commandEncoder=this.createCommandEncoder({id:e.props.id,timeProfilingQuerySet:e.getTimeProfilingQuerySet()}),{submittedCommandEncoder:e,commandBuffer:t}}readPixelsToArrayWebGL(e,t){return Y_(e,t)}readPixelsToBufferWebGL(e,t){return X_(e,t)}setParametersWebGL(e){gh(this.gl,e)}getParametersWebGL(e){return _h(this.gl,e)}withParametersWebGL(e,t){return Hg(this.gl,e,t)}resetWebGL(){w.warn(`WebGLDevice.resetWebGL is deprecated, use only for debugging`)(),vh(this.gl)}_getDeviceSpecificTextureFormatCapabilities(e){return ig(this.gl,e,this.extensions)}loseDevice(){let e=!1,t=this.getExtension(`WEBGL_lose_context`).WEBGL_lose_context;return t&&(e=!0,t.loseContext()),this._resolveContextLost?.({reason:`destroyed`,message:`Application triggered context loss`}),e}pushState(){Sh.get(this.gl).push()}popState(){Sh.get(this.gl).pop()}getGLKey(e,t){return this._getGLKeyByValue().get(Number(e))||(t?.emptyIfUnknown?``:String(e))}getGLKeys(e){let t={emptyIfUnknown:!0};return Object.entries(e).reduce((e,[n,r])=>(e[`${n}:${this.getGLKey(n,t)}`]=`${r}:${this.getGLKey(r,t)}`,e),{})}_getGLKeyByValue(){return this._glKeyByValue??=ev(this.gl),this._glKeyByValue}setConstantAttributeWebGL(e,t){let n=this.limits.maxVertexAttributes;this._constants=this._constants||Array(n).fill(null);let r=this._constants[e];switch(r&&ov(r,t)&&w.info(1,`setConstantAttributeWebGL(${e}) could have been skipped, value unchanged`)(),this._constants[e]=t,t.constructor){case Float32Array:rv(this,e,t);break;case Int32Array:iv(this,e,t);break;case Uint32Array:av(this,e,t);break;default:throw Error(`constant`)}}getExtension(e){return Oh(this.gl,e,this.extensions),this.extensions}_setWebGLDebugMetadata(e,t,n){e.luma=t,e.__SPECTOR_Metadata={props:n.spector,id:n.spector.id}}};function rv(e,t,n){switch(n.length){case 1:e.gl.vertexAttrib1fv(t,n);break;case 2:e.gl.vertexAttrib2fv(t,n);break;case 3:e.gl.vertexAttrib3fv(t,n);break;case 4:e.gl.vertexAttrib4fv(t,n)}}function iv(e,t,n){e.gl.vertexAttribI4iv(t,n)}function av(e,t,n){e.gl.vertexAttribI4uiv(t,n)}function ov(e,t){if(!e||!t||e.length!==t.length||e.constructor!==t.constructor)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}function sv(){}var cv=({isDragging:e})=>e?`grabbing`:`grab`;function lv(e){return e.deviceProps?.debug??e.debug}var uv={id:``,width:`100%`,height:`100%`,style:null,viewState:null,initialViewState:null,pickingRadius:0,pickAsync:`auto`,layerFilter:null,parameters:{},parent:null,device:null,deviceProps:{},gl:null,canvas:null,_canvases:null,layers:[],effects:[],views:null,controller:null,useDevicePixels:!0,touchAction:`none`,eventRecognizerOptions:{},_framebuffer:null,_animate:!1,_pickable:!0,_typedArrayManagerProps:{},_customRender:null,widgets:[],onDeviceInitialized:sv,onWebGLInitialized:sv,onResize:sv,onViewStateChange:sv,onInteractionStateChange:sv,onBeforeRender:sv,onAfterRender:sv,onLoad:sv,onError:e=>z.error(e.message,e.cause)(),onHover:null,onClick:null,onDragStart:null,onDrag:null,onDragEnd:null,_onMetrics:null,getCursor:cv,getTooltip:null,debug:!1,drawPickingColors:!1},dv=class{constructor(e){this.width=0,this.height=0,this.userData={},this.device=null,this.canvas=null,this.viewManager=null,this.layerManager=null,this.effectManager=null,this.deckRenderer=null,this.deckPicker=null,this.eventManager=null,this.eventManagers={},this.widgetManager=null,this.tooltip=null,this.animationLoop=null,this._canvasContext=null,this._deviceResizeHandler=null,this.cursorState={isHovering:!1,isDragging:!1},this.stats=new sn({id:`deck.gl`}),this.metrics={fps:0,setPropsTime:0,layersCount:0,drawLayersCount:0,updateLayersCount:0,updateAttributesCount:0,updateAttributesTime:0,framesRedrawn:0,pickTime:0,pickCount:0,pickLayersCount:0,gpuTime:0,gpuTimePerFrame:0,cpuTime:0,cpuTimePerFrame:0,bufferMemory:0,textureMemory:0,renderbufferMemory:0,gpuMemory:0},this._metricsCounter=0,this._hoverPickSequence=0,this._pointerDownPickSequence=0,this._needsRedraw=`Initial render`,this._canvasManager=new Rm({createEventManager:e=>this._createEventManager(e),getEventRoot:e=>this._getEventRoot(e)}),this._ownedCanvas=null,this._pickRequest={mode:`hover`,x:-1,y:-1,radius:0,canvasId:void 0,event:null,unproject3D:!1},this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=null,this._onPointerMove=e=>{let{_pickRequest:t}=this,n=this._getCanvasIdFromEvent(e);if(e.type===`pointerleave`)t.x=-1,t.y=-1,t.radius=0,t.canvasId=n;else if(e.leftButton||e.rightButton)return;else{let r=e.offsetCenter;if(!r)return;t.x=r.x,t.y=r.y,t.radius=this.props.pickingRadius,t.canvasId=n}this.layerManager&&(this.layerManager.context.mousePosition={x:t.x,y:t.y}),t.event=e},this._onEvent=e=>{let t=Bl[e.type],n=e.offsetCenter,r=this._getCanvasIdFromEvent(e);if(!t||!n||!this.layerManager)return;let i=this.layerManager.getLayers(),a=this._getInternalPickingMode();if(a){if(a===`sync`){let t=e.type===`click`&&this._shouldUnproject3D(i)?this._getFirstPickedInfo(this._pickPointSync(this._getPointPickOptions(n.x,n.y,{unproject3D:!0,canvasId:r},i))):this._getLastPointerDownPickingInfo(n.x,n.y,r,i);this._dispatchPickingEvent(t,e)}else(this._lastPointerDownInfoPromise||Promise.resolve(this._getLastPointerDownPickingInfo(n.x,n.y,r,i))).then(t=>{this._dispatchPickingEvent(t,e)}).catch(e=>this.props.onError?.(e))}},this._onPointerDown=e=>{let t=e.offsetCenter,n=this._getCanvasIdFromEvent(e);if(!t)return;let r=this._getInternalPickingMode();if(!r)return;let i=this.layerManager?.getLayers()||[],a=++this._pointerDownPickSequence;if(r===`sync`){let e=this._pickPointSync({x:t.x,y:t.y,canvasId:n,radius:this.props.pickingRadius}),r=this._getFirstPickedInfo(e);this._lastPointerDownInfo=r,this._lastPointerDownInfoPromise=Promise.resolve(r);return}let o=this._pickPointAsync(this._getPointPickOptions(t.x,t.y,{canvasId:n},i)).then(e=>this._getFirstPickedInfo(e)).then(e=>(a===this._pointerDownPickSequence&&(this._lastPointerDownInfo=e),e)).catch(e=>{this.props.onError?.(e);let r=this.deckPicker&&this.viewManager?this._getLastPointerDownPickingInfo(t.x,t.y,n,i):{};return a===this._pointerDownPickSequence&&(this._lastPointerDownInfo=r),r});this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=o};let t=e;this.props={...uv,...e},e=this.props,this._validateCanvasConfiguration(e),e.viewState&&e.initialViewState&&z.warn("View state tracking is disabled. Use either `initialViewState` for auto update or `viewState` for manual update.")(),this.viewState=this.props.initialViewState,e.device&&(this.device=e.device,this._setDeviceCanvasContext(e.device));let n=this.device;!n&&e.gl&&(e.gl instanceof WebGLRenderingContext&&z.error(`WebGL1 context not supported.`)(),n=th.attach(e.gl,{_cacheShaders:!0,_cachePipelines:!0,...e.deviceProps,debug:lv(e)})),n||=this._createDevice(e),this.animationLoop=this._createAnimationLoop(n,e),this.setProps(t),e._typedArrayManagerProps&&Ad.setOptions(e._typedArrayManagerProps),this.animationLoop.start()}finalize(){this._restoreDeviceResizeHandler(),this.animationLoop?.stop(),this.animationLoop?.destroy(),this.animationLoop=null,this._hoverPickSequence++,this._pointerDownPickSequence++,this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=null,this.layerManager?.finalize(),this.layerManager=null,this.viewManager?.finalize(),this.viewManager=null,this.effectManager?.finalize(),this.effectManager=null,this.deckRenderer?.finalize(),this.deckRenderer=null,this.deckPicker?.finalize(),this.deckPicker=null,Object.keys(this._canvasManager.targets).length||this.eventManager?.destroy(),this.eventManager=null,this.eventManagers={},this.widgetManager?.finalize(),this.widgetManager=null,this._canvasManager.finalize(),this._isMultiCanvasMode()?this.canvas=null:this.canvas&&this.canvas===this._ownedCanvas&&(this.canvas.parentElement?.removeChild(this.canvas),this.canvas=null,this._ownedCanvas=null),this._canvasContext=null}setProps(e){this.stats.get(`setProps Time`).timeStart(),`onLayerHover`in e&&z.removed(`onLayerHover`,`onHover`)(),`onLayerClick`in e&&z.removed(`onLayerClick`,`onClick`)(),e.initialViewState&&!G(this.props.initialViewState,e.initialViewState,3)&&(this.viewState=e.initialViewState),K(!(`_canvases`in e)||Array.isArray(e._canvases)===this._isMultiCanvasMode()),Object.assign(this.props,e),this._validateCanvasConfiguration(this.props),this._validateInternalPickingMode(),this.device&&this._isMultiCanvasMode()&&this._syncCanvasTargets(),this._setCanvasSize(this.props);let t=Object.create(this.props);if(Object.assign(t,{views:this._getViews(),width:this.width,height:this.height,viewState:this._getViewState(),eventManagers:this.eventManagers}),e.device&&e.device.id!==this.device?.id){let t=e.device.getDefaultCanvasContext();this.animationLoop?.stop(),!this._isMultiCanvasMode()&&this.canvas!==t.canvas&&(this.canvas?.remove(),this.eventManager?.destroy(),this.canvas=null),this._setDeviceCanvasContext(e.device),z.log(`recreating animation loop for new device! id=${e.device.id}`)(),this.animationLoop=this._createAnimationLoop(e.device,e),this.animationLoop.start()}if(this.animationLoop?.setProps(t),e.useDevicePixels!==void 0&&this._canvasContext?.setProps){this._canvasContext.setProps({useDevicePixels:e.useDevicePixels});for(let t of Object.values(this._canvasManager.targets))t.presentationContext.setProps({useDevicePixels:e.useDevicePixels})}this.layerManager&&(this.viewManager.setProps(t),this.layerManager.activateViewport(this.getViewports()[0]),this.layerManager.setProps(t),this.effectManager.setProps(t),this.deckRenderer.setProps(t),this.deckPicker.setProps(t),this.widgetManager.setProps(t)),this.stats.get(`setProps Time`).timeEnd()}needsRedraw(e={clearRedrawFlags:!1}){if(!this.layerManager)return!1;if(this.props._animate)return`Deck._animate`;let t=this._needsRedraw;e.clearRedrawFlags&&(this._needsRedraw=!1);let n=this.viewManager.needsRedraw(e),r=this.layerManager.needsRedraw(e),i=this.effectManager.needsRedraw(e),a=this.deckRenderer.needsRedraw(e);return t=t||n||r||i||a,t}redraw(e){if(!this.layerManager)return;let t=this.needsRedraw({clearRedrawFlags:!0});t=e||t,t&&(this.stats.get(`Redraw Count`).incrementCount(),this.props._customRender?this.props._customRender(t):this._drawLayers(t))}get isInitialized(){return this.viewManager!==null}getViews(){return K(this.viewManager),this.viewManager.views}getView(e){return K(this.viewManager),this.viewManager.getView(e)}getViewports(e){return K(this.viewManager),this.viewManager.getViewports(e)}getCanvas(){return this.canvas}getCanvasContext(e){let t=e?this.viewManager?.getView(e)?.props.canvasId:void 0;return this._getCanvasContext(t)}getEventManager(e){if(!e||!this.viewManager)return this.eventManager;let t=this.viewManager.getCanvasId(e)||`default-canvas`;return this.eventManagers[t]||this.eventManager}async pickObjectAsync(e){let t=(await this._pickAsync(`pickObjectAsync`,`pickObject Time`,e)).result;return t.length?t[0]:null}async pickObjectsAsync(e){return await this._pickAsync(`pickObjectsAsync`,`pickObjects Time`,e)}pickObject(e){let t=this._pick(`pickObject`,`pickObject Time`,e).result;return t.length?t[0]:null}pickMultipleObjects(e){return e.depth=e.depth||10,this._pick(`pickObject`,`pickMultipleObjects Time`,e).result}pickObjects(e){return this._pick(`pickObjects`,`pickObjects Time`,e)}_pickPositionForController(e,t,n){return this._getInternalPickingMode()===`sync`?this.pickObject({x:e,y:t,radius:0,unproject3D:!0,canvasId:n?this.viewManager?.getCanvasId(n):void 0}):null}_addResources(e,t=!1){for(let n in e)this.layerManager.resourceManager.add({resourceId:n,data:e[n],forceUpdate:t})}_removeResources(e){for(let t of e)this.layerManager.resourceManager.remove(t)}_addDefaultEffect(e){this.effectManager.addDefaultEffect(e)}_addDefaultShaderModule(e){this.layerManager.addDefaultShaderModule(e)}_removeDefaultShaderModule(e){this.layerManager?.removeDefaultShaderModule(e)}_resolveInternalPickingMode(){let{pickAsync:e}=this.props,t=this.device?.type||this.props.deviceProps?.type;if(e===`auto`)return t===`webgpu`?`async`:`sync`;if(e===`sync`&&t===`webgpu`)throw Error('`pickAsync: "sync"` is not supported when Deck is using a WebGPU device.');return e}_getInternalPickingMode(){try{return this._resolveInternalPickingMode()}catch(e){return this.props.onError?.(e),null}}_validateInternalPickingMode(){this._getInternalPickingMode()}_getFirstPickedInfo({result:e,emptyInfo:t}){return e[0]||t}_shouldUnproject3D(e=this.layerManager?.getLayers()||[]){return e.some(e=>e.props.pickable===`3d`)}_getPointPickOptions(e,t,n={},r=this.layerManager?.getLayers()||[]){return{x:e,y:t,canvasId:n.canvasId,radius:this.props.pickingRadius,unproject3D:this._shouldUnproject3D(r),...n}}_pickPointSync(e){return this._pick(`pickObject`,`pickObject Time`,e)}_pickPointAsync(e){return this._pickAsync(`pickObjectAsync`,`pickObject Time`,e)}_getLastPointerDownPickingInfo(e,t,n,r=this.layerManager?.getLayers()||[]){return this.deckPicker.getLastPickedObject({x:e,y:t,layers:r,viewports:this.getViewports({x:e,y:t,canvasId:n})},this._lastPointerDownInfo)}_applyHoverCallbacks({result:e,emptyInfo:t},n){if(!this.widgetManager)return;this.cursorState.isHovering=e.length>0;let r=t,i=!1;for(let t of e)r=t,i=t.layer?.onHover(t,n)||i;i||(this.props.onHover?.(r,n),this.widgetManager.onHover(r,n))}_dispatchPickingEvent(e,t){if(!this.layerManager||!this.widgetManager)return;let n=Bl[t.type];if(!n)return;let{layer:r}=e,i=r&&(r[n]||r.props[n]),a=this.props[n],o=!1;i&&(o=i.call(r,e,t)),o||(a?.(e,t),this.widgetManager.onEvent(e,t))}_pickAsync(e,t,n){K(this.deckPicker);let{stats:r}=this,i=this._isMultiCanvasMode()?n.canvasId||this._getDefaultCanvasId():n.canvasId,a=this._getCanvasContext(i)||void 0;r.get(`Pick Count`).incrementCount(),r.get(t).timeStart(),this._resizeForCanvasTarget(i);let o=this.deckPicker[e]({layers:this.layerManager.getLayers(n),views:this.viewManager.getViews(),viewports:this.getViewports({...n,canvasId:i}),onViewportActive:this.layerManager.activateViewport,effects:this.effectManager.getEffects(),...n,canvasId:i,canvasContext:a});return r.get(t).timeEnd(),o}_pick(e,t,n){K(this.deckPicker);let{stats:r}=this,i=this._isMultiCanvasMode()?n.canvasId||this._getDefaultCanvasId():n.canvasId,a=this._getCanvasContext(i)||void 0;r.get(`Pick Count`).incrementCount(),r.get(t).timeStart(),this._resizeForCanvasTarget(i);let o=this.deckPicker[e]({layers:this.layerManager.getLayers(n),views:this.viewManager.getViews(),viewports:this.getViewports({...n,canvasId:i}),onViewportActive:this.layerManager.activateViewport,effects:this.effectManager.getEffects(),...n,canvasId:i,canvasContext:a});return r.get(t).timeEnd(),o}_createCanvas(e){let t=e.canvas;return typeof t==`string`&&(t=document.getElementById(t),K(t)),t?this._ownedCanvas=null:(t=document.createElement(`canvas`),t.id=e.id||`deckgl-overlay`,e.width&&typeof e.width==`number`&&(t.width=e.width),e.height&&typeof e.height==`number`&&(t.height=e.height),(e.parent||document.body).appendChild(t),this._ownedCanvas=t),Object.assign(t.style,e.style),t}_isMultiCanvasMode(){return Array.isArray(this.props._canvases)}_getDefaultCanvasId(){return this._canvasManager.order[0]||`default-canvas`}_validateCanvasConfiguration(e){Array.isArray(e._canvases)&&(K(!e.canvas),K(!e.gl),K(!e.device?.canvasContext||e.device.getDefaultCanvasContext().offscreenCanvas))}_createEventManager(e){let t=new Il(e,{touchAction:this.props.touchAction,recognizers:Object.keys(Vl).map(e=>{let[t,n,r,i]=Vl[e],a=this.props.eventRecognizerOptions?.[e];return{recognizer:new t({...n,...a,event:e}),recognizeWith:r,requireFailure:i}}),events:{pointerdown:this._onPointerDown,pointermove:this._onPointerMove,pointerleave:this._onPointerMove}});for(let e in Bl)e===`dblclick`?t.watch(e,this._onEvent):t.on(e,this._onEvent);return t}_getEventRoot(e){return e.closest(`.deck-events-root`)||this.props.parent?.querySelector(`.deck-events-root`)||e}_syncCanvasTargets(){if(!this.device||!this._isMultiCanvasMode())return;this._canvasManager.syncCanvasEntries({device:this.device,canvases:this.props._canvases||[],useDevicePixels:this.props.useDevicePixels}),this.eventManagers=this._canvasManager.eventManagers;let e=this._getDefaultCanvasId();this.eventManager=this.eventManagers[e]||null,this.canvas=this._canvasManager.targets[e]?.canvas||null}_setCanvasContext(e){this._canvasContext=e,`style`in e.canvas&&(this.canvas=e.canvas)}_setDeviceCanvasContext(e,t={}){let n=e.getDefaultCanvasContext();this._setCanvasContext(n),this._setDeviceResizeHandler(e,t)}_setDeviceResizeHandler(e,t={}){let n=!!t.syncDrawingBuffer;if(this._deviceResizeHandler?.device===e){this._deviceResizeHandler.syncDrawingBuffer=n;return}this._restoreDeviceResizeHandler();let r=e=>{this._isMultiCanvasMode()?this._updateMultiCanvasDimensions():e===this._canvasContext&&this._canvasContext&&this._onCanvasContextResize(this._canvasContext,{syncDrawingBuffer:this._deviceResizeHandler?.syncDrawingBuffer})};e.props.onResize=r,this._deviceResizeHandler={device:e,onResize:r,syncDrawingBuffer:n}}_restoreDeviceResizeHandler(){let e=this._deviceResizeHandler;e&&e.device.props?.onResize===e.onResize&&(e.device.props.onResize=sv),this._deviceResizeHandler=null}_setCanvasSize(e){if(this._isMultiCanvasMode()||!this.canvas)return;let{width:t,height:n}=e;if(t||t===0){let e=Number.isFinite(t)?`${t}px`:t;this.canvas.style.width=e}if(n||n===0){let t=Number.isFinite(n)?`${n}px`:n;this.canvas.style.position=e.style?.position||`absolute`,this.canvas.style.height=t}}_getCanvasIdFromEvent(e){return this._canvasManager.getCanvasIdFromEvent(e?.rootElement)}_getCanvasContext(e){return this._canvasManager.getTarget(e)?.presentationContext||this._canvasContext}_resizeForCanvasTarget(e){let t=this._canvasManager.getTarget(e);if(!t||!this.device?.canvasContext)return;let[n,r]=t.presentationContext.getDrawingBufferSize();this.device.canvasContext.setDrawingBufferSize(n,r)}_createDeviceCanvas(e){if(this._isMultiCanvasMode()){let t=globalThis.OffscreenCanvas;if(!t)throw Error("`_canvases` requires OffscreenCanvas support.");return new t(typeof e.width==`number`&&Number.isFinite(e.width)?e.width:1,typeof e.height==`number`&&Number.isFinite(e.height)?e.height:1)}return this._createCanvas(e)}_updateCanvasSize(e=this._canvasContext){if(this._isMultiCanvasMode()){this._updateMultiCanvasDimensions();return}let{canvas:t}=this,[n,r]=e?e.getCSSSize():[t?.clientWidth??t?.width??0,t?.clientHeight??t?.height??0];(n!==this.width||r!==this.height)&&(this.width=n,this.height=r,this.viewManager?.setProps({width:n,height:r}),this.layerManager?.activateViewport(this.getViewports()[0]),this.props.onResize({width:n,height:r},e||void 0))}_onCanvasContextResize(e,t={}){if(t.syncDrawingBuffer){let{width:t,height:n}=e.canvas;e.setDrawingBufferSize(t,n)}this._needsRedraw=`Canvas resized`,this._updateCanvasSize(e)}_updateMultiCanvasDimensions(){let[e,t]=this._getCanvasContext()?.getCSSSize()||[0,0];(e!==this.width||t!==this.height)&&(this.width=e,this.height=t,this.props.onResize({width:e,height:t})),this._needsRedraw=`Canvas resized`,this.viewManager?.setNeedsUpdate(`Canvas resized`),this.viewManager?.setProps({width:this.width,height:this.height})}_createAnimationLoop(e,t){let{gl:n,onError:r}=t;return new gf({device:e,autoResizeDrawingBuffer:!n&&!Array.isArray(t._canvases),autoResizeViewport:!1,onInitialize:e=>this._setDevice(e.device),onRender:this._onRenderFrame.bind(this),onError:r})}_createDevice(e){let t=this.props.deviceProps?.createCanvasContext,n=typeof t==`object`?t:void 0,r={adapters:[],_cacheShaders:!0,_cachePipelines:!0,...e.deviceProps,debug:lv(e)};r.adapters.includes(th)||r.adapters.push(th);let i={alphaMode:this.props.deviceProps?.type===`webgpu`?`premultiplied`:void 0};return Xi.createDevice({_reuseDevices:!0,type:`webgl`,...r,createCanvasContext:{...i,...n,canvas:this._createDeviceCanvas(e),useDevicePixels:this.props.useDevicePixels,autoResize:!0}})}_getViewState(){return this.props.viewState||this.viewState}_getViews(){let{views:e}=this.props,t=Array.isArray(e)?e:e?[e]:[new mm({id:`default-view`})];return t.length&&this.props.controller&&(t[0]=t[0].clone({controller:this.props.controller})),t}_onContextLost(){let{onError:e}=this.props;this.animationLoop&&e&&e(Error(`WebGL context is lost`))}_pickAndCallback(){let{_pickRequest:e}=this;if(e.event){let t=e.event,n=this.layerManager?.getLayers()||[],r=this._getPointPickOptions(e.x,e.y,{canvasId:e.canvasId,radius:e.radius,mode:e.mode},n),i=this._getInternalPickingMode(),a=++this._hoverPickSequence;if(e.event=null,e.canvasId=void 0,!i)return;if(i===`sync`){this._applyHoverCallbacks(this._pickPointSync(r),t);return}this._pickPointAsync(r).then(({result:e,emptyInfo:n})=>{a===this._hoverPickSequence&&this._applyHoverCallbacks({result:e,emptyInfo:n},t)}).catch(e=>this.props.onError?.(e))}}_updateCursor(){let e=this.props.getCursor(this.cursorState);if(this._isMultiCanvasMode()){for(let t of Object.values(this._canvasManager.targets))t.canvas.style.cursor=e;return}let t=this.props.parent||this.canvas;t&&(t.style.cursor=e)}_setDevice(e){if(this.device=e,this._validateInternalPickingMode(),!this.animationLoop)return;this._setDeviceCanvasContext(e,{syncDrawingBuffer:!!(this.props.gl&&this.props.device!==e)}),this._isMultiCanvasMode()?this._syncCanvasTargets():this.canvas&&!this.canvas.isConnected&&this.props.parent&&this.props.parent.insertBefore(this.canvas,this.props.parent.firstChild),this.device.type===`webgl`&&this.device.setParametersWebGL({blend:!0,blendFunc:[770,771,1,771],polygonOffsetFill:!0,depthTest:!0,depthFunc:515}),this.props.onDeviceInitialized(this.device),this.device.type===`webgl`&&this.props.onWebGLInitialized(this.device.gl);let t=new uf;if(t.play(),this.animationLoop.attachTimeline(t),!this._isMultiCanvasMode()){let e=this.canvas&&this._getEventRoot(this.canvas);K(e),this.eventManager=this._createEventManager(e),this.eventManagers={[xp]:this.eventManager}}this.viewManager=new Sp({timeline:t,eventManager:this.eventManager,eventManagers:this.eventManagers,getCanvasContext:this._isMultiCanvasMode()?this.getCanvasContext.bind(this):void 0,onViewStateChange:this._onViewStateChange.bind(this),onInteractionStateChange:this._onInteractionStateChange.bind(this),pickPosition:this._pickPositionForController.bind(this),views:this._getViews(),viewState:this._getViewState(),width:this.width,height:this.height});let n=this.viewManager.getViewports()[0];this.layerManager=new bp(this.device,{deck:this,stats:this.stats,viewport:n,timeline:t}),this.effectManager=new _m({deck:this,device:this.device}),this.deckRenderer=new bm(this.device,{stats:this.stats}),this.deckPicker=new Om(this.device,{stats:this.stats});let r=this.props.parent?.querySelector(`.deck-widgets-root`)||(this._isMultiCanvasMode()?this.props.parent||this.canvas?.parentElement:null)||this.canvas?.parentElement;this.widgetManager=new Mm({deck:this,parentElement:r}),this.widgetManager.addDefault(new Lm),this.setProps({}),this._updateCanvasSize(this._canvasContext),this.props.onLoad()}_drawLayers(e,t){let{device:n,gl:r}=this.layerManager.context;this.props.onBeforeRender({device:n,gl:r});let i={target:this.props._framebuffer,layers:this.layerManager.getLayers(),viewports:this.viewManager.getViewports(),onViewportActive:this.layerManager.activateViewport,views:this.viewManager.getViews(),pass:`screen`,effects:this.effectManager.getEffects(),...t};if(this._isMultiCanvasMode()&&i.pass===`screen`&&!i.target&&this._canvasManager.order.length)for(let e of this._canvasManager.order){let t=i.viewports.filter(t=>this.viewManager.getCanvasId(t.id)===e);if(!t.length){let t=this._canvasManager.targets[e];this._resizeForCanvasTarget(e),this.deckRenderer?.renderLayers({...i,canvasContext:t.presentationContext,target:t.presentationContext.getCurrentFramebuffer(),viewports:[],clearCanvas:!0}),t.presentationContext.present();continue}let n=this._canvasManager.targets[e];this._resizeForCanvasTarget(e);let r=n.presentationContext.getCurrentFramebuffer();this.deckRenderer?.renderLayers({...i,canvasContext:n.presentationContext,target:r,viewports:t}),n.presentationContext.present()}else this.deckRenderer?.renderLayers(i);i.pass===`screen`&&this.widgetManager.onRedraw({viewports:i.viewports,layers:i.layers}),this.props.onAfterRender({device:n,gl:r})}_onRenderFrame(){this._getFrameStats(),this._metricsCounter++%60==0&&(this._getMetrics(),this.stats.reset(),z.table(4,this.metrics)(),this.props._onMetrics&&this.props._onMetrics(this.metrics)),this._updateCursor(),this.layerManager.updateLayers(),this._pickAndCallback(),this.redraw(),this.viewManager&&this.viewManager.updateViewStates()}_onViewStateChange(e){let t=this.props.onViewStateChange(e)||e.viewState;this.viewState&&(this.viewState={...this.viewState,[e.viewId]:t},this.props.viewState||this.viewManager&&this.viewManager.setProps({viewState:this.viewState}))}_onInteractionStateChange(e){this.cursorState.isDragging=e.isDragging||!1,this.props.onInteractionStateChange(e)}_getFrameStats(){let{stats:e}=this;e.get(`frameRate`).timeEnd(),e.get(`frameRate`).timeStart();let t=this.animationLoop.stats;e.get(`GPU Time`).addTime(t.get(`GPU Time`).lastTiming),e.get(`CPU Time`).addTime(t.get(`CPU Time`).lastTiming)}_getMetrics(){let{metrics:e,stats:t}=this;e.fps=t.get(`frameRate`).getHz(),e.setPropsTime=t.get(`setProps Time`).time,e.updateAttributesTime=t.get(`Update Attributes`).time,e.framesRedrawn=t.get(`Redraw Count`).count,e.pickTime=t.get(`pickObject Time`).time+t.get(`pickMultipleObjects Time`).time+t.get(`pickObjects Time`).time,e.pickCount=t.get(`Pick Count`).count,e.layersCount=this.layerManager?.layers.length??0,e.drawLayersCount=t.get(`Layers rendered`).lastSampleCount,e.pickLayersCount=t.get(`Layers picked`).lastSampleCount,e.updateLayersCount=t.get(`Layer updates`).count,e.updateAttributesCount=t.get(`Attributes updated`).count,e.gpuTime=t.get(`GPU Time`).time,e.cpuTime=t.get(`CPU Time`).time,e.gpuTimePerFrame=t.get(`GPU Time`).getAverageTime(),e.cpuTimePerFrame=t.get(`CPU Time`).getAverageTime();let n=Xi.stats.get(`GPU Time and Memory`);e.bufferMemory=n.get(`Buffer Memory`).count,e.textureMemory=n.get(`Texture Memory`).count,e.renderbufferMemory=n.get(`Renderbuffer Memory`).count,e.gpuMemory=n.get(`GPU Memory`).count}};dv.defaultProps=uv,dv.VERSION=Li;function fv(e){switch(e){case`float64`:return Float64Array;case`uint8`:case`unorm8`:return Uint8ClampedArray;default:return O(e)}}var pv=j.getDataType.bind(j);function mv(e,t,n){if(t.size>4)return null;let r=n===`webgpu`&&t.type===`uint8`?`unorm8`:t.type,i=t.size,a=!!(n!==`webgpu`&&i===3&&r&&[`uint8`,`sint8`,`unorm8`,`snorm8`,`uint16`,`sint16`,`unorm16`,`snorm16`].includes(r));return{attribute:e,format:i>1?`${r}x${i}${a?`-webgl`:``}`:t.type,byteOffset:t.offset||0}}function hv(e){return e.stride||e.size*e.bytesPerElement}function gv(e,t){return e.type===t.type&&e.size===t.size&&hv(e)===hv(t)&&(e.offset||0)===(t.offset||0)}function _v(e,t){t.offset&&z.removed(`shaderAttribute.offset`,`vertexOffset, elementOffset`)();let n=hv(e),r=t.vertexOffset===void 0?e.vertexOffset||0:t.vertexOffset,i=t.elementOffset||0,a=r*n+i*e.bytesPerElement+(e.offset||0);return{...t,offset:a,stride:n}}function vv(e,t){let n=_v(e,t);return{high:n,low:{...n,offset:n.offset+e.size*4}}}var yv=class{constructor(e,t,n){this._buffer=null,this.device=e,this.id=t.id||``,this.size=t.size||1;let r=t.logicalType||t.type,i=r===`float64`,{defaultValue:a}=t;a=Number.isFinite(a)?[a]:a||Array(this.size).fill(0);let o;o=i?`float32`:!r&&t.isIndexed?`uint32`:r||`float32`;let s=fv(r||o);this.doublePrecision=i,i&&t.fp64===!1&&(s=Float32Array),this.value=null,this.settings={...t,defaultType:s,defaultValue:a,logicalType:r,type:o,normalized:o.includes(`norm`),size:this.size,bytesPerElement:s.BYTES_PER_ELEMENT},this.state={...n,externalBuffer:null,bufferAccessor:this.settings,allocatedValue:null,numInstances:0,bounds:null,constant:!1}}get isConstant(){return this.state.constant}get buffer(){return this._buffer}get byteOffset(){let e=this.getAccessor();return e.vertexOffset?e.vertexOffset*hv(e):0}get numInstances(){return this.state.numInstances}set numInstances(e){this.state.numInstances=e}get isDoublePrecisionBuffer(){return this._shouldSplitDoublePrecisionValue(this.value)}delete(){this._buffer&&=(this._buffer.delete(),null),Ad.release(this.state.allocatedValue),this.state.allocatedValue=null}getBuffer(){return this.state.constant&&this.device.type!==`webgpu`?null:this.state.externalBuffer||this._buffer}getValue(e=this.id,t=null){let n={};if(this.state.constant){let r=this.value;if(this.device.type===`webgpu`&&this._buffer)n[e]=this._buffer;else if(t){let i=_v(this.getAccessor(),t),a=i.offset/r.BYTES_PER_ELEMENT,o=i.size||this.size;n[e]=r.subarray(a,a+o)}else n[e]=r}else n[e]=this.getBuffer();return this.doublePrecision&&(this.isDoublePrecisionBuffer?n[`${e}64Low`]=n[e]:n[`${e}64Low`]=new Float32Array(this.size)),n}_getBufferLayout(e=this.id,t=null){let n=this.getAccessor(),r=[],i={name:this.id,byteStride:this.device.type===`webgpu`&&this.state.constant?0:hv(n)};if(this.doublePrecision){let i=vv(n,t||{});r.push(mv(e,{...n,...i.high},this.device.type),mv(`${e}64Low`,{...n,...i.low},this.device.type))}else if(t){let i=_v(n,t);r.push(mv(e,{...n,...i},this.device.type))}else r.push(mv(e,n,this.device.type));return i.attributes=r.filter(Boolean),i}setAccessor(e){this.state.bufferAccessor=e}getAccessor(){return this.state.bufferAccessor}getBounds(){if(this.state.bounds)return this.state.bounds;let e=null;if(this.state.constant&&this.value){let t=Array.from(this.value);e=[t,t]}else{let{value:t,numInstances:n,size:r}=this,i=n*r;if(t&&i&&t.length>=i){let n=Array(r).fill(1/0),a=Array(r).fill(-1/0);for(let e=0;e<i;)for(let i=0;i<r;i++){let r=t[e++];r<n[i]&&(n[i]=r),r>a[i]&&(a[i]=r)}e=[n,a]}}return this.state.bounds=e,e}setData(e){let{state:t}=this,n;n=ArrayBuffer.isView(e)?{value:e}:e instanceof S?{buffer:e}:e;let r={...this.settings,...n};if(ArrayBuffer.isView(n.value)){if(!n.type){if(this.doublePrecision&&n.value instanceof Float64Array)r.type=`float32`;else{let e=pv(n.value);r.type=r.normalized?e.replace(`int`,`norm`):e}}r.bytesPerElement=n.value.BYTES_PER_ELEMENT,r.stride=hv(r)}if(t.bounds=null,n.constant){let e=n.value;if(e=this._normalizeValue(e,[],0),this.settings.normalized&&(e=this.normalizeConstant(e)),t.constant&&this._areValuesEqual(e,this.value))return!1;t.externalBuffer=null,t.constant=!0,this.value=ArrayBuffer.isView(e)?e:new Float32Array(e)}else if(n.buffer)t.externalBuffer=n.buffer,t.constant=!1,this.value=n.value||null;else if(n.value){this._checkExternalBuffer(n);let e=n.value,i=e;t.externalBuffer=null,t.constant=!1,this.value=e,this._shouldSplitDoublePrecisionValue(i)&&(i=zd(i,r),e instanceof Float32Array&&(r.stride=r.size*2*Float32Array.BYTES_PER_ELEMENT));let{buffer:a}=this,o=hv(r),s=(r.vertexOffset||0)*o;if(this.settings.isIndexed){let e=this.settings.defaultType;i.constructor!==e&&(i=new e(i))}let c=i.byteLength+s+o*2;(!a||a.byteLength<c)&&(a=this._createBuffer(c)),a.write(i,s)}return this.setAccessor(r),!0}updateSubBuffer(e={}){this.state.bounds=null;let t=this.value,{startOffset:n=0,endOffset:r}=e,i=this._shouldSplitDoublePrecisionValue(t);this.buffer.write(i?zd(t,{size:this.size,startIndex:n,endIndex:r}):t.subarray(n,r),n*(i?8:t.BYTES_PER_ELEMENT)+this.byteOffset)}allocate(e,t=!1){let{state:n}=this,r=n.allocatedValue,i=Ad.allocate(r,e+1,{size:this.size,type:this.settings.defaultType,copy:t});this.value=i;let a=this._shouldSplitDoublePrecisionValue(i),o=a&&i instanceof Float32Array?{...this.settings,stride:this.size*2*Float32Array.BYTES_PER_ELEMENT}:this.settings;this.setAccessor(o);let{byteOffset:s}=this,{buffer:c}=this,l=i.byteLength*(a&&i instanceof Float32Array?2:1);return(!c||c.byteLength<l+s)&&(c=this._createBuffer(l+s),t&&r&&c.write(this._shouldSplitDoublePrecisionValue(r)?zd(r,this):r,s)),n.allocatedValue=i,n.constant=!1,n.externalBuffer=null,!0}_shouldSplitDoublePrecisionValue(e){return!!(this.doublePrecision&&(e instanceof Float64Array||this.device.type===`webgpu`&&e instanceof Float32Array))}_checkExternalBuffer(e){let{value:t}=e;if(!ArrayBuffer.isView(t))throw Error(`Attribute ${this.id} value is not TypedArray`);let n=this.settings.defaultType,r=!1;if(this.doublePrecision&&(r=t.BYTES_PER_ELEMENT<4),r)throw Error(`Attribute ${this.id} does not support ${t.constructor.name}`);!(t instanceof n)&&this.settings.normalized&&!(`normalized`in e)&&z.warn(`Attribute ${this.id} is normalized`)()}normalizeConstant(e){switch(this.settings.type){case`snorm8`:return new Float32Array(e).map(e=>(e+128)/255*2-1);case`snorm16`:return new Float32Array(e).map(e=>(e+32768)/65535*2-1);case`unorm8`:return new Float32Array(e).map(e=>e/255);case`unorm16`:return new Float32Array(e).map(e=>e/65535);default:return e}}_normalizeValue(e,t,n){let{defaultValue:r,size:i}=this.settings;if(Number.isFinite(e))return t[n]=e,t;if(!e){let e=i;for(;--e>=0;)t[n+e]=r[e];return t}switch(i){case 4:t[n+3]=Number.isFinite(e[3])?e[3]:r[3];case 3:t[n+2]=Number.isFinite(e[2])?e[2]:r[2];case 2:t[n+1]=Number.isFinite(e[1])?e[1]:r[1];case 1:t[n+0]=Number.isFinite(e[0])?e[0]:r[0];break;default:let a=i;for(;--a>=0;)t[n+a]=Number.isFinite(e[a])?e[a]:r[a]}return t}_areValuesEqual(e,t){if(!e||!t)return!1;let{size:n}=this;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}_createBuffer(e){this._buffer&&this._buffer.destroy();let{isIndexed:t,type:n}=this.settings,r=this.device.type===`webgpu`&&!t?S.VERTEX|S.STORAGE|S.COPY_DST|S.COPY_SRC:(t?S.INDEX:S.VERTEX)|S.COPY_DST;return this._buffer=this.device.createBuffer({...this._buffer?.props,id:this.id,usage:r,indexType:t?n:void 0,byteLength:e}),this._buffer}},bv=[],xv=[];function Sv(e,t=0,n=1/0){let r=bv,i={index:-1,data:e,target:[]};return e?typeof e[Symbol.iterator]==`function`?r=e:e.length>0&&(xv.length=e.length,r=xv):r=bv,(t>0||Number.isFinite(n))&&(r=(Array.isArray(r)?r:Array.from(r)).slice(t,n),i.index=t-1),{iterable:r,objectInfo:i}}function Cv(e){return e&&e[Symbol.asyncIterator]}function wv(e,t){let{size:n,stride:r,offset:i,startIndices:a,nested:o}=t,s=e.BYTES_PER_ELEMENT,c=r?r/s:n,l=i?i/s:0,u=Math.floor((e.length-l)/c);return(t,{index:r,target:i})=>{if(!a){let t=r*c+l;for(let r=0;r<n;r++)i[r]=e[t+r];return i}let s=a[r],d=a[r+1]||u,f;if(o){f=Array(d-s);for(let t=s;t<d;t++){let r=t*c+l;i=Array(n);for(let t=0;t<n;t++)i[t]=e[r+t];f[t-s]=i}}else if(c===n)f=e.subarray(s*n+l,d*n+l);else{f=new e.constructor((d-s)*n);let t=0;for(let r=s;r<d;r++){let i=r*c+l;for(let r=0;r<n;r++)f[t++]=e[i+r]}}return f}}var Tv=[],Ev=[[0,1/0]];function Dv(e,t){if(e===Ev||(t[0]<0&&(t[0]=0),t[0]>=t[1]))return e;let n=[],r=e.length,i=0;for(let a=0;a<r;a++){let r=e[a];r[1]<t[0]?(n.push(r),i=a+1):r[0]>t[1]?n.push(r):t=[Math.min(r[0],t[0]),Math.max(r[1],t[1])]}return n.splice(i,0,t),n}var Ov={interpolation:{duration:0,easing:e=>e},spring:{stiffness:.05,damping:.5}};function kv(e,t){if(!e)return null;Number.isFinite(e)&&(e={type:`interpolation`,duration:e});let n=e.type||`interpolation`;return{...Ov[n],...t,...e,type:n}}var Av=class extends yv{constructor(e,t){super(e,t,{startIndices:null,constantValue:null,lastExternalBuffer:null,binaryValue:null,binaryAccessor:null,needsUpdate:!0,needsRedraw:!1,layoutChanged:!1,updateRanges:Ev}),this.constant=!1,this.settings.update=t.update||(t.accessor?this._autoUpdater:void 0),Object.seal(this.settings),Object.seal(this.state),this._validateAttributeUpdaters()}get startIndices(){return this.state.startIndices}set startIndices(e){this.state.startIndices=e}needsUpdate(){return this.state.needsUpdate}needsRedraw({clearChangedFlags:e=!1}={}){let t=this.state.needsRedraw;return this.state.needsRedraw=t&&!e,t}layoutChanged(){return this.state.layoutChanged}setAccessor(e){var t;(t=this.state).layoutChanged||(t.layoutChanged=!gv(e,this.getAccessor())),super.setAccessor(e)}getUpdateTriggers(){let{accessor:e}=this.settings;return[this.id].concat(typeof e!=`function`&&e||[])}supportsTransition(){return!!this.settings.transition}getTransitionSetting(e){if(!e||!this.supportsTransition())return null;let{accessor:t}=this.settings,n=this.settings.transition;return kv(Array.isArray(t)?e[t.find(t=>e[t])]:e[t],n)}setNeedsUpdate(e=this.id,t){if(this.state.needsUpdate=this.state.needsUpdate||e,this.setNeedsRedraw(e),t){let{startRow:e=0,endRow:n=1/0}=t;this.state.updateRanges=Dv(this.state.updateRanges,[e,n])}else this.state.updateRanges=Ev}clearNeedsUpdate(){this.state.needsUpdate=!1,this.state.updateRanges=Tv}setNeedsRedraw(e=this.id){this.state.needsRedraw=this.state.needsRedraw||e}allocate(e){let{state:t,settings:n}=this;if(n.noAlloc)return!1;if(n.update){let n=this.isConstant;return super.allocate(e,t.updateRanges!==Ev),t.layoutChanged||=n&&this.device.type===`webgpu`,!0}return!1}updateBuffer({numInstances:e,data:t,props:n,context:r}){if(!this.needsUpdate())return!1;let{state:{updateRanges:i},settings:{update:a,noAlloc:o}}=this,s=!0;if(a){for(let[o,s]of i)a.call(r,this,{data:t,startRow:o,endRow:s,props:n,numInstances:e});if(this.value){if(this.constant||!this.buffer||this.buffer.byteLength<this.value.byteLength+this.byteOffset){if(this.constant){let e=this.value;this.value=null,this.setConstantValue(r,e)}else this.setData({value:this.value,constant:this.constant});this.constant=!1}else for(let[t,n]of i){let r=Number.isFinite(t)?this.getVertexOffset(t):0,i=Number.isFinite(n)?this.getVertexOffset(n):o||!Number.isFinite(e)?this.value.length:e*this.size;super.updateSubBuffer({startOffset:r,endOffset:i})}}this._checkAttributeArray()}else s=!1;return this.clearNeedsUpdate(),this.setNeedsRedraw(),s}setConstantValue(e,t){var n;if(t===void 0||typeof t==`function`)return!1;let r=this.isConstant,i=this.settings.transform&&e?this.settings.transform.call(e,t):t,a=this.settings.defaultType;this.state.constantValue=this._normalizeValue(i,new a(this.size),0);let o=this.setData({constant:!0,value:i});if(this.device.type===`webgpu`){let e=this.state.constantValue;this.doublePrecision&&(e instanceof Float32Array||e instanceof Float64Array)&&(e=zd(e,{size:this.size}),this.setAccessor({...this.getAccessor(),stride:this.size*2*Float32Array.BYTES_PER_ELEMENT}));let t=this._buffer;(!t||t.byteLength<e.byteLength)&&(t=this._createBuffer(e.byteLength)),t.write(e),(n=this.state).layoutChanged||(n.layoutChanged=!r),this.constant=!1}return o&&this.setNeedsRedraw(),this.clearNeedsUpdate(),!0}getConstantValue(){return this.isConstant?this.state.constantValue:null}setExternalBuffer(e){let{state:t}=this;return e?(this.clearNeedsUpdate(),t.lastExternalBuffer===e||(t.lastExternalBuffer=e,this.setNeedsRedraw(),this.setData(e)),!0):(t.lastExternalBuffer=null,!1)}setBinaryValue(e,t=null){let{state:n,settings:r}=this;if(!e)return n.binaryValue=null,n.binaryAccessor=null,!1;if(r.noAlloc)return!1;if(n.binaryValue===e)return this.clearNeedsUpdate(),!0;if(n.binaryValue=e,this.setNeedsRedraw(),r.transform||t!==this.startIndices){ArrayBuffer.isView(e)&&(e={value:e});let i=e;K(ArrayBuffer.isView(i.value),`invalid ${r.accessor}`);let a=!!i.size&&i.size!==this.size;return n.binaryAccessor=wv(i.value,{size:i.size||this.size,stride:i.stride,offset:i.offset,startIndices:t,nested:a}),!1}return this.clearNeedsUpdate(),this.setData(e),!0}getVertexOffset(e){let{startIndices:t}=this;return(t?e<t.length?t[e]:this.numInstances:e)*this.size}getValue(){let e=this.settings.shaderAttributes,t=super.getValue();if(!e)return t;for(let n in e)Object.assign(t,super.getValue(n,e[n]));return t}getBufferLayout(e){this.state.layoutChanged=!1;let t=this.settings.shaderAttributes,n=super._getBufferLayout(),{stepMode:r}=this.settings;if(n.stepMode=r===`dynamic`?e?e.isInstanced?`instance`:`vertex`:`instance`:r??`vertex`,!t)return n;for(let e in t){let r=super._getBufferLayout(e,t[e]);n.attributes.push(...r.attributes)}return n}_autoUpdater(e,{data:t,startRow:n,endRow:r,props:i,numInstances:a}){let{settings:o,state:s,value:c,size:l,startIndices:u}=e,{accessor:d,transform:f}=o,p=s.binaryAccessor||(typeof d==`function`?d:i[d]);K(typeof p==`function`,`accessor "${d}" is not a function`);let m=e.getVertexOffset(n),{iterable:h,objectInfo:g}=Sv(t,n,r);for(let t of h){g.index++;let n=p(t,g);if(f&&(n=f.call(this,n)),u){let t=(g.index<u.length-1?u[g.index+1]:a)-u[g.index];if(n&&Array.isArray(n[0])){let t=m;for(let r of n)e._normalizeValue(r,c,t),t+=l}else n&&n.length>l?c.set(n,m):(e._normalizeValue(n,g.target,0),hp({target:c,source:g.target,start:m,count:t}));m+=t*l}else e._normalizeValue(n,c,m),m+=l}}_validateAttributeUpdaters(){let{settings:e}=this;if(!(e.noAlloc||typeof e.update==`function`))throw Error(`Attribute ${this.id} missing update or accessor`)}_checkAttributeArray(){let{value:e}=this,t=Math.min(4,this.size);if(e&&e.length>=t){let n=!0;switch(t){case 4:n&&=Number.isFinite(e[3]);case 3:n&&=Number.isFinite(e[2]);case 2:n&&=Number.isFinite(e[1]);case 1:n&&=Number.isFinite(e[0]);break;default:n=!1}if(!n)throw Error(`Illegal attribute generated for ${this.id}`)}}},jv=class e{gpuDataEvaluators;format;length;id;_gpuVector;_ownsGPUDataEvaluators;_destroyed=!1;static fromGPUVector(t){if(t.bufferLayout)throw Error(`GPUVectorEvaluator.fromGPUVector() does not accept interleaved vector "${t.name}"`);if(t.data.length===0)throw Error(`GPUVectorEvaluator.fromGPUVector() requires GPUData for "${t.name}"`);return new e({id:t.name,gpuDataEvaluators:t.data.map(e=>xe.fromGPUData(e,{id:t.name})),gpuVector:t,format:t.format})}static fromGPUDataEvaluators(t,n={}){return new e({id:n.id,gpuDataEvaluators:t,format:n.format})}constructor({id:e,gpuDataEvaluators:t,gpuVector:n,format:r}){if(t.length===0)throw Error(`GPUVectorEvaluator requires at least one GPUData evaluator`);Mv(t),this.id=e,this.gpuDataEvaluators=t,this.format=r??t[0].format,this.length=t.reduce((e,t)=>e+t.length,0),this._gpuVector=n,this._ownsGPUDataEvaluators=!n}get evaluated(){return!!this._gpuVector}get gpuVector(){if(!this._gpuVector)throw Error(`${this} not evaluated`);return this._gpuVector}mapGPUData(t){return e.fromGPUDataEvaluators(this.gpuDataEvaluators.map((e,n)=>t(e,n)),{id:this.id})}async evaluate(e,t={}){if(this._destroyed)throw Error(`GPUVectorEvaluator ${this} already destroyed`);if(this._gpuVector)return this._gpuVector;let n=await Promise.all(this.gpuDataEvaluators.map(n=>n.evaluate(e,t))),r=n[0],i=n.map(Nv),a=t.format??this.format??r.format;return this._gpuVector=new ye({type:`data`,name:t.name??this.id??`vector`,format:a,data:i,stride:r.stride,byteStride:r.byteStride,rowByteLength:r.rowByteLength,bufferLayout:r.bufferLayout}),this._gpuVector}evaluateSync(e,t={}){if(this._destroyed)throw Error(`GPUVectorEvaluator ${this} already destroyed`);if(this._gpuVector)return this._gpuVector;let n=this.gpuDataEvaluators.map(n=>n.evaluateSync(e,t)),r=n[0],i=n.map(Nv),a=t.format??this.format??r.format;return this._gpuVector=new ye({type:`data`,name:t.name??this.id??`vector`,format:a,data:i,stride:r.stride,byteStride:r.byteStride,rowByteLength:r.rowByteLength,bufferLayout:r.bufferLayout}),this._gpuVector}destroy(){if(this._ownsGPUDataEvaluators)for(let e of this.gpuDataEvaluators)e.destroy();this._gpuVector=void 0,this._destroyed=!0}toString(){return this.id??this.constructor.name}};function Mv(e){let t=e[0];for(let n of e.slice(1))if(n.type!==t.type||n.size!==t.size||n.normalized!==t.normalized||n.format!==t.format)throw Error(`GPUVectorEvaluator requires matching GPUData evaluator layouts`)}function Nv(e){let[t,...n]=e.data;if(!t||n.length>0)throw Error(`GPUVectorEvaluator requires one GPUData chunk for "${e.name}"`);return t}function Pv({elementWise:e,func:t,inputs:n,output:r,outputBuffer:i}){let a=Array.isArray(n)?n:Object.values(n);for(let e of a)if(!e.value)throw Error(`${e} does not have CPU value`);let o=r.length,s=r.size,c=new r.ValueType(o*s);for(let n=0;n<o;n++){let r=a.map(e=>Y(e,n));if(e)for(let e=0;e<s;e++)c[n*s+e]=t.apply(null,r.map(t=>t[e]));else t.call(null,c.subarray(n*s,n*s+s),...r)}let l=r.ValueType.BYTES_PER_ELEMENT,u=r.offset/l,d=r.stride/l,f=s,p=c;if(u!==0||d!==f){p=new r.ValueType(u+r.byteLength/l);for(let e=0;e<o;e++){let t=e*f,n=u+e*d,r=c.subarray(t,t+s);p.set(r,n),i.write(r,n*l)}}else i.write(c);return{success:!0,value:p}}function Y(e,t){let n=e.value,r=e.size,i=e.offset/e.ValueType.BYTES_PER_ELEMENT,a=e.stride/e.ValueType.BYTES_PER_ELEMENT,o=i+(e.isConstant?0:t)*a,s=n.slice(o,o+r);if(!e.normalized)return s;let c=new Float32Array(r);for(let t=0;t<r;t++)c[t]=Fv(s[t],e.type);return c}function Fv(e,t){switch(t){case`uint8`:return e/255;case`uint16`:return e/65535;case`uint32`:return e/4294967295;case`sint8`:return Math.max(e/127,-1);case`sint16`:return Math.max(e/32767,-1);case`sint32`:return Math.max(e/2147483647,-1);case`float32`:return e;default:throw Error(`Unsupported normalized source type ${t}`)}}var Iv=({inputs:e,output:t,target:n})=>{for(let t of Object.values(e.namedInputs))if(!t.value)throw Error(`${t} does not have CPU value`);let r=new t.ValueType(t.length*t.size);for(let n=0;n<t.length;n++){let i=Object.fromEntries(Object.entries(e.namedInputs).map(([e,t])=>[e,Y(t,n)]));for(let a=0;a<t.size;a++)r[n*t.size+a]=Lv(e.expression,i,a)}return n.write(r),{success:!0,value:r}};function Lv(e,t,n){switch(e.kind){case`input`:{let r=t[e.name];return n<r.length?r[n]:r.length===1?r[0]:0}case`literal`:return Array.isArray(e.value)?e.value[n]??0:e.value;case`call`:{Rv(e.op,e.args.length);let r=e.args.map(e=>Lv(e,t,n));switch(e.op){case`add`:return r[0]+r[1];case`subtract`:return r[0]-r[1];case`multiply`:return r[0]*r[1];case`divide`:return r[0]/r[1];case`pow`:return r[0]**+r[1];case`sqrt`:return Math.sqrt(r[0]);case`abs`:return Math.abs(r[0]);case`sin`:return Math.sin(r[0]);case`cos`:return Math.cos(r[0]);case`tan`:return Math.tan(r[0]);case`exp`:return Math.exp(r[0]);case`log`:return Math.log(r[0]);default:{let t=e.op;throw Error(`Unsupported arithmetic op ${t}`)}}}default:throw Error(`Unsupported expression node ${e.kind}`)}}function Rv(e,t){let n=ve[e].arity;if(t!==n)throw Error(`Arithmetic op '${e}' expects ${n} args, got ${t}`)}var zv=({inputs:e,output:t,target:n})=>{let{sourceValues:r}=e;if(!r.value)throw Error(`${r} does not have CPU value`);let i=new t.ValueType(t.length*t.size);if(r.length===0)return{success:!1,error:Error(`${r} is empty`)};for(let e=0;e<r.size;e++){let n=Y(r,0)[e],a=e*t.size,o=a+1;i[a]=n,i[o]=n;for(let t=1;t<r.length;t++){let n=Y(r,t)[e];n<i[a]&&(i[a]=n),n>i[o]&&(i[o]=n)}}return n.write(i),{success:!0,value:i}},Bv=({inputs:e,output:t,target:n})=>Pv({func:(e,t)=>{let n=e.length/2,r=new Float64Array(t.buffer);for(let t=0;t<n;t++){let i=r[t];e[t]=Math.fround(i),e[t+n]=i-e[t]}return e},inputs:e,output:t,outputBuffer:n}),Vv=async({inputs:e,output:t,target:n})=>{let{ids:r,sourceValues:i}=e,a=r.value,o=i.value;if(!a)throw Error(`${r} does not have CPU value`);if(!o)throw Error(`${i} does not have CPU value`);let s=new t.ValueType(t.length*t.size),c=Array(t.size).fill(0);for(let e=0;e<t.length;e++){let n=Y(r,e),a=Number(n[0]),o=Hv(a,i.length)?Y(i,a):c;s.set(o,e*t.size)}return n.write(s),{success:!0,value:s}};function Hv(e,t){return Number.isInteger(e)&&e>=0&&e<t}var Uv=({inputs:e,output:t,target:n})=>Pv({func:(e,...t)=>{let n=0;for(let r of t)e.set(r,n),n+=r.length},inputs:e,output:t,outputBuffer:n}),Wv=({inputs:e,output:t,target:n})=>{let{x:r,y:i}=e,a=new t.ValueType(t.length);for(let e=0;e<t.length;e++){let t=Y(r,e),n=Y(i,e),o=0;for(let e=0;e<r.size;e++)o+=t[e]*n[e];a[e]=o}return n.write(a),{success:!0,value:a}},Gv=({inputs:e,output:t,target:n})=>{let{x:r,y:i}=e,a=new t.ValueType(t.length);for(let e=0;e<t.length;e++){let t=Y(r,e),n=Y(i,e),o=1;for(let e=0;e<r.size;e++)if(t[e]!==n[e]){o=0;break}a[e]=o}return n.write(a),{success:!0,value:a}},Kv=({inputs:e,output:t,target:n})=>{let{x:r}=e,i=new t.ValueType(t.length);for(let e=0;e<t.length;e++){let t=Y(r,e),n=0;for(let e=0;e<r.size;e++)n+=t[e]*t[e];i[e]=Math.sqrt(n)}return n.write(i),{success:!0,value:i}},qv=async({inputs:e,output:t,target:n})=>{let{segments:r,vertexCount:i}=e,a=r.value;if(!a)throw Error(`${r} does not have CPU value`);Jv(a,r,i);let o=new t.ValueType(t.length*t.size),s=0;for(let e=0;e<i;e++){for(;s+1<r.length&&a[Yv(r,s+1)]<=e;)s++;let n=a[Yv(r,s)],i=e*t.size;o[i]=s,o[i+1]=e-n}return n.write(o),{success:!0,value:o}};function Jv(e,t,n){if(t.length<1)throw Error(`segmentedMap segments must contain at least one segment start`);let r=0;for(let n=0;n<t.length;n++){let i=e[Yv(t,n)];if(n===0&&i!==0)throw Error(`segmentedMap segments must start at 0, got ${i}`);if(n>0&&i<r)throw Error(`segmentedMap segments must be non-decreasing, got ${i} after ${r}`);r=i}if(r>n)throw Error(`segmentedMap last segment start must be <= vertexCount, got ${r} > ${n}`)}function Yv(e,t){return e.offset/e.ValueType.BYTES_PER_ELEMENT+t*(e.stride/e.ValueType.BYTES_PER_ELEMENT)}var Xv=async({inputs:e,output:t,target:n})=>{let{condition:r,whenTrue:i,whenFalse:a}=e,o=new t.ValueType(t.length*t.size);for(let e=0;e<t.length;e++){let n=Y(r,e),s=Y(i,e),c=Y(a,e);for(let l=0;l<t.size;l++){let u=Zv(n,r.size,l);o[e*t.size+l]=u===0?Zv(c,a.size,l):Zv(s,i.size,l)}}return n.write(o),{success:!0,value:o}};function Zv(e,t,n){return n<t?e[n]:t===1?e[0]:0}var Qv=({inputs:e,output:t,target:n})=>{let r=new t.ValueType(t.length);for(let n=0;n<t.length;n++)r[n]=e.start+n*e.step;return n.write(r),{success:!0,value:r}},$v=({inputs:e,output:t,target:n})=>{let{columns:r}=e;return Pv({func:(e,t)=>{for(let n=0;n<r.length;n++)e[n]=t[r[n]]},inputs:{x:e.x},output:t,outputBuffer:n})},ey=t({arithmetic:()=>Iv,dot:()=>Wv,equalAll:()=>Gv,extent:()=>zv,fround:()=>Bv,gather:()=>Vv,interleave:()=>Uv,length:()=>Kv,segmentedMap:()=>qv,select:()=>Xv,sequence:()=>Qv,swizzle:()=>$v}),ty=new class{_modules={cpu:ey};add(e,t){let n=this._modules[e];if(typeof t.then==`function`){let r=Promise.all([Promise.resolve(n||{}),t]).then(([e,t])=>({...e,...t}));return this._modules[e]=r,r.then(t=>{this._modules[e]=t}).catch(t=>{w.error(`Failed to register ${e} backend: ${t}`)()}),r}if(n&&typeof n.then==`function`){let r=Promise.resolve(n).then(e=>({...e,...t})).then(t=>(this._modules[e]=t,t)).catch(t=>{throw w.error(`Failed to register ${e} backend: ${t}`)(),t});return this._modules[e]=r,r}let r={...n||{},...t};return this._modules[e]=r,Promise.resolve(r)}async get(e,t){let n=this._modules[e];if(!n){if(e===`webgl`)n=this.add(`webgl`,h(()=>import(`./webgl-DV28SLMn.js`),__vite__mapDeps([0,1,2,3]),import.meta.url));else if(e===`webgpu`)n=this.add(`webgpu`,h(()=>Promise.resolve().then(()=>gb),void 0,import.meta.url));else throw Error(`${e} backend not registered`)}let r=(await n)[t];if(typeof r!=`function`)throw Error(`${e} backend does not implement ${t}`);return r}getSync(e,t){let n=this._modules[e];if(!n)throw Error(`${e} backend not registered`);if(typeof n.then==`function`)throw Error(`${e} backend is not loaded yet`);let r=n[t];if(typeof r!=`function`)throw Error(`${e} backend does not implement ${t}`);return r}clear(){this._modules={}}},ny=class{inputs;dependencies;constructor(e){this.inputs=e,this.dependencies=Array.from(e instanceof Array?e:Object.values(e)).filter(e=>e instanceof xe)}async execute(e,t){return await this._resolveDependencies(e),await this._executeWithHandler(await ty.get(this._getHandlerRegistry(e),this.name),t)}executeSync(e,t){this._resolveDependenciesSync(e);let n=this._executeWithHandler(ty.getSync(this._getHandlerRegistry(e),this.name),t);if(ry(n))throw Error(`${this.name} returned a Promise in executeSync()`);return n}shouldExecuteOnCPU(){return this.output.length<=1&&Array.from(this.dependencies).every(e=>!!e.value)}_getHandlerRegistry(e){return this.shouldExecuteOnCPU()?`cpu`:e.type}async _resolveDependencies(e){for(let t of this.dependencies)await t.evaluate(e);if(this._getHandlerRegistry(e)===`cpu`||e.type===`null`)for(let e of this.dependencies)await e.ensureCPUValue()}_resolveDependenciesSync(e){for(let t of this.dependencies)t.evaluateSync(e);if(this._getHandlerRegistry(e)===`cpu`||e.type===`null`)for(let e of this.dependencies)e.ensureCPUValueSync()}_executeWithHandler(e,t){return e({device:t.device,inputs:this.inputs,output:this.output,target:t})}};function ry(e){return typeof e?.then==`function`}function iy(...e){let t=ay(e.map(e=>e.type));return t[0]!==`f`&&e.some(e=>e.normalized)&&(t=`float32`),{isConstant:e.every(e=>e.isConstant),type:t,size:e.reduce((e,t)=>Math.max(e,t.size),0),length:e.reduce((e,t)=>Math.max(e,t.length),0)}}function ay(e){let t=0,n=0;for(let r of e){if(r[0]===`f`)return`float32`;let e=r.endsWith(`8`)?8:r.endsWith(`6`)?16:32;r[0]===`u`?t=Math.max(t,e):n=Math.max(n,e)}return t&&!n?`uint${t}`:n&&t<32?`sint${Math.max(n,t*2)}`:`float32`}var oy=class extends ny{name=`interleave`;output;constructor(e){super(e);let{isConstant:t,type:n,length:r}=iy(...e);this.output=new xe({isConstant:t,type:n,size:e.reduce((e,t)=>e+t.size,0),length:r,source:this})}toString(){return`_${this.inputs.join(`_`)}_`}};function sy(...e){if(e.length===0)throw Error(`interleave() requires at least one input`);return e.length===1?he(e[0]):new oy(e.map(he)).output}function cy(e,t){let n=uy(t);for(let t of n)t.evaluateSync(e);return ly(n),t}function ly(e){let t=new Set(e.flatMap(my)),n=new Set;for(let t of e)py(t,n);for(let e of n)e.evaluated&&!t.has(e.buffer)&&e.destroy()}function uy(e){let t=new Set;return dy(e,t,new Set),Array.from(t)}function dy(e,t,n){if(hy(e))t.add(e);else if(e&&typeof e==`object`&&!n.has(e)){if(n.add(e),Array.isArray(e))for(let r of e)dy(r,t,n);else if(fy(e))for(let r of Object.values(e))dy(r,t,n)}}function fy(e){let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}function py(e,t){if(e instanceof jv){for(let n of e.gpuDataEvaluators)py(n,t);return}let n=e.source;if(n){if(n instanceof xe)t.has(n)||(t.add(n),py(n,t));else for(let e of n.dependencies)t.has(e)||(t.add(e),py(e,t))}}function my(e){return e instanceof xe?[e.buffer]:e.gpuVector.data.map(e=>e.buffer instanceof Se?e.buffer.buffer:e.buffer)}function hy(e){return e instanceof xe||e instanceof jv}var gy=65535;function _y(e,t){let n=by(t),r=Math.max(1,Math.ceil(e)),i=Math.min(r,n),a=Math.min(Math.ceil(r/i),n),o=Math.ceil(r/i/a);if(o>n)throw Error(`WebGPU dispatch requires ${r} workgroups, exceeding the 3D dispatch limit of ${n} per dimension`);return{x:i,y:a,z:o}}function vy(e,t=`workgroupId`){return`((${t}.z * ${e.y}u + ${t}.y) * ${e.x}u + ${t}.x)`}function yy(e,t,n=`workgroupId`,r=`localId`){return`(${vy(e,n)} * ${t}u + ${r}.x)`}function by(e){return Number.isFinite(e)&&e>0?Math.floor(e):gy}function xy(e,t){switch(e){case`u32`:return`${t}u`;case`f32`:return Number.isInteger(t)?`${t}.0`:`${t}`;default:return`${t}`}}function Sy(e,t){switch(e){case`uint32`:return xy(`u32`,Math.trunc(t));case`sint32`:return`${Math.trunc(t)}`;case`float32`:return xy(`f32`,t);default:throw Error(`WebGPU operations only support 32-bit output types, got ${e}`)}}function Cy(e){switch(e){case`uint32`:return`0u`;case`sint32`:return`0`;case`float32`:return`0.0`;default:throw Error(`WebGPU operations only support 32-bit output types, got ${e}`)}}function X(e){switch(e){case`uint32`:return`u32`;case`sint32`:return`i32`;case`float32`:return`f32`;default:throw Error(`WebGPU operations only support 32-bit storage types, got ${e}`)}}var wy=64,Ty=`GPGPU Operation Counts`,Ey=`Computation Runs`,Dy=new le;function Oy({module:e,elementWise:t=!1,expression:n,inputs:r,output:i,operationType:a=i.type,outputBuffer:o}){if(!e.source)throw Error(`WebGPU computation ${e.name} requires WGSL source`);let s=Py(r),c=s.map(([e,t])=>({name:e,input:t})),l=c.filter(({input:e})=>!e.isConstant).map((e,t)=>({...e,index:t})),u=X(a),d=X(i.type),f={TYPE:u,RESULT_LEN:i.size.toString()},p=_y(Math.ceil(i.length/wy),o.device.limits.maxComputeWorkgroupsPerDimension);for(let[e,t]of s)f[`${e.toUpperCase()}_LEN`]=t.size.toString();let m=`
${Iy(e.source,f)}
${l.map(({name:e,input:t,index:n})=>ky(e,t,n)).join(`
`)}
${c.map(({name:e,input:t})=>Ay(e,t,a)).join(`
`)}
${jy(i,l.length)}
${My(i)}

@compute @workgroup_size(${wy}) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let rowIndex = ${yy(p,wy)};
  if (rowIndex >= ${i.length}u) {
    return;
  }

${c.map(({name:e})=>`  let ${e} = read_${e}(rowIndex);`).join(`
`)}
  var result: array<${d}, ${i.size}>;
${Ny(e.name,s,i,t,n)}
  write_result(rowIndex, result);
}
`,h=new ep(o.device,{source:m,modules:e.dependencies,shaderAssembler:Dy,shaderLayout:{bindings:[...l.map(({name:e},t)=>({name:e,type:`storage`,group:0,location:t})),{name:`result`,type:`storage`,group:0,location:l.length}]}}),g=Object.fromEntries(l.map(({name:e,input:t})=>[e,t.buffer]));g.result=o,h.setBindings(g);let _=o.device.beginComputePass({});o.device.statsManager.getStats(Ty).get(Ey).incrementCount(),h.dispatch(_,p.x,p.y,p.z),_.end(),o.device.submit(),h.destroy()}function ky(e,t,n){return t.isConstant?``:`@group(0) @binding(${n}) var<storage, read> ${e}: array<${X(t.type)}>;`}function Ay(e,t,n){let r=X(n),i=t.type===n?``:r,a=t.stride/t.ValueType.BYTES_PER_ELEMENT,o=t.offset/t.ValueType.BYTES_PER_ELEMENT;return t.isConstant?`fn read_${e}(_rowIndex: u32) -> array<${r}, ${t.size}> {
  return array<${r}, ${t.size}>(${Fy(t,i)});
}`:`fn read_${e}(rowIndex: u32) -> array<${r}, ${t.size}> {
  var value: array<${r}, ${t.size}>;
  let rowOffset = ${o}u + rowIndex * ${a}u;
${Array.from({length:t.size},(t,n)=>i?`  value[${n}] = ${i}(${e}[rowOffset + ${n}u]);`:`  value[${n}] = ${e}[rowOffset + ${n}u];`).join(`
`)}
  return value;
}`}function jy(e,t){return`@group(0) @binding(${t}) var<storage, read_write> result: array<${X(e.type)}>;`}function My(e){let t=e.stride/e.ValueType.BYTES_PER_ELEMENT,n=e.offset/e.ValueType.BYTES_PER_ELEMENT;return`fn write_result(rowIndex: u32, value: array<${X(e.type)}, ${e.size}>) {
  let rowOffset = ${n}u + rowIndex * ${t}u;
${Array.from({length:e.size},(e,t)=>`  result[rowOffset + ${t}u] = value[${t}];`).join(`
`)}
}`}function Ny(e,t,n,r,i){let a=``;if(i)for(let e=0;e<n.size;e++)a+=`  result[${e}] = ${i(e)};\n`;else if(r){let r=Cy(n.type),i=X(n.type);for(let o=0;o<n.size;o++){let n=t.map(([e,t])=>o<t.size?X(t.type)===i?`${e}[${o}]`:`${i}(${e}[${o}])`:r);a+=`  result[${o}] = ${e}(${n.join(`, `)});\n`}}else a+=`result = ${e}(${t.map(([e])=>e).join(`, `)});`;return a.trimEnd()}function Py(e){return Array.isArray(e)?e.map((e,t)=>[`x${t}`,e]):Object.entries(e)}function Fy(e,t){let n=e.value;if(!n)throw Error(`Constant input ${e} is missing CPU values`);return Array.from({length:e.size},(e,r)=>xy(t,n[r]??0)).join(`, `)}function Iy(e,t){for(let n in t)e=e.replaceAll(`{${n}}`,t[n]);return e}var Ly=`fn arithmetic_add(x: {TYPE}, y: {TYPE}) -> {TYPE} {
  return x + y;
}

fn arithmetic_subtract(x: {TYPE}, y: {TYPE}) -> {TYPE} {
  return x - y;
}

fn arithmetic_multiply(x: {TYPE}, y: {TYPE}) -> {TYPE} {
  return x * y;
}

fn arithmetic_divide(x: {TYPE}, y: {TYPE}) -> {TYPE} {
  return x / y;
}

fn arithmetic_tan(x: f32) -> f32 {
  return tan_fp32(x);
}
`,Ry=({inputs:e,output:t,target:n})=>{let r=t.type,i=X(r),a=Cy(r),o=e.namedInputs;return Oy({module:{name:`arithmetic`,source:Ly,dependencies:[ce]},inputs:o,output:t,operationType:r,outputBuffer:n,expression:t=>Ce(e.expression,{operations:ve,inputs:o,laneIndex:t,formatInput:e=>`${e}[${t}]`,formatOutOfBoundsInput:e=>o[e].size===1?`${e}[0]`:a,formatLiteral:e=>{let n=Array.isArray(e)?e[t]??0:e;return`${i}(${Sy(r,n)})`},formatCall:(e,t)=>`${e}(${t.join(`, `)})`})}),{success:!0}},zy=`fn row_dot(x: array<{TYPE}, {X_LEN}>, y: array<{TYPE}, {Y_LEN}>) -> array<f32, 1> {
  var sum = 0.0;
  for (var i = 0u; i < {X_LEN}u; i = i + 1u) {
    sum += f32(x[i]) * f32(y[i]);
  }
  return array<f32, 1>(sum);
}
`,By=({inputs:e,output:t,target:n})=>(Oy({module:{name:`row_dot`,source:zy},inputs:e,output:t,operationType:`float32`,outputBuffer:n}),{success:!0}),Vy=`fn equalAll(x: array<{TYPE}, {X_LEN}>, y: array<{TYPE}, {Y_LEN}>) -> array<u32, 1> {
  var allEqual = 1u;
  for (var i = 0u; i < {X_LEN}u; i = i + 1u) {
    if (x[i] != y[i]) {
      allEqual = 0u;
      break;
    }
  }
  return array<u32, 1>(allEqual);
}
`,Hy=({inputs:e,output:t,target:n})=>(Oy({module:{name:`equalAll`,source:Vy},inputs:e,output:t,operationType:e.x.type,outputBuffer:n}),{success:!0});function Uy(e,t,n){return`@group(0) @binding(${n}) var<storage, read> ${e}: array<${X(t.type)}>;`}function Wy(e,t,n,r=e){let i=X(n);if(t.isConstant){let e=t.value;if(!e)throw Error(`Constant input ${t} is missing CPU values`);return`fn read_${r}(_sourceIndex: u32) -> array<${i}, ${t.size}> {
  return array<${i}, ${t.size}>(${Array.from({length:t.size},(t,n)=>xy(i,e[n]??0)).join(`, `)});
}`}let a=t.stride/t.ValueType.BYTES_PER_ELEMENT,o=t.offset/t.ValueType.BYTES_PER_ELEMENT,s=X(t.type)===i?``:`${i}`;return`fn read_${r}(sourceIndex: u32) -> array<${i}, ${t.size}> {
  var value: array<${i}, ${t.size}>;
  let rowOffset = ${o}u + sourceIndex * ${a}u;
${Array.from({length:t.size},(t,n)=>s?`  value[${n}] = ${s}(${e}[rowOffset + ${n}u]);`:`  value[${n}] = ${e}[rowOffset + ${n}u];`).join(`
`)}
  return value;
}`}function Gy(e,t){return Wy(`sourceValues`,e,t,`source_values`)}function Ky(e,t){return`@group(0) @binding(${t}) var<storage, read_write> result: array<${X(e.type)}>;`}function qy(e){let t=e.stride/e.ValueType.BYTES_PER_ELEMENT,n=e.offset/e.ValueType.BYTES_PER_ELEMENT;return`fn write_result(rowIndex: u32, value: array<${X(e.type)}, ${e.size}>) {
  let rowOffset = ${n}u + rowIndex * ${t}u;
${Array.from({length:e.size},(e,t)=>`  result[rowOffset + ${t}u] = value[${t}];`).join(`
`)}
}`}function Jy(e,t){let n=Cy(e);return`fn zero_result() -> array<${X(e)}, ${t}> {
  var result: array<${X(e)}, ${t}>;
${Array.from({length:t},(e,t)=>`  result[${t}] = ${n};`).join(`
`)}
  return result;
}`}var Yy=({inputs:e,output:t,target:n})=>{let{sourceValues:r}=e;if(r.length===0){let e=new t.ValueType(t.length*t.size);return n.write(e),{success:!0,value:e}}if(r.isConstant){let e=r.value;if(!e)throw Error(`Constant input ${r} is missing CPU values`);let i=new t.ValueType(t.length*t.size);for(let n=0;n<t.length;n++){let t=e[n];i[n*2]=t,i[n*2+1]=t}return n.write(i),{success:!0,value:i}}let i=[],a=r,o=`raw`,s=r.length;try{for(;;){let e=Math.ceil(s/64),r=t.length*e,c=e===1?n:F.createOrReuse(n.device,r*t.stride);if(e>1&&i.push(c),Xy({input:a,inputMode:o,inputGroupCount:s,channelCount:t.length,outputType:t.type,outputBuffer:c,outputLength:r,outputStride:t.stride,outputOffset:t.offset}),e===1)break;a=new xe({buffer:c,type:t.type,size:2,length:r}),o=`partial`,s=e}return{success:!0}}finally{for(let e of i)F.recycle(e)}};function Xy({input:e,inputMode:t,inputGroupCount:n,channelCount:r,outputType:i,outputBuffer:a,outputLength:o,outputStride:s,outputOffset:c}){let l=X(i),u=_y(o,a.device.limits.maxComputeWorkgroupsPerDimension),d=new xe({buffer:a,type:i,size:2,length:o,stride:s,offset:c}),f=`
${e.isConstant?``:Uy(`sourceValues`,e,0)}
${Gy(e,i)}
${Ky(d,+!e.isConstant)}
${qy(d)}
${Zy(t,i,r,n)}

var<workgroup> sharedMin: array<${l}, 64>;
var<workgroup> sharedMax: array<${l}, 64>;

@compute @workgroup_size(64) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let outputRowIndex = ${vy(u)};
  if (outputRowIndex >= ${o}u) {
    return;
  }

  let channelIndex = outputRowIndex % ${r}u;
  let outputGroupIndex = outputRowIndex / ${r}u;
  let inputGroupIndex = outputGroupIndex * 64u + localId.x;

  let result = extent_pass(channelIndex, inputGroupIndex);
  sharedMin[localId.x] = result[0];
  sharedMax[localId.x] = result[1];
  workgroupBarrier();

  var stride = 32u;
  loop {
    if (stride == 0u) {
      break;
    }
    if (localId.x < stride) {
      let compareIndex = localId.x + stride;
      if (sharedMin[compareIndex] < sharedMin[localId.x]) {
        sharedMin[localId.x] = sharedMin[compareIndex];
      }
      if (sharedMax[compareIndex] > sharedMax[localId.x]) {
        sharedMax[localId.x] = sharedMax[compareIndex];
      }
    }
    workgroupBarrier();
    stride = stride / 2u;
  }

  if (localId.x == 0u) {
    write_result(outputRowIndex, array<${l}, 2>(sharedMin[0], sharedMax[0]));
  }
}
`,p=new ep(a.device,{source:f,shaderLayout:{bindings:[...e.isConstant?[]:[{name:`sourceValues`,type:`storage`,group:0,location:0}],{name:`result`,type:`storage`,group:0,location:+!e.isConstant}]}}),m={result:a};e.isConstant||(m.sourceValues=e.buffer),p.setBindings(m);let h=a.device.beginComputePass({});p.dispatch(h,u.x,u.y,u.z),h.end(),a.device.submit(),p.destroy()}function Zy(e,t,n,r){let i=X(t),[a,o]=Qy(t);return e===`raw`?`fn extent_pass(channelIndex: u32, inputGroupIndex: u32) -> array<${i}, 2> {
  var result: array<${i}, 2>;
  result[0] = ${a};
  result[1] = ${o};

  if (inputGroupIndex < ${r}u) {
    let value = read_source_values(inputGroupIndex);
    result[0] = value[channelIndex];
    result[1] = value[channelIndex];
  }

  return result;
}`:`fn extent_pass(channelIndex: u32, inputGroupIndex: u32) -> array<${i}, 2> {
  var result: array<${i}, 2>;
  result[0] = ${a};
  result[1] = ${o};

  if (inputGroupIndex < ${r}u) {
    let rowIndex = inputGroupIndex * ${n}u + channelIndex;
    let value = read_source_values(rowIndex);
    result[0] = value[0];
    result[1] = value[1];
  }

  return result;
}`}function Qy(e){switch(e){case`uint32`:return[`0xffffffffu`,`0u`];case`sint32`:return[`2147483647`,`-2147483648`];case`float32`:return[`3.402823e38`,`-3.402823e38`];default:throw Error(`Unsupported WebGPU extent type for ${e}`)}}function $y(){let e=new Uint16Array([255]);return new Uint8Array(e.buffer)[0]>0}var eb=`\
const LE: bool = ${$y()?`true`:`false`};
const F32_NAN: u32 = 0xffffffffu;
const F32_INF: u32 = 0x7f800000u;

fn roundShiftRight(value: u32, shift: i32) -> u32 {
  if (shift <= 0) {
    return value << u32(-shift);
  }

  if (shift >= 32) {
    if (shift == 32 && value > 0x80000000u) {
      return 1u;
    }
    return 0u;
  }

  let shiftU32 = u32(shift);
  let truncated = value >> shiftU32;
  let halfShift = 1u << u32(shift - 1);
  let remainder = value & ((1u << shiftU32) - 1u);
  if (remainder > halfShift || (remainder == halfShift && (truncated & 1u) == 1u)) {
    return truncated + 1u;
  }
  return truncated;
}

fn makeFloatImmediate(sign: u32, exponent: i32, mantissa: u32) -> u32 {
  return (sign << 31u) | (u32(exponent + 127) << 23u) | (mantissa & 0x7fffffu);
}

fn makeFloat(sign: u32, exponent: i32, significand: u32) -> u32 {
  if (significand == 0u) {
    return sign << 31u;
  }

  let leadingZeros = i32(countLeadingZeros(significand));
  var normalizedExponent = exponent + 31 - leadingZeros;

  if (normalizedExponent > 127) {
    return (sign << 31u) | F32_INF;
  }

  var mantissa: u32;
  if (normalizedExponent >= -126) {
    mantissa = roundShiftRight(significand, 8 - leadingZeros);
    if (mantissa >= 0x1000000u) {
      mantissa = mantissa >> 1u;
      normalizedExponent += 1;
      if (normalizedExponent > 127) {
        return (sign << 31u) | F32_INF;
      }
    }
    return makeFloatImmediate(sign, normalizedExponent, mantissa);
  }

  let subnormalShift = -149 - exponent;
  mantissa = roundShiftRight(significand, subnormalShift);
  if (mantissa >= 0x800000u) {
    return (sign << 31u) | (1u << 23u);
  }
  return (sign << 31u) | mantissa;
}

fn parseAsDouble(words: vec2<u32>) -> vec2<u32> {
  var d = words;
  if (LE) {
    d = d.yx;
  }

  let sign = (d.x >> 31u) & 1u;
  let exponentBits = (d.x >> 20u) & 0x7ffu;
  let exponent = i32(exponentBits) - 1023;
  let fractionHigh = d.x & 0xfffffu;
  let fractionLow = d.y;

  if (exponentBits == 0x7ffu) {
    if (fractionHigh == 0u && fractionLow == 0u) {
      return vec2<u32>((sign << 31u) | F32_INF, F32_NAN);
    }
    return vec2<u32>(F32_NAN);
  }

  if (exponentBits == 0u) {
    return vec2<u32>(sign << 31u);
  }

  if (exponent > 127) {
    return vec2<u32>((sign << 31u) | F32_INF, ((1u - sign) << 31u) | F32_INF);
  }

  let highSignificand = 0x800000u | (fractionHigh << 3u) | (fractionLow >> 29u);
  let lowSignificand = fractionLow & 0x1fffffffu;

  if (exponent < -126) {
    let highPart = makeFloat(sign, exponent - 23, highSignificand);
    let lowPart = makeFloat(sign, exponent - 52, lowSignificand);
    return vec2<u32>(highPart, lowPart);
  }

  let roundUp = lowSignificand > 0x10000000u ||
    (lowSignificand == 0x10000000u && (highSignificand & 1u) == 1u);

  var roundedSignificand = highSignificand + select(0u, 1u, roundUp);
  var highExponent = exponent;
  if (roundedSignificand == 0x1000000u) {
    roundedSignificand = 0x800000u;
    highExponent += 1;
  }

  if (highExponent > 127) {
    return vec2<u32>((sign << 31u) | F32_INF, ((1u - sign) << 31u) | F32_INF);
  }

  let highPart = makeFloatImmediate(sign, highExponent, roundedSignificand);

  var remainder = i32(lowSignificand);
  var lowSign = sign;
  if (roundUp) {
    remainder -= 0x20000000;
  }
  if (remainder < 0) {
    lowSign = 1u - sign;
    remainder = -remainder;
  }

  let lowPart = makeFloat(lowSign, exponent - 52, u32(remainder));
  return vec2<u32>(highPart, lowPart);
}

fn fround(x: array<u32, {X_LEN}>) -> array<f32, {RESULT_LEN}> {
  var result: array<f32, {RESULT_LEN}>;
  let n = {X_LEN}u / 2u;
  for (var i = 0u; i < n; i = i + 1u) {
    let parts = parseAsDouble(vec2<u32>(x[i * 2u], x[i * 2u + 1u]));
    result[i] = bitcast<f32>(parts.x);
    result[i + n] = bitcast<f32>(parts.y);
  }
  return result;
}
`,tb=({inputs:e,output:t,target:n})=>(Oy({module:{name:`fround`,source:eb},inputs:e,output:t,operationType:`uint32`,outputBuffer:n}),{success:!0}),nb=async({inputs:e,output:t,target:n})=>{let{ids:r,sourceValues:i}=e,a=X(r.type),o=[];r.isConstant||o.push({name:`ids`,input:r,index:o.length}),i.isConstant||o.push({name:`sourceValues`,input:i,index:o.length});let s=_y(Math.ceil(t.length/64),n.device.limits.maxComputeWorkgroupsPerDimension),c=`
${o.map(({name:e,input:t,index:n})=>Uy(e,t,n)).join(`
`)}
${rb(r,a)}
${Gy(i,t.type)}
${Ky(t,o.length)}
${qy(t)}
${Jy(t.type,t.size)}
${ib(r.type,t.type,t.size,i.length)}

@compute @workgroup_size(64) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let rowIndex = ${yy(s,64)};
  if (rowIndex >= ${t.length}u) {
    return;
  }

  let idsValue = read_ids(rowIndex);
  let result = gather(idsValue);
  write_result(rowIndex, result);
}
`,l=new ep(n.device,{source:c,shaderLayout:{bindings:[...o.map(({name:e,index:t})=>({name:e,type:`storage`,group:0,location:t})),{name:`result`,type:`storage`,group:0,location:o.length}]}}),u={};r.isConstant||(u.ids=r.buffer),i.isConstant||(u.sourceValues=i.buffer),u.result=n,l.setBindings(u);let d=n.device.beginComputePass({});return l.dispatch(d,s.x,s.y,s.z),d.end(),n.device.submit(),l.destroy(),{success:!0}};function rb(e,t){if(e.isConstant){let n=e.value;if(!n)throw Error(`Constant input ${e} is missing CPU values`);return`fn read_ids(_rowIndex: u32) -> ${t} {
  return ${xy(t,n[0]??0)};
}`}let n=e.stride/e.ValueType.BYTES_PER_ELEMENT;return`fn read_ids(rowIndex: u32) -> ${t} {
  let rowOffset = ${e.offset/e.ValueType.BYTES_PER_ELEMENT}u + rowIndex * ${n}u;
  return ids[rowOffset];
}`}function ib(e,t,n,r){let i=X(e);return`fn gather(idsValue: ${i}) -> array<${X(t)}, ${n}> {
  let sourceIndex = ${i===`u32`?`i32(idsValue)`:i===`i32`?`idsValue`:`i32(idsValue)`};
  if (sourceIndex < 0 || sourceIndex >= ${r}) {
    return zero_result();
  }
  return read_source_values(u32(sourceIndex));
}`}var ab=async({inputs:e,output:t,target:n})=>{let{segments:r}=e,i=r.isConstant?[]:[{name:`segments`,input:r,index:0}],a=_y(Math.ceil(t.length/64),n.device.limits.maxComputeWorkgroupsPerDimension),o=`
${i.map(({name:e,input:t,index:n})=>Uy(e,t,n)).join(`
`)}
${Wy(`segments`,r,`uint32`)}
${Ky(t,i.length)}
${qy(t)}
${ob(r.length)}

@compute @workgroup_size(64) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let rowIndex = ${yy(a,64)};
  if (rowIndex >= ${t.length}u) {
    return;
  }

  let result = segmented_map(rowIndex);
  write_result(rowIndex, result);
}
`,s=new ep(n.device,{source:o,shaderLayout:{bindings:[...i.map(({name:e,index:t})=>({name:e,type:`storage`,group:0,location:t})),{name:`result`,type:`storage`,group:0,location:i.length}]}}),c=Object.fromEntries(i.map(({name:e,input:t})=>[e,t.buffer]));c.result=n,s.setBindings(c);let l=n.device.beginComputePass({});return s.dispatch(l,a.x,a.y,a.z),l.end(),n.device.submit(),s.destroy(),{success:!0}};function ob(e){return`fn segmented_map(vertexIndex: u32) -> array<u32, 2> {
  var low = 0i;
  var high = ${e}i;
  while (low < high) {
    let mid = low + (high - low) / 2i;
    let midStart = read_segments(u32(mid))[0];
    if (midStart <= vertexIndex) {
      low = mid + 1i;
    } else {
      high = mid;
    }
  }

  let segmentIndex = u32(max(low - 1i, 0i));
  let segmentStart = read_segments(segmentIndex)[0];
  return array<u32, 2>(segmentIndex, vertexIndex - segmentStart);
}`}var sb=({inputs:e,output:t,target:n})=>{let r=e.map((e,t)=>[`x${t}`,e]);cb(n.device.limits,r);let i=r.map(([e,t])=>`${e}: array<{TYPE}, ${t.size}>`).join(`, `),a=0;return Oy({module:{name:`interleave`,source:`\
fn interleave(${i}) -> array<{TYPE}, {RESULT_LEN}> {
  var out: array<{TYPE}, {RESULT_LEN}>;
${r.map(([e,t])=>{let n=Array.from({length:t.size},(t,n)=>`  out[${a+n}] = ${e}[${n}];`).join(`
`);return a+=t.size,n}).join(`
`)}
  return out;
}
`},inputs:e,output:t,outputBuffer:n}),{success:!0}};function cb(e,t){let n=t.filter(([,e])=>!e.isConstant).length+1;if(n>e.maxStorageBuffersPerShaderStage)throw Error(`interleave() requires ${n} storage buffers, exceeding device limit ${e.maxStorageBuffersPerShaderStage}`);if(n>e.maxBindingsPerBindGroup)throw Error(`interleave() requires ${n} bindings, exceeding bind group limit ${e.maxBindingsPerBindGroup}`)}var lb=`fn row_length(x: array<{TYPE}, {X_LEN}>) -> array<f32, 1> {
  var sum = 0.0;
  for (var i = 0u; i < {X_LEN}u; i = i + 1u) {
    sum += f32(x[i]) * f32(x[i]);
  }
  return array<f32, 1>(sqrt(sum));
}
`,ub=({inputs:e,output:t,target:n})=>(Oy({module:{name:`row_length`,source:lb},inputs:e,output:t,operationType:`float32`,outputBuffer:n}),{success:!0}),db=async({inputs:e,output:t,target:n})=>{let r=Cy(t.type);return Oy({module:{name:`select`,source:`// inline expression select
`},inputs:e,output:t,operationType:t.type,outputBuffer:n,expression:t=>{let n=fb(`condition`,e.condition,t,r),i=fb(`whenTrue`,e.whenTrue,t,r);return`select(${fb(`whenFalse`,e.whenFalse,t,r)}, ${i}, ${n} != ${r})`}}),{success:!0}};function fb(e,t,n,r){return n<t.size?`${e}[${n}]`:t.size===1?`${e}[0]`:r}var pb=64,mb=({inputs:e,output:t,target:n})=>{let r=_y(Math.ceil(t.length/pb),n.device.limits.maxComputeWorkgroupsPerDimension),i=`\
@group(0) @binding(0) var<storage, read_write> result: array<i32>;

@compute @workgroup_size(${pb}) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let rowIndex = ${yy(r,pb)};
  if (rowIndex >= ${t.length}u) {
    return;
  }

  let rowOffset = ${t.offset/t.ValueType.BYTES_PER_ELEMENT}u + rowIndex * ${t.stride/t.ValueType.BYTES_PER_ELEMENT}u;
  result[rowOffset] = ${e.start} + i32(rowIndex) * ${e.step};
}
`,a=new ep(n.device,{source:i,shaderLayout:{bindings:[{name:`result`,type:`storage`,group:0,location:0}]}});a.setBindings({result:n});let o=n.device.beginComputePass({});return a.dispatch(o,r.x,r.y,r.z),o.end(),n.device.submit(),a.destroy(),{success:!0}},hb=({inputs:e,output:t,target:n})=>{let{columns:r}=e;return Oy({module:{name:`swizzle`,source:`// swizzle expression handled inline`},expression:e=>`x[${r[e]}]`,inputs:{x:e.x},output:t,outputBuffer:n}),{success:!0}},gb=t({arithmetic:()=>Ry,dot:()=>By,equalAll:()=>Hy,extent:()=>Yy,fround:()=>tb,gather:()=>nb,interleave:()=>sb,length:()=>ub,segmentedMap:()=>ab,select:()=>db,sequence:()=>mb,swizzle:()=>hb}),_b=class{constructor(e,{id:t,isTransitionAttribute:n}){this.packedBuffers={},this.device=e,this.id=t,this.isTransitionAttribute=n,this.device.type===`webgpu`&&ty.add(`webgpu`,{interleave:sb})}hasGroups(e){return this.device.type===`webgpu`&&Object.values(e).some(e=>!!e.settings.bufferGroup)}finalize(){for(let e of Object.values(this.packedBuffers))e.packed.destroy();this.packedBuffers={}}getBufferLayouts(e,t){let n=this._getPackedGroups(e,t,{requireValues:!1,excludeAttributes:{}});return this._getBufferLayouts(e,n,t)}getBindings(e,t,n,r){let i=this._getPackedGroups(e,n,{requireValues:!0,excludeAttributes:r}),a={},o=new Set;for(let e of i.values()){let n=!this.packedBuffers[e.id]||e.attributes.some(e=>!!t[e.id]);a[e.id]=this._getPackedBuffer(e,n);for(let t of e.attributes)o.add(t.id)}return{bufferLayouts:this._getBufferLayouts(e,i,n).filter(t=>!r[t.name]&&!e[t.name]?.settings.isIndexed),buffers:a,groupedAttributeIds:o}}_getPackedGroups(e,t,{requireValues:n,excludeAttributes:r}){let i=new Map;for(let t of Object.values(e)){let e=t.settings.bufferGroup;if(!e)continue;let n=i.get(e)||[];n.push(t),i.set(e,n)}let a=new Map;for(let[e,o]of i){let i=this._getPackedGroup(e,o,t,n,r);i&&a.set(e,i)}return a}_getPackedGroup(e,t,n,r,i){if(t.length<2)return null;let a=t.map(e=>e.getBufferLayout(n)),o=a[0].stepMode,s=Math.max(1,t[0].numInstances),c=r&&t.every(e=>e.isConstant);for(let e=0;e<t.length;e++){let n=t[e],c=n.getAccessor(),l=c.size*c.bytesPerElement;if(i[n.id]||n.settings.isIndexed||n.settings.noAlloc||n.doublePrecision||this.isTransitionAttribute(n.id)||a[e].stepMode!==o||n.numInstances!==t[0].numInstances||(c.offset||0)!==0||(c.vertexOffset||0)!==0||hv(c)!==l||r&&(n.isConstant?!n.getConstantValue()||n.getConstantValue().byteLength<l:!ArrayBuffer.isView(n.value)||n.value.byteLength<s*l))return null}let l={},u=[],d=0;for(let e=0;e<t.length;e++){let n=t[e];d=vb(d),l[n.id]=d;for(let t of a[e].attributes||[])u.push({...t,byteOffset:d+(t.byteOffset||0)});d+=hv(n.getAccessor())}return d=vb(d),{id:e,attributes:t,byteStride:d,byteOffsets:l,rowCount:s,layout:{name:e,byteStride:c?0:d,stepMode:o,attributes:u}}}_getBufferLayouts(e,t,n){let r=[],i=new Set,a=new Set;for(let e of t.values())for(let t of e.attributes)a.add(t.id);for(let o of Object.values(e)){let e=o.settings.bufferGroup,s=e&&t.get(e);s&&a.has(o.id)?i.has(s.id)||(r.push(s.layout),i.add(s.id)):r.push(o.getBufferLayout(n))}return r}_getPackedBuffer(e,t){let n=JSON.stringify({byteStride:e.layout.byteStride,attributes:e.layout.attributes}),r=this.packedBuffers[e.id];if(r&&r.layoutKey===n||(t=!0),t){r&&(r.packed.destroy(),delete this.packedBuffers[e.id]);let t=this._interleavePackedGroup(e);return this.packedBuffers[e.id]={packed:t,layoutKey:n},t.buffer}if(!r)throw Error(`Attribute buffer group ${e.id} has no packed buffer`);return r.packed.buffer}_interleavePackedGroup(e){let t=sy(...e.attributes.map(t=>this._getInterleaveInput(e,t)));return cy(this.device,t),t}_getInterleaveInput(e,t){let n=hv(t.getAccessor()),r=e.byteOffsets[t.id];if(yb(`${e.id}.${t.id} rowByteLength`,n),yb(`${e.id}.${t.id} groupByteOffset`,r),t.isConstant){let r=t.getConstantValue();if(!r)throw Error(`Attribute group ${e.id} is missing constant value ${t.id}`);return yb(`${e.id}.${t.id} constant byteOffset`,r.byteOffset),new xe({id:t.id,type:`uint32`,size:n/4,isConstant:!0,value:new Uint32Array(r.buffer,r.byteOffset,n/Uint32Array.BYTES_PER_ELEMENT)})}let i=t.getBuffer(),a=t.byteOffset,o=t.getAccessor().stride||n;if(yb(`${e.id}.${t.id} byteOffset`,a),yb(`${e.id}.${t.id} stride`,o),!i)throw Error(`Attribute group ${e.id} cannot interleave missing buffer ${t.id}`);return new xe({id:t.id,type:`uint32`,size:n/4,offset:a,stride:o,length:e.rowCount,buffer:i})}};function vb(e){return Math.ceil(e/4)*4}function yb(e,t){if(t%4!=0)throw Error(`Attribute buffer groups require 32-bit alignment: ${e}=${t}`)}function bb(e){let{source:t,target:n,start:r=0,size:i,getData:a}=e,o=e.end||n.length,s=t.length,c=o-r;if(s>c){n.set(t.subarray(0,c),r);return}if(n.set(t,r),!a)return;let l=s;for(;l<c;){let e=a(l,t);for(let t=0;t<i;t++)n[r+l]=e[t]||0,l++}}function xb({source:e,target:t,size:n,getData:r,sourceStartIndices:i,targetStartIndices:a}){if(!i||!a)return bb({source:e,target:t,size:n,getData:r}),t;let o=0,s=0,c=r&&((e,t)=>r(e+s,t)),l=Math.min(i.length,a.length);for(let r=1;r<l;r++){let l=i[r]*n,u=a[r]*n;bb({source:e.subarray(o,l),target:t,start:s,end:u,size:n,getData:c}),o=l,s=u}return s<t.length&&bb({source:[],target:t,start:s,size:n,getData:c}),t}function Sb(e){let{device:t,settings:n,value:r}=e,i=new Av(t,n);return i.setData({value:r instanceof Float64Array?new Float64Array:new Float32Array,normalized:n.normalized}),i}function Cb(e){switch(e){case 1:return`float`;case 2:return`vec2`;case 3:return`vec3`;case 4:return`vec4`;default:throw Error(`No defined attribute type for size "${e}"`)}}function wb(e){switch(e){case 1:return`float32`;case 2:return`float32x2`;case 3:return`float32x3`;case 4:return`float32x4`;default:throw Error(`invalid type size`)}}function Tb(e){e.push(e.shift())}function Eb(e,t){let{settings:n,value:r,size:i}=e,a=e.isDoublePrecisionBuffer?2:1,o=0,{shaderAttributes:s}=e.settings;if(s)for(let e of Object.values(s))o=Math.max(o,e.vertexOffset??0);return(n.noAlloc?r.length:(t+o)*i)*a}function Db({device:e,source:t,target:n}){return(!n||n.byteLength<t.byteLength)&&(n?.destroy(),n=e.createBuffer({byteLength:t.byteLength,usage:t.usage})),n}function Ob({device:e,buffer:t,attribute:n,fromLength:r,toLength:i,fromStartIndices:a,getData:o=e=>e}){let s=n.isDoublePrecisionBuffer?2:1,c=n.size*s,l=n.byteOffset,u=n.settings.bytesPerElement<4?l/n.settings.bytesPerElement*4:l,d=n.startIndices,f=a&&d,p=n.isConstant;if(!f&&t&&r>=i)return t;let m=n.value instanceof Float64Array?Float32Array:n.value.constructor,h=p?n.value:new m(n.getBuffer().readSyncWebGL(l,i*m.BYTES_PER_ELEMENT).buffer);if(n.settings.normalized&&!p){let e=o;o=(t,r)=>n.normalizeConstant(e(t,r))}let g=p?(e,t)=>o(h,t):(e,t)=>o(h.subarray(e,e+c),t),_=t?new Float32Array(t.readSyncWebGL(u,r*4).buffer):new Float32Array,v=new Float32Array(i);return xb({source:_,target:v,sourceStartIndices:a,targetStartIndices:d,size:c,getData:g}),(!t||t.byteLength<v.byteLength+u)&&(t?.destroy(),t=e.createBuffer({byteLength:v.byteLength+u,usage:35050})),t.write(v,u),t}var kb=class{constructor({device:e,attribute:t,timeline:n}){this.buffers=[],this.currentLength=0,this.device=e,this.transition=new Fp(n),this.attribute=t,this.attributeInTransition=Sb(t),this.currentStartIndices=t.startIndices}get inProgress(){return this.transition.inProgress}start(e,t,n=1/0){this.settings=e,this.currentStartIndices=this.attribute.startIndices,this.currentLength=Eb(this.attribute,t),this.transition.start({...e,duration:n})}update(){let e=this.transition.update();return e&&this.onUpdate(),e}setBuffer(e){let{stride:t}=this.attributeInTransition.getAccessor();this.attributeInTransition.setData({buffer:e,normalized:this.attribute.settings.normalized,value:this.attributeInTransition.value,stride:t})}cancel(){this.transition.cancel()}delete(){this.cancel();for(let e of this.buffers)e.destroy();this.buffers.length=0}},Ab=class extends kb{constructor({device:e,attribute:t,timeline:n}){super({device:e,attribute:t,timeline:n}),this.type=`interpolation`,this.hasUpdated=!1,this.transform=Fb(e,t)}start(e,t){let n=this.currentLength,r=this.currentStartIndices;if(super.start(e,t,e.duration),e.duration<=0){this.transition.cancel();return}let{buffers:i,attribute:a}=this;this.hasUpdated&&Tb(i),this.hasUpdated=!1,i[0]=Ob({device:this.device,buffer:i[0],attribute:a,fromLength:n,toLength:this.currentLength,fromStartIndices:r,getData:e.enter}),i[1]=Db({device:this.device,source:i[0],target:i[1]}),this.setBuffer(i[1]);let{transform:o}=this,s=o.model,c=Math.floor(this.currentLength/a.size);Pb(a)&&(c/=2),s.setVertexCount(c),a.isConstant?(s.setAttributes({aFrom:i[0]}),s.setConstantAttributes({aTo:a.value})):s.setAttributes({aFrom:i[0],aTo:a.getBuffer()}),o.transformFeedback.setBuffers({vCurrent:i[1]})}onUpdate(){let{duration:e,easing:t}=this.settings,{time:n}=this.transition,r=n/e;t&&(r=t(r));let{model:i}=this.transform,a={time:r};i.shaderInputs.setProps({interpolation:a}),this.transform.run({discard:!0}),this.hasUpdated=!0}delete(){super.delete(),this.transform.destroy()}},jb={name:`interpolation`,vs:`layout(std140) uniform interpolationUniforms {
  float time;
} interpolation;
`,uniformTypes:{time:`f32`}},Mb=`#version 300 es
#define SHADER_NAME interpolation-transition-vertex-shader

in ATTRIBUTE_TYPE aFrom;
in ATTRIBUTE_TYPE aTo;
out ATTRIBUTE_TYPE vCurrent;

void main(void) {
  vCurrent = mix(aFrom, aTo, interpolation.time);
  gl_Position = vec4(0.0);
}
`,Nb=`#version 300 es
#define SHADER_NAME interpolation-transition-vertex-shader

in ATTRIBUTE_TYPE aFrom;
in ATTRIBUTE_TYPE aFrom64Low;
in ATTRIBUTE_TYPE aTo;
in ATTRIBUTE_TYPE aTo64Low;
out ATTRIBUTE_TYPE vCurrent;
out ATTRIBUTE_TYPE vCurrent64Low;

vec2 mix_fp64(vec2 a, vec2 b, float x) {
  vec2 range = sub_fp64(b, a);
  return sum_fp64(a, mul_fp64(range, vec2(x, 0.0)));
}

void main(void) {
  for (int i=0; i<ATTRIBUTE_SIZE; i++) {
    vec2 value = mix_fp64(vec2(aFrom[i], aFrom64Low[i]), vec2(aTo[i], aTo64Low[i]), interpolation.time);
    vCurrent[i] = value.x;
    vCurrent64Low[i] = value.y;
  }
  gl_Position = vec4(0.0);
}
`;function Pb(e){return e.isDoublePrecisionBuffer}function Fb(e,t){let n=t.size,r=Cb(n),i=wb(n),a=t.getBufferLayout();return Pb(t)?new Zf(e,{vs:Nb,bufferLayout:[{name:`aFrom`,byteStride:8*n,attributes:[{attribute:`aFrom`,format:i,byteOffset:0},{attribute:`aFrom64Low`,format:i,byteOffset:4*n}]},{name:`aTo`,byteStride:8*n,attributes:[{attribute:`aTo`,format:i,byteOffset:0},{attribute:`aTo64Low`,format:i,byteOffset:4*n}]}],modules:[ms,jb],defines:{ATTRIBUTE_TYPE:r,ATTRIBUTE_SIZE:n},moduleSettings:{},varyings:[`vCurrent`,`vCurrent64Low`],bufferMode:35980,disableWarnings:!0}):new Zf(e,{vs:Mb,bufferLayout:[{name:`aFrom`,format:i},{name:`aTo`,format:a.attributes[0].format}],modules:[jb],defines:{ATTRIBUTE_TYPE:r},varyings:[`vCurrent`],disableWarnings:!0})}var Ib=class extends kb{constructor({device:e,attribute:t,timeline:n}){super({device:e,attribute:t,timeline:n}),this.type=`spring`,this.texture=Vb(e),this.framebuffer=Hb(e,this.texture),this.transform=Bb(e,t)}start(e,t){let n=this.currentLength,r=this.currentStartIndices;super.start(e,t);let{buffers:i,attribute:a}=this;for(let t=0;t<2;t++)i[t]=Ob({device:this.device,buffer:i[t],attribute:a,fromLength:n,toLength:this.currentLength,fromStartIndices:r,getData:e.enter});i[2]=Db({device:this.device,source:i[0],target:i[2]}),this.setBuffer(i[1]);let{model:o}=this.transform;o.setVertexCount(Math.floor(this.currentLength/a.size)),a.isConstant?o.setConstantAttributes({aTo:a.value}):o.setAttributes({aTo:a.getBuffer()})}onUpdate(){let{buffers:e,transform:t,framebuffer:n,transition:r}=this,i=this.settings;t.model.setAttributes({aPrev:e[0],aCur:e[1]}),t.transformFeedback.setBuffers({vNext:e[2]});let a={stiffness:i.stiffness,damping:i.damping};t.model.shaderInputs.setProps({spring:a}),t.run({framebuffer:n,discard:!1,parameters:{viewport:[0,0,1,1]},clearColor:[0,0,0,0]}),Tb(e),this.setBuffer(e[1]),this.device.readPixelsToArrayWebGL(n)[0]>0||r.end()}delete(){super.delete(),this.transform.destroy(),this.texture.destroy(),this.framebuffer.destroy()}},Lb={name:`spring`,vs:`layout(std140) uniform springUniforms {
  float damping;
  float stiffness;
} spring;
`,uniformTypes:{damping:`f32`,stiffness:`f32`}},Rb=`#version 300 es
#define SHADER_NAME spring-transition-vertex-shader

#define EPSILON 0.00001

in ATTRIBUTE_TYPE aPrev;
in ATTRIBUTE_TYPE aCur;
in ATTRIBUTE_TYPE aTo;
out ATTRIBUTE_TYPE vNext;
out float vIsTransitioningFlag;

ATTRIBUTE_TYPE getNextValue(ATTRIBUTE_TYPE cur, ATTRIBUTE_TYPE prev, ATTRIBUTE_TYPE dest) {
  ATTRIBUTE_TYPE velocity = cur - prev;
  ATTRIBUTE_TYPE delta = dest - cur;
  ATTRIBUTE_TYPE force = delta * spring.stiffness;
  ATTRIBUTE_TYPE resistance = velocity * spring.damping;
  return force - resistance + velocity + cur;
}

void main(void) {
  bool isTransitioning = length(aCur - aPrev) > EPSILON || length(aTo - aCur) > EPSILON;
  vIsTransitioningFlag = isTransitioning ? 1.0 : 0.0;

  vNext = getNextValue(aCur, aPrev, aTo);
  gl_Position = vec4(0, 0, 0, 1);
  gl_PointSize = 100.0;
}
`,zb=`#version 300 es
#define SHADER_NAME spring-transition-is-transitioning-fragment-shader

in float vIsTransitioningFlag;

out vec4 fragColor;

void main(void) {
  if (vIsTransitioningFlag == 0.0) {
    discard;
  }
  fragColor = vec4(1.0);
}`;function Bb(e,t){let n=Cb(t.size),r=wb(t.size);return new Zf(e,{vs:Rb,fs:zb,bufferLayout:[{name:`aPrev`,format:r},{name:`aCur`,format:r},{name:`aTo`,format:t.getBufferLayout().attributes[0].format}],varyings:[`vNext`],modules:[Lb],defines:{ATTRIBUTE_TYPE:n},parameters:{depthCompare:`always`,blendColorOperation:`max`,blendColorSrcFactor:`one`,blendColorDstFactor:`one`,blendAlphaOperation:`max`,blendAlphaSrcFactor:`one`,blendAlphaDstFactor:`one`}})}function Vb(e){return e.createTexture({data:new Uint8Array(4),format:`rgba8unorm`,width:1,height:1})}function Hb(e,t){return e.createFramebuffer({id:`spring-transition-is-transitioning-framebuffer`,width:1,height:1,colorAttachments:[t]})}var Ub={interpolation:Ab,spring:Ib},Wb=class{constructor(e,{id:t,timeline:n}){if(!e)throw Error(`AttributeTransitionManager is constructed without device`);this.id=t,this.device=e,this.timeline=n,this.transitions={},this.needsRedraw=!1,this.numInstances=1}finalize(){for(let e in this.transitions)this._removeTransition(e)}update({attributes:e,transitions:t,numInstances:n}){this.numInstances=n||1;for(let n in e){let r=e[n],i=r.getTransitionSetting(t);i&&this._updateAttribute(n,r,i)}for(let n in this.transitions){let r=e[n];r&&r.getTransitionSetting(t)||this._removeTransition(n)}}hasAttribute(e){let t=this.transitions[e];return t&&t.inProgress}getAttributes(){let e={};for(let t in this.transitions){let n=this.transitions[t];n.inProgress&&(e[t]=n.attributeInTransition)}return e}run(){if(this.numInstances===0)return!1;for(let e in this.transitions)this.transitions[e].update()&&(this.needsRedraw=!0);let e=this.needsRedraw;return this.needsRedraw=!1,e}_removeTransition(e){this.transitions[e].delete(),delete this.transitions[e]}_updateAttribute(e,t,n){let r=this.transitions[e],i=!r||r.type!==n.type;if(i){r&&this._removeTransition(e);let a=Ub[n.type];a?this.transitions[e]=new a({attribute:t,timeline:this.timeline,device:this.device}):(z.error(`unsupported transition type '${n.type}'`)(),i=!1)}(i||t.needsRedraw())&&(this.needsRedraw=!0,this.transitions[e].start(n,this.numInstances))}},Gb=`attributeManager.invalidate`,Kb=`attributeManager.updateStart`,qb=`attributeManager.updateEnd`,Jb=`attribute.updateStart`,Yb=`attribute.allocate`,Xb=`attribute.updateEnd`,Zb=class{constructor(e,{id:t=`attribute-manager`,stats:n,timeline:r}={}){this.mergeBoundsMemoized=Ul(Bd),this.id=t,this.device=e,this.attributes={},this.updateTriggers={},this.needsRedraw=!0,this.userData={},this.stats=n,this.attributeTransitionManager=new Wb(e,{id:`${t}-transitions`,timeline:r}),this.attributeBufferGroups=e.type===`webgpu`?new _b(e,{id:t,isTransitionAttribute:e=>this.attributeTransitionManager.hasAttribute(e)}):null,Object.seal(this)}finalize(){this.attributeBufferGroups?.finalize();for(let e in this.attributes)this.attributes[e].delete();this.attributeTransitionManager.finalize()}getNeedsRedraw(e={clearRedrawFlags:!1}){let t=this.needsRedraw;return this.needsRedraw=this.needsRedraw&&!e.clearRedrawFlags,t&&this.id}setNeedsRedraw(){this.needsRedraw=!0}add(e){this._add(e)}addInstanced(e){this._add(e,{stepMode:`instance`})}remove(e){for(let t of e)this.attributes[t]!==void 0&&(this.attributes[t].delete(),delete this.attributes[t])}invalidate(e,t){let n=this._invalidateTrigger(e,t);B(Gb,this,e,n)}invalidateAll(e){for(let t in this.attributes)this.attributes[t].setNeedsUpdate(t,e);B(Gb,this,`all`)}update({data:e,numInstances:t,startIndices:n=null,transitions:r,props:i={},buffers:a={},context:o={}}){let s=!1;B(Kb,this),this.stats&&this.stats.get(`Update Attributes`).timeStart();for(let r in this.attributes){let c=this.attributes[r],l=c.settings.accessor;c.startIndices=n,c.numInstances=t,i[r]&&z.removed(`props.${r}`,`data.attributes.${r}`)(),c.setExternalBuffer(a[r])||c.setBinaryValue(typeof l==`string`?a[l]:void 0,e.startIndices)||typeof l==`string`&&!a[l]&&c.setConstantValue(o,i[l])||c.needsUpdate()&&(s=!0,this._updateAttribute({attribute:c,numInstances:t,data:e,props:i,context:o})),this.needsRedraw=this.needsRedraw||c.needsRedraw()}s&&B(qb,this,t),this.stats&&(this.stats.get(`Update Attributes`).timeEnd(),s&&this.stats.get(`Attributes updated`).incrementCount()),this.attributeTransitionManager.update({attributes:this.attributes,numInstances:t,transitions:r})}updateTransition(){let{attributeTransitionManager:e}=this,t=e.run();return this.needsRedraw=this.needsRedraw||t,t}getAttributes(){return{...this.attributes,...this.attributeTransitionManager.getAttributes()}}getBounds(e){let t=e.map(e=>this.attributes[e]?.getBounds());return this.mergeBoundsMemoized(t)}getChangedAttributes(e={clearChangedFlags:!1}){let{attributes:t,attributeTransitionManager:n}=this,r={...n.getAttributes()};for(let i in t){let a=t[i];a.needsRedraw(e)&&!n.hasAttribute(i)&&(r[i]=a)}return r}getBufferLayouts(e){return this.hasBufferGroups()?this.attributeBufferGroups.getBufferLayouts(this.getAttributes(),e):Object.values(this.getAttributes()).map(t=>t.getBufferLayout(e))}hasBufferGroups(){return!!this.attributeBufferGroups?.hasGroups(this.attributes)}getBufferGroupBindings(e,t,n={}){return this.attributeBufferGroups?this.attributeBufferGroups.getBindings(this.getAttributes(),e,t,n):{bufferLayouts:this.getBufferLayouts(t),buffers:{},groupedAttributeIds:new Set}}_add(e,t){for(let n in e){let r=e[n],i={...r,id:n,size:r.isIndexed&&1||r.size||1,...t};this.attributes[n]=new Av(this.device,i)}this._mapUpdateTriggersToAttributes()}_mapUpdateTriggersToAttributes(){let e={};for(let t in this.attributes)this.attributes[t].getUpdateTriggers().forEach(n=>{e[n]||(e[n]=[]),e[n].push(t)});this.updateTriggers=e}_invalidateTrigger(e,t){let{attributes:n,updateTriggers:r}=this,i=r[e];return i&&i.forEach(e=>{let r=n[e];r&&r.setNeedsUpdate(r.id,t)}),i}_updateAttribute(e){let{attribute:t,numInstances:n}=e;B(Jb,t),t.constant?t.setConstantValue(e.context,t.value):(t.allocate(n)&&B(Yb,t,n),t.updateBuffer(e)&&(this.needsRedraw=!0,B(Xb,t,n)))}},Qb=class extends Fp{get value(){return this._value}_onUpdate(){let{time:e,settings:{fromValue:t,toValue:n,duration:r,easing:i}}=this,a=i(e/r);this._value=Va(t,n,a)}},$b=1e-5;function ex(e,t,n,r,i){let a=t-e;return(n-t)*i+-a*r+a+t}function tx(e,t,n,r,i){if(Array.isArray(n)){let a=[];for(let o=0;o<n.length;o++)a[o]=ex(e[o],t[o],n[o],r,i);return a}return ex(e,t,n,r,i)}function nx(e,t){if(Array.isArray(e)){let n=0;for(let r=0;r<e.length;r++){let i=e[r]-t[r];n+=i*i}return Math.sqrt(n)}return Math.abs(e-t)}var rx={interpolation:Qb,spring:class extends Fp{get value(){return this._currValue}_onUpdate(){let{fromValue:e,toValue:t,damping:n,stiffness:r}=this.settings,{_prevValue:i=e,_currValue:a=e}=this,o=tx(i,a,t,n,r),s=nx(o,t),c=nx(o,a);s<$b&&c<$b&&(o=t,this.end()),this._prevValue=a,this._currValue=o}}},ix=class{constructor(e){this.transitions=new Map,this.timeline=e}get active(){return this.transitions.size>0}add(e,t,n,r){let{transitions:i}=this;if(i.has(e)){let n=i.get(e),{value:r=n.settings.fromValue}=n;t=r,this.remove(e)}if(r=kv(r),!r)return;let a=rx[r.type];if(!a){z.error(`unsupported transition type '${r.type}'`)();return}let o=new a(this.timeline);o.start({...r,fromValue:t,toValue:n}),i.set(e,o)}remove(e){let{transitions:t}=this;t.has(e)&&(t.get(e).cancel(),t.delete(e))}update(){let e={};for(let[t,n]of this.transitions)n.update(),e[t]=n.value,n.inProgress||this.remove(t);return e}clear(){for(let e of this.transitions.keys())this.remove(e)}};function ax(e){let t=e[cp];for(let n in t){let r=t[n],{validate:i}=r;if(i&&!i(e[n],r))throw Error(`Invalid prop ${n}: ${e[n]}`)}}function ox(e,t){let n=cx({newProps:e,oldProps:t,propTypes:e[cp],ignoreProps:{data:null,updateTriggers:null,extensions:null,transitions:null}}),r=ux(e,t),i=!1;return r||(i=dx(e,t)),{dataChanged:r,propsChanged:n,updateTriggersChanged:i,extensionsChanged:fx(e,t),transitionsChanged:sx(e,t)}}function sx(e,t){if(!e.transitions)return!1;let n={},r=e[cp],i=!1;for(let a in e.transitions){let o=r[a],s=o&&o.type;(s===`number`||s===`color`||s===`array`)&&lx(e[a],t[a],o)&&(n[a]=!0,i=!0)}return i?n:!1}function cx({newProps:e,oldProps:t,ignoreProps:n={},propTypes:r={},triggerName:i=`props`}){if(t===e)return!1;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return`${i} changed shallowly`;for(let a of Object.keys(e))if(!(a in n)){if(!(a in t))return`${i}.${a} added`;let n=lx(e[a],t[a],r[a]);if(n)return`${i}.${a} ${n}`}for(let a of Object.keys(t))if(!(a in n)){if(!(a in e))return`${i}.${a} dropped`;if(!Object.hasOwnProperty.call(e,a)){let n=lx(e[a],t[a],r[a]);if(n)return`${i}.${a} ${n}`}}return!1}function lx(e,t,n){let r=n&&n.equal;return r&&!r(e,t,n)||!r&&(r=e&&t&&e.equals,r&&!r.call(e,t))?`changed deeply`:!r&&t!==e?`changed shallowly`:null}function ux(e,t){if(t===null)return`oldProps is null, initial diff`;let n=!1,{dataComparator:r,_dataDiff:i}=e;return r?r(e.data,t.data)||(n=`Data comparator detected a change`):e.data!==t.data&&(n=`A new data container was supplied`),n&&i&&(n=i(e.data,t.data)||n),n}function dx(e,t){if(t===null||`all`in e.updateTriggers&&px(e,t,`all`))return{all:!0};let n={},r=!1;for(let i in e.updateTriggers)i!==`all`&&px(e,t,i)&&(n[i]=!0,r=!0);return r?n:!1}function fx(e,t){if(t===null)return!0;let n=t.extensions,{extensions:r}=e;if(r===n)return!1;if(!n||!r||r.length!==n.length)return!0;for(let e=0;e<r.length;e++)if(!r[e].equals(n[e]))return!0;return!1}function px(e,t,n){let r=e.updateTriggers[n];r??={};let i=t.updateTriggers[n];return i??={},cx({oldProps:i,newProps:r,triggerName:n})}var mx=`count(): argument not an object`,hx=`count(): argument not a container`;function gx(e){if(!vx(e))throw Error(mx);if(typeof e.count==`function`)return e.count();if(Number.isFinite(e.size))return e.size;if(Number.isFinite(e.length))return e.length;if(_x(e))return Object.keys(e).length;throw Error(hx)}function _x(e){return typeof e==`object`&&!!e&&e.constructor===Object}function vx(e){return typeof e==`object`&&!!e}function yx(e,t){if(!t)return e;let n={...e,...t};if(`defines`in t&&(n.defines={...e.defines,...t.defines}),`modules`in t&&(n.modules=(e.modules||[]).concat(t.modules),t.modules.some(e=>e.name===`project64`))){let e=n.modules.findIndex(e=>e.name===`project32`);e>=0&&n.modules.splice(e,1)}if(`inject`in t){if(!e.inject)n.inject=t.inject;else{let r={...e.inject};for(let e in t.inject)r[e]=(r[e]||``)+t.inject[e];n.inject=r}}return n}var bx={minFilter:`linear`,mipmapFilter:`linear`,magFilter:`linear`,addressModeU:`clamp-to-edge`,addressModeV:`clamp-to-edge`},xx={};function Sx(e,t,n,r){if(n instanceof I)return n;n.constructor&&n.constructor.name!==`Object`&&(n={data:n});let i=null;n.compressed&&(i={minFilter:`linear`,mipmapFilter:n.data.length>1?`nearest`:`linear`});let{width:a,height:o}=n.data,s=t.createTexture({...n,sampler:{...bx,...i,...r},mipLevels:t.getMipLevelCount(a,o)});return t.type===`webgl`?s.generateMipmapsWebGL():t.type===`webgpu`&&t.generateMipmapsWebGPU(s),xx[s.id]=e,s}function Cx(e,t){t&&t instanceof I&&xx[t.id]===e&&(t.delete(),delete xx[t.id])}var wx={boolean:{validate(e,t){return!0},equal(e,t,n){return!!e==!!t}},number:{validate(e,t){return Number.isFinite(e)&&(!(`max`in t)||e<=t.max)&&(!(`min`in t)||e>=t.min)}},color:{validate(e,t){return t.optional&&!e||Ox(e)&&(e.length===3||e.length===4)},equal(e,t,n){return G(e,t,1)}},accessor:{validate(e,t){let n=kx(e);return n===`function`||n===kx(t.value)},equal(e,t,n){return typeof t==`function`||G(e,t,1)}},array:{validate(e,t){return t.optional&&!e||Ox(e)},equal(e,t,n){let{compare:r}=n;return r?G(e,t,Number.isInteger(r)?r:+!!r):e===t}},object:{equal(e,t,n){if(n.ignore)return!0;let{compare:r}=n;return r?G(e,t,Number.isInteger(r)?r:+!!r):e===t}},function:{validate(e,t){return t.optional&&!e||typeof e==`function`},equal(e,t,n){return!n.compare&&n.ignore!==!1||e===t}},data:{transform:(e,t,n)=>{if(!e)return e;let{dataTransform:r}=n.props;return r?r(e):typeof e.shape==`string`&&e.shape.endsWith(`-table`)&&Array.isArray(e.data)?e.data:e}},image:{transform:(e,t,n)=>{let r=n.context;return!r||!r.device?null:Sx(n.id,r.device,e,{...t.parameters,...n.props.textureParameters})},release:(e,t,n)=>{Cx(n.id,e)}}};function Tx(e){let t={},n={},r={};for(let[i,a]of Object.entries(e)){let e=a?.deprecatedFor;if(e)r[i]=Array.isArray(e)?e:[e];else{let e=Ex(i,a);t[i]=e,n[i]=e.value}}return{propTypes:t,defaultProps:n,deprecatedProps:r}}function Ex(e,t){switch(kx(t)){case`object`:return Dx(e,t);case`array`:return Dx(e,{type:`array`,value:t,compare:!1});case`boolean`:return Dx(e,{type:`boolean`,value:t});case`number`:return Dx(e,{type:`number`,value:t});case`function`:return Dx(e,{type:`function`,value:t,compare:!0});default:return{name:e,type:`unknown`,value:t}}}function Dx(e,t){return`type`in t?{name:e,...wx[t.type],...t}:`value`in t?{name:e,type:kx(t.value),...t}:{name:e,type:`object`,value:t}}function Ox(e){return Array.isArray(e)||ArrayBuffer.isView(e)}function kx(e){return Ox(e)?`array`:e===null?`null`:typeof e}function Ax(e,t){let n;for(let e=t.length-1;e>=0;e--){let r=t[e];`extensions`in r&&(n=r.extensions)}let r=Mx(e.constructor,n),i=Object.create(r);i[sp]=e,i[dp]={},i[fp]={};for(let e=0;e<t.length;++e){let n=t[e];for(let e in n)i[e]=n[e]}return Object.freeze(i),i}var jx=`_mergedDefaultProps`;function Mx(e,t){if(!(e instanceof Hx.constructor))return{};let n=jx;if(t)for(let e of t){let t=e.constructor;t&&(n+=`:${t.extensionName||t.name}`)}return zx(e,n)||(e[n]=Nx(e,t||[]))}function Nx(e,t){if(!e.prototype)return null;let n=Mx(Object.getPrototypeOf(e)),r=Tx(zx(e,`defaultProps`)||{}),i=Object.assign(Object.create(null),n,r.defaultProps),a=Object.assign(Object.create(null),n?.[cp],r.propTypes),o=Object.assign(Object.create(null),n?.[lp],r.deprecatedProps);for(let e of t){let t=Mx(e.constructor);t&&(Object.assign(i,t),Object.assign(a,t[cp]),Object.assign(o,t[lp]))}return Px(i,e),Ix(i,a),Fx(i,o),i[cp]=a,i[lp]=o,t.length===0&&!Rx(e,`_propTypes`)&&(e._propTypes=a),i}function Px(e,t){let n=Bx(t);Object.defineProperties(e,{id:{writable:!0,value:n}})}function Fx(e,t){for(let n in t)Object.defineProperty(e,n,{enumerable:!1,set(e){let r=`${this.id}: ${n}`;for(let r of t[n])Rx(this,r)||(this[r]=e);z.deprecated(r,t[n].join(`/`))()}})}function Ix(e,t){let n={},r={};for(let e in t){let i=t[e],{name:a,value:o}=i;i.async&&(n[a]=o,r[a]=Lx(a))}e[up]=n,e[dp]={},Object.defineProperties(e,r)}function Lx(e){return{enumerable:!0,set(t){typeof t==`string`||t instanceof Promise||Cv(t)?this[dp][e]=t:this[fp][e]=t},get(){if(this[fp]){if(e in this[fp])return this[fp][e]||this[up][e];if(e in this[dp]){let t=this[sp]&&this[sp].internalState;if(t&&t.hasAsyncProp(e))return t.getAsyncProp(e)||this[up][e]}}return this[up][e]}}}function Rx(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function zx(e,t){return Rx(e,t)&&e[t]}function Bx(e){let t=e.componentName;return t||z.warn(`${e.name}.componentName not specified`)(),t||e.name}var Vx=0,Hx=class{constructor(...e){this.props=Ax(this,e),this.id=this.props.id,this.count=Vx++}clone(e){let{props:t}=this,n={};for(let e in t[up])e in t[fp]?n[e]=t[fp][e]:e in t[dp]&&(n[e]=t[dp][e]);return new this.constructor({...t,...n,...e})}};Hx.componentName=`Component`,Hx.defaultProps={};var Ux=Object.freeze({}),Wx=class{constructor(e){this.component=e,this.asyncProps={},this.onAsyncPropUpdated=()=>{},this.oldProps=null,this.oldAsyncProps=null}finalize(){for(let e in this.asyncProps){let t=this.asyncProps[e];t&&t.type&&t.type.release&&t.type.release(t.resolvedValue,t.type,this.component)}this.asyncProps={},this.component=null,this.resetOldProps()}getOldProps(){return this.oldAsyncProps||this.oldProps||Ux}resetOldProps(){this.oldAsyncProps=null,this.oldProps=this.component?this.component.props:null}hasAsyncProp(e){return e in this.asyncProps}getAsyncProp(e){let t=this.asyncProps[e];return t&&t.resolvedValue}isAsyncPropLoading(e){if(e){let t=this.asyncProps[e];return!!(t&&t.pendingLoadCount>0&&t.pendingLoadCount!==t.resolvedLoadCount)}for(let e in this.asyncProps)if(this.isAsyncPropLoading(e))return!0;return!1}reloadAsyncProp(e,t){this._watchPromise(e,Promise.resolve(t))}setAsyncProps(e){this.component=e[sp]||this.component;let t=e[fp]||{},n=e[dp]||e,r=e[up]||{};for(let e in t){let n=t[e];this._createAsyncPropData(e,r[e]),this._updateAsyncProp(e,n),t[e]=this.getAsyncProp(e)}for(let e in n){let t=n[e];this._createAsyncPropData(e,r[e]),this._updateAsyncProp(e,t)}}_fetch(e,t){return null}_onResolve(e,t){}_onError(e,t){}_updateAsyncProp(e,t){this._didAsyncInputValueChange(e,t)&&(typeof t==`string`&&(t=this._fetch(e,t)),t instanceof Promise?this._watchPromise(e,t):Cv(t)?this._resolveAsyncIterable(e,t):this._setPropValue(e,t))}_freezeAsyncOldProps(){if(!this.oldAsyncProps&&this.oldProps){this.oldAsyncProps=Object.create(this.oldProps);for(let e in this.asyncProps)Object.defineProperty(this.oldAsyncProps,e,{enumerable:!0,value:this.oldProps[e]})}}_didAsyncInputValueChange(e,t){let n=this.asyncProps[e];return t===n.resolvedValue||t===n.lastValue?!1:(n.lastValue=t,!0)}_setPropValue(e,t){this._freezeAsyncOldProps();let n=this.asyncProps[e];n&&(t=this._postProcessValue(n,t),n.resolvedValue=t,n.pendingLoadCount++,n.resolvedLoadCount=n.pendingLoadCount)}_setAsyncPropValue(e,t,n){let r=this.asyncProps[e];r&&n>=r.resolvedLoadCount&&t!==void 0&&(this._freezeAsyncOldProps(),r.resolvedValue=t,r.resolvedLoadCount=n,this.onAsyncPropUpdated(e,t))}_watchPromise(e,t){let n=this.asyncProps[e];if(n){n.pendingLoadCount++;let r=n.pendingLoadCount;t.then(t=>{this.component&&(t=this._postProcessValue(n,t),this._setAsyncPropValue(e,t,r),this._onResolve(e,t))}).catch(t=>{this._onError(e,t)})}}async _resolveAsyncIterable(e,t){if(e!==`data`){this._setPropValue(e,t);return}let n=this.asyncProps[e];if(!n)return;n.pendingLoadCount++;let r=n.pendingLoadCount,i=[],a=0;for await(let n of t){if(!this.component)return;let{dataTransform:t}=this.component.props;i=t?t(n,i):i.concat(n),Object.defineProperty(i,"__diff",{enumerable:!1,value:[{startRow:a,endRow:i.length}]}),a=i.length,this._setAsyncPropValue(e,i,r)}this._onResolve(e,i)}_postProcessValue(e,t){let n=e.type;return n&&this.component&&(n.release&&n.release(e.resolvedValue,n,this.component),n.transform)?n.transform(t,n,this.component):t}_createAsyncPropData(e,t){if(!this.asyncProps[e]){let n=this.component&&this.component.props[cp];this.asyncProps[e]={type:n&&n[e],lastValue:null,resolvedValue:t,pendingLoadCount:0,resolvedLoadCount:0}}}},Gx=class extends Wx{constructor({attributeManager:e,layer:t}){super(t),this.attributeManager=e,this.needsRedraw=!0,this.needsUpdate=!0,this.subLayers=null,this.usesPickingColorCache=!1,this.disabledPickingIndices=[]}get layer(){return this.component}_fetch(e,t){let n=this.layer,r=n?.props.fetch;return r?r(t,{propName:e,layer:n}):super._fetch(e,t)}_onResolve(e,t){let n=this.layer;if(n){let r=n.props.onDataLoad;e===`data`&&r&&r(t,{propName:e,layer:n})}}_onError(e,t){let n=this.layer;n&&n.raiseError(t,`loading ${e} of ${this.layer}`)}},Kx=`layer.changeFlag`,qx=`layer.initialize`,Jx=`layer.update`,Yx=`layer.finalize`,Xx=`layer.matched`,Zx=2**24-1,Qx=Object.freeze([]),$x=Ul(({oldViewport:e,viewport:t})=>e.equals(t)),eS=new Uint8ClampedArray;function tS(e){return e.rowIndexes||e.pickingColors||e.instancePickingColors}function nS(e){return e.rowIndexes}function rS(e){return e.pickingColors||e.instancePickingColors}var iS={data:{type:`data`,value:Qx,async:!0},dataComparator:{type:`function`,value:null,optional:!0},_dataDiff:{type:`function`,value:e=>e&&e.__diff,optional:!0},dataTransform:{type:`function`,value:null,optional:!0},onDataLoad:{type:`function`,value:null,optional:!0},onError:{type:`function`,value:null,optional:!0},fetch:{type:`function`,value:(e,{propName:t,layer:n,loaders:r,loadOptions:i,signal:a})=>{let{resourceManager:o}=n.context;i||=n.getLoadOptions(),r||=n.props.loaders,a&&(i={...i,core:{...i?.core,fetch:{...i?.core?.fetch,signal:a}}});let s=o.contains(e);return!s&&!i&&(o.add({resourceId:e,data:Gr(e,r),persistent:!1}),s=!0),s?o.subscribe({resourceId:e,onChange:e=>n.internalState?.reloadAsyncProp(t,e),consumerId:n.id,requestId:t}):Gr(e,r,i)}},updateTriggers:{},visible:!0,pickable:!1,opacity:{type:`number`,min:0,max:1,value:1},operation:`draw`,onHover:{type:`function`,value:null,optional:!0},onClick:{type:`function`,value:null,optional:!0},onDragStart:{type:`function`,value:null,optional:!0},onDrag:{type:`function`,value:null,optional:!0},onDragEnd:{type:`function`,value:null,optional:!0},coordinateSystem:`default`,coordinateOrigin:{type:`array`,value:[0,0,0],compare:!0},modelMatrix:{type:`array`,value:null,compare:!0,optional:!0},wrapLongitude:!1,positionFormat:`XYZ`,colorFormat:`RGBA`,parameters:{type:`object`,value:{},optional:!0,compare:2},loadOptions:{type:`object`,value:null,optional:!0,ignore:!0},transitions:null,extensions:[],loaders:{type:`array`,value:[],optional:!0,ignore:!0},getPolygonOffset:{type:`function`,value:({layerIndex:e})=>[0,-e*100]},highlightedObjectIndex:null,autoHighlight:!1,highlightColor:{type:`accessor`,value:[0,0,128,128]}},aS=class extends Hx{constructor(){super(...arguments),this.internalState=null,this.lifecycle=op.NO_STATE,this.parent=null}static get componentName(){return Object.prototype.hasOwnProperty.call(this,`layerName`)?this.layerName:``}get root(){let e=this;for(;e.parent;)e=e.parent;return e}toString(){return`${this.constructor.layerName||this.constructor.name}({id: '${this.props.id}'})`}project(e){K(this.internalState);let t=this.internalState.viewport||this.context.viewport,[n,r,i]=Nu(Zd(e,{viewport:t,modelMatrix:this.props.modelMatrix,coordinateOrigin:this.props.coordinateOrigin,coordinateSystem:this.props.coordinateSystem}),t.pixelProjectionMatrix);return e.length===2?[n,r]:[n,r,i]}unproject(e){return K(this.internalState),(this.internalState.viewport||this.context.viewport).unproject(e)}projectPosition(e,t){return K(this.internalState),Qd(e,{viewport:this.internalState.viewport||this.context.viewport,modelMatrix:this.props.modelMatrix,coordinateOrigin:this.props.coordinateOrigin,coordinateSystem:this.props.coordinateSystem,...t})}get isComposite(){return!1}get isDrawable(){return!0}setState(e){this.setChangeFlags({stateChanged:!0}),Object.assign(this.state,e),this.setNeedsRedraw()}setNeedsRedraw(){this.internalState&&(this.internalState.needsRedraw=!0)}setNeedsUpdate(){this.internalState&&(this.context.layerManager.setNeedsUpdate(String(this)),this.internalState.needsUpdate=!0)}get isLoaded(){return this.internalState?!this.internalState.isAsyncPropLoading():!1}get wrapLongitude(){return this.props.wrapLongitude}isPickable(){return this.props.pickable&&this.props.visible}getModels(){let e=this.state;return e&&(e.models||e.model&&[e.model])||[]}setShaderModuleProps(...e){for(let t of this.getModels())t.shaderInputs.setProps(...e)}getAttributeManager(){return this.internalState&&this.internalState.attributeManager}getCurrentLayer(){return this.internalState&&this.internalState.layer}getLoadOptions(){return this.props.loadOptions}use64bitPositions(){let{coordinateSystem:e}=this.props;return e==="default"||e===`lnglat`||e===`cartesian`}onHover(e,t){return this.props.onHover&&this.props.onHover(e,t)||!1}onClick(e,t){return this.props.onClick&&this.props.onClick(e,t)||!1}nullPickingColor(){return[0,0,0]}encodePickingColor(e,t=[]){return t[0]=e+1&255,t[1]=e+1>>8&255,t[2]=e+1>>8>>8&255,t}decodePickingColor(e){K(e instanceof Uint8Array);let[t,n,r]=e;return t+n*256+r*65536-1}getNumInstances(){return Number.isFinite(this.props.numInstances)?this.props.numInstances:this.state&&this.state.numInstances!==void 0?this.state.numInstances:gx(this.props.data)}getStartIndices(){return this.props.startIndices?this.props.startIndices:this.state&&this.state.startIndices?this.state.startIndices:null}getBounds(){return this.getAttributeManager()?.getBounds([`positions`,`instancePositions`])}getShaders(e){e=yx(e,{disableWarnings:!0,modules:this.context.defaultShaderModules});for(let t of this.props.extensions)e=yx(e,t.getShaders.call(this,t));return e}shouldUpdateState(e){return e.changeFlags.propsOrDataChanged}updateState(e){let t=this.getAttributeManager(),{dataChanged:n}=e.changeFlags;if(n&&t){if(Array.isArray(n))for(let e of n)t.invalidateAll(e);else t.invalidateAll()}if(t){let{props:n}=e,r=this.internalState.hasPickingBuffer,i=Number.isInteger(n.highlightedObjectIndex)||!!n.pickable||n.extensions.some(e=>e.getNeedsPickingBuffer.call(this,e));if(r!==i){this.internalState.hasPickingBuffer=i;let e=tS(t.attributes);e&&(i&&e.constant&&(e.constant=!1,t.invalidate(e.id)),!e.value&&!i&&(e.constant=!0,e.value=nS(t.attributes)?[Qu]:[0,0,0]))}}}finalizeState(e){for(let e of this.getModels())e.destroy();let t=this.getAttributeManager();t&&t.finalize(),this.context&&this.context.resourceManager.unsubscribe({consumerId:this.id}),this.internalState&&(this.internalState.uniformTransitions.clear(),this.internalState.finalize())}draw(e){for(let t of this.getModels())t.draw(e.renderPass)}getPickingInfo({info:e,mode:t,sourceLayer:n}){let{index:r}=e;return r>=0&&Array.isArray(this.props.data)&&(e.object=this.props.data[r]),e}raiseError(e,t){t&&(e=Error(`${t}: ${e.message}`,{cause:e})),this.props.onError?.(e)||this.context?.onError?.(e,this)}getNeedsRedraw(e={clearRedrawFlags:!1}){return this._getNeedsRedraw(e)}needsUpdate(){return this.internalState?this.internalState.needsUpdate||this.hasUniformTransition()||this.shouldUpdateState(this._getUpdateParams()):!1}hasUniformTransition(){return this.internalState?.uniformTransitions.active||!1}activateViewport(e){if(!this.internalState)return;let t=this.internalState.viewport;this.internalState.viewport=e,t&&$x({oldViewport:t,viewport:e})||(this.setChangeFlags({viewportChanged:!0}),this.isComposite?this.needsUpdate()&&this.setNeedsUpdate():this._update())}invalidateAttribute(e=`all`){let t=this.getAttributeManager();t&&(e===`all`?t.invalidateAll():t.invalidate(e))}updateAttributes(e){let t=!1;for(let n in e)e[n].layoutChanged()&&(t=!0);for(let n of this.getModels())this._setModelAttributes(n,e,t)}_updateAttributes(){let e=this.getAttributeManager();if(!e)return;let t=this.props,n=this.getNumInstances(),r=this.getStartIndices();e.update({data:t.data,numInstances:n,startIndices:r,props:t,transitions:t.transitions,buffers:t.data.attributes,context:this});let i=e.getChangedAttributes({clearChangedFlags:!0});this.updateAttributes(i)}_updateAttributeTransition(){let e=this.getAttributeManager();e&&e.updateTransition()}_updateUniformTransition(){let{uniformTransitions:e}=this.internalState;if(e.active){let t=e.update(),n=Object.create(this.props);for(let e in t)Object.defineProperty(n,e,{value:t[e]});return n}return this.props}calculateInstancePickingColors(e,{numInstances:t}){if(e.constant)return;let n=Math.floor(eS.length/4);this.internalState.usesPickingColorCache=!0;let r=t>0&&eS[0]===0;if(n<t||r){t>Zx&&z.warn(`Layer has too many data objects. Picking might not be able to distinguish all objects.`)(),eS=Ad.allocate(eS,t,{size:4,copy:!0,maxCount:Math.max(t,Zx)});let e=Math.floor(eS.length/4),i=[0,0,0],a=r?0:n;for(let t=a;t<e;t++)this.encodePickingColor(t,i),eS[t*4+0]=i[0],eS[t*4+1]=i[1],eS[t*4+2]=i[2],eS[t*4+3]=0}e.value=eS.subarray(0,t*4)}_setModelAttributes(e,t,n=!1){if(!Object.keys(t).length)return;let r=this.getAttributeManager();if(r?.hasBufferGroups()){this._setGroupedModelAttributes(e,r,t);return}if(n){let n=this.getAttributeManager();e.setBufferLayout(n.getBufferLayouts(e)),t=n.getAttributes()}let i=e.userData?.excludeAttributes||{},a={},o={};for(let n in t){if(i[n])continue;let r=t[n].getValue();for(let i in r){let s=r[i];s instanceof S?t[n].settings.isIndexed?e.setIndexBuffer(s):a[i]=s:s&&(o[i]=s)}}e.setAttributes(a),e.setConstantAttributes(o)}_setGroupedModelAttributes(e,t,n){let r=e.userData?.excludeAttributes||{},i=t.getBufferGroupBindings(n,e,r);e.setBufferLayout(i.bufferLayouts);let a={...i.buffers},o={},s=t.getAttributes();for(let t in s){if(r[t]||i.groupedAttributeIds.has(t))continue;let n=s[t],c=n.getValue();for(let t in c){let r=c[t];r instanceof S?n.settings.isIndexed?e.setIndexBuffer(r):a[t]=r:r&&(o[t]=r)}}e.setAttributes(a),e.setConstantAttributes(o)}disablePickingIndex(e){let t=this.props.data;if(!(`attributes`in t)){this._disablePickingIndex(e);return}let n=this.getAttributeManager().attributes,r=nS(n),i=rS(n),a=r&&t.attributes&&t.attributes[r.id];if(a&&a.value){let n=a.value;for(let i=0;i<t.length;i++)n[r.getVertexOffset(i)]===e&&this._disablePickingIndex(i);return}let o=i&&t.attributes&&t.attributes[i.id];if(o&&o.value){let n=o.value,r=this.encodePickingColor(e);for(let e=0;e<t.length;e++){let t=i.getVertexOffset(e);n[t]===r[0]&&n[t+1]===r[1]&&n[t+2]===r[2]&&this._disablePickingIndex(e)}}else this._disablePickingIndex(e)}_disablePickingIndex(e){let t=this.getAttributeManager().attributes,n=nS(t);if(n){let t=n.getVertexOffset(e),r=n.getVertexOffset(e+1),i=new Uint32Array(r-t);i.fill(Qu),n.buffer.write(i,t*i.BYTES_PER_ELEMENT);return}let r=rS(t);if(!r){this.internalState&&$u(this.internalState.disabledPickingIndices,e);return}let i=r.getVertexOffset(e),a=r.getVertexOffset(e+1);r.buffer.write(new Uint8Array(a-i),i)}restorePickingColors(){let e=this.getAttributeManager().attributes,t=tS(e);if(!t){this.internalState&&(this.internalState.disabledPickingIndices.length=0);return}let n=rS(e);this.internalState.usesPickingColorCache&&n&&n.value.buffer!==eS.buffer&&(n.value=eS.subarray(0,n.value.length)),t.updateSubBuffer({startOffset:0})}_initialize(){K(!this.internalState),B(qx,this);let e=this._getAttributeManager();this.internalState=new Gx({attributeManager:e,layer:this}),this._clearChangeFlags(),this.state={},Object.defineProperty(this.state,"attributeManager",{get:()=>(z.deprecated(`layer.state.attributeManager`,`layer.getAttributeManager()`)(),e)}),this.internalState.uniformTransitions=new ix(this.context.timeline),this.internalState.onAsyncPropUpdated=this._onAsyncPropUpdated.bind(this),this.internalState.setAsyncProps(this.props),this.initializeState(this.context);for(let e of this.props.extensions)e.initializeState.call(this,this.context,e);this.setChangeFlags({dataChanged:`init`,propsChanged:`init`,viewportChanged:!0,extensionsChanged:!0}),this._update()}_transferState(e){B(Xx,this,this===e);let{state:t,internalState:n}=e;this!==e&&(this.internalState=n,this.state=t,this.internalState.setAsyncProps(this.props),this._diffProps(this.props,this.internalState.getOldProps()))}_update(){let e=this.needsUpdate();if(B(Jx,this,e),!e)return;this.context.stats.get(`Layer updates`).incrementCount();let t=this.props,n=this.context,r=this.internalState,i=n.viewport,a=this._updateUniformTransition();r.propsInTransition=a,n.viewport=r.viewport||i,this.props=a;try{let e=this._getUpdateParams(),t=this.getModels();if(n.device)this.updateState(e);else try{this.updateState(e)}catch{}for(let t of this.props.extensions)t.updateState.call(this,e,t);this.setNeedsRedraw(),this._updateAttributes();let r=this.getModels()[0]!==t[0];this._postUpdate(e,r)}finally{n.viewport=i,this.props=t,this._clearChangeFlags(),r.needsUpdate=!1,r.resetOldProps()}}_finalize(){B(Yx,this),this.finalizeState(this.context);for(let e of this.props.extensions)e.finalizeState.call(this,this.context,e)}_drawLayer({renderPass:e,shaderModuleProps:t=null,uniforms:n={},parameters:r={}}){this._updateAttributeTransition();let i=this.props,a=this.context;this.props=this.internalState.propsInTransition||i;try{t&&this.setShaderModuleProps(t);let{getPolygonOffset:i}=this.props,o=i&&i(n)||[0,0];a.device instanceof nv&&a.device.setParametersWebGL({polygonOffset:o});let s=a.device instanceof nv?null:oS(r);if(sS(this.getModels(),e,r,s),a.device instanceof nv)a.device.withParametersWebGL(r,()=>{let i={renderPass:e,shaderModuleProps:t,uniforms:n,parameters:r,context:a};for(let e of this.props.extensions)e.draw.call(this,i,e);this.draw(i)});else{s?.renderPassParameters&&e.setParameters(s.renderPassParameters);let i={renderPass:e,shaderModuleProps:t,uniforms:n,parameters:r,context:a};for(let e of this.props.extensions)e.draw.call(this,i,e);this.draw(i)}}finally{this.props=i}}getChangeFlags(){return this.internalState?.changeFlags}setChangeFlags(e){if(!this.internalState)return;let{changeFlags:t}=this.internalState;for(let n in e)if(e[n]){let r=!1;switch(n){case`dataChanged`:let i=e[n],a=t[n];i&&Array.isArray(a)&&(t.dataChanged=Array.isArray(i)?a.concat(i):i,r=!0);default:t[n]||(t[n]=e[n],r=!0)}r&&B(Kx,this,n,e)}let n=!!(t.dataChanged||t.updateTriggersChanged||t.propsChanged||t.extensionsChanged);t.propsOrDataChanged=n,t.somethingChanged=n||t.viewportChanged||t.stateChanged}_clearChangeFlags(){this.internalState.changeFlags={dataChanged:!1,propsChanged:!1,updateTriggersChanged:!1,viewportChanged:!1,stateChanged:!1,extensionsChanged:!1,propsOrDataChanged:!1,somethingChanged:!1}}_diffProps(e,t){let n=ox(e,t);if(n.updateTriggersChanged)for(let e in n.updateTriggersChanged)n.updateTriggersChanged[e]&&this.invalidateAttribute(e);if(n.transitionsChanged)for(let r in n.transitionsChanged)this.internalState.uniformTransitions.add(r,t[r],e[r],e.transitions?.[r]);return this.setChangeFlags(n)}validateProps(){ax(this.props)}updateAutoHighlight(e){this.props.autoHighlight&&!Number.isInteger(this.props.highlightedObjectIndex)&&this._updateAutoHighlight(e)}_updateAutoHighlight(e){let t={highlightedObjectColor:e.picked?e.color:null},{highlightColor:n}=this.props;e.picked&&typeof n==`function`&&(t.highlightColor=n(e)),this.setShaderModuleProps({picking:t}),this.setNeedsRedraw()}_getAttributeManager(){let e=this.context;return new Zb(e.device,{id:this.props.id,stats:e.stats,timeline:e.timeline})}_postUpdate(e,t){let{props:n,oldProps:r}=e,i=this.state.model;i?.isInstanced&&i.setInstanceCount(this.getNumInstances());let{autoHighlight:a,highlightedObjectIndex:o,highlightColor:s}=n;if(t||r.autoHighlight!==a||r.highlightedObjectIndex!==o||r.highlightColor!==s){let e={};Array.isArray(s)&&(e.highlightColor=s),(t||r.autoHighlight!==a||o!==r.highlightedObjectIndex)&&(e.highlightedObjectColor=Number.isFinite(o)&&o>=0?this.encodePickingColor(o):null),this.setShaderModuleProps({picking:e})}}_getUpdateParams(){return{props:this.props,oldProps:this.internalState.getOldProps(),context:this.context,changeFlags:this.internalState.changeFlags}}_getNeedsRedraw(e){if(!this.internalState)return!1;let t=!1;t||=this.internalState.needsRedraw&&this.id;let n=this.getAttributeManager(),r=n?n.getNeedsRedraw(e):!1;if(t||=r,t)for(let e of this.props.extensions)e.onNeedsRedraw.call(this,e);return this.internalState.needsRedraw=this.internalState.needsRedraw&&!e.clearRedrawFlags,t}_onAsyncPropUpdated(){this._diffProps(this.props,this.internalState.getOldProps()),this.setNeedsUpdate()}};aS.defaultProps=iS,aS.layerName=`Layer`;function oS(e){let{blendConstant:t,...n}=e;return t?{pipelineParameters:n,renderPassParameters:{blendConstant:t}}:{pipelineParameters:n}}function sS(e,t,n,r){for(let i of e)i.device.type===`webgpu`?(cS(i,t),i.setParameters({...i.parameters,...r?.pipelineParameters})):i.setParameters(n)}function cS(e,t){let n=t.props.framebuffer||(t.framebuffer??null);if(!n)return;let r=n.colorAttachments.map(e=>e?.texture?.format??null),i=n.depthStencilAttachment?.texture?.format,a=e;lS(a.props.colorAttachmentFormats,r)&&a.props.depthStencilAttachmentFormat===i||(a.props.colorAttachmentFormats=r,a.props.depthStencilAttachmentFormat=i,a._setPipelineNeedsUpdate(`attachment formats`))}function lS(e,t){if(e===t)return!0;if(!e||!t||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var uS=`compositeLayer.renderLayers`,dS=class extends aS{get isComposite(){return!0}get isDrawable(){return!1}get isLoaded(){return super.isLoaded&&this.getSubLayers().every(e=>e.isLoaded)}getSubLayers(){return this.internalState&&this.internalState.subLayers||[]}initializeState(e){}setState(e){super.setState(e),this.setNeedsUpdate()}getPickingInfo({info:e}){let{object:t}=e;return t&&t.__source&&t.__source.parent&&t.__source.parent.id===this.id&&(e.object=t.__source.object,e.index=t.__source.index),e}filterSubLayer(e){return!0}shouldRenderSubLayer(e,t){return t&&t.length}getSubLayerClass(e,t){let{_subLayerProps:n}=this.props;return n&&n[e]&&n[e].type||t}getSubLayerRow(e,t,n){return e.__source={parent:this,object:t,index:n},e}getSubLayerAccessor(e){if(typeof e==`function`){let t={index:-1,data:this.props.data,target:[]};return(n,r)=>n&&n.__source?(t.index=n.__source.index,e(n.__source.object,t)):e(n,r)}return e}getSubLayerProps(e={}){let{opacity:t,pickable:n,visible:r,parameters:i,getPolygonOffset:a,highlightedObjectIndex:o,autoHighlight:s,highlightColor:c,coordinateSystem:l,coordinateOrigin:u,wrapLongitude:d,positionFormat:f,modelMatrix:p,extensions:m,fetch:h,operation:g,_subLayerProps:_}=this.props,v={id:``,updateTriggers:{},opacity:t,pickable:n,visible:r,parameters:i,getPolygonOffset:a,highlightedObjectIndex:o,autoHighlight:s,highlightColor:c,coordinateSystem:l,coordinateOrigin:u,wrapLongitude:d,positionFormat:f,modelMatrix:p,extensions:m,fetch:h,operation:g},y=_&&e.id&&_[e.id],b=y&&y.updateTriggers,x=e.id||`sublayer`;if(y){let t=this.props[cp],n=e.type?e.type._propTypes:{};for(let e in y){let r=n[e]||t[e];r&&r.type===`accessor`&&(y[e]=this.getSubLayerAccessor(y[e]))}}Object.assign(v,e,y),v.id=`${this.props.id}-${x}`,v.updateTriggers={all:this.props.updateTriggers?.all,...e.updateTriggers,...b};for(let e of m){let t=e.getSubLayerProps.call(this,e);t&&Object.assign(v,t,{updateTriggers:Object.assign(v.updateTriggers,t.updateTriggers)})}return v}_updateAutoHighlight(e){for(let t of this.getSubLayers())t.updateAutoHighlight(e)}_getAttributeManager(){return null}_postUpdate(e,t){let n=this.internalState.subLayers,r=!n||this.needsUpdate();r&&(n=pp(this.renderLayers(),Boolean),this.internalState.subLayers=n),B(uS,this,r,n);for(let e of n)e.parent=this}};dS.layerName=`CompositeLayer`;var fS=new es().lookAt({eye:[0,0,1]});function pS({width:e,height:t,near:n,far:r,padding:i}){let a=-e/2,o=e/2,s=-t/2,c=t/2;if(i){let{left:n=0,right:r=0,top:l=0,bottom:u=0}=i,d=V((n+e-r)/2,0,e)-e/2,f=V((l+t-u)/2,0,t)-t/2;a-=d,o-=d,s+=f,c+=f}return new es().ortho({left:a,right:o,bottom:s,top:c,near:n,far:r})}var mS=class extends Kd{constructor(e){let{width:t,height:n,near:r=.1,far:i=1e3,zoom:a=0,target:o=[0,0,0],padding:s=null,flipY:c=!0}=e,l=e.zoomX??(Array.isArray(a)?a[0]:a),u=e.zoomY??(Array.isArray(a)?a[1]:a),d=Number.isFinite(e.zoom)?e.zoom:Math.min(l,u),f=2**d,p;if(l!==d||u!==d){let e=2**l,t=2**u;p={unitsPerMeter:[e/f,t/f,1],metersPerUnit:[f/e,f/t,1]}}super({...e,longitude:void 0,position:o,viewMatrix:fS.clone().scale([f,f*(c?-1:1),f]),projectionMatrix:pS({width:t||1,height:n||1,padding:s,near:r,far:i}),zoom:d,distanceScales:p}),this.target=o,this.zoomX=l,this.zoomY=u,this.flipY=c}projectFlat([e,t]){let{unitsPerMeter:n}=this.distanceScales;return[e*n[0],t*n[1]]}unprojectFlat([e,t]){let{metersPerUnit:n}=this.distanceScales;return[e*n[0],t*n[1]]}panByPosition(e,t,n){let r=Pu(t,this.pixelUnprojectionMatrix),i=eo([],this.projectFlat(e),no([],r)),a=eo([],this.center,i);return{target:this.unprojectFlat(a)}}};mS.displayName=`OrthographicViewport`;var hS=1;function gS({zoom:e=0,zoomX:t,zoomY:n}){return t??=Array.isArray(e)?e[0]:e,n??=Array.isArray(e)?e[1]:e,{zoomX:t,zoomY:n}}function _S(e,t,n,r,i){let a=e[0][t]+n,o=e[1][t]-r,s=(a+o)/2;return{minimum:a,maximum:o,midpoint:s,settledTarget:Number.isFinite(n)&&Number.isFinite(r)&&a<=o?V(i,a,o):s}}var vS=class extends nm{constructor(e){let{width:t,height:n,target:r=[0,0,0],zoom:i=0,zoomAxis:a=`all`,minZoom:o=-1/0,maxZoom:s=1/0,minZoomX:c=o,maxZoomX:l=s,minZoomY:u=o,maxZoomY:d=s,maxBounds:f=null,maxBoundsPadding:p=null,rubberBand:m=!1,startPanPosition:h,startZoomPosition:g,startZoom:_}=e,{[tm]:v}=e,{zoomX:y,zoomY:b}=gS(e);super({width:t,height:n,target:r,zoom:i,zoomX:y,zoomY:b,zoomAxis:a,minZoomX:c,maxZoomX:l,minZoomY:u,maxZoomY:d,maxBounds:f,maxBoundsPadding:p,rubberBand:m,[tm]:v},{startPanPosition:h,startZoomPosition:g,startZoom:_},e.makeViewport,e.constraintContext)}panStart({pos:e},t){return this._getUpdatedState({startPanPosition:this._unproject(e)},t)}pan({pos:e,startPosition:t},n){let r=this.getState().startPanPosition||t;if(!r)return this;let i=this.makeViewport(this.getViewportProps()).panByPosition(r,e);return this._getUpdatedState(i,n)}panEnd(e){return this._getUpdatedState({startPanPosition:null},e)}rotateStart(){return this}rotate(){return this}rotateEnd(){return this}shortestPathFrom(e){return e.getViewportProps(),{...this.getViewportProps()}}zoomStart({pos:e},t){let{zoomX:n,zoomY:r}=this.getViewportProps();return this._getUpdatedState({startZoomPosition:this._unproject(e),startZoom:[n,r]},t)}zoom({pos:e,startPos:t,scale:n},r){let{startZoom:i,startZoomPosition:a}=this.getState();if(!a){let{zoomX:n,zoomY:r}=this.getViewportProps();i=[n,r],a=this._unproject(t||e)}if(!a)return this;let o=this._calculateNewZoom({scale:n,startZoom:i});return this._getUpdatedState({...o,[tm]:{position:a,screenPosition:e}},r)}zoomEnd(e){return this._getUpdatedState({startZoomPosition:null,startZoom:null},e)}zoomIn(e=2,t){return this._getUpdatedState(this._calculateNewZoom({scale:e}),t)}zoomOut(e=2,t){return this._getUpdatedState(this._calculateNewZoom({scale:1/e}),t)}moveLeft(e=50,t){return this._panFromCenter([-e,0],t)}moveRight(e=50,t){return this._panFromCenter([e,0],t)}moveUp(e=50,t){return this._panFromCenter([0,-e],t)}moveDown(e=50,t){return this._panFromCenter([0,e],t)}rotateLeft(e=15){return this}rotateRight(e=15){return this}rotateUp(e=10){return this}rotateDown(e=10){return this}_project(e){return this.makeViewport(this.getViewportProps()).project(e)}_unproject(e){let[t,n]=this.makeViewport(this.getViewportProps()).unproject(e);return[t,n]}_calculateNewZoom({scale:e,startZoom:t}){let{zoomX:n,zoomY:r,zoomAxis:i}=this.getViewportProps();t===void 0&&(t=[n,r]);let a=Math.log2(e),[o,s]=t;switch(i){case`X`:o+=a;break;case`Y`:s+=a;break;default:o+=a,s+=a}return{zoomX:o,zoomY:s}}_panFromCenter(e,t){let{target:n}=this.getViewportProps(),r=this._project(n);return this.pan({startPosition:n,pos:[r[0]+e[0],r[1]+e[1]]},t)}_getUpdatedState(e,t){return new this.constructor({makeViewport:this.makeViewport,...this.getViewportProps(),...this.getState(),...e,constraintContext:t})}applyConstraints(e,t){let n=e,r=n[tm];delete n[tm];let i=gS(e),a=this._constrainZoom(i,e),o=e.rubberBand&&t?.mode===`elastic`,{zoomX:s,zoomY:c}=t?.mode===`preserve`?i:o?{zoomX:rm(i.zoomX,a.zoomX,hS),zoomY:rm(i.zoomY,a.zoomY,hS)}:a;if(e.zoomX=s,e.zoomY=c,r){let t=this.makeViewport({...e,zoomX:s,zoomY:c});Object.assign(e,t.panByPosition(r.position,r.screenPosition))}e.zoom=Array.isArray(e.zoom)||e.zoomX!==e.zoomY?[e.zoomX,e.zoomY]:e.zoomX;let{maxBounds:l,rubberBand:u,target:d}=e;if(l){let n=im(e.width,e.height,e.maxBoundsPadding),r=this.makeViewport(e),i=am(r,d,n),a=r.project(d),f=[0,1].map(e=>{let t=d.slice();t[e]+=1;let n=r.project(t)[e]-a[e];return Number.isFinite(n)?n:2**(e===0?s:c)*(e===0?1:-1)}),p=f.map((e,t)=>{let n=t===0?i.left:i.top,r=t===0?i.right:i.bottom,a=Math.abs(e);return e>=0?[n/a,r/a]:[r/a,n/a]}),m=d.slice(),h=[n.width,n.height];for(let[e,[r,i]]of p.entries()){if(h[e]<0)continue;let{minimum:a,maximum:s,midpoint:c,settledTarget:p}=_S(l,e,r,i,d[e]);if(t?.mode!==`preserve`&&u&&(!Number.isFinite(r)||!Number.isFinite(i))){m[e]=c;continue}let g=u?p:V(d[e],a,s);m[e]=t?.mode===`preserve`?d[e]:o?rm(d[e],g,(e===0?n.width:n.height)/2/Math.abs(f[e])):g}(m[0]!==d[0]||m[1]!==d[1])&&(e.target=m)}return e}_constrainZoom({zoomX:e,zoomY:t},n){n||=this.getViewportProps();let{zoomAxis:r,maxZoomX:i,maxZoomY:a,maxBounds:o}=n,{minZoomX:s,minZoomY:c}=n;if(o!==null&&n.width>0&&n.height>0){let e=im(n.width,n.height,n.maxBoundsPadding),t=o[0],r=o[1],l=r[0]-t[0],u=r[1]-t[1];e.width>0&&Number.isFinite(l)&&l>0&&(s=Math.max(s,Math.log2(e.width/l)),s>i&&(s=i)),e.height>0&&Number.isFinite(u)&&u>0&&(c=Math.max(c,Math.log2(e.height/u)),c>a&&(c=a))}switch(r){case`X`:e=V(e,s,i);break;case`Y`:t=V(t,c,a);break;default:let n=Math.min(i-e,a-t,0);n===0&&(n=Math.max(s-e,c-t,0)),n!==0&&(e+=n,t+=n)}return{zoomX:e,zoomY:t}}},yS=class extends em{constructor(){super(...arguments),this.ControllerState=vS,this.transition={transitionDuration:300,transitionInterpolator:new Kp([`target`,`zoomX`,`zoomY`])},this.dragMode=`pan`}setProps(e){Object.assign(e,gS(e)),super.setProps(e)}_onMultiPanStart(e){return this.multiTouchDrag===`pan`&&super._onMultiPanStart(e)}_onPanRotate(){return!1}},bS=class extends Pp{constructor(e={}){super(e)}getViewportType(){return mS}get ControllerType(){return yS}};bS.displayName=`OrthographicView`;var xS=class{constructor(e){this.indexStarts=[0],this.vertexStarts=[0],this.vertexCount=0,this.instanceCount=0;let{attributes:t={}}=e;this.typedArrayManager=Ad,this.attributes={},this._attributeDefs=t,this.opts=e,this.updateGeometry(e)}updateGeometry(e){Object.assign(this.opts,e);let{data:t,buffers:n={},getGeometry:r,geometryBuffer:i,positionFormat:a,dataChanged:o,normalize:s=!0}=this.opts;if(this.data=t,this.getGeometry=r,this.positionSize=i&&i.size||(a===`XY`?2:3),this.buffers=n,this.normalize=s,i&&(K(t.startIndices),this.getGeometry=this.getGeometryFromBuffer(i),s||(n.vertexPositions=i)),this.geometryBuffer=n.vertexPositions,Array.isArray(o))for(let e of o)this._rebuildGeometry(e);else this._rebuildGeometry()}updatePartialGeometry({startRow:e,endRow:t}){this._rebuildGeometry({startRow:e,endRow:t})}getGeometryFromBuffer(e){let t=e.value||e;return ArrayBuffer.isView(t)?wv(t,{size:this.positionSize,offset:e.offset,stride:e.stride,startIndices:this.data.startIndices}):null}_allocate(e,t){let{attributes:n,buffers:r,_attributeDefs:i,typedArrayManager:a}=this;for(let o in i)if(o in r)a.release(n[o]),n[o]=null;else{let r=i[o];r.copy=t,n[o]=a.allocate(n[o],e,r)}}_forEachGeometry(e,t,n){let{data:r,getGeometry:i}=this,{iterable:a,objectInfo:o}=Sv(r,t,n);for(let t of a)o.index++,e(i?i(t,o):null,o.index)}_rebuildGeometry(e){if(!this.data)return;let{indexStarts:t,vertexStarts:n,instanceCount:r}=this,{data:i,geometryBuffer:a}=this,{startRow:o=0,endRow:s=1/0}=e||{},c={};if(e||(t=[0],n=[0]),this.normalize||!a)this._forEachGeometry((e,t)=>{let r=e&&this.normalizeGeometry(e);c[t]=r,n[t+1]=n[t]+(r?this.getGeometrySize(r):0)},o,s),r=n[n.length-1];else if(n=i.startIndices,r=n[i.length]||0,ArrayBuffer.isView(a))r||=a.length/this.positionSize;else if(a instanceof S){let e=this.positionSize*4;r||=a.byteLength/e}else if(a.buffer){let e=a.stride||this.positionSize*4;r||=a.buffer.byteLength/e}else if(a.value){let e=a.value,t=a.stride/e.BYTES_PER_ELEMENT||this.positionSize;r||=e.length/t}this._allocate(r,!!e),this.indexStarts=t,this.vertexStarts=n,this.instanceCount=r;let l={};this._forEachGeometry((e,i)=>{let a=c[i]||e;l.vertexStart=n[i],l.indexStart=t[i];let o=i<n.length-1?n[i+1]:r;l.geometrySize=o-n[i],l.geometryIndex=i,this.updateGeometryAttributes(a,l)},o,s),this.vertexCount=t[t.length-1]}},SS=typeof window<`u`?L.useLayoutEffect:L.useEffect;function CS(e,t){for(;e;){if(e===t)return!0;e=Object.getPrototypeOf(e)}return!1}var wS={position:`absolute`,zIndex:-1};function TS(e,t){if(typeof e==`function`)return e(t);if(Array.isArray(e))return e.map(e=>TS(e,t));if(ES(e)){if(DS(e))return t.style=wS,(0,L.cloneElement)(e,t);if(OS(e))return(0,L.cloneElement)(e,t)}return e}function ES(e){return L.isValidElement(e)}function DS(e){return e.props?.mapStyle}function OS(e){let t=e.type;return t&&t.deckGLViewProps}function kS(e){if(typeof e==`function`)return(0,L.createElement)(Pp,{},e);if(Array.isArray(e))return e.map(kS);if(ES(e)){if(e.type===L.Fragment)return kS(e.props.children);if(CS(e.type,Pp))return e}return e}function AS({children:e,layers:t=[],views:n}){let r=[],i=[],a={};return L.Children.forEach(kS(e),e=>{if(ES(e)){let t=e.type;if(CS(t,aS)){let n=jS(t,e.props);i.push(n)}else r.push(e);if(CS(t,Pp)&&t!==Pp&&e.props.id){let n=new t(e.props);a[n.id]=n}}else e&&r.push(e)}),Object.keys(a).length>0&&(Array.isArray(n)?n.forEach(e=>{a[e.id]=e}):n&&(a[n.id]=n),n=Object.values(a)),t=i.length>0?[i,t]:t,{layers:t,children:r,views:n}}function jS(e,t){let n={},r=e.defaultProps||{};for(let e in t)r[e]!==t[e]&&(n[e]=t[e]);return new e(n)}var MS=(0,L.createContext)();function NS({children:e,deck:t,ContextProvider:n=MS.Provider}){let{viewManager:r}=t||{};if(!r||!r.views.length)return[];let i={},a=r.views[0].id;for(let t of e){let e=a,n=t;ES(t)&&CS(t.type,Pp)&&(e=t.props.id||a,n=t.props.children);let o=r.getViewport(e),s=r.getViewState(e);if(o){s.padding=o.padding;let{x:t,y:r,width:a,height:c}=o;n=TS(n,{x:t,y:r,width:a,height:c,viewport:o,viewState:s}),i[e]||(i[e]={viewport:o,children:[]}),i[e].children.push(n)}}return Object.keys(i).map(e=>{let{viewport:r,children:a}=i[e],{x:o,y:s,width:c,height:l}=r,u={position:`absolute`,left:o,top:s,width:c,height:l},d=`view-${e}`,f=(0,L.createElement)(`div`,{key:d,id:d,style:u},...a),p={deck:t,viewport:r,container:t.canvas.offsetParent,eventManager:t.eventManager,onViewStateChange:n=>{n.viewId=e,t._onViewStateChange(n)},widgets:[]},m=`view-${e}-context`;return(0,L.createElement)(n,{key:m,value:p},f)})}var PS={mixBlendMode:null};function FS({width:e,height:t,style:n}){let r={position:`absolute`,zIndex:0,left:0,top:0,width:e,height:t},i={left:0,top:0};if(n)for(let e in n)e in PS?i[e]=n[e]:r[e]=n[e];return{containerStyle:r,canvasStyle:i}}function IS(e){return{get deck(){return e.deck},pickObjectAsync:t=>e.deck.pickObjectAsync(t),pickObjectsAsync:t=>e.deck.pickObjectsAsync(t),pickObject:t=>e.deck.pickObject(t),pickMultipleObjects:t=>e.deck.pickMultipleObjects(t),pickObjects:t=>e.deck.pickObjects(t)}}function LS(e){e.redrawReason&&=(e.deck._drawLayers(e.redrawReason),null)}function RS(e,t){let n=e.deck;return!!(n&&t&&n.width===t.clientWidth&&n.height===t.clientHeight)}function zS(e,t,n){let r=new t({...n,_customRender:t=>{e.redrawReason=t;let i=r.device?.type===`webgpu`,a=r.getViewports();e.lastRenderedViewports!==a&&((!i||RS(e,n.parent||null))&&e.forceUpdate(),!i)||LS(e)}});return r}function BS(e,t){let[n,r]=(0,L.useState)(0),i=(0,L.useRef)({control:null,version:n,forceUpdate:()=>r(e=>e+1)}).current,a=(0,L.useRef)(null),o=(0,L.useRef)(null),s=(0,L.useMemo)(()=>AS(e),[e.layers,e.views,e.children]),c=!0,l=t=>c&&e.viewState?(i.viewStateUpdateRequested=t,null):(i.viewStateUpdateRequested=null,e.onViewStateChange?.(t)),u=t=>{c?i.interactionStateUpdateRequested=t:(i.interactionStateUpdateRequested=null,e.onInteractionStateChange?.(t))},d=(0,L.useMemo)(()=>{let t={widgets:[],...e,style:null,width:`100%`,height:`100%`,parent:a.current,canvas:o.current,layers:s.layers,onViewStateChange:l,onInteractionStateChange:u};return s.views&&(t.views=s.views),delete t._customRender,i.deck&&(i.deck.setProps(t),i.deck.isInitialized&&(i.lastRenderedViewports=i.deck.getViewports())),t},[e]);(0,L.useEffect)(()=>{let t=e.Deck||dv;return i.deck=zS(i,t,{...d,parent:a.current,canvas:o.current}),()=>i.deck?.finalize()},[]),SS(()=>{LS(i);let{viewStateUpdateRequested:e,interactionStateUpdateRequested:t}=i;e&&l(e),t&&u(t)}),(0,L.useImperativeHandle)(t,()=>IS(i),[]);let f=i.deck&&i.deck.isInitialized?i.deck.getViewports():void 0,{ContextProvider:p,width:m=`100%`,height:h=`100%`,id:g,style:_}=e,{containerStyle:v,canvasStyle:y}=(0,L.useMemo)(()=>FS({width:m,height:h,style:_}),[m,h,_]);if(!i.viewStateUpdateRequested&&i.lastRenderedViewports===f||i.version!==n){i.lastRenderedViewports=f,i.version=n;let e=NS({children:s.children,deck:i.deck,ContextProvider:p}),t=(0,L.createElement)(`canvas`,{key:`canvas`,id:g||`deckgl-overlay`,ref:o,style:y}),r=(0,L.createElement)(`div`,{key:`deck-events-root`,className:`deck-events-root`,style:{width:m,height:h}},[t,e]),c=(0,L.createElement)(`div`,{key:`deck-widgets-root`,className:`deck-widgets-root`,style:{position:`absolute`,inset:0,pointerEvents:`none`}});i.control=(0,L.createElement)(`div`,{id:`${g||`deckgl`}-wrapper`,style:v},(0,L.createElement)(`div`,{className:`deck-root`,ref:a,style:{position:`relative`,width:`100%`,height:`100%`}},[r,c]))}return c=!1,i.control}var VS=L.forwardRef(BS),HS=`layout(std140) uniform iconUniforms {
  float sizeScale;
  vec2 iconsTextureDim;
  float sizeBasis;
  float sizeMinPixels;
  float sizeMaxPixels;
  bool billboard;
  highp int sizeUnits;
  float alphaCutoff;
} icon;
`,US={name:`icon`,vs:HS,fs:HS,uniformTypes:{sizeScale:`f32`,iconsTextureDim:`vec2<f32>`,sizeBasis:`f32`,sizeMinPixels:`f32`,sizeMaxPixels:`f32`,billboard:`f32`,sizeUnits:`i32`,alphaCutoff:`f32`}},WS=`#version 300 es
#define SHADER_NAME icon-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceSizes;
in float instanceAngles;
in vec4 instanceColors;
#ifdef USE_ROW_INDEXES
in float rowIndexes;
#endif
in vec4 instanceIconFrames;
in float instanceColorModes;
in vec2 instanceOffsets;
in vec2 instancePixelOffset;
out float vColorMode;
out vec4 vColor;
out vec2 vTextureCoords;
out vec2 uv;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = angle * PI / 180.0;
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
#ifdef USE_ROW_INDEXES
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
#else
geometry.pickingColor = picking_getPickingColorFromInstanceID();
#endif
uv = positions;
vec2 iconSize = instanceIconFrames.zw;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * icon.sizeScale, icon.sizeUnits),
icon.sizeMinPixels, icon.sizeMaxPixels
);
float iconConstraint = icon.sizeBasis == 0.0 ? iconSize.x : iconSize.y;
float instanceScale = iconConstraint == 0.0 ? 0.0 : sizePixels / iconConstraint;
vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;
pixelOffset += instancePixelOffset;
pixelOffset.y *= -1.0;
if (icon.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
DECKGL_FILTER_SIZE(offset_common, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vTextureCoords = mix(
instanceIconFrames.xy,
instanceIconFrames.xy + iconSize,
(positions.xy + 1.0) / 2.0
) / icon.iconsTextureDim;
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
vColorMode = instanceColorModes;
}
`,GS=`#version 300 es
#define SHADER_NAME icon-layer-fragment-shader
precision highp float;
uniform sampler2D iconsTexture;
in float vColorMode;
in vec4 vColor;
in vec2 vTextureCoords;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
vec4 texColor = texture(iconsTexture, vTextureCoords);
vec3 color = mix(texColor.rgb, vColor.rgb, vColorMode);
float a = texColor.a * layer.opacity * vColor.a;
if (a < icon.alphaCutoff) {
discard;
}
fragColor = vec4(color, a);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,KS=`struct IconUniforms {
  sizeScale: f32,
  iconsTextureDim: vec2<f32>,
  sizeBasis: f32,
  sizeMinPixels: f32,
  sizeMaxPixels: f32,
  billboard: i32,
  sizeUnits: i32,
  alphaCutoff: f32
};

@group(0) @binding(auto) var<uniform> icon: IconUniforms;
@group(0) @binding(auto) var iconsTexture : texture_2d<f32>;
@group(0) @binding(auto) var iconsTextureSampler : sampler;

fn rotate_by_angle(vertex: vec2<f32>, angle_deg: f32) -> vec2<f32> {
  let angle_radian = angle_deg * PI / 180.0;
  let c = cos(angle_radian);
  let s = sin(angle_radian);
  let rotation = mat2x2<f32>(vec2<f32>(c, s), vec2<f32>(-s, c));
  return rotation * vertex;
}

struct Attributes {
  @builtin(instance_index) instanceIndex : u32,
  @location(0) positions: vec2<f32>,

  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceSizes: f32,
  @location(4) instanceAngles: f32,
  @location(5) instanceColors: vec4<f32>,
  @location(6) instanceIconFrames: vec4<f32>,
  @location(7) instanceColorModes: f32,
  @location(8) instanceOffsets: vec2<f32>,
  @location(9) instancePixelOffset: vec2<f32>,
  PICKING_COLOR_ATTRIBUTE
};

struct Varyings {
  @builtin(position) position: vec4<f32>,

  @location(0) vColorMode: f32,
  @location(1) vColor: vec4<f32>,
  @location(2) vTextureCoords: vec2<f32>,
  @location(3) uv: vec2<f32>,
  @location(4) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(inp: Attributes) -> Varyings {
  // write geometry fields used by filters + FS
  geometry.worldPosition = inp.instancePositions;
  geometry.uv = inp.positions;
  geometry.pickingColor = PICKING_COLOR_VALUE;

  var outp: Varyings;
  outp.uv = inp.positions;

  let iconSize = inp.instanceIconFrames.zw;

  // convert size in meters to pixels, then clamp
  let sizePixels = clamp(
    project_unit_size_to_pixel(inp.instanceSizes * icon.sizeScale, icon.sizeUnits),
    icon.sizeMinPixels, icon.sizeMaxPixels
  );

  // scale icon height to match instanceSize
  let iconConstraint = select(iconSize.y, iconSize.x, icon.sizeBasis == 0.0);
  let instanceScale = select(sizePixels / iconConstraint, 0.0, iconConstraint == 0.0);

  // scale and rotate vertex in "pixel" units; then add per-instance pixel offset
  var pixelOffset = inp.positions / 2.0 * iconSize + inp.instanceOffsets;
  pixelOffset = rotate_by_angle(pixelOffset, inp.instanceAngles) * instanceScale;
  pixelOffset = pixelOffset + inp.instancePixelOffset;
  pixelOffset.y = pixelOffset.y * -1.0;

  if (icon.billboard != 0) {
    var pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, vec3<f32>(0.0)); // TODO, &geometry.position);
    // DECKGL_FILTER_GL_POSITION(pos, geometry);

    var offset = vec3<f32>(pixelOffset, 0.0);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let clipOffset = project_pixel_size_to_clipspace(offset.xy);
    pos = vec4<f32>(pos.x + clipOffset.x, pos.y + clipOffset.y, pos.z, pos.w);
    outp.position = pos;
  } else {
    var offset_common = vec3<f32>(project_pixel_size_vec2(pixelOffset), 0.0);
    // DECKGL_FILTER_SIZE(offset_common, geometry);
    var pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, offset_common); // TODO, &geometry.position);
    // DECKGL_FILTER_GL_POSITION(pos, geometry);
    outp.position = pos;
  }

  let uvMix = (inp.positions.xy + vec2<f32>(1.0, 1.0)) * 0.5;
  outp.vTextureCoords = mix(inp.instanceIconFrames.xy, inp.instanceIconFrames.xy + iconSize, uvMix) / icon.iconsTextureDim;

  outp.vColor = inp.instanceColors;
  // DECKGL_FILTER_COLOR(outp.vColor, geometry);

  outp.vColorMode = inp.instanceColorModes;
  outp.pickingColor = geometry.pickingColor;

  return outp;
}

@fragment
fn fragmentMain(inp: Varyings) -> @location(0) vec4<f32> {
  // expose to deck.gl filter hooks
  geometry.uv = inp.uv;

  let texColor = textureSample(iconsTexture, iconsTextureSampler, inp.vTextureCoords);

  // if colorMode == 0, use pixel color from the texture
  // if colorMode == 1 (or picking), use texture as transparency mask
  let rgb = mix(texColor.rgb, inp.vColor.rgb, inp.vColorMode);
  let a = texColor.a * layer.opacity * inp.vColor.a;

  if (a < icon.alphaCutoff) {
    discard;
  }

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inp.pickingColor)) {
      discard;
    }
    return vec4<f32>(inp.pickingColor, 1.0);
  }

  var fragColor = deckgl_premultiplied_alpha(vec4<f32>(rgb, a));

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inp.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return fragColor;
}
`;function qS(e){return KS.replace(`PICKING_COLOR_ATTRIBUTE`,e?`@location(10) rowIndexes: u32,`:``).replace(`PICKING_COLOR_VALUE`,e?`picking_getPickingColorFromIndex(inp.rowIndexes)`:`picking_getPickingColorFromIndex(inp.instanceIndex)`)}var JS=1024,YS=4,XS=()=>{},ZS={minFilter:`linear`,mipmapFilter:`linear`,magFilter:`linear`,addressModeU:`clamp-to-edge`,addressModeV:`clamp-to-edge`},QS={x:0,y:0,width:0,height:0};function $S(e){return 2**Math.ceil(Math.log2(e))}function eC(e,t,n,r){let i=Math.min(n/t.width,r/t.height),a=Math.floor(t.width*i),o=Math.floor(t.height*i);return i===1?{image:t,width:a,height:o}:(e.canvas.height=o,e.canvas.width=a,e.clearRect(0,0,a,o),e.drawImage(t,0,0,t.width,t.height,0,0,a,o),{image:e.canvas,width:a,height:o})}function tC(e){return e&&(e.id||e.url)}function nC(e){let{device:t}=e;t.type===`webgl`?e.generateMipmapsWebGL():t.type===`webgpu`&&t.generateMipmapsWebGPU(e)}function rC(e,t,n,r){let{width:i,height:a,device:o}=e,s=o.createTexture({format:`rgba8unorm`,width:t,height:n,sampler:r,mipLevels:o.getMipLevelCount(t,n)}),c=o.createCommandEncoder();c.copyTextureToTexture({sourceTexture:e,destinationTexture:s,width:i,height:a});let l=c.finish();return o.submit(l),nC(s),e.destroy(),s}function iC(e,t,n){for(let r=0;r<t.length;r++){let{icon:i,xOffset:a}=t[r],o=tC(i);e[o]={...i,x:a,y:n}}}function aC({icons:e,buffer:t,mapping:n={},xOffset:r=0,yOffset:i=0,rowHeight:a=0,canvasWidth:o}){let s=[];for(let c=0;c<e.length;c++){let l=e[c];if(!n[tC(l)]){let{height:e,width:c}=l;r+c+t>o&&(iC(n,s,i),r=0,i=a+i+t,a=0,s=[]),s.push({icon:l,xOffset:r}),r=r+c+t,a=Math.max(a,e)}}return s.length>0&&iC(n,s,i),{mapping:n,rowHeight:a,xOffset:r,yOffset:i,canvasWidth:o,canvasHeight:$S(a+i+t)}}function oC(e,t,n){if(!e||!t)return null;n||={};let r={},{iterable:i,objectInfo:a}=Sv(e);for(let e of i){a.index++;let i=t(e,a),o=tC(i);if(!i)throw Error(`Icon is missing.`);if(!i.url)throw Error(`Icon url is missing.`);r[o]||n[o]&&i.url===n[o].url||(r[o]={...i,source:e,sourceIndex:a.index})}return r}var sC=class{constructor(e,{onUpdate:t=XS,onError:n=XS}){this._loadOptions=null,this._texture=null,this._externalTexture=null,this._mapping={},this._samplerParameters=null,this._pendingCount=0,this._autoPacking=!1,this._xOffset=0,this._yOffset=0,this._rowHeight=0,this._buffer=YS,this._canvasWidth=JS,this._canvasHeight=0,this._canvas=null,this.device=e,this.onUpdate=t,this.onError=n}finalize(){this._texture?.delete()}getTexture(){return this._texture||this._externalTexture}getIconMapping(e){let t=this._autoPacking?tC(e):e;return this._mapping[t]||QS}setProps({loadOptions:e,autoPacking:t,iconAtlas:n,iconMapping:r,textureParameters:i}){e&&(this._loadOptions=e),t!==void 0&&(this._autoPacking=t),r&&(this._mapping=r),n&&(this._texture?.delete(),this._texture=null,this._externalTexture=n),i&&(this._samplerParameters=i)}get isLoaded(){return this._pendingCount===0}packIcons(e,t){if(!this._autoPacking||typeof document>`u`)return;let n=Object.values(oC(e,t,this._mapping)||{});if(n.length>0){let{mapping:e,xOffset:t,yOffset:r,rowHeight:i,canvasHeight:a}=aC({icons:n,buffer:this._buffer,canvasWidth:this._canvasWidth,mapping:this._mapping,rowHeight:this._rowHeight,xOffset:this._xOffset,yOffset:this._yOffset});this._rowHeight=i,this._mapping=e,this._xOffset=t,this._yOffset=r,this._canvasHeight=a,this._texture||=this.device.createTexture({format:`rgba8unorm`,data:null,width:this._canvasWidth,height:this._canvasHeight,sampler:this._samplerParameters||ZS,mipLevels:this.device.getMipLevelCount(this._canvasWidth,this._canvasHeight)}),this._texture.height!==this._canvasHeight&&(this._texture=rC(this._texture,this._canvasWidth,this._canvasHeight,this._samplerParameters||ZS)),this.onUpdate(!0),this._canvas=this._canvas||document.createElement(`canvas`),this._loadIcons(n)}}_loadIcons(e){let t=this._canvas.getContext(`2d`,{willReadFrequently:!0});for(let n of e)this._pendingCount++,Gr(n.url,this._loadOptions).then(e=>{let r=tC(n),i=this._mapping[r],{x:a,y:o,width:s,height:c}=i,{image:l,width:u,height:d}=eC(t,e,s,c),f=a+(s-u)/2,p=o+(c-d)/2;this._texture?.copyExternalImage({image:l,x:f,y:p,width:u,height:d}),i.x=f,i.y=p,i.width=u,i.height=d,this._texture&&nC(this._texture),this.onUpdate(u!==s||d!==c)}).catch(e=>{this.onError({url:n.url,source:n.source,sourceIndex:n.sourceIndex,loadOptions:this._loadOptions,error:e})}).finally(()=>{this._pendingCount--})}},cC=[0,0,0,255],lC={iconAtlas:{type:`image`,value:null,async:!0},iconMapping:{type:`object`,value:{},async:!0},sizeScale:{type:`number`,value:1,min:0},billboard:!0,sizeUnits:`pixels`,sizeBasis:`height`,sizeMinPixels:{type:`number`,min:0,value:0},sizeMaxPixels:{type:`number`,min:0,value:2**53-1},alphaCutoff:{type:`number`,value:.05,min:0,max:1},getPosition:{type:`accessor`,value:e=>e.position},getIcon:{type:`accessor`,value:e=>e.icon},getColor:{type:`accessor`,value:cC},getSize:{type:`accessor`,value:1},getAngle:{type:`accessor`,value:0},getPixelOffset:{type:`accessor`,value:[0,0]},onIconError:{type:`function`,value:null,optional:!0},textureParameters:{type:`object`,ignore:!0,value:null}},uC=class extends aS{getShaders(){let e=!!this.props.data?.attributes?.rowIndexes;return super.getShaders({vs:WS,fs:GS,source:qS(e),defines:e?{USE_ROW_INDEXES:!0}:{},modules:[su,Ks,ad,US]})}initializeState(){this.state={iconManager:new sC(this.context.device,{onUpdate:this._onUpdate.bind(this),onError:this._onError.bind(this)})},this.getAttributeManager().addInstanced({instancePositions:{size:3,type:`float64`,fp64:this.use64bitPositions(),transition:!0,accessor:`getPosition`},instanceSizes:{size:1,transition:!0,bufferGroup:`icon-instance-data`,accessor:`getSize`,defaultValue:1},instanceIconDefs:{size:7,bufferGroup:`icon-instance-data`,accessor:`getIcon`,transform:this.getInstanceIconDef,shaderAttributes:{instanceOffsets:{size:2,elementOffset:0},instanceIconFrames:{size:4,elementOffset:2},instanceColorModes:{size:1,elementOffset:6}}},instanceColors:{size:this.props.colorFormat.length,type:`unorm8`,transition:!0,bufferGroup:`icon-instance-data`,accessor:`getColor`,defaultValue:cC},instanceAngles:{size:1,transition:!0,bufferGroup:`icon-instance-data`,accessor:`getAngle`},instancePixelOffset:{size:2,transition:!0,bufferGroup:`icon-instance-data`,accessor:`getPixelOffset`},...this.props.data?.attributes?.rowIndexes?{rowIndexes:{size:1,type:`uint32`,noAlloc:!0}}:{}})}updateState(e){super.updateState(e);let{props:t,oldProps:n,changeFlags:r}=e,i=this.getAttributeManager(),{iconAtlas:a,iconMapping:o,data:s,getIcon:c,textureParameters:l}=t,{iconManager:u}=this.state;if(typeof a==`string`)return;let d=a||this.internalState.isAsyncPropLoading(`iconAtlas`);u.setProps({loadOptions:t.loadOptions,autoPacking:!d,iconAtlas:a,iconMapping:d?o:null,textureParameters:l}),d?n.iconMapping!==t.iconMapping&&i.invalidate(`getIcon`):(r.dataChanged||r.updateTriggersChanged&&(r.updateTriggersChanged.all||r.updateTriggersChanged.getIcon))&&u.packIcons(s,c),r.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),i.invalidateAll())}get isLoaded(){return super.isLoaded&&this.state.iconManager.isLoaded}finalizeState(e){super.finalizeState(e),this.state.iconManager.finalize()}draw({uniforms:e}){this._drawModel(this.state.model)}_drawModel(e){let{sizeScale:t,sizeBasis:n,sizeMinPixels:r,sizeMaxPixels:i,sizeUnits:a,billboard:o,alphaCutoff:s}=this.props,{iconManager:c}=this.state,l=c.getTexture();if(l){let c={iconsTexture:l,iconsTextureDim:[l.width,l.height],sizeUnits:zl[a],sizeScale:t,sizeBasis:+(n===`height`),sizeMinPixels:r,sizeMaxPixels:i,billboard:o,alphaCutoff:s};e.shaderInputs.setProps({icon:c}),e.draw(this.context.renderPass)}}_getModel(e=this.props.id){let t=[-1,-1,1,-1,-1,1,1,1];return new Vf(this.context.device,{...this.getShaders(),id:e,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new $d({topology:`triangle-strip`,attributes:{positions:{size:2,value:new Float32Array(t)}}}),isInstanced:!0})}_onUpdate(e){e?(this.getAttributeManager()?.invalidate(`getIcon`),this.setNeedsUpdate()):this.setNeedsRedraw()}_onError(e){let t=this.getCurrentLayer()?.props.onIconError;t?t(e):z.error(e.error.message)()}getInstanceIconDef(e){let{x:t,y:n,width:r,height:i,mask:a,anchorX:o=r/2,anchorY:s=i/2}=this.state.iconManager.getIconMapping(e);return[r/2-o,i/2-s,t,n,r,i,+!!a]}};uC.defaultProps=lC,uC.layerName=`IconLayer`;var dC=`layout(std140) uniform lineUniforms {
  float widthScale;
  float widthMinPixels;
  float widthMaxPixels;
  float useShortestPath;
  highp int widthUnits;
} line;
`,fC={name:`line`,source:``,vs:dC,fs:dC,uniformTypes:{widthScale:`f32`,widthMinPixels:`f32`,widthMaxPixels:`f32`,useShortestPath:`f32`,widthUnits:`i32`}},pC=`// ---------- Helper Structures & Functions ----------

// Placeholder filter functions.
fn deckgl_filter_size(offset: vec3<f32>, geometry: Geometry) -> vec3<f32> {
  return offset;
}
fn deckgl_filter_gl_position(p: vec4<f32>, geometry: Geometry) -> vec4<f32> {
  if (picking.isAttribute > 0.5) {
    // For depth picking, write normalized depth into the picking payload.
    // This mirrors the legacy DECKGL_FILTER_GL_POSITION hook on WebGL.
  }
  return p;
}

// Compute an extrusion offset given a line direction (in clipspace),
// an offset direction (-1 or 1), and a width in pixels.
// Assumes a uniform "project" with a viewportSize field is available.
fn getExtrusionOffset(line_clipspace: vec2<f32>, offset_direction: f32, width: f32) -> vec2<f32> {
  // project.viewportSize should be provided as a uniform (not shown here)
  let dir_screenspace = normalize(line_clipspace * project.viewportSize);
  // Rotate by 90°: (x,y) becomes (-y,x)
  let rotated = vec2<f32>(-dir_screenspace.y, dir_screenspace.x);
  return rotated * offset_direction * width / 2.0;
}

// Splits the line between two points at a given x coordinate.
// Interpolates the y and z components.
fn splitLine(a: vec3<f32>, b: vec3<f32>, x: f32) -> vec3<f32> {
  let t: f32 = (x - a.x) / (b.x - a.x);
  return vec3<f32>(x, a.yz + t * (b.yz - a.yz));
}

// ---------- Uniforms & Global Structures ----------

struct LineUniforms {
  widthScale: f32,
  widthMinPixels: f32,
  widthMaxPixels: f32,
  useShortestPath: f32,
  widthUnits: i32,
};

@group(0) @binding(0)
var<uniform> line: LineUniforms;



// ---------- Vertex Output Structure ----------

struct Varyings {
  @builtin(position) gl_Position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) uv: vec2<f32>,
  @location(2) pickingColor: vec3<f32>,
};

// ---------- Vertex Shader Entry Point ----------

@vertex
fn vertexMain(
  @builtin(instance_index) instanceIndex: u32,
  @location(0) positions: vec3<f32>,
  @location(1) instanceSourcePositions: vec3<f32>,
  @location(2) instanceTargetPositions: vec3<f32>,
  @location(3) instanceSourcePositions64Low: vec3<f32>,
  @location(4) instanceTargetPositions64Low: vec3<f32>,
  @location(5) instanceColors: vec4<f32>,
  @location(6) instanceWidths: f32
) -> Varyings {
  geometry.worldPosition = instanceSourcePositions;
  geometry.worldPositionAlt = instanceTargetPositions;

  var source_world: vec3<f32> = instanceSourcePositions;
  var target_world: vec3<f32> = instanceTargetPositions;
  var source_world_64low: vec3<f32> = instanceSourcePositions64Low;
  var target_world_64low: vec3<f32> = instanceTargetPositions64Low;

  // Apply shortest-path adjustments if needed.
  if (line.useShortestPath > 0.5 || line.useShortestPath < -0.5) {
    source_world.x = (source_world.x + 180.0 % 360.0) - 180.0;
    target_world.x = (target_world.x + 180.0 % 360.0) - 180.0;
    let deltaLng: f32 = target_world.x - source_world.x;

    if (deltaLng * line.useShortestPath > 180.0) {
      source_world.x = source_world.x + 360.0 * line.useShortestPath;
      source_world = splitLine(source_world, target_world, 180.0 * line.useShortestPath);
      source_world_64low = vec3<f32>(0.0, 0.0, 0.0);
    } else if (deltaLng * line.useShortestPath < -180.0) {
      target_world.x = target_world.x + 360.0 * line.useShortestPath;
      target_world = splitLine(source_world, target_world, 180.0 * line.useShortestPath);
      target_world_64low = vec3<f32>(0.0, 0.0, 0.0);
    } else if (line.useShortestPath < 0.0) {
      var abortOut: Varyings;
      abortOut.gl_Position = vec4<f32>(0.0);
      abortOut.vColor = vec4<f32>(0.0);
      abortOut.uv = vec2<f32>(0.0);
      return abortOut;
    }
  }

  // Project Pos and target positions to clip space.
  let sourceResult = project_position_to_clipspace_and_commonspace(source_world, source_world_64low, vec3<f32>(0.0));
  let targetResult = project_position_to_clipspace_and_commonspace(target_world, target_world_64low, vec3<f32>(0.0));
  let sourcePos: vec4<f32> = sourceResult.clipPosition;
  let targetPos: vec4<f32> = targetResult.clipPosition;
  let source_commonspace: vec4<f32> = sourceResult.commonPosition;
  let target_commonspace: vec4<f32> = targetResult.commonPosition;

  // Interpolate along the line segment.
  let segmentIndex: f32 = positions.x;
  let p: vec4<f32> = sourcePos + segmentIndex * (targetPos - sourcePos);
  geometry.position = source_commonspace + segmentIndex * (target_commonspace - source_commonspace);
#ifdef ANTIALIASING
  var uv: vec2<f32> = positions.xy;
#else
  let uv: vec2<f32> = positions.xy;
#endif
  geometry.uv = uv;
  geometry.pickingColor = picking_getPickingColorFromIndex(instanceIndex);

  // Determine width in pixels.
  let widthPixels: f32 = clamp(
    project_unit_size_to_pixel(instanceWidths * line.widthScale, line.widthUnits),
    line.widthMinPixels, line.widthMaxPixels
  );

  // Compute extrusion offset.
  let extrusion: vec2<f32> = getExtrusionOffset(targetPos.xy - sourcePos.xy, positions.y, widthPixels);
  let offset: vec3<f32> = vec3<f32>(extrusion, 0.0);

  // Apply deck.gl filter functions.
#ifdef ANTIALIASING
  var filteredOffset = deckgl_filter_size(offset, geometry);
  let halfWidthPixels = length(filteredOffset.xy);
  if (halfWidthPixels > 0.0) {
    // Keep the declared edge at abs(uv.y) == 1 while rasterizing the outer half of the centered
    // one-device-pixel coverage ramp.
    let coverageScale = 1.0 + 0.5 / project.devicePixelRatio / halfWidthPixels;
    filteredOffset *= coverageScale;
    uv.y *= coverageScale;
  }
  geometry.uv = uv;
#else
  let filteredOffset = deckgl_filter_size(offset, geometry);
#endif
  let filteredP = deckgl_filter_gl_position(p, geometry);

  let clipOffset: vec2<f32> = project_pixel_size_to_clipspace(filteredOffset.xy);
  let finalPosition: vec4<f32> = filteredP + vec4<f32>(clipOffset, 0.0, 0.0);

  // Compute color.
  var vColor: vec4<f32> = vec4<f32>(instanceColors.rgb, instanceColors.a * layer.opacity);
  // vColor = deckgl_filter_color(vColor, geometry);

  var output: Varyings;
  output.gl_Position = finalPosition;
  output.vColor = vColor;
  output.uv = uv;
  output.pickingColor = geometry.pickingColor;
  return output;
}

@fragment
fn fragmentMain(
  @location(0) vColor: vec4<f32>,
  @location(1) uv: vec2<f32>,
  @location(2) pickingColor: vec3<f32>
) -> @location(0) vec4<f32> {
  // Create and initialize geometry with the provided uv.
  var geometry: Geometry;
  geometry.uv = uv;

  // Start with the input color.
  var fragColor: vec4<f32> = vColor;

#ifdef ANTIALIASING
  // Distance to the edge in device pixels, from the derivative of uv.y. Taken in uniform control
  // flow, ahead of the picking discard below
  let edgeCoord = abs(uv.y);
  let edgePixels = (1.0 - edgeCoord) / max(fwidth(edgeCoord), 1e-6);

  // Fragments outside the coverage ramp must not write depth or picking colors.
  if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
    discard;
  }

  // Feather one device pixel across the width, before premultiplication below. The ends are left
  // hard - they abut neighbors
  fragColor.a *= smoothedge(0.0, edgePixels);
#endif

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(pickingColor)) {
      discard;
    }
    return vec4<f32>(pickingColor, 1.0);
  }

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  // Apply premultiplied alpha as required by transparent canvas
  fragColor = deckgl_premultiplied_alpha(fragColor);

  return fragColor;
}
`,mC=`#version 300 es
#define SHADER_NAME line-layer-vertex-shader
in vec3 positions;
in vec3 instanceSourcePositions;
in vec3 instanceTargetPositions;
in vec3 instanceSourcePositions64Low;
in vec3 instanceTargetPositions64Low;
in vec4 instanceColors;
in float instanceWidths;
out vec4 vColor;
out vec2 uv;
vec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction, float width) {
vec2 dir_screenspace = normalize(line_clipspace * project.viewportSize);
dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);
return dir_screenspace * offset_direction * width / 2.0;
}
vec3 splitLine(vec3 a, vec3 b, float x) {
float t = (x - a.x) / (b.x - a.x);
return vec3(x, mix(a.yz, b.yz, t));
}
void main(void) {
geometry.worldPosition = instanceSourcePositions;
geometry.worldPositionAlt = instanceTargetPositions;
vec3 source_world = instanceSourcePositions;
vec3 target_world = instanceTargetPositions;
vec3 source_world_64low = instanceSourcePositions64Low;
vec3 target_world_64low = instanceTargetPositions64Low;
if (line.useShortestPath > 0.5 || line.useShortestPath < -0.5) {
source_world.x = mod(source_world.x + 180., 360.0) - 180.;
target_world.x = mod(target_world.x + 180., 360.0) - 180.;
float deltaLng = target_world.x - source_world.x;
if (deltaLng * line.useShortestPath > 180.) {
source_world.x += 360. * line.useShortestPath;
source_world = splitLine(source_world, target_world, 180. * line.useShortestPath);
source_world_64low = vec3(0.0);
} else if (deltaLng * line.useShortestPath < -180.) {
target_world.x += 360. * line.useShortestPath;
target_world = splitLine(source_world, target_world, 180. * line.useShortestPath);
target_world_64low = vec3(0.0);
} else if (line.useShortestPath < 0.) {
gl_Position = vec4(0.);
return;
}
}
vec4 source_commonspace;
vec4 target_commonspace;
vec4 source = project_position_to_clipspace(source_world, source_world_64low, vec3(0.), source_commonspace);
vec4 target = project_position_to_clipspace(target_world, target_world_64low, vec3(0.), target_commonspace);
float segmentIndex = positions.x;
vec4 p = mix(source, target, segmentIndex);
geometry.position = mix(source_commonspace, target_commonspace, segmentIndex);
uv = positions.xy;
geometry.uv = uv;
geometry.pickingColor = picking_getPickingColorFromInstanceID();
float widthPixels = clamp(
project_size_to_pixel(instanceWidths * line.widthScale, line.widthUnits),
line.widthMinPixels, line.widthMaxPixels
);
vec3 offset = vec3(
getExtrusionOffset(target.xy - source.xy, positions.y, widthPixels),
0.0);
DECKGL_FILTER_SIZE(offset, geometry);
#ifdef ANTIALIASING
float halfWidthPixels = length(offset.xy);
if (halfWidthPixels > 0.0) {
float coverageScale = 1.0 + 0.5 / project.devicePixelRatio / halfWidthPixels;
offset.xy *= coverageScale;
uv.y *= coverageScale;
}
geometry.uv = uv;
#endif
DECKGL_FILTER_GL_POSITION(p, geometry);
gl_Position = p + vec4(project_pixel_size_to_clipspace(offset.xy), 0.0, 0.0);
vColor = vec4(instanceColors.rgb, instanceColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,hC=`#version 300 es
#define SHADER_NAME line-layer-fragment-shader
precision highp float;
in vec4 vColor;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
fragColor = vColor;
#ifdef ANTIALIASING
float edgeCoord = abs(uv.y);
float edgePixels = (1.0 - edgeCoord) / max(fwidth(edgeCoord), 1e-6);
if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
discard;
}
fragColor.a *= smoothedge(0.0, edgePixels);
#endif
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,gC={getSourcePosition:{type:`accessor`,value:e=>e.sourcePosition},getTargetPosition:{type:`accessor`,value:e=>e.targetPosition},getColor:{type:`accessor`,value:[0,0,0,255]},getWidth:{type:`accessor`,value:1},widthUnits:`pixels`,widthScale:{type:`number`,value:1,min:0},widthMinPixels:{type:`number`,value:0,min:0},widthMaxPixels:{type:`number`,value:2**53-1,min:0},antialiasing:!1},_C=class extends aS{getBounds(){return this.getAttributeManager()?.getBounds([`instanceSourcePositions`,`instanceTargetPositions`])}getShaders(){let{antialiasing:e}=this.props;return super.getShaders({vs:mC,fs:hC,source:pC,defines:e?{ANTIALIASING:1}:{},modules:[su,Ks,ad,fC]})}get wrapLongitude(){return!1}initializeState(){this.getAttributeManager().addInstanced({instanceSourcePositions:{size:3,type:`float64`,fp64:this.use64bitPositions(),transition:!0,accessor:`getSourcePosition`},instanceTargetPositions:{size:3,type:`float64`,fp64:this.use64bitPositions(),transition:!0,accessor:`getTargetPosition`},instanceColors:{size:this.props.colorFormat.length,type:`unorm8`,transition:!0,accessor:`getColor`,defaultValue:[0,0,0,255]},instanceWidths:{size:1,transition:!0,accessor:`getWidth`,defaultValue:1}})}updateState(e){super.updateState(e);let{props:t,oldProps:n,changeFlags:r}=e;(r.extensionsChanged||t.antialiasing!==n.antialiasing)&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){let{widthUnits:t,widthScale:n,widthMinPixels:r,widthMaxPixels:i,wrapLongitude:a}=this.props,o=this.state.model,s={widthUnits:zl[t],widthScale:n,widthMinPixels:r,widthMaxPixels:i,useShortestPath:+!!a};o.shaderInputs.setProps({line:s}),o.draw(this.context.renderPass),a&&(o.shaderInputs.setProps({line:{...s,useShortestPath:-1}}),o.draw(this.context.renderPass))}_getModel(){let e=[0,-1,0,0,1,0,1,-1,0,1,1,0];return new Vf(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new $d({topology:`triangle-strip`,attributes:{positions:{size:3,value:new Float32Array(e)}}}),isInstanced:!0})}};_C.layerName=`LineLayer`,_C.defaultProps=gC;var vC=`layout(std140) uniform scatterplotUniforms {
  float radiusScale;
  float radiusMinPixels;
  float radiusMaxPixels;
  float lineWidthScale;
  float lineWidthMinPixels;
  float lineWidthMaxPixels;
  float stroked;
  float filled;
  bool antialiasing;
  bool billboard;
  highp int radiusUnits;
  highp int lineWidthUnits;
} scatterplot;
`,yC={name:`scatterplot`,vs:vC,fs:vC,source:``,uniformTypes:{radiusScale:`f32`,radiusMinPixels:`f32`,radiusMaxPixels:`f32`,lineWidthScale:`f32`,lineWidthMinPixels:`f32`,lineWidthMaxPixels:`f32`,stroked:`f32`,filled:`f32`,antialiasing:`f32`,billboard:`f32`,radiusUnits:`i32`,lineWidthUnits:`i32`}},bC=`#version 300 es
#define SHADER_NAME scatterplot-layer-vertex-shader
in vec3 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceRadius;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
#ifdef USE_ROW_INDEXES
in float rowIndexes;
#endif
in vec2 instancePixelOffset;
out vec4 vFillColor;
out vec4 vLineColor;
out vec2 unitPosition;
out float innerUnitRadius;
out float outerRadiusPixels;
void main(void) {
geometry.worldPosition = instancePositions;
outerRadiusPixels = clamp(
project_size_to_pixel(scatterplot.radiusScale * instanceRadius, scatterplot.radiusUnits),
scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
);
float lineWidthPixels = clamp(
project_size_to_pixel(scatterplot.lineWidthScale * instanceLineWidths, scatterplot.lineWidthUnits),
scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
);
outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
float edgePadding = scatterplot.antialiasing ? (outerRadiusPixels + SMOOTH_EDGE_RADIUS) / outerRadiusPixels : 1.0;
unitPosition = edgePadding * positions.xy;
geometry.uv = unitPosition;
#ifdef USE_ROW_INDEXES
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
#else
geometry.pickingColor = picking_getPickingColorFromInstanceID();
#endif
innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / outerRadiusPixels;
if (scatterplot.billboard) {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = edgePadding * positions * outerRadiusPixels;
offset.xy += instancePixelOffset;
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset = edgePadding * positions * project_pixel_size(outerRadiusPixels);
offset.xy += project_pixel_size(instancePixelOffset);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vFillColor, geometry);
vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`,xC=`#version 300 es
#define SHADER_NAME scatterplot-layer-fragment-shader
precision highp float;
in vec4 vFillColor;
in vec4 vLineColor;
in vec2 unitPosition;
in float innerUnitRadius;
in float outerRadiusPixels;
out vec4 fragColor;
void main(void) {
geometry.uv = unitPosition;
float distToCenter = length(unitPosition) * outerRadiusPixels;
float inCircle = scatterplot.antialiasing ?
smoothedge(distToCenter, outerRadiusPixels) :
step(distToCenter, outerRadiusPixels);
if (inCircle == 0.0) {
discard;
}
if (scatterplot.stroked > 0.5) {
float isLine = scatterplot.antialiasing ?
smoothedge(innerUnitRadius * outerRadiusPixels, distToCenter) :
step(innerUnitRadius * outerRadiusPixels, distToCenter);
if (scatterplot.filled > 0.5) {
fragColor = mix(vFillColor, vLineColor, isLine);
} else {
if (isLine == 0.0) {
discard;
}
fragColor = vec4(vLineColor.rgb, vLineColor.a * isLine);
}
} else if (scatterplot.filled < 0.5) {
discard;
} else {
fragColor = vFillColor;
}
fragColor.a *= inCircle;
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,SC=`// Main shaders

struct ScatterplotUniforms {
  radiusScale: f32,
  radiusMinPixels: f32,
  radiusMaxPixels: f32,
  lineWidthScale: f32,
  lineWidthMinPixels: f32,
  lineWidthMaxPixels: f32,
  stroked: f32,
  filled: i32,
  antialiasing: i32,
  billboard: i32,
  radiusUnits: i32,
  lineWidthUnits: i32,
};

@group(0) @binding(0) var<uniform> scatterplot: ScatterplotUniforms;

struct Attributes {
  @builtin(instance_index) instanceIndex : u32,
  @builtin(vertex_index) vertexIndex : u32,
  @location(0) positions: vec3<f32>,
  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceRadius: f32,
  @location(4) instanceLineWidths: f32,
  @location(5) instanceFillColors: vec4<f32>,
  @location(6) instanceLineColors: vec4<f32>,
  @location(7) instancePixelOffset: vec2<f32>,
  PICKING_COLOR_ATTRIBUTE
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vFillColor: vec4<f32>,
  @location(1) vLineColor: vec4<f32>,
  @location(2) unitPosition: vec2<f32>,
  @location(3) innerUnitRadius: f32,
  @location(4) outerRadiusPixels: f32,
  @location(5) pickingColor: vec3<f32>,
  @location(6) clipCoordinates: vec2<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  // Draw an inline geometry constant array clip space triangle to verify that rendering works.
  // var positions = array<vec2<f32>, 3>(vec2(0.0, 0.5), vec2(-0.5, -0.5), vec2(0.5, -0.5));
  // if (attributes.instanceIndex == 0) {
  //   varyings.position = vec4<f32>(positions[attributes.vertexIndex], 0.0, 1.0);
  //   return varyings;
  // }

  geometry.worldPosition = attributes.instancePositions;

  // Multiply out radius and clamp to limits
  varyings.outerRadiusPixels = clamp(
    project_unit_size_to_pixel(scatterplot.radiusScale * attributes.instanceRadius, scatterplot.radiusUnits),
    scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
  );

  // Multiply out line width and clamp to limits
  let lineWidthPixels = clamp(
    project_unit_size_to_pixel(scatterplot.lineWidthScale * attributes.instanceLineWidths, scatterplot.lineWidthUnits),
    scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
  );

  // outer radius needs to offset by half stroke width
  varyings.outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
  // Expand geometry to accommodate edge smoothing
  // WGSL selects the second value when the condition is true, so keep the antialiased path second.
  let edgePadding = select(
    1.0,
    (varyings.outerRadiusPixels + SMOOTH_EDGE_RADIUS) / varyings.outerRadiusPixels,
    scatterplot.antialiasing != 0
  );

  // position on the containing square in [-1, 1] space
  varyings.unitPosition = edgePadding * attributes.positions.xy;
  geometry.uv = varyings.unitPosition;
  geometry.pickingColor = PICKING_COLOR_VALUE;

  varyings.innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / varyings.outerRadiusPixels;

  if (scatterplot.billboard != 0) {
    let projectedPosition = project_position_to_clipspace_and_commonspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      vec3<f32>(0.0)
    );
    geometry.position = projectedPosition.commonPosition;
    varyings.position = projectedPosition.clipPosition;
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
    var offset = edgePadding * attributes.positions * varyings.outerRadiusPixels;
    offset = vec3<f32>(offset.xy + attributes.instancePixelOffset, offset.z);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let clipPixels = project_pixel_size_to_clipspace(offset.xy);
    varyings.position = vec4<f32>(varyings.position.x + clipPixels.x, varyings.position.y + clipPixels.y, varyings.position.z, varyings.position.w);
    geometry.position = vec4<f32>(
      geometry.position.xy + project_pixel_size_vec2(offset.xy),
      geometry.position.zw
    );
  } else {
    var offset = edgePadding * attributes.positions * project_pixel_size_float(varyings.outerRadiusPixels);
    offset = vec3<f32>(offset.xy + project_pixel_size_vec2(attributes.instancePixelOffset), offset.z);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let projectedPosition = project_position_to_clipspace_and_commonspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      offset
    );
    geometry.position = projectedPosition.commonPosition;
    varyings.position = projectedPosition.clipPosition;
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
  }

  varyings.clipCoordinates = geometry.position.xy;
  clip_filterPosition(&varyings.position, geometry.worldPosition.xy);

  // Apply opacity to instance color, or return instance picking color
  varyings.vFillColor = vec4<f32>(attributes.instanceFillColors.rgb, attributes.instanceFillColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(varyings.vFillColor, geometry);
  varyings.vLineColor = vec4<f32>(attributes.instanceLineColors.rgb, attributes.instanceLineColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(varyings.vLineColor, geometry);
  varyings.pickingColor = geometry.pickingColor;

  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  // var geometry: Geometry;
  // geometry.uv = unitPosition;

  let distToCenter = length(varyings.unitPosition) * varyings.outerRadiusPixels;
  let inCircle = select(
    step(distToCenter, varyings.outerRadiusPixels),
    smoothedge(distToCenter, varyings.outerRadiusPixels),
    scatterplot.antialiasing != 0
  );

  if (inCircle == 0.0) {
    discard;
  }

  var fragColor: vec4<f32>;

  if (scatterplot.stroked != 0) {
    let isLine = select(
      step(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
      smoothedge(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
      scatterplot.antialiasing != 0
    );

    if (scatterplot.filled != 0) {
      fragColor = mix(varyings.vFillColor, varyings.vLineColor, isLine);
    } else {
      if (isLine == 0.0) {
        discard;
      }
      fragColor = vec4<f32>(varyings.vLineColor.rgb, varyings.vLineColor.a * isLine);
    }
  } else if (scatterplot.filled == 0) {
    discard;
  } else {
    fragColor = varyings.vFillColor;
  }

  fragColor.a *= inCircle;

  clip_filterColor(varyings.clipCoordinates);

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  // Apply premultiplied alpha as required by transparent canvas
  fragColor = deckgl_premultiplied_alpha(fragColor);

  return fragColor;
  // return vec4<f32>(0, 0, 1, 1);
}
`;function CC(e){return SC.replace(`PICKING_COLOR_ATTRIBUTE`,e?`@location(8) rowIndexes: u32,`:``).replace(`PICKING_COLOR_VALUE`,e?`picking_getPickingColorFromIndex(attributes.rowIndexes)`:`picking_getPickingColorFromIndex(attributes.instanceIndex)`)}var wC=0,TC=1,EC={name:`clip`,source:`\
struct ClipUniforms {
  enabled: i32,
  mode: i32,
  bounds: vec4<f32>,
};

@group(2) @binding(auto) var<uniform> clipUniforms: ClipUniforms;

fn clip_isInBounds(coordinates: vec2<f32>) -> bool {
  return coordinates.x >= clipUniforms.bounds.x &&
    coordinates.y >= clipUniforms.bounds.y &&
    coordinates.x < clipUniforms.bounds.z &&
    coordinates.y < clipUniforms.bounds.w;
}

fn clip_filterPosition(position: ptr<function, vec4<f32>>, instanceCoordinates: vec2<f32>) {
  if (
    clipUniforms.enabled != 0 &&
    clipUniforms.mode == ${TC} &&
    !clip_isInBounds(instanceCoordinates)
  ) {
    *position = vec4<f32>(2.0, 2.0, 2.0, 1.0);
  }
}

fn clip_filterColor(geometryCoordinates: vec2<f32>) {
  if (
    clipUniforms.enabled != 0 &&
    clipUniforms.mode == ${wC} &&
    !clip_isInBounds(geometryCoordinates)
  ) {
    discard;
  }
}
`,props:{},uniforms:{},bindingLayout:[{name:`clip`,group:2}],uniformTypes:{enabled:`i32`,mode:`i32`,bounds:`vec4<f32>`},defaultUniforms:{enabled:0,mode:wC,bounds:[0,0,1,1]},getUniforms(e={}){let t={};return e.enabled!==void 0&&(t.enabled=+!!e.enabled),e.mode!==void 0&&(t.mode=e.mode===`instance`?TC:wC),e.bounds!==void 0&&(t.bounds=e.bounds),t}},DC=[0,0,0,255],OC={radiusUnits:`meters`,radiusScale:{type:`number`,min:0,value:1},radiusMinPixels:{type:`number`,min:0,value:0},radiusMaxPixels:{type:`number`,min:0,value:2**53-1},lineWidthUnits:`meters`,lineWidthScale:{type:`number`,min:0,value:1},lineWidthMinPixels:{type:`number`,min:0,value:0},lineWidthMaxPixels:{type:`number`,min:0,value:2**53-1},stroked:!1,filled:!0,billboard:!1,antialiasing:!0,getPosition:{type:`accessor`,value:e=>e.position},getRadius:{type:`accessor`,value:1},getFillColor:{type:`accessor`,value:DC},getLineColor:{type:`accessor`,value:DC},getLineWidth:{type:`accessor`,value:1},getPixelOffset:{type:`accessor`,value:[0,0]},strokeWidth:{deprecatedFor:`getLineWidth`},outline:{deprecatedFor:`stroked`},getColor:{deprecatedFor:[`getFillColor`,`getLineColor`]}},kC=class extends aS{getShaders(){let e=!!this.props.data?.attributes?.rowIndexes;return super.getShaders({vs:bC,fs:xC,source:CC(e),defines:e?{USE_ROW_INDEXES:!0}:{},modules:[su,Ks,ad,yC,...this.context.device.type===`webgpu`?[EC]:[]]})}initializeState(){let e=this.props.data?.attributes?.rowIndexes?{rowIndexes:{size:1,type:`uint32`,noAlloc:!0}}:{};this.getAttributeManager().addInstanced({instancePositions:{size:3,type:`float64`,fp64:this.use64bitPositions(),transition:!0,accessor:`getPosition`},instanceRadius:{size:1,transition:!0,accessor:`getRadius`,defaultValue:1,bufferGroup:`scatterplot-instance-data`},instanceFillColors:{size:this.props.colorFormat.length,transition:!0,type:`unorm8`,accessor:`getFillColor`,defaultValue:[0,0,0,255],bufferGroup:`scatterplot-instance-data`},instanceLineColors:{size:this.props.colorFormat.length,transition:!0,type:`unorm8`,accessor:`getLineColor`,defaultValue:[0,0,0,255],bufferGroup:`scatterplot-instance-data`},instanceLineWidths:{size:1,transition:!0,accessor:`getLineWidth`,defaultValue:1,bufferGroup:`scatterplot-instance-data`},instancePixelOffset:{size:2,transition:!0,accessor:`getPixelOffset`,bufferGroup:`scatterplot-instance-data`},...e})}updateState(e){super.updateState(e),e.changeFlags.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){let{radiusUnits:t,radiusScale:n,radiusMinPixels:r,radiusMaxPixels:i,stroked:a,filled:o,billboard:s,antialiasing:c,lineWidthUnits:l,lineWidthScale:u,lineWidthMinPixels:d,lineWidthMaxPixels:f}=this.props,p={stroked:a,filled:o,billboard:s,antialiasing:c,radiusUnits:zl[t],radiusScale:n,radiusMinPixels:r,radiusMaxPixels:i,lineWidthUnits:zl[l],lineWidthScale:u,lineWidthMinPixels:d,lineWidthMaxPixels:f},m=this.state.model;m.shaderInputs.setProps({scatterplot:p}),m.draw(this.context.renderPass)}_getModel(){let e=[-1,-1,0,1,-1,0,-1,1,0,1,1,0];return new Vf(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new $d({topology:`triangle-strip`,attributes:{positions:{size:3,value:new Float32Array(e)}}}),isInstanced:!0})}};kC.defaultProps=OC,kC.layerName=`ScatterplotLayer`;var AC={CLOCKWISE:1,COUNTER_CLOCKWISE:-1};function jC(e,t,n={}){return MC(e,n)!==t&&(FC(e,n),!0)}function MC(e,t={}){return Math.sign(PC(e,t))}var NC={x:0,y:1,z:2};function PC(e,t={}){let{start:n=0,end:r=e.length,plane:i=`xy`}=t,a=t.size||2,o=0,s=NC[i[0]],c=NC[i[1]];for(let t=n,i=r-a;t<r;t+=a)o+=(e[t+s]-e[i+s])*(e[t+c]+e[i+c]),i=t;return o/2}function FC(e,t){let{start:n=0,end:r=e.length,size:i=2}=t,a=(r-n)/i,o=Math.floor(a/2);for(let t=0;t<o;++t){let r=n+t*i,o=n+(a-1-t)*i;for(let t=0;t<i;++t){let n=e[r+t];e[r+t]=e[o+t],e[o+t]=n}}}function IC(e,t){let n=t.length,r=e.length;if(r>0){let i=!0;for(let a=0;a<n;a++)if(e[r-n+a]!==t[a]){i=!1;break}if(i)return!1}for(let i=0;i<n;i++)e[r+i]=t[i];return!0}function LC(e,t){let n=t.length;for(let r=0;r<n;r++)e[r]=t[r]}function RC(e,t,n,r,i=[]){let a=r+t*n;for(let t=0;t<n;t++)i[t]=e[a+t];return i}function zC(e,t,n,r,i=[]){let a,o;if(n&8)a=(r[3]-e[1])/(t[1]-e[1]),o=3;else if(n&4)a=(r[1]-e[1])/(t[1]-e[1]),o=1;else if(n&2)a=(r[2]-e[0])/(t[0]-e[0]),o=2;else if(n&1)a=(r[0]-e[0])/(t[0]-e[0]),o=0;else return null;for(let n=0;n<e.length;n++)i[n]=(o&1)===n?r[o]:a*(t[n]-e[n])+e[n];return i}function BC(e,t){let n=0;return e[0]<t[0]?n|=1:e[0]>t[2]&&(n|=2),e[1]<t[1]?n|=4:e[1]>t[3]&&(n|=8),n}function VC(e,t){let{size:n=2,broken:r=!1,gridResolution:i=10,gridOffset:a=[0,0],startIndex:o=0,endIndex:s=e.length}=t||{},c=(s-o)/n,l=[],u=[l],d=RC(e,0,n,o),f,p,m=KC(d,i,a,[]),h=[];IC(l,d);for(let t=1;t<c;t++){for(f=RC(e,t,n,o,f),p=BC(f,m);p;){zC(d,f,p,m,h);let e=BC(h,m);e&&(zC(d,h,e,m,h),p=e),IC(l,h),LC(d,h),qC(m,i,p),r&&l.length>n&&(l=[],u.push(l),IC(l,d)),p=BC(f,m)}IC(l,f),LC(d,f)}return r?u:u[0]}var HC=0,UC=1;function WC(e,t=null,n){if(!e.length)return[];let{size:r=2,gridResolution:i=10,gridOffset:a=[0,0],edgeTypes:o=!1}=n||{},s=[],c=[{pos:e,types:o?Array(e.length/r).fill(UC):null,holes:t||[]}],l=[[],[]],u=[];for(;c.length;){let{pos:e,types:t,holes:n}=c.shift();JC(e,r,n[0]||e.length,l),u=KC(l[0],i,a,u);let d=BC(l[1],u);if(d){let i=GC(e,t,r,0,n[0]||e.length,u,d),a={pos:i[0].pos,types:i[0].types,holes:[]},s={pos:i[1].pos,types:i[1].types,holes:[]};c.push(a,s);for(let c=0;c<n.length;c++)i=GC(e,t,r,n[c],n[c+1]||e.length,u,d),i[0]&&(a.holes.push(a.pos.length),a.pos=YC(a.pos,i[0].pos),o&&(a.types=YC(a.types,i[0].types))),i[1]&&(s.holes.push(s.pos.length),s.pos=YC(s.pos,i[1].pos),o&&(s.types=YC(s.types,i[1].types)))}else{let r={positions:e};o&&(r.edgeTypes=t),n.length&&(r.holeIndices=n),s.push(r)}}return s}function GC(e,t,n,r,i,a,o){let s=(i-r)/n,c=[],l=[],u=[],d=[],f=[],p,m,h,g=RC(e,s-1,n,r),_=Math.sign(o&8?g[1]-a[3]:g[0]-a[2]),v=t&&t[s-1],y=0,b=0;for(let i=0;i<s;i++)p=RC(e,i,n,r,p),m=Math.sign(o&8?p[1]-a[3]:p[0]-a[2]),h=t&&t[r/n+i],m&&_&&_!==m&&(zC(g,p,o,a,f),IC(c,f)&&u.push(v),IC(l,f)&&d.push(v)),m<=0?(IC(c,p)&&u.push(h),y-=m):u.length&&(u[u.length-1]=HC),m>=0?(IC(l,p)&&d.push(h),b+=m):d.length&&(d[d.length-1]=HC),LC(g,p),_=m,v=h;return[y?{pos:c,types:t&&u}:null,b?{pos:l,types:t&&d}:null]}function KC(e,t,n,r){let i=Math.floor((e[0]-n[0])/t)*t+n[0],a=Math.floor((e[1]-n[1])/t)*t+n[1];return r[0]=i,r[1]=a,r[2]=i+t,r[3]=a+t,r}function qC(e,t,n){n&8?(e[1]+=t,e[3]+=t):n&4?(e[1]-=t,e[3]-=t):n&2?(e[0]+=t,e[2]+=t):n&1&&(e[0]-=t,e[2]-=t)}function JC(e,t,n,r){let i=1/0,a=-1/0,o=1/0,s=-1/0;for(let r=0;r<n;r+=t){let t=e[r],n=e[r+1];i=t<i?t:i,a=t>a?t:a,o=n<o?n:o,s=n>s?n:s}return r[0][0]=i,r[0][1]=o,r[1][0]=a,r[1][1]=s,r}function YC(e,t){for(let n=0;n<t.length;n++)e.push(t[n]);return e}var XC=85.051129;function ZC(e,t){let{size:n=2,startIndex:r=0,endIndex:i=e.length,normalize:a=!0}=t||{},o=e.slice(r,i);tw(o,n,0,i-r);let s=VC(o,{size:n,broken:!0,gridResolution:360,gridOffset:[-180,-180]});if(a)for(let e of s)nw(e,n);return s}function QC(e,t=null,n){let{size:r=2,normalize:i=!0,edgeTypes:a=!1}=n||{};t||=[];let o=[],s=[],c=0,l=0;for(let i=0;i<=t.length;i++){let a=t[i]||e.length,u=l,d=$C(e,r,c,a);for(let t=d;t<a;t++)o[l++]=e[t];for(let t=c;t<d;t++)o[l++]=e[t];tw(o,r,u,l),ew(o,r,u,l,n?.maxLatitude),c=a,s[i]=l}s.pop();let u=WC(o,s,{size:r,gridResolution:360,gridOffset:[-180,-180],edgeTypes:a});if(i)for(let e of u)nw(e.positions,r);return u}function $C(e,t,n,r){let i=-1,a=-1;for(let o=n+1;o<r;o+=t){let t=Math.abs(e[o]);t>i&&(i=t,a=o-1)}return a}function ew(e,t,n,r,i=XC){let a=e[n],o=e[r-t];if(Math.abs(a-o)>180){let r=RC(e,0,t,n);r[0]+=Math.round((o-a)/360)*360,IC(e,r),r[1]=Math.sign(r[1])*i,IC(e,r),r[0]=a,IC(e,r)}}function tw(e,t,n,r){let i=e[0],a;for(let o=n;o<r;o+=t){a=e[o];let t=a-i;(t>180||t<-180)&&(a-=Math.round(t/360)*360),e[o]=i=a}}function nw(e,t){let n,r=e.length/t;for(let i=0;i<r&&(n=e[i*t],(n+180)%360==0);i++);let i=-Math.round(n/360)*360;if(i!==0)for(let n=0;n<r;n++)e[n*t]+=i}function rw(e,t,n,r){let i;if(Array.isArray(e[0])){let n=e.length*t;i=Array(n);for(let n=0;n<e.length;n++)for(let r=0;r<t;r++)i[n*t+r]=e[n][r]||0}else i=e;return n?VC(i,{size:t,gridResolution:n}):r?ZC(i,{size:t}):i}var iw=1,aw=2,ow=4,sw=class extends xS{constructor(e){super({...e,attributes:{positions:{size:3,padding:18,initialize:!0,type:e.fp64?Float64Array:Float32Array},segmentTypes:{size:1,type:e.isWebGPU?Float32Array:Uint8ClampedArray}}})}get(e){return this.attributes[e]}getPathSegmentIndices(e){let t=this.attributes.segmentTypes,n=this.vertexStarts[e],r=Math.min(this.vertexStarts[e+1]??this.instanceCount,this.instanceCount),i=[];for(let e=n;e<r-1;e++)(t[e]&ow)===0&&i.push(e);return i.length&&(t[n]&ow)!==0&&i.unshift(i.pop()),i}getGeometryFromBuffer(e){return this.normalize||this.opts.isWebGPU?super.getGeometryFromBuffer(e):null}normalizeGeometry(e){return this.normalize?rw(e,this.positionSize,this.opts.resolution,this.opts.wrapLongitude):e}getGeometrySize(e){if(cw(e)){let t=0;for(let n of e)t+=this.getGeometrySize(n);return t}let t=this.getPathLength(e);return t<2?0:this.isClosed(e)?t<3?0:t+2:t}updateGeometryAttributes(e,t){if(t.geometrySize!==0){if(e&&cw(e))for(let n of e){let e=this.getGeometrySize(n);t.geometrySize=e,this.updateGeometryAttributes(n,t),t.vertexStart+=e}else this._updateSegmentTypes(e,t),this._updatePositions(e,t)}}_updateSegmentTypes(e,t){let n=this.attributes.segmentTypes,r=e?this.isClosed(e):!1,{vertexStart:i,geometrySize:a}=t;n.fill(0,i,i+a),r?(n[i]=ow,n[i+a-2]=ow):(n[i]+=iw,n[i+a-2]+=aw),n[i+a-1]=ow}_updatePositions(e,t){let{positions:n}=this.attributes;if(!n||!e)return;let{vertexStart:r,geometrySize:i}=t,a=[,,,];for(let t=r,o=0;o<i;t++,o++)this.getPointOnPath(e,o,a),n[t*3]=a[0],n[t*3+1]=a[1],n[t*3+2]=a[2]}getPathLength(e){return e.length/this.positionSize}getPointOnPath(e,t,n=[]){let{positionSize:r}=this;t*r>=e.length&&(t+=1-e.length/r);let i=t*r;return n[0]=e[i],n[1]=e[i+1],n[2]=r===3&&e[i+2]||0,n}isClosed(e){if(!this.normalize)return!!this.opts.loop;let{positionSize:t}=this,n=e.length-t;return e[0]===e[n]&&e[1]===e[n+1]&&(t===2||e[2]===e[n+2])}};function cw(e){return Array.isArray(e[0])}var lw=`struct PathUniforms {
  widthScale: f32,
  widthMinPixels: f32,
  widthMaxPixels: f32,
  jointType: f32,
  capType: f32,
  miterLimit: f32,
  billboard: f32,
  widthUnits: i32,
};

@group(0) @binding(auto)
var<uniform> path: PathUniforms;
`,uw=`layout(std140) uniform pathUniforms {
  float widthScale;
  float widthMinPixels;
  float widthMaxPixels;
  float jointType;
  float capType;
  float miterLimit;
  bool billboard;
  highp int widthUnits;
} path;
`,dw={name:`path`,source:lw,vs:uw,fs:uw,uniformTypes:{widthScale:`f32`,widthMinPixels:`f32`,widthMaxPixels:`f32`,jointType:`f32`,capType:`f32`,miterLimit:`f32`,billboard:`f32`,widthUnits:`i32`}},fw=`const EPSILON: f32 = 0.001;
const ZERO_OFFSET: vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);

struct JoinResult {
  offset: vec3<f32>,
  cornerOffset: vec2<f32>,
  miterLength: f32,
  pathPosition: vec2<f32>,
  pathLength: f32,
  jointType: f32,
};

struct Attributes {
  @location(0) positions: vec2<f32>,
  @location(1) instanceTypes: f32,
  @location(2) instanceLeftPositions: vec3<f32>,
  @location(3) instanceStartPositions: vec3<f32>,
  @location(4) instanceEndPositions: vec3<f32>,
  @location(5) instanceRightPositions: vec3<f32>,
  @location(6) instanceLeftPositions64Low: vec3<f32>,
  @location(7) instanceStartPositions64Low: vec3<f32>,
  @location(8) instanceEndPositions64Low: vec3<f32>,
  @location(9) instanceRightPositions64Low: vec3<f32>,
  @location(10) instanceStrokeWidths: f32,
  @location(11) instanceColors: vec4<f32>,
  @location(12) rowIndexes: u32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) vCornerOffset: vec2<f32>,
  @location(2) vMiterLength: f32,
  @location(3) vPathPosition: vec2<f32>,
  @location(4) vPathLength: f32,
  @location(5) vJointType: f32,
  // Location 6 is reserved for TripsLayer's injected vTime varying.
  @location(7) clipCoordinates: vec2<f32>,
#ifdef DASH_ENABLED
  @location(8) vPathBounds: vec2<f32>,
#endif
};

fn flipIfTrue(flag: bool) -> f32 {
  return select(1.0, -1.0, flag);
}

fn clipLine(position: vec4<f32>, refPosition: vec4<f32>) -> vec4<f32> {
  if (position.w < EPSILON) {
    let r = (EPSILON - refPosition.w) / (position.w - refPosition.w);
    return refPosition + (position - refPosition) * r;
  }
  return position;
}

#ifdef DASH_ENABLED
// Return the visible interval of the original segment before clipLine moves either endpoint.
fn getClippedPathRange(startW: f32, endW: f32) -> vec2<f32> {
  let startClipped = startW < EPSILON;
  let endClipped = endW < EPSILON;
  if (startClipped && endClipped) {
    return vec2<f32>(0.0, 0.0);
  }
  if (startClipped || endClipped) {
    let intersection = clamp((EPSILON - startW) / (endW - startW), 0.0, 1.0);
    if (startClipped) {
      return vec2<f32>(intersection, 1.0);
    }
    return vec2<f32>(0.0, intersection);
  }
  return vec2<f32>(0.0, 1.0);
}
#endif

fn getLineJoinOffset(
  prevPoint: vec3<f32>,
  currPoint: vec3<f32>,
  nextPoint: vec3<f32>,
  width: vec2<f32>,
#ifdef DASH_ENABLED
  sourcePathLength: f32,
  sourcePathRange: vec2<f32>,
#endif
#ifdef ANTIALIASING
  coverageScale: f32,
#endif
  positions: vec2<f32>,
  instanceTypes: f32
) -> JoinResult {
  let isEnd = positions.x > 0.0;
  let sideOfPath = positions.y;
  let isJoint = select(0.0, 1.0, sideOfPath == 0.0);

  var deltaA3 = currPoint - prevPoint;
  var deltaB3 = nextPoint - currPoint;

  let rotationResult = project_needs_rotation(currPoint);
  if (path.billboard == 0.0 && rotationResult.needsRotation) {
    deltaA3 = rotationResult.transform * deltaA3;
    deltaB3 = rotationResult.transform * deltaB3;
  }

  let deltaA = deltaA3.xy / width;
  let deltaB = deltaB3.xy / width;

  let lenA = length(deltaA);
  let lenB = length(deltaB);

  let dirA = select(vec2<f32>(0.0, 0.0), normalize(deltaA), lenA > 0.0);
  let dirB = select(vec2<f32>(0.0, 0.0), normalize(deltaB), lenB > 0.0);

  let perpA = vec2<f32>(-dirA.y, dirA.x);
  let perpB = vec2<f32>(-dirB.y, dirB.x);

  var tangent = dirA + dirB;
  tangent = select(perpA, normalize(tangent), length(tangent) > 0.0);
  let miterVec = vec2<f32>(-tangent.y, tangent.x);
  let dir = select(dirB, dirA, isEnd);
  let perp = select(perpB, perpA, isEnd);
#ifdef DASH_ENABLED
  let segmentLength2D = select(lenB, lenA, isEnd);

  // Extrusion happens in the XY plane, so segmentLength2D is a 2D length and pathPosition.y
  // below measures 2D distance along the segment. For a path that also moves in Z the true
  // arc length is longer by this ratio. Scaling pathLength and pathPosition.y by it makes
  // the coordinate measure real 3D distance while leaving the joint tests unchanged, since
  // they compare the two against each other and both are scaled alike. Billboard mode
  // extrudes in clip space, where the perspective divide has already reduced the segment to
  // its screen projection, so its complete common-space length is supplied by the caller.
  // Mirrors path-layer-vertex.glsl.ts.
  let currDelta3 = select(deltaB3, deltaA3, isEnd);
  let currLength2D = length(currDelta3.xy);
  // Do not clamp a valid denominator to EPSILON: high-zoom Web Mercator deltas are often
  // smaller than that in common space, and changing their scale corrupts even flat paths.
  let safeLength2D = select(1.0, currLength2D, currLength2D > 0.0);
  var arcLengthRatio = 1.0;
  var pathPositionOffset = 0.0;
  var pathLength = segmentLength2D;
  if (path.billboard != 0.0) {
    // clipLine may shorten the visible screen-space segment. Preserve the corresponding interval
    // of the complete common-space arclength instead of compressing the full dash period into the
    // visible span. Keep pathLength complete so justification is stable as the camera clips it.
    let visiblePathLength = sourcePathLength * (sourcePathRange.y - sourcePathRange.x);
    arcLengthRatio = 0.0;
    if (segmentLength2D > 0.0) {
      arcLengthRatio = visiblePathLength / segmentLength2D;
    }
    pathPositionOffset = sourcePathLength * sourcePathRange.x;
    pathLength = sourcePathLength;
  } else if (currLength2D > 0.0) {
    arcLengthRatio = length(currDelta3) / safeLength2D;
    pathLength = segmentLength2D * arcLengthRatio;
  }
#else
  let pathLength = select(lenB, lenA, isEnd);
#endif

  let sinHalfA = abs(dot(miterVec, perp));
  let cosHalfA = abs(dot(dirA, miterVec));
  let turnDirection = flipIfTrue(dirA.x * dirB.y >= dirA.y * dirB.x);
  let cornerPosition = sideOfPath * turnDirection;

  var miterSize = 1.0 / max(sinHalfA, EPSILON);
  miterSize = mix(
    min(miterSize, max(lenA, lenB) / max(cosHalfA, EPSILON)),
    miterSize,
    step(0.0, cornerPosition)
  );

  var offsetVec =
    mix(miterVec * miterSize, perp, step(0.5, cornerPosition)) *
    (sideOfPath + isJoint * turnDirection);

  let isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));
  let isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));
  let isCap = isStartCap || isEndCap;

  var jointType = path.jointType;
  if (isCap) {
    offsetVec = mix(
      perp * sideOfPath,
      dir * path.capType * 4.0 * flipIfTrue(isStartCap),
      isJoint
    );
    jointType = path.capType;
  }

#ifdef ANTIALIASING
  let coverageOffsetVec = offsetVec * coverageScale;
  var miterLength = dot(coverageOffsetVec, miterVec * turnDirection);
#else
  var miterLength = dot(offsetVec, miterVec * turnDirection);
#endif
  miterLength = select(miterLength, isJoint, isCap);

#ifdef ANTIALIASING
  let offsetFromStartOfPath = coverageOffsetVec + deltaA * select(0.0, 1.0, isEnd);
#else
  let offsetFromStartOfPath = offsetVec + deltaA * select(0.0, 1.0, isEnd);
#endif
  let pathPosition = vec2<f32>(
    dot(offsetFromStartOfPath, perp),
#ifdef DASH_ENABLED
    pathPositionOffset + dot(offsetFromStartOfPath, dir) * arcLengthRatio
#else
    dot(offsetFromStartOfPath, dir)
#endif
  );
  let isValid = step(f32(instanceTypes), 3.5);
#ifdef ANTIALIASING
  var offset = vec3<f32>(coverageOffsetVec * width * isValid, 0.0);
#else
  var offset = vec3<f32>(offsetVec * width * isValid, 0.0);
#endif

  if (path.billboard == 0.0 && rotationResult.needsRotation) {
    offset = rotationResult.transform * offset;
  }

#ifdef ANTIALIASING
  return JoinResult(
    offset, coverageOffsetVec, miterLength, pathPosition, pathLength, jointType
  );
#else
  return JoinResult(offset, offsetVec, miterLength, pathPosition, pathLength, jointType);
#endif
}

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.rowIndexes);

  let isEnd = attributes.positions.x;

  let prevPosition = mix(attributes.instanceLeftPositions, attributes.instanceStartPositions, isEnd);
  let prevPosition64Low = mix(
    attributes.instanceLeftPositions64Low,
    attributes.instanceStartPositions64Low,
    isEnd
  );
  let currPosition = mix(attributes.instanceStartPositions, attributes.instanceEndPositions, isEnd);
  let currPosition64Low = mix(
    attributes.instanceStartPositions64Low,
    attributes.instanceEndPositions64Low,
    isEnd
  );
  let nextPosition = mix(attributes.instanceEndPositions, attributes.instanceRightPositions, isEnd);
  let nextPosition64Low = mix(
    attributes.instanceEndPositions64Low,
    attributes.instanceRightPositions64Low,
    isEnd
  );

  geometry.worldPosition = currPosition;

  let widthPixels =
    clamp(
      project_unit_size_to_pixel(attributes.instanceStrokeWidths * path.widthScale, path.widthUnits),
      path.widthMinPixels,
      path.widthMaxPixels
    ) / 2.0;

  if (path.billboard != 0.0) {
#ifdef DASH_ENABLED
    let prevProjection = project_position_to_clipspace_and_commonspace(
      prevPosition, prevPosition64Low, ZERO_OFFSET
    );
    let nextProjection = project_position_to_clipspace_and_commonspace(
      nextPosition, nextPosition64Low, ZERO_OFFSET
    );
    let prevPositionCommon = prevProjection.commonPosition.xyz;
    let nextPositionCommon = nextProjection.commonPosition.xyz;
    var prevPositionScreen = prevProjection.clipPosition;
    var nextPositionScreen = nextProjection.clipPosition;
#else
    var prevPositionScreen = project_position_to_clipspace(
      prevPosition, prevPosition64Low, ZERO_OFFSET
    );
    var nextPositionScreen = project_position_to_clipspace(
      nextPosition, nextPosition64Low, ZERO_OFFSET
    );
#endif
    let currProjection = project_position_to_clipspace_and_commonspace(
      currPosition, currPosition64Low, ZERO_OFFSET
    );
    geometry.position = currProjection.commonPosition;
    var currPositionScreen = currProjection.clipPosition;
#ifdef DASH_ENABLED
    let currPositionCommon = currProjection.commonPosition.xyz;
    let sourcePathStartScreen = mix(currPositionScreen, prevPositionScreen, isEnd);
    let sourcePathEndScreen = mix(nextPositionScreen, currPositionScreen, isEnd);
    let billboardPathRange = getClippedPathRange(
      sourcePathStartScreen.w, sourcePathEndScreen.w
    );
#endif

    prevPositionScreen = clipLine(prevPositionScreen, currPositionScreen);
    nextPositionScreen = clipLine(nextPositionScreen, currPositionScreen);
    currPositionScreen = clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));

#ifdef ANTIALIASING
    let coverageScale = select(
      1.0,
      (widthPixels + 0.5 / project.devicePixelRatio) / max(widthPixels, 1e-6),
      widthPixels > 0.0
    );
#endif
#ifdef DASH_ENABLED
    let currentDeltaCommon = select(
      nextPositionCommon - currPositionCommon,
      currPositionCommon - prevPositionCommon,
      isEnd > 0.0
    );
    let billboardPathLength = select(
      0.0,
      length(currentDeltaCommon) * project.scale / (widthPixels * project.focalDistance),
      widthPixels > 0.0
    );
#endif
    let join = getLineJoinOffset(
      prevPositionScreen.xyz / prevPositionScreen.w,
      currPositionScreen.xyz / currPositionScreen.w,
      nextPositionScreen.xyz / nextPositionScreen.w,
      project_pixel_size_to_clipspace(vec2<f32>(widthPixels, widthPixels)),
#ifdef DASH_ENABLED
      billboardPathLength,
      billboardPathRange,
#endif
#ifdef ANTIALIASING
      coverageScale,
#endif
      attributes.positions,
      attributes.instanceTypes
    );
#ifdef DASH_ENABLED
    // Phase and justification use the complete source segment, while cap and joint coverage
    // must still recognize the endpoints moved by clipLine.
    varyings.vPathBounds = billboardPathLength * billboardPathRange;
#endif

    geometry.uv = join.pathPosition;
    varyings.position = vec4<f32>(
      currPositionScreen.xyz + join.offset * currPositionScreen.w,
      currPositionScreen.w
    );
    varyings.vCornerOffset = join.cornerOffset;
    varyings.vMiterLength = join.miterLength;
    varyings.vPathPosition = join.pathPosition;
    varyings.vPathLength = join.pathLength;
    varyings.vJointType = join.jointType;
  } else {
    let prevPositionCommon = project_position_vec3_f64(prevPosition, prevPosition64Low);
    let currPositionCommon = project_position_vec3_f64(currPosition, currPosition64Low);
    let nextPositionCommon = project_position_vec3_f64(nextPosition, nextPosition64Low);

    let width = vec2<f32>(
      project_pixel_size_float(widthPixels),
      project_pixel_size_float(widthPixels)
    );
#ifdef ANTIALIASING
    let coverageScale = select(
      1.0,
      (widthPixels + 0.5 / project.devicePixelRatio) / max(widthPixels, 1e-6),
      widthPixels > 0.0
    );
#endif
    let join = getLineJoinOffset(
      prevPositionCommon,
      currPositionCommon,
      nextPositionCommon,
      width,
#ifdef DASH_ENABLED
      1.0,
      vec2<f32>(0.0, 1.0),
#endif
#ifdef ANTIALIASING
      coverageScale,
#endif
      attributes.positions,
      attributes.instanceTypes
    );
#ifdef DASH_ENABLED
    varyings.vPathBounds = vec2<f32>(0.0, join.pathLength);
#endif

    geometry.position = vec4<f32>(currPositionCommon + join.offset, 1.0);
    geometry.uv = join.pathPosition;
    varyings.position = project_common_position_to_clipspace(geometry.position);
    varyings.vCornerOffset = join.cornerOffset;
    varyings.vMiterLength = join.miterLength;
    varyings.vPathPosition = join.pathPosition;
    varyings.vPathLength = join.pathLength;
    varyings.vJointType = join.jointType;
  }

  varyings.clipCoordinates = geometry.position.xy;
  clip_filterPosition(&varyings.position, geometry.worldPosition.xy);

  varyings.vColor = vec4<f32>(
    attributes.instanceColors.rgb,
    attributes.instanceColors.a * layer.opacity
  );
  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = varyings.vPathPosition;

#ifdef ANTIALIASING
  // Coordinates of the outer silhouette, in units of half-width: rounded joints and caps are
  // bounded by the corner offset, everywhere else by the edge of the stroke. Dividing by the
  // screen-space derivative converts the distance to the boundary into device pixels, which stays
  // correct under perspective foreshortening and under extensions that rescale the stroke.
#ifdef DASH_ENABLED
  let isCorner =
    varyings.vPathPosition.y < varyings.vPathBounds.x ||
    varyings.vPathPosition.y > varyings.vPathBounds.y;
#else
  let isCorner = varyings.vPathPosition.y < 0.0 || varyings.vPathPosition.y > varyings.vPathLength;
#endif
  let isRound = varyings.vJointType > 0.5;

  // Distance to the silhouette in device pixels, from the derivative of the coordinate that
  // bounds it. Computed before the discards below: derivatives need uniform control flow and are
  // undefined after a discard in the quad. See dev-docs/RFCs/v9.4/analytic-antialiasing-rfc.md
  let bodyCoord = abs(varyings.vPathPosition.x);
  let cornerCoord = length(varyings.vCornerOffset);
  // Both evaluated so each derivative stays on one field across the corner/body boundary
  let bodyPixels = (1.0 - bodyCoord) / max(fwidth(bodyCoord), 1e-6);
  let cornerPixels = (1.0 - cornerCoord) / max(fwidth(cornerCoord), 1e-6);
#ifdef PATH_STYLE_OFFSET
  // Rounded corners still intersect the stroke-width envelope. Extensions may remap
  // vPathPosition.x independently of vCornerOffset, as PathStyleExtension does for offsets.
  let edgePixels = select(bodyPixels, min(cornerPixels, bodyPixels), isRound && isCorner);
#else
  let edgePixels = select(bodyPixels, cornerPixels, isRound && isCorner);
#endif

  // Fragments outside the coverage ramp must not write depth or picking colors.
  if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
    discard;
  }

  if (isCorner) {
    if (!isRound && varyings.vMiterLength > path.miterLimit + 1.0) {
      discard;
    }
  }

  var color = varyings.vColor;

  // Feather one device pixel across the width only, before premultiplication. edgePixels is a
  // signed device-pixel distance and SMOOTH_EDGE_RADIUS is 0.5, so this ramps across one pixel.
  color.a *= smoothedge(0.0, edgePixels);
#else
#ifdef DASH_ENABLED
  if (
    varyings.vPathPosition.y < varyings.vPathBounds.x ||
    varyings.vPathPosition.y > varyings.vPathBounds.y
  ) {
#else
  if (
    varyings.vPathPosition.y < 0.0 ||
    varyings.vPathPosition.y > varyings.vPathLength
  ) {
#endif
    if (varyings.vJointType > 0.5 && length(varyings.vCornerOffset) > 1.0) {
      discard;
    }
    if (
      varyings.vJointType < 0.5 &&
      varyings.vMiterLength > path.miterLimit + 1.0
    ) {
      discard;
    }
  }
#endif

  // Fragment-layer injections that discard pixels must run after analytic coverage derivatives.
  // See TripsLayer, which rejects fragments outside of the active time window at this anchor.
  // DECKGL_FILTER_COLOR
  clip_filterColor(varyings.clipCoordinates);
#ifdef ANTIALIASING
  return deckgl_premultiplied_alpha(color);
#else
  return deckgl_premultiplied_alpha(varyings.vColor);
#endif
}
`,pw=`#version 300 es
#define SHADER_NAME path-layer-vertex-shader
in vec2 positions;
in float instanceTypes;
in vec3 instanceStartPositions;
in vec3 instanceEndPositions;
in vec3 instanceLeftPositions;
in vec3 instanceRightPositions;
in vec3 instanceLeftPositions64Low;
in vec3 instanceStartPositions64Low;
in vec3 instanceEndPositions64Low;
in vec3 instanceRightPositions64Low;
in float instanceStrokeWidths;
in vec4 instanceColors;
in float rowIndexes;
uniform float opacity;
out vec4 vColor;
out vec2 vCornerOffset;
out float vMiterLength;
out vec2 vPathPosition;
out float vPathLength;
out float vJointType;
#ifdef DASH_ENABLED
out vec2 vPathBounds;
#endif
const float EPSILON = 0.001;
const vec3 ZERO_OFFSET = vec3(0.0);
float flipIfTrue(bool flag) {
return -(float(flag) * 2. - 1.);
}
vec3 getLineJoinOffset(
vec3 prevPoint, vec3 currPoint, vec3 nextPoint,
vec2 width
#ifdef DASH_ENABLED
, float sourcePathLength, vec2 sourcePathRange
#endif
#ifdef ANTIALIASING
, float coverageScale
#endif
) {
bool isEnd = positions.x > 0.0;
float sideOfPath = positions.y;
float isJoint = float(sideOfPath == 0.0);
vec3 deltaA3 = (currPoint - prevPoint);
vec3 deltaB3 = (nextPoint - currPoint);
mat3 rotationMatrix;
bool needsRotation = !path.billboard && project_needs_rotation(currPoint, rotationMatrix);
if (needsRotation) {
deltaA3 = deltaA3 * rotationMatrix;
deltaB3 = deltaB3 * rotationMatrix;
}
vec2 deltaA = deltaA3.xy / width;
vec2 deltaB = deltaB3.xy / width;
float lenA = length(deltaA);
float lenB = length(deltaB);
vec2 dirA = lenA > 0. ? normalize(deltaA) : vec2(0.0, 0.0);
vec2 dirB = lenB > 0. ? normalize(deltaB) : vec2(0.0, 0.0);
vec2 perpA = vec2(-dirA.y, dirA.x);
vec2 perpB = vec2(-dirB.y, dirB.x);
vec2 tangent = dirA + dirB;
tangent = length(tangent) > 0. ? normalize(tangent) : perpA;
vec2 miterVec = vec2(-tangent.y, tangent.x);
vec2 dir = isEnd ? dirA : dirB;
vec2 perp = isEnd ? perpA : perpB;
float L = isEnd ? lenA : lenB;
#ifdef DASH_ENABLED
vec3 currDelta3 = isEnd ? deltaA3 : deltaB3;
float currLength2D = length(currDelta3.xy);
float arcLengthRatio = 1.0;
float pathPositionOffset = 0.0;
float pathLength = L;
if (path.billboard) {
float visiblePathLength = sourcePathLength * (sourcePathRange.y - sourcePathRange.x);
arcLengthRatio = L > 0.0 ? visiblePathLength / L : 0.0;
pathPositionOffset = sourcePathLength * sourcePathRange.x;
pathLength = sourcePathLength;
} else if (currLength2D > 0.0) {
arcLengthRatio = length(currDelta3) / currLength2D;
pathLength = L * arcLengthRatio;
}
#endif
float sinHalfA = abs(dot(miterVec, perp));
float cosHalfA = abs(dot(dirA, miterVec));
float turnDirection = flipIfTrue(dirA.x * dirB.y >= dirA.y * dirB.x);
float cornerPosition = sideOfPath * turnDirection;
float miterSize = 1.0 / max(sinHalfA, EPSILON);
miterSize = mix(
min(miterSize, max(lenA, lenB) / max(cosHalfA, EPSILON)),
miterSize,
step(0.0, cornerPosition)
);
vec2 offsetVec = mix(miterVec * miterSize, perp, step(0.5, cornerPosition))
* (sideOfPath + isJoint * turnDirection);
bool isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));
bool isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));
bool isCap = isStartCap || isEndCap;
if (isCap) {
offsetVec = mix(perp * sideOfPath, dir * path.capType * 4.0 * flipIfTrue(isStartCap), isJoint);
vJointType = path.capType;
} else {
vJointType = path.jointType;
}
#ifdef ANTIALIASING
vec2 coverageOffsetVec = offsetVec * coverageScale;
#ifdef DASH_ENABLED
vPathLength = pathLength;
#else
vPathLength = L;
#endif
vCornerOffset = coverageOffsetVec;
vMiterLength = dot(vCornerOffset, miterVec * turnDirection);
vMiterLength = isCap ? isJoint : vMiterLength;
vec2 offsetFromStartOfPath = coverageOffsetVec + deltaA * float(isEnd);
vPathPosition = vec2(
dot(offsetFromStartOfPath, perp),
#ifdef DASH_ENABLED
pathPositionOffset + dot(offsetFromStartOfPath, dir) * arcLengthRatio
#else
dot(offsetFromStartOfPath, dir)
#endif
);
geometry.uv = vPathPosition;
float isValid = step(instanceTypes, 3.5);
vec3 offset = vec3(coverageOffsetVec * width * isValid, 0.0);
#else
#ifdef DASH_ENABLED
vPathLength = pathLength;
#else
vPathLength = L;
#endif
vCornerOffset = offsetVec;
vMiterLength = dot(vCornerOffset, miterVec * turnDirection);
vMiterLength = isCap ? isJoint : vMiterLength;
vec2 offsetFromStartOfPath = vCornerOffset + deltaA * float(isEnd);
vPathPosition = vec2(
dot(offsetFromStartOfPath, perp),
#ifdef DASH_ENABLED
pathPositionOffset + dot(offsetFromStartOfPath, dir) * arcLengthRatio
#else
dot(offsetFromStartOfPath, dir)
#endif
);
geometry.uv = vPathPosition;
float isValid = step(instanceTypes, 3.5);
vec3 offset = vec3(offsetVec * width * isValid, 0.0);
#endif
if (needsRotation) {
offset = rotationMatrix * offset;
}
return offset;
}
void clipLine(inout vec4 position, vec4 refPosition) {
if (position.w < EPSILON) {
float r = (EPSILON - refPosition.w) / (position.w - refPosition.w);
position = refPosition + (position - refPosition) * r;
}
}
#ifdef DASH_ENABLED
vec2 getClippedPathRange(float startW, float endW) {
bool startClipped = startW < EPSILON;
bool endClipped = endW < EPSILON;
if (startClipped && endClipped) {
return vec2(0.0);
}
if (startClipped || endClipped) {
float intersection = clamp((EPSILON - startW) / (endW - startW), 0.0, 1.0);
return startClipped ? vec2(intersection, 1.0) : vec2(0.0, intersection);
}
return vec2(0.0, 1.0);
}
#endif
void main() {
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
vColor = vec4(instanceColors.rgb, instanceColors.a * layer.opacity);
float isEnd = positions.x;
vec3 prevPosition = mix(instanceLeftPositions, instanceStartPositions, isEnd);
vec3 prevPosition64Low = mix(instanceLeftPositions64Low, instanceStartPositions64Low, isEnd);
vec3 currPosition = mix(instanceStartPositions, instanceEndPositions, isEnd);
vec3 currPosition64Low = mix(instanceStartPositions64Low, instanceEndPositions64Low, isEnd);
vec3 nextPosition = mix(instanceEndPositions, instanceRightPositions, isEnd);
vec3 nextPosition64Low = mix(instanceEndPositions64Low, instanceRightPositions64Low, isEnd);
geometry.worldPosition = currPosition;
vec2 widthPixels = vec2(clamp(
project_size_to_pixel(instanceStrokeWidths * path.widthScale, path.widthUnits),
path.widthMinPixels, path.widthMaxPixels) / 2.0);
vec3 width;
if (path.billboard) {
#ifdef DASH_ENABLED
vec4 prevPositionCommon;
vec4 nextPositionCommon;
vec4 prevPositionScreen = project_position_to_clipspace(
prevPosition, prevPosition64Low, ZERO_OFFSET, prevPositionCommon
);
#else
vec4 prevPositionScreen = project_position_to_clipspace(
prevPosition, prevPosition64Low, ZERO_OFFSET
);
#endif
vec4 currPositionScreen = project_position_to_clipspace(currPosition, currPosition64Low, ZERO_OFFSET, geometry.position);
#ifdef DASH_ENABLED
vec4 nextPositionScreen = project_position_to_clipspace(
nextPosition, nextPosition64Low, ZERO_OFFSET, nextPositionCommon
);
#else
vec4 nextPositionScreen = project_position_to_clipspace(
nextPosition, nextPosition64Low, ZERO_OFFSET
);
#endif
#ifdef DASH_ENABLED
vec4 sourcePathStartScreen = mix(currPositionScreen, prevPositionScreen, isEnd);
vec4 sourcePathEndScreen = mix(nextPositionScreen, currPositionScreen, isEnd);
vec2 billboardPathRange = getClippedPathRange(
sourcePathStartScreen.w, sourcePathEndScreen.w
);
#endif
clipLine(prevPositionScreen, currPositionScreen);
clipLine(nextPositionScreen, currPositionScreen);
clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));
width = vec3(widthPixels, 0.0);
DECKGL_FILTER_SIZE(width, geometry);
#ifdef ANTIALIASING
vec2 coveragePadding = vec2(0.5 / project.devicePixelRatio);
float coverageScale = length(width.xy) > 0.0
? length(width.xy + coveragePadding) / length(width.xy)
: 1.0;
#endif
#ifdef DASH_ENABLED
vec3 currentDeltaCommon = isEnd > 0.0
? geometry.position.xyz - prevPositionCommon.xyz
: nextPositionCommon.xyz - geometry.position.xyz;
float billboardPathLength = width.x > 0.0
? length(currentDeltaCommon) * project.scale / (width.x * project.focalDistance)
: 0.0;
#endif
vec3 offset = getLineJoinOffset(
prevPositionScreen.xyz / prevPositionScreen.w,
currPositionScreen.xyz / currPositionScreen.w,
nextPositionScreen.xyz / nextPositionScreen.w,
project_pixel_size_to_clipspace(width.xy)
#ifdef DASH_ENABLED
,
billboardPathLength, billboardPathRange
#endif
#ifdef ANTIALIASING
,
coverageScale
#endif
);
#ifdef DASH_ENABLED
vPathBounds = billboardPathLength * billboardPathRange;
#endif
DECKGL_FILTER_GL_POSITION(currPositionScreen, geometry);
gl_Position = vec4(currPositionScreen.xyz + offset * currPositionScreen.w, currPositionScreen.w);
} else {
prevPosition = project_position(prevPosition, prevPosition64Low);
currPosition = project_position(currPosition, currPosition64Low);
nextPosition = project_position(nextPosition, nextPosition64Low);
width = vec3(project_pixel_size(widthPixels), 0.0);
DECKGL_FILTER_SIZE(width, geometry);
#ifdef ANTIALIASING
vec2 coveragePadding = project_pixel_size(vec2(0.5 / project.devicePixelRatio));
float coverageScale = length(width.xy) > 0.0
? length(width.xy + coveragePadding) / length(width.xy)
: 1.0;
#endif
vec3 offset = getLineJoinOffset(
prevPosition, currPosition, nextPosition, width.xy
#ifdef DASH_ENABLED
, 1.0, vec2(0.0, 1.0)
#endif
#ifdef ANTIALIASING
, coverageScale
#endif
);
#ifdef DASH_ENABLED
vPathBounds = vec2(0.0, vPathLength);
#endif
geometry.position = vec4(currPosition + offset, 1.0);
gl_Position = project_common_position_to_clipspace(geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,mw=`#version 300 es
#define SHADER_NAME path-layer-fragment-shader
precision highp float;
in vec4 vColor;
in vec2 vCornerOffset;
in float vMiterLength;
in vec2 vPathPosition;
in float vPathLength;
in float vJointType;
#ifdef DASH_ENABLED
in vec2 vPathBounds;
#endif
out vec4 fragColor;
void main(void) {
geometry.uv = vPathPosition;
#ifdef ANTIALIASING
#ifdef DASH_ENABLED
bool isCorner = vPathPosition.y < vPathBounds.x || vPathPosition.y > vPathBounds.y;
#else
bool isCorner = vPathPosition.y < 0.0 || vPathPosition.y > vPathLength;
#endif
bool isRound = vJointType > 0.5;
float bodyCoord = abs(vPathPosition.x);
float cornerCoord = length(vCornerOffset);
float bodyPixels = (1.0 - bodyCoord) / max(fwidth(bodyCoord), 1e-6);
float cornerPixels = (1.0 - cornerCoord) / max(fwidth(cornerCoord), 1e-6);
#ifdef PATH_STYLE_OFFSET
float edgePixels = isRound && isCorner ? min(cornerPixels, bodyPixels) : bodyPixels;
#else
float edgePixels = isRound && isCorner ? cornerPixels : bodyPixels;
#endif
if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
discard;
}
if (isCorner) {
if (!isRound && vMiterLength > path.miterLimit + 1.0) {
discard;
}
}
fragColor = vColor;
fragColor.a *= smoothedge(0.0, edgePixels);
#else
#ifdef DASH_ENABLED
if (vPathPosition.y < vPathBounds.x || vPathPosition.y > vPathBounds.y) {
#else
if (vPathPosition.y < 0.0 || vPathPosition.y > vPathLength) {
#endif
if (vJointType > 0.5 && length(vCornerOffset) > 1.0) {
discard;
}
if (vJointType < 0.5 && vMiterLength > path.miterLimit + 1.0) {
discard;
}
}
fragColor = vColor;
#endif
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,hw=[0,0,0,255],gw={widthUnits:`meters`,widthScale:{type:`number`,min:0,value:1},widthMinPixels:{type:`number`,min:0,value:0},widthMaxPixels:{type:`number`,min:0,value:2**53-1},jointRounded:!1,capRounded:!1,miterLimit:{type:`number`,min:0,value:4},antialiasing:!1,billboard:!1,_pathType:null,getPath:{type:`accessor`,value:e=>e.path},getColor:{type:`accessor`,value:hw},getWidth:{type:`accessor`,value:1},rounded:{deprecatedFor:[`jointRounded`,`capRounded`]}},_w={enter:(e,t)=>t.length?t.subarray(t.length-e.length):e};function vw(e){if(e.isGeospatial)return null;let{unitsPerMeter:t}=e.distanceScales;return[t[0],t[1],t[2]]}function yw(e,t){return e===t||!!(e&&t&&e.length===t.length&&e.every((e,n)=>e===t[n]))}var bw=class extends aS{getShaders(){let{antialiasing:e}=this.props;return super.getShaders({vs:pw,fs:mw,source:fw,defines:e?{ANTIALIASING:1}:{},modules:[su,Ks,ad,dw,...this.context.device.type===`webgpu`?[EC]:[]]})}get wrapLongitude(){return!1}getBounds(){return this.context.device.type===`webgpu`?null:this.getAttributeManager()?.getBounds([`vertexPositions`])}getPathProjectionScale(e){let t=this.props.coordinateSystem;if(!this.getAttributeManager()?.getAttributes().instanceDashOffsets)return null;if(e instanceof qd&&e.zoom>=12&&(t==="default"||t===`lnglat`||t===`cartesian`)){let n=ou.getUniforms({viewport:e,coordinateSystem:t,coordinateOrigin:this.props.coordinateOrigin,autoWrapLongitude:this.wrapLongitude});return[e.projectionMode,n.coordinateOrigin[1],n.commonOrigin[1],...n.commonUnitsPerWorldUnit,...n.commonUnitsPerWorldUnit2,n.commonUnitsPerMeter[2]]}let n=vw(e);return n?[e.projectionMode,...n]:[e.projectionMode]}shouldUpdateState(e){let{viewport:t}=this.context;return super.shouldUpdateState(e)||this.state?.tessellationResolution!==t.resolution||!yw(this.state?.pathProjectionScale,this.getPathProjectionScale(t))}initializeState(){let e=this.context.device.type===`webgpu`;this.getAttributeManager().addInstanced({...e?{pathPositions:{size:24,type:`float32`,transition:!1,accessor:`getPath`,update:this.calculateWebGPUPositions,shaderAttributes:{instanceLeftPositions:{size:3,elementOffset:0},instanceStartPositions:{size:3,elementOffset:3},instanceEndPositions:{size:3,elementOffset:6},instanceRightPositions:{size:3,elementOffset:9},instanceLeftPositions64Low:{size:3,elementOffset:12},instanceStartPositions64Low:{size:3,elementOffset:15},instanceEndPositions64Low:{size:3,elementOffset:18},instanceRightPositions64Low:{size:3,elementOffset:21}},noAlloc:!0}}:{vertexPositions:{size:3,vertexOffset:1,type:`float64`,fp64:this.use64bitPositions(),transition:_w,accessor:`getPath`,update:this.calculatePositions,noAlloc:!0,shaderAttributes:{instanceLeftPositions:{vertexOffset:0},instanceStartPositions:{vertexOffset:1},instanceEndPositions:{vertexOffset:2},instanceRightPositions:{vertexOffset:3}}}},instanceTypes:{size:1,type:e?`float32`:`uint8`,update:this.calculateSegmentTypes,noAlloc:!0},instanceStrokeWidths:{size:1,accessor:`getWidth`,transition:!e&&_w,defaultValue:1,bufferGroup:`path-instance-data`},instanceColors:{size:this.props.colorFormat.length,type:`unorm8`,accessor:`getColor`,transition:!e&&_w,defaultValue:hw,bufferGroup:`path-instance-data`},rowIndexes:{size:1,type:`uint32`,accessor:(e,{index:t})=>e&&e.__source?e.__source.index:t,bufferGroup:`path-instance-data`}}),this.setState({pathTesselator:new sw({fp64:this.use64bitPositions(),isWebGPU:e}),tessellationResolution:this.context.viewport.resolution,pathProjectionScale:this.getPathProjectionScale(this.context.viewport)})}updateState(e){super.updateState(e);let{props:t,oldProps:n,changeFlags:r}=e,i=this.getAttributeManager(),{viewport:a}=this.context,o=this.state.tessellationResolution!==a.resolution,s=this.getPathProjectionScale(a),c=!yw(this.state.pathProjectionScale,s),l=r.updateTriggersChanged&&(r.updateTriggersChanged.all||r.updateTriggersChanged.getPath)||t._pathType!==n._pathType||t.positionFormat!==n.positionFormat||t.wrapLongitude!==n.wrapLongitude||o;if(r.dataChanged||l){let{pathTesselator:e}=this.state,n=t.data.attributes||{};e.updateGeometry({data:t.data,geometryBuffer:n.getPath,buffers:n,normalize:!t._pathType,loop:t._pathType===`loop`,getGeometry:t.getPath,positionFormat:t.positionFormat,wrapLongitude:t.wrapLongitude,resolution:a.resolution,dataChanged:l?void 0:r.dataChanged}),this.setState({numInstances:e.instanceCount,startIndices:e.vertexStarts,tessellationResolution:a.resolution,pathProjectionScale:s}),!r.dataChanged||l?i.invalidateAll():c&&i.invalidate(`instanceDashOffsets`)}else c&&(this.setState({pathProjectionScale:s}),i.invalidate(`instanceDashOffsets`));(r.extensionsChanged||t.antialiasing!==n.antialiasing)&&(this.state.model?.destroy(),this.state.model=this._getModel(),i.invalidateAll())}getPickingInfo(e){let t=super.getPickingInfo(e),{index:n}=t,r=this.props.data;return r[0]&&r[0].__source&&(t.object=r.find(e=>e.__source.index===n)),t}disablePickingIndex(e){let t=this.props.data;if(t[0]&&t[0].__source)for(let n=0;n<t.length;n++)t[n].__source.index===e&&this._disablePickingIndex(n);else super.disablePickingIndex(e)}draw({uniforms:e}){let{jointRounded:t,capRounded:n,billboard:r,miterLimit:i,widthUnits:a,widthScale:o,widthMinPixels:s,widthMaxPixels:c}=this.props,l=this.state.model,u={jointType:Number(t),capType:Number(n),billboard:r,widthUnits:zl[a],widthScale:o,miterLimit:i,widthMinPixels:s,widthMaxPixels:c};l.shaderInputs.setProps({path:u}),l.draw(this.context.renderPass)}_getModel(){let e=[0,1,2,1,4,2,1,3,4,3,5,4],t=[0,0,0,-1,0,1,1,-1,1,1,1,0];return new Vf(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new $d({topology:`triangle-list`,attributes:{indices:new Uint16Array(e),positions:{value:new Float32Array(t),size:2}}}),isInstanced:!0})}calculatePositions(e){let{pathTesselator:t}=this.state;e.startIndices=t.vertexStarts,e.value=t.get(`positions`)}calculateSegmentTypes(e){let{pathTesselator:t}=this.state;e.startIndices=t.vertexStarts,e.value=t.get(`segmentTypes`)}calculateWebGPUPositions(e){let{pathTesselator:t}=this.state,n=t.get(`positions`);if(!n){e.value=null;return}let r=t.instanceCount,i=new Float32Array(r*24),a=[-1,0,1,2];for(let e=0;e<r;e++){let t=e*24;for(let o=0;o<4;o++){let s=e+a[o],c=t+o*3;for(let e=0;e<3;e++){let t=s>=0&&s<r?n[s*3+e]:0,a=Math.fround(t);i[c+e]=a,i[c+e+12]=t-a}}}e.startIndices=t.vertexStarts,e.value=i}};bw.defaultProps=gw,bw.layerName=`PathLayer`;var xw=n(a(((e,t)=>{t.exports=n,t.exports.default=n;function n(e,t,n){n||=2;var i=t&&t.length,o=i?t[0]*n:e.length,s=r(e,0,o,n,!0),c=[];if(!s||s.next===s.prev)return c;var l,d,f,p,m,h,g;if(i&&(s=u(e,t,s,n)),e.length>80*n){l=f=e[0],d=p=e[1];for(var _=n;_<o;_+=n)m=e[_],h=e[_+1],m<l&&(l=m),h<d&&(d=h),m>f&&(f=m),h>p&&(p=h);g=Math.max(f-l,p-d),g=g===0?0:32767/g}return a(s,c,n,l,d,g,0),c}function r(e,t,n,r,i){var a,o;if(i===N(e,t,n,r)>0)for(a=t;a<n;a+=r)o=A(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=A(a,e[a],e[a+1],o);return o&&S(o,o.next)&&(j(o),o=o.next),o}function i(e,t){if(!e)return e;t||=e;var n=e,r;do if(r=!1,!n.steiner&&(S(n,n.next)||x(n.prev,n,n.next)===0)){if(j(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function a(e,t,n,r,u,d,f){if(e){!f&&d&&h(e,r,u,d);for(var p=e,m,g;e.prev!==e.next;)if(m=e.prev,g=e.next,d?s(e,r,u,d):o(e))t.push(m.i/n|0),t.push(e.i/n|0),t.push(g.i/n|0),j(e),e=g.next,p=g.next;else if(e=g,e===p){f?f===1?(e=c(i(e),t,n),a(e,t,n,r,u,d,2)):f===2&&l(e,t,n,r,u,d):a(i(e),t,n,r,u,d,1);break}}}function o(e){var t=e.prev,n=e,r=e.next;if(x(t,n,r)>=0)return!1;for(var i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=i<a?i<o?i:o:a<o?a:o,d=s<c?s<l?s:l:c<l?c:l,f=i>a?i>o?i:o:a>o?a:o,p=s>c?s>l?s:l:c>l?c:l,m=r.next;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&y(i,s,a,c,o,l,m.x,m.y)&&x(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function s(e,t,n,r){var i=e.prev,a=e,o=e.next;if(x(i,a,o)>=0)return!1;for(var s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=s<c?s<l?s:l:c<l?c:l,m=u<d?u<f?u:f:d<f?d:f,h=s>c?s>l?s:l:c>l?c:l,g=u>d?u>f?u:f:d>f?d:f,v=_(p,m,t,n,r),b=_(h,g,t,n,r),S=e.prevZ,C=e.nextZ;S&&S.z>=v&&C&&C.z<=b;){if(S.x>=p&&S.x<=h&&S.y>=m&&S.y<=g&&S!==i&&S!==o&&y(s,u,c,d,l,f,S.x,S.y)&&x(S.prev,S,S.next)>=0||(S=S.prevZ,C.x>=p&&C.x<=h&&C.y>=m&&C.y<=g&&C!==i&&C!==o&&y(s,u,c,d,l,f,C.x,C.y)&&x(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;S&&S.z>=v;){if(S.x>=p&&S.x<=h&&S.y>=m&&S.y<=g&&S!==i&&S!==o&&y(s,u,c,d,l,f,S.x,S.y)&&x(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;C&&C.z<=b;){if(C.x>=p&&C.x<=h&&C.y>=m&&C.y<=g&&C!==i&&C!==o&&y(s,u,c,d,l,f,C.x,C.y)&&x(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function c(e,t,n){var r=e;do{var a=r.prev,o=r.next.next;!S(a,o)&&C(a,r,r.next,o)&&D(a,o)&&D(o,a)&&(t.push(a.i/n|0),t.push(r.i/n|0),t.push(o.i/n|0),j(r),j(r.next),r=e=o),r=r.next}while(r!==e);return i(r)}function l(e,t,n,r,o,s){var c=e;do{for(var l=c.next.next;l!==c.prev;){if(c.i!==l.i&&b(c,l)){var u=k(c,l);c=i(c,c.next),u=i(u,u.next),a(c,t,n,r,o,s,0),a(u,t,n,r,o,s,0);return}l=l.next}c=c.next}while(c!==e)}function u(e,t,n,i){for(var a=[],o=0,s=t.length,c,l,u;o<s;o++)c=t[o]*i,l=o<s-1?t[o+1]*i:e.length,u=r(e,c,l,i,!1),u===u.next&&(u.steiner=!0),a.push(v(u));for(a.sort(d),o=0;o<a.length;o++)n=f(a[o],n);return n}function d(e,t){return e.x-t.x}function f(e,t){var n=p(e,t);if(!n)return t;var r=k(n,e);return i(r,r.next),i(n,n.next)}function p(e,t){var n=t,r=e.x,i=e.y,a=-1/0,o;do{if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){var s=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(s<=r&&s>a&&(a=s,o=n.x<n.next.x?n:n.next,s===r))return o}n=n.next}while(n!==t);if(!o)return null;var c=o,l=o.x,u=o.y,d=1/0,f;n=o;do r>=n.x&&n.x>=l&&r!==n.x&&y(i<u?r:a,i,l,u,i<u?a:r,i,n.x,n.y)&&(f=Math.abs(i-n.y)/(r-n.x),D(n,e)&&(f<d||f===d&&(n.x>o.x||n.x===o.x&&m(o,n)))&&(o=n,d=f)),n=n.next;while(n!==c);return o}function m(e,t){return x(e.prev,e,t.prev)<0&&x(t.next,e,e.next)<0}function h(e,t,n,r){var i=e;do i.z===0&&(i.z=_(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,g(i)}function g(e){var t,n,r,i,a,o,s,c,l=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,s=0,t=0;t<l&&(s++,r=r.nextZ,r);t++);for(c=l;s>0||c>0&&r;)s!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,s--):(i=r,r=r.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,l*=2}while(o>1);return e}function _(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function v(e){var t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function y(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function b(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!E(e,t)&&(D(e,t)&&D(t,e)&&O(e,t)&&(x(e.prev,e,t.prev)||x(e,t.prev,t))||S(e,t)&&x(e.prev,e,e.next)>0&&x(t.prev,t,t.next)>0)}function x(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function S(e,t){return e.x===t.x&&e.y===t.y}function C(e,t,n,r){var i=T(x(e,t,n)),a=T(x(e,t,r)),o=T(x(n,r,e)),s=T(x(n,r,t));return!!(i!==a&&o!==s||i===0&&w(e,n,t)||a===0&&w(e,r,t)||o===0&&w(n,e,r)||s===0&&w(n,t,r))}function w(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function T(e){return e>0?1:e<0?-1:0}function E(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&C(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function D(e,t){return x(e.prev,e,e.next)<0?x(e,t,e.next)>=0&&x(e,e.prev,t)>=0:x(e,t,e.prev)<0||x(e,e.next,t)<0}function O(e,t){var n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function k(e,t){var n=new M(e.i,e.x,e.y),r=new M(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function A(e,t,n,r){var i=new M(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function j(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function M(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}n.deviation=function(e,t,n,r){var i=t&&t.length,a=i?t[0]*n:e.length,o=Math.abs(N(e,0,a,n));if(i)for(var s=0,c=t.length;s<c;s++){var l=t[s]*n,u=s<c-1?t[s+1]*n:e.length;o-=Math.abs(N(e,l,u,n))}var d=0;for(s=0;s<r.length;s+=3){var f=r[s]*n,p=r[s+1]*n,m=r[s+2]*n;d+=Math.abs((e[f]-e[m])*(e[p+1]-e[f+1])-(e[f]-e[p])*(e[m+1]-e[f+1]))}return o===0&&d===0?0:Math.abs((d-o)/o)};function N(e,t,n,r){for(var i=0,a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}n.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,i=0;i<e.length;i++){for(var a=0;a<e[i].length;a++)for(var o=0;o<t;o++)n.vertices.push(e[i][a][o]);i>0&&(r+=e[i-1].length,n.holes.push(r))}return n}}))(),1),Sw=AC.CLOCKWISE,Cw=AC.COUNTER_CLOCKWISE,ww={isClosed:!0};function Tw(e){if(e=e&&e.positions||e,!Array.isArray(e)&&!ArrayBuffer.isView(e))throw Error(`invalid polygon`)}function Ew(e){return`positions`in e?e.positions:e}function Dw(e){return`holeIndices`in e?e.holeIndices:null}function Ow(e){return Array.isArray(e[0])}function kw(e){return e.length>=1&&e[0].length>=2&&Number.isFinite(e[0][0])}function Aw(e){let t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function jw(e,t,n,r){for(let i=0;i<t;i++)if(e[n+i]!==e[r-t+i])return!1;return!0}function Mw(e,t,n,r,i){let a=t,o=n.length;for(let t=0;t<o;t++)for(let i=0;i<r;i++)e[a++]=n[t][i]||0;if(!Aw(n))for(let t=0;t<r;t++)e[a++]=n[0][t]||0;return ww.start=t,ww.end=a,ww.size=r,jC(e,i,ww),a}function Nw(e,t,n,r,i=0,a,o){a||=n.length;let s=a-i;if(s<=0)return t;let c=t;for(let t=0;t<s;t++)e[c++]=n[i+t];if(!jw(n,r,i,a))for(let t=0;t<r;t++)e[c++]=n[i+t];return ww.start=t,ww.end=c,ww.size=r,jC(e,o,ww),c}function Pw(e,t){Tw(e);let n=[],r=[];if(`positions`in e){let{positions:i,holeIndices:a}=e;if(a){let e=0;for(let o=0;o<=a.length;o++)e=Nw(n,e,i,t,a[o-1],a[o],o===0?Sw:Cw),r.push(e);return r.pop(),{positions:n,holeIndices:r}}e=i}if(!Ow(e))return Nw(n,0,e,t,0,n.length,Sw),n;if(!kw(e)){let i=0;for(let[a,o]of e.entries())i=Mw(n,i,o,t,a===0?Sw:Cw),r.push(i);return r.pop(),{positions:n,holeIndices:r}}return Mw(n,0,e,t,Sw),n}function Fw(e,t,n){let r=e.length/3,i=0;for(let a=0;a<r;a++){let o=(a+1)%r;i+=e[a*3+t]*e[o*3+n],i-=e[o*3+t]*e[a*3+n]}return Math.abs(i/2)}function Iw(e,t,n,r){let i=e.length/3;for(let a=0;a<i;a++){let i=a*3,o=e[i+0],s=e[i+1],c=e[i+2];e[i+t]=o,e[i+n]=s,e[i+r]=c}}function Lw(e,t,n,r){let i=Dw(e);i&&=i.map(e=>e/t);let a=Ew(e),o=r&&t===3;if(n){let e=a.length;a=a.slice();let r=[];for(let i=0;i<e;i+=t){r[0]=a[i],r[1]=a[i+1],o&&(r[2]=a[i+2]);let e=n(r);a[i]=e[0],a[i+1]=e[1],o&&(a[i+2]=e[2])}}if(o){let e=Fw(a,0,1),t=Fw(a,0,2),r=Fw(a,1,2);if(!e&&!t&&!r)return[];e>t&&e>r||(t>r?(n||(a=a.slice()),Iw(a,0,2,1)):(n||(a=a.slice()),Iw(a,2,0,1)))}return(0,xw.default)(a,i,t)}var Rw=class extends xS{constructor(e){let{fp64:t,IndexType:n=Uint32Array}=e;super({...e,attributes:{positions:{size:3,type:t?Float64Array:Float32Array},vertexValid:{type:Uint16Array,size:1},indices:{type:n,size:1}}})}get(e){let{attributes:t}=this;return e===`indices`?t.indices&&t.indices.subarray(0,this.vertexCount):t[e]}updateGeometry(e){super.updateGeometry(e);let t=this.buffers.indices;if(t)this.vertexCount=(t.value||t).length;else if(this.data&&!this.getGeometry)throw Error(`missing indices buffer`)}normalizeGeometry(e){if(this.normalize){let t=Pw(e,this.positionSize);return this.opts.resolution?WC(Ew(t),Dw(t),{size:this.positionSize,gridResolution:this.opts.resolution,edgeTypes:!0}):this.opts.wrapLongitude?QC(Ew(t),Dw(t),{size:this.positionSize,maxLatitude:86,edgeTypes:!0}):t}return e}getGeometrySize(e){if(zw(e)){let t=0;for(let n of e)t+=this.getGeometrySize(n);return t}return Ew(e).length/this.positionSize}getGeometryFromBuffer(e){return this.normalize||!this.buffers.indices?super.getGeometryFromBuffer(e):null}updateGeometryAttributes(e,t){if(e&&zw(e))for(let n of e){let e=this.getGeometrySize(n);t.geometrySize=e,this.updateGeometryAttributes(n,t),t.vertexStart+=e,t.indexStart=this.indexStarts[t.geometryIndex+1]}else{let n=e;this._updateIndices(n,t),this._updatePositions(n,t),this._updateVertexValid(n,t)}}_updateIndices(e,{geometryIndex:t,vertexStart:n,indexStart:r}){let{attributes:i,indexStarts:a,typedArrayManager:o}=this,s=i.indices;if(!s||!e)return;let c=r,l=Lw(e,this.positionSize,this.opts.preproject,this.opts.full3d);s=o.allocate(s,r+l.length,{copy:!0});for(let e=0;e<l.length;e++)s[c++]=l[e]+n;a[t+1]=r+l.length,i.indices=s}_updatePositions(e,{vertexStart:t,geometrySize:n}){let{attributes:{positions:r},positionSize:i}=this;if(!r||!e)return;let a=Ew(e);for(let e=t,o=0;o<n;e++,o++){let t=a[o*i],n=a[o*i+1],s=i>2?a[o*i+2]:0;r[e*3]=t,r[e*3+1]=n,r[e*3+2]=s}}_updateVertexValid(e,{vertexStart:t,geometrySize:n}){let{positionSize:r}=this,i=this.attributes.vertexValid,a=e&&Dw(e);if(e&&e.edgeTypes?i.set(e.edgeTypes,t):i.fill(1,t,t+n),a)for(let e=0;e<a.length;e++)i[t+a[e]/r-1]=0;i[t+n-1]=0}};function zw(e){return Array.isArray(e)&&e.length>0&&!Number.isFinite(e[0])}var Bw=`struct SolidPolygonUniforms {
  extruded: f32,
  isWireframe: f32,
  elevationScale: f32,
};

@group(0) @binding(auto) var<uniform> solidPolygon: SolidPolygonUniforms;
`,Vw=`layout(std140) uniform solidPolygonUniforms {
  bool extruded;
  bool isWireframe;
  float elevationScale;
} solidPolygon;
`,Hw={name:`solidPolygon`,source:Bw,vs:Vw,fs:Vw,uniformTypes:{extruded:`f32`,isWireframe:`f32`,elevationScale:`f32`}},Uw=`in vec4 fillColors;
in vec4 lineColors;
in float rowIndexes;
out vec4 vColor;
struct PolygonProps {
vec3 positions;
vec3 positions64Low;
vec3 normal;
float elevations;
};
vec3 project_offset_normal(vec3 vector) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSETS) {
return normalize(vector * project.commonUnitsPerWorldUnit);
}
return project_normal(vector);
}
void calculatePosition(PolygonProps props) {
vec3 pos = props.positions;
vec3 pos64Low = props.positions64Low;
vec3 normal = props.normal;
vec4 colors = solidPolygon.isWireframe ? lineColors : fillColors;
geometry.worldPosition = props.positions;
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
if (solidPolygon.extruded) {
pos.z += props.elevations * solidPolygon.elevationScale;
}
gl_Position = project_position_to_clipspace(pos, pos64Low, vec3(0.), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
if (solidPolygon.extruded) {
#ifdef IS_SIDE_VERTEX
normal = project_offset_normal(normal);
#else
normal = project_normal(normal);
#endif
geometry.normal = normal;
vec3 lightColor = lighting_getLightColor(colors.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);
vColor = vec4(lightColor, colors.a * layer.opacity);
} else {
vColor = vec4(colors.rgb, colors.a * layer.opacity);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,Ww=`\
#version 300 es
#define SHADER_NAME solid-polygon-layer-vertex-shader
in vec3 vertexPositions;
in vec3 vertexPositions64Low;
in float elevations;
${Uw}
void main(void) {
PolygonProps props;
props.positions = vertexPositions;
props.positions64Low = vertexPositions64Low;
props.elevations = elevations;
props.normal = vec3(0.0, 0.0, 1.0);
calculatePosition(props);
}
`,Gw=`\
#version 300 es
#define SHADER_NAME solid-polygon-layer-vertex-shader-side
#define IS_SIDE_VERTEX
in vec2 positions;
in vec3 vertexPositions;
in vec3 nextVertexPositions;
in vec3 vertexPositions64Low;
in vec3 nextVertexPositions64Low;
in float elevations;
in float instanceVertexValid;
${Uw}
void main(void) {
if(instanceVertexValid < 0.5){
gl_Position = vec4(0.);
return;
}
PolygonProps props;
vec3 pos;
vec3 pos64Low;
vec3 nextPos;
vec3 nextPos64Low;
#if RING_WINDING_ORDER_CW == 1
pos = vertexPositions;
pos64Low = vertexPositions64Low;
nextPos = nextVertexPositions;
nextPos64Low = nextVertexPositions64Low;
#else
pos = nextVertexPositions;
pos64Low = nextVertexPositions64Low;
nextPos = vertexPositions;
nextPos64Low = vertexPositions64Low;
#endif
props.positions = mix(pos, nextPos, positions.x);
props.positions64Low = mix(pos64Low, nextPos64Low, positions.x);
props.normal = vec3(
pos.y - nextPos.y + (pos64Low.y - nextPos64Low.y),
nextPos.x - pos.x + (nextPos64Low.x - pos64Low.x),
0.0);
props.elevations = elevations * positions.y;
calculatePosition(props);
}
`,Kw=`#version 300 es
#define SHADER_NAME solid-polygon-layer-fragment-shader
precision highp float;
in vec4 vColor;
out vec4 fragColor;
void main(void) {
fragColor = vColor;
geometry.uv = vec2(0.);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`;function qw(){return`fn project_offset_normal(vector: vec3<f32>) -> vec3<f32> {
  if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
      project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSETS) {
    return normalize(vector * project.commonUnitsPerWorldUnit);
  }
  return project_normal(vector);
}

fn apply_polygon_color(
  colors: vec4<f32>,
  normal: vec3<f32>,
  position: vec4<f32>
) -> vec4<f32> {
  if (solidPolygon.extruded > 0.5) {
    let lightColor = lighting_getLightColor2(
      colors.rgb,
      project.cameraPosition,
      position.xyz,
      normal
    );
    return vec4<f32>(lightColor, colors.a * layer.opacity);
  }
  return vec4<f32>(colors.rgb, colors.a * layer.opacity);
}
`}function Jw(){return`@fragment
fn fragmentMain(inp: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = vec2<f32>(0.0, 0.0);

  clip_filterColor(inp.clipCoordinates);

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inp.pickingColor)) {
      discard;
    }
    return vec4<f32>(inp.pickingColor, 1.0);
  }

  var fragColor = inp.vColor;

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inp.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return deckgl_premultiplied_alpha(fragColor);
}
`}function Yw(){return`\
${qw()}

struct Attributes {
  @location(0) vertexPositions: vec3<f32>,
  @location(1) vertexPositions64Low: vec3<f32>,
  @location(2) elevations: f32,
  @location(3) fillColors: vec4<f32>,
  @location(4) lineColors: vec4<f32>,
  @location(5) rowIndexes: u32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) pickingColor: vec3<f32>,
  @location(2) clipCoordinates: vec2<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var outp: Varyings;

  var pos = attributes.vertexPositions;
  if (solidPolygon.extruded > 0.5) {
    pos.z += attributes.elevations * solidPolygon.elevationScale;
  }

  geometry.worldPosition = attributes.vertexPositions;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.rowIndexes);

  let projectedPosition = project_position_to_clipspace_and_commonspace(
    pos,
    attributes.vertexPositions64Low,
    vec3<f32>(0.0)
  );
  geometry.position = projectedPosition.commonPosition;
  outp.position = projectedPosition.clipPosition;

  let normal = project_normal(vec3<f32>(0.0, 0.0, 1.0));
  geometry.normal = normal;

  let colors = select(
    attributes.fillColors,
    attributes.lineColors,
    solidPolygon.isWireframe > 0.5
  );
  outp.vColor = apply_polygon_color(colors, normal, geometry.position);
  outp.pickingColor = geometry.pickingColor;

  outp.clipCoordinates = geometry.position.xy;
  clip_filterPosition(&outp.position, geometry.worldPosition.xy);

  return outp;
}

${Jw()}
`}function Xw(e){return`\
const RING_WINDING_ORDER_CW: bool = ${e?`true`:`false`};

${qw()}

struct Attributes {
  @location(0) positions: vec2<f32>,
  @location(1) vertexPositions: vec3<f32>,
  @location(2) vertexPositions64Low: vec3<f32>,
  @location(3) nextVertexPositions: vec3<f32>,
  @location(4) nextVertexPositions64Low: vec3<f32>,
  @location(5) vertexValid: f32,
  @location(6) elevations: f32,
  @location(7) fillColors: vec4<f32>,
  @location(8) lineColors: vec4<f32>,
  @location(9) rowIndexes: u32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) pickingColor: vec3<f32>,
  @location(2) clipCoordinates: vec2<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var outp: Varyings;
  outp.position = vec4<f32>(0.0);
  outp.vColor = vec4<f32>(0.0);
  outp.pickingColor = picking_getPickingColorFromIndex(attributes.rowIndexes);
  outp.clipCoordinates = vec2<f32>(0.0);

  if (attributes.vertexValid < 0.5) {
    return outp;
  }

  let pos = select(attributes.nextVertexPositions, attributes.vertexPositions, RING_WINDING_ORDER_CW);
  let pos64Low = select(
    attributes.nextVertexPositions64Low,
    attributes.vertexPositions64Low,
    RING_WINDING_ORDER_CW
  );
  let nextPos = select(attributes.vertexPositions, attributes.nextVertexPositions, RING_WINDING_ORDER_CW);
  let nextPos64Low = select(
    attributes.vertexPositions64Low,
    attributes.nextVertexPositions64Low,
    RING_WINDING_ORDER_CW
  );

  let position = mix(pos, nextPos, attributes.positions.x);
  let position64Low = mix(pos64Low, nextPos64Low, attributes.positions.x);

  var worldPosition = position;
  if (solidPolygon.extruded > 0.5) {
    worldPosition.z += attributes.elevations * attributes.positions.y * solidPolygon.elevationScale;
  }

  geometry.worldPosition = position;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.rowIndexes);

  let projectedPosition = project_position_to_clipspace_and_commonspace(
    worldPosition,
    position64Low,
    vec3<f32>(0.0)
  );
  geometry.position = projectedPosition.commonPosition;
  outp.position = projectedPosition.clipPosition;

  let normal = project_offset_normal(vec3<f32>(
    pos.y - nextPos.y + (pos64Low.y - nextPos64Low.y),
    nextPos.x - pos.x + (nextPos64Low.x - pos64Low.x),
    0.0
  ));
  geometry.normal = normal;

  let colors = select(
    attributes.fillColors,
    attributes.lineColors,
    solidPolygon.isWireframe > 0.5
  );
  outp.vColor = apply_polygon_color(colors, normal, geometry.position);
  outp.pickingColor = geometry.pickingColor;

  outp.clipCoordinates = geometry.position.xy;
  clip_filterPosition(&outp.position, geometry.worldPosition.xy);

  return outp;
}

${Jw()}
`}function Zw(e,t){return e===`top`?Yw():Xw(t)}var Qw=[0,0,0,255],$w={filled:!0,extruded:!1,wireframe:!1,_normalize:!0,_windingOrder:`CW`,_full3d:!1,elevationScale:{type:`number`,min:0,value:1},getPolygon:{type:`accessor`,value:e=>e.polygon},getElevation:{type:`accessor`,value:1e3},getFillColor:{type:`accessor`,value:Qw},getLineColor:{type:`accessor`,value:Qw},material:!0},eT={enter:(e,t)=>t.length?t.subarray(t.length-e.length):e},tT=class extends aS{getShaders(e){let t=!this.props._normalize&&this.props._windingOrder===`CCW`?0:1;return super.getShaders({vs:e===`top`?Ww:Gw,fs:Kw,source:Zw(e,!!t),defines:{RING_WINDING_ORDER_CW:t},modules:[su,Ks,Vs,ad,Hw,...this.context.device.type===`webgpu`?[EC]:[]]})}get wrapLongitude(){return!1}getBounds(){return this.getAttributeManager()?.getBounds([`vertexPositions`])}initializeState(){let{viewport:e}=this.context,{coordinateSystem:t}=this.props,{_full3d:n}=this.props;e.isGeospatial&&t==="default"&&(t=`lnglat`);let r;t===`lnglat`&&(r=n?e.projectPosition.bind(e):e.projectFlat.bind(e)),this.setState({numInstances:0,polygonTesselator:new Rw({preproject:r,fp64:this.use64bitPositions(),IndexType:Uint32Array})});let i=this.getAttributeManager(),a=this.context.device.type===`webgpu`;i.add({indices:{size:1,isIndexed:!0,update:this.calculateIndices,noAlloc:!0},vertexPositions:{size:3,type:`float64`,stepMode:`dynamic`,fp64:this.use64bitPositions(),transition:eT,accessor:`getPolygon`,update:this.calculatePositions,noAlloc:!0,shaderAttributes:{nextVertexPositions:{vertexOffset:1}}},[a?`vertexValid`:`instanceVertexValid`]:{size:1,type:a?`float32`:`uint16`,stepMode:`instance`,update:this.calculateVertexValid,noAlloc:!0},elevations:{size:1,stepMode:`dynamic`,transition:eT,accessor:`getElevation`,bufferGroup:`solid-polygon-instance-data`},fillColors:{size:this.props.colorFormat.length,type:`unorm8`,stepMode:`dynamic`,transition:eT,accessor:`getFillColor`,defaultValue:Qw,bufferGroup:`solid-polygon-instance-data`},lineColors:{size:this.props.colorFormat.length,type:`unorm8`,stepMode:`dynamic`,transition:eT,accessor:`getLineColor`,defaultValue:Qw,bufferGroup:`solid-polygon-instance-data`},rowIndexes:{size:1,type:`uint32`,stepMode:`dynamic`,accessor:(e,{index:t})=>e&&e.__source?e.__source.index:t,bufferGroup:`solid-polygon-instance-data`}})}getPickingInfo(e){let t=super.getPickingInfo(e),{index:n}=t,r=this.props.data;return r[0]&&r[0].__source&&(t.object=r.find(e=>e.__source.index===n)),t}disablePickingIndex(e){let t=this.props.data;if(t[0]&&t[0].__source)for(let n=0;n<t.length;n++)t[n].__source.index===e&&this._disablePickingIndex(n);else super.disablePickingIndex(e)}draw({uniforms:e}){let{extruded:t,filled:n,wireframe:r,elevationScale:i}=this.props,{topModel:a,sideModel:o,wireframeModel:s,polygonTesselator:c}=this.state,l={extruded:!!t,elevationScale:i,isWireframe:!1};s&&r&&(s.setInstanceCount(c.instanceCount-1),s.shaderInputs.setProps({solidPolygon:{...l,isWireframe:!0}}),s.draw(this.context.renderPass)),o&&n&&(o.setInstanceCount(c.instanceCount-1),o.shaderInputs.setProps({solidPolygon:l}),o.draw(this.context.renderPass)),a&&n&&(a.setVertexCount(c.vertexCount),a.shaderInputs.setProps({solidPolygon:l}),a.draw(this.context.renderPass))}updateState(e){super.updateState(e),this.updateGeometry(e);let{props:t,oldProps:n,changeFlags:r}=e,i=this.getAttributeManager();(r.extensionsChanged||t.filled!==n.filled||t.extruded!==n.extruded)&&(this.state.models?.forEach(e=>e.destroy()),this.setState(this._getModels()),i.invalidateAll())}updateGeometry({props:e,oldProps:t,changeFlags:n}){if(n.dataChanged||n.updateTriggersChanged&&(n.updateTriggersChanged.all||n.updateTriggersChanged.getPolygon)){let{polygonTesselator:t}=this.state,r=e.data.attributes||{};t.updateGeometry({data:e.data,normalize:e._normalize,geometryBuffer:r.getPolygon,buffers:r,getGeometry:e.getPolygon,positionFormat:e.positionFormat,wrapLongitude:e.wrapLongitude,resolution:this.context.viewport.resolution,fp64:this.use64bitPositions(),dataChanged:n.dataChanged,full3d:e._full3d}),this.setState({numInstances:t.instanceCount,startIndices:t.vertexStarts}),n.dataChanged||this.getAttributeManager().invalidateAll()}}_getModels(){let{id:e,filled:t,extruded:n}=this.props,r,i,a;if(t){let t=this.getShaders(`top`);t.defines={...t.defines,NON_INSTANCED_MODEL:1};let n=this.getAttributeManager().getBufferLayouts({isInstanced:!1});this.context.device.type===`webgpu`&&(n=n.filter(e=>e.name!==`indices`&&e.name!==`vertexValid`&&e.name!==`instanceVertexValid`&&e.name!==`nextVertexPositions`)),r=new Vf(this.context.device,{...t,id:`${e}-top`,topology:`triangle-list`,bufferLayout:n,isIndexed:!0,userData:{excludeAttributes:{vertexValid:!0,instanceVertexValid:!0,nextVertexPositions:!0}}})}if(n){let t=this.getAttributeManager().getBufferLayouts({isInstanced:!0});this.context.device.type===`webgpu`&&(t=t.filter(e=>e.name!==`indices`)),i=new Vf(this.context.device,{...this.getShaders(`side`),id:`${e}-side`,bufferLayout:t,geometry:new $d({topology:`triangle-strip`,attributes:{positions:{size:2,value:new Float32Array([1,0,0,0,1,1,0,1])}}}),isInstanced:!0,userData:{excludeAttributes:{indices:!0}}}),a=new Vf(this.context.device,{...this.getShaders(`side`),id:`${e}-wireframe`,bufferLayout:t,geometry:new $d({topology:`line-strip`,attributes:{positions:{size:2,value:new Float32Array([1,0,0,0,0,1,1,1])}}}),isInstanced:!0,userData:{excludeAttributes:{indices:!0}}})}return{models:[i,a,r].filter(Boolean),topModel:r,sideModel:i,wireframeModel:a}}calculateIndices(e){let{polygonTesselator:t}=this.state;e.startIndices=t.indexStarts,e.value=t.get(`indices`)}calculatePositions(e){let{polygonTesselator:t}=this.state;e.startIndices=t.vertexStarts,e.value=t.get(`positions`)}calculateVertexValid(e){let t=this.props.data.attributes?.instanceVertexValid?.value,n=this.context.device.type===`webgpu`&&t?t:this.state.polygonTesselator.get(`vertexValid`);e.value=this.context.device.type===`webgpu`&&n?Float32Array.from(n):n}};tT.defaultProps=$w,tT.layerName=`SolidPolygonLayer`;function nT({data:e,getIndex:t,dataRange:n,replace:r}){let{startRow:i=0,endRow:a=1/0}=n,o=e.length,s=o,c=o;for(let n=0;n<o;n++){let r=t(e[n]);if(s>n&&r>=i&&(s=n),r>=a){c=n;break}}let l=s,u=c-s===r.length?void 0:e.slice(c);for(let t=0;t<r.length;t++)e[l++]=r[t];if(u){for(let t=0;t<u.length;t++)e[l++]=u[t];e.length=l}return{startRow:s,endRow:s+r.length}}var rT=[0,0,0,255],iT={stroked:!0,filled:!0,extruded:!1,elevationScale:1,wireframe:!1,_normalize:!0,_windingOrder:`CW`,lineWidthUnits:`meters`,lineWidthScale:1,lineWidthMinPixels:0,lineWidthMaxPixels:2**53-1,lineJointRounded:!1,lineMiterLimit:4,lineAntialiasing:!1,getPolygon:{type:`accessor`,value:e=>e.polygon},getFillColor:{type:`accessor`,value:[0,0,0,255]},getLineColor:{type:`accessor`,value:rT},getLineWidth:{type:`accessor`,value:1},getElevation:{type:`accessor`,value:1e3},material:!0},aT=class extends dS{initializeState(){this.state={paths:[],pathsDiff:null},this.props.getLineDashArray&&z.removed(`getLineDashArray`,`PathStyleExtension`)()}updateState({changeFlags:e}){let t=e.dataChanged||e.updateTriggersChanged&&(e.updateTriggersChanged.all||e.updateTriggersChanged.getPolygon);if(t&&Array.isArray(e.dataChanged)){let t=this.state.paths.slice(),n=e.dataChanged.map(e=>nT({data:t,getIndex:e=>e.__source.index,dataRange:e,replace:this._getPaths(e)}));this.setState({paths:t,pathsDiff:n})}else t&&this.setState({paths:this._getPaths(),pathsDiff:null})}_getPaths(e={}){let{data:t,getPolygon:n,positionFormat:r,_normalize:i}=this.props,a=[],o=r===`XY`?2:3,{startRow:s,endRow:c}=e,{iterable:l,objectInfo:u}=Sv(t,s,c);for(let e of l){u.index++;let t=n(e,u);i&&(t=Pw(t,o));let{holeIndices:r}=t,s=t.positions||t;if(r)for(let t=0;t<=r.length;t++){let n=s.slice(r[t-1]||0,r[t]||s.length);a.push(this.getSubLayerRow({path:n},e,u.index))}else a.push(this.getSubLayerRow({path:s},e,u.index))}return a}renderLayers(){let{data:e,_dataDiff:t,stroked:n,filled:r,extruded:i,wireframe:a,_normalize:o,_windingOrder:s,elevationScale:c,transitions:l,positionFormat:u}=this.props,{lineWidthUnits:d,lineWidthScale:f,lineWidthMinPixels:p,lineWidthMaxPixels:m,lineJointRounded:h,lineMiterLimit:g,lineAntialiasing:_,lineDashJustified:v}=this.props,{getFillColor:y,getLineColor:b,getLineWidth:x,getLineDashArray:S,getElevation:C,getPolygon:w,updateTriggers:T,material:E}=this.props,{paths:D,pathsDiff:O}=this.state,k=this.getSubLayerClass(`fill`,tT),A=this.getSubLayerClass(`stroke`,bw),j=this.shouldRenderSubLayer(`fill`,D)&&new k({_dataDiff:t,extruded:i,elevationScale:c,filled:r,wireframe:a,_normalize:o,_windingOrder:s,getElevation:C,getFillColor:y,getLineColor:i&&a?b:rT,material:E,transitions:l},this.getSubLayerProps({id:`fill`,updateTriggers:T&&{getPolygon:T.getPolygon,getElevation:T.getElevation,getFillColor:T.getFillColor,lineColors:i&&a,getLineColor:T.getLineColor}}),{data:e,positionFormat:u,getPolygon:w}),M=!i&&n&&this.shouldRenderSubLayer(`stroke`,D)&&new A({_dataDiff:O&&(()=>O),widthUnits:d,widthScale:f,widthMinPixels:p,widthMaxPixels:m,jointRounded:h,miterLimit:g,antialiasing:_,dashJustified:v,_pathType:`loop`,transitions:l&&{getWidth:l.getLineWidth,getColor:l.getLineColor,getPath:l.getPolygon},getColor:this.getSubLayerAccessor(b),getWidth:this.getSubLayerAccessor(x),getDashArray:this.getSubLayerAccessor(S)},this.getSubLayerProps({id:`stroke`,updateTriggers:T&&{getWidth:T.getLineWidth,getColor:T.getLineColor,getDashArray:T.getLineDashArray}}),{data:D,positionFormat:u,getPath:e=>e.path});return[!i&&j,M,i&&j]}};aT.layerName=`PolygonLayer`,aT.defaultProps=iT;var oT=`layout(std140) uniform sdfUniforms {
  float gamma;
  bool enabled;
  float buffer;
  float outlineBuffer;
  vec4 outlineColor;
} sdf;
`,sT={name:`sdf`,vs:oT,fs:oT,uniformTypes:{gamma:`f32`,enabled:`f32`,buffer:`f32`,outlineBuffer:`f32`,outlineColor:`vec4<f32>`}},cT={none:0,start:1,center:2,end:3},lT={name:`text`,vs:`\
layout(std140) uniform textUniforms {
  highp vec2 cutoffPixels;
  highp ivec2 align;
  highp float fontSize;
  bool flipY;
} text;

#define ALIGN_MODE_START ${cT.start}
#define ALIGN_MODE_CENTER ${cT.center}
#define ALIGN_MODE_END ${cT.end}
`,getUniforms:({contentCutoffPixels:e=[0,0],contentAlignHorizontal:t=`none`,contentAlignVertical:n=`none`,fontSize:r,viewport:i})=>({cutoffPixels:e,align:[cT[t],cT[n]],fontSize:r,flipY:i?.flipY??!1}),uniformTypes:{cutoffPixels:`vec2<f32>`,align:`vec2<i32>`,fontSize:`f32`,flipY:`f32`}},uT=`#version 300 es
#define SHADER_NAME multi-icon-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceSizes;
in float instanceAngles;
in vec4 instanceColors;
in float rowIndexes;
in vec4 instanceIconFrames;
in float instanceColorModes;
in vec2 instanceOffsets;
in vec2 instancePixelOffset;
in vec4 instanceClipRect;
out float vColorMode;
out vec4 vColor;
out vec2 vTextureCoords;
out vec2 uv;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = angle * PI / 180.0;
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
float getPixelOffsetFromAlignment(float anchor, float extent, float clipStart, float clipEnd, int mode) {
if (clipEnd < clipStart) return 0.0;
if (mode == ALIGN_MODE_START) {
return max(- (anchor + clipStart), 0.0);
}
if (mode == ALIGN_MODE_CENTER) {
float _min = max(0., anchor + clipStart);
float _max = min(extent, anchor + clipEnd);
return _min < _max ? (_min + _max) / 2.0 - anchor : 0.0;
}
if (mode == ALIGN_MODE_END) {
return min(extent - (anchor + clipEnd), 0.);
}
return 0.0;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
uv = positions;
vec2 iconSize = instanceIconFrames.zw;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * icon.sizeScale, icon.sizeUnits),
icon.sizeMinPixels, icon.sizeMaxPixels
);
float instanceScale = sizePixels / text.fontSize;
vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;
pixelOffset += instancePixelOffset;
pixelOffset.y *= -1.0;
vec2 anchorPosScreen;
if (icon.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
anchorPosScreen = gl_Position.xy / gl_Position.w;
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
if (text.flipY) {
offset_common.y *= -1.;
}
DECKGL_FILTER_SIZE(offset_common, geometry);
vec4 anchorPos = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0));
anchorPosScreen = anchorPos.xy / anchorPos.w;
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
anchorPosScreen = vec2(anchorPosScreen.x + 1.0, 1.0 - anchorPosScreen.y) / 2.0 * project.viewportSize / project.devicePixelRatio;
vec2 xy = project_size_to_pixel(instanceClipRect.xy);
vec2 wh = project_size_to_pixel(instanceClipRect.zw);
if (text.flipY) {
xy.y = -xy.y - wh.y;
}
if (text.align.x > 0 || text.align.y > 0) {
vec2 viewportPixels = project.viewportSize / project.devicePixelRatio;
vec2 scrollPixels = vec2(
getPixelOffsetFromAlignment(anchorPosScreen.x, viewportPixels.x, xy.x, xy.x + wh.x, text.align.x),
-getPixelOffsetFromAlignment(anchorPosScreen.y, viewportPixels.y, -xy.y - wh.y, -xy.y, text.align.y)
);
pixelOffset += scrollPixels;
gl_Position.xy += project_pixel_size_to_clipspace(scrollPixels);
}
if (instanceClipRect.z >= 0.) {
if (pixelOffset.x < xy.x || pixelOffset.x > xy.x + wh.x) {
gl_Position = vec4(0.0);
}
else if (text.cutoffPixels.x > 0.) {
float vpWidth = project.viewportSize.x / project.devicePixelRatio;
float l = max(anchorPosScreen.x + xy.x, 0.0);
float r = min(anchorPosScreen.x + xy.x + wh.x, vpWidth);
if (r - l < text.cutoffPixels.x) {
gl_Position = vec4(0.0);
}
}
}
if (instanceClipRect.w >= 0.) {
if (pixelOffset.y < xy.y || pixelOffset.y > xy.y + wh.y) {
gl_Position = vec4(0.0);
}
else if (text.cutoffPixels.y > 0.) {
float vpHeight = project.viewportSize.y / project.devicePixelRatio;
float t = max(anchorPosScreen.y - xy.y - wh.y, 0.0);
float b = min(anchorPosScreen.y - xy.y, vpHeight);
if (b - t < text.cutoffPixels.y) {
gl_Position = vec4(0.0);
}
}
}
vTextureCoords = mix(
instanceIconFrames.xy,
instanceIconFrames.xy + iconSize,
(positions.xy + 1.0) / 2.0
) / icon.iconsTextureDim;
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
vColorMode = instanceColorModes;
}
`,dT=`#version 300 es
#define SHADER_NAME multi-icon-layer-fragment-shader
precision highp float;
uniform sampler2D iconsTexture;
in vec4 vColor;
in vec2 vTextureCoords;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
if (!bool(picking.isActive)) {
float alpha = texture(iconsTexture, vTextureCoords).a;
vec4 color = vColor;
if (sdf.enabled) {
float distance = alpha;
alpha = smoothstep(sdf.buffer - sdf.gamma, sdf.buffer + sdf.gamma, distance);
if (sdf.outlineBuffer > 0.0) {
float inFill = alpha;
float inBorder = smoothstep(sdf.outlineBuffer - sdf.gamma, sdf.outlineBuffer + sdf.gamma, distance);
color = mix(sdf.outlineColor, vColor, inFill);
alpha = inBorder;
}
}
float a = alpha * color.a;
if (a < icon.alphaCutoff) {
discard;
}
fragColor = vec4(color.rgb, a * layer.opacity);
}
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`;function fT({collision:e=!1}={}){return`\
struct IconUniforms {
  sizeScale: f32,
  iconsTextureDim: vec2<f32>,
  sizeBasis: f32,
  sizeMinPixels: f32,
  sizeMaxPixels: f32,
  billboard: i32,
  sizeUnits: i32,
  alphaCutoff: f32
};

struct TextUniforms {
  cutoffPixels: vec2<f32>,
  align: vec2<i32>,
  fontSize: f32,
  flipY: f32
};

struct SdfUniforms {
  gamma: f32,
  enabled: f32,
  buffer: f32,
  outlineBuffer: f32,
  outlineColor: vec4<f32>
};

${e?`struct CollisionUniforms {
  sort: i32,
  enabled: i32
};
`:``}

const ALIGN_MODE_START: i32 = 1;
const ALIGN_MODE_CENTER: i32 = 2;
const ALIGN_MODE_END: i32 = 3;

@group(0) @binding(auto) var<uniform> icon: IconUniforms;
@group(0) @binding(auto) var<uniform> text: TextUniforms;
@group(0) @binding(auto) var<uniform> sdf: SdfUniforms;
${e?`@group(0) @binding(auto) var<uniform> collision: CollisionUniforms;`:``}
@group(0) @binding(auto) var iconsTexture : texture_2d<f32>;
@group(0) @binding(auto) var iconsTextureSampler : sampler;
${e?`@group(0) @binding(auto) var collision_texture : texture_2d<f32>;
`:``}

fn rotate_by_angle(vertex: vec2<f32>, angle_deg: f32) -> vec2<f32> {
  let angle_radian = angle_deg * PI / 180.0;
  let c = cos(angle_radian);
  let s = sin(angle_radian);
  let rotation = mat2x2<f32>(vec2<f32>(c, -s), vec2<f32>(s, c));
  return rotation * vertex;
}

fn get_pixel_offset_from_alignment(
  anchor: f32,
  extent: f32,
  clipStart: f32,
  clipEnd: f32,
  mode: i32
) -> f32 {
  if (clipEnd < clipStart) {
    return 0.0;
  }
  if (mode == ALIGN_MODE_START) {
    return max(-(anchor + clipStart), 0.0);
  }
  if (mode == ALIGN_MODE_CENTER) {
    let minValue = max(0.0, anchor + clipStart);
    let maxValue = min(extent, anchor + clipEnd);
    if (minValue < maxValue) {
      return (minValue + maxValue) / 2.0 - anchor;
    }
    return 0.0;
  }
  if (mode == ALIGN_MODE_END) {
    return min(extent - (anchor + clipEnd), 0.0);
  }
  return 0.0;
}

${e?`fn collision_match(texCoords: vec2<f32>, pickingColor: vec3<f32>) -> f32 {
  let textureSize = vec2<i32>(textureDimensions(collision_texture));
  let pixelCoords = clamp(
    vec2<i32>(texCoords * vec2<f32>(textureSize)),
    vec2<i32>(0),
    textureSize - vec2<i32>(1)
  );
  let collisionPickingColor = textureLoad(collision_texture, pixelCoords, 0);
  let delta = dot(abs(collisionPickingColor.rgb - pickingColor), vec3<f32>(1.0));
  return step(delta, 0.001);
}

fn collision_is_visible(texCoords: vec2<f32>, pickingColor: vec3<f32>) -> f32 {
  if (collision.enabled == 0) {
    return 1.0;
  }

  var accumulator = 0.0;
  let stepSize = vec2<f32>(1.0) / project.viewportSize;

  for (var i: i32 = -2; i <= 2; i = i + 1) {
    for (var j: i32 = -2; j <= 2; j = j + 1) {
      let delta = vec2<f32>(f32(j), f32(i)) * stepSize;
      accumulator = accumulator + collision_match(texCoords + delta, pickingColor);
    }
  }

  return pow(accumulator / 25.0, 2.2);
}
`:``}

struct Attributes {
  @location(0) positions: vec2<f32>,

  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceSizes: f32,
  @location(4) instanceAngles: f32,
  @location(5) instanceColors: vec4<f32>,
  @location(6) instanceIconFrames: vec4<f32>,
  @location(7) instanceColorModes: f32,
  @location(8) instanceOffsets: vec2<f32>,
  @location(9) instancePixelOffset: vec2<f32>,
  @location(10) rowIndexes: u32,
  @location(11) instanceClipRect: vec4<f32>,
  ${e?`@location(12) collisionPriorities: f32,`:``}
};

struct Varyings {
  @builtin(position) position: vec4<f32>,

  @location(0) vColorMode: f32,
  @location(1) vColor: vec4<f32>,
  @location(2) vTextureCoords: vec2<f32>,
  @location(3) uv: vec2<f32>,
  @location(4) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(inp: Attributes) -> Varyings {
  geometry.worldPosition = inp.instancePositions;
  geometry.uv = inp.positions;
  geometry.pickingColor = picking_getPickingColorFromIndex(inp.rowIndexes);

  var outp: Varyings;
  outp.uv = inp.positions;

  let iconSize = inp.instanceIconFrames.zw;

  let sizePixels = clamp(
    project_unit_size_to_pixel(inp.instanceSizes * icon.sizeScale, icon.sizeUnits),
    icon.sizeMinPixels, icon.sizeMaxPixels
  );
  let instanceScale = sizePixels / text.fontSize;

  var pixelOffset = inp.positions / 2.0 * iconSize + inp.instanceOffsets;
  pixelOffset = rotate_by_angle(pixelOffset, inp.instanceAngles) * instanceScale;
  pixelOffset = pixelOffset + inp.instancePixelOffset;
  pixelOffset.y = pixelOffset.y * -1.0;

  var pos: vec4<f32>;
  var anchorPosScreen: vec2<f32>;
  if (icon.billboard != 0) {
    pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, vec3<f32>(0.0));
    anchorPosScreen = pos.xy / pos.w;

    let clipOffset = project_pixel_size_to_clipspace(pixelOffset);
    pos = vec4<f32>(pos.x + clipOffset.x, pos.y + clipOffset.y, pos.z, pos.w);
  } else {
    var offsetCommon = vec3<f32>(project_pixel_size_vec2(pixelOffset), 0.0);
    if (text.flipY > 0.5) {
      offsetCommon.y = offsetCommon.y * -1.0;
    }
    let anchorPos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, vec3<f32>(0.0));
    anchorPosScreen = anchorPos.xy / anchorPos.w;
    pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, offsetCommon);
  }

  anchorPosScreen = vec2<f32>(anchorPosScreen.x + 1.0, 1.0 - anchorPosScreen.y) / 2.0 *
    project.viewportSize / project.devicePixelRatio;
  var xy = project_size_vec2(inp.instanceClipRect.xy) * project.scale;
  var wh = project_size_vec2(inp.instanceClipRect.zw) * project.scale;

  if (text.flipY > 0.5) {
    xy.y = -xy.y - wh.y;
  }
  if (text.align.x > 0 || text.align.y > 0) {
    let viewportPixels = project.viewportSize / project.devicePixelRatio;
    let scrollPixels = vec2<f32>(
      get_pixel_offset_from_alignment(anchorPosScreen.x, viewportPixels.x, xy.x, xy.x + wh.x, text.align.x),
      -get_pixel_offset_from_alignment(anchorPosScreen.y, viewportPixels.y, -xy.y - wh.y, -xy.y, text.align.y)
    );
    pixelOffset = pixelOffset + scrollPixels;
    let scrollClipOffset = project_pixel_size_to_clipspace(scrollPixels);
    pos.x = pos.x + scrollClipOffset.x;
    pos.y = pos.y + scrollClipOffset.y;
  }

  if (inp.instanceClipRect.z >= 0.0) {
    if (pixelOffset.x < xy.x || pixelOffset.x > xy.x + wh.x) {
      pos = vec4<f32>(0.0);
    } else if (text.cutoffPixels.x > 0.0) {
      let viewportWidth = project.viewportSize.x / project.devicePixelRatio;
      let left = max(anchorPosScreen.x + xy.x, 0.0);
      let right = min(anchorPosScreen.x + xy.x + wh.x, viewportWidth);
      if (right - left < text.cutoffPixels.x) {
        pos = vec4<f32>(0.0);
      }
    }
  }
  if (inp.instanceClipRect.w >= 0.0) {
    if (pixelOffset.y < xy.y || pixelOffset.y > xy.y + wh.y) {
      pos = vec4<f32>(0.0);
    } else if (text.cutoffPixels.y > 0.0) {
      let viewportHeight = project.viewportSize.y / project.devicePixelRatio;
      let top = max(anchorPosScreen.y - xy.y - wh.y, 0.0);
      let bottom = min(anchorPosScreen.y - xy.y, viewportHeight);
      if (bottom - top < text.cutoffPixels.y) {
        pos = vec4<f32>(0.0);
      }
    }
  }

  ${e?`  if (collision.sort != 0) {
    pos.z = -0.001 * inp.collisionPriorities * pos.w;
  }
  `:``}

  let uvMix = (inp.positions.xy + vec2<f32>(1.0, 1.0)) * 0.5;
  outp.vTextureCoords = mix(inp.instanceIconFrames.xy, inp.instanceIconFrames.xy + iconSize, uvMix) / icon.iconsTextureDim;

  outp.position = pos;
  outp.vColor = inp.instanceColors;
  outp.vColorMode = inp.instanceColorModes;
  outp.pickingColor = picking_getPickingColorFromIndex(inp.rowIndexes);

  return outp;
}

@fragment
fn fragmentMain(inp: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = inp.uv;

  let texColor = textureSample(iconsTexture, iconsTextureSampler, inp.vTextureCoords);
  var alpha = texColor.a;
  var color = inp.vColor;

  if (sdf.enabled > 0.5) {
    let distance = alpha;
    alpha = smoothstep(sdf.buffer - sdf.gamma, sdf.buffer + sdf.gamma, distance);

    if (sdf.outlineBuffer > 0.0) {
      let inFill = alpha;
      let inBorder = smoothstep(sdf.outlineBuffer - sdf.gamma, sdf.outlineBuffer + sdf.gamma, distance);
      color = mix(sdf.outlineColor, inp.vColor, inFill);
      alpha = inBorder;
    }
  } else if (inp.vColorMode == 0.0) {
    color = texColor;
  }

  var a = alpha * color.a * layer.opacity;
  if (a < icon.alphaCutoff) {
    discard;
  }

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inp.pickingColor)) {
      discard;
    }
    return vec4<f32>(inp.pickingColor, 1.0);
  }

  ${e?`  let collisionFade = collision_is_visible(inp.position.xy / project.viewportSize, inp.pickingColor);
  a = a * collisionFade;
  if (a <= 0.0001) {
    discard;
  }
  `:``}

  var fragColor = deckgl_premultiplied_alpha(vec4<f32>(color.rgb, a));

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inp.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return fragColor;
}
`}var pT=fT(),mT=192/256,hT={getIconOffsets:{type:`accessor`,value:e=>e.offsets},getContentBox:{type:`accessor`,value:[0,0,-1,-1]},fontSize:1,alphaCutoff:.001,smoothing:.1,outlineWidth:0,outlineColor:{type:`color`,value:[0,0,0,255]},contentCutoffPixels:{type:`array`,value:[0,0]},contentAlignHorizontal:`none`,contentAlignVertical:`none`},gT=class extends uC{getShaders(){let e=super.getShaders();return{...e,modules:[...e.modules,lT,sT],vs:uT,fs:dT,source:pT}}initializeState(){super.initializeState();let e=this.getAttributeManager(),t=e.attributes.instanceIconDefs;t.settings.update=this.calculateInstanceIconDefs,e.addInstanced({rowIndexes:{type:`uint32`,size:1,bufferGroup:`icon-instance-data`,accessor:(e,{index:t})=>t},instanceClipRect:{size:4,bufferGroup:`icon-instance-data`,accessor:`getContentBox`,defaultValue:[0,0,-1,-1]}})}updateState(e){super.updateState(e);let{props:t,oldProps:n,changeFlags:r}=e,{outlineColor:i}=t;if(r.extensionsChanged){this.state.fillModel?.destroy();let e=this.context.device.type===`webgpu`?this._getModel(`${this.props.id}-fill`):void 0;this.setState({fillModel:e,models:e?[this.state.model,e]:[this.state.model]})}if(r.updateTriggersChanged&&(r.updateTriggersChanged.getIcon||r.updateTriggersChanged.getIconOffsets)&&this.getAttributeManager().invalidate(`instanceIconDefs`),i!==n.outlineColor){let e=[i[0]/255,i[1]/255,i[2]/255,(i[3]??255)/255];this.setState({outlineColor:e})}!t.sdf&&t.outlineWidth&&z.warn(`${this.id}: fontSettings.sdf is required to render outline`)()}draw(e){let{sdf:t,smoothing:n,fontSize:r,outlineWidth:i,contentCutoffPixels:a,contentAlignHorizontal:o,contentAlignVertical:s}=this.props,{outlineColor:c}=this.state,l=i?Math.max(n,mT*(1-i)):-1,u=this.state.model,d={buffer:mT,outlineBuffer:l,gamma:n,enabled:!!t,outlineColor:c},f={contentCutoffPixels:a,contentAlignHorizontal:o,contentAlignVertical:s,fontSize:r,viewport:this.context.viewport};if(u.shaderInputs.setProps({sdf:d,text:f}),super.draw(e),t&&i){let{iconManager:e}=this.state;if(e.getTexture()){let e=this.state.fillModel||u;e.shaderInputs.setProps({sdf:{...d,outlineBuffer:mT},text:f}),this._drawModel(e)}}}calculateInstanceIconDefs(e,{startRow:t,endRow:n}){let{data:r,getIcon:i,getIconOffsets:a}=this.props,o=e.getVertexOffset(t),s=e.value,{iterable:c,objectInfo:l}=Sv(r,t,n);for(let t of c){l.index++;let n=i(t,l),r=a(t,l);if(n){let t=0;for(let i of Array.from(n)){let n=super.getInstanceIconDef(i);n[0]=r[t*2],n[1]+=r[t*2+1],n[6]=1,s.set(n,o),o+=e.size,t++}}}}};gT.defaultProps=hT,gT.layerName=`MultiIconLayer`;var _T=0x56bc75e2d63100000,vT=new Float64Array(256);for(let e=0;e<256;e++){let t=.5-(e/255)**(1/2.2);vT[e]=t*Math.abs(t)}vT[255]=-0x56bc75e2d63100000;var yT=class{constructor({fontSize:e=24,buffer:t=3,radius:n=8,cutoff:r=.25,fontFamily:i=`sans-serif`,fontWeight:a=`normal`,fontStyle:o=`normal`,lang:s=null}={}){t=this.buffer=Math.round(t),this.radius=n,this.cutoff=r,this.lang=s;let c=this.size=Math.ceil(e)+t*4,l=this._createCanvas(c),u=this.ctx=l.getContext(`2d`,{willReadFrequently:!0});u.font=`${o} ${a} ${e}px ${i}`,u.textBaseline=`alphabetic`,u.textAlign=`left`,u.fillStyle=`black`,s&&(u.lang=s);let d=(this.maxGlyphDim=c-t)+2*t;this.gridOuter=new Float64Array(d*d),this.gridInner=new Float64Array(d*d),this.f=new Float64Array(d),this.z=new Float64Array(d+1),this.v=new Uint16Array(d)}_createCanvas(e){if(typeof OffscreenCanvas<`u`)return new OffscreenCanvas(e,e);let t=document.createElement(`canvas`);return t.width=t.height=e,t}draw(e){let{width:t,actualBoundingBoxAscent:n,actualBoundingBoxDescent:r,actualBoundingBoxLeft:i,actualBoundingBoxRight:a}=this.ctx.measureText(e),o=Math.ceil(n),s=Math.floor(-i),c=Math.max(0,Math.min(this.maxGlyphDim,Math.ceil(a)-s)),l=Math.max(0,Math.min(this.maxGlyphDim,o+Math.ceil(r))),u=c+2*this.buffer,d=l+2*this.buffer,f=u*d,p=new Uint8ClampedArray(f),m={data:p,width:u,height:d,glyphWidth:c,glyphHeight:l,glyphTop:o,glyphLeft:s,glyphAdvance:t};if(c===0||l===0)return m;let{ctx:h,buffer:g,gridInner:_,gridOuter:v}=this;h.clearRect(g,g,c,l),h.fillText(e,g-s,g+o);let y=h.getImageData(g,g,c,l);v.fill(_T,0,f),_.fill(0,0,f);let b=3;for(let e=0;e<l;e++){let t=(e+g)*u+g;for(let e=0;e<c;e++,b+=4,t++){let e=y.data[b];if(e===0)continue;let n=vT[e];v[t]=Math.max(0,n),_[t]=Math.max(0,-n)}}bT(v,0,0,u,d,u,this.f,this.v,this.z,g);let x=Math.min(g,1);bT(_,g-x,g-x,c+2*x,l+2*x,u,this.f,this.v,this.z);let S=255/this.radius,C=255*(1-this.cutoff);for(let e=0;e<f;e++){let t=Math.sqrt(v[e])-Math.sqrt(_[e]);p[e]=C-S*t}return m}};function bT(e,t,n,r,i,a,o,s,c,l=0){for(let u=t+l;u<t+r-l;u++)xT(e,n*a+u,a,i,o,s,c);for(let l=n;l<n+i;l++)xT(e,l*a+t,1,r,o,s,c)}function xT(e,t,n,r,i,a,o){a[0]=0,o[0]=-0x56bc75e2d63100000,o[1]=_T,i[0]=e[t];for(let s=1,c=0;s<r;s++){let r=i[s]=e[t+s*n],l=s*s,u;do{let e=a[c];u=(r-i[e]+l-e*e)/(s-e)/2}while(u<=o[c]&&--c>-1);c++,a[c]=s,o[c]=u,o[c+1]=_T}for(let s=0,c=0;s<r;s++){for(;o[c+1]<s;)c++;let r=a[c],l=s-r;e[t+s*n]=i[r]+l*l}}var ST=32,CT=[];function wT(e){return 2**Math.ceil(Math.log2(e))}function TT({characterSet:e,measureText:t,buffer:n,maxCanvasWidth:r,mapping:i={},xOffset:a=0,yOffsetMin:o=0,yOffsetMax:s=0}){let c=a,l=o,u=s;for(let a of e)if(!i[a]){let{advance:e,width:o,ascent:s,descent:d}=t(a),f=s+d;c+o+n*2>r&&(c=0,l=u),i[a]={x:c+n,y:l+n,width:o,height:f,advance:e,anchorX:o/2,anchorY:s},c+=o+n*2,u=Math.max(u,l+f+n*2)}return{mapping:i,xOffset:c,yOffsetMin:l,yOffsetMax:u,canvasHeight:wT(u)}}function ET(e,t,n,r){let i=0;for(let a=t;a<n;a++){let t=e[a];i+=r[t]?.advance||0}return i}function DT(e,t,n,r,i,a){let o=t,s=0;for(let c=t;c<n;c++){let t=ET(e,c,c+1,i);s+t>r&&(o<c&&a.push(c),o=c,s=0),s+=t}return s}function OT(e,t,n,r,i,a){let o=t,s=t,c=t,l=0;for(let u=t;u<n;u++)if((e[u]===` `||e[u+1]===` `||u+1===n)&&(c=u+1),c>s){let t=ET(e,s,c,i);l+t>r&&(o<s&&(a.push(s),o=s,l=0),t>r&&(t=DT(e,s,c,r,i,a),o=a[a.length-1])),s=c,l+=t}return l}function kT(e,t,n,r,i=0,a){a===void 0&&(a=e.length);let o=[];return t===`break-all`?DT(e,i,a,n,r,o):OT(e,i,a,n,r,o),o}function AT(e,t,n,r,i,a){let o=0,s=0;for(let i=t;i<n;i++){let t=r[e[i]];t&&(s=Math.max(s,t.height))}for(let a=t;a<n;a++){let t=e[a],n=r[t];n?(i[a]=o+n.anchorX,o+=n.advance):(z.warn(`Missing character: ${t} (${t.codePointAt(0)})`)(),i[a]=o,o+=ST)}a[0]=o,a[1]=s}function jT(e,t,n,r,i,a){let o=Array.from(e),s=o.length,c=Array(s),l=Array(s),u=Array(s),d=(r===`break-word`||r===`break-all`)&&isFinite(i)&&i>0,f=[0,0],p=[0,0],m=0,h=t+n/2,g=0,_=0;for(let e=0;e<=s;e++){let t=o[e];if((t===`
`||e===s)&&(_=e),_>g){let e=d?kT(o,r,i,a,g,_):CT;for(let t=0;t<=e.length;t++){let r=t===0?g:e[t-1],i=t<e.length?e[t]:_;AT(o,r,i,a,c,p);for(let e=r;e<i;e++)l[e]=h,u[e]=p[0];m++,h+=n,f[0]=Math.max(f[0],p[0])}g=_}t===`
`&&(c[g]=0,l[g]=0,u[g]=0,g++)}return f[1]=m*n,{x:c,y:l,rowWidth:u,size:f}}function MT({value:e,length:t,stride:n,offset:r,startIndices:i,characterSet:a}){let o=e.BYTES_PER_ELEMENT,s=n?n/o:1,c=r?r/o:0,l=i[t]||Math.ceil((e.length-c)/s),u=a&&new Set,d=Array(t),f=e;if(s>1||c>0){let t=e.constructor;f=new t(l);for(let t=0;t<l;t++)f[t]=e[t*s+c]}for(let e=0;e<t;e++){let t=i[e],n=i[e+1]||l,r=f.subarray(t,n);d[e]=String.fromCodePoint.apply(null,r),u&&r.forEach(u.add,u)}if(u)for(let e of u)a.add(String.fromCodePoint(e));return{texts:d,characterCount:l}}var NT=class{constructor(e=5){this._cache={},this._order=[],this.limit=e}get(e){let t=this._cache[e];return t&&(this._deleteOrder(e),this._appendOrder(e)),t}set(e,t){this._cache[e]?(this.delete(e),this._cache[e]=t,this._appendOrder(e)):(Object.keys(this._cache).length===this.limit&&this.delete(this._order[0]),this._cache[e]=t,this._appendOrder(e))}delete(e){this._cache[e]&&(delete this._cache[e],this._deleteOrder(e))}_deleteOrder(e){let t=this._order.indexOf(e);t>=0&&this._order.splice(t,1)}_appendOrder(e){this._order.push(e)}};function PT(){let e=[];for(let t=32;t<128;t++)e.push(String.fromCharCode(t));return e}var FT={fontFamily:`Monaco, monospace`,fontWeight:`normal`,characterSet:PT(),fontSize:64,buffer:4,sdf:!1,cutoff:.25,radius:12,smoothing:.1},IT=1024,LT=.9,RT=.3,zT=3,BT=new NT(zT);function VT(e,t){let n;n=typeof t==`string`?new Set(Array.from(t)):new Set(t);let r=BT.get(e);if(!r)return n;for(let e in r.mapping)n.has(e)&&n.delete(e);return n}function HT(e,t){for(let n=0;n<e.length;n++)t.data[4*n+3]=e[n]}function UT(e,t,n,r){e.font=`${r} ${n}px ${t}`,e.fillStyle=`#000`,e.textBaseline=`alphabetic`,e.textAlign=`left`}function WT(e,t,n){if(n===void 0){let n=e.measureText(`A`);return n.fontBoundingBoxAscent?{advance:0,width:0,ascent:Math.ceil(n.fontBoundingBoxAscent),descent:Math.ceil(n.fontBoundingBoxDescent)}:{advance:0,width:0,ascent:t*LT,descent:t*RT}}let r=e.measureText(n);return r.actualBoundingBoxAscent?{advance:r.width,width:Math.ceil(r.actualBoundingBoxRight-r.actualBoundingBoxLeft),ascent:Math.ceil(r.actualBoundingBoxAscent),descent:Math.ceil(r.actualBoundingBoxDescent)}:{advance:r.width,width:r.width,ascent:t*LT,descent:t*RT}}function GT(e){z.assert(Number.isFinite(e)&&e>=zT,`Invalid cache limit`),BT=new NT(e)}var KT=class{constructor(){this.props={...FT}}get atlas(){return this._atlas}get mapping(){return this._atlas&&this._atlas.mapping}setProps(e={}){Object.assign(this.props,e),e._getFontRenderer&&(this._getFontRenderer=e._getFontRenderer),this._key=this._getKey();let t=VT(this._key,this.props.characterSet),n=BT.get(this._key);if(n&&t.size===0){this._atlas!==n&&(this._atlas=n);return}let r=this._generateFontAtlas(t,n);this._atlas=r,BT.set(this._key,r)}_generateFontAtlas(e,t){let{fontFamily:n,fontWeight:r,fontSize:i,buffer:a,sdf:o,radius:s,cutoff:c}=this.props,l=t&&t.data;l||(l=document.createElement(`canvas`),l.width=IT);let u=l.getContext(`2d`,{willReadFrequently:!0});UT(u,n,i,r);let d=e=>WT(u,i,e),f;this._getFontRenderer?f=this._getFontRenderer(this.props):o&&(f={measure:d,draw:qT(this.props)});let{mapping:p,canvasHeight:m,xOffset:h,yOffsetMin:g,yOffsetMax:_}=TT({measureText:e=>f?f.measure(e):d(e),buffer:a,characterSet:e,maxCanvasWidth:IT,...t&&{mapping:t.mapping,xOffset:t.xOffset,yOffsetMin:t.yOffsetMin,yOffsetMax:t.yOffsetMax}});if(l.height!==m){let e=l.height>0?u.getImageData(0,0,l.width,l.height):null;l.height=m,e&&u.putImageData(e,0,0)}if(UT(u,n,i,r),f)for(let t of e){let e=p[t],n=e.width,{data:r,left:i=0,top:a=0}=f.draw(t),o=e.x-i,s=e.y-a,c=Math.max(0,Math.round(o)),d=Math.max(0,Math.round(s)),m=Math.min(r.width,l.width-c),h=Math.min(r.height,l.height-d);u.putImageData(r,c,d,0,0,m,h),e.x=c,e.y=d,e.width=m,e.height=h,e.anchorX+=m/2-i-n/2,e.anchorY+=a}else for(let t of e){let e=p[t];u.fillText(t,e.x,e.y+e.anchorY)}let v=f?f.measure():d();return{baselineOffset:(v.ascent-v.descent)/2,xOffset:h,yOffsetMin:g,yOffsetMax:_,mapping:p,data:l,width:l.width,height:l.height}}_getKey(){let{fontFamily:e,fontWeight:t,fontSize:n,buffer:r,sdf:i,radius:a,cutoff:o}=this.props;return i?`${e} ${t} ${n} ${r} ${a} ${o}`:`${e} ${t} ${n} ${r}`}};function qT({fontSize:e,buffer:t,radius:n,cutoff:r,fontFamily:i,fontWeight:a}){let o=new yT({fontSize:e,buffer:t,radius:n,cutoff:r,fontFamily:i,fontWeight:`${a}`});return e=>{let{data:n,width:r,height:i}=o.draw(e),a=new ImageData(r,i);return HT(n,a),{data:a,left:t,top:t}}}var JT=`struct TextBackgroundUniforms {
  billboard: f32,
  sizeScale: f32,
  sizeMinPixels: f32,
  sizeMaxPixels: f32,
  borderRadius: vec4<f32>,
  padding: vec4<f32>,
  sizeUnits: i32,
  stroked: f32,
};

@group(0) @binding(auto) var<uniform> textBackground: TextBackgroundUniforms;
`,YT=`layout(std140) uniform textBackgroundUniforms {
  bool billboard;
  float sizeScale;
  float sizeMinPixels;
  float sizeMaxPixels;
  vec4 borderRadius;
  vec4 padding;
  highp int sizeUnits;
  bool stroked;
} textBackground;
`,XT={name:`textBackground`,source:JT,vs:YT,fs:YT,uniformTypes:{billboard:`f32`,sizeScale:`f32`,sizeMinPixels:`f32`,sizeMaxPixels:`f32`,borderRadius:`vec4<f32>`,padding:`vec4<f32>`,sizeUnits:`i32`,stroked:`f32`}},ZT=`#version 300 es
#define SHADER_NAME text-background-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in vec4 instanceRects;
in vec4 instanceClipRect;
in float instanceSizes;
in float instanceAngles;
in vec2 instancePixelOffsets;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
out vec4 vFillColor;
out vec4 vLineColor;
out float vLineWidth;
out vec2 uv;
out vec2 dimensions;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = radians(angle);
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = picking_getPickingColorFromInstanceID();
uv = positions;
vLineWidth = instanceLineWidths;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * textBackground.sizeScale, textBackground.sizeUnits),
textBackground.sizeMinPixels, textBackground.sizeMaxPixels
);
float instanceScale = sizePixels / text.fontSize;
dimensions = instanceRects.zw * instanceScale + textBackground.padding.xy + textBackground.padding.zw;
vec2 pixelOffset = (positions * instanceRects.zw + instanceRects.xy) * instanceScale + mix(-textBackground.padding.xy, textBackground.padding.zw, positions);
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles);
pixelOffset += instancePixelOffsets;
pixelOffset.y *= -1.0;
vec2 xy = project_size_to_pixel(instanceClipRect.xy);
vec2 wh = project_size_to_pixel(instanceClipRect.zw);
if (text.flipY) {
xy.y = -xy.y - wh.y;
}
if (instanceClipRect.z >= 0.0) {
dimensions.x = wh.x;
pixelOffset.x = xy.x + uv.x * wh.x + mix(-textBackground.padding.x, textBackground.padding.z, uv.x);
}
if (instanceClipRect.w >= 0.0) {
dimensions.y = wh.y;
pixelOffset.y = xy.y + uv.y * wh.y + mix(-textBackground.padding.y, textBackground.padding.w, uv.y);
}
if (textBackground.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
if (text.flipY) {
offset_common.y *= -1.;
}
DECKGL_FILTER_SIZE(offset_common, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vFillColor, geometry);
vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`,QT=`#version 300 es
#define SHADER_NAME text-background-layer-fragment-shader
precision highp float;
in vec4 vFillColor;
in vec4 vLineColor;
in float vLineWidth;
in vec2 uv;
in vec2 dimensions;
out vec4 fragColor;
float round_rect(vec2 p, vec2 size, vec4 radii) {
vec2 pixelPositionCB = (p - 0.5) * size;
vec2 sizeCB = size * 0.5;
float maxBorderRadius = min(size.x, size.y) * 0.5;
vec4 borderRadius = vec4(min(radii, maxBorderRadius));
borderRadius.xy =
(pixelPositionCB.x > 0.0) ? borderRadius.xy : borderRadius.zw;
borderRadius.x = (pixelPositionCB.y > 0.0) ? borderRadius.x : borderRadius.y;
vec2 q = abs(pixelPositionCB) - sizeCB + borderRadius.x;
return -(min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - borderRadius.x);
}
float rect(vec2 p, vec2 size) {
vec2 pixelPosition = p * size;
return min(min(pixelPosition.x, size.x - pixelPosition.x),
min(pixelPosition.y, size.y - pixelPosition.y));
}
vec4 get_stroked_fragColor(float dist) {
float isBorder = smoothedge(dist, vLineWidth);
return mix(vFillColor, vLineColor, isBorder);
}
void main(void) {
geometry.uv = uv;
if (textBackground.borderRadius != vec4(0.0)) {
float distToEdge = round_rect(uv, dimensions, textBackground.borderRadius);
float shapeAlpha = smoothedge(-distToEdge, 0.0);
if (shapeAlpha == 0.0) {
discard;
}
if (textBackground.stroked) {
fragColor = get_stroked_fragColor(distToEdge);
} else {
fragColor = vFillColor;
}
fragColor.a *= shapeAlpha;
} else {
if (textBackground.stroked) {
float distToEdge = rect(uv, dimensions);
fragColor = get_stroked_fragColor(distToEdge);
} else {
fragColor = vFillColor;
}
}
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,$T=`struct TextUniforms {
  cutoffPixels: vec2<f32>,
  align: vec2<i32>,
  fontSize: f32,
  flipY: f32,
};

@group(0) @binding(auto) var<uniform> text: TextUniforms;

fn rotate_by_angle(vertex: vec2<f32>, angle: f32) -> vec2<f32> {
  let angleRadian = radians(angle);
  let cosine = cos(angleRadian);
  let sine = sin(angleRadian);
  let rotationMatrix = mat2x2<f32>(
    vec2<f32>(cosine, -sine),
    vec2<f32>(sine, cosine)
  );
  return rotationMatrix * vertex;
}

struct Attributes {
  @builtin(instance_index) instanceIndex: u32,
  @location(0) positions: vec2<f32>,
  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceSizes: f32,
  @location(4) instanceAngles: f32,
  @location(5) instanceRects: vec4<f32>,
  @location(6) instanceClipRect: vec4<f32>,
  @location(7) instancePixelOffsets: vec2<f32>,
  @location(8) instanceFillColors: vec4<f32>,
  @location(9) instanceLineColors: vec4<f32>,
  @location(10) instanceLineWidths: f32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vFillColor: vec4<f32>,
  @location(1) vLineColor: vec4<f32>,
  @location(2) vLineWidth: f32,
  @location(3) uv: vec2<f32>,
  @location(4) dimensions: vec2<f32>,
  @location(5) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  geometry.worldPosition = attributes.instancePositions;
  geometry.uv = attributes.positions;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.instanceIndex);

  var varyings: Varyings;
  varyings.uv = attributes.positions;
  varyings.vLineWidth = attributes.instanceLineWidths;

  let sizePixels = clamp(
    project_unit_size_to_pixel(
      attributes.instanceSizes * textBackground.sizeScale,
      textBackground.sizeUnits
    ),
    textBackground.sizeMinPixels,
    textBackground.sizeMaxPixels
  );
  let instanceScale = sizePixels / text.fontSize;

  varyings.dimensions = attributes.instanceRects.zw * instanceScale +
    textBackground.padding.xy + textBackground.padding.zw;

  var pixelOffset =
    (attributes.positions * attributes.instanceRects.zw + attributes.instanceRects.xy) *
      instanceScale +
    mix(-textBackground.padding.xy, textBackground.padding.zw, attributes.positions);
  pixelOffset = rotate_by_angle(pixelOffset, attributes.instanceAngles);
  pixelOffset = pixelOffset + attributes.instancePixelOffsets;
  pixelOffset.y = pixelOffset.y * -1.0;

  var xy = project_size_vec2(attributes.instanceClipRect.xy) * project.scale;
  let wh = project_size_vec2(attributes.instanceClipRect.zw) * project.scale;
  if (text.flipY > 0.5) {
    xy.y = -xy.y - wh.y;
  }
  if (attributes.instanceClipRect.z >= 0.0) {
    varyings.dimensions.x = wh.x;
    pixelOffset.x = xy.x + varyings.uv.x * wh.x + mix(
      -textBackground.padding.x,
      textBackground.padding.z,
      varyings.uv.x
    );
  }
  if (attributes.instanceClipRect.w >= 0.0) {
    varyings.dimensions.y = wh.y;
    pixelOffset.y = xy.y + varyings.uv.y * wh.y + mix(
      -textBackground.padding.y,
      textBackground.padding.w,
      varyings.uv.y
    );
  }

  if (textBackground.billboard > 0.5) {
    var position = project_position_to_clipspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      vec3<f32>(0.0)
    );
    let clipOffset = project_pixel_size_to_clipspace(pixelOffset);
    position = vec4<f32>(
      position.x + clipOffset.x,
      position.y + clipOffset.y,
      position.z,
      position.w
    );
    varyings.position = position;
  } else {
    var offsetCommon = vec3<f32>(project_pixel_size_vec2(pixelOffset), 0.0);
    if (text.flipY > 0.5) {
      offsetCommon.y = offsetCommon.y * -1.0;
    }
    varyings.position = project_position_to_clipspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      offsetCommon
    );
  }

  varyings.vFillColor = vec4<f32>(
    attributes.instanceFillColors.rgb,
    attributes.instanceFillColors.a * layer.opacity
  );
  varyings.vLineColor = vec4<f32>(
    attributes.instanceLineColors.rgb,
    attributes.instanceLineColors.a * layer.opacity
  );
  varyings.pickingColor = geometry.pickingColor;
  return varyings;
}

fn round_rect(point: vec2<f32>, size: vec2<f32>, radii: vec4<f32>) -> f32 {
  let pixelPosition = (point - 0.5) * size;
  let halfSize = size * 0.5;
  let maxBorderRadius = min(size.x, size.y) * 0.5;
  var borderRadius = min(radii, vec4<f32>(maxBorderRadius));

  borderRadius = select(borderRadius.zwxy, borderRadius, pixelPosition.x > 0.0);
  let radius = select(borderRadius.y, borderRadius.x, pixelPosition.y > 0.0);
  let q = abs(pixelPosition) - halfSize + radius;
  return -(min(max(q.x, q.y), 0.0) + length(max(q, vec2<f32>(0.0))) - radius);
}

fn rect(point: vec2<f32>, size: vec2<f32>) -> f32 {
  let pixelPosition = point * size;
  return min(
    min(pixelPosition.x, size.x - pixelPosition.x),
    min(pixelPosition.y, size.y - pixelPosition.y)
  );
}

fn get_stroked_frag_color(
  distanceToEdge: f32,
  lineWidth: f32,
  fillColor: vec4<f32>,
  lineColor: vec4<f32>
) -> vec4<f32> {
  let isBorder = smoothedge(distanceToEdge, lineWidth);
  return mix(fillColor, lineColor, isBorder);
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = varyings.uv;
  var fragColor: vec4<f32>;

  if (any(textBackground.borderRadius != vec4<f32>(0.0))) {
    let distanceToEdge = round_rect(
      varyings.uv,
      varyings.dimensions,
      textBackground.borderRadius
    );
    let shapeAlpha = smoothedge(-distanceToEdge, 0.0);
    if (shapeAlpha == 0.0) {
      discard;
    }
    if (textBackground.stroked > 0.5) {
      fragColor = get_stroked_frag_color(
        distanceToEdge,
        varyings.vLineWidth,
        varyings.vFillColor,
        varyings.vLineColor
      );
    } else {
      fragColor = varyings.vFillColor;
    }
    fragColor.a = fragColor.a * shapeAlpha;
  } else if (textBackground.stroked > 0.5) {
    let distanceToEdge = rect(varyings.uv, varyings.dimensions);
    fragColor = get_stroked_frag_color(
      distanceToEdge,
      varyings.vLineWidth,
      varyings.vFillColor,
      varyings.vLineColor
    );
  } else {
    fragColor = varyings.vFillColor;
  }

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedObjectColor))) {
      let highlightAlpha = picking.highlightColor.a;
      let blendedAlpha = highlightAlpha + fragColor.a * (1.0 - highlightAlpha);
      if (blendedAlpha > 0.0) {
        let highlightRatio = highlightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highlightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return deckgl_premultiplied_alpha(fragColor);
}
`,eE={billboard:!0,sizeScale:1,sizeUnits:`pixels`,sizeMinPixels:0,sizeMaxPixels:2**53-1,fontSize:1,borderRadius:{type:`object`,value:0},padding:{type:`array`,value:[0,0,0,0]},getPosition:{type:`accessor`,value:e=>e.position},getSize:{type:`accessor`,value:1},getAngle:{type:`accessor`,value:0},getPixelOffset:{type:`accessor`,value:[0,0]},getBoundingRect:{type:`accessor`,value:[0,0,0,0]},getClipRect:{type:`accessor`,value:[0,0,-1,-1]},getFillColor:{type:`accessor`,value:[0,0,0,255]},getLineColor:{type:`accessor`,value:[0,0,0,255]},getLineWidth:{type:`accessor`,value:1}},tE=class extends aS{getShaders(){return super.getShaders({vs:ZT,fs:QT,source:$T,modules:[su,Ks,ad,XT,lT]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:`float64`,fp64:this.use64bitPositions(),transition:!0,accessor:`getPosition`},instanceSizes:{size:1,transition:!0,bufferGroup:`text-background-instance-data`,accessor:`getSize`,defaultValue:1},instanceAngles:{size:1,transition:!0,bufferGroup:`text-background-instance-data`,accessor:`getAngle`},instanceRects:{size:4,bufferGroup:`text-background-instance-data`,accessor:`getBoundingRect`},instanceClipRect:{size:4,bufferGroup:`text-background-instance-data`,accessor:`getClipRect`,defaultValue:[0,0,-1,-1]},instancePixelOffsets:{size:2,transition:!0,bufferGroup:`text-background-instance-data`,accessor:`getPixelOffset`},instanceFillColors:{size:4,transition:!0,type:`unorm8`,accessor:`getFillColor`,defaultValue:[0,0,0,255]},instanceLineColors:{size:4,transition:!0,type:`unorm8`,accessor:`getLineColor`,defaultValue:[0,0,0,255]},instanceLineWidths:{size:1,transition:!0,bufferGroup:`text-background-instance-data`,accessor:`getLineWidth`,defaultValue:1}})}updateState(e){super.updateState(e);let{changeFlags:t}=e;t.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){let{billboard:t,sizeScale:n,sizeUnits:r,sizeMinPixels:i,sizeMaxPixels:a,getLineWidth:o,fontSize:s}=this.props,{padding:c,borderRadius:l}=this.props;c.length<4&&(c=[c[0],c[1],c[0],c[1]]),Array.isArray(l)||(l=[l,l,l,l]);let u=this.state.model,d={billboard:t,stroked:!!o,borderRadius:l,padding:c,sizeUnits:zl[r],sizeScale:n,sizeMinPixels:i,sizeMaxPixels:a},f={fontSize:s,viewport:this.context.viewport};u.shaderInputs.setProps({textBackground:d,text:f}),u.draw(this.context.renderPass)}_getModel(){let e=[0,0,1,0,0,1,1,1];return new Vf(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new $d({topology:`triangle-strip`,vertexCount:4,attributes:{positions:{size:2,value:new Float32Array(e)}}}),isInstanced:!0})}};tE.defaultProps=eE,tE.layerName=`TextBackgroundLayer`;var nE={start:1,middle:0,end:-1},rE={top:1,center:0,bottom:-1},iE=[0,0,0,255],aE={billboard:!0,sizeScale:1,sizeUnits:`pixels`,sizeMinPixels:0,sizeMaxPixels:2**53-1,background:!1,getBackgroundColor:{type:`accessor`,value:[255,255,255,255]},getBorderColor:{type:`accessor`,value:iE},getBorderWidth:{type:`accessor`,value:0},backgroundBorderRadius:{type:`object`,value:0},backgroundPadding:{type:`array`,value:[0,0,0,0]},characterSet:{type:`object`,value:FT.characterSet},fontFamily:FT.fontFamily,fontWeight:FT.fontWeight,lineHeight:1,outlineWidth:{type:`number`,value:0,min:0},outlineColor:{type:`color`,value:iE},fontSettings:{type:`object`,value:{},compare:1},wordBreak:`break-word`,maxWidth:{type:`number`,value:-1},contentCutoffPixels:{type:`array`,value:[0,0]},contentAlignHorizontal:`none`,contentAlignVertical:`none`,getText:{type:`accessor`,value:e=>e.text},getPosition:{type:`accessor`,value:e=>e.position},getColor:{type:`accessor`,value:iE},getSize:{type:`accessor`,value:32},getAngle:{type:`accessor`,value:0},getTextAnchor:{type:`accessor`,value:`middle`},getAlignmentBaseline:{type:`accessor`,value:`center`},getPixelOffset:{type:`accessor`,value:[0,0]},getContentBox:{type:`accessor`,value:[0,0,-1,-1]},backgroundColor:{deprecatedFor:[`background`,`getBackgroundColor`]}},oE=class extends dS{constructor(){super(...arguments),this.getBoundingRect=(e,t)=>{let{size:[n,r]}=this.transformParagraph(e,t),{getTextAnchor:i,getAlignmentBaseline:a}=this.props,o=nE[typeof i==`function`?i(e,t):i],s=rE[typeof a==`function`?a(e,t):a];return[(o-1)*n/2,(s-1)*r/2,n,r]},this.getIconOffsets=(e,t)=>{let{getTextAnchor:n,getAlignmentBaseline:r}=this.props,{x:i,y:a,rowWidth:o,size:[,s]}=this.transformParagraph(e,t),c=nE[typeof n==`function`?n(e,t):n],l=rE[typeof r==`function`?r(e,t):r],u=i.length,d=Array(u*2),f=0;for(let e=0;e<u;e++)d[f++]=(c-1)*o[e]/2+i[e],d[f++]=(l-1)*s/2+a[e];return d}}initializeState(){this.state={styleVersion:0,fontAtlasManager:new KT},this.props.maxWidth>0&&z.once(1,`v8.9 breaking change: TextLayer maxWidth is now relative to text size`)()}updateState(e){let{props:t,oldProps:n,changeFlags:r}=e;(r.dataChanged||r.updateTriggersChanged&&(r.updateTriggersChanged.all||r.updateTriggersChanged.getText))&&this._updateText(),(this._updateFontAtlas()||t.lineHeight!==n.lineHeight||t.wordBreak!==n.wordBreak||t.maxWidth!==n.maxWidth)&&this.setState({styleVersion:this.state.styleVersion+1})}getPickingInfo({info:e}){return e.object=e.index>=0?this.props.data[e.index]:null,e}_updateFontAtlas(){let{fontSettings:e,fontFamily:t,fontWeight:n,_getFontRenderer:r}=this.props,{fontAtlasManager:i,characterSet:a}=this.state,o={...e,characterSet:a,fontFamily:t,fontWeight:n,_getFontRenderer:r};if(!i.mapping)return i.setProps(o),!0;for(let e in o)if(o[e]!==i.props[e])return i.setProps(o),!0;return!1}_updateText(){let{data:e,characterSet:t}=this.props,n=e.attributes?.getText,{getText:r}=this.props,i=e.startIndices,a,o=t===`auto`&&new Set;if(n&&i){let{texts:t,characterCount:s}=MT({...ArrayBuffer.isView(n)?{value:n}:n,length:e.length,startIndices:i,characterSet:o});a=s,r=(e,{index:n})=>t[n]}else{let{iterable:t,objectInfo:n}=Sv(e);i=[0],a=0;for(let e of t){n.index++;let t=Array.from(r(e,n)||``);o&&t.forEach(o.add,o),a+=t.length,i.push(a)}}this.setState({getText:r,startIndices:i,numInstances:a,characterSet:o||t})}transformParagraph(e,t){let{fontAtlasManager:n}=this.state,r=n.mapping,{baselineOffset:i}=n.atlas,{fontSize:a}=n.props,o=this.state.getText,{wordBreak:s,lineHeight:c,maxWidth:l}=this.props;return jT(o(e,t)||``,i,c*a,s,l*a,r)}renderLayers(){let{startIndices:e,numInstances:t,getText:n,fontAtlasManager:{atlas:r,mapping:i},styleVersion:a}=this.state,{data:o,_dataDiff:s,getPosition:c,getColor:l,getSize:u,getAngle:d,getPixelOffset:f,getBackgroundColor:p,getBorderColor:m,getBorderWidth:h,getContentBox:g,backgroundBorderRadius:_,backgroundPadding:v,background:y,billboard:b,fontSettings:x,outlineWidth:S,outlineColor:C,sizeScale:w,sizeUnits:T,sizeMinPixels:E,sizeMaxPixels:D,contentCutoffPixels:O,contentAlignHorizontal:k,contentAlignVertical:A,transitions:j,updateTriggers:M}=this.props,N=this.getSubLayerClass(`characters`,gT),P=this.getSubLayerClass(`background`,tE),{fontSize:ee}=this.state.fontAtlasManager.props;return[y&&new P({getFillColor:p,getLineColor:m,getLineWidth:h,borderRadius:_,padding:v,getPosition:c,getSize:u,getAngle:d,getPixelOffset:f,getClipRect:g,billboard:b,sizeScale:w,sizeUnits:T,sizeMinPixels:E,sizeMaxPixels:D,fontSize:ee,transitions:j&&{getPosition:j.getPosition,getAngle:j.getAngle,getSize:j.getSize,getFillColor:j.getBackgroundColor,getLineColor:j.getBorderColor,getLineWidth:j.getBorderWidth,getPixelOffset:j.getPixelOffset}},this.getSubLayerProps({id:`background`,updateTriggers:{getPosition:M.getPosition,getAngle:M.getAngle,getSize:M.getSize,getFillColor:M.getBackgroundColor,getLineColor:M.getBorderColor,getLineWidth:M.getBorderWidth,getPixelOffset:M.getPixelOffset,getBoundingRect:{getText:M.getText,getTextAnchor:M.getTextAnchor,getAlignmentBaseline:M.getAlignmentBaseline,styleVersion:a}}}),{data:o.attributes&&o.attributes.background?{length:o.length,attributes:o.attributes.background}:o,_dataDiff:s,autoHighlight:!1,getBoundingRect:this.getBoundingRect}),new N({sdf:x.sdf,smoothing:Number.isFinite(x.smoothing)?x.smoothing:FT.smoothing,outlineWidth:S/(x.radius||FT.radius),outlineColor:C,iconAtlas:r,iconMapping:i,getPosition:c,getColor:l,getSize:u,getAngle:d,getPixelOffset:f,getContentBox:g,billboard:b,sizeScale:w,sizeUnits:T,sizeMinPixels:E,sizeMaxPixels:D,fontSize:ee,contentCutoffPixels:O,contentAlignHorizontal:k,contentAlignVertical:A,transitions:j&&{getPosition:j.getPosition,getAngle:j.getAngle,getColor:j.getColor,getSize:j.getSize,getPixelOffset:j.getPixelOffset,getContentBox:j.getContentBox}},this.getSubLayerProps({id:`characters`,updateTriggers:{all:M.getText,getPosition:M.getPosition,getAngle:M.getAngle,getColor:M.getColor,getSize:M.getSize,getPixelOffset:M.getPixelOffset,getContentBox:M.getContentBox,getIconOffsets:{getTextAnchor:M.getTextAnchor,getAlignmentBaseline:M.getAlignmentBaseline,styleVersion:a}}}),{data:o,_dataDiff:s,startIndices:e,numInstances:t,getIconOffsets:this.getIconOffsets,getIcon:n})]}static set fontAtlasCacheLimit(e){GT(e)}};oE.defaultProps=aE,oE.layerName=`TextLayer`;var sE=`struct TripsUniforms {
  fadeTrail: f32,
  trailLength: f32,
  currentTime: f32,
};

@group(0) @binding(auto)
var<uniform> trips: TripsUniforms;
`,cE=`layout(std140) uniform tripsUniforms {
  bool fadeTrail;
  float trailLength;
  float currentTime;
} trips;
`,lE={name:`trips`,source:sE,vs:cE,fs:cE,uniformTypes:{fadeTrail:`f32`,trailLength:`f32`,currentTime:`f32`}};function uE(e,t=e.length,n=!1){let r=new Float32Array(t*2);if(e.length===0)return r;let i=t>e.length,a=n?e.length:Math.max(e.length-1,1);for(let n=0;n<t;n++){let t=i?n%a:Math.min(n,e.length-1),o=i?(t+1)%a:Math.min(t+1,e.length-1);r[n*2]=e[t],r[n*2+1]=e[o]}return r}var dE={"  @location(12) rowIndexes: u32,":`
  @location(13) instanceTimestamps: vec2<f32>,`,"  @location(5) vJointType: f32,":`
  @location(6) vTime: f32,`,"    attributes.instanceColors.a * layer.opacity\n  );":`

  varyings.vTime = mix(
    attributes.instanceTimestamps.x,
    attributes.instanceTimestamps.y,
    varyings.vPathPosition.y / varyings.vPathLength
  );

  if (trips.fadeTrail > 0.5) {
    varyings.vColor.a *=
      1.0 - (trips.currentTime - varyings.vTime) / trips.trailLength;
  }`,"  // DECKGL_FILTER_COLOR":`
  if (
    varyings.vTime > trips.currentTime ||
    (trips.fadeTrail > 0.5 && varyings.vTime < trips.currentTime - trips.trailLength)
  ) {
    discard;
  }`},fE={fadeTrail:!0,trailLength:{type:`number`,value:120,min:0},currentTime:{type:`number`,value:0,min:0},getTimestamps:{type:`accessor`,value:e=>e.timestamps}},pE={"vs:#decl":`in float instanceTimestamps;
in float instanceNextTimestamps;
out float vTime;
`,"vs:#main-end":`vTime = instanceTimestamps + (instanceNextTimestamps - instanceTimestamps) * vPathPosition.y / vPathLength;
`,"fs:#decl":`in float vTime;
`,"fs:DECKGL_FILTER_COLOR":`if(vTime > trips.currentTime || (trips.fadeTrail && (vTime < trips.currentTime - trips.trailLength))) {
  discard;
}
if(trips.fadeTrail) {
  color.a *= 1.0 - (trips.currentTime - vTime) / trips.trailLength;
}
`},mE=class extends bw{getShaders(){let e=super.getShaders();return e.inject=this.context.device.type===`webgpu`?dE:pE,e.modules=[...e.modules,lE],e}initializeState(){super.initializeState(),this.getAttributeManager().addInstanced({...this.context.device.type===`webgpu`?{instanceTimestamps:{size:2,accessor:`getTimestamps`,update:this.calculateWebGPUTimestamps,bufferGroup:`path-instance-data`}}:{timestamps:{size:1,accessor:`getTimestamps`,shaderAttributes:{instanceTimestamps:{vertexOffset:0},instanceNextTimestamps:{vertexOffset:1}}}}})}calculateWebGPUTimestamps(e,{data:t,props:n}){let{pathTesselator:r}=this.state,{instanceCount:i,vertexStarts:a}=r,o=new Float32Array(i*2),{iterable:s,objectInfo:c}=Sv(t);for(let e of s){c.index++;let t=a[c.index],r=a[c.index+1]??i;if(r<=t)continue;let s=n.getTimestamps?.(e,c)??[];o.set(uE(s,r-t,n._pathType===`loop`),t*2)}e.startIndices=a,e.value=o}draw(e){let{fadeTrail:t,trailLength:n,currentTime:r}=this.props,i={fadeTrail:t,trailLength:n,currentTime:r};this.state.model.shaderInputs.setProps({trips:i}),super.draw(e)}};mE.layerName=`TripsLayer`,mE.defaultProps=fE;var hE=Math.PI/180,gE=new Float32Array(16),_E=new Float32Array(12);function vE(e,t,n){let r=t[0]*hE,i=t[1]*hE,a=t[2]*hE,o=Math.sin(a),s=Math.sin(r),c=Math.sin(i),l=Math.cos(a),u=Math.cos(r),d=Math.cos(i),f=n[0],p=n[1],m=n[2];e[0]=f*d*u,e[1]=f*c*u,e[2]=f*-s,e[3]=p*(-c*l+d*s*o),e[4]=p*(d*l+c*s*o),e[5]=p*u*o,e[6]=m*(c*o+d*s*l),e[7]=m*(-d*o+c*s*l),e[8]=m*u*l}function yE(e){return e[0]=e[0],e[1]=e[1],e[2]=e[2],e[3]=e[4],e[4]=e[5],e[5]=e[6],e[6]=e[8],e[7]=e[9],e[8]=e[10],e[9]=e[12],e[10]=e[13],e[11]=e[14],e.subarray(0,12)}var bE={size:12,accessor:[`getOrientation`,`getScale`,`getTranslation`,`getTransformMatrix`],shaderAttributes:{instanceModelMatrixCol0:{size:3,elementOffset:0},instanceModelMatrixCol1:{size:3,elementOffset:3},instanceModelMatrixCol2:{size:3,elementOffset:6},instanceTranslation:{size:3,elementOffset:9}},update(e,{startRow:t,endRow:n}){let{data:r,getOrientation:i,getScale:a,getTranslation:o,getTransformMatrix:s}=this.props,c=Array.isArray(s),l=c&&s.length===16,u=Array.isArray(a),d=Array.isArray(i),f=Array.isArray(o),p=l||!c&&!!s(r[0]);e.constant=p?l:d&&u&&f;let m=e.value;if(e.constant){let t;p?(gE.set(s),t=yE(gE)):(t=_E,vE(t,i,a),t.set(o,9)),e.value=new Float32Array(t)}else{let c=t*e.size,{iterable:h,objectInfo:g}=Sv(r,t,n);for(let e of h){g.index++;let t;if(p)gE.set(l?s:s(e,g)),t=yE(gE);else{t=_E;let n=d?i:i(e,g),r=u?a:a(e,g);vE(t,n,r),t.set(f?o:o(e,g),9)}m[c++]=t[0],m[c++]=t[1],m[c++]=t[2],m[c++]=t[3],m[c++]=t[4],m[c++]=t[5],m[c++]=t[6],m[c++]=t[7],m[c++]=t[8],m[c++]=t[9],m[c++]=t[10],m[c++]=t[11]}}}};function xE(e,t){return t===`cartesian`||t===`meter-offsets`||t==="default"&&!e.isGeospatial}var SE=`struct SimpleMeshUniforms {
  sizeScale: f32,
  composeModelMatrix: f32,
  hasTexture: f32,
  flatShading: f32,
};

@group(0) @binding(auto) var<uniform> simpleMesh: SimpleMeshUniforms;
@group(0) @binding(auto) var simpleMeshTexture: texture_2d<f32>;
@group(0) @binding(auto) var simpleMeshTextureSampler: sampler;
`,CE=`layout(std140) uniform simpleMeshUniforms {
  float sizeScale;
  bool composeModelMatrix;
  bool hasTexture;
  bool flatShading;
} simpleMesh;
`,wE={name:`simpleMesh`,source:SE,vs:CE,fs:CE,uniformTypes:{sizeScale:`f32`,composeModelMatrix:`f32`,hasTexture:`f32`,flatShading:`f32`}},TE=`#version 300 es
#define SHADER_NAME simple-mesh-layer-vs
in vec3 positions;
in vec3 normals;
in vec3 colors;
in vec2 texCoords;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in vec4 instanceColors;
in vec3 instanceModelMatrixCol0;
in vec3 instanceModelMatrixCol1;
in vec3 instanceModelMatrixCol2;
in vec3 instanceTranslation;
out vec2 vTexCoord;
out vec3 cameraPosition;
out vec3 normals_commonspace;
out vec4 position_commonspace;
out vec4 vColor;
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = texCoords;
geometry.pickingColor = picking_getPickingColorFromInstanceID();
vTexCoord = texCoords;
cameraPosition = project.cameraPosition;
vColor = vec4(colors * instanceColors.rgb, instanceColors.a);
mat3 instanceModelMatrix = mat3(instanceModelMatrixCol0, instanceModelMatrixCol1, instanceModelMatrixCol2);
vec3 pos = (instanceModelMatrix * positions) * simpleMesh.sizeScale + instanceTranslation;
if (simpleMesh.composeModelMatrix) {
DECKGL_FILTER_SIZE(pos, geometry);
normals_commonspace = project_normal(instanceModelMatrix * normals);
geometry.worldPosition += pos;
gl_Position = project_position_to_clipspace(pos + instancePositions, instancePositions64Low, vec3(0.0), position_commonspace);
geometry.position = position_commonspace;
}
else {
pos = project_size(pos);
DECKGL_FILTER_SIZE(pos, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, pos, position_commonspace);
geometry.position = position_commonspace;
normals_commonspace = project_normal(instanceModelMatrix * normals);
}
geometry.normal = normals_commonspace;
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,EE=`#version 300 es
#define SHADER_NAME simple-mesh-layer-fs
precision highp float;
uniform sampler2D sampler;
in vec2 vTexCoord;
in vec3 cameraPosition;
in vec3 normals_commonspace;
in vec4 position_commonspace;
in vec4 vColor;
out vec4 fragColor;
void main(void) {
geometry.uv = vTexCoord;
vec3 normal;
if (simpleMesh.flatShading) {
normal = normalize(cross(dFdx(position_commonspace.xyz), dFdy(position_commonspace.xyz)));
} else {
normal = normals_commonspace;
}
vec4 color = simpleMesh.hasTexture ? texture(sampler, vTexCoord) : vColor;
DECKGL_FILTER_COLOR(color, geometry);
vec3 lightColor = lighting_getLightColor(color.rgb, cameraPosition, position_commonspace.xyz, normal);
fragColor = vec4(lightColor, color.a * layer.opacity);
}
`,DE=`struct Attributes {
  @builtin(instance_index) instanceIndex: u32,
  @location(0) positions: vec3<f32>,
  @location(1) normals: vec3<f32>,
  @location(2) colors: vec3<f32>,
  @location(3) texCoords: vec2<f32>,
  @location(4) instancePositions: vec3<f32>,
  @location(5) instancePositions64Low: vec3<f32>,
  @location(6) instanceColors: vec4<f32>,
  @location(7) instanceModelMatrixCol0: vec3<f32>,
  @location(8) instanceModelMatrixCol1: vec3<f32>,
  @location(9) instanceModelMatrixCol2: vec3<f32>,
  @location(10) instanceTranslation: vec3<f32>,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) color: vec4<f32>,
  @location(1) texCoords: vec2<f32>,
  @location(2) normal: vec3<f32>,
  @location(3) positionCommon: vec3<f32>,
  @location(4) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  geometry.worldPosition = attributes.instancePositions;
  geometry.uv = attributes.texCoords;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.instanceIndex);

  let instanceModelMatrix = mat3x3<f32>(
    attributes.instanceModelMatrixCol0,
    attributes.instanceModelMatrixCol1,
    attributes.instanceModelMatrixCol2
  );
  let meshPosition =
    (instanceModelMatrix * attributes.positions) * simpleMesh.sizeScale +
    attributes.instanceTranslation;

  if (simpleMesh.composeModelMatrix > 0.5) {
    geometry.normal = project_normal(instanceModelMatrix * attributes.normals);
    geometry.worldPosition += meshPosition;
    let projected = project_position_to_clipspace_and_commonspace(
      attributes.instancePositions + meshPosition,
      attributes.instancePositions64Low,
      vec3<f32>(0.0)
    );
    geometry.position = projected.commonPosition;
    varyings.position = projected.clipPosition;
  } else {
    let projected = project_position_to_clipspace_and_commonspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      project_size_vec3(meshPosition)
    );
    geometry.position = projected.commonPosition;
    geometry.normal = project_normal(instanceModelMatrix * attributes.normals);
    varyings.position = projected.clipPosition;
  }

  varyings.color = vec4<f32>(
    attributes.colors * attributes.instanceColors.rgb,
    attributes.instanceColors.a
  );
  varyings.texCoords = attributes.texCoords;
  varyings.normal = geometry.normal;
  varyings.positionCommon = geometry.position.xyz;
  varyings.pickingColor = geometry.pickingColor;
  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = varyings.texCoords;

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }

  var color = varyings.color;
  if (simpleMesh.hasTexture > 0.5) {
    color = textureSample(simpleMeshTexture, simpleMeshTextureSampler, varyings.texCoords);
  }

  var normal = varyings.normal;
  if (simpleMesh.flatShading > 0.5) {
    // WebGPU's screen-space Y axis reverses the derivative orientation used by GLSL flat shading.
    normal = normalize(cross(dpdy(varyings.positionCommon), dpdx(varyings.positionCommon)));
  }

  color = vec4<f32>(
    lighting_getLightColor2(color.rgb, project.cameraPosition, varyings.positionCommon, normal),
    color.a * layer.opacity
  );

  if (picking.isHighlightActive > 0.5) {
    let highlightedColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedColor))) {
      let blendedAlpha = picking.highlightColor.a + color.a * (1.0 - picking.highlightColor.a);
      if (blendedAlpha > 0.0) {
        color = vec4<f32>(
          mix(color.rgb, picking.highlightColor.rgb, picking.highlightColor.a / blendedAlpha),
          blendedAlpha
        );
      }
    }
  }

  return deckgl_premultiplied_alpha(color);
}
`;function OE(e){let t=1/0,n=1/0,r=1/0,i=-1/0,a=-1/0,o=-1/0,s=e.POSITION?e.POSITION.value:[],c=s&&s.length;for(let e=0;e<c;e+=3){let c=s[e],l=s[e+1],u=s[e+2];t=c<t?c:t,n=l<n?l:n,r=u<r?u:r,i=c>i?c:i,a=l>a?l:a,o=u>o?u:o}return[[t,n,r],[i,a,o]]}function kE(e){let t=e.positions||e.POSITION;z.assert(t,`no "postions" or "POSITION" attribute in mesh`);let n=t.value.length/t.size,r=e.COLOR_0||e.colors;r||={size:3,value:new Float32Array(n*3).fill(1)};let i=e.NORMAL||e.normals;i||={size:3,value:new Float32Array(n*3).fill(0)};let a=e.TEXCOORD_0||e.texCoords;return a||={size:2,value:new Float32Array(n*2).fill(0)},{positions:t,colors:r,normals:i,texCoords:a}}function AE(e){return e instanceof $d?(e.attributes=kE(e.attributes),e):e.attributes?new $d({...e,topology:`triangle-list`,attributes:kE(e.attributes)}):new $d({topology:`triangle-list`,attributes:kE(e)})}var jE={mesh:{type:`object`,value:null,async:!0},texture:{type:`image`,value:null,async:!0},sizeScale:{type:`number`,value:1,min:0},_instanced:!0,wireframe:!1,material:!0,getPosition:{type:`accessor`,value:e=>e.position},getColor:{type:`accessor`,value:[0,0,0,255]},getOrientation:{type:`accessor`,value:[0,0,0]},getScale:{type:`accessor`,value:[1,1,1]},getTranslation:{type:`accessor`,value:[0,0,0]},getTransformMatrix:{type:`accessor`,value:[]},textureParameters:{type:`object`,ignore:!0,value:null}},ME=class extends aS{getShaders(){return super.getShaders({vs:TE,fs:EE,source:DE,modules:[su,Ks,Hs,ad,wE]})}getBounds(){if(this.props._instanced)return super.getBounds();let e=this.state.positionBounds;if(e)return e;let{mesh:t}=this.props;if(!t)return null;if(e=t.header?.boundingBox,!e){let{attributes:n}=AE(t);n.POSITION=n.POSITION||n.positions,e=OE(n)}return this.state.positionBounds=e,e}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{transition:!0,type:`float64`,fp64:this.use64bitPositions(),size:3,accessor:`getPosition`},instanceColors:{type:`unorm8`,transition:!0,size:this.props.colorFormat.length,accessor:`getColor`,defaultValue:[0,0,0,255]},instanceModelMatrix:bE}),this.setState({emptyTexture:this.context.device.createTexture({data:new Uint8Array(4),width:1,height:1})})}updateState(e){super.updateState(e);let{props:t,oldProps:n,changeFlags:r}=e;if(t.mesh!==n.mesh||r.extensionsChanged){if(this.state.positionBounds=null,this.state.model?.destroy(),t.mesh){this.state.model=this.getModel(t.mesh);let e=t.mesh.attributes||t.mesh;this.setState({hasNormals:!!(e.NORMAL||e.normals)})}this.getAttributeManager().invalidateAll()}t.texture!==n.texture&&t.texture instanceof I&&this.setTexture(t.texture),this.state.model&&this.state.model.setTopology(this.props.wireframe?`line-strip`:`triangle-list`)}finalizeState(e){super.finalizeState(e),this.state.emptyTexture.delete()}draw({uniforms:e}){let{model:t}=this.state;if(!t)return;let{viewport:n,renderPass:r}=this.context,{sizeScale:i,coordinateSystem:a,_instanced:o}=this.props,s={sizeScale:i,composeModelMatrix:!o||xE(n,a),flatShading:!this.state.hasNormals};t.shaderInputs.setProps({simpleMesh:s}),t.draw(r)}get isLoaded(){return!!(this.state?.model&&super.isLoaded)}getModel(e){let t=new Vf(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:AE(e),isInstanced:!0});return t.shaderInputs.setProps({simpleMesh:this.getTextureProps(this.props.texture)}),t}setTexture(e){let{model:t}=this.state;t&&t.shaderInputs.setProps({simpleMesh:this.getTextureProps(e)})}getTextureProps(e){let t=e||this.state.emptyTexture;return{...this.context.device.type===`webgpu`?{simpleMeshTexture:t}:{sampler:t},hasTexture:!!e}}};ME.defaultProps=jE,ME.layerName=`SimpleMeshLayer`;var Z=(e,t=255)=>{let n=parseInt(e.replace(`#`,``),16);return[n>>16&255,n>>8&255,n&255,t]};function NE(){let e=document.documentElement.dataset.theme===`light`;return e?{light:e,sea:Z(`#DCDCE1`),low:[236,236,240],high:[176,176,184],snow:[252,252,253],ink:Z(`#151518`),ink2:Z(`#48484F`),road:Z(`#151518`,150),warn:Z(`#9A7428`),down:Z(`#A8463E`),brk:Z(`#2A2A30`),label:Z(`#FFFFFF`,225),shadow:[40,40,50]}:{light:e,sea:Z(`#0D0D10`),low:[38,38,44],high:[104,104,114],snow:[214,214,222],ink:Z(`#EAEAEE`),ink2:Z(`#B8B8BF`),road:Z(`#EAEAEE`,120),warn:Z(`#D8BE86`),down:Z(`#E99C90`),brk:Z(`#C9C9D1`),label:Z(`#151518`,225),shadow:[0,0,0]}}var PE=new Map;function FE(e,t){let n=NE(),r=e.coast.map(e=>e[0]),i=e.coast.map(e=>e[1]),a=Math.min(...r)-70,o=Math.min(...i)-70,s=Math.max(...r)+70,c=Math.max(...i)+70,l=Math.ceil((s-a)/4)+1,d=Math.ceil((c-o)/4)+1,p=new Float32Array(l*d),m=new Uint8Array(l*d),h=u(e.seed*977+3),g=Array.from({length:90},()=>{let e=h()<.25;return{x:a+h()*(s-a),y:o+h()*(c-o),r:e?40+h()*40:12+h()*22,h:e?.08+h()*.1:.025+h()*.045}});for(let t=0;t<d;t++)for(let n=0;n<l;n++){let r=a+n*4,i=o+t*4,s=t*l+n;m[s]=+!!y(e.coast,r,i);let c=0;for(let e of g)c+=e.h*Math.exp(-((r-e.x)**2+(i-e.y)**2)/(2*e.r*e.r));p[s]=m[s]?Math.max(0,f(e,r,i)+c+.03):0}let _=[-.62,-.55,.56],v=Math.hypot(_[0],_[1],_[2]);_[0]/=v,_[1]/=v,_[2]/=v;let b=new Float32Array(l*d*3),x=new Float32Array(l*d*3),S=new Float32Array(l*d*3),C=(e,t)=>p[Math.max(0,Math.min(d-1,t))*l+Math.max(0,Math.min(l-1,e))];for(let e=0;e<d;e++)for(let r=0;r<l;r++){let i=e*l+r;b[i*3]=a+r*4,b[i*3+1]=o+e*4,b[i*3+2]=0,x[i*3+2]=1;let s,c,u;if(!m[i])[s,c,u]=n.sea,s/=255,c/=255,u/=255;else{let a=(C(r+1,e)-C(r-1,e))*360/8,o=(C(r,e+1)-C(r,e-1))*360/8,f=Math.hypot(a,o,1),m=Math.max(0,(-a*_[0]-o*_[1]+_[2])/f),h=1,g=p[i]*360;for(let t=1;t<40;t++){let n=r-Math.round(_[0]/Math.hypot(_[0],_[1])*t*1.5),i=e-Math.round(_[1]/Math.hypot(_[0],_[1])*t*1.5);if(n<0||i<0||n>=l||i>=d)break;let a=C(n,i)*360-(g+t*1.5*4*(_[2]/Math.hypot(_[0],_[1])));if(a>0){h=Math.max(.55,1-a/60);break}}let v=1-Math.max(0,(C(r-3,e)+C(r+3,e)+C(r,e-3)+C(r,e+3))/4-p[i])*2.2,y=Math.min(1,p[i]/.95),b=n.low.map((e,t)=>e+(n.high[t]-e)*y**.85),x=Math.max(0,Math.min(1,(p[i]-.78)/.12)),S=t?(.66+.42*m)*(.55+.45*h)*(.6+.4*v):(.3+1.1*m)*h*v;[s,c,u]=b.map((e,t)=>Math.min(255,(e+(n.snow[t]-e)*x)*S)/255)}S[i*3]=s,S[i*3+1]=c,S[i*3+2]=u}let w=new Uint32Array((l-1)*(d-1)*6),T=0;for(let e=0;e<d-1;e++)for(let t=0;t<l-1;t++){let n=e*l+t,r=n+1,i=n+l,a=i+1;w[T++]=n,w[T++]=i,w[T++]=r,w[T++]=r,w[T++]=i,w[T++]=a}return{mesh:{attributes:{POSITION:{value:b,size:3},NORMAL:{value:x,size:3},COLOR_0:{value:S,size:3}},indices:{value:w,size:1}},bbox:[a,o,s,c],light:t}}function IE(e,t){let n=[],r=0;for(let t=1;t<e.length;t++){let i=Math.hypot(e[t][0]-e[t-1][0],e[t][1]-e[t-1][1]);n.push(i),r+=i}let i=Math.max(0,Math.min(1,t))*r;for(let t=0;t<n.length;t++){if(i<=n[t]||t===n.length-1){let r=n[t]?i/n[t]:0;return[e[t][0]+(e[t+1][0]-e[t][0])*r,e[t][1]+(e[t+1][1]-e[t][1])*r,t]}i-=n[t]}return[e[0][0],e[0][1],0]}function LE(e){let t=(0,L.useRef)(null),[n,r]=(0,L.useState)([800,600]),[i,a]=(0,L.useState)(()=>document.documentElement.dataset.theme??`dark`),[o,s]=(0,L.useState)(null),[l,u]=(0,L.useState)(0);(0,L.useEffect)(()=>{let n=new ResizeObserver(([e])=>r([e.contentRect.width,e.contentRect.height]));t.current&&n.observe(t.current);let i=new MutationObserver(()=>a(document.documentElement.dataset.theme??`dark`));i.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-theme`]});let o=0,s=()=>{u(performance.now()),o=requestAnimationFrame(s)};return(e.hint||e.route)&&(o=requestAnimationFrame(s)),()=>{n.disconnect(),i.disconnect(),cancelAnimationFrame(o)}},[e.hint,e.route]);let d=e.island,f=`${d.seed}:${i}`,p=(0,L.useMemo)(()=>(PE.has(f)||PE.set(f,FE(d,i===`light`)),PE.get(f)),[f,d,i]),m=(0,L.useMemo)(()=>NE(),[i]),[h,g,_,v]=p.bbox,y=Math.log2(Math.min(n[0]/(_-h-90),n[1]/(v-g-90))),b=o??{target:[(h+_)/2,(g+v)/2,0],zoom:y};(0,L.useEffect)(()=>{s(null)},[n[0],n[1]]);let x=e.roadIds??Object.keys(d.roads),S=(0,L.useMemo)(()=>x.map((e,t)=>{let n=d.roads[e],r=d.nodes[n.a],i=d.nodes[n.b];return{id:e,e:n,i:t,path:[[r.x,r.y],[i.x,i.y]]}}),[d,x]),C=(t,n)=>e.cond?e.cond[t]:n.cond,w=e=>{let t=C(e.i,e.e);if(t===1)return m.warn;if(t>=2)return m.down;let n=e.e.cls===`A`||e.e.cls===`B`;return[m.road[0],m.road[1],m.road[2],n?m.road[3]:Math.round(m.road[3]*.55)]},T={A:2.6,B:2.1,C:1.5,D:1.1,T:1},E=Math.max(.8,Math.min(1.6,2**(b.zoom-y))),D=c.map(t=>{let n=d.districts[t],r=e.danger?.[t],i=e.teams?.filter(e=>e.at===t)??[],a=[`rescue`,`medical`,`engineer`].map(e=>[e,i.filter(t=>t.ready!==!1&&t.role===e).length]).filter(([,e])=>e),o=i.filter(e=>e.ready===!1).length,s=[r&&r.trapped>=1?`${Math.round(r.trapped)} trapped`:``,r&&r.injured>=1?`${Math.round(r.injured)} hurt`:``].filter(Boolean).join(` · `),c=[...a.map(([e,t])=>`${t} ${e}`),o?`${o} waiting`:``].filter(Boolean).join(` · `);return{id:t,d:n,risk:r?r.trapped+r.injured:0,text:[t===`port`?`${n.name}  ·  DEPOT`:n.name,s,c].filter(Boolean).join(`
`)}}),O=e.p??0,k=(e.trips??[]).map((e,t)=>{let n=e.nodes.map(e=>[d.nodes[e].x,d.nodes[e].y]),r=t%9*.035,i=!e.ok&&e.failAt>=0?(e.failAt+.5)/Math.max(1,n.length-1):1,a=[0];for(let e=1;e<n.length;e++)a.push(a[e-1]+Math.hypot(n[e][0]-n[e-1][0],n[e][1]-n[e-1][1]));let o=a[a.length-1]||1;return{tr:e,pts:n,start:r,cut:i,times:a.map(e=>r+e/o*.62)}}),A=k.map(e=>{let t=Math.min(e.cut,Math.max(0,Math.min(1,(O-e.start)/.62)));if(t<=0)return null;let[n,r]=IE(e.pts,t);return{x:n,y:r,team:e.tr.vehicle===`team`,stuck:!e.tr.ok&&t>=e.cut-.001}}).filter(Boolean),j=e.route?.nodes.map(e=>[d.nodes[e].x,d.nodes[e].y])??null,M=l/1300%1,N=d.coast.map(([e,t])=>[e,t]),P=(0,L.useMemo)(()=>{let e=[];return et(d).contours.forEach((t,n)=>{if(!(n<2))for(let r=0;r<t.length;r+=4)e.push([t[r],t[r+1],t[r+2],t[r+3],+(n%3==2)])}),e},[d]),ee=[...[[14,18,.1],[9,12,.14],[4,6,.2]].map(([e,t,n],r)=>new aT({id:`lift-${r}`,data:[{ring:N.map(([n,r])=>[n+e,r+t])}],getPolygon:e=>e.ring,filled:!0,stroked:!1,getFillColor:[...m.shadow,Math.round(255*n*(m.light?.6:1))]})),new ME({id:`relief`,data:[0],mesh:p.mesh,getPosition:()=>[0,0,0],getColor:[255,255,255,255],material:!1,pickable:!1}),new _C({id:`contours`,data:P,getSourcePosition:e=>[e[0],e[1]],getTargetPosition:e=>[e[2],e[3]],getColor:e=>[m.ink[0],m.ink[1],m.ink[2],e[4]?46:22],getWidth:e=>e[4]?1:.7,widthUnits:`pixels`}),new aT({id:`sea-mask`,data:[{p:[[[h-4e3,g-4e3],[_+4e3,g-4e3],[_+4e3,v+4e3],[h-4e3,v+4e3]],N]}],getPolygon:e=>e.p,filled:!0,stroked:!1,getFillColor:m.sea}),new bw({id:`coast`,data:[{path:[...N,N[0]]}],getPath:e=>e.path,getColor:[m.ink[0],m.ink[1],m.ink[2],m.light?90:70],getWidth:1.2,widthUnits:`pixels`}),new bw({id:`fault`,data:[{path:d.fault}],getPath:e=>e.path,getColor:[m.down[0],m.down[1],m.down[2],110],getWidth:1.2,widthUnits:`pixels`}),new bw({id:`road-case`,data:S.filter(e=>e.e.cls===`A`||e.e.cls===`B`),getPath:e=>e.path,getColor:m.light?[255,255,255,170]:[0,0,0,150],getWidth:e=>T[e.e.cls]*E+2.4,widthUnits:`pixels`,capRounded:!0,jointRounded:!0,updateTriggers:{getWidth:E}}),new bw({id:`roads`,data:S,getPath:e=>e.path,getColor:w,getWidth:e=>T[e.e.cls]*E,widthUnits:`pixels`,capRounded:!0,pickable:!0,updateTriggers:{getColor:[e.cond,i],getWidth:E}}),j&&new bw({id:`route`,data:[{path:j}],getPath:e=>e.path,getColor:m.brk,getWidth:3.4,widthUnits:`pixels`,capRounded:!0,jointRounded:!0}),j&&new kC({id:`route-run`,data:[0,1,2],getPosition:e=>{let[t,n]=IE(j,(l/2400+e/3)%1);return[t,n]},getRadius:3.2,radiusUnits:`pixels`,getFillColor:m.ink,updateTriggers:{getPosition:l}}),new kC({id:`danger`,data:D.filter(e=>e.risk>0),getPosition:e=>[e.d.x,e.d.y],getRadius:e=>6+Math.sqrt(e.risk)*.55,radiusUnits:`common`,filled:!0,stroked:!0,getFillColor:[m.down[0],m.down[1],m.down[2],46],getLineColor:[m.down[0],m.down[1],m.down[2],150],lineWidthUnits:`pixels`,getLineWidth:1.2,pickable:!0,updateTriggers:{getRadius:e.danger}}),e.hint&&new kC({id:`hint`,data:[d.districts[e.hint]],getPosition:e=>[e.x,e.y],getRadius:10+M*28,radiusUnits:`pixels`,filled:!1,stroked:!0,getLineColor:[m.brk[0],m.brk[1],m.brk[2],Math.round(230*(1-M))],lineWidthUnits:`pixels`,getLineWidth:2,updateTriggers:{getRadius:l,getLineColor:l}}),e.event&&new kC({id:`shock`,data:[0,.22],getPosition:()=>[e.event.x,e.event.y],getRadius:t=>e.event.r*Math.max(0,Math.min(1,(O-t)/.7)),radiusUnits:`common`,filled:!1,stroked:!0,getLineColor:e=>[m.down[0],m.down[1],m.down[2],Math.round(230*(1-Math.max(0,Math.min(1,(O-e)/.7))))],lineWidthUnits:`pixels`,getLineWidth:2,updateTriggers:{getRadius:O,getLineColor:O}}),k.length>0&&new mE({id:`trips-glow`,data:k,getPath:e=>e.pts,getTimestamps:e=>e.times,currentTime:O,trailLength:.4,fadeTrail:!0,getColor:[m.brk[0],m.brk[1],m.brk[2],m.light?60:70],getWidth:11,widthUnits:`pixels`,capRounded:!0,jointRounded:!0}),k.length>0&&new mE({id:`trips`,data:k,getPath:e=>e.pts,getTimestamps:e=>e.times,currentTime:O,trailLength:.32,fadeTrail:!0,getColor:e=>e.tr.vehicle===`team`?m.ink2:m.ink,getWidth:3.5,widthUnits:`pixels`,capRounded:!0,jointRounded:!0}),A.length>0&&new kC({id:`heads`,data:A,getPosition:e=>[e.x,e.y],getRadius:e=>e.stuck?7:e.team?4:5,radiusUnits:`pixels`,filled:!0,stroked:!0,getFillColor:e=>e.stuck?[0,0,0,0]:e.team?m.ink2:m.ink,getLineColor:e=>e.stuck?m.down:[0,0,0,120],lineWidthUnits:`pixels`,getLineWidth:e=>e.stuck?2:1}),new kC({id:`towns`,data:D,getPosition:e=>[e.d.x,e.d.y],getRadius:e=>e.id===`port`?6:4,radiusUnits:`pixels`,getFillColor:m.ink,stroked:!0,getLineColor:m.light?[255,255,255,255]:[0,0,0,200],lineWidthUnits:`pixels`,getLineWidth:1.5,pickable:!0}),new oE({id:`labels`,data:D,getPosition:e=>[e.d.x,e.d.y],getText:e=>e.text,getSize:12,sizeUnits:`pixels`,getPixelOffset:[14,0],getTextAnchor:`start`,getAlignmentBaseline:`center`,fontFamily:`"DM Sans", system-ui, sans-serif`,fontWeight:600,lineHeight:1.35,getColor:e=>e.risk>0?m.ink:m.ink2,background:!0,getBackgroundColor:t=>e.selected===t.id?[m.brk[0],m.brk[1],m.brk[2],m.light?40:60]:m.label,backgroundPadding:[7,4,7,4],getBorderColor:t=>e.selected===t.id?m.brk:[m.ink2[0],m.ink2[1],m.ink2[2],60],getBorderWidth:t=>e.selected===t.id?1.5:1,characterSet:`auto`,pickable:!0,updateTriggers:{getText:[e.danger,e.teams],getBackgroundColor:e.selected,getBorderColor:e.selected,getBorderWidth:e.selected}})].filter(Boolean),te=e=>{if(!e.coordinate)return null;let[t,n]=e.coordinate,r=null,i=34/2**b.zoom;for(let e of c){let a=d.districts[e],o=Math.hypot(a.x-t,a.y-n);o<i&&(i=o,r=e)}let a=e.object;return a&&typeof a.id==`string`&&c.includes(a.id)?a.id:r},ne=e=>{let t=e.object;if(!t)return null;let n=``;if(t.e&&t.i!==void 0){let e=C(t.i,t.e);n=`${{A:`Highway`,B:`Main road`,C:`Road`,D:`Local road`,T:`Farm track`}[t.e.cls]} ${t.e.ref}, ${t.e.km} km · ${[`open`,`damaged: about 7 in 10 trucks get through`,`broken: closed to trucks`,`collapsed: closed to trucks`][e]}`}else t.d&&(n=`${t.d.name}${t.id===`port`?` · your depot: every team, truck and supply starts here`:``} · click to open`);return n?{text:n,style:{background:`var(--g-ink)`,color:`var(--g-on-ink)`,fontFamily:`var(--g-font)`,fontSize:`12.5px`,lineHeight:`1.4`,padding:`7px 10px`,borderRadius:`4px`,maxWidth:`280px`,boxShadow:`0 8px 24px rgb(0 0 0 / .3)`}}:null};return(0,R.jsxs)(`div`,{ref:t,className:`ag-relief`,"aria-label":e.label??`Map of the island`,role:`img`,children:[(0,R.jsx)(VS,{views:new bS({id:`map`,flipY:!0}),viewState:{map:{...b,minZoom:y-.6,maxZoom:y+3}},onViewStateChange:({viewState:e})=>s({target:e.target,zoom:e.zoom}),controller:{dragRotate:!1,doubleClickZoom:!0,inertia:300},layers:ee,getCursor:({isHovering:e,isDragging:t})=>t?`grabbing`:e?`pointer`:`grab`,onClick:t=>e.onSelect?.(te(t)),getTooltip:ne}),e.night&&(0,R.jsx)(`div`,{className:`ag-relief-night`}),o&&(0,R.jsx)(`button`,{className:`ag-relief-fit ag-glass`,onClick:()=>s(null),children:`Fit island`})]})}var RE=/\b(function|const|let|var|if|else|for|of|in|return|continue|break|while|new|true|false|null|undefined|typeof)\b/,zE=/(\/\/[^\n]*)|('(?:[^'\\\n]|\\.)*'|"(?:[^"\\\n]|\\.)*"|`(?:[^`\\]|\\.)*`)|(\b\d+(?:\.\d+)?\b)|(\b(?:view|act|memory)\b)|(\b[A-Za-z_]\w*\b)/g;function BE(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`)}function VE(e){let t=``,n=0;for(let r of e.matchAll(zE)){t+=BE(e.slice(n,r.index));let[i,a,o,s,c,l]=r;a?t+=`<span class="t-c">${BE(i)}</span>`:o?t+=`<span class="t-s">${BE(i)}</span>`:s?t+=`<span class="t-n">${i}</span>`:c?t+=`<span class="t-a">${i}</span>`:l&&RE.test(l)&&l.match(RE)[0]===l?t+=`<span class="t-k">${i}</span>`:t+=BE(i),n=r.index+i.length}return t+BE(e.slice(n))+`
`}function HE({value:e,onChange:t,onRun:n,errLine:r}){let i=(0,L.useRef)(null),a=(0,L.useRef)(null),o=(0,L.useRef)(null),s=(0,L.useMemo)(()=>VE(e),[e]),c=e.split(`
`).length;return(0,R.jsxs)(`div`,{className:`ag-ed`,children:[(0,R.jsx)(`pre`,{className:`ag-ed-g`,ref:o,"aria-hidden":!0,children:Array.from({length:c},(e,t)=>(0,R.jsxs)(`span`,{className:r===t+1?`err`:void 0,children:[t+1,`
`]},t))}),(0,R.jsxs)(`div`,{className:`ag-ed-w`,children:[(0,R.jsx)(`pre`,{className:`ag-ed-hl`,ref:a,"aria-hidden":!0,dangerouslySetInnerHTML:{__html:s}}),(0,R.jsx)(`textarea`,{ref:i,className:`ag-ed-ta`,value:e,spellCheck:!1,"aria-label":`Bot code`,onChange:e=>t(e.target.value),onScroll:()=>{i.current&&(a.current&&(a.current.scrollTop=i.current.scrollTop,a.current.scrollLeft=i.current.scrollLeft),o.current&&(o.current.scrollTop=i.current.scrollTop))},onKeyDown:r=>{if((r.metaKey||r.ctrlKey)&&r.key===`Enter`)r.preventDefault(),n();else if(r.key===`Tab`){r.preventDefault();let n=r.currentTarget,i=n.selectionStart,a=n.selectionEnd;t(e.slice(0,i)+`  `+e.slice(a)),requestAnimationFrame(()=>{n.selectionStart=n.selectionEnd=i+2})}}})]})]})}var Q=e=>Math.round(e).toLocaleString(`en-US`),UE=e=>String(e).padStart(2,`0`),WE=4;function GE({go:e,onDone:t}){let n=(0,L.useMemo)(()=>{let e=Ke(1);return e.begin(),e},[]),r=(0,L.useMemo)(()=>qe(1,null),[]),[,i]=(0,L.useState)(0),a=()=>i(e=>e+1),[o,s]=(0,L.useState)(null),[l,u]=(0,L.useState)(null),[d,f]=(0,L.useState)(null),[p,m]=(0,L.useState)(0),[h,g]=(0,L.useState)(!1),[_,v]=(0,L.useState)(!1),[y,b]=(0,L.useState)(null),x=(0,L.useRef)(0),S=(0,L.useRef)({});(0,L.useEffect)(()=>()=>cancelAnimationFrame(x.current),[]);let C=n.t,w=We(C),T=n.state,E=c.reduce((e,t)=>T[t].trapped>T[e].trapped?t:e,`old`),D=Object.fromEntries(c.map(e=>[e,{trapped:T[e].trapped,injured:T[e].injured}])),O=n.frames.length,k=O?Math.max(0,r.frames[O-1].deaths-n.frames[O-1].deaths):0,A=n.teams.filter(e=>e.at===`port`&&!e.moving).length,j=n.teams.filter(e=>!e.ready).length,M=c.reduce((e,t)=>e+T[t].freed,0),N=o&&o!==`port`?n.path(`port`,o,{by:`safe`}):null,P=(e,t)=>n.teams.filter(n=>n.at===e&&(!t||n.role===t)).length,ee=n.trips.filter(e=>e.vehicle===`truck`).length,te=[{text:`${n.island.districts[E].name} has the most people trapped under rubble. Click it on the map.`,done:o===E},{text:`Send rescue teams there. Each team pulls out up to 12 people every 6 hours. Send at least 4.`,done:(S.current[E]??0)>=4||P(E,`rescue`)>=4},{text:`Thousands there have lost their homes and need water. Send a truck of water and food from the depot.`,done:ee>0},{text:`Your orders are in. End the turn: 6 hours pass and you see what happened.`,done:O>0}];(0,L.useEffect)(()=>{!_&&p<te.length&&te[p].done&&m(p+1)});let ne=!_&&p<te.length,re=e=>{b(e),setTimeout(()=>b(t=>t===e?null:t),2600)},ie=(e,t)=>{if(t===`port`){let t=n.teams.find(t=>t.at===`port`&&!t.moving&&t.role!==e);if(!t){re(`Every team at the depot is already on ${e}.`);return}n.act.role(t.id,e),a();return}let r=n.teams.find(e=>e.at===`port`&&!e.moving);if(!r){re(`No teams are waiting at the depot. Send one back from a district first.`);return}n.act.role(r.id,e);let i=n.act.move(r.id,t);e===`rescue`&&(S.current[t]=(S.current[t]??0)+1),i.moved||re(i.reason??`That team was held up on a damaged road and is back at the depot. Send another.`),a()},ae=e=>{let t=n.teams.find(t=>t.at===e&&!t.moving);t&&(n.act.move(t.id,`port`),a())},oe=(e,t)=>{let r=n.path(`port`,e,{by:`safe`}),i=n.act.send(`truck`,e,t,r.ok?r:void 0);i.sent||re(i.reason??`Could not send.`),a()},se=e=>{let t=n.act.send(`heli`,e,{water:2,rations:1});t.sent||re(t.reason??`Could not send.`),a()},ce=()=>{if(l)return;let e=c.map(e=>({...T[e]})),i=[...n.trips],o=C;n.end(),S.current={};let s=n.frames[n.frames.length-1],d=n.frames.length-1,p={t:o,freed:c.reduce((t,n,r)=>t+s.d[n].freed-e[r].freed,0),treated:c.reduce((t,n,r)=>t+s.d[n].treated-e[r].treated,0),died:s.deaths-(d?n.frames[d-1].deaths:0),baseDied:r.frames[d].deaths-(d?r.frames[d-1].deaths:0),arrived:i.filter(e=>e.vehicle!==`team`&&e.ok).length,stuck:i.filter(e=>e.vehicle!==`team`&&!e.ok).length,teams:i.filter(e=>e.vehicle===`team`).length},m=performance.now(),h=e=>{let r=Math.min(1,(e-m)/1800);u({trips:i,p:r}),r<1?x.current=requestAnimationFrame(h):(u(null),f(p),n.frames.length>=28?g(!0):(n.begin(),n.frames.length===WE&&(g(!0),t())),a())};x.current=requestAnimationFrame(h)};(0,L.useEffect)(()=>{let e=e=>{e.key===`Enter`&&!e.target.closest(`textarea, input, button`)&&ce()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)});let F=o?T[o]:null,le=o?n.island.districts[o]:null,ue=e=>o?n.teams.filter(t=>t.at===o&&t.role===e&&!t.moving).length:0,de=e=>o?n.teams.filter(t=>t.at===o&&t.role===e&&t.moving).length:0,fe=e=>ne&&p===e?` is-hint`:``,pe=n.fleet.truck,me=We(C+1);return(0,R.jsxs)(`div`,{className:`ag-page`,children:[(0,R.jsxs)(`header`,{className:`ag-ph`,children:[(0,R.jsx)(`h1`,{children:`Play by hand`}),(0,R.jsx)(`p`,{children:`Run the first day of the response yourself. Your bot will make these same calls later`})]}),(0,R.jsxs)(`section`,{className:`ag-status`,"data-label":`Turn bar`,children:[(0,R.jsxs)(`div`,{className:`ag-status-clock`,children:[(0,R.jsxs)(`span`,{className:`ag-mono`,children:[`TURN `,UE(Math.min(C,27)+1),` · DAY `,w.day]}),(0,R.jsxs)(`b`,{className:`ag-mono`,children:[UE(w.hour),`:00 → `,UE(me.hour),`:00`]})]}),(0,R.jsxs)(`div`,{className:`ag-status-n`,children:[(0,R.jsx)(`b`,{className:`ag-mono`,children:Q(c.reduce((e,t)=>e+T[t].trapped,0))}),(0,R.jsx)(`span`,{children:`trapped`})]}),(0,R.jsxs)(`div`,{className:`ag-status-n`,children:[(0,R.jsx)(`b`,{className:`ag-mono`,children:Q(c.reduce((e,t)=>e+T[t].injured,0))}),(0,R.jsx)(`span`,{children:`hurt`})]}),(0,R.jsxs)(`div`,{className:`ag-status-n is-saved`,children:[(0,R.jsx)(`b`,{className:`ag-mono`,children:Q(M)}),(0,R.jsx)(`span`,{children:`pulled out alive`})]}),(0,R.jsxs)(`div`,{className:`ag-status-n`,children:[(0,R.jsx)(`b`,{className:`ag-mono`,children:Q(k)}),(0,R.jsx)(`span`,{children:`saved vs doing nothing`})]}),(0,R.jsxs)(`button`,{className:`ag-btn ag-btn--ink ag-end${fe(3)}`,onClick:ce,disabled:!!l||h,children:[l?`6 hours passing…`:`End turn`,` `,(0,R.jsx)(`kbd`,{children:`↵`})]})]}),(0,R.jsxs)(`div`,{className:`ag-stage`,children:[(0,R.jsxs)(`section`,{className:`ag-mapbox ag-mapbox--play`,"data-label":`Island map`,children:[(0,R.jsx)(LE,{island:n.island,roadIds:n.roadIds,cond:Uint8Array.from(n.roadIds.map(e=>n.roads[e].cond)),danger:D,teams:n.teams,selected:o,onSelect:e=>s(e),route:!l&&N?.ok?N:null,trips:l?.trips,p:l?.p,night:w.night,hint:ne&&p===0?E:null}),(0,R.jsxs)(`div`,{className:`ag-map-key ag-glass`,"data-label":`Map key`,children:[(0,R.jsxs)(`span`,{children:[(0,R.jsx)(`i`,{className:`k-depot`}),`Your depot`]}),(0,R.jsxs)(`span`,{children:[(0,R.jsx)(`i`,{className:`k-risk`}),`People in danger`]}),(0,R.jsxs)(`span`,{children:[(0,R.jsx)(`i`,{className:`k-ok`}),`Road open`]}),(0,R.jsxs)(`span`,{children:[(0,R.jsx)(`i`,{className:`k-dmg`}),`Damaged: 7 in 10 trucks get through`]}),(0,R.jsxs)(`span`,{children:[(0,R.jsx)(`i`,{className:`k-bad`}),`Closed to trucks`]})]}),ne&&(0,R.jsxs)(`div`,{className:`ag-guide ag-glass`,"data-label":`Guide`,children:[(0,R.jsxs)(`span`,{className:`ag-mono`,children:[`STEP `,p+1,` OF `,te.length]}),(0,R.jsx)(`p`,{children:te[p].text}),(0,R.jsx)(`button`,{className:`ag-link`,onClick:()=>v(!0),children:`Skip the guide`})]},p),y&&(0,R.jsx)(`div`,{className:`ag-note ag-glass`,role:`status`,children:y}),h&&(0,R.jsx)(`div`,{className:`ag-finish`,"data-label":`Day one done`,children:(0,R.jsxs)(`div`,{className:`ag-finish-card`,children:[(0,R.jsx)(`span`,{className:`ag-mono`,children:n.frames.length>=28?`DAY 7 · DONE`:`DAY 1 · DONE`}),(0,R.jsxs)(`h2`,{children:[`You pulled `,(0,R.jsx)(`b`,{children:Q(M)}),` people out alive`]}),(0,R.jsx)(`p`,{children:n.frames.length>=28?`${Q(k)} more people are alive than if no one had acted. In the competition your bot plays this week, on 40 islands it has never seen.`:`${Q(k)} more people are alive than if no one had acted, and the gap grows each day. That was 4 of 28 turns. In the competition you don’t click: you write a bot that makes these calls every turn, for 7 days, on 40 islands it has never seen.`}),(0,R.jsxs)(`div`,{className:`ag-finish-a`,children:[(0,R.jsxs)(`button`,{className:`ag-btn ag-btn--ink`,onClick:()=>e(`build`),children:[`Write your bot `,(0,R.jsx)(KE,{})]}),n.frames.length<28&&(0,R.jsx)(`button`,{className:`ag-btn`,onClick:()=>{g(!1),v(!0)},children:`Keep playing by hand`})]})]})})]}),(0,R.jsxs)(`aside`,{className:`ag-panel ag-panel--play`,"data-label":`Orders`,children:[d&&!l&&(0,R.jsxs)(`div`,{className:`ag-report`,"data-label":`What happened`,children:[(0,R.jsxs)(`div`,{className:`ag-report-h`,children:[(0,R.jsx)(`b`,{children:`What happened`}),(0,R.jsxs)(`span`,{className:`ag-mono`,children:[UE(We(d.t).hour),`:00 → `,UE(We(d.t+1).hour),`:00`]}),(0,R.jsx)(`button`,{className:`ag-x`,"aria-label":`Close`,onClick:()=>f(null),children:`×`})]}),(0,R.jsxs)(`ul`,{children:[(0,R.jsxs)(`li`,{children:[(0,R.jsxs)(`b`,{className:`ag-mono is-up`,children:[`+`,Q(d.freed)]}),` pulled out of the rubble`]}),(0,R.jsxs)(`li`,{children:[(0,R.jsxs)(`b`,{className:`ag-mono is-up`,children:[`+`,Q(d.treated)]}),` injured treated`]}),(0,R.jsxs)(`li`,{children:[(0,R.jsx)(`b`,{className:`ag-mono is-down`,children:Q(d.died)}),` died this turn (`,Q(d.baseDied),` if no one had acted)`]}),(d.arrived>0||d.stuck>0)&&(0,R.jsxs)(`li`,{children:[(0,R.jsx)(`b`,{className:`ag-mono`,children:d.arrived}),` `,d.arrived===1?`delivery`:`deliveries`,` arrived`,d.stuck?(0,R.jsxs)(R.Fragment,{children:[`, `,(0,R.jsx)(`b`,{className:`ag-mono is-down`,children:d.stuck}),` got stuck on damaged roads (cargo back at the depot)`]}):null]})]}),j>0&&(0,R.jsxs)(`p`,{className:`ag-report-tip`,children:[j,` team`,j>1?`s are`:` is`,` still waiting at the depot for orders. A waiting team does nothing.`]})]},d.t),!o||!F||!le?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(`div`,{className:`ag-card-h`,children:(0,R.jsx)(`h2`,{children:`Depot · Port Halden`})}),(0,R.jsx)(`p`,{className:`ag-sub`,children:`Every team, truck and supply starts here. Click a district on the map to send help.`}),(0,R.jsxs)(`div`,{className:`ag-stock`,children:[(0,R.jsxs)(`div`,{children:[(0,R.jsxs)(`b`,{className:`ag-mono`,children:[A,(0,R.jsx)(`small`,{children:`/18`})]}),(0,R.jsxs)(`span`,{children:[`teams at the depot`,j?` · ${j} without orders`:``]})]}),(0,R.jsxs)(`div`,{children:[(0,R.jsxs)(`b`,{className:`ag-mono`,children:[pe,(0,R.jsx)(`small`,{children:`/14`})]}),(0,R.jsx)(`span`,{children:`trucks left this turn`})]}),(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`b`,{className:`ag-mono`,children:Q(n.depot.water)}),(0,R.jsx)(`span`,{children:`water`})]}),(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`b`,{className:`ag-mono`,children:Q(n.depot.rations)}),(0,R.jsx)(`span`,{children:`food`})]}),(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`b`,{className:`ag-mono`,children:Q(n.depot.tents)}),(0,R.jsx)(`span`,{children:`tents`})]})]}),(0,R.jsx)(`div`,{className:`ag-card-h ag-mt`,children:(0,R.jsx)(`h2`,{children:`Where people are in danger`})}),(0,R.jsx)(`div`,{className:`ag-dlist`,children:[...c].sort((e,t)=>T[t].trapped+T[t].injured-(T[e].trapped+T[e].injured)).map(e=>{let t=T[e].trapped+T[e].injured,r=Math.max(...c.map(e=>T[e].trapped+T[e].injured),1);return(0,R.jsxs)(`button`,{className:`ag-drow${e===E?fe(0):``}`,onClick:()=>s(e),children:[(0,R.jsxs)(`span`,{className:`ag-drow-n`,children:[(0,R.jsx)(`b`,{children:n.island.districts[e].name}),(0,R.jsxs)(`span`,{className:`ag-mono`,children:[Q(T[e].trapped),` trapped · `,Q(T[e].injured),` hurt`]})]}),(0,R.jsx)(`span`,{className:`ag-bar`,children:(0,R.jsx)(`i`,{style:{width:`${t/r*100}%`}})})]},e)})})]}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(`div`,{className:`ag-card-h`,children:[(0,R.jsx)(`button`,{className:`ag-back`,onClick:()=>s(null),"aria-label":`Back to the depot`,children:`←`}),(0,R.jsx)(`h2`,{children:le.name}),le.hills&&(0,R.jsx)(`em`,{className:`ag-tag`,children:`Hills: nights kill faster`}),le.coastal&&(0,R.jsx)(`em`,{className:`ag-tag`,children:`Coast`})]}),o!==`port`&&(0,R.jsx)(`p`,{className:`ag-road${N?.ok&&N.damaged===0?``:` is-risk`}`,children:N?.ok?N.damaged===0?`${N.km} km from the depot, the road is clear.`:`${N.km} km from the depot over ${N.damaged} damaged stretch${N.damaged>1?`es`:``}: about ${Math.round(N.chance*100)} in 100 trucks get through.`:`No open road from the depot. Only a helicopter can get in.`}),(0,R.jsxs)(`div`,{className:`ag-need`,"data-label":`Trapped`,children:[(0,R.jsxs)(`div`,{className:`ag-need-h`,children:[(0,R.jsx)(`b`,{className:`ag-mono`,children:Q(F.trapped)}),(0,R.jsx)(`span`,{children:`trapped under rubble`})]}),(0,R.jsx)(`p`,{children:`A rescue team pulls out 12 a turn. After 3 days, few are found alive.`}),(0,R.jsxs)(`div`,{className:`ag-need-a`,children:[(0,R.jsxs)(`span`,{className:`ag-mono ag-dim`,children:[ue(`rescue`),` here`,de(`rescue`)?` (${de(`rescue`)} on the way)`:``]}),(0,R.jsx)(`button`,{className:`ag-btn ag-btn--sm${o===E?fe(1):``}`,onClick:()=>ie(`rescue`,o),disabled:o===`port`&&!F.trapped,children:`+ Rescue team`})]})]}),(0,R.jsxs)(`div`,{className:`ag-need`,"data-label":`Injured`,children:[(0,R.jsxs)(`div`,{className:`ag-need-h`,children:[(0,R.jsx)(`b`,{className:`ag-mono`,children:Q(F.injured)}),(0,R.jsx)(`span`,{children:`injured`})]}),(0,R.jsx)(`p`,{children:`A medical team treats 20 a turn. Untreated, 4 in 100 die every turn.`}),(0,R.jsxs)(`div`,{className:`ag-need-a`,children:[(0,R.jsxs)(`span`,{className:`ag-mono ag-dim`,children:[ue(`medical`),` here`,de(`medical`)?` (${de(`medical`)} on the way)`:``]}),(0,R.jsx)(`button`,{className:`ag-btn ag-btn--sm`,onClick:()=>ie(`medical`,o),children:`+ Medical team`})]})]}),(0,R.jsxs)(`div`,{className:`ag-need`,"data-label":`Homeless`,children:[(0,R.jsxs)(`div`,{className:`ag-need-h`,children:[(0,R.jsx)(`b`,{className:`ag-mono`,children:Q(F.displaced)}),(0,R.jsx)(`span`,{children:`without a home`})]}),(0,R.jsxs)(`p`,{children:[`Each turn they drink `,Math.ceil(F.displaced/2e3),` water and eat `,Math.ceil(F.displaced/2500),` food. Without tents, the cold kills at night.`]}),(0,R.jsxs)(`div`,{className:`ag-supplies ag-mono`,children:[(0,R.jsxs)(`span`,{children:[`water `,(0,R.jsx)(`b`,{children:Math.floor(F.water)}),`/`,Math.ceil(F.displaced/2e3)]}),(0,R.jsxs)(`span`,{children:[`food `,(0,R.jsx)(`b`,{children:Math.floor(F.rations)}),`/`,Math.ceil(F.displaced/2500)]}),(0,R.jsxs)(`span`,{children:[`tents `,(0,R.jsx)(`b`,{children:F.tents}),` (sleeps `,Q(F.tents*250),`)`]})]}),o===`port`?(0,R.jsx)(`p`,{className:`ag-dim`,children:`The depot's own supplies cover Port Halden.`}):(0,R.jsxs)(`div`,{className:`ag-need-a`,children:[(0,R.jsxs)(`span`,{className:`ag-mono ag-dim`,children:[pe,` trucks left`]}),N?.ok?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(`button`,{className:`ag-btn ag-btn--sm${fe(2)}`,onClick:()=>oe(o,{water:3,rations:3}),children:`Truck: water + food`}),(0,R.jsx)(`button`,{className:`ag-btn ag-btn--sm`,onClick:()=>oe(o,{tents:6}),children:`Truck: 6 tents`})]}):(0,R.jsx)(`button`,{className:`ag-btn ag-btn--sm`,onClick:()=>se(o),children:`Helicopter: water + food`})]})]}),n.teams.some(e=>e.at===o&&!e.moving)&&o!==`port`&&(0,R.jsx)(`button`,{className:`ag-link ag-recall`,onClick:()=>ae(o),children:`Send a team back to the depot`})]})]})]})]})}function KE(){return(0,R.jsx)(`svg`,{viewBox:`0 0 16 16`,width:`14`,height:`14`,"aria-hidden":!0,children:(0,R.jsx)(`path`,{d:`M3 8h10m-4-4 4 4-4 4`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`})})}var qE=[{id:`season`,label:`Season`},{id:`play`,label:`Play by hand`},{id:`build`,label:`Build`},{id:`replay`,label:`Replay`},{id:`airlift`,label:`Airlift call`},{id:`results`,label:`Results`}],JE=Array.from({length:40},(e,t)=>101+t),$=e=>Math.round(e).toLocaleString(`en-US`),YE=e=>String(e).padStart(2,`0`),XE={get:e=>{try{return localStorage.getItem(e)}catch{return null}},set:(e,t)=>{try{localStorage.setItem(e,t)}catch{}}};function ZE(){let[e,t]=(0,L.useState)(()=>location.hash.slice(1)||`season`),[n,r]=(0,L.useState)(()=>XE.get(`ag:theme`)??`dark`),[i,a]=(0,L.useState)(()=>XE.get(`ag:code`)??`// Aftershock · Round 2 · starter bot
// This is what you did by hand, written as code. onTurn runs once every 6 hours, 28 times in all.
// view = what you saw on the map. act = the buttons you pressed.

function onTurn(view, act, memory) {
  if (view.turn === 0) {
    // every team digs where the most people are trapped
    const worst = Object.values(view.districts)
      .sort((a, b) => b.trapped - a.trapped)
      .slice(0, 3)
    view.teams.forEach((t, i) => {
      act.role(t.id, 'rescue')
      act.move(t.id, worst[i % 3].id)
    })
  }

  // a truck of water and food to each district that is short
  for (const d of Object.values(view.districts)) {
    if (d.water < d.waterNeed && view.fleet.truck > 0) {
      act.send('truck', d.id, { water: 3, rations: 3 })
    }
  }
}
`),[o,c]=(0,L.useState)(null),[l,u]=(0,L.useState)(null),[d,f]=(0,L.useState)(!1),[m,h]=(0,L.useState)([]),[g,_]=(0,L.useState)(!1),[y,b]=(0,L.useState)(null),[x,S]=(0,L.useState)(()=>XE.get(`ag:played`)===`1`);(0,L.useEffect)(()=>{let e=()=>t(location.hash.slice(1)||`season`);return window.addEventListener(`hashchange`,e),()=>window.removeEventListener(`hashchange`,e)},[]),(0,L.useEffect)(()=>{document.documentElement.dataset.theme=n,XE.set(`ag:theme`,n)},[n]),(0,L.useEffect)(()=>{XE.set(`ag:code`,i)},[i]);let C=e=>{location.hash=e,window.scrollTo(0,0)},w=(0,L.useCallback)((e=i,t=1,n=`Practice island`)=>{let{bot:r,error:a}=Ge(e);if(a)return b(a),!1;b(null);let o=Je(t,r);return c({s:o,label:n,seed:t}),!0},[i]),T=(0,L.useCallback)(()=>{let{bot:e,error:t}=Ge(i);if(t){b(t),C(`build`);return}f(!0),u([]);let n=[],r=0,a=()=>{let t=performance.now();for(;r<JE.length&&performance.now()-t<40;){let t=Je(JE[r],e);n.push({seed:JE[r],saved:t.saved,possible:t.possible}),r++}u([...n]),r<JE.length?setTimeout(a,30):f(!1)};setTimeout(a,250)},[i]),E=g?Math.round(m.reduce((e,t)=>e+s(v.find(e=>e.id===t)),0)):0,D=l&&l.length===JE.length&&!d,O=D?l.reduce((e,t)=>e+t.saved,0)/l.length:null,k=O===null?null:Math.round(O+E*6);return(0,R.jsxs)(`div`,{className:`ag`,children:[(0,R.jsxs)(`aside`,{className:`ag-sb`,children:[(0,R.jsxs)(`a`,{className:`ag-logo`,href:`#season`,"aria-label":`Zeus`,children:[(0,R.jsx)(`span`,{className:`ag-logo-t`,children:(0,R.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`14`,height:`14`,"aria-hidden":!0,children:(0,R.jsx)(`path`,{d:`M13.5 2 5 13.5h6L9.8 22 19 9.8h-6.2L13.5 2Z`,fill:`currentColor`})})}),(0,R.jsx)(`b`,{children:`Zeus`})]}),(0,R.jsx)(`a`,{className:`ag-sb-back`,href:`#season`,children:`Challenges`}),(0,R.jsxs)(`div`,{className:`ag-sb-h`,children:[(0,R.jsx)(`span`,{className:`ag-mono`,children:`AFTERSHOCK · S1`}),(0,R.jsx)(`b`,{children:`Round 2 · Roads`})]}),(0,R.jsx)(`nav`,{className:`ag-sb-nav`,"aria-label":`Aftershock`,children:qE.map(t=>(0,R.jsxs)(`a`,{href:`#${t.id}`,className:`ag-sb-i`,"aria-current":e===t.id?`page`:void 0,children:[(0,R.jsx)($E,{id:t.id}),(0,R.jsx)(`span`,{children:t.label}),t.id===`results`&&D&&(0,R.jsx)(`small`,{className:`ag-mono`,children:$(k)})]},t.id))}),(0,R.jsxs)(`div`,{className:`ag-sb-foot`,children:[(0,R.jsxs)(`div`,{className:`ag-sb-team`,children:[(0,R.jsx)(`b`,{children:p.name}),(0,R.jsxs)(`span`,{children:[p.members.length,` members`]})]}),(0,R.jsx)(QE,{}),(0,R.jsx)(`button`,{className:`ag-theme`,onClick:()=>r(n===`dark`?`light`:`dark`),children:n===`dark`?`Light mode`:`Dark mode`})]})]}),(0,R.jsxs)(`main`,{className:`ag-main`,children:[e===`season`&&(0,R.jsx)(tD,{go:C,r2:k,practice:o,locked:g,done:!!D,played:x}),e===`play`&&(0,R.jsx)(GE,{go:C,onDone:()=>{S(!0),XE.set(`ag:played`,`1`)}}),e===`build`&&(0,R.jsx)(nD,{code:i,setCode:a,err:y,practice:o,run:e=>{w(e??i)&&C(`replay`)},load:e=>{a(e),b(null)}}),e===`replay`&&(0,R.jsx)(iD,{practice:o,ensure:()=>w(i),go:C}),e===`airlift`&&(0,R.jsx)(oD,{picks:m,setPicks:h,locked:g,lock:()=>_(!0),go:C}),e===`results`&&(0,R.jsx)(sD,{hidden:l,busy:d,submit:T,practice:o,airlift:E,locked:g,r2:k,watch:(e,t)=>{w(i,e,`Hidden island ${t}`)&&C(`replay`)},go:C,ensure:()=>w(i)})]},e)]})}function QE(){let e=(0,L.useMemo)(()=>Date.now()+13752e4,[]),[t,n]=(0,L.useState)(Date.now());(0,L.useEffect)(()=>{let e=setInterval(()=>n(Date.now()),1e3);return()=>clearInterval(e)},[]);let r=Math.max(0,Math.floor((e-t)/1e3));return(0,R.jsxs)(`div`,{className:`ag-sb-clock`,children:[(0,R.jsx)(`span`,{children:`Closes in`}),(0,R.jsxs)(`b`,{className:`ag-mono`,children:[Math.floor(r/86400),`d `,YE(Math.floor(r/3600)%24),`:`,YE(Math.floor(r/60)%60),`:`,YE(r%60)]})]})}function $E({id:e}){let t={season:`M5 21V4m0 0h11l-2 4 2 4H5`,play:`M3 7l6-3 6 3 6-3v13l-6 3-6-3-6 3V7Zm6-3v13m6-10v13`,build:`M8 8l-4 4 4 4m8-8 4 4-4 4m-2-11-4 14`,replay:`M7 5v14l11-7L7 5Z`,airlift:`M3 14l7-2 4-8 2 1-2 7 6 1 1 2-7 1-3 5-2-1 1-4-6 1-1-3Z`,results:`M4 20V10m6 10V4m6 16v-7m4 7H2`}[e];return(0,R.jsx)(`svg`,{className:`ag-ic`,viewBox:`0 0 24 24`,width:`18`,height:`18`,"aria-hidden":!0,children:(0,R.jsx)(`path`,{d:t,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinejoin:`round`,strokeLinecap:`round`})})}function eD({title:e,desc:t,children:n}){return(0,R.jsxs)(`header`,{className:`ag-ph`,children:[(0,R.jsx)(`h1`,{children:e}),t&&(0,R.jsx)(`p`,{children:t}),n&&(0,R.jsx)(`div`,{className:`ag-ph-r`,children:n})]})}function tD({go:e,r2:t,practice:n,locked:r,done:i,played:a}){let s=(0,L.useMemo)(()=>d(t),[t]),c=s.findIndex(e=>e.mine),l=[...s.slice(0,7),...c>=7?[s[c]]:[]],u=[{label:`Play the first day by hand`,ok:a,to:`play`},{label:`Run your bot on the practice island`,ok:!!n,to:`build`},{label:`Make the airlift call`,ok:r,to:`airlift`},{label:`Submit for the hidden islands`,ok:i,to:`results`}];return(0,R.jsxs)(`div`,{className:`ag-page`,children:[(0,R.jsxs)(eD,{title:`Aftershock`,desc:`Season 1 · write the program that runs an earthquake response`,children:[(0,R.jsxs)(`span`,{className:`ag-partner`,children:[(0,R.jsx)(o,{}),`Palantir`]}),(0,R.jsxs)(`button`,{className:`ag-btn ag-btn--ink`,onClick:()=>e(`play`),children:[`Play the first day `,(0,R.jsx)(lD,{})]})]}),(0,R.jsx)(`section`,{className:`ag-how`,"data-label":`How it works`,children:[{n:`1`,h:`An earthquake hits an island`,p:`Thousands are trapped, hurt or homeless in the cold. Roads are cracked. You have 18 teams, 14 trucks and a depot of supplies.`},{n:`2`,h:`Every 6 hours, someone decides`,p:`Where each team goes, what each truck carries, which road to risk. Try it by hand first.`,to:`play`,cta:`Play the first day`},{n:`3`,h:`You write the bot that decides`,p:`It runs all 7 days on 40 islands it has never seen. Score: people saved, compared with doing nothing.`,to:`build`,cta:`Write your bot`}].map(t=>(0,R.jsxs)(`article`,{children:[(0,R.jsx)(`span`,{className:`ag-mono`,children:t.n}),(0,R.jsx)(`h3`,{children:t.h}),(0,R.jsx)(`p`,{children:t.p}),t.to&&(0,R.jsx)(`button`,{className:`ag-link`,onClick:()=>e(t.to),children:t.cta})]},t.n))}),(0,R.jsx)(`section`,{className:`ag-rounds`,"data-label":`Rounds`,children:g.map(e=>(0,R.jsxs)(`article`,{className:`ag-round is-${e.state}`,children:[(0,R.jsxs)(`div`,{className:`ag-round-top`,children:[(0,R.jsx)(`span`,{className:`ag-mono`,children:YE(e.n)}),(0,R.jsx)(`span`,{className:`ag-round-s`,children:e.state===`closed`?`Scored`:e.state===`open`?`Open now`:e.dates})]}),(0,R.jsx)(`h3`,{children:e.name}),(0,R.jsx)(`p`,{children:e.adds}),(0,R.jsxs)(`dl`,{children:[(0,R.jsx)(`dt`,{children:`Manual call`}),(0,R.jsx)(`dd`,{children:e.manual})]}),e.state===`closed`&&(0,R.jsxs)(`b`,{className:`ag-round-sc ag-mono`,children:[$(p.round1),` saved`]}),e.state===`open`&&(0,R.jsx)(`b`,{className:`ag-round-sc ag-mono`,children:e.dates})]},e.n))}),(0,R.jsxs)(`div`,{className:`ag-cols`,children:[(0,R.jsxs)(`section`,{className:`ag-card`,"data-label":`Standings`,children:[(0,R.jsxs)(`div`,{className:`ag-card-h`,children:[(0,R.jsx)(`h2`,{children:`Standings`}),(0,R.jsxs)(`span`,{className:`ag-mono ag-dim`,children:[312,` teams`]})]}),(0,R.jsxs)(`table`,{className:`ag-table`,children:[(0,R.jsx)(`thead`,{children:(0,R.jsxs)(`tr`,{children:[(0,R.jsx)(`th`,{children:`#`}),(0,R.jsx)(`th`,{children:`Team`}),(0,R.jsx)(`th`,{className:`num`,children:`Round 1`}),(0,R.jsx)(`th`,{className:`num`,children:`Round 2`}),(0,R.jsx)(`th`,{className:`num`,children:`Total`})]})}),(0,R.jsx)(`tbody`,{children:l.map(e=>{let t=s.indexOf(e)+1;return(0,R.jsxs)(`tr`,{className:e.mine?`is-mine`:void 0,children:[(0,R.jsx)(`td`,{className:`ag-rank ag-mono`,children:t}),(0,R.jsxs)(`td`,{children:[(0,R.jsx)(`b`,{children:e.name}),e.mine&&(0,R.jsx)(`span`,{className:`ag-you`,children:`You`})]}),(0,R.jsx)(`td`,{className:`num ag-mono`,children:$(e.r1)}),(0,R.jsx)(`td`,{className:`num ag-mono`,children:e.r2?$(e.r2):`—`}),(0,R.jsx)(`td`,{className:`num ag-mono`,children:(0,R.jsx)(`b`,{children:$(e.r1+e.r2)})})]},e.name)})})]})]}),(0,R.jsxs)(`aside`,{className:`ag-side`,children:[(0,R.jsxs)(`section`,{className:`ag-card`,"data-label":`This round`,children:[(0,R.jsxs)(`div`,{className:`ag-card-h`,children:[(0,R.jsx)(`h2`,{children:`Round 2`}),(0,R.jsx)(`span`,{className:`ag-mono ag-dim`,children:`Roads`})]}),(0,R.jsx)(`ol`,{className:`ag-steps`,children:u.map((t,n)=>(0,R.jsx)(`li`,{className:t.ok?`is-done`:void 0,children:(0,R.jsxs)(`button`,{onClick:()=>e(t.to),children:[(0,R.jsx)(`span`,{className:`ag-step-n ag-mono`,children:t.ok?(0,R.jsx)(uD,{}):n+1}),(0,R.jsx)(`span`,{children:t.label}),(0,R.jsx)(lD,{})]})},t.label))})]}),(0,R.jsxs)(`section`,{className:`ag-card`,"data-label":`Team`,children:[(0,R.jsxs)(`div`,{className:`ag-card-h`,children:[(0,R.jsx)(`h2`,{children:p.name}),(0,R.jsxs)(`span`,{className:`ag-mono ag-dim`,children:[`#`,c+1,` of `,312]})]}),(0,R.jsx)(`ul`,{className:`ag-members`,children:p.members.map(e=>(0,R.jsx)(`li`,{children:e},e))})]})]})]})]})}function nD({code:e,setCode:t,err:n,practice:r,run:i,load:a}){let[o,s]=(0,L.useState)(!1),c=()=>{s(!0),setTimeout(()=>{i(),s(!1)},380)},l=n?Number(n.match(/<anonymous>:(\d+)/)?.[1]??0)-2:void 0;return(0,R.jsxs)(`div`,{className:`ag-page`,children:[(0,R.jsxs)(eD,{title:`Build`,desc:`Your bot gives the orders you gave by hand, every 6 hours, for all 7 days`,children:[(0,R.jsxs)(`select`,{className:`ag-select`,"aria-label":`Load a bot`,value:``,onChange:e=>{let t=e.target.value;t&&a(t===`starter`?Ye:t===`reference`?Ze:Xe)},children:[(0,R.jsx)(`option`,{value:``,children:`Load…`}),(0,R.jsx)(`option`,{value:`starter`,children:`Starter bot`}),(0,R.jsx)(`option`,{value:`reference`,children:`Reference bot (spoiler)`}),(0,R.jsx)(`option`,{value:`nothing`,children:`Do nothing`})]}),(0,R.jsxs)(`button`,{className:`ag-btn ag-btn--ink`,onClick:c,disabled:o,children:[o?`Running 28 turns…`:`Run on practice island`,(0,R.jsx)(`kbd`,{children:`⌘↵`})]})]}),(0,R.jsxs)(`div`,{className:`ag-build`,children:[(0,R.jsxs)(`section`,{className:`ag-edbox`,"data-label":`Code editor`,children:[(0,R.jsxs)(`div`,{className:`ag-ed-head`,children:[(0,R.jsx)(`span`,{className:`ag-mono`,children:`halyard/aftershock.js`}),(0,R.jsx)(`span`,{className:`ag-dim`,children:`JavaScript · Python opens in round 3`})]}),(0,R.jsx)(HE,{value:e,onChange:t,onRun:c,errLine:l}),n&&(0,R.jsxs)(`div`,{className:`ag-err`,children:[(0,R.jsx)(`b`,{children:`Didn't compile.`}),` `,n]})]}),(0,R.jsxs)(`aside`,{className:`ag-side`,children:[r&&(0,R.jsxs)(`section`,{className:`ag-card`,"data-label":`Last run`,children:[(0,R.jsxs)(`div`,{className:`ag-card-h`,children:[(0,R.jsx)(`h2`,{children:`Last run`}),(0,R.jsx)(`span`,{className:`ag-mono ag-dim`,children:r.label})]}),(0,R.jsxs)(`div`,{className:`ag-big`,children:[(0,R.jsx)(`b`,{className:`ag-mono`,children:$(r.s.saved)}),(0,R.jsxs)(`span`,{children:[`people saved of ~`,$(r.s.possible),` possible`]})]}),(0,R.jsx)(rD,{v:r.s.saved/r.s.possible}),(0,R.jsxs)(`dl`,{className:`ag-kv`,children:[(0,R.jsx)(`dt`,{children:`Trips`}),(0,R.jsxs)(`dd`,{className:`ag-mono`,children:[r.s.res.trips,` · `,r.s.res.failed,` stuck`]}),(0,R.jsx)(`dt`,{children:`Spent`}),(0,R.jsxs)(`dd`,{className:`ag-mono`,children:[`$`,(r.s.res.spent/1e3).toFixed(1),`M of $6.0M`]}),(0,R.jsx)(`dt`,{children:`Main roads open`}),(0,R.jsxs)(`dd`,{className:`ag-mono`,children:[Math.round(r.s.roadsOpen*100),`%`]})]}),r.s.res.error&&(0,R.jsx)(`div`,{className:`ag-err`,children:r.s.res.error})]}),(0,R.jsxs)(`section`,{className:`ag-card`,"data-label":`By hand, in code`,children:[(0,R.jsx)(`div`,{className:`ag-card-h`,children:(0,R.jsx)(`h2`,{children:`By hand → in code`})}),(0,R.jsxs)(`dl`,{className:`ag-api ag-xlate`,children:[(0,R.jsx)(`dt`,{children:`+ Rescue team`}),(0,R.jsx)(`dd`,{children:(0,R.jsx)(`code`,{children:`act.role(id, 'rescue'); act.move(id, 'old')`})}),(0,R.jsx)(`dt`,{children:`Truck: water + food`}),(0,R.jsx)(`dd`,{children:(0,R.jsxs)(`code`,{children:[`act.send('truck', 'old', `,`{`,` water: 3, rations: 3 `,`}`,`)`]})}),(0,R.jsx)(`dt`,{children:`Clicking a district`}),(0,R.jsx)(`dd`,{children:(0,R.jsx)(`code`,{children:`view.districts.old.trapped`})}),(0,R.jsx)(`dt`,{children:`The route on the map`}),(0,R.jsx)(`dd`,{children:(0,R.jsxs)(`code`,{children:[`view.path('port', 'old', `,`{`,` by: 'safe' `,`}`,`)`]})}),(0,R.jsx)(`dt`,{children:`End turn`}),(0,R.jsxs)(`dd`,{children:[`happens for you: `,(0,R.jsx)(`code`,{children:`onTurn`}),` runs 28 times`]})]})]}),(0,R.jsxs)(`section`,{className:`ag-card ag-ref`,"data-label":`Reference`,children:[(0,R.jsx)(`div`,{className:`ag-card-h`,children:(0,R.jsx)(`h2`,{children:`Reference`})}),(0,R.jsxs)(`details`,{open:!0,children:[(0,R.jsx)(`summary`,{children:`The loop`}),(0,R.jsxs)(`p`,{children:[(0,R.jsx)(`code`,{children:`onTurn(view, act, memory)`}),` runs once a turn. Orders apply at once; anything on `,(0,R.jsx)(`code`,{children:`memory`}),` survives to the next turn.`]})]}),(0,R.jsxs)(`details`,{children:[(0,R.jsx)(`summary`,{children:`Orders`}),(0,R.jsxs)(`dl`,{className:`ag-api`,children:[(0,R.jsx)(`dt`,{children:`act.send(v, to, cargo, route?)`}),(0,R.jsx)(`dd`,{children:`truck 6 · van 2 · heli 3 · boat 15 units`}),(0,R.jsx)(`dt`,{children:`act.move(team, to, 'heli'?)`}),(0,R.jsx)(`dd`,{children:`a team that arrives works ¾ of that turn`}),(0,R.jsx)(`dt`,{children:`act.role(team, r)`}),(0,R.jsx)(`dd`,{children:`rescue · medical · engineer`}),(0,R.jsx)(`dt`,{children:`act.repair(team, roadId)`}),(0,R.jsx)(`dd`,{children:`engineer, road in its district, $150K`}),(0,R.jsx)(`dt`,{children:`act.build(d, kind)`}),(0,R.jsx)(`dd`,{children:`hospital $600K · camp $400K, one land plot`}),(0,R.jsx)(`dt`,{children:`act.buy(item, qty)`}),(0,R.jsx)(`dd`,{children:`arrives next turn`})]})]}),(0,R.jsxs)(`details`,{children:[(0,R.jsx)(`summary`,{children:`Reads`}),(0,R.jsxs)(`dl`,{className:`ag-api`,children:[(0,R.jsx)(`dt`,{children:`view.districts[id]`}),(0,R.jsx)(`dd`,{children:`trapped, injured, unsheltered, waterNeed…`}),(0,R.jsx)(`dt`,{children:`view.path(a, b, opts)`}),(0,R.jsx)(`dd`,{children:`route, km, hours, chance; by 'time' · 'km' · 'safe'`}),(0,R.jsx)(`dt`,{children:`view.roads[id]`}),(0,R.jsx)(`dd`,{children:`cls, km, grade, cond 0–3, district`}),(0,R.jsx)(`dt`,{children:`view.forecast`}),(0,R.jsx)(`dd`,{children:`snow window, aftershock zones and odds`})]})]}),(0,R.jsxs)(`details`,{children:[(0,R.jsx)(`summary`,{children:`What kills`}),(0,R.jsxs)(`dl`,{className:`ag-api`,children:[(0,R.jsx)(`dt`,{children:`Trapped`}),(0,R.jsx)(`dd`,{children:`survive 95% a turn for 24 h, 90% to 72 h, then 78%`}),(0,R.jsx)(`dt`,{children:`Injured`}),(0,R.jsx)(`dd`,{children:`4% a turn untreated (5% in the hills)`}),(0,R.jsx)(`dt`,{children:`Cold`}),(0,R.jsx)(`dd`,{children:`night turns, unsheltered; hills ×4, snow ×1.6`}),(0,R.jsx)(`dt`,{children:`Thirst, hunger`}),(0,R.jsx)(`dd`,{children:`shortfalls raise disease and hunger; above 1.0 they kill`})]})]})]})]})]})]})}function rD({v:e}){return(0,R.jsx)(`div`,{className:`ag-meter`,role:`meter`,"aria-valuenow":Math.round(e*100),"aria-valuemin":0,"aria-valuemax":100,children:(0,R.jsx)(`i`,{style:{width:`${Math.min(100,e*100)}%`}})})}function iD({practice:e,ensure:t,go:n}){return(0,L.useEffect)(()=>{e||t()},[e,t]),e?(0,R.jsx)(aD,{practice:e,go:n},`${e.seed}-${e.s.saved}-${e.label}`):(0,R.jsx)(`div`,{className:`ag-page`})}function aD({practice:e,go:t}){let{s:n,label:r}=e,{res:i,base:a}=n,[o,s]=(0,L.useState)(0),[l,u]=(0,L.useState)(!0),[d,f]=(0,L.useState)(2),[p,m]=(0,L.useState)(null),[h,g]=(0,L.useState)(`districts`),_=(0,L.useRef)(performance.now());(0,L.useEffect)(()=>{let e=0,t=n=>{let r=Math.min(.5,(n-_.current)/1e3);_.current=n,l&&s(e=>{let t=e+r*d/1.5;return t>=28?(u(!1),27.9999):t}),e=requestAnimationFrame(t)};return e=requestAnimationFrame(t),()=>cancelAnimationFrame(e)},[l,d]),(0,L.useEffect)(()=>{let e=e=>{e.target.closest(`input, textarea, select`)||(e.key===` `&&(e.preventDefault(),u(e=>!e)),e.key===`ArrowRight`&&s(e=>Math.min(27.9999,Math.floor(e)+1)),e.key===`ArrowLeft`&&s(e=>Math.max(0,Math.floor(e)-1)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[]);let v=Math.min(27,Math.floor(o)),y=o-v,b=i.frames[v],x=v===0?null:i.frames[v-1].cond,S=We(v),C=(v===0?0:n.savedAt[v-1])+(n.savedAt[v]-(v===0?0:n.savedAt[v-1]))*Math.min(1,y/.8),w=i.log.filter(e=>e.t<=v).slice(-60).reverse(),T=i.frames.map((e,t)=>e.event?t:-1).filter(e=>e>=0);return(0,R.jsxs)(`div`,{className:`ag-page ag-page--replay`,children:[(0,R.jsxs)(eD,{title:`Replay`,desc:`What your bot did on the ${r.toLowerCase()}, turn by turn · ${i.error?`stopped with an error`:`${i.trips} trips, ${i.failed} stuck`}`,children:[(0,R.jsx)(`button`,{className:`ag-btn`,onClick:()=>t(`build`),children:`Edit the bot`}),(0,R.jsxs)(`button`,{className:`ag-btn ag-btn--ink`,onClick:()=>t(`results`),children:[`Submit `,(0,R.jsx)(lD,{})]})]}),(0,R.jsxs)(`div`,{className:`ag-stage`,children:[(0,R.jsxs)(`section`,{className:`ag-mapbox`,"data-label":`Replay map`,children:[(0,R.jsx)(LE,{island:i.island,roadIds:i.roadIds,cond:x,trips:b.trips,teams:b.teams,p:y,danger:Object.fromEntries(c.map(e=>[e,{trapped:b.d[e].trapped,injured:b.d[e].injured}])),event:b.event,night:S.night,selected:p,onSelect:m}),(0,R.jsxs)(`div`,{className:`ag-map-tl ag-glass ag-clock`,children:[(0,R.jsxs)(`span`,{className:`ag-mono`,children:[`TURN `,YE(v+1),`/`,28]}),(0,R.jsxs)(`b`,{className:`ag-mono`,children:[`Day `,S.day,` · `,YE(S.hour),`:00`]}),(0,R.jsx)(`span`,{children:[S.snow&&`Snowstorm`,S.night&&`Night`,b.event&&`Aftershock M${b.event.mag}`].filter(Boolean).join(` · `)||`Daylight`})]}),(0,R.jsxs)(`div`,{className:`ag-map-tr ag-glass ag-saved`,"data-explore":`a live people-saved counter as the replay's headline`,children:[(0,R.jsx)(`span`,{children:`People saved`}),(0,R.jsx)(`b`,{className:`ag-mono`,children:$(C)}),(0,R.jsx)(rD,{v:C/n.possible})]}),(0,R.jsxs)(`div`,{className:`ag-transport ag-glass`,children:[(0,R.jsx)(`button`,{className:`ag-play`,onClick:()=>{o>=27.99&&s(0),u(!l)},"aria-label":l?`Pause`:`Play`,children:l?(0,R.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`16`,height:`16`,children:(0,R.jsx)(`path`,{d:`M7 5h3v14H7zM14 5h3v14h-3z`,fill:`currentColor`})}):(0,R.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`16`,height:`16`,children:(0,R.jsx)(`path`,{d:`M7 5v14l11-7z`,fill:`currentColor`})})}),(0,R.jsxs)(`div`,{className:`ag-scrub`,children:[(0,R.jsx)(`div`,{className:`ag-scrub-snow`,style:{left:`${13/28*100}%`,width:`${5/28*100}%`}}),T.map(e=>(0,R.jsx)(`i`,{className:`ag-scrub-ev`,style:{left:`${(e+.5)/28*100}%`}},e)),(0,R.jsx)(`input`,{type:`range`,min:0,max:27.9999,step:.01,value:o,"aria-label":`Turn`,onChange:e=>{s(Number(e.target.value)),u(!1)}}),(0,R.jsx)(`div`,{className:`ag-scrub-days ag-mono`,children:[1,2,3,4,5,6,7].map(e=>(0,R.jsxs)(`span`,{children:[`D`,e]},e))})]}),(0,R.jsx)(`div`,{className:`ag-seg`,role:`group`,"aria-label":`Speed`,children:[1,2,6].map(e=>(0,R.jsxs)(`button`,{"aria-pressed":d===e,onClick:()=>f(e),className:`ag-mono`,children:[e,`×`]},e))})]})]}),(0,R.jsxs)(`aside`,{className:`ag-panel`,"data-label":`Replay panel`,children:[(0,R.jsx)(`div`,{className:`ag-tabs`,role:`tablist`,children:[`districts`,`teams`,`log`].map(e=>(0,R.jsx)(`button`,{role:`tab`,"aria-selected":h===e,onClick:()=>g(e),children:e[0].toUpperCase()+e.slice(1)},e))}),h===`districts`&&(0,R.jsx)(`div`,{className:`ag-tiles`,children:c.map(e=>{let t=b.d[e],n=i.island.districts[e],r=Math.max(0,a.frames[v].d[e].deaths-t.deaths),o=t.tents*250+t.camps*2e3;return(0,R.jsxs)(`button`,{className:`ag-tile`,"aria-pressed":p===e,onClick:()=>m(p===e?null:e),children:[(0,R.jsxs)(`span`,{className:`ag-tile-h`,children:[(0,R.jsx)(`span`,{className:`ag-mono`,children:n.code}),(0,R.jsx)(`b`,{children:n.name}),(0,R.jsxs)(`span`,{className:`ag-tile-saved ag-mono`,children:[`+`,$(r)]})]}),(0,R.jsxs)(`span`,{className:`ag-tile-n`,children:[(0,R.jsxs)(`span`,{children:[(0,R.jsx)(`b`,{className:`ag-mono`,children:$(t.trapped)}),`trapped`]}),(0,R.jsxs)(`span`,{children:[(0,R.jsx)(`b`,{className:`ag-mono`,children:$(t.injured)}),`injured`]}),(0,R.jsxs)(`span`,{children:[(0,R.jsx)(`b`,{className:`ag-mono`,children:$(Math.max(0,t.displaced-o))}),`in the cold`]})]}),(t.disease>1||t.hunger>1)&&(0,R.jsx)(`span`,{className:`ag-tile-warn`,children:t.disease>1?`Disease spreading`:`Hunger`})]},e)})}),h===`teams`&&(0,R.jsxs)(`table`,{className:`ag-table ag-table--tight`,children:[(0,R.jsx)(`thead`,{children:(0,R.jsxs)(`tr`,{children:[(0,R.jsx)(`th`,{children:`Team`}),(0,R.jsx)(`th`,{children:`Role`}),(0,R.jsx)(`th`,{children:`Where`})]})}),(0,R.jsx)(`tbody`,{children:b.teams.map(e=>(0,R.jsxs)(`tr`,{children:[(0,R.jsx)(`td`,{className:`ag-mono`,children:e.id}),(0,R.jsx)(`td`,{children:e.role}),(0,R.jsxs)(`td`,{children:[i.island.districts[e.at].name,e.moving?(0,R.jsx)(`span`,{className:`ag-dim`,children:` · moving`}):null]})]},e.id))})]}),h===`log`&&(0,R.jsx)(`ol`,{className:`ag-log`,children:w.length?w.map((e,t)=>(0,R.jsxs)(`li`,{className:`sev-${e.sev}`,children:[(0,R.jsxs)(`span`,{className:`ag-mono`,children:[`T`,YE(e.t+1)]}),(0,R.jsx)(`span`,{children:e.msg})]},t)):(0,R.jsx)(`li`,{className:`ag-dim`,children:`Nothing yet.`})})]})]})]})}function oD({picks:e,setPicks:t,locked:n,lock:r,go:i}){let a=[...v].sort((e,t)=>s(t)-s(e)).slice(0,2),o=e.reduce((e,t)=>e+s(v.find(e=>e.id===t)),0),c=a.reduce((e,t)=>e+s(t),0),l=Math.max(...v.map(e=>e.share)),u=r=>{n||t(e.includes(r)?e.filter(e=>e!==r):e.length<2?[...e,r]:[e[1],r])};return(0,R.jsxs)(`div`,{className:`ag-page`,children:[(0,R.jsx)(eD,{title:`Airlift call`,desc:`Pick two airfields. Each one's cargo is split between the crews there and every team that picks it`,children:n?(0,R.jsxs)(`button`,{className:`ag-btn ag-btn--ink`,onClick:()=>i(`results`),children:[`To results `,(0,R.jsx)(lD,{})]}):(0,R.jsxs)(`button`,{className:`ag-btn ag-btn--ink`,disabled:e.length<2,onClick:r,children:[`Lock in `,e.length,`/2`]})}),(0,R.jsx)(`div`,{className:`ag-formula ag-mono`,"data-label":`Formula`,children:`tonnes you receive = cargo ÷ (crews already there + % of teams who pick it)`}),(0,R.jsx)(`section`,{className:`ag-fields`,"data-label":`Airfields`,children:v.map(t=>{let r=e.includes(t.id);return(0,R.jsxs)(`button`,{className:`ag-field${r?` is-on`:``}`,"aria-pressed":r,onClick:()=>u(t.id),disabled:n&&!r,children:[(0,R.jsxs)(`span`,{className:`ag-field-h`,children:[(0,R.jsx)(`span`,{className:`ag-mono`,children:t.id}),(0,R.jsx)(`b`,{children:t.name})]}),(0,R.jsx)(`span`,{className:`ag-field-note`,children:t.note}),(0,R.jsxs)(`span`,{className:`ag-field-n`,children:[(0,R.jsxs)(`span`,{children:[(0,R.jsx)(`b`,{className:`ag-mono`,children:t.cargo}),`tonnes`]}),(0,R.jsxs)(`span`,{children:[(0,R.jsx)(`b`,{className:`ag-mono`,children:t.crews}),`crews there`]})]}),n&&(0,R.jsxs)(`span`,{className:`ag-field-crowd`,children:[(0,R.jsx)(`span`,{className:`ag-bar`,children:(0,R.jsx)(`i`,{style:{width:`${t.share/l*100}%`}})}),(0,R.jsxs)(`span`,{className:`ag-mono`,children:[t.share,`% of teams`]}),(0,R.jsxs)(`span`,{className:`ag-mono ag-field-get`,children:[s(t).toFixed(1),` t each`]})]})]},t.id)})}),n&&(0,R.jsxs)(`section`,{className:`ag-card ag-verdict`,"data-label":`Verdict`,children:[(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`span`,{children:`You receive`}),(0,R.jsxs)(`b`,{className:`ag-mono`,children:[o.toFixed(1),` t`]}),(0,R.jsxs)(`small`,{children:[$(o*6),` people reached`]})]}),(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`span`,{children:`Best pair`}),(0,R.jsxs)(`b`,{className:`ag-mono`,children:[c.toFixed(1),` t`]}),(0,R.jsx)(`small`,{children:a.map(e=>e.name).join(` + `)})]}),(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`span`,{children:`Most-picked`}),(0,R.jsx)(`b`,{children:v.reduce((e,t)=>t.share>e.share?t:e).name}),(0,R.jsx)(`small`,{children:`the biggest cargo, split the most ways`})]})]})]})}function sD({hidden:e,busy:t,submit:n,practice:r,airlift:i,locked:a,r2:o,watch:s,go:c,ensure:l}){(0,L.useEffect)(()=>{r||l()},[r,l]);let u=e&&e.length===JE.length&&!t,f=u?e.reduce((e,t)=>e+t.saved,0)/e.length:0,p=u?e.reduce((e,t)=>e+t.possible,0)/e.length:0,h=(0,L.useMemo)(()=>d(o),[o]),g=h.findIndex(e=>e.mine)+1,v=1-(g-1)/h.length,y=_(v),b=r&&u?f/p/(r.s.saved/r.s.possible):null,x=u?e.reduce((t,n,r)=>n.saved/n.possible<e[t].saved/e[t].possible?r:t,0):-1,S=u?h.slice(Math.max(0,g-3),g+2):[];return(0,R.jsxs)(`div`,{className:`ag-page`,children:[(0,R.jsxs)(eD,{title:`Results`,desc:u?`Round 2 · scored on ${JE.length} hidden islands`:`Your bot runs on islands it has never seen`,children:[!u&&(0,R.jsx)(`button`,{className:`ag-btn ag-btn--ink`,onClick:n,disabled:t,children:t?`Scoring ${e?.length??0}/${JE.length}…`:`Submit round 2`}),u&&(0,R.jsx)(`button`,{className:`ag-btn`,onClick:n,children:`Resubmit`})]}),(0,R.jsxs)(`section`,{className:`ag-card ag-hidden`,"data-label":`Hidden islands`,"data-explore":`the 40 hidden islands as silhouettes that fill as they're scored`,children:[(0,R.jsxs)(`div`,{className:`ag-card-h`,children:[(0,R.jsx)(`h2`,{children:`Hidden islands`}),(0,R.jsx)(`span`,{className:`ag-mono ag-dim`,children:u?`click one to watch it`:t?`scoring…`:`mirrored, turned, a different fault each time`})]}),(0,R.jsx)(`div`,{className:`ag-isles`,children:JE.map((t,n)=>{let r=e?.[n];return(0,R.jsx)(cD,{seed:t,k:n+1,h:r,worst:n===x,onClick:r&&u?()=>s(t,n+1):void 0},t)})})]}),u&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(`section`,{className:`ag-kpis`,"data-label":`Round score`,children:[(0,R.jsxs)(`div`,{className:`ag-kpi`,children:[(0,R.jsx)(`span`,{children:`Round 2 score`}),(0,R.jsx)(`b`,{className:`ag-mono`,children:$(o)}),(0,R.jsx)(`small`,{children:`people saved`})]}),(0,R.jsxs)(`div`,{className:`ag-kpi`,children:[(0,R.jsx)(`span`,{children:`Hidden islands`}),(0,R.jsx)(`b`,{className:`ag-mono`,children:$(f)}),(0,R.jsxs)(`small`,{children:[`average, of ~`,$(p)]})]}),(0,R.jsxs)(`div`,{className:`ag-kpi`,children:[(0,R.jsx)(`span`,{children:`Practice island`}),(0,R.jsx)(`b`,{className:`ag-mono`,children:r?$(r.s.saved):`—`}),(0,R.jsx)(`small`,{children:r?`of ~${$(r.s.possible)}`:``})]}),(0,R.jsxs)(`div`,{className:`ag-kpi`,children:[(0,R.jsx)(`span`,{children:`Holds up off practice`}),(0,R.jsx)(`b`,{className:`ag-mono ${b!==null&&b<.85?`is-down`:`is-up`}`,children:b===null?`—`:`${Math.round(b*100)}%`}),(0,R.jsx)(`small`,{children:b!==null&&b<.85?`tuned to the practice island`:`plans, not scripts`})]}),(0,R.jsxs)(`div`,{className:`ag-kpi`,children:[(0,R.jsx)(`span`,{children:`Airlift`}),(0,R.jsx)(`b`,{className:`ag-mono`,children:a?$(i*6):`—`}),(0,R.jsx)(`small`,{children:a?`${i} t × 6`:(0,R.jsx)(`button`,{className:`ag-link`,onClick:()=>c(`airlift`),children:`make the call`})})]})]}),(0,R.jsxs)(`div`,{className:`ag-cols`,children:[(0,R.jsxs)(`section`,{className:`ag-card`,"data-label":`Standings`,children:[(0,R.jsxs)(`div`,{className:`ag-card-h`,children:[(0,R.jsx)(`h2`,{children:`Standings`}),(0,R.jsxs)(`span`,{className:`ag-mono ag-dim`,children:[`#`,g,` of `,312]})]}),(0,R.jsxs)(`table`,{className:`ag-table`,children:[(0,R.jsx)(`thead`,{children:(0,R.jsxs)(`tr`,{children:[(0,R.jsx)(`th`,{children:`#`}),(0,R.jsx)(`th`,{children:`Team`}),(0,R.jsx)(`th`,{className:`num`,children:`Round 1`}),(0,R.jsx)(`th`,{className:`num`,children:`Round 2`}),(0,R.jsx)(`th`,{className:`num`,children:`Total`})]})}),(0,R.jsx)(`tbody`,{children:S.map(e=>(0,R.jsxs)(`tr`,{className:e.mine?`is-mine`:void 0,children:[(0,R.jsx)(`td`,{className:`ag-rank ag-mono`,children:h.indexOf(e)+1}),(0,R.jsxs)(`td`,{children:[(0,R.jsx)(`b`,{children:e.name}),e.mine&&(0,R.jsx)(`span`,{className:`ag-you`,children:`You`})]}),(0,R.jsx)(`td`,{className:`num ag-mono`,children:$(e.r1)}),(0,R.jsx)(`td`,{className:`num ag-mono`,children:$(e.r2)}),(0,R.jsx)(`td`,{className:`num ag-mono`,children:(0,R.jsx)(`b`,{children:$(e.r1+e.r2)})})]},e.name))})]})]}),(0,R.jsx)(`aside`,{className:`ag-side`,children:(0,R.jsxs)(`section`,{className:`ag-card ag-zeus`,"data-label":`On your Zeus profile`,"data-explore":`the recruiter-facing card shown right after scoring`,children:[(0,R.jsx)(`div`,{className:`ag-card-h`,children:(0,R.jsx)(`h2`,{children:`On your Zeus profile`})}),(0,R.jsxs)(`div`,{className:`ag-zeus-r`,children:[(0,R.jsx)(`b`,{className:`ag-mono`,children:$(y)}),(0,R.jsxs)(`span`,{children:[`Aftershock rating · `,m(y)]})]}),(0,R.jsxs)(`dl`,{className:`ag-kv`,children:[(0,R.jsx)(`dt`,{children:`Placement`}),(0,R.jsxs)(`dd`,{className:`ag-mono`,children:[`top `,Math.max(1,Math.round(g/312*100)),`%`]}),(0,R.jsx)(`dt`,{children:`Holds up off practice`}),(0,R.jsx)(`dd`,{className:`ag-mono`,children:b===null?`—`:`${Math.round(b*100)}%`}),(0,R.jsx)(`dt`,{children:`Replay`}),(0,R.jsx)(`dd`,{children:(0,R.jsx)(`button`,{className:`ag-link`,onClick:()=>s(JE[x],x+1),children:`Hardest island`})})]})]})})]})]})]})}function cD({seed:e,k:t,h:n,worst:r,onClick:i}){let a=(0,L.useRef)(null),o=(0,L.useMemo)(()=>l(e),[e]),s=n?Math.max(0,Math.min(1,n.saved/n.possible)):null;return(0,L.useEffect)(()=>{a.current&&tt(a.current,o,s)}),(0,R.jsxs)(`button`,{className:`ag-isle${n?` is-done`:``}${r?` is-worst`:``}`,onClick:i,disabled:!i,title:n?`Island ${t}: ${$(n.saved)} saved of ~${$(n.possible)}`:`Island ${t}`,children:[(0,R.jsx)(`canvas`,{ref:a,"aria-hidden":!0}),(0,R.jsx)(`span`,{className:`ag-mono`,children:n?$(n.saved):YE(t)})]})}function lD(){return(0,R.jsx)(`svg`,{viewBox:`0 0 16 16`,width:`14`,height:`14`,"aria-hidden":!0,children:(0,R.jsx)(`path`,{d:`M3 8h10m-4-4 4 4-4 4`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`})})}function uD(){return(0,R.jsx)(`svg`,{viewBox:`0 0 16 16`,width:`12`,height:`12`,"aria-hidden":!0,children:(0,R.jsx)(`path`,{d:`m3.5 8.5 3 3 6-7`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`})})}(0,ze.createRoot)(document.getElementById(`root`)).render((0,R.jsx)(L.StrictMode,{children:(0,R.jsx)(ZE,{})}));export{Vf as n,Zf as t};