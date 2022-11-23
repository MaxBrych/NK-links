import React from "react";
import { AiFillBell } from "react-icons/ai";

export const Abo = () => {
  return (
    <div className="flex items-center row-auto p-2 bg-white rounded-full">
      <AiFillBell className="p-4 rounded-full fill-white bg-slate-600" />
      <div className="">
        <h6>Nordkurier Abo</h6>
        <p className="text-sm">Aboniere jetzt online!</p>
      </div>
      <button
        className="p-2 text-white bg-black rounded-full"
        href="https://www.nordkurier.de/abo"
      >
        Abonieren
      </button>
    </div>
  );
};
