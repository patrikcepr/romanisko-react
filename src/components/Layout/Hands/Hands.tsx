import handsPict from "assets/img/IMG-20210525-WA0027.jpg";
import { Image } from "react-bootstrap";

const Hands = () => {
    return (
        <div id="hands" className="shadow">
            <Image src={handsPict} alt="Ruce" className="img-fluid shadow" />
        </div>
    );
};

export default Hands;
