import { Icon } from "components/UI/Icon";
import { CONTACT } from "data/site";

import styles from "./Contact.module.scss";

export const Contact = () => (
    <section id="contact" className={`section ${styles.contact}`} aria-labelledby="contact-title">
        <div className={`container ${styles.grid}`}>
            <div className={styles.info} data-reveal>
                <h2 id="contact-title" className={`section-title ${styles.title}`}>
                    Kontakt
                </h2>
                <p className={styles.lead}>
                    Ozvěte se telefonicky, SMS nebo e-mailem. Pokud nezvedám telefon, zanechte mi, prosím, zprávu.
                </p>

                <address className={styles.address}>
                    <span className={styles.name}>{CONTACT.name}</span>
                    <span>{CONTACT.street}</span>
                    <span>{CONTACT.city}</span>
                    <a href={CONTACT.mapsHref} target="_blank" rel="noreferrer noopener" className={styles["maps-link"]}>
                        Otevřít v mapách
                        <Icon name="external" size={16} />
                        <span className="visually-hidden">(otevře se v novém okně)</span>
                    </a>
                </address>

                <ul className={styles.channels}>
                    <li>
                        <a href={CONTACT.phoneHref} className={styles.channel}>
                            <Icon name="phone" size={22} />
                            <span>
                                <span className={styles["channel-label"]}>Telefon / SMS</span>
                                <span className={styles["channel-value"]}>{CONTACT.phone}</span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href={CONTACT.emailHref} className={styles.channel}>
                            <Icon name="mail" size={22} />
                            <span>
                                <span className={styles["channel-label"]}>E-mail</span>
                                <span className={styles["channel-value"]}>{CONTACT.email}</span>
                            </span>
                        </a>
                    </li>
                    {CONTACT.skype && (
                        <li>
                            <a href={CONTACT.skype.href} className={styles.channel}>
                                <Icon name="video" size={22} />
                                <span>
                                    <span className={styles["channel-label"]}>Skype</span>
                                    <span className={styles["channel-value"]}>{CONTACT.skype.label}</span>
                                </span>
                            </a>
                        </li>
                    )}
                </ul>
            </div>

            <div className={styles.map} data-reveal>
                <iframe
                    title="Mapa: Letenské náměstí 1, Praha 7"
                    src={CONTACT.mapEmbedSrc}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className={styles.iframe}
                />
            </div>
        </div>
    </section>
);
