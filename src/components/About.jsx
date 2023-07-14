import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <div className="mt-20">
      <h1 className="mb-1 text-5xl font-bold text-red">About</h1>
      <div className="text-sm mt-4 text-justify">
        <p>
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
        <p>
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
        <p>
          Today, as I near the end of my studies, I am extremely proud of the
          achievement and the time I have invested. I can proudly say that I am
          a Full Stack developer, always eager to learn more in this
          never-ending tech world.
        </p>
      </div>
      <div className="text-sm mt-4 text-justify">
        <p>
          And just when I thought everything had been written, I can say that I
          love having found this new profession and I am eager to rewrite my
          future.
        </p>
      </div>
      <div className="text-green">
        <br />
        Hope you enjoy my portfolio, and feel free to contact me at any time 
        <a href="mailto:mercedespoisson@yahoo.com" >
          <FontAwesomeIcon icon={faEnvelope} className="text-red text-2xl ml-4" />
        </a>
      </div>
    </div>
  );
};

export default About;