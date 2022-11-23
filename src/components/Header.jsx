import React from "react";
import logo from "../logo.png";

export const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={logo} className="w-16 h-16 rounded-full " alt="logo" />
      <a
        className="text-xl"
        href="https://www.nordkurier.de/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Nordkurier
      </a>
    </div>
  );
};
