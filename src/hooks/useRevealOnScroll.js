import { useEffect } from "react";

export function useRevealOnScroll({
  selector = ".reveal",
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  once = true,
} = {}) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(selector));
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove("is-visible");
          }
        }
      },
      { threshold, rootMargin }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, threshold, rootMargin, once]);
}
