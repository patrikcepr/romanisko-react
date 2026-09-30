import "styles/global.scss";

import { Contact } from "components/Layout/Contact/Contact";
import { Footer } from "components/Layout/Footer";
import { Hero } from "components/Layout/Hero/Hero";
import NavTop from "components/Layout/NavTop";
import { Terapie } from "components/Layout/Terapie/Terapie";
import { What } from "components/Layout/What/What";
import { Who } from "components/Layout/Who/Who";
import { useReveal } from "hooks/useReveal";
import { Fragment } from "react";

const App = () => {
    useReveal();

    return (
        <Fragment>
            <a href="#main" className="skip-link">
                Přeskočit na obsah
            </a>
            <NavTop />
            <main id="main">
                <Hero />
                <Terapie />
                <What />
                <Who />
                <Contact />
            </main>
            <Footer />
        </Fragment>
    );
};

export default App;
