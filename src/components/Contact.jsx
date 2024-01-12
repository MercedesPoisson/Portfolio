import React from "react";
import { useContext } from "react";
import ColorContext from "./ColorContext";
import { useTranslation }  from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    const [t, i18n] = useTranslation("global");
    const { isPurple, toggleColor } = useContext(ColorContext);

    return (
        <div className="mt-20">
            <h1 className={`mb-1 text-2xl sm:text-3xl md:text-4xl font-bold ${isPurple ? "text-slate-200" : "text-black"}`}>{t("Contact.title")}</h1>
            <p className={ `font-light sm:font-medium ${isPurple ? "text-green" : "text-red"}`}>{t("Contact.p")}</p>
            <div className={`flex items-center mt-4 ${isPurple ? "text-red" : "text-green"}`}>
                <a href="https://wa.me/5491158335017" target="_blank" rel="noreferrer" className="flex flex-col items-center cursor-pointer mx-4">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-4xl hover:text-red" />
                </a>
                <a href="mailto:mercedespoisson@yahoo.com" className="flex flex-col items-center cursor-pointer mx-4">
                    <FontAwesomeIcon icon={faEnvelope} className="text-4xl hover:text-red" />
                </a>
                <a href="https://github.com/MercedesPoisson" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center cursor-pointer mx-4">
                    <FontAwesomeIcon icon={faGithubSquare} className="text-4xl hover:text-red" />
                </a>
                <a href="https://www.linkedin.com/in/mercedespoisson/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center cursor-pointer mx-4">
                    <FontAwesomeIcon icon={faLinkedin} className="text-4xl hover:text-red" />
                </a>
            </div>
        </div>
    );
};

export default Contact;