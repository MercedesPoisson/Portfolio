import { useNavigate } from "react-router";

const NavBar = () => {
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
  return (
    <div className="bg-white h-16 px-4 flex items-center font-sans">
      <div className="flex gap-2 mr-2 ml-auto">
        <nav>
          <ul className="flex space-x-6">
            <li className="cursor-pointer font-bold hover:text-green" onClick={handleNavigateToPortfolio}>Home</li>
            <li className="cursor-pointer font-bold hover:text-green" onClick={handleNavigateToAbout}>About</li>
            <li className="cursor-pointer font-bold hover:text-green" onClick={handleNavigateTotech}>Tech</li>
            <li className="cursor-pointer font-bold hover:text-green">Projects</li>
            <li className="cursor-pointer font-bold hover:text-green">Contact</li>
            <li className="cursor-pointer mr-1 font-bold text-red hover:text-black">EN</li>
            <li className="cursor-pointer font-bold text-red hover:text-black">ES</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;