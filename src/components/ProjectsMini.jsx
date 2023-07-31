import { useContext, useState } from "react";
import ColorContext from "./ColorContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import YouTube from "react-youtube";
import { useTranslation }  from "react-i18next"


const ProjectMini = () => {
  const { isPurple, toggleColor } = useContext(ColorContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [t, i18n] = useTranslation("global")

  const projects = [
    {
        title: "airebnb",
        videoUrl: "https://www.youtube.com/watch?v=EI7aJW3Hgww",
        githubUrl: "https://github.com/MercedesPoisson/Airebnb_Complete_Project",
        description: t("ProjectsMini.description_airebnb"),
      },
      {
        title: "Foddie Lovers",
        videoUrl: "https://www.youtube.com/watch?v=SJvKPsnBYao",
        githubUrl: "https://github.com/MercedesPoisson/FOOD_FOR_DEPLOY",
        description: t("ProjectsMini.description_foodielovers"),      
      },
      {
        title: "Rick & Morty",
        videoUrl: "https://www.youtube.com/watch?v=gX0y3v-uYy4",
        githubUrl: "https://github.com/MercedesPoisson/RickAndMorty",
        description: t("ProjectsMini.description_rick"),

      },
    ];

  const openModal = (project) => {
    setCurrentProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setCurrentProject(null);
    setModalIsOpen(false);
  };

  return (
    <div className="mt-20">
  <h1 className={`mb-1 text-2xl sm:text-3xl md:text-4xl font-bold ${isPurple ? "text-slate-200" : "text-black"}`}>
    {t("ProjectsMini.title")}
  </h1>
  <div className="grid gap-4 sm:grid-cols-3 mt-4">
    {projects.map((project) => (
      <div key={project.title} className="border p-4 text-center">
        <div className="aspect-w-16 aspect-h-9 mb-4 ">
          <img
            src={`https://img.youtube.com/vi/${project.videoUrl.split("v=")[1]}/hqdefault.jpg`}
            alt={project.title}
            onClick={() => openModal(project)}
            style={{ cursor: "pointer" }}
          />
        </div>
        <span className={`font-light sm:font-semibold text-sm mt-3 text-center ${isPurple ? "text-slate-200" : "text-black"}`}>{project.title}</span>
        <div className="flex justify-center gap-3 mt-4">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithubSquare} className={`text-${isPurple ? "red" : "green"} text-2xl hover:text-red`} />
          </a>
          <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className={`text-${isPurple ? "red" : "green"} text-2xl hover:text-red`} />
          </a>
          <button onClick={() => openModal(project)}>
            <FontAwesomeIcon icon={faInfoCircle} className={`text-${isPurple ? "red" : "green"} text-2xl hover:text-red`} />
          </button>
        </div>
      </div>
    ))}
  </div>
  <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  contentLabel="Project Modal"
  style={{
    overlay: {
      backgroundColor: isPurple ? "rgba(10, 25, 47, 0.5)" : "rgba(0, 0, 0, 0.75)",
      zIndex: 9999,
    },
    content: {
      backgroundColor: isPurple ? "#0a192f" : "#FFF",
      color: isPurple ? "text-black" : "text-slate-200",
      maxWidth: "700px", // Adjust the width as needed
      margin: "auto",
      borderRadius: "8px",
    },
  }}
>
  {currentProject && (
    <div>
      <h2 className={`font-light sm:font-medium mt-3 ${
                    isPurple ? "text-slate-200" : "text-black"
                  }`} >{currentProject.title}</h2>
      <YouTube videoId={currentProject.videoUrl.split("v=")[1]} />
      <p className={`font-light sm:font-medium mt-3 ${
                    isPurple ? "text-slate-200" : "text-black"
                  }`}>{currentProject.description}</p>
      {/* Add additional project details here */}
      <button
        onClick={closeModal}
        className={`border-2 border-red rounded-lg px-6 py-3 flex items-center my-6 ${isPurple ? "bg-purple-500 text-white" : "bg-white text-black"}`}
      >
        {t("ProjectsMini.button")}
      </button>
    </div>
  )}
</Modal>
</div>
  );
};

export default ProjectMini;