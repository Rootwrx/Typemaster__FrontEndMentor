document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animate");

  const animateOnScroll = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          animateOnScroll.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  animatedElements.forEach((element) => animateOnScroll.observe(element));
});
