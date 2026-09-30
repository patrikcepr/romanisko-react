import { Icon } from "components/UI/Icon";
import { CONTACT, FACTS } from "data/site";
import { useEffect, useState } from "react";

import styles from "./Price.module.scss";

// Order as in the mockup: duration, price, place.
const ASIDE_FACTS = [FACTS[0], FACTS[2], FACTS[1]];

export const Price = () => {
    const [open, setOpen] = useState(false);

    // Opening the page (or navigating) to #price shows the full price list straight away.
    useEffect(() => {
        const sync = () => window.location.hash === "#price" && setOpen(true);
        sync();
        window.addEventListener("hashchange", sync);
        return () => window.removeEventListener("hashchange", sync);
    }, []);

    return (
        <aside id="price" className={styles.price} aria-labelledby="price-title">
            <div className={styles.inner} data-reveal>
                <h2 id="price-title" className={styles.title}>
                    Praktické informace
                </h2>

                <ul className={styles.facts}>
                    {ASIDE_FACTS.map((fact) => (
                        <li key={fact.value} className={styles.fact}>
                            <Icon name={fact.icon} size={30} strokeWidth={1.3} className={styles["fact-icon"]} />
                            <span>
                                <strong className={styles["fact-value"]}>{fact.value}</strong>
                                <span className={styles["fact-label"]}>{fact.label}</span>
                            </span>
                        </li>
                    ))}
                </ul>

                <p className={styles.note}>
                    V případě zájmu mě můžete kontaktovat <a href={CONTACT.phoneHref}>telefonicky</a>,{" "}
                    <a href={CONTACT.emailHref}>e-mailem</a> nebo SMS. Pokud nezvedám telefon, zanechte mi, prosím, zprávu.
                </p>

                <button
                    type="button"
                    className={`btn btn-soft ${styles.toggle}`}
                    aria-expanded={open}
                    aria-controls="price-details"
                    onClick={() => setOpen((o) => !o)}
                >
                    {open ? "Skrýt ceník" : "Zobrazit ceník"}
                    <Icon name="arrow" size={17} className={open ? styles["arrow-open"] : undefined} />
                </button>

                <div id="price-details" className={styles.details} hidden={!open}>
                    <h3 className={styles["detail-title"]}>Objednání</h3>
                    <p>Na první sezení je potřeba se objednat — telefonicky, SMS či e-mailem. Ozvu se, jakmile to bude možné.</p>
                    <p>
                        V současné době kromě klasických sezení poskytuji konzultace i terapie online
                        {CONTACT.skype && (
                            <>
                                {" "}
                                přes Skype <a href={CONTACT.skype.href}>{CONTACT.skype.label}</a>
                            </>
                        )}
                        .
                    </p>

                    <h3 className={styles["detail-title"]}>Cena a platba</h3>
                    <p>
                        Jedno setkání trvá 55&nbsp;minut. Terapie není hrazena zdravotní pojišťovnou. Cena jednoho sezení je
                        1&nbsp;000&nbsp;Kč. Platba je možná převodem na účet nebo v hotovosti.
                    </p>

                    <h3 className={styles["detail-title"]}>Zrušení termínu</h3>
                    <p>
                        Pokud se v domluveném termínu nemůžete dostavit, je potřeba mě informovat nejpozději den předem, a to
                        nejlépe telefonicky, případně SMS nebo e-mailem.
                    </p>
                </div>
            </div>
        </aside>
    );
};
