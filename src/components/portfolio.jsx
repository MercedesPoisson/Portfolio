// aca voy a hacer la parte de hero
import { useContext } from "react";
import ColorContext from "./ColorContext";
import MercedesPoisson from "../utils/MercedesPoisson.pdf";
import { BsCloudDownload } from 'react-icons/bs';
import { useTranslation }  from "react-i18next"


const Portfolio = () => {
    const [t, i18n] = useTranslation("global")
    const { isPurple, toggleColor } = useContext(ColorContext);

    return (
        <div className={`mt-20 `}>
            <h4 className={`mb-6 text-base font-bold ${isPurple ? "text-red" : "text-green"}`}>{t("Portfolio.hi")}</h4>
            <h1 className={`mb-1 text-3xl sm:text-4xl md:text-5xl font-bold ${isPurple ? "text-slate-200" : "text-black"}`}>Mercedes Poisson</h1>
            <h1 className={`mb-1 text-2xl sm:text-4xl md:text-5xl font-bold developer animate ${isPurple ? "text-slate-200" : "text-black"}`}>Full Stack Developer</h1>
            <p className={`text-sm mt-6 text-justify ${isPurple ? "text-slate-200" : "text-black"} `}>{t("Portfolio.description")}</p>
            <button className={`border-2 border-red rounded-lg px-6 py-3 flex items-center my-6 ${isPurple ? "bg-purple-500 text-white" : "bg-white text-black"}`} onClick={() => window.open(MercedesPoisson, "_blank")} download>
                <BsCloudDownload className="text-2xl mr-2" />PDF
            </button>
        </div>
    )
}
export default Portfolio;

//Clase animate correcta