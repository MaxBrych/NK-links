import React from "react";

export const Link = ({ img, title, desc, link }) => {
  return (
    <a
      href={link}
      className="flex items-center row-auto p-2 space-x-2 bg-white rounded-full "
    >
      <div className="flex justify-center p-2 align-middle rounded-full fill-white bg-slate-600">
        {img}
      </div>
      <div>
        <h6>{title}</h6>
        <p>{desc}</p>
      </div>
    </a>
  );
};
