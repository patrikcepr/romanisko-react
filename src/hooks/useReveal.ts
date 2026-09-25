import { useEffect } from "react";

/** Fades in every `[data-reveal]` element once, when it first enters the viewport. */
export const useReveal = () => {
    useEffect(() => {
        const root = document.documentElement;
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduced || !("IntersectionObserver" in window)) return;

        const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
        root.classList.add("reveal-ready");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                });
            },
            { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
        );
        elements.forEach((el) => observer.observe(el));

        return () => {
            observer.disconnect();
            root.classList.remove("reveal-ready");
        };
    }, []);
};
