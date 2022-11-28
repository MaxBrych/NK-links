import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { HiGlobeAlt } from "react-icons/hi";

import { Social } from "./Social";

const Sociallist = () => {
  const links = [
    {
      icon: <BsFacebook color="#006288" size={"1.5rem"} />,
      link: "https://www.facebook.com/Nordkurier/",
    },
    {
      icon: <AiFillInstagram color="#006288" size={"1.5rem"} />,
      link: "https://www.instagram.com/nordkurier/",
    },
    {
      icon: <AiOutlineTwitter color="#006288" size={"1.5rem"} />,
      link: "https://twitter.com/nordkurier",
    },
    {
      icon: <HiGlobeAlt color="#006288" size={"1.5rem"} />,
      link: "https://www.nordkurier.de/",
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
