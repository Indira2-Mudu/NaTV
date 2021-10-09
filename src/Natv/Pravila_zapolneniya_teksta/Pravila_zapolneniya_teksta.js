import React from "react";
import {NavLink} from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import {withTranslation} from "react-i18next";

const Pravila_zapolneniya_teksta = (props) => {
    const {t} = props;
    let resultText;
    if (t("Oproekt") == t("Oproekt")) {
        resultText = t("Oproekt");
    } else {
        resultText = t("Oproekt");
    }


    return (
        <>
            <div className="wrapper">
                <div className="container-natv content-natv">
                    <nav className="topMenu d-flex justify-content-around">
                        <NavLink to="/" className="active-2">{t("navstr")}</NavLink>
                        <NavLink to="/glavnaya2" className="active-2">{t("navbar")} </NavLink>
                    </nav>
                    <Header TextBanner={resultText}/>
                    <div className="pd-40 bg-white page">
                        <h3>{t("Zapolnenie1")}</h3>
                        <p>{t("Zapolnenie2")}</p>
                        <ul>
                            <li>{t("Zapolnenie3")}</li>
                            <li><strong>{t("Zapolnenie4")}</strong></li>
                            <li><strong>{t("Zapolnenie5")}</strong></li>
                            <li> {t("Zapolnenie6")}</li>
                            <li>{t("Zapolnenie7")}</li>
                            <li>{t("Zapolnenie8")}</li>
                            <li><NavLink to="/Payment"><strong>{t("Zapolnenie9")}"</strong></NavLink></li>
                        </ul>
                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default withTranslation()(Pravila_zapolneniya_teksta);