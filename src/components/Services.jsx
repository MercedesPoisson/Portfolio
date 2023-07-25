import { useContext, useState } from "react";
import ColorContext from "./ColorContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faPlug, faScrewdriverWrench, faToolbox  } from "@fortawesome/free-solid-svg-icons"; 
import { faShopify } from "@fortawesome/free-brands-svg-icons";

const Services = () => {
  const { isPurple, toggleColor } = useContext(ColorContext);

  return (
    <div className="mt-20 ">
      <h1
        className={`mb-1 text-2xl sm:text-3xl md:text-4xl font-bold ${
          isPurple ? "text-slate-200" : "text-black"
        }`}
      >
        Services
      </h1>
      <p className={`text-sm mt-3 text-justify ${isPurple ? "text-slate-200" : "text-black"} `}>
        Let's talk about your needs and together, we'll create an organizational plan using agile 
        methodologies. We'll set timelines for each sprint and develop mock-ups or review designs 
        of your interest. 
        Let's work as a team to bring all your requirements to life</p>
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
            Web Development:
          </h4>
          <p
            className={`font-light sm:font-medium mt-3 text-center text-sm ${
              isPurple ? "text-slate-200" : "text-black"
            }`}
          >
            Design and development of optimized, responsive, and attractive
            websites to enhance your online presence.
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
            API Integration:
          </h4>
          <p
            className={`font-light sm:font-medium mt-3 text-center text-sm ${
              isPurple ? "text-slate-200" : "text-black"
            }`}
          >
            Connecting different services and platforms through API integration 
            to improve functionality and user experience.
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
            Optimization and Maintenance:
          </h4>
          <p
            className={`font-light sm:font-medium mt-3 text-center text-sm ${
              isPurple ? "text-slate-200" : "text-black"
            }`}
          > Optimizing existing websites, 
         continuous maintenance to ensure optimal performance.
            
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
            eCommerce Development:
          </h4>
          <p
            className={`font-light sm:font-medium mt-3 text-center text-sm ${
              isPurple ? "text-slate-200" : "text-black"
            }`}
          > Implementation and customization of eCommerce platforms to create appealing 
          and functional online stores.
            
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
            Technical Troubleshooting:
          </h4>
          <p
            className={`font-light sm:font-medium mt-3 text-center text-sm ${
              isPurple ? "text-slate-200" : "text-black"
            }`}
          > Identifying and resolving technical issues in existing applications and websites.
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;