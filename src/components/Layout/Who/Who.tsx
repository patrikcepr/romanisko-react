import React, { useRef } from "react";
import { Image } from "react-bootstrap";
import Romanko from "../../../assets/img/DSC_3060.jpg";

const Who = () => {
    const whoRef = useRef(null);
    return (
        <section className="container-fluid d-flex align-items-center" id="who" ref={whoRef}>
            <div className="container">
                <div className="row justify-content-center">
                    <h2>Moje cesta k psychoterapii</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center">
                        <figure>
                            <Image src={Romanko} alt="Roman Arpáš" className="img-fluid" />
                            <figcaption>
                                &copy;&nbsp;2021&nbsp;
                                <a href="https://petermatas.com/" target="_blank" rel="noreferrer noopener">
                                    Peter Matas
                                </a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-md-6">
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Who;
