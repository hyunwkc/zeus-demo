// Access-code tracking for the Zeus demo. Sends to https://zeus-track.vercel.app/api/hit:
//   visit     every load of this page
//   code      every access code submitted (valid or not)
//   progress  seat created / chapter advanced / walkthrough finished (read from the app's zeus:access:<code> saves)
// Loaded as a plain script before the app so the localStorage hook is in place first. Never throws into the app.
(function () {
  var URL_ = "https://zeus-track.vercel.app/api/hit"
  var tid
  try { tid = localStorage.getItem("zeus:tid"); if (!tid) { tid = Math.random().toString(36).slice(2, 12); localStorage.setItem("zeus:tid", tid) } } catch (e) { tid = "nostorage" }

  function send(ev) {
    try {
      ev.tid = tid; ev.page = location.href; ev.ref = document.referrer || null
      var body = JSON.stringify(ev)
      if (!(navigator.sendBeacon && navigator.sendBeacon(URL_, new Blob([body], { type: "text/plain" }))))
        fetch(URL_, { method: "POST", body: body, keepalive: true, mode: "no-cors" })
    } catch (e) { /* tracking must never break the demo */ }
  }

  send({ type: "visit" })

  // a code submitted on the access screen (every look puts the code field in a form[data-ob-screen])
  document.addEventListener("submit", function (e) {
    try {
      var f = e.target
      if (!f || !f.matches || !f.matches("form[data-ob-screen]")) return
      var i = f.querySelector("input")
      if (i && i.value.trim()) send({ type: "code", code: i.value.trim() })
    } catch (err) { /* ignore */ }
  }, true)

  // seat and progress: the app saves zeus:access:<code> on every step; report only real changes
  var last = {}
  try {
    var proto = Storage.prototype, set = proto.setItem
    proto.setItem = function (k, v) {
      set.apply(this, arguments)
      try {
        if (this !== window.localStorage || typeof k !== "string" || k.indexOf("zeus:access:") !== 0 || k === "zeus:access:current") return
        var s = JSON.parse(v); if (!s || !s.access) return
        var sig = JSON.stringify([s.seat, s.ch, s.done])
        if (last[k] === sig) return
        last[k] = sig
        send({ type: "progress", code: s.access.code, seat: s.seat, ch: s.ch, done: s.done })
      } catch (err) { /* ignore */ }
    }
  } catch (e) { /* ignore */ }
})()
