import { Icon } from "components/UI/Icon";
import { CONTACT } from "data/site";
import cs from "locales/cs.json";

import styles from "./Contact.module.scss";

export const Contact = () => (
    <section id="contact" className="section" aria-labelledby="contact-title">
        <div className={`container ${styles.grid}`}>
            <div data-reveal>
                <h2 id="contact-title" className={`section-title ${styles.title}`}>
                    {cs.contact.title}
                </h2>
                <p className={styles.lead}>{cs.contact.lead}</p>

                <address className={styles.address}>
                    <span className={styles.name}>{CONTACT.name}</span>
                    <span>{CONTACT.street}</span>
                    <span>{CONTACT.city}</span>
                    <a href={CONTACT.mapsHref} target="_blank" rel="noreferrer noopener" className={styles["maps-link"]}>
                        {cs.contact.openInMaps}
                        <Icon name="external" size={16} />
                        <span className="visually-hidden">{cs.common.newWindow}</span>
                    </a>
                </address>

                <ul className={styles.channels}>
                    <li>
                        <a href={CONTACT.phoneHref} className={styles.channel}>
                            <Icon name="phone" size={22} />
                            <span>
                                <span className={styles["channel-label"]}>{cs.contact.phoneLabel}</span>
                                <span className={styles["channel-value"]}>{CONTACT.phone}</span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href={CONTACT.emailHref} className={styles.channel}>
                            <Icon name="mail" size={22} />
                            <span>
                                <span className={styles["channel-label"]}>{cs.contact.emailLabel}</span>
                                <span className={styles["channel-value"]}>{CONTACT.email}</span>
                            </span>
                        </a>
                    </li>
                    {CONTACT.skype && (
                        <li>
                            <a href={CONTACT.skype.href} className={styles.channel}>
                                <Icon name="video" size={22} />
                                <span>
                                    <span className={styles["channel-label"]}>{cs.contact.skypeLabel}</span>
                                    <span className={styles["channel-value"]}>{CONTACT.skype.label}</span>
                                </span>
                            </a>
                        </li>
                    )}
                </ul>
            </div>

            <div className={styles.map} data-reveal>
                <iframe
                    title={`${cs.contact.mapTitle}: ${CONTACT.street}, ${CONTACT.city}`}
                    src={CONTACT.mapEmbedSrc}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className={styles.iframe}
                />
            </div>
        </div>
    </section>
);
