import { GestaltMark } from "components/UI/GestaltMark";
import { Icon } from "components/UI/Icon";
import { useEffect, useRef, useState } from "react";

import styles from "./NavTop.module.scss";

const LINKS = [
    { label: "Terapie", id: "terapie" },
    { label: "Gestalt", id: "what" },
    { label: "O mně", id: "who" },
    { label: "Ceník", id: "price" },
    { label: "Kontakt", id: "contact" },
];

// Keep in sync with the `lg` breakpoint in styles/_mixins.scss.
const DESKTOP_QUERY = "(min-width: 1024px)";

const NavTop = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState<string | null>(null);
    const toggleRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Highlight the section currently in the middle of the viewport.
    useEffect(() => {
        const sections = LINKS.map((l) => document.getElementById(l.id)).filter((el): el is HTMLElement => !!el);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                    else if (entry.target.id === "terapie" && entry.boundingClientRect.top > 0) setActive(null);
                });
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );
        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    // Mobile menu: close on Escape / when switching to the desktop layout.
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key !== "Escape") return;
            setOpen(false);
            toggleRef.current?.focus();
        };
        const mq = window.matchMedia(DESKTOP_QUERY);
        const onChange = () => mq.matches && setOpen(false);
        document.addEventListener("keydown", onKey);
        mq.addEventListener("change", onChange);
        return () => {
            document.removeEventListener("keydown", onKey);
            mq.removeEventListener("change", onChange);
        };
    }, [open]);

    const close = () => setOpen(false);

    return (
        <header className={`${styles.header} ${scrolled || open ? styles["is-scrolled"] : ""}`}>
            <div className={`container ${styles.bar}`}>
                <a href="#top" className={styles.brand} onClick={close}>
                    <GestaltMark framed className={styles.mark} />
                    <span className={styles["brand-text"]}>
                        <span className={styles["brand-name"]}>Roman Arpáš</span>
                        <span className={styles["brand-role"]}>Psychoterapie</span>
                    </span>
                </a>

                <button
                    ref={toggleRef}
                    type="button"
                    className={styles.toggle}
                    aria-expanded={open}
                    aria-controls="main-nav"
                    onClick={() => setOpen((o) => !o)}
                >
                    <Icon name={open ? "close" : "menu"} size={26} />
                    <span className="visually-hidden">{open ? "Zavřít menu" : "Otevřít menu"}</span>
                </button>

                <nav id="main-nav" aria-label="Hlavní navigace" className={`${styles.nav} ${open ? styles["is-open"] : ""}`}>
                    <ul className={styles.links}>
                        {LINKS.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    className={styles.link}
                                    aria-current={active === link.id ? "true" : undefined}
                                    onClick={close}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href="#contact" className={`btn btn-primary btn-small ${styles.cta}`} onClick={close}>
                        Domluvit setkání
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default NavTop;
