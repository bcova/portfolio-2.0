import React, { useState } from "react";
import selfie from "../assets/navbarSelfie.jpeg";

export default function Navbar() {
  const [isActive2, setIsActive2] = useState(false);

  function menuToggle() {
    setIsActive2((current) => !current);
  }

  return (
    <div className="w-screen h-screen grid grid-rows-8 grid-cols-6 grid-flow-col-dense overflow-hidden">
      <div className="bg-midnight-green col-span-full border-b-2 border-earth-yellow ">
        <div className="drawer h-screen ">
            <input
              id="my-drawer"
              type="checkbox"
              className="drawer-toggle"
              onClick={menuToggle}
            />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer"
                className="btn bg-reseda-green drawer-button rounded-full"
              >
                Menu
              </label>
            </div>
            <div className={isActive2 ? "drawer-side z-10" : "drawer-side"}>
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 bg-reseda-green text-base-content ">
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Skills</a>
                </li>
              </ul>
            </div>
          </div>
      </div>
      <div className="col-span-full row-[span_6_/_span_6] ">
        <div className="h-full w-full overflow-scroll overflow-x-hidden snap-y snap-mandatory flex flex-col items-center text-white ">
          <div className=" w-full h-full rounded-lg flex-shrink-0 snap-start snap-always flex justify-center ">
            <div
              id="about"
              className="w-full h-[500px] bg-midnight-green/30 backdrop-blur-sm self-center text-4xl "
            >
              About
            </div>
          </div>
          <div
            id="skills"
            className="w-full h-full rounded-lg flex-shrink-0 snap-start snap-always flex justify-center"
          >
            <div className="w-full h-[500px] bg-midnight-green/30  backdrop-blur-sm self-center text-4xl ">
              Skills
            </div>
          </div>
          <div
            id="projects"
            className="w-full h-full rounded-lg flex-shrink-0 snap-start snap-always flex justify-center shadow-lg"
          >
            <div className="w-full h-[500px] bg-midnight-green/30  backdrop-blur-sm self-center text-4xl">
              Projects
            </div>
          </div>
        </div>
        
      </div>
      <div className="bg-midnight-green col-span-full row-span-1 border-t-2 border-earth-yellow">
        Footer
      </div>
    </div>
  );
}
