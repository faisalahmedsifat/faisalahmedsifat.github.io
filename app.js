// Pattern: Facade
// Problem: Navigation state, fast reveal behavior, and heading scramble were duplicated across pages.
// Solution: One small UI facade wires the shared tactical behaviors for every screen.
// Trade-off: Adds a shared script, justified because page count now exceeds one.

(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const initMobileNav = () => {
    const nav = document.querySelector("[data-mobile-nav]");
    if (!nav) return;

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.removeAttribute("open");
      });
    });

    document.addEventListener("click", (event) => {
      if (!nav.hasAttribute("open")) return;
      if (nav.contains(event.target)) return;
      nav.removeAttribute("open");
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        nav.removeAttribute("open");
      }
    });
  };

  const initReveal = () => {
    const items = document.querySelectorAll("[data-reveal]");
    if (items.length === 0) return;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("reveal-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );

    items.forEach((item) => observer.observe(item));
  };

  const initScramble = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const targets = document.querySelectorAll("[data-scramble]");
    if (prefersReducedMotion || targets.length === 0) return;

    targets.forEach((target) => {
      const finalText = target.dataset.scramble || target.textContent.trim();
      let running = false;

      const animate = () => {
        if (running) return;
        running = true;
        let frame = 0;

        const timer = window.setInterval(() => {
          target.textContent = finalText
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              return index < frame ? finalText[index] : alphabet[Math.floor(Math.random() * alphabet.length)];
            })
            .join("");

          frame += 0.6;

          if (frame >= finalText.length + 1) {
            window.clearInterval(timer);
            target.textContent = finalText;
            running = false;
          }
        }, 24);
      };

      target.addEventListener("mouseenter", animate);
      target.addEventListener("focus", animate);
    });
  };

  initMobileNav();
  initReveal();
  initScramble();
})();
