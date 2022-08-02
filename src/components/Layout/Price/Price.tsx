import React, { useRef } from "react";

const Price = () => {
    const priceRef = useRef(null);

    return (
        <section className="container-fluid d-flex align-items-center" id="price" ref={priceRef}>
            <div className="container">
                <div className="row justify-content-center">
                    <h2>Ceník</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <p>
                            V současné době poskytuji terapie/konzultace i online přes skype&nbsp;
                            <a href="skype:Roman Arpáš">Roman Arpáš.</a> Na první sezení je potřeba se objednat — telefonicky,
                            smskou či&nbsp;<a href="mailto:roman.arpas1@gmail.com">e-mailem</a>. Pokud nezvedám telefon, zanechte
                            mi, prosím, zprávu. Ozvu se, jakmile to bude možné.
                        </p>
                        <p>
                            Jedno setkání trvá <b>55 minut</b>.
                        </p>
                        <p>
                            Terapie není hrazena zdravotní pojišťovnou. Cena jednoho sezení je <b>900 Kč</b>. Platba je možná
                            převodem na účet nebo v hotovosti. V případě Vaší potřeby sezení v průběhu víkendu nebo svátku je cena
                            sezení <b>1100 Kč</b>.
                        </p>
                        <p>
                            Pokud se v domluveném termínu nemůžete dostavit, je potřeba mě informovat nejpozději den předem a to
                            nejlépe telefonicky, případně sms nebo e-mailem.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Price;
