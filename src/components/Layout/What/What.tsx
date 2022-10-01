import { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./What.module.scss";

export const What = () => {
    const whatRef = useRef(null);
    return (
        <Container as="section" fluid className={`shadow-lg px-lg-5 ${styles.what}`} id="what" ref={whatRef}>
            <Container fluid="lg" className="px-md-5">
                <Row className="text-center pb-5">
                    <h2>Jak pracuji</h2>
                </Row>
                <Row className="justify-content-center">
                    <Col md={10}>
                        <p>
                            Jako terapeut jsem aktivně přítomen - vidím, slyším a prožívám to, co prožíváte TADY a TEĎ. Při
                            naslouchání se snažím porozumět jak se organizujete ve svém sociálním okolí. Společně hledáme a
                            nacházíme to, co pro sebe potřebujete. A hlavně - KDO vlastně jste.
                        </p>
                        <p>
                            Všechno co sami v sobě prožíváte je projevem vaší autenticity a někdy i fantazie. Na terapii pak
                            můžeme legalizovat a vnímat vaši originalitu v jejím přirozeném TVARU (německy GESTALT).
                        </p>
                        <p>
                            Úzkost a deprese využívají ke své realizaci tělo. Proto na terapii věnuji pozornost i propojení emocí
                            s tělesným prožíváním.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};
