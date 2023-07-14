import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile as faSolidFile } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope as faEnvelope } from "@fortawesome/free-solid-svg-icons";

const RightIcons = () => {
  return (
    <div className="flex flex-col ml-4 mt-20">
      <a href="https://github.com/MercedesPoisson" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center cursor-pointer">
        <FontAwesomeIcon icon={faGithubSquare} className="text-green text-2xl" />
      </a>
      <a href="https://www.linkedin.com/in/mercedespoisson/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center mt-4 cursor-pointer">
        <FontAwesomeIcon icon={faLinkedin} className="text-green text-2xl" />
      </a>
      <a href="mailto:mercedespoisson@yahoo.com" className="flex flex-col items-center mt-4 cursor-pointer">
        <FontAwesomeIcon icon={faEnvelope} className="text-green text-2xl" />
      </a>
      <div className="flex flex-col items-center mt-4 cursor-pointer">
        <FontAwesomeIcon icon={faSolidFile} className="text-green text-2xl" />
      </div>
    </div>
  );
};

export default RightIcons;