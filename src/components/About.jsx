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
        In my professional journey, I transitioned from being a data analyst at the Federal Administration of Public Revenues 
        (AFIP) to following my passion for interior decoration and establishing my own company. 
        This venture ignited my interest in web development, 
        leading me to a transformative bootcamp at Soy Henry. 
        </p>
      </div>
      <div className="text-sm mt-4 text-justify">
        <p className={`font-light sm:font-medium ${isPurple ? "text-slate-200" : "text-black"}`}>
        Now, equipped with a wealth of knowledge, I'm ready to embark on an exciting new 
        chapter as a web developer. Continuously hungry for learning and eager to stay at 
        the forefront of technology, I'm looking forward to blending my technical expertise 
        with creative design in a UI/UX design course. The future is full of possibilities, 
        and I can't wait to create innovative solutions and captivating user experiences.
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