import Romanko from "assets/img/DSC_3060.jpg";
import { useRef } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import styles from "./Who.module.scss";

export const Who = () => {
    const whoRef = useRef(null);
    return (
        <Container as="section" fluid className={`shadow-lg px-lg-5 ${styles.who}`} id="who" ref={whoRef}>
            <Container fluid="lg" className="px-md-5">
                <Row className="text-center mb-5">
                    <h2>Moje cesta k psychoterapii</h2>
                </Row>
                <Row className="gap-lg-3 gap-xl-5 justify-content-center">
                    <Col md={10} lg={3} xl={5}>
                        <figure>
                            <Image
                                src={Romanko}
                                alt="Roman ArpášPsychoterapie Praha - Roman Arpáš"
                                className="img-fluid shadow-lg"
                            />
                            <figcaption className="pt-2 text-end">
                                &copy;&nbsp;2021&nbsp;
                                <a href="https://petermatas.com/" target="_blank" rel="noreferrer noopener">
                                    Peter Matas
                                </a>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col md={10} lg={7} xl={5}>
                        <p>
                            Vystudoval jsem psychopedii. Po vysoké škole jsem 8 let pracoval v ústavu s mentálně a fyzicky
                            hendikepovanými. Následně jsem 16 let strávil v korporátu na HR, jako kouč a trenér v rozvoji
                            komunikace. Zde jsem se potkával s tématy, která úzce souvisí s komerčním prostředím, jako např.
                            syndrom vyhoření, stres, velká orientace na výkon.
                        </p>
                        <p>
                            Pracovni zkušenosti z dvou tak diamterálně odlišných světů, jejich propojení, zájem o vztahy a lidské
                            příběhy mě přivedly k rozhodnutí věnovat se psychoterapii. V letech 2016 — 2021 jsem absolvoval
                            psychoterapeutický výcvik v gestalt modalitě.
                        </p>
                        <p>
                            Kromě poznávaní lidských osudů mám rád třeba film Světáci, slovenský folklór, život čmeláků, komiksy,
                            čistou vodu, svět Harryho Pottera a bramboráky.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};
