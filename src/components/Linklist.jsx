import React from "react";
import { Link } from "./Link";
import { AiOutlineTwitter } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { HiNewspaper } from "react-icons/hi";
import { MdBusinessCenter } from "react-icons/md";

const Linklist = () => {
  const data = [
    {
      title: "Zeitung",
      img: <HiNewspaper color="white" />,
      desc: "Zeitung",
      link: "https://www.nordkurier.de/",
      shareURL:
        "https://medium.muz.li/weekly-design-inspiration-376-3b1ae9acef41",
    },
    {
      title: "Logistik",
      img: <TbTruckDelivery color="white" />,
      desc: "Zeitung",
      link: "https://www.nordkurier.de/",
    },
    {
      title: "Business",
      img: <MdBusinessCenter color="white" />,
      desc: "Zeitung",
      link: "https://www.nordkurier.de/",
    },
  ];
  return (
    <div className="space-y-4">
      {data.map((obj) => (
        <Link title={obj.title} alt={obj.alt} img={obj.img} link={obj.link} />
      ))}
    </div>
  );
};

export default Linklist;
