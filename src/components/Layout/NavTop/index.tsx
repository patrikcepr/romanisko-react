import { Container, Nav, Navbar, Image } from "react-bootstrap";
import gestaltIcon from "../../../assets/img/gestaltIcon.png";

const NavTop = () => {
    return (
        <header>
            <Navbar expand="md" fixed="top" className="mb-5 justify-content-center bg-nav shadow">
                <Container fluid="md">
                    <Navbar.Brand href="#terapie">
                        <Image src={gestaltIcon} height="64" alt="Roman Arpáš - terapeut" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="that-navbar-nav" />
                    <Navbar.Collapse id="that-navbar-nav" className="fs-4 justify-content-end">
                        <Nav>
                            <Nav.Link href="#terapie" className="me-4">
                                Terapie
                            </Nav.Link>
                            <Nav.Link href="#what" className="me-4">
                                Gestalt
                            </Nav.Link>
                            <Nav.Link href="#who" className="me-4">
                                O mně
                            </Nav.Link>
                            <Nav.Link href="#price" className="me-4">
                                Ceník
                            </Nav.Link>
                            <Nav.Link href="#contact" className="me-4">
                                Kontakt
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default NavTop;
