import React from "react";
import gitlogo from "./Media/gitlogo.png";
import linkrdinlogo from "./Media/linkdinlogo.png";
import xlogo from "./Media/xlogo.png";
import maillogo from "./Media/gmaillogo.png";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div>
        <h1 className="flex mt-9 flex-col items-center">
          Connect me through my soical or write me an email
        </h1>
        <div className="flex mt-2 flex-col items-center p-4">
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
          <a
            href="mailto:rajataj1234@gmail.com"
            target="blank"
            className="px-5"
          >
            <img src={maillogo} alt="" className="w-9 hover:scale-110" />
          </a>
          <Link to="/" className="mt-5">
            {" "}
            <button className="bg-[#f851df] p-2 rounded">Home</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Contact;
