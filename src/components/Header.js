import React from "react";
import gitlogo from "./Media/gitlogo.png";
import linkrdinlogo from "./Media/linkdinlogo.png";
import xlogo from "./Media/xlogo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="container min-h-screen relative  inline font-medium">
      <nav className="bg-[#f851df] flex items-center text-white min-h-14">
        <ul className="flex-1 text-left">
          <li className="inline-block mx-9 hover:scale-110">
            <Link to="/">Home</Link>
          </li>
          <li className="inline-block mx-9 hover:scale-110">
            <Link to="/Projects">Projects</Link>
          </li>
          <li className="inline-block mx-9 hover:scale-110">
            <Link to="/Education">Education</Link>
          </li>
          <li className="inline-block mx-9 hover:scale-110">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <div className="flex mt-2">
          <a href=" https://twitter.com/home" target="_blank" className="px-5">
            <img src={xlogo} alt="" className="w-9 hover:scale-110 " />
          </a>

          <a
            href="https://github.com/Joshi2209"
            target="blank"
            className="px-5"
          >
            <img src={gitlogo} alt="" className="w-9 hover:scale-110" />
          </a>

          <a
            href="https://www.linkedin.com/in/rajataj/"
            target="blank"
            className="px-5"
          >
            <img src={linkrdinlogo} alt="" className="w-9 hover:scale-110" />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
