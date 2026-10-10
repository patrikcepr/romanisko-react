import { GestaltMark } from "components/UI/GestaltMark";
import { CONTACT } from "data/site";
import cs from "locales/cs.json";

import styles from "./Footer.module.scss";

export const Footer = () => (
    <footer className={styles.footer}>
        <div className={`container ${styles.inner}`}>
            <p className={styles.brand}>
                <GestaltMark className={styles.mark} />
                <span>
                    {CONTACT.name} · {cs.common.role}
                    <span className={styles.copy} suppressHydrationWarning>
                        &copy;&nbsp;{new Date().getFullYear()}
                    </span>
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
