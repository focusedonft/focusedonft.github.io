gsap.fromTo(
  ".left h1 span",
  { yPercent: 20, opacity: 0 },
  { yPercent: 0, opacity: 1, duration: 3, stagger: 0.2, ease: "power4.out" }
);
gsap.fromTo(
  ".left a ",
  { yPercent: 200, opacity: 0 },
  { yPercent: 0, opacity: 1, duration: 3, ease: "power4.out" }
);
gsap.fromTo(
  ".right p ",
  { yPercent: 200, opacity: 0 },
  { yPercent: 0, opacity: 1, duration: 5, ease: "power4.out" }
);
gsap.fromTo(
  "aside",
  { yPercent: -100, opacity: 0 },
  { yPercent: 0, opacity: 1, duration: 2, ease: "power4.out" }
);
gsap.fromTo(
  "aside",
  { yPercent: -100, opacity: 0 },
  { yPercent: 0, opacity: 1, duration: 2, ease: "power4.out" }
);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".gallery",
    markers: true,
    start: "-20%",
    end: "0%",
  },
});
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".categories",
    markers: true,
    start: "-20%",
    end: "0%",
  },
});
let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".projectExplained",
    markers: true,
    start: "-20%",
    end: "0%",
  },
});
tl.addLabel("start")
  .from(".gallery h3", { yPercent: -30, opacity: 0 })
  .addLabel("end")
  .to(".gallery h3", {
    yPercent: 0,
    opacity: 1,
    duration: 9,
  });
tl2
  .addLabel("start")
  .from(".categories h3", { yPercent: -30, opacity: 0 })
  .addLabel("end")
  .to(".categories h3", {
    yPercent: 0,
    opacity: 1,
    duration: 9,
  });
tl3
  .addLabel("start")
  .from(".projectExplained h3", { yPercent: -30, opacity: 0 })
  .addLabel("end")
  .to(".projectExplained h3", {
    yPercent: 0,
    opacity: 1,
    duration: 9,
  });
