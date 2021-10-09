import React from "react";
import {NavLink} from "react-router-dom";
import { withTranslation } from "react-i18next";

const DlyaYuridicheskihLicCom = (props) => {
    const {t} = props;
    return(
        <>
            <div className="pd-40 bg-white page">
                <div className="cont-s">
            <h1>{t("JuridicalN1")}</h1>
                <p style={{fontSize: "14pt", color: "#000000"}}>{t("JuridicalN2")}<br/>{t("JuridicalN3")}</p>
                    <p style={{fontSize: "14pt"}}>{t("JuridicalN4")}<br/>
                        <span style={{color: "#808080", fontSize: "12pt"}}>{t("JuridicalN5")}</span></p>
                    <p style={{fontSize: "14pt"}}>{t("JuridicalN6")}</p>
                    <p style={{fontSize: "14pt"}}><span style={{fontWeight: "bold"}}>ОсОО «НаТВ»</span>, ИНН 01210201710151</p>
                    <p style={{fontSize: "14pt"}}>{t("JuridicalN7")}</p>
                    <p style={{fontSize: "14pt"}}>{t("JuridicalN8")}</p>
                    <p style={{fontSize: "14pt"}}>{t("JuridicalN9")}
                        <a href="mailto:info@natv.kg">info@natv.kg</a>{t("JuridicalN10")}</p>
                    <p style={{fontSize: "14pt"}}>{t("JuridicalN11")}</p>
                    <p style={{textAlign: "center", fontWeight: "bold", fontSize: "22px", margin: "30px"}}>
                        <NavLink to="/">{t("JuridicalN12")}</NavLink></p>
                    <p style={{fontSize: "12pt"}}>{t("JuridicalN13")}</p>
                    </div>
            </div>
        </>
    )
}

export default withTranslation() (DlyaYuridicheskihLicCom);