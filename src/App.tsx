import React, { Fragment } from "react";
import NavTop from "./components/Layout/NavTop";
import Title from "./components/Layout/Terapie/Terapie";
import What from "./components/Layout/What/What";
import Hands from "./components/Layout/Hands/Hands";
import Who from "./components/Layout/Who/Who";
import Price from "./components/Layout/Price/Price";
import Contact from "./components/Layout/Contact/Contact";
import Footer from "./components/Layout/Footer";
import "./styles/styles.sass";

const App = () => {
    return (
        <Fragment>
            <NavTop />
            <main>
                <Title />
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
