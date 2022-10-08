import { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Envelope, Skype, Telephone } from "react-bootstrap-icons";

import styles from "./Contact.module.scss";

export const Contact = () => {
    const contactRef = useRef(null);

    return (
        <Container as="section" fluid="true" className={`shadow-lg px-lg-5 ${styles.contact}`} id="contact" ref={contactRef}>
            <Container fluid="lg" className="px-md-5">
                <Row className="justify-content-center flex-column-reverse-sm gap-lg-5">
                    <Col md={10} lg={7}>
                        <iframe
                            title="Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d639.812932241724!2d14.42240872926363!3d50.100295058960135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94c536401c7f%3A0x7cf0521a90c39527!2sLetensk%C3%A9%20n%C3%A1m.%201%2C%20170%2000%20Praha%207-Hole%C5%A1ovice!5e0!3m2!1sen!2scz!4v1664530760051!5m2!1sen!2scz"
                            width="100%"
                            height="420"
                            scrolling="no"
                            style={{ border: 0, borderRadius: "1rem" }}
                            className="shadow-lg"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Col>
                    <Col md={10} lg={3} className="pt-5 pt-lg-0">
                        <h2>Kontakt</h2>
                        <ul className={styles["list-contact"]}>
                            <li className={styles["list-contact__item"]}>Letenské náměstí 1</li>
                            <li className={styles["list-contact__item"]}>Praha 7</li>
                            <li className={styles["list-contact__item"]}>
                                <Telephone />
                                <a href="tel:+420773242200">+420 773 242 200</a>
                            </li>
                            <li className={styles["list-contact__item"]}>
                                <Envelope /> <a href="mailto:roman.arpas1@gmail.com">Roman Arpáš</a>
                            </li>
                            <li className={styles["list-contact__item"]}>
                                <Skype />
                                <a href="skype:Roman Arpáš">Roman Arpáš</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};
