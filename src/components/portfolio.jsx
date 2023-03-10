import React, { useState } from "react";
import selfie from "../assets/navbarSelfie.jpeg";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  function toggleBtn() {
      
    setIsActive((current) => !current);
  }

  return (
    <div className="w-screen h-screen grid grid-rows-8 grid-cols-6 grid-flow-col-dense overflow-hidden">
      <div className="bg-midnight-green col-span-full border-b-2 border-earth-yellow ">
        <div className="flex w-full">
          <button 
            className={
              isActive
                ? "hamburger hamburger--elastic z-[1055] "
                : "hamburger hamburger--3dx z-[1055]"
            }
            type="button"
            onClick={toggleBtn}
            data-te-toggle="modal"
  data-te-target="#staticBackdrop"
>
            <span className="hamburger-box z-[1055]">
              <span className="hamburger-inner z-[1055]"></span>
            </span>
          </button>{" "}
        </div>
      </div>

      <div className="col-span-full row-[span_6_/_span_6]">
        <div className="h-full w-full overflow-scroll overflow-x-hidden snap-y snap-mandatory flex flex-col items-center bg">
        <div
  data-te-modal-init
  className="fixed top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none backdrop-blur-sm"
  id="staticBackdrop"
  data-te-backdrop="static"
  data-te-keyboard="false"
  tabIndex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true">

        

  <div
    data-te-modal-dialog-ref
    className="pointer-events-none relative w-auto translate-y-[-0px] opacity-0 transition-all duration-75 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
    <div
      className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full h-screen flex-col border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-900 opacity-80 ">
      <div
        className="flex flex-shrink-0 items-center justify-between p-4 dark:border-opacity-50">
        <button
          type="button"
          className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          data-te-modal-dismiss
          aria-label="Close">
        </button>
      </div>










      
      <div
        className="flex flex-shrink-0 flex-wrap items-center justify-center border-neutral-100 p-4 ">
        <a href="#about">
        <button
          type="button"
          className="inline-block rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
          data-te-modal-dismiss
          data-te-ripple-init
          data-te-ripple-color="light"
          onClick={toggleBtn}>About
        </button>
        </a>
      </div>

    </div>

  </div>
</div>



          <div className=" w-full h-full rounded-lg flex-shrink-0 snap-start snap-always flex justify-center ">
            <div id="about" className="w-full h-[500px] bg-midnight-green/30 backdrop-blur-sm self-center shadow-lg">About</div>
          </div>
          <div id="skills" className="w-full h-full rounded-lg flex-shrink-0 snap-start snap-always flex justify-center">
            <div className="w-full h-[500px] bg-midnight-green/30  backdrop-blur-sm  self-center shadow-lg">Skills</div>
          </div>
          <div  id="projects" className="w-full h-full rounded-lg flex-shrink-0 snap-start snap-always flex justify-center shadow-lg">
            <div className="w-full h-[500px] bg-midnight-green/30  backdrop-blur-sm self-center">Projects</div>
          </div>
        </div>
      </div>

      <div className="bg-midnight-green col-span-full row-span-1 border-t-2 border-earth-yellow">
        Footer
      </div>
    </div>
  );
}
