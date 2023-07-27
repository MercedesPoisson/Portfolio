import { useContext, useState } from "react";
import ColorContext from "./ColorContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faPlug, faScrewdriverWrench, faToolbox  } from "@fortawesome/free-solid-svg-icons"; 
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { useTranslation }  from "react-i18next"

const Services = () => {
  const [t, i18n] = useTranslation("global")
  const { isPurple, toggleColor } = useContext(ColorContext);

  return (
    <div className="mt-20 ">
      <h1
        className={`mb-1 text-2xl sm:text-3xl md:text-4xl font-bold ${
          isPurple ? "text-slate-200" : "text-black"
        }`}
      >
        {t("Services.title")}
      </h1>
      <p className={`text-sm mt-3 text-justify ${isPurple ? "text-slate-200" : "text-black"} `}>
        {t("Services.text")}
        </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3">
        <div className="flex flex-col items-center border mb-8 py-3 px-3">
          <FontAwesomeIcon
            icon={faLaptopCode}
            className={`mr-2 cursor-pointer text-4xl ${
              isPurple
                ? "text-red  hover:text-green"
                : "text-green hover:text-red"
            }`}
          />
          <h4
            className={`font-light sm:font-semibold text-sm mt-3 text-center ${
              isPurple ? "text-slate-200" : "text-black"
            }`}
          >
            {t("Services.web")}
          </h4>
          <p
            className={`font-light sm:font-medium mt-3 text-center text-sm ${
              isPurple ? "text-slate-200" : "text-black"
            }`}
          >
            {t("Services.web_text")}
          </p>
        </div>

        <div className="flex flex-col items-center border mb-8 py-3 px-3">
          <FontAwesomeIcon
            icon={faPlug}
            className={`mr-2 cursor-pointer text-4xl ${
              isPurple
                ? "text-red  hover:text-green"
                : "text-green hover:text-red"
            }  `}
          />
          <h4
            className={`font-light sm:font-semibold mt-3 text-center text-sm ${
              isPurple ? "text-slate-200" : "text-black"
            }`}
          >
            {t("Services.api")}
          </h4>
          <p
            className={`font-light sm:font-medium mt-3 text-center text-sm ${
              isPurple ? "text-slate-200" : "text-black"
            }`}
          >
            {t("Services.api_text")}
          </p>
        </div>

        <div className="flex flex-col items-center border mb-8 py-3 px-3">
          <FontAwesomeIcon
            icon={faScrewdriverWrench} 
            className={`mr-2 cursor-pointer text-4xl ${
              isPurple
                ? "text-red  hover:text-green"
                : "text-green hover:text-red"
            }  `}
          />
          <h4
            className={`font-light sm:font-semibold mt-3 text-center text-sm ${
              isPurple ? "text-slate-200" : "text-black"
            }`}
          >
            {t("Services.maint")}
          </h4>
          <p
            className={`font-light sm:font-medium mt-3 text-center text-sm ${
              isPurple ? "text-slate-200" : "text-black"
            }`}
          > {t("Services.maint_text")}
            
          </p>
        </div>

        <div className="flex flex-col items-center border mb-8 py-3 px-3">
          <FontAwesomeIcon
            icon={faShopify } 
            className={`mr-2 cursor-pointer text-4xl ${
              isPurple
                ? "text-red  hover:text-green"
                : "text-green hover:text-red"
            }  `}
          />
          <h4
            className={`font-light sm:font-semibold mt-3 text-center text-sm ${
              isPurple ? "text-slate-200" : "text-black"
            }`}
          >
            {t("Services.commerce")}
          </h4>
          <p
            className={`font-light sm:font-medium mt-3 text-center text-sm ${
              isPurple ? "text-slate-200" : "text-black"
            }`}
          > {t("Services.commerce_text")}
            
          </p>
        </div>

        <div className="flex flex-col items-center border mb-8 py-3 px-3">
          <FontAwesomeIcon
            icon={faToolbox  } 
            className={`mr-2 cursor-pointer text-4xl ${
              isPurple
                ? "text-red  hover:text-green"
                : "text-green hover:text-red"
            }  `}
          />
          <h4
            className={`font-light sm:font-semibold mt-3 text-center text-sm ${
              isPurple ? "text-slate-200" : "text-black"
            }`}
          >
            {t("Services.technical")}
          </h4>
          <p
            className={`font-light sm:font-medium mt-3 text-center text-sm ${
              isPurple ? "text-slate-200" : "text-black"
            }`}
          > {t("Services.technical_text")}
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;