import "styles/styles.sass";

import { Contact } from "components/Layout/Contact/Contact";
import { Footer } from "components/Layout/Footer";
import { Hands } from "components/Layout/Hands/Hands";
import NavTop from "components/Layout/NavTop";
import { Price } from "components/Layout/Price/Price";
import { Terapie } from "components/Layout/Terapie/Terapie";
import { What } from "components/Layout/What/What";
import { Who } from "components/Layout/Who/Who";
import { Fragment } from "react";

const App = () => {
    return (
        <Fragment>
            <NavTop />
            <main>
                <Terapie />
                <What />
                <Hands />
                <Who />
                <Price />
                <Contact />
                <Footer />
            </main>
        </Fragment>
    );
};

export default App;
