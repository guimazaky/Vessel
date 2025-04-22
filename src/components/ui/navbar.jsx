import React from "react";
import { CircleUserRound } from "lucide-react";

function Navbar() {
  return (
    <div className="mx-16 h-28 border-b-1 border-white/20 flex justify-between items-center ">
      <a className="text-white font-didot text-5xl" href="/home">
        Vessel
      </a>
      <div className="text-white  mr-12 flex gap-8 items-center">
        <a href="">
          <CircleUserRound className="w-12 h-12" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
