import { useContext } from "react";
import ColorContext from "./ColorContext";

const Footer = () => {
    const { isPurple, toggleColor } = useContext(ColorContext);
    return(
        <div className={`h-10 text-yellow flex justify-end items-center ${isPurple ? "bg-green" : "bg-red"}`}>
            <p className="mr-10">Contact</p>
        </div>
    )
}
export default Footer