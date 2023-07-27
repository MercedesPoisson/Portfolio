// import Portfolio from "../components/portfolio";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";
import RightIcons from "../components/RightIcons";
import Footer from "../components/Footer";
import { useContext } from "react";
import ColorContext from "../components/ColorContext";

const Home = () => {
  const { isPurple } = useContext(ColorContext);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 600);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`flex flex-col ${isPurple ? "bg-purple" : "bg-white"} ${isLargeScreen ? "h-screen" : "min-h-screen"} flex-grow-1 flex-shrink-0`}>
      <NavBar />
      <div className="flex-grow flex">
        <RightIcons />
        <div className={`w-full max-w-3xl mx-4 sm:mx-auto ${isLargeScreen ? "flex-grow" : ""}`}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

//className="h-screen w-screen overflow-hidden flex flex-col"