import React from "react";
import { Link } from "./Link";
import { AiOutlineTwitter } from "react-icons/ai";

const Linklist = () => {
  const data = [
    {
      title: "Zeitung",
      img: <AiOutlineTwitter />,
      desc: "Zeitung",
      link: "https://www.nordkurier.de/",
    },
    {
      title: "Logistik",
      img: <AiOutlineTwitter />,
      desc: "Zeitung",
      link: "https://www.nordkurier.de/",
    },
    {
      title: "Business",
      img: <AiOutlineTwitter />,
      desc: "Zeitung",
      link: "https://www.nordkurier.de/",
    },
  ];
  return (
    <div>
      {data.map((obj) => (
        <Link title={obj.title} alt={obj.alt} img={obj.img} link={obj.link} />
      ))}
    </div>
  );
};

export default Linklist;
