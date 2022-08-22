import React from "react";
import { MoonIcon } from "@heroicons/react/solid";
import { MoonIcon as MoonIconOutline } from "@heroicons/react/outline";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const handleRouter = () => {
    // if already on page then reload page
    if (router.pathname === "/") {
      window.location.reload();
    }
    router.push("/");
  };
  return (
    <header className="bg-white shadow-sm py-[30px] md:py-6 ">
      <nav className="flex justify-between items-center px-4  md:px-20 max-w-8xl container mx-auto">
        <h1
          className="text-sm font-extrabold lg:text-2xl cursor-pointer"
          onClick={handleRouter}
        >
          Where in the world?
        </h1>

        <div className="flex items-center space-x-2 group">
          <MoonIconOutline className="w-4 h-4 group-hover:cursor-pointer lg:w-5 lg:h-5" />
          <button className="text-[12px] font-semibold group-hover:cursor-pointer lg:text-[16px]">
            Dark Mode
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
