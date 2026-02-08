window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);

  // HERO: subtle entrance
  gsap.from(".hero h1", { y: 16, opacity: 0, duration: 0.8, ease: "power2.out" });
  gsap.from(".hero .hero-intro", { y: 10, opacity: 0, duration: 0.8, delay: 0.1, ease: "power2.out" });
  gsap.from(".hero .button", { y: 8, opacity: 0, duration: 0.7, delay: 0.2, ease: "power2.out" });

  // SCROLL REVEALS: stable + predictable
  gsap.utils.toArray(".reveal").forEach((el) => {
    gsap.fromTo(
      el,
      { y: 18, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
          invalidateOnRefresh: true,
        },
      }
    );
  });

  // Force a proper measurement pass after layout/fonts settle
  requestAnimationFrame(() => ScrollTrigger.refresh());
});
