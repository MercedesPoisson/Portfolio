import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faFile as faSolidFile } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import MercedesPoisson from "../utils/MercedesPoisson.pdf";

const RightIcons = () => {
  return (
    <div className="flex flex-col ml-4 mr-4 mt-36">
      <a href="https://github.com/MercedesPoisson" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center cursor-pointer">
        <FontAwesomeIcon icon={faGithubSquare} className="text-green text-lg sm:text-3xl hover:text-red" />
      </a>
      <a href="https://www.linkedin.com/in/mercedespoisson/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center mt-4 cursor-pointer">
        <FontAwesomeIcon icon={faLinkedin} className="text-green text-lg sm:text-3xl hover:text-red" />
      </a>
      <a href="mailto:mercedespoisson@yahoo.com" className="flex flex-col items-center mt-4 cursor-pointer">
        <FontAwesomeIcon icon={faEnvelope} className="text-green text-lg sm:text-3xl hover:text-red" />
      </a>
      <a href="https://wa.me/5491158335017" target="_blank" rel="noreferrer" className="flex flex-col items-center mt-4 cursor-pointer">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-green text-lg sm:text-3xl hover:text-red" />
                </a>
      {/* <div className="flex flex-col items-center mt-4 cursor-pointer">
        <a href="/MercedesPoisson.pdf"
        download="MercedesPoisson.pdf">
          <FontAwesomeIcon icon={faSolidFile} className="text-green text-lg sm:text-3xl hover:text-red" />
        </a>
      </div> */}
    </div>
  );
};

export default RightIcons;