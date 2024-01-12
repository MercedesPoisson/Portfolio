// aca voy a hacer la parte de hero
import { useContext } from "react";
import ColorContext from "./ColorContext";
// import MercedesPoisson from "../utils/MercedesPoisson.pdf";
import { BsCloudDownload } from 'react-icons/bs';
import { useTranslation }  from "react-i18next"


const Portfolio = () => {
    const [t, i18n] = useTranslation("global")
    const { isPurple, toggleColor } = useContext(ColorContext);

    return (
        <div className={`mt-20 `}>
            <h4 className={`mb-6 text-base font-bold ${isPurple ? "text-red" : "text-green"}`}>{t("Portfolio.hi")}</h4>
            <h1 className={`mb-1 text-2xl sm:text-4xl md:text-5xl font-bold ${isPurple ? "text-slate-200" : "text-black" } `}>Mercedes Poisson</h1>

            <div
        className={`animation-area flex uppercase tracking-[1px] sm:tracking-[5px] bg-transparent text-xl sm:text-4xl text-argentina py-[20px] h-[60px] sm:h-[80px]  ${
          isPurple ? "text-slate-200" : "text-black"
        }`}
      >
        <p className="font-bold">{t("Portfolio.full")}</p>
        <div className="grid ml-[8px] animate scroll overflow-hidden text-red">
          <span className="animate-scroll">developer</span>
          <span className="animate-scroll">coder</span>
          <span className="animate-scroll">full stack developer</span>
          <span className="animate-scroll">UX/UI Designer</span>
          <span className="animate-scroll">{t("Portfolio.programmer")}</span>
          <span className="animate-scroll">developer</span>
        </div>
      </div>
            {/* <h1 className={`mb-1 text-2xl sm:text-4xl md:text-5xl font-bold animate developer animate ${isPurple ? "text-slate-200" : "text-black"}`}>Full Stack Developer</h1> */}
            <p className={`text-sm text-justify ${isPurple ? "text-slate-200" : "text-black"} `}>{t("Portfolio.description")}</p>
            {/* <a
        className={`w-28 border-2 border-red rounded-lg px-6 py-3 flex items-center my-6 ${isPurple ? "bg-purple-500 text-white" : "bg-white text-black"}`}
        href="https://portfolio-blush-three-21.vercel.app/MercedesPoisson.pdf"
        download="MercedesPoisson.pdf"
      >
                <BsCloudDownload className="text-2xl mr-2" />PDF
            </a> */}
        </div>
    )
}
export default Portfolio;

//Clase animate correcta