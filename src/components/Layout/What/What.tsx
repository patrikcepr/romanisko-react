import artworkOriginal from "assets/redesign/artwork/roman-artwork-full.webp";
import artworkOriginal900 from "assets/redesign/artwork/roman-artwork-full-900.webp";
import artworkPalette from "assets/redesign/artwork/roman-artwork-full-palette.webp";
import artworkPalette900 from "assets/redesign/artwork/roman-artwork-full-palette-900.webp";

import styles from "./What.module.scss";

/** "palette" = drawing recoloured into the hero palette, "original" = Roman's original colours. */
const ARTWORK_VARIANT: "palette" | "original" = "palette";
const [artwork900, artworkFull] =
    ARTWORK_VARIANT === "palette" ? [artworkPalette900, artworkPalette] : [artworkOriginal900, artworkOriginal];

const ARTWORK_ALT =
    "Kresba Romana Arpáše: dlaň poskládaná z barevných geometrických tvarů " + "na pozadí z černých linií, vln a trojúhelníků.";

export const What = () => (
    <section id="what" className={styles.what} aria-labelledby="what-title">
        <div className={styles.text} data-reveal>
            <h2 id="what-title" className={`section-title ${styles.title}`}>
                Jak pracuji
            </h2>
            <p>
                Jako terapeut jsem aktivně přítomen – vidím, slyším a prožívám to, co prožíváte TADY a TEĎ. Při naslouchání se
                snažím porozumět, jak se organizujete ve svém sociálním okolí. Společně hledáme a&nbsp;nacházíme to, co pro sebe
                potřebujete. A hlavně – KDO vlastně jste.
            </p>
            <p>
                Všechno, co sami v sobě prožíváte, je projevem vaší autenticity a někdy i fantazie. Na terapii pak můžeme
                legalizovat a vnímat vaši originalitu v jejím přirozeném TVARU (německy GESTALT).
            </p>
            <p>
                Úzkost a deprese využívají ke své realizaci tělo. Proto na terapii věnuji pozornost i propojení emocí
                s&nbsp;tělesným prožíváním.
            </p>
            <p className={styles.credit}>Kresba: Roman Arpáš</p>
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
                alt={ARTWORK_ALT}
            />
        </figure>
    </section>
);
