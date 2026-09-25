import { GestaltMark } from "components/UI/GestaltMark";
import { CONTACT } from "data/site";

import styles from "./Footer.module.scss";

export const Footer = () => (
    <footer className={styles.footer}>
        <div className={`container ${styles.inner}`}>
            <p className={styles.brand}>
                <GestaltMark className={styles.mark} />
                <span>
                    {CONTACT.name} · Psychoterapie
                    <span className={styles.copy}>&copy;&nbsp;{new Date().getFullYear()}</span>
                </span>
            </p>
            <ul className={styles.links}>
                <li>
                    <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                </li>
                <li>
                    <a href={CONTACT.emailHref}>{CONTACT.email}</a>
                </li>
            </ul>
        </div>
    </footer>
);
