// import Portfolio from "../components/portfolio";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";
import RightIcons from "../components/RightIcons";

const home = () => {
  return (
    <div className="flex flex-col h-screen">
        <NavBar />
      
      <div className="flex-grow flex">
        <RightIcons />
        <div className="w-full max-w-3xl mx-auto flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default home;

//className="h-screen w-screen overflow-hidden flex flex-col"