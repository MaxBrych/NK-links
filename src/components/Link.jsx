import React from "react";

export const Link = ({ img, title, desc, link }) => {
  return (
    <a href={link} className="flex row-auto">
      {img}
      <div>
        <h6>{title}</h6>
        <p>{desc}</p>
      </div>
    </a>
  );
};
