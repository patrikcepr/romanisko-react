import artworkOriginal from "assets/redesign/artwork/roman-artwork-full.webp";
import artworkOriginal900 from "assets/redesign/artwork/roman-artwork-full-900.webp";
import artworkPalette from "assets/redesign/artwork/roman-artwork-full-palette.webp";
import artworkPalette900 from "assets/redesign/artwork/roman-artwork-full-palette-900.webp";
import cs from "locales/cs.json";

import styles from "./What.module.scss";

/** "palette" = drawing recoloured into the hero palette, "original" = Roman's original colours. */
const ARTWORK_VARIANT: "palette" | "original" = "palette";
const [artwork900, artworkFull] =
    ARTWORK_VARIANT === "palette" ? [artworkPalette900, artworkPalette] : [artworkOriginal900, artworkOriginal];

export const What = () => (
    <section id="what" className={styles.what} aria-labelledby="what-title">
        <div className={styles.text} data-reveal>
            <h2 id="what-title" className={`section-title ${styles.title}`}>
                {cs.what.title}
            </h2>
            {cs.what.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
            ))}
            <p className={styles.credit}>{cs.what.credit}</p>
        </div>

        <figure className={styles.figure}>
            <img
                src={artworkFull}
                srcSet={`${artwork900} 900w, ${artworkFull} 1600w`}
                sizes="(min-width: 1024px) 56vw, 100vw"
                width={1600}
                height={1142}
                loading="lazy"
                decoding="async"
                className={styles.image}
                alt={cs.what.artworkAlt}
            />
        </figure>
    </section>
);
