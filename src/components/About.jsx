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
          In the past few years, I worked as a data analyst at the Federal
          Administration of Public Revenues (AFIP). Many people consider this to
          be an ideal job, but not for me. <br />
          After over 13 years, I decided to take a leap of faith and pursue my passion 
          in the world of interior decoration, starting my own company.  As the workload increased, 
          I realized the need for automation and a website to streamline sales. 
          I thought to myself, "I can do it."
        </p>
      </div>
      <div className="text-sm mt-4 text-justify">
        <p className={`font-light sm:font-medium ${isPurple ? "text-slate-200" : "text-black"}`}>
        Little did I know that this turning point would lead me to an experience that would completely 
        blow my mind. <br />
        I stumbled upon the format of a bootcamp at Soy Henry, and without hesitation, 
        I jumped in. The following months were nothing short of intense – endless hours of studying 
        and practicing at a pace I never thought I could sustain. However, fueled by my determination 
        and unwillingness to accept defeat, I gave it my all.
        </p>
      </div>
      <div className="text-sm mt-4 text-justify">
        <p className={`font-light sm:font-medium ${isPurple ? "text-slate-200" : "text-black"}`}>
        With my studies now behind me, I am eager to embark on this exciting new chapter, 
        armed with the knowledge and skills to create innovative solutions and tackle complex challenges. 
        My passion for learning and exploring new technologies knows no bounds, and I am committed to staying 
        at the forefront of the industry.
        </p>
      </div>
      <div className="text-sm mt-4 text-justify">
        <p className={`font-light sm:font-medium ${isPurple ? "text-slate-200" : "text-black"}`}>
        And just when I thought the story was written, I realize that it's only the beginning. 
        I have found a new passion and profession that I absolutely love, and I'm excited to rewrite my 
        future with endless possibilities ahead.
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