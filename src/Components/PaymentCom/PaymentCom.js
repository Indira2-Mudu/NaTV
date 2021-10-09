import React from "react";
import PaymentLogo from "./PaymentLogo/PaymentLogo";
import {withTranslation} from "react-i18next";

const PaymentCom = (props) => {
    const {t} = props;
    return (
        <>
            <div className="bg-white">
                <div className="pd-40 page">
                    <h1>{t("PaymentN1")}</h1>
                    <p>{t("PaymentN2")}</p>
                    <p>{t("PaymentN3")}<br/><strong>OptimaBank, Касса 24, M&TC, Quickpay, Terempay, Umai.</strong></p>
                    <p>{t("PaymentN4")}<br/><strong>Optima24, ЭЛСОМ, UMAI, O!Деньги, Balance.kg, MegaPay, Visa, Master
                        Card</strong><br/>{t("PaymentN5")}</p>
                    <br/>
                    <p>{t("PaymentN6")}</p>
                </div>
                <PaymentLogo/>
            </div>
        </>
    )
}

export default withTranslation()(PaymentCom);