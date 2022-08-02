import { useRef } from "react";

const Contact = () => {
    const contactRef = useRef(null);

    return (
        <section className="container-fluid d-flex align-items-center" id="contact" ref={contactRef}>
            <div className="container">
                <div className="row justify-content-center">
                    <h2>Kontakt</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-4">
                        <ul className="list-contact">
                            <li className="list-contact-item">Kafkova 35</li>
                            <li className="list-contact-item">Praha 6</li>
                            <li className="list-contact-item">
                                Tel.: <a href="tel:+420773242200">+420 773 242 200</a>
                            </li>
                            <li className="list-contact-item">
                                E-mail: <a href="mailto:roman.arpas1@gmail.com">Roman Arpáš</a>
                            </li>
                            <li className="list-contact-item">
                                Skype: <a href="skype:Roman Arpáš">Roman Arpáš</a>
                            </li>
                            <li className="list-contact-item-break">
                                <hr />
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-12 col-lg-8">
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe
                                    title="Map"
                                    width="100%"
                                    height="450"
                                    id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=Kafkova%2035&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                    // frameborder="0"
                                    scrolling="no"
                                    // marginheight="0"
                                    // marginwidth="0"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
