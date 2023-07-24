import { useContext, useState } from "react";
import ColorContext from "./ColorContext";
import YouTube from "react-youtube";
import { PiPopcornDuotone } from 'react-icons/pi';
import Modal from "react-modal";

const Project = () => {
  const { isPurple, toggleColor } = useContext(ColorContext);

  const [activeProject, setActiveProject] = useState("airebnb");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState("");

  const handleProjectClick = (project) => {
    setActiveProject(project);
  };

  const openModal = (videoId) => {
    setIsModalOpen(true);
    setActiveVideoId(videoId);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveVideoId("");
  };

  return (
    <div className="mt-20">
      <h1
        className={`mb-1 text-5xl font-bold ${
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
                className={`cursor-pointer font-bold hover:text-green ${isPurple ? "text-slate-200" : "text-black"}`}
                onClick={() => handleProjectClick("airebnb")}
              >
                airebnb
              </li>
              <li
                className={`cursor-pointer font-bold hover:text-green ${isPurple ? "text-slate-200" : "text-black"}`}
                onClick={() => handleProjectClick("foodie-lovers")}
              >
                Foodie Lovers
              </li>
              <li
                className={`cursor-pointer font-bold hover:text-green ${isPurple ? "text-slate-200" : "text-black"}`}
                onClick={() => handleProjectClick("rick-and-morty")}
              >
                Rick & Morty
              </li>
            </ul>
          </div>

          {activeProject === "airebnb" && (
            <div>
              {/* <div>
                <YouTube className="w-96" videoId="EI7aJW3Hgww" />
              </div> */}
              <p
                className={`font-light mt-3 ${
                  isPurple ? "text-slate-200" : "text-black"
                }`}
              >
                An application designed to connect property owners throughout
                Argentina with people looking to stay in different parts of the
                country, providing them with a home-like experience while
                traveling.
                <p
                  className={`font-light mt-3 ${
                    isPurple ? "text-slate-200" : "text-black"
                  }`}
                >
                  The project was initiated using Vite as a fast framework for
                  application development. TypeScript was chosen for better code
                  quality, safety, and control. For styling, Tailwind CSS. Node.js was
                  selected as the runtime environment, and Express was chosen as the
                  framework for building the REST API.
                  PostgreSQL was used as the data management system, working in
                  conjunction with Sequelize for improved interaction.
                </p>
                <p
                  className={`font-light  mt-3 ${
                    isPurple ? "text-slate-200" : "text-black"
                  }`}
                >
                  Auth0 was implemented for security management and user
                  authentication using user sessions. NodeMailer was used for
                  email notifications regarding reservations and payments.
                  Cloudinary was used for image handling and storage. React
                  libraries, including date picker and responsive carousel, were
                  incorporated. Additionally, the Mercado Pago payment gateway
                  was integrated.
                </p>
                <p
                  className={`font-light  mt-3 ${
                    isPurple ? "text-slate-200" : "text-black"
                  }`}
                >
                  Deployed at: https://pf-airbnb.vercel.app/?page=0
                </p>
              </p>
              <button
                className={`border-2 border-red rounded-lg px-6 py-3 flex items-center my-6 ${
                  isPurple ? "bg-purple-500 text-white" : "bg-white text-black"
                }`}
                onClick={() => openModal("EI7aJW3Hgww")}
              >
                <PiPopcornDuotone className="text-2xl mr-2" />
                WATCH
              </button>
              <Modal
                isOpen={isModalOpen && activeVideoId === "EI7aJW3Hgww"}
                onRequestClose={closeModal}
                className={`modal ${isPurple ? "bg-slate-200" : "bg-white"} text-black`}
                overlayClassName="overlay"
                
              >
                {activeVideoId && <YouTube className="w-full" videoId={activeVideoId} />}
              </Modal>
            </div>
          )}
          {activeProject === "foodie-lovers" && (
            <div>
              {/* <div>
                <YouTube className="w-96" videoId="SJvKPsnBYao" />
              </div> */}
              <p
                className={`font-light mt-3 ${
                  isPurple ? "text-slate-200" : "text-black"
                }`}
              >
                Foodie Lovers is an application for users to search recipes and
                share their own ones.
                <p className="mt-3">
                  In the front-end development, I choose React to build the user
                  interface and Redux to manage the global state of the
                  application. I implemented a wide range of filters to
                  facilitate recipe search, including a search bar that allows
                  users to find recipes by full or partial name without case
                  sensitivity.
                </p>
                <p className="mt-3">
                  One of the most enjoyable parts of the project was creating an
                  interactive form that enables users to submit their own
                  recipes. I included a preview function so that users can see
                  how their recipe will look before publishing it, and I also
                  considered the option for users to upload custom images or
                  choose from a selection of pre-loaded images.
                </p>
                <p className="mt-3">
                  For the back-end, I used Node.js to handle routes (CRUD),
                  controllers, and handlers. Additionally, I implemented a
                  PostgreSQL database using the Sequelize ORM.
                </p>
              </p>
              <button
                className={`border-2 border-red rounded-lg px-6 py-3 flex items-center my-6 ${
                  isPurple ? "bg-purple-500 text-white" : "bg-white text-black"
                }`}
                onClick={() => openModal("SJvKPsnBYao")}
              >
                <PiPopcornDuotone className="text-2xl mr-2" />
                WATCH
              </button>
              <Modal
                isOpen={isModalOpen && activeVideoId === "SJvKPsnBYao"}
                onRequestClose={closeModal}
                className={`modal ${isPurple ? "bg-slate-200" : "bg-white"} text-black `}
                overlayClassName="overlay"
              >
                {activeVideoId && <YouTube className="w-full" videoId={activeVideoId} />}
              </Modal>
            </div>
          )}
          {activeProject === "rick-and-morty" && (
            <div>
              {/* <div>
                <YouTube className="w-96" videoId="gX0y3v-uYy4" />
              </div> */}
              <p
                className={`font-light mt-3 ${
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
              </p>
              <button
                className={`border-2 border-red rounded-lg px-6 py-3 flex items-center my-6 ${
                  isPurple ? "bg-purple-500 text-white" : "bg-white text-black"
                }`}
                onClick={() => openModal("gX0y3v-uYy4")}
              >
                <PiPopcornDuotone className="text-2xl mr-2" />
                WATCH
              </button>
              <Modal
                isOpen={isModalOpen && activeVideoId === "gX0y3v-uYy4"}
                onRequestClose={closeModal}
                className={`modal ${isPurple ? "bg-slate-200" : "bg-white"} text-black `}
                overlayClassName="overlay"
              >
                {activeVideoId && <YouTube className="w-full" videoId={activeVideoId} />}
              </Modal>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;