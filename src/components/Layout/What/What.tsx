import React, { useRef } from "react";

const What = () => {
    const whatRef = useRef(null);
    return (
        <section className="container-fluid d-flex align-items-center" id="what" ref={whatRef}>
            <div className="container">
                <div className="row justify-content-center">
                    <h2>Jak pracuji</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-12">
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default What;
