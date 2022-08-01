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
                                - Duševní problémy jako deprese, úzkost, myšlenky na sebevraždu a sebevražedné chování.
                            </li>
                            <li className="list-services-item">
                                - Značný stres nebo problémy ve vztazích, práci nebo dalších oblastech života.
                            </li>
                            <li className="list-services-item">
                                - Ztráta vzpomínek (paměti) na určité časové období, události, lidi a osobní informace.
                            </li>
                            <li className="list-services-item">- Vnímání okolních lidí a věcí jakoby zkresleně nebo nereálně.</li>
                            <li className="list-services-item">- Pocit odpoutání od sebe sama a svých emocí.</li>
                            <li className="list-services-item">- Nejasný pocit vlastní identity.</li>
                            <li className="list-services-item">- Neschopnost dobře zvládat emoční nebo profesní stres.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Terapie;
