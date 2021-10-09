import React from "react";
import {NavLink} from "react-router-dom";
import Header from "../../Components/Header/Header";
import DlyaYuridicheskihLicCom from "../../Components/Dlya_yuridicheskih_licCom/DlyaYuridicheskihLicCom";
import Footer from "../../Components/Footer/Footer";
import { withTranslation } from "react-i18next";

const Dlya_yuridicheskih_lic = (props) => {
    const { t } = props;
    let resultText;
    if(t("Oproekt") == t("Oproekt")){
        resultText = t("Oproekt");
    } else{
        resultText = t("Oproekt");
    }
    return(
        <>
            <div className="wrapper">
                <div className="container-natv content-natv">
                    <nav className="topMenu d-flex justify-content-around">
                        <NavLink to="/" className="active-2">{t("navstr")}</NavLink>
                        <NavLink to="/glavnaya2" className="active-2">{t("navbar")} </NavLink>
                    </nav>
                    <Header TextBanner={resultText}/>
                    <DlyaYuridicheskihLicCom/>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default withTranslation() (Dlya_yuridicheskih_lic);