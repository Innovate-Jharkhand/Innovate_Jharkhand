import { useEffect } from "react";

const useScrollFadeIn = () => {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);
};

export default useScrollFadeIn;
