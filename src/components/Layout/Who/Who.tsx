import portraitLandscape from "assets/redesign/portrait/roman-portrait-landscape-3x2.webp";
import portraitLandscape640 from "assets/redesign/portrait/roman-portrait-landscape-3x2-640.webp";
import { Price } from "components/Layout/Price/Price";
import cs from "locales/cs.json";
import { rich } from "locales/rich";

import styles from "./Who.module.scss";

/** "O mně" panel with the practical-information aside next to it (stacked on mobile). */
export const Who = () => (
    <div className={styles.band}>
        <section id="who" className={styles.who} aria-labelledby="who-title">
            <div className={styles.inner}>
                <h2 id="who-title" className={`section-title ${styles.title}`} data-reveal>
                    {cs.who.title}
                </h2>
                <div className={styles.content} data-reveal>
                    <figure className={styles.photo}>
                        <img
                            src={portraitLandscape}
                            srcSet={`${portraitLandscape640} 640w, ${portraitLandscape} 1032w`}
                            sizes="(min-width: 1280px) 400px, (min-width: 768px) 42vw, 100vw"
                            width={1032}
                            height={688}
                            loading="lazy"
                            decoding="async"
                            className={styles.image}
                            alt={cs.who.portraitAlt}
                        />
                        <figcaption className={styles.credit}>
                            {rich(cs.who.photoCredit, {
                                link: (name) => (
                                    <a href="https://petermatas.com/" target="_blank" rel="noreferrer noopener">
                                        {name}
                                        <span className="visually-hidden"> {cs.common.newWindow}</span>
                                    </a>
                                ),
                            })}
                        </figcaption>
                    </figure>

                    <div className={styles.story}>
                        {cs.who.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <Price />
    </div>
);
