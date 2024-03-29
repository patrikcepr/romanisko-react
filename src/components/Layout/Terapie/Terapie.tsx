import { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./Terapie.module.scss";

export const Terapie = () => {
    const terapieRef = useRef(null);
    return (
        <Container as="section" fluid className={`shadow-lg px-lg-5 ${styles.terapie}`} id="terapie" ref={terapieRef}>
            <Container fluid="lg" className="px-md-5">
                <Row className="justify-content-center">
                    <Col md={10} className={` ${styles.header}`}>
                        <h1 className="text-shadow">Psychoterapie Praha - Roman Arpáš</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={10}>
                        <h2>Proč mě vyhledat?</h2>
                        <ul className={styles["list-services"]}>
                            <li className={styles["list-services__item"]}>
                                - značný stres, problémy ve vztazích, v práci nebo jiných oblastech života
                            </li>
                            <li className={styles["list-services__item"]}>
                                - duševní problémy jako deprese, úzkost, pocity méněcennosti a viny
                            </li>
                            <li className={styles["list-services__item"]}>- nejasný pocit vlastní identity</li>
                            <li className={styles["list-services__item"]}>- myšlenky na sebevraždu, sebevražedné chování</li>
                            <li className={styles["list-services__item"]}>- objevování a využítí vlastního potenciálu</li>
                            <li className={styles["list-services__item"]}>
                                - nalézání smyslu bytí, moudrosti, nadhledu i humoru
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};
