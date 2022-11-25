import React from "react";

export const Link = ({ img, title, desc, link, shareUrl }) => {
  return (
    <a
      href={link}
      className="flex items-center row-auto p-2 space-x-2 bg-white rounded-full "
    >
      <div className="flex justify-center p-2 w-9 h-9 items-center align-middle rounded-full fill-white bg-[#006288]">
        {img}
      </div>
      <div>
        <h6 className="font-semibold">{title}</h6>
        <p>{desc}</p>
      </div>
    </a>
  );
};
