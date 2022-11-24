import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { HiGlobeAlt } from "react-icons/hi";

import { Social } from "./Social";

const Sociallist = () => {
  const links = [
    {
      icon: <BsFacebook color="#006288" />,
      link: "https://react-icons.github.io/react-icons/",
    },
    {
      icon: <AiFillInstagram color="#006288" />,
      link: "https://react-icons.github.io/react-icons/",
    },
    {
      icon: <AiOutlineTwitter color="#006288" />,
      link: "https://react-icons.github.io/react-icons/",
    },
    {
      icon: <HiGlobeAlt color="#006288" />,
      link: "https://react-icons.github.io/react-icons/",
    },
  ];
  return (
    <div className="flex justify-between row-auto sm:w-full">
      {links.map((obj) => (
        <Social icon={obj.icon} link={obj.link} />
      ))}
    </div>
  );
};

export default Sociallist;
