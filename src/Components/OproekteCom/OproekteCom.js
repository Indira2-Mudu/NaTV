import React from "react";
import { withTranslation } from "react-i18next";

const OproekteCom = (props) => {
    const { t } = props;
    return(
        <>
            <div className="pd-40 bg-white page">
                <p>{t("OroektN2")}</p>
                <p>{t("OroektN3")}</p>
                <p>{t("OroektN4")}</p>
                <p>{t("OroektN5")}</p>
                <p>{t("OroektN6")}</p>
                <p>{t("OroektN7")}<a href="#">info@natv.kg</a></p>
            </div>
        </>
    )
}

export default withTranslation() (OproekteCom);