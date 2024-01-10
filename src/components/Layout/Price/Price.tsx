import { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./Price.module.scss";

export const Price = () => {
    const priceRef = useRef(null);

    return (
        <Container as="section" fluid id="price" className={`shadow-lg px-lg-5 ${styles.price}`} ref={priceRef}>
            <Container fluid="lg" className="px-md-5">
                <Row className="text-center mb-5">
                    <h2>Ceník</h2>
                </Row>
                <Row className="justify-content-center">
                    <Col md={10}>
                        <p>
                            V současné době kromě klasických sezení poskytuji konzultace i terapie online přes skype&nbsp;
                            <a href="skype:Roman Arpáš">Roman Arpáš.</a> Na první sezení je potřeba se objednat — telefonicky,
                            smskou či&nbsp;<a href="mailto:roman.arpas1@gmail.com">e-mailem</a>. Pokud nezvedám telefon, zanechte
                            mi, prosím, zprávu. Ozvu se, jakmile to bude možné.
                        </p>
                        <p>
                            Jedno setkání trvá <b>55 minut</b>.
                        </p>
                        <p>
                            Terapie není hrazena zdravotní pojišťovnou. Cena jednoho sezení je <b>1000 Kč</b>. Platba je možná
                            převodem na účet nebo v hotovosti. V případě Vaší potřeby sezení v průběhu víkendu nebo svátku je cena
                            sezení <b>1100 Kč</b>.
                        </p>
                        <p>
                            Pokud se v domluveném termínu nemůžete dostavit, je potřeba mě informovat nejpozději den předem a to
                            nejlépe telefonicky, případně sms nebo e-mailem.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};
