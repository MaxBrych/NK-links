import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";

export const Social = ({ icon, link }) => {
  return (
    <a
      className="flex items-center content-center justify-center p-2 bg-white rounded-full w-9 h-9 fill-slate-500"
      href={link}
    >
      {icon}
    </a>
  );
};
