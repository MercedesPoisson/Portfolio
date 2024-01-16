import { useContext } from "react";
import Slider from "react-slick";
import ColorContext from "./ColorContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faPlug,
  faScrewdriverWrench,
  faToolbox,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function ArrowContainer({ children }) {
  return <div className="flex mt-4">{children}</div>;
}

const Services = () => {
  const [t, i18n] = useTranslation("global");
  const { isPurple, toggleColor } = useContext(ColorContext);

  const servicesData = [
    {
      icon: faLaptopCode,
      title: t("Services.web"),
      description: t("Services.web_text"),
    },
    {
      icon: faPlug,
      title: t("Services.api"),
      description: t("Services.api_text"),
    },
    {
      icon: faScrewdriverWrench,
      title: t("Services.maint"),
      description: t("Services.maint_text"),
    },
    {
      icon: faShopify,
      title: t("Services.commerce"),
      description: t("Services.commerce_text"),
    },
    {
      icon: faToolbox,
      title: t("Services.technical"),
      description: t("Services.technical_text"),
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    // slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    arrows: true,
    // centerPadding: "60px",
    draggable: true,
    easing: "linear",
    swipeToSlide: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
    ],
  };

  // Componente para la flecha izquierda personalizada
  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <ArrowContainer>
        <div
          className="slick-arrow custom-prev-arrow"
          onClick={onClick}
        >
          {/* Puedes personalizar la apariencia de la flecha aquí */}
          <FontAwesomeIcon
            icon={faArrowLeft}
            className={`mr-2 cursor-pointer text-2xl ${
              isPurple ? "text-red " : "text-green "
            }`}
          />
        </div>
      </ArrowContainer>
    );
  }

  // Componente para la flecha derecha personalizada
  function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <ArrowContainer>
        <div
          className="slick-arrow custom-next-arrow"
          onClick={onClick}
        >
          {/* Puedes personalizar la apariencia de la flecha aquí */}
          <FontAwesomeIcon
            icon={faArrowRight}
            className={`mr-2 cursor-pointer text-2xl ${
              isPurple ? "text-red" : "text-green"
            }`}
          />
        </div>
      </ArrowContainer>
    );
  }

  return (
    <div className="mt-20">
      <h1
        className={`mb-1 text-2xl sm:text-3xl md:text-4xl font-bold ${
          isPurple ? "text-slate-200" : "text-black"
        }`}
      >
        {t("Services.title")}
      </h1>
      <p
        className={`text-sm mt-3 text-justify ${
          isPurple ? "text-slate-200" : "text-black"
        } `}
      >
        {t("Services.text")}
      </p>
      <Slider {...settings}>
        {servicesData.map((service, index) => (
          <div key={index} className="flex flex-col items-center border mb-8 mt-2 py-10 px-10 h-52 w-72">
            <FontAwesomeIcon
              icon={service.icon}
              className={`mr-2 cursor-pointer text-4xl ${
                isPurple ? "text-red  hover:text-green" : "text-green hover:text-red"
              }`}
            />
            <h4
              className={`font-light sm:font-semibold text-sm mt-3 text-center ${
                isPurple ? "text-slate-200" : "text-black"
              }`}
            >
              {service.title}
            </h4>
            <p
              className={`font-light sm:font-medium mt-3 text-center text-sm ${
                isPurple ? "text-slate-200" : "text-black"
              }`}
            >
              {service.description}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Services;