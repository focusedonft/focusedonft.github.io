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

let timelineGallery = gsap.timeline({
  scrollTrigger: {
    trigger: "#galleryBreakpoint",
    start: "-20%",
    end: "-15%",
  },
});
timelineGallery
  .fromTo(
    ".gallery h3",
    { yPercent: -30, opacity: 0 },
    { yPercent: 0, opacity: 1 }
  )
  .fromTo(".mySlides .primaryInfo", { opacity: 0 }, { opacity: 1 })
  .fromTo(".mySlides figure", { opacity: 0 }, { opacity: 1 })
  .fromTo(".mySlides .secondaryInfo", { opacity: 0 }, { opacity: 1 });

let timelineCollections = gsap.timeline({
  scrollTrigger: {
    trigger: "#collectionBreakpoint",
    start: "-20%",
    end: "-15%",
  },
});
timelineCollections
  .fromTo(
    ".categories h3",
    { yPercent: -30, opacity: 0 },
    { yPercent: 0, opacity: 1 }
  )
  .fromTo(
    ".categoriesWrapper div",
    { yPercent: -20, opacity: 0 },
    { yPercent: 0, opacity: 1, stagger: 0.3 }
  )
  .fromTo(
    ".categoriesWrapper div h4",
    { yPercent: -20, opacity: 0 },
    { yPercent: 0, opacity: 1 }
  )
  .fromTo(
    ".categoriesWrapper div figure",
    { yPercent: -20, opacity: 0 },
    { yPercent: 0, opacity: 1 }
  )
  .fromTo(
    ".categoriesWrapper div a",
    { yPercent: -20, opacity: 0 },
    { yPercent: 0, opacity: 1, stagger: 0.3 }
  );

let timelineProjectExplained = gsap.timeline({
  scrollTrigger: {
    trigger: "#projectBreakpoint",
    start: "-20%",
    end: "-15%",
  },
});
timelineProjectExplained
  .fromTo(
    ".projectExplained h3",
    { yPercent: -30, opacity: 0 },
    { yPercent: 0, opacity: 1 }
  )
  .fromTo(
    "#projectWrapper .explanation",
    { yPercent: -10, opacity: 0 },
    { yPercent: 0, opacity: 1 }
  )
  .fromTo(
    "#projectWrapper .roadmap",
    { yPercent: -10, opacity: 0 },
    { yPercent: 0, opacity: 1, stagger: 0.3 }
  )
  .fromTo(
    "#projectWrapper .roadmap p",
    { yPercent: -10, opacity: 0 },
    { yPercent: 0, opacity: 1, duration: 0.5 }
  )
  .from(
    "#projectWrapper .roadmap  span",

    { width: 0, duration: 0.5, opacity: 1, stagger: 0.3 }
  );
let timelineCollectionCards = gsap.timeline({
  scrollTrigger: {
    trigger: ".cardsContainer",
    start: "-20%",
    end: "-15%",
  },
});
timelineCollectionCards
  .fromTo("h1", { yPercent: -30, opacity: 0 }, { yPercent: 0, opacity: 1 })
  .fromTo(".card", { yPercent: -20, opacity: 0 }, { yPercent: 0, opacity: 1 })
  .fromTo(
    ".card img",
    { yPercent: -20, opacity: 0 },
    { yPercent: 0, opacity: 1 }
  )
  .fromTo(
    ".card h2",
    { yPercent: -20, opacity: 0 },
    { yPercent: 0, opacity: 1 }
  )
  .fromTo(".card p", { yPercent: -20, opacity: 0 }, { yPercent: 0, opacity: 1 })
  .fromTo(
    ".card a",
    { yPercent: 40, opacity: 0 },
    {
      yPercent: 0,
      opacity: 1,
      duration: 0.5,

      ease: "power4.in",
      stagger: 0.3,
    }
  );
