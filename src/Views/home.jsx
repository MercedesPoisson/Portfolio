// import Portfolio from "../components/portfolio";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";
import RightIcons from "../components/RightIcons";
import Footer from "../components/Footer";
import { useContext } from "react";
import ColorContext from "../components/ColorContext";

const Home = () => {
    const { isPurple } = useContext(ColorContext);
  return (
    <div className={`flex flex-col h-screen ${isPurple ? "bg-purple" : "bg-white"}`}>
        <NavBar />
      <div className="flex-grow flex">
        <RightIcons />
        <div className="w-full max-w-3xl mx-auto flex-grow">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

//className="h-screen w-screen overflow-hidden flex flex-col"