import React from "react";
import { CircleUserRound } from "lucide-react";

function NavbarProfile() {
  return (
    <div className="mx-16 h-28 border-b-1 border-white/20 flex justify-between items-center ">
      <a className="text-white font-didot text-5xl" href="/home">
        Vessel
      </a>
      <a href="">
        <CircleUserRound className="w-12 h-12 text-white" />
      </a>
    </div>
  );
}

export default NavbarProfile;
