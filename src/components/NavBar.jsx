import { useNavigate } from "react-router";
import { BsEmojiSmileFill } from "react-icons/bs";
import { useContext, useState } from "react";
import ColorContext from "./ColorContext";

const NavBar = () => {
  const { isPurple, toggleColor } = useContext(ColorContext);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleNavigateToPortfolio = () => {
    setShowMenu(false);
    navigate("/");
  };

  const handleNavigateToAbout = () => {
    setShowMenu(false);
    navigate("/about");
  };

  const handleNavigateTotech = () => {
    setShowMenu(false);
    navigate("/tech");
  };

  const handleNavigateToProject = () => {
    setShowMenu(false);
    navigate("/project");
  };

  const handleNavigateToContact = () => {
    setShowMenu(false);
    navigate("/contact");
  };

  return (
    <div
      className={`h-16 px-4 flex items-center font-sans ${
        isPurple ? "bg-purple" : "bg-white"
      }`}
    >
      {isPurple ? (
        <BsEmojiSmileFill
          className={`mr-2 text-green animate-pulse cursor-pointer`}
          onClick={toggleColor}
        />
      ) : (
        <BsEmojiSmileFill
          className={`mr-2 text-red animate-pulse cursor-pointer`}
          onClick={toggleColor}
        />
      )}
      <p className={`text-sm font-light ${isPurple ? "text-slate-200" : "text-black"}`}>
        mood control
      </p>

      <div
        className={`flex gap-2 mr-2 ml-auto ${
          isPurple ? "text-slate-200" : "text-black"
        }`}
      >
        <nav className="hidden sm:flex space-x-6">
          <ul className="flex space-x-6">
            <li
              className="cursor-pointer font-medium hover:text-green"
              onClick={handleNavigateToPortfolio}
            >
              Home
            </li>
            <li
              className="cursor-pointer font-medium hover:text-green"
              onClick={handleNavigateToAbout}
            >
              About
            </li>
            <li
              className="cursor-pointer font-medium hover:text-green"
              onClick={handleNavigateTotech}
            >
              Tech
            </li>
            <li
              className="cursor-pointer font-medium hover:text-green"
              onClick={handleNavigateToProject}
            >
              Projects
            </li>
            {/* <li className="cursor-pointer font-medium hover:text-green" onClick={handleNavigateToContact}>Contact</li> */}
            <li
              className="cursor-pointer mr-1 font-bold text-red hover:text-black"
            >
              ES
            </li>
            {/* <li className="cursor-pointer font-bold text-red hover:text-black">ES</li> */}
          </ul>
        </nav>
        <div className="sm:hidden">
          {/* Botón para abrir el menú hamburguesa */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className={`text-black p-2`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Menú hamburguesa */}
          {showMenu && (
            <ul className="bg-white absolute top-14 right-4 p-4 rounded-md shadow-lg">
              <li
                className="block cursor-pointer font-medium text-black hover:text-green mb-2"
                onClick={handleNavigateToPortfolio}
              >
                Home
              </li>
              <li
                className="block cursor-pointer font-medium text-black hover:text-green mb-2"
                onClick={handleNavigateToAbout}
              >
                About
              </li>
              <li
                className="block cursor-pointer font-medium text-black hover:text-green mb-2"
                onClick={handleNavigateTotech}
              >
                Tech
              </li>
              <li
                className="block cursor-pointer font-medium text-black hover:text-green mb-2"
                onClick={handleNavigateToProject}
              >
                Projects
              </li>
              {/* <li className="block cursor-pointer font-medium text-black hover:text-green mb-2" onClick={handleNavigateToContact}>Contact</li> */}
              <li
                className="block cursor-pointer font-bold text-red hover:text-black"
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                ES
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;