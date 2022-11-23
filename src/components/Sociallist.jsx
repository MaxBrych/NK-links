import React from "react";
import { AiFillAccountBook } from "react-icons/ai";

import { Social } from "./Social";

const Sociallist = () => {
  const links = [
    {
      icon: <AiFillAccountBook />,
      link: "https://react-icons.github.io/react-icons/",
    },
    {
      icon: <AiFillAccountBook />,
      link: "https://react-icons.github.io/react-icons/",
    },
    {
      icon: <AiFillAccountBook />,
      link: "https://react-icons.github.io/react-icons/",
    },
    {
      icon: <AiFillAccountBook />,
      link: "https://react-icons.github.io/react-icons/",
    },
  ];
  return (
    <div className="flex justify-between row-auto ">
      {links.map((obj) => (
        <Social icon={obj.icon} link={obj.link} />
      ))}
    </div>
  );
};

export default Sociallist;
