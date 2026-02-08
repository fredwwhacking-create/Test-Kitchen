// Premium-minimal motion: subtle, calm, fast.
window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);
  console.log("Reveals found:", document.querySelectorAll(".reveal").length);

  // Hero entrance
  gsap.from(".hero h1", { y: 16, opacity: 0, duration: 0.8, ease: "power2.out" });
  gsap.from(".hero .hero-intro", { y: 10, opacity: 0, duration: 0.8, delay: 0.1, ease: "power2.out" });
  gsap.from(".hero .button", { y: 8, opacity: 0, duration: 0.7, delay: 0.2, ease: "power2.out" });

  // Scroll reveals
  gsap.utils.toArray(".reveal").forEach((el) => {
    gsap.from(el, {
      y: 18,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });
});
