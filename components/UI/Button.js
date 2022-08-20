import React from "react";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
function Button() {
  return (
    <button className="py-[6px] px-6  font-light text-sm border  shadow  shadow-[#979797] rounded-sm leading-5 hover:shadow-md">
      <span className="flex items-center">
        <ArrowNarrowLeftIcon className="w-4 h-4 mr-2" />
        <span>Back</span>
      </span>
    </button>
  );
}

export default Button;
