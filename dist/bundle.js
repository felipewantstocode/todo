(() => {
  "use strict";
  const e = [];
  e.push({
    project: "Studies",
    title: "Do this stuff",
    description: "Create todo list",
    state: "In progress",
    due: "date?",
    priority: 3,
    notes: "blablabla",
    complete: !1,
    toggleComplete: () => {
      (void 0).complete ? ((void 0).complete = !1) : ((void 0).complete = !0);
    },
  }),
    e.forEach((e) => {
      document.querySelector("body").appendChild(
        (function (e) {
          const t = document.createElement("div"),
            n = document.createElement("div");
          n.textContent = e.project;
          const o = document.createElement("h2");
          o.textContent = e.title;
          const d = document.createElement("div");
          d.textContent = e.description;
          const c = document.createElement("div");
          c.textContent = e.state;
          const i = document.createElement("div");
          i.textContent = e.due;
          const l = document.createElement("div");
          l.textContent = e.priority;
          const p = document.createElement("div");
          return (
            (p.textContent = e.notes),
            t.appendChild(n),
            t.appendChild(o),
            t.appendChild(d),
            t.appendChild(c),
            t.appendChild(i),
            t.appendChild(l),
            t.appendChild(p),
            t
          );
        })(e)
      );
    });
})();
