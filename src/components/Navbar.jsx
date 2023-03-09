import React from "react";
import selfie from "../assets/navbarSelfie.jpeg";
export default function Navbar() {
  return (
    <div className="w-screen h-screen grid grid-rows-8 grid-cols-6 grid-flow-col-dense"> 
        <div className="bg-midnight-green col-span-full border-b-2 border-earth-yellow">Header</div>

        <div className="col-span-full row-[span_6_/_span_6]">
            <div className="h-full w-full overflow-scroll overflow-x-hidden snap-y snap-mandatory flex flex-col items-center">
                    <div className=" w-full h-full rounded-lg flex-shrink-0 snap-start snap-always flex justify-center">
                                  <div className="w-full h-[500px] bg-gray-500/30 backdrop-blur-sm self-center">

                                  </div>
                   </div>
                    <div className="w-full h-full rounded-lg flex-shrink-0 snap-start snap-always flex justify-center">
                          <div className="w-full h-[500px] bg-gray-500/30 backdrop-blur-sm  self-center">

                          </div>
                    </div>
                    <div className="w-full h-full rounded-lg flex-shrink-0 snap-start snap-always flex justify-center">
                          <div className="w-full h-[500px] bg-gray-500/30 backdrop-blur-sm self-center">

                          </div>
                    </div>
              </div>
        </div>

        <div className="bg-midnight-green col-span-full row-span-1 border-t-2 border-earth-yellow">Footer</div>
    </div>
  );
}
