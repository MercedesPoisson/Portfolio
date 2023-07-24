import { useNavigate } from "react-router";
import { BsEmojiSmile, BsEmojiSmileFill  } from 'react-icons/bs';
import { useContext } from "react";
import ColorContext from "./ColorContext";

const NavBar = () => {
  const { isPurple, toggleColor } = useContext(ColorContext);
  const navigate = useNavigate();

  const handleNavigateToPortfolio = () => {
    navigate("/");
  }
  const handleNavigateToAbout = () => {
    navigate("/about");
  }
  const handleNavigateTotech = () => {
    navigate("/tech")
  }
  const handleNavigateToProject = () => {
    navigate("/project")
  }
  
  return (
    <div className={`h-16 px-4 flex items-center font-sans ${isPurple ? 'bg-purple' : 'bg-white'}`}>
      {isPurple ? (
        <BsEmojiSmileFill className="mr-2 text-red" onClick={toggleColor} />
      ) : (
        <BsEmojiSmileFill className="mr-2 text-purple" onClick={toggleColor} />
      )}
      <p className={`text-sm font-light ${isPurple ? "text-slate-200" : "text-black"}`}>
        mood color control
      </p>

      <div className={`flex gap-2 mr-2 ml-auto ${isPurple ? "text-slate-200" : "text-black"}`}>
        <nav>
          <ul className="flex space-x-6">
            <li className="cursor-pointer font-medium hover:text-green" onClick={handleNavigateToPortfolio}>Home</li>
            <li className="cursor-pointer font-medium hover:text-green" onClick={handleNavigateToAbout}>About</li>
            <li className="cursor-pointer font-medium hover:text-green" onClick={handleNavigateTotech}>Tech</li>
            <li className="cursor-pointer font-medium hover:text-green" onClick={handleNavigateToProject}>Projects</li>
            <li className="cursor-pointer font-medium hover:text-green">Contact</li>
            <li className="cursor-pointer mr-1 font-bold text-red hover:text-black">EN</li>
            <li className="cursor-pointer font-bold text-red hover:text-black">ES</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;