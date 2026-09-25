import portraitLandscape from "assets/redesign/portrait/roman-portrait-landscape-3x2.webp";
import { Price } from "components/Layout/Price/Price";

import styles from "./Who.module.scss";

/** "O mně" panel with the practical-information aside next to it (stacked on mobile). */
export const Who = () => (
    <div className={styles.band}>
        <section id="who" className={styles.who} aria-labelledby="who-title">
            <div className={styles.inner}>
                <h2 id="who-title" className={`section-title ${styles.title}`} data-reveal>
                    Moje cesta k psychoterapii
                </h2>
                <div className={styles.content} data-reveal>
                    <figure className={styles.photo}>
                        <img
                            src={portraitLandscape}
                            width={1032}
                            height={688}
                            loading="lazy"
                            decoding="async"
                            className={styles.image}
                            alt="Roman Arpáš v modré košili, v pozadí pole a kopce ve večerním světle"
                        />
                        <figcaption className={styles.credit}>
                            Foto &copy;&nbsp;2021{" "}
                            <a href="https://petermatas.com/" target="_blank" rel="noreferrer noopener">
                                Peter Matas
                            </a>
                        </figcaption>
                    </figure>

                    <div className={styles.story}>
                        <p>
                            Vystudoval jsem psychopedii. Po vysoké škole jsem 8 let pracoval v ústavu s mentálně a&nbsp;fyzicky
                            hendikepovanými. Následně jsem 16 let strávil v korporátu na HR, jako kouč a&nbsp;trenér v rozvoji
                            komunikace. Zde jsem se potkával s tématy, která úzce souvisí s komerčním prostředím, jako např.
                            syndrom vyhoření, stres, velká orientace na výkon.
                        </p>
                        <p>
                            Pracovní zkušenosti ze dvou tak diametrálně odlišných světů, jejich propojení, zájem o vztahy
                            a&nbsp;lidské příběhy mě přivedly k rozhodnutí věnovat se psychoterapii. V letech 2016–2021 jsem
                            absolvoval psychoterapeutický výcvik v gestalt modalitě.
                        </p>
                        <p>
                            Kromě poznávání lidských osudů mám rád třeba film Světáci, slovenský folklór, život čmeláků, komiksy,
                            čistou vodu, svět Harryho Pottera a bramboráky.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <Price />
    </div>
);
