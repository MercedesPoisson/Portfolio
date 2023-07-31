import { useNavigate } from "react-router";
import { BsEmojiSmileFill } from "react-icons/bs";
import { useContext, useState } from "react";
import ColorContext from "./ColorContext";
import { useTranslation }  from "react-i18next"

const NavBar = () => {
  const [t, i18n] = useTranslation("global")
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

  const handleNavigateToServices = () => {
    setShowMenu(false);
    navigate("/services")
  }

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
        <nav className="hidden sm:flex space-x-6 mr-6">
          <ul className="flex space-x-6">
            <li
              className="cursor-pointer font-medium hover:text-green"
              onClick={handleNavigateToPortfolio}
            >
              {t("NavBar.Home")}
            </li>
            <li
              className="cursor-pointer font-medium hover:text-green"
              onClick={handleNavigateToAbout}
            >
              {t("NavBar.About")}
            </li>
            <li
              className="cursor-pointer font-medium hover:text-green"
              onClick={handleNavigateTotech}
            >
              {t("NavBar.Tech")}
            </li>

            <li
              className="cursor-pointer font-medium hover:text-green"
              onClick={handleNavigateToProject}
            >
              {t("NavBar.Projects")}
            </li>
            <li
              className="cursor-pointer font-medium hover:text-green"
              onClick={handleNavigateToServices}
            >
              {t("NavBar.Services")}
            </li>
            
            <li
              className="cursor-pointer font-medium hover:text-green"
              onClick={handleNavigateToContact}
            >
              {t("NavBar.Contact")}
            </li>

            {/* <li className="cursor-pointer font-medium hover:text-green" onClick={handleNavigateToContact}>Contact</li> */}
            {/* <li className="cursor-pointer mr-1 font-bold text-red hover:text-black">
              <button onClick={() => i18n.changeLanguage("es")}>
                ES
              </button>              
            </li>
            <li className="cursor-pointer font-bold text-red hover:text-black">
              <button onClick={() => i18n.changeLanguage("en")}>EN
                </button>
                </li> */}
          </ul>
        </nav>

        <div className={`ml-auto flex gap-4 ${isPurple ? "text-slate-200" : "text-black"}`}>
        <button className="font-bold text-red hover:text-black" onClick={() => i18n.changeLanguage("es")}>
          ES
        </button>
        <button className="font-bold text-red hover:text-black" onClick={() => i18n.changeLanguage("en")}>
          EN
        </button>
      </div>

        <div className="sm:hidden">
          {/* Botón para abrir el menú hamburguesa */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className={`text-${isPurple ? "slate-200" : "black"} p-2`}
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
            <ul className="bg-white fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center p-4"
            style={{
              zIndex: 9999, 
            }}
            >
              <li
                className="block cursor-pointer font-medium text-black hover:text-green mb-2"
                onClick={handleNavigateToPortfolio}
              >
                {t("NavBar.Home")}
              </li>
              <li
                className="block cursor-pointer font-medium text-black hover:text-green mb-2"
                onClick={handleNavigateToAbout}
              >
                {t("NavBar.About")}
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
                {t("NavBar.Projects")}
              </li>
              <li
                className="block cursor-pointer font-medium text-black hover:text-green mb-2"
                onClick={handleNavigateToServices}
              >
                {t("NavBar.Services")}
              </li>
              <li
                className="block cursor-pointer font-medium text-black hover:text-green mb-2"
                onClick={handleNavigateToContact}
              >
                {t("NavBar.Contact")}
              </li>
              
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;