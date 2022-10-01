import gestaltIcon from "assets/img/gestaltIcon.png";
import { Container, Image, Nav, Navbar } from "react-bootstrap";

import styles from "./NavTop.module.scss";

const LINKS = [
    { label: "Terapie", link: "terapie" },
    { label: "Gestalt", link: "what" },
    { label: "O mně", link: "who" },
    { label: "Ceník", link: "price" },
    { label: "Kontakt", link: "contact" },
];

const NavTop = () => {
    return (
        <header>
            <Navbar expand="md" fixed="top" className={`justify-content-center bg-nav shadow `}>
                <Container fluid="md" className={styles["nav-top"]}>
                    <Navbar.Brand href="/">
                        <Image src={gestaltIcon} height="64" alt="Roman Arpáš - terapeut" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar" />
                    <Navbar.Collapse id="navbar" className="fs-4 justify-content-end">
                        <Nav>
                            {LINKS.map((link) => {
                                return (
                                    <Nav.Link key={link.label} href={`#${link.link}`} className="me-4">
                                        {link.label}
                                    </Nav.Link>
                                );
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default NavTop;
