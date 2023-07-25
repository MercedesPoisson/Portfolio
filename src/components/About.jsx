import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import ColorContext from "./ColorContext";

const About = () => {
  const { isPurple, toggleColor } = useContext(ColorContext);
  return (
    <div className="mt-20">
      <h1 className={`mb-1 text-2xl sm:text-3xl md:text-4xl font-bold ${isPurple ? "text-slate-200" : "text-black"}`}>About</h1>
      <div className="text-sm mt-4 text-justify">
        <p className={`font-light sm:font-medium ${isPurple ? "text-slate-200" : "text-black"}`}>
        Over the past years, my professional journey led me to work as a data analyst at the 
        Federal Administration of Public Revenues (AFIP). While many find this career ideal, 
        I realized it wasn't my true passion. Taking a leap of faith, I ventured into 
        the world of interior decoration, establishing my own company.
        </p>
      </div>
      <div className="text-sm mt-4 text-justify">
        <p className={`font-light sm:font-medium ${isPurple ? "text-slate-200" : "text-black"}`}>
        As I delved into entrepreneurship, the need for automation and an efficient 
        website became evident for streamlining sales. This revelation sparked my interest in web development, 
        leading me to enroll in a bootcamp at Soy Henry. The following months were filled with intense studying and practice, 
        but my determination and unwavering commitment fueled me to give my best.
        </p>
      </div>
      <div className="text-sm mt-4 text-justify">
        <p className={`font-light sm:font-medium ${isPurple ? "text-slate-200" : "text-black"}`}>
        Now, with the bootcamp behind me, I'm excited to embrace a new chapter as a web developer. 
        My hunger for knowledge and fascination with emerging technologies drive me to remain at the cutting edge of the industry. 
        This journey has just begun, and I'm eager to create innovative solutions and contribute to the dynamic world of web development.
        </p>
      </div>
      <div className="text-sm mt-4 text-justify">
        <p className={`font-light sm:font-medium ${isPurple ? "text-slate-200" : "text-black"}`}>
        Looking forward, I'm taking my passion for front-end development to the next level by enrolling in a UI/UX design course. 
        I'm eager to blend my technical skills with creative design to craft captivating user experiences. 
        The future holds exciting possibilities, and I can't wait to see where this new journey takes me.
        </p>
      </div>
      <br/>
      <div className="text-green font-bold">
  <div className="flex items-center">
    <p className={`font-light sm:font-medium ${isPurple ? "text-red hover:text-green" : "text-green hover:text-red"}`}>
      Hope you enjoy my portfolio, and feel free to contact me at any time
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