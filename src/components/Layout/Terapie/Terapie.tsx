import { useRef } from "react";

const Terapie = () => {
    const terapieRef = useRef(null);
    return (
        <section className="container-fluid d-flex align-items-center" id="terapie" ref={terapieRef}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 header">
                        <h1>Terapeut Roman Arpáš</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <h2>Proč mě vyhledat?</h2>
                        <ul className="list-services">
                            <li className="list-services-item">
                                - značný stres, problémy ve vztazích, v práci nebo jiných oblastech života
                            </li>
                            <li className="list-services-item">
                                - duševní problémy jako deprese, úzkost, pocity méněcennosti a viny
                            </li>
                            <li className="list-services-item">
                                - ztráta vzpomínek na určité časové období, události, lidi či osobní informace
                            </li>
                            <li className="list-services-item">- nejasný pocit vlastní identity</li>
                            <li className="list-services-item">- myšlenky na sebevraždu, sebevražedné chování</li>
                            <li className="list-services-item">- objevování a využítí vlastního potenciálu</li>
                            <li className="list-services-item">- nalézání smyslu bytí, moudrosti, nadhledu i humoru</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Terapie;
