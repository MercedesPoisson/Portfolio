import { useContext } from "react";
import ColorContext from "./ColorContext";

const Footer = () => {
    const { isPurple, toggleColor } = useContext(ColorContext);
    return(
        <div className={`h-10 text-slate-200 flex justify-end items-center ${isPurple ? "bg-red" : "bg-red"}`}>
            <p className="mr-10"></p>
        </div>
    )
}
export default Footer