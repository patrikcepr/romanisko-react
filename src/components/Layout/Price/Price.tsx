import { Icon } from "components/UI/Icon";
import { CONTACT, FACTS } from "data/site";
import cs from "locales/cs.json";
import { rich } from "locales/rich";
import { useEffect, useState } from "react";

import styles from "./Price.module.scss";

// Order as in the mockup: duration, price, place.
const ASIDE_FACTS = [FACTS[0], FACTS[2], FACTS[1]];

export const Price = () => {
    const [open, setOpen] = useState(false);
    const { skype } = CONTACT;

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
                    {cs.price.title}
                </h2>

                <ul className={styles.facts}>
                    {ASIDE_FACTS.map((fact) => (
                        <li key={fact.key} className={styles.fact}>
                            <Icon name={fact.icon} size={30} strokeWidth={1.3} className={styles["fact-icon"]} />
                            <span>
                                <strong className={styles["fact-value"]}>{cs.facts[fact.key].value}</strong>
                                <span className={styles["fact-label"]}>{cs.facts[fact.key].label}</span>
                            </span>
                        </li>
                    ))}
                </ul>

                <p className={styles.note}>
                    {rich(cs.price.note, {
                        phone: (text) => <a href={CONTACT.phoneHref}>{text}</a>,
                        email: (text) => <a href={CONTACT.emailHref}>{text}</a>,
                    })}
                </p>

                <button
                    type="button"
                    className={`btn btn-soft ${styles.toggle}`}
                    aria-expanded={open}
                    aria-controls="price-details"
                    onClick={() => setOpen((o) => !o)}
                >
                    {open ? cs.price.hide : cs.price.show}
                    <Icon name="arrow" size={17} className={open ? styles["arrow-open"] : undefined} />
                </button>

                <div id="price-details" className={styles.details} hidden={!open}>
                    <h3 className={styles["detail-title"]}>{cs.price.orderTitle}</h3>
                    <p>{cs.price.order}</p>
                    <p>
                        {skype
                            ? rich(cs.price.onlineWithSkype, { skype: () => <a href={skype.href}>{skype.label}</a> })
                            : cs.price.online}
                    </p>

                    <h3 className={styles["detail-title"]}>{cs.price.paymentTitle}</h3>
                    <p>{cs.price.payment}</p>

                    <h3 className={styles["detail-title"]}>{cs.price.cancelTitle}</h3>
                    <p>{cs.price.cancel}</p>
                </div>
            </div>
        </aside>
    );
};
