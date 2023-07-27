import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import ColorContext from "./ColorContext";
import { useTranslation } from "react-i18next";

const About = () => {
  const [t] = useTranslation("global");

  const { isPurple, toggleColor } = useContext(ColorContext);
  return (
    <div className="mt-20">
      <h1 className={`mb-1 text-2xl sm:text-3xl md:text-4xl font-bold ${isPurple ? "text-slate-200" : "text-black"}`}>{t("About.title")}</h1>
      <div className="text-sm mt-4 text-justify">
        <p className={`font-light sm:font-medium ${isPurple ? "text-slate-200" : "text-black"}`}>
        {t("About.p_1")}
        </p>
      </div>
      <div className="text-sm mt-4 text-justify">
        <p className={`font-light sm:font-medium ${isPurple ? "text-slate-200" : "text-black"}`}>
        {t("About.p_2")}
        </p>
      </div>
      
      <br/>
      <div className="text-green font-bold">
  <div className="flex items-center">
    <p className={`font-light sm:font-medium ${isPurple ? "text-red hover:text-green" : "text-green hover:text-red"}`}>
      {t("About.p_3")}
    </p>
    
    <a href="mailto:mercedespoisson@yahoo.com" className="ml-4">
      <FontAwesomeIcon
        icon={faEnvelope}
        className={`text-2xl ${isPurple ? "text-red hover:text-green" : "text-green hover:text-red"}`}
      />
    </a>
  </div>
</div>
    </div>
  );
};

export default About;