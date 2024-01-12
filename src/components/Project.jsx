import { useContext, useState } from "react";
import ColorContext from "./ColorContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PiPopcornDuotone } from "react-icons/pi";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Project = () => {
  const { isPurple, toggleColor } = useContext(ColorContext);

  const [activeProject, setActiveProject] = useState("airebnb");
  // const [activeVideoId, setActiveVideoId] = useState("");

  const handleProjectClick = (project) => {
    setActiveProject(project);
  };

  const handleWatchClick = (videoId) => {
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    window.open(videoUrl, "_blank");
  };

  return (
    <div className="mt-20">
      <h1
        className={`mb-1 text-2xl sm:text-3xl md:text-4xl font-bold ${
          isPurple ? "text-slate-200" : "text-black"
        }`}
      >
        Projects
      </h1>
      <div
        className={`text-sm mt-4 text-justify font-bold ${
          isPurple ? "text-slate-200" : "text-black"
        }`}
      >
        <div>
          <div
            className={`flex gap-2 mr-2 ml-auto ${
              isPurple ? "text-slate-200" : "text-black"
            }`}
          >
            <ul className="flex space-x-6">
            <li
                className={`cursor-pointer font-bold hover:text-green ${
                  isPurple ? "text-slate-200" : "text-black"
                }`}
                onClick={() => handleProjectClick("timbring")}
              >
                timbring
              </li>
              <li
                className={`cursor-pointer font-bold hover:text-green ${
                  isPurple ? "text-slate-200" : "text-black"
                }`}
                onClick={() => handleProjectClick("airebnb")}
              >
                airebnb
              </li>
              <li
                className={`cursor-pointer font-bold hover:text-green ${
                  isPurple ? "text-slate-200" : "text-black"
                }`}
                onClick={() => handleProjectClick("foodie-lovers")}
              >
                Foodie Lovers
              </li>
              <li
                className={`cursor-pointer font-bold hover:text-green ${
                  isPurple ? "text-slate-200" : "text-black"
                }`}
                onClick={() => handleProjectClick("rick-and-morty")}
              >
                Rick & Morty
              </li>
            </ul>
          </div>

          {activeProject === "timbring" && (
            <div>
              <p
                className={`font-light sm:font-medium mt-3 ${
                  isPurple ? "text-slate-200" : "text-black"
                }`}
              >
                Timbring was designed to address the complications that arise when attempting to deliver or receive a package when the recipient is not at home. It provides an efficient alternative to ensure that each delivery is made on time, offering convenience to both buyers and logistics companies.
                <p className="mt-3">
                Front-end: We chose the power of Next.js and Redux Toolkit to seamlessly handle the application's states. It is written in TypeScript, ensuring robust and maintainable code.
                </p>
                <p className="mt-3">
                Back-end: At the core of the application, we used JavaScript and Node.js. For data management, we relied on the robustness of PostgreSQL.
                </p>

                <p
                  className={`font-light sm:font-medium mt-3 ${
                    isPurple ? "text-slate-200" : "text-black"
                  }`}
                >
                  <a
                    href="https://www.youtube.com/watch?v=kLPVen4A0jU" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-green font-semibold">Check it out </a>
                </p>
                <p
                  className={`font-light sm:font-medium mt-3 ${
                    isPurple ? "text-slate-200" : "text-black"
                  }`}
                >
                  <a
                    href="https://github.com/MercedesPoisson/Airebnb_Complete_Project"
                    target="_blank"
                    rel="noopener noreferrer"
                  > 
                    <FontAwesomeIcon
                      icon={faGithubSquare}
                      className="text-red text-2xl hover:text-red justify-start"
                    />
                  </a>
                </p>
              </p>
              <button
                className={`border-2 border-red rounded-lg px-6 py-3 flex items-center my-6 ${
                  isPurple ? "bg-purple-500 text-white" : "bg-white text-black"
                }`}
                onClick={() => handleWatchClick("kLPVen4A0jU")}
              >
                <PiPopcornDuotone className="text-2xl mr-2" />
                WATCH
              </button>
            </div>
          )}
                            

          {activeProject === "airebnb" && (
            <div>
              <p
                className={`font-light sm:font-medium mt-3 ${
                  isPurple ? "text-slate-200" : "text-black"
                }`}
              >
                A dynamic application connecting property owners across Argentina with travelers seeking a 
                home-like experience
                <p
                  className={`font-light sm:font-medium mt-3 ${
                    isPurple ? "text-slate-200" : "text-black"
                  }`}
                >
                  Developed with Vite for speed, TypeScript for code quality, and Tailwind CSS for styling. 
                  Powered by Node.js and Express, with PostgreSQL and Sequelize for data management. Security and 
                  user authentication managed through Auth0, email notifications with NodeMailer, and image handling via Cloudinary. 
                  Enhanced with React libraries and integrated with Mercado Pago for seamless payments.
                </p>
                
                <p
                  className={`font-light sm:font-medium mt-3 ${
                    isPurple ? "text-slate-200" : "text-black"
                  }`}
                >
                <a href="https://pf-airbnb.vercel.app/?page=0" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-green font-semibold">Check it out </a>
                </p>
                <p
                  className={`font-light sm:font-medium mt-3 ${
                    isPurple ? "text-slate-200" : "text-black"
                  }`}
                >
                  <a
                    href="https://github.com/MercedesPoisson/Airebnb_Complete_Project"
                    target="_blank"
                    rel="noopener noreferrer"
                  >           
                    <FontAwesomeIcon
                      icon={faGithubSquare}
                      className="text-red text-2xl hover:text-red justify-start"
                    />
                  </a>
                </p>
              </p>
              <button
                className={`border-2 border-red rounded-lg px-6 py-3 flex items-center my-6 ${
                  isPurple ? "bg-purple-500 text-white" : "bg-white text-black"
                }`}
                onClick={() => handleWatchClick("EI7aJW3Hgww")}
              >
                <PiPopcornDuotone className="text-2xl mr-2" />
                WATCH
              </button>
            </div>
          )}
          {activeProject === "foodie-lovers" && (
            <div>
              <p
                className={`font-light sm:font-medium mt-3 ${
                  isPurple ? "text-slate-200" : "text-black"
                }`}
              >
                Foodie Lovers: A recipe-sharing app where users can explore and contribute their culinary creations.
                <p className="mt-3">
                The front-end boasts React for seamless UI and Redux for managing global state. Offering an array of user-friendly filters, 
                including a case-insensitive search bar for easy recipe discovery.
                </p>
                <p className="mt-3">
                Creating interactive recipe submission forms was a highlight, complete with a preview feature and image upload options. 
                On the back-end, Node.js manages routes, controllers, and handlers, while a PostgreSQL database works alongside 
                Sequelize ORM for efficient data management.
                </p>
                
                <p
                  className={`font-light sm:font-medium mt-3 ${
                    isPurple ? "text-slate-200" : "text-black"
                  }`}
                >
                  <a
                    href="https://github.com/MercedesPoisson/FOOD_FOR_DEPLOY"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithubSquare}
                      className="text-red text-2xl hover:text-red justify-start"
                    />
                  </a>
                </p>
              </p>
              <button
                className={`border-2 border-red rounded-lg px-6 py-3 flex items-center my-6 ${
                  isPurple ? "bg-purple-500 text-white" : "bg-white text-black"
                }`}
                onClick={() => handleWatchClick("SJvKPsnBYao")}
              >
                <PiPopcornDuotone className="text-2xl mr-2" />
                WATCH
              </button>
            </div>
          )}
          {activeProject === "rick-and-morty" && (
            <div>
              <p
                className={`font-light sm:font-medium mt-3 ${
                  isPurple ? "text-slate-200" : "text-black"
                }`}
              >
                This was the first application I developed to learn different
                technologies that I later improved. It is a hybrid project that,
                despite the mix of tech, turned out quite decent.
                <p className="mt-3">
                  It is an application to explore the characters from the TV
                  series Rick & Morty. Users can search and filter characters in
                  various ways, save them as favorites, and authenticate users.
                </p>
                <p
                  className={`font-light sm:font-medium mt-3 ${
                    isPurple ? "text-slate-200" : "text-black"
                  }`}
                >
                  <a
                    href="https://github.com/MercedesPoisson/RickAndMorty"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithubSquare}
                      className="text-red text-2xl hover:text-red justify-start"
                    />
                  </a>
                </p>
              </p>
              <button
                className={`border-2 border-red rounded-lg px-6 py-3 flex items-center my-6 ${
                  isPurple ? "bg-purple-500 text-white" : "bg-white text-black"
                }`}
                onClick={() => handleWatchClick("gX0y3v-uYy4")}
              >
                <PiPopcornDuotone className="text-2xl mr-2" />
                WATCH
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
