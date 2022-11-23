import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";

export const Social = ({ icon, link }) => {
  return <a href={link}>{icon}</a>;
};
