import handsPict from "assets/img/IMG-20210525-WA0027.jpg";
import { Container, Image } from "react-bootstrap";

export const Hands = () => {
    return (
        <Container fluid="true" id="hands" className="shadow">
            <Image src={handsPict} alt="Ruce" className="img-fluid shadow" style={{ width: "100%" }} />
        </Container>
    );
};
