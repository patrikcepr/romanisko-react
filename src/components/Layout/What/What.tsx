import artworkFull from "assets/redesign/artwork/roman-artwork-full.webp";

import styles from "./What.module.scss";

const ARTWORK_ALT =
    "Kresba Romana Arpáše: dlaň poskládaná z pestrobarevných geometrických tvarů " +
    "na pozadí z černých linií, vln a trojúhelníků.";

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
