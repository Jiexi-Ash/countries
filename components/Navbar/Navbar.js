import React from "react";
import { MoonIcon } from "@heroicons/react/solid";
import { MoonIcon as MoonIconOutline } from "@heroicons/react/outline";

function Navbar() {
  return (
    <header className="container max-w-8xl mx-auto px-4 py-[30px] shadow-sm">
      <nav className="flex justify-between items-center">
        <h1 className="text-sm font-extrabold">Where in the world?</h1>

        <div className="flex items-center space-x-2 group">
          <MoonIconOutline className="w-4 h-4 group-hover:cursor-pointer" />
          <button className="text-[12px] font-semibold group-hover:cursor-pointer">
            Dark Mode
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
