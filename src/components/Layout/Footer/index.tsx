import styles from "./Footer.module.scss";

export const Footer = () => {
    return (
        <footer className={`container-fluid ${styles.footer}`} id="footer">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-md-12">
                        <div>
                            &copy;&nbsp;Roman Arpáš {new Date().getFullYear()} | Tel.:&nbsp;
                            <a href="tel:+420773242200">+420&nbsp;773&nbsp;242&nbsp;200</a> | E-mail:&nbsp;
                            <a href="mailto:roman.arpas1@gmail.com">Roman Arpáš</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
