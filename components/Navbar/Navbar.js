import { useState, useEffect } from "react";
import { MoonIcon } from "@heroicons/react/solid";
import { MoonIcon as MoonIconOutline } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const handleRouter = () => {
    if (router.pathname === "/") {
      window.location.reload();
    }
    router.push("/");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTheme = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          className="flex space-x-2 items-center  text-[12px] font-semibold group-hover:cursor-pointer lg:text-[16px] text-[#111517] dark:text-white"
          onClick={() => setTheme("light")}
        >
          <MoonIcon className="w-4 h-4 group-hover:cursor-pointer lg:w-5 lg:h-5 text-white" />
          <span>Dark Mode</span>
        </button>
      );
    } else {
      return (
        <button
          className="flex space-x-2 items-center  text-[12px] font-semibold group-hover:cursor-pointer lg:text-[16px] text-[#111517] dark:text-white"
          onClick={() => setTheme("dark")}
        >
          <MoonIconOutline className="w-4 h-4 group-hover:cursor-pointer lg:w-5 lg:h-5 text-[#111517]" />

          <span>Dark Mode</span>
        </button>
      );
    }
  };

  return (
    <header className="bg-white shadow-md py-[30px] md:py-6 dark:bg-bgDark">
      <nav className="flex justify-between items-center px-4  md:px-20 max-w-8xl container mx-auto">
        <h1
          className="text-sm font-extrabold lg:text-2xl cursor-pointer"
          onClick={handleRouter}
        >
          Where in the world?
        </h1>

        <>{handleTheme()}</>
      </nav>
    </header>
  );
}

export default Navbar;
