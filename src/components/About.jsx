import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import ColorContext from "./ColorContext";

const About = () => {
  const { isPurple, toggleColor } = useContext(ColorContext);
  return (
    <div className="mt-20">
      <h1 className={`mb-1 text-5xl font-bold ${isPurple ? "text-slate-200" : "text-black"}`}>About</h1>
      <div className="text-sm mt-4 text-justify">
        <p className={`font-medium ${isPurple ? "text-slate-200" : "text-black"}`}>
          In the past few years, I worked as a data analyst at the Federal
          Administration of Public Revenues (AFIP). Many people consider this to
          be an ideal job, but not for me. <br />
          After more than 13 years, I quit and started my own decoration
          company. At one point, the workload was so high that I needed some
          sales to be automated, which required a website. I thought to myself,
          "I can do it."
        </p>
      </div>
      <div className="text-sm mt-4 text-justify">
        <p className={isPurple ? "text-slate-200" : "text-black"}>
          And there it was, my very own breaking point. <br />
          I can't do things halfway, so I started researching and came across
          the format of a bootcamp at Soy Henry. I didn't really know what I
          was signing up for, but it turned out to be the most intense months of
          my life. Hours and hours of studying and practicing at a pace that I
          thought I would never keep up with. But, being stubborn in a good
          sense, always willing to push myself a little harder, and not being
          great at accepting defeat, I gave my best.
        </p>
      </div>
      <div className="text-sm mt-4 text-justify">
        <p className={isPurple ? "text-slate-200" : "text-black"}>
          Today, as I near the end of my studies, I am extremely proud of the
          achievement and the time I have invested. I can proudly say that I am
          a Full Stack developer, always eager to learn more in this
          never-ending tech world.
        </p>
      </div>
      <div className="text-sm mt-4 text-justify">
        <p className={isPurple ? "text-slate-200" : "text-black"}>
          And just when I thought everything had been written, I can say that I
          love having found this new profession and I am eager to rewrite my
          future.
        </p>
      </div>
      <br/>
      <div className="text-green font-bold">
  <div className="flex items-center">
    <p className={isPurple ? "text-red hover:text-green" : "text-green hover:text-red"}>
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