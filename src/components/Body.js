import React from "react";
import img from "./Media/mypic.png";
import resume from "./Media/resume03.pdf";

function Body() {
  return (
    <>
      <div className="container flex flex-row mt-10  items-center">
        <div className="inline-flex bg-[#ec42f5] rounded-full m-10 w-1/4 h-1/4 basis-1/3">
          <a href={resume} download="my resume" target="_blank">
            <img
              src={img}
              alt=""
              className="rounded-full hover:scale-110 ease-in duration-700"
            />
          </a>
        </div>
        <div className=" basis-1/2   ">
          <h1 className="font-bold">Hi Iam Rajat Joshi</h1>
          <p className="mt-2">
            "Aspiring full stack Developer | BE Graduate | HTML5, CSS,
            JavaScript, Enthusiast | Proficient in Python SQL Ready for
            Entry-Level Challenges and Crafting Innovative Solutions"
          </p>
        </div>
      </div>
      <div className="grid grid-row-1 grid-flow-col gap-2 m-6 ">
        <div className="">
          As an aspiring full-stack developer and recent graduate with a
          Bachelor's in Engineering, my passion for technology and coding runs
          deep. Equipped with a solid foundation in HTML5, CSS, and JavaScript,
          I am driven by the relentless pursuit of knowledge and innovation in
          the ever-evolving realm of web development. My journey began with an
          insatiable curiosity for crafting visually appealing and user-friendly
          interfaces, which gradually evolved into a fascination with backend
          technologies and the intricacies of database management. Proficient in
          Python and adept at harnessing the power of SQL, I am poised to tackle
          entry-level challenges head-on, armed with a repertoire of skills
          honed through hands-on projects and dedicated self-study
        </div>
        <div>
          My enthusiasm for web development stems not only from the technical
          aspect but also from the boundless creative opportunities it offers.
          With a keen eye for design and a penchant for problem-solving, I
          thrive in environments where I can merge artistry with functionality
          to deliver seamless digital experiences. Whether it's optimizing code
          for efficiency, implementing responsive layouts for diverse screen
          sizes, or architecting robust backend systems, I approach each task
          with a blend of meticulous attention to detail and a knack for
          innovation. Ready to immerse myself in the dynamic landscape of
          software development, I am committed to continuous growth and
          learning, eager to contribute my skills and passion to crafting
          innovative solutions that push the boundaries of what's possible in
          the digital world.
        </div>
      </div>
      <div className="grid grid-row-1 p-6">
        Having delved into the realms of React.js and Tailwind CSS, I've
        expanded my toolkit to encompass cutting-edge technologies that empower
        me to create dynamic and visually stunning web applications. React.js,
        with its component-based architecture and virtual DOM, has
        revolutionized the way I approach front-end development, enabling me to
        build highly interactive user interfaces with ease and efficiency.
        Combined with the utility-first approach of Tailwind CSS, I have the
        flexibility to craft responsive designs and streamline my workflow by
        leveraging a comprehensive set of pre-built utility classes. This
        synergy between React.js and Tailwind CSS not only enhances my
        productivity but also elevates the aesthetic appeal and user experience
        of the projects I undertake. With a solid grasp of these modern
        frameworks, I am poised to tackle complex challenges and bring
        innovative ideas to life in the ever-evolving landscape of web
        development.
      </div>
    </>
  );
}

export default Body;
