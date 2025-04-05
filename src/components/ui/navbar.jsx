import React from "react";
import { CircleUserRound } from "lucide-react";

function Navbar() {
  return (
    <div className="mx-16 h-28 border-b-1 border-white/20 flex justify-between items-center ">
      <h1 className="text-white font-didot text-5xl">Vessel</h1>
      <div className="text-white  mr-12 flex gap-8">
        <button onClick={"/home"} className="text-2xl">
          Login
        </button>
        <a href="">
          <CircleUserRound className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
