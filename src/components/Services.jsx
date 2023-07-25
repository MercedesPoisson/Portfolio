import { useContext, useState } from "react";
import ColorContext from "./ColorContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faPlug, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons"; // Importa los iconos específicos que deseas usar

const Services = () => {
  const { isPurple, toggleColor } = useContext(ColorContext);

  return (
    <div className="mt-20">
      <h1
        className={`mb-1 text-2xl sm:text-3xl md:text-4xl font-bold ${
          isPurple ? "text-slate-200" : "text-black"
        }`}
      >
        Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <div className="flex flex-col items-center border mb-8 py-6 px-6">
          <FontAwesomeIcon
            icon={faLaptopCode}
            className={`mr-2 cursor-pointer text-4xl ${
              isPurple
                ? "text-red  hover:text-green"
                : "text-green hover:text-red"
            }`}
          />
          <h4
            className={`font-light sm:font-semibold mt-3 text-center ${
              isPurple ? "text-slate-200" : "text-black"
            }`}
          >
            Web Development:
          </h4>
          <p
            className={`font-light sm:font-medium mt-3 text-center ${
              isPurple ? "text-slate-200" : "text-black"
            }`}
          >
            Design and development of optimized, responsive, and attractive
            websites to enhance your online presence.
          </p>
        </div>

        <div className="flex flex-col items-center border mb-8 py-6 px-6">
          <FontAwesomeIcon
            icon={faPlug}
            className={`mr-2 cursor-pointer text-4xl ${
              isPurple
                ? "text-red  hover:text-green"
                : "text-green hover:text-red"
            }  `}
          />
          <h4
            className={`font-light sm:font-semibold mt-3 text-center ${
              isPurple ? "text-slate-200" : "text-black"
            }`}
          >
            API Integration:
          </h4>
          <p
            className={`font-light sm:font-medium mt-3 text-center ${
              isPurple ? "text-slate-200" : "text-black"
            }`}
          >
            Connecting different services and platforms through API integration 
            to improve functionality and user experience.
          </p>
        </div>

        <div className="flex flex-col items-center border mb-8 py-6 px-6">
          <FontAwesomeIcon
            icon={faScrewdriverWrench} 
            className={`mr-2 cursor-pointer text-4xl ${
              isPurple
                ? "text-red  hover:text-green"
                : "text-green hover:text-red"
            }  `}
          />
          <h4
            className={`font-light sm:font-semibold mt-3 text-center ${
              isPurple ? "text-slate-200" : "text-black"
            }`}
          >
            Optimization and Maintenance:
          </h4>
          <p
            className={`font-light sm:font-medium mt-3 text-center ${
              isPurple ? "text-slate-200" : "text-black"
            }`}
          > Enhancing and optimizing existing applications and websites, 
          along with continuous maintenance to ensure optimal performance.
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

//

//  

//  

// eCommerce Development: Implementation and customization of eCommerce platforms to create appealing and functional online stores.

// Technical Troubleshooting: Identifying and resolving technical issues in existing applications and websites.
