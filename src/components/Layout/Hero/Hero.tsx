import hero960 from "assets/redesign/hero/hero-gestalt-960.webp";
import hero1536 from "assets/redesign/hero/hero-gestalt-1536.webp";
import { Icon } from "components/UI/Icon";
import { FACTS } from "data/site";

import styles from "./Hero.module.scss";

export const Hero = () => (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
        <img
            className={styles.art}
            src={hero1536}
            srcSet={`${hero960} 960w, ${hero1536} 1536w`}
            sizes="(min-width: 1024px) 48vw, 100vw"
            width={1536}
            height={1024}
            alt=""
            fetchPriority="high"
            decoding="async"
        />

        <div className="container">
            <div className={styles.text} data-reveal>
                <p className="eyebrow">Psychoterapie · Praha 7 / online</p>
                <h1 id="hero-title" className={styles.title}>
                    Psychoterapie <br />
                    jako prostor pro&nbsp;změnu.
                </h1>
                <p className={styles.lead}>
                    Stres, vztahy, úzkost, náročné životní situace <br className={styles.br} />
                    nebo jen pocit, že něco není tak, jak byste chtěli. <br className={styles.br} />
                    Společně můžeme hledat, co potřebujete právě Vy.
                </p>
                <a href="#contact" className="btn btn-primary btn-large">
                    Domluvit první setkání
                    <Icon name="arrow" size={18} />
                </a>

                <ul className={styles.facts}>
                    {FACTS.map((fact) => (
                        <li key={fact.value} className={styles.fact}>
                            <Icon name={fact.icon} size={32} strokeWidth={1.3} className={styles["fact-icon"]} />
                            <span>
                                <strong className={styles["fact-value"]}>{fact.value}</strong>
                                <span className={styles["fact-label"]}>{fact.label}</span>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
);
