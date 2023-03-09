import React from "react";
import selfie from "../assets/navbarSelfie.jpeg";
export default function Navbar() {
  return (
    <div className="w-screen h-screen grid grid-rows-6 grid-cols-6">
        <div className="bg-red-600 col-span-full row-span-1">Header</div>
        {/* <div className="bg-green-600 row-span-4">2</div> */}
        <div className="bg-yellow-600 col-span-full row-span-4">
            <div className="bg-purple-600 h-full w-full overflow-scroll overflow-x-hidden snap-y snap-mandatory flex flex-col items-center">
                    <div className="bg-green-600 w-full h-full rounded-lg flex-shrink-0 snap-start snap-always">
                                  Main
                   </div>
                    <div className="bg-green-600 w-full h-full rounded-lg flex-shrink-0 snap-start snap-always">
                                  Main
                    </div>
                    <div className="bg-green-600 w-full h-full rounded-lg flex-shrink-0 snap-start snap-always">
                                  Main
                    </div>
              </div>
        </div>
        {/* <div className="bg-orange-600 row-span-4">4</div> */}
        <div className="bg-blue-600 col-span-full row-span-1">Footer</div>
    </div>
  );
}
