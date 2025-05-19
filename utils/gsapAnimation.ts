// Gsap animations via nuxt gsap module (not official, not recommended)

export function slideDown(selector: string, delay = 0.5) {
  useGsap.from(selector, {
    y: -100,
    autoAlpha: 0,
    delay,
    onStart: () => {
      const el = document.querySelector(selector) as HTMLElement | null;
      if (el) el.style.visibility = "visible";
    },
  });
} 