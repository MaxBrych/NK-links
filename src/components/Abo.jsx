import React from "react";
import { AiFillBell } from "react-icons/ai";

export const Abo = () => {
  return (
    <div className="flex items-center justify-between w-full row-auto p-2 overflow-hidden bg-white rounded-full ">
      <div className="flex items-center row-auto ">
        <AiFillBell color="#006288" className="p-1 mr-1 rounded-full w-9 h-9" />
        <div className="">
          <h6 className="text-base font-semibold leading-4 tracking-tight">
            Nordkurier Abo
          </h6>
          <p className="text-xs">Aboniere jetzt online!</p>
        </div>
      </div>
      <a href="https://www.nordkurier.de/abo" target="_blank" rel="noreferrer">
        <button className="pt-2 pb-2 pl-3 pr-3 ml-3 text-sm text-white bg-black rounded-full">
          Abonieren
        </button>
      </a>
    </div>
  );
};
