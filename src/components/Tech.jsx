import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faSquareJs, faCss3Alt, faReact, faNodeJs, faGitAlt, faGithub } from "@fortawesome/free-brands-svg-icons";
import { SiTypescript, SiTailwindcss, SiSequelize, SiExpress } from 'react-icons/si';
import { TbBrandVite } from 'react-icons/tb';
import { BiLogoPostgresql  } from 'react-icons/bi';
import { DiVisualstudio  } from 'react-icons/di';
import React from "react";
import { useContext } from "react";
import ColorContext from "./ColorContext";
import { useTranslation }  from "react-i18next"
import { SiNextdotjs } from "react-icons/si";

// import "./Tech.css";

const Tech = () => {
  const [t, i18n] = useTranslation("global")
  const { isPurple, toggleColor } = useContext(ColorContext);

  return (
    <div className="mt-20">
      <h1 className={`mb-1 text-2xl sm:text-3xl md:text-4xl font-bold ${isPurple ? "text-slate-200" : "text-black"}`}>{t("Tech.title")}</h1>
      <div className={`text-sm mt-4 text-justify font-medium ${isPurple ? "text-slate-200" : "text-black"}`}>
        <p className={isPurple ? "text-green" : "text-red"}>{t("Tech.p")}</p>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mt-6">
          <div className="flex flex-col items-center border mb-8 py-2">
            <span><FontAwesomeIcon icon={faHtml5} className={`mr-2 cursor-pointer text-4xl ${isPurple ? "text-red  hover:text-green" : "text-green hover:text-red"}  `} /></span>
            <span>HTML</span>
          </div>

          <div className="flex flex-col items-center justify-center border mb-8 py-2">
            <span><FontAwesomeIcon icon={faSquareJs} className={`mr-2 cursor-pointer text-4xl ${isPurple ? "text-red  hover:text-green" : "text-green hover:text-red"}  `} /></span>
            <span>JavaScript</span>
          </div>

          <div className="flex flex-col items-center border mb-8 py-2">
            <span><SiTypescript className={`mr-2 cursor-pointer text-4xl ${isPurple ? "text-red  hover:text-green" : "text-green hover:text-red"}  `} /> </span>
            <span>TypeScript</span>
            </div>
          
          <div className="flex flex-col items-center border mb-8 py-2">
            <span><FontAwesomeIcon icon={faCss3Alt} className={`mr-2 cursor-pointer text-4xl ${isPurple ? "text-red  hover:text-green" : "text-green hover:text-red"}  `} /></span>
            <span>CSS</span>
          </div>

          <div className="flex flex-col items-center border mb-8 py-2">
            <span><SiTailwindcss className={`mr-2 cursor-pointer text-4xl ${isPurple ? "text-red  hover:text-green" : "text-green hover:text-red"}  `} /> </span>
            <span>TailWind CSS</span>
            </div>

          <div className="flex flex-col items-center border mb-8 py-2">
            <span><FontAwesomeIcon icon={faReact} className={`mr-2 cursor-pointer text-4xl ${isPurple ? "text-red  hover:text-green" : "text-green hover:text-red"}  `} /></span>
            <span>React.js</span>
          </div>

          <div className="flex flex-col items-center border mb-8 py-2">
            <span><SiNextdotjs icon={SiNextdotjs} className={`mr-2 cursor-pointer text-4xl ${isPurple ? "text-red  hover:text-green" : "text-green hover:text-red"}  `} /></span>
            <span>Next.js</span>
          </div>

          <div className="flex flex-col items-center border mb-8 py-2">
            <span><TbBrandVite className={`mr-2 cursor-pointer text-4xl ${isPurple ? "text-red  hover:text-green" : "text-green hover:text-red"}  `} /></span>
             <span>Vite</span>
             </div>

          <div className="flex flex-col items-center border mb-8 py-2">
            <span><FontAwesomeIcon icon={faNodeJs} className={`mr-2 cursor-pointer text-4xl ${isPurple ? "text-red  hover:text-green" : "text-green hover:text-red"}  `} /></span>
            <span>Node.js</span>
          </div>

          <div className="flex flex-col items-center border mb-8 py-2">
            <span><SiExpress className={`mr-2 cursor-pointer text-4xl ${isPurple ? "text-red  hover:text-green" : "text-green hover:text-red"}  `}/></span>
            <span>Express</span>
            </div>

          <div className="flex flex-col items-center border mb-8 py-2">
            <span><SiSequelize className={`mr-2 cursor-pointer text-4xl ${isPurple ? "text-red  hover:text-green" : "text-green hover:text-red"}  `} /> </span>
            <span>Sequelize</span>
            </div>

          <div className="flex flex-col items-center border mb-8 py-2">
            <span><BiLogoPostgresql className={`mr-2 cursor-pointer text-4xl ${isPurple ? "text-red  hover:text-green" : "text-green hover:text-red"}  `} /></span> 
            <span>PostgreSQL</span>
            </div>

          <div className="flex flex-col items-center border mb-8 py-2">
            <span><FontAwesomeIcon icon={faGitAlt} className={`mr-2 cursor-pointer text-4xl ${isPurple ? "text-red  hover:text-green" : "text-green hover:text-red"}  `} /></span>
            <span>Git</span>
          </div>

          <div className="flex flex-col items-center border mb-8 py-2">
            <span><FontAwesomeIcon icon={faGithub} className={`mr-2 cursor-pointer text-4xl ${isPurple ? "text-red  hover:text-green" : "text-green hover:text-red"}  `} /></span>
            <span>GitHub</span>
          </div>

          <div className="flex flex-col items-center justify-center border mb-8 py-2">
  <span>
    <DiVisualstudio className={`mr-2 cursor-pointer text-4xl ${isPurple ? "text-red hover:text-green" : "text-green hover:text-red"}`} />
  </span>
  <span>Visual Studio Code</span>
</div>
        </div>
      </div>
    </div>
  );
};

export default Tech;

// import React from "react";
// import "./Tech.css";

// const Tech = () => {
//   const techSkills = [
//     "HTML",
//     "JavaScript",
//     "TypeScript",
//     "CSS",
//     "TailWind CSS",
//     "React.js",
//     "Vite",
//     "Node.js",
//     "Express",
//     "Sequelize",
//     "PostgresSQL",
//     "Git",
//     "GitHub",
//     "Visual Studio Code",
//   ];

//   return (
//     <div className="mt-20">
//       <h1 className="mb-1 text-5xl font-bold text-red">Tech Skills</h1>
//       <div className="text-sm mt-4 text-justify">
//         <p>Found some of the technologies I worked with:</p>

//         <div className="skills-grid">
//           {techSkills.map((skill) => (
//             <div className="skill-card" key={skill}>
//               <span>{skill}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tech;