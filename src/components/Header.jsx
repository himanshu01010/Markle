// src/components/Header.jsx

import { Link, useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import i1 from '../images/logo.png';
import l1 from '../images/instagram.png';
import l2 from '../images/facebook.png';
import l3 from '../images/youtube.png';
import l4 from '../images/linkedin.png';

const Header = () => {
  const location = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-3.5"> {/* Slightly increased padding */}
        <Link className="block w-[11rem] xl:mr-8" to="/"> {/* Increased logo size */}
          <img src={i1} width={175} height={38} alt="Brainwave" /> {/* Adjusted image size */}
        </Link>

        <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[4.5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}> {/* Adjusted top position */}
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} px-5 py-5 md:py-7 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === location.pathname ? "z-2 lg:text-n-1" : "lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-11`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <a href="#" className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:flex items-center">
          <div className="flex justify-center">
            <img src={l1} width={28} height={28} alt="Logo 1" className="mx-2" /> {/* Slightly increased logo sizes */}
            <img src={l2} width={28} height={28} alt="Logo 2" className="mx-2" />
            <img src={l3} width={28} height={28} alt="Logo 3" className="mx-2" />
            <img src={l4} width={28} height={28} alt="Logo 4" className="mx-2" />
          </div>
        </a>

        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;