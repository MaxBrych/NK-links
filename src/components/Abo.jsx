import React from "react";
import { AiFillBell } from "react-icons/ai";

export const Abo = () => {
  return (
    <div className="flex items-center row-auto">
      <AiFillBell />
      <div className="">
        <h6>Nordkurier Abo</h6>
        <p>Aboniere jetzt online!</p>
      </div>
      <button href="https://www.nordkurier.de/abo">Abonieren</button>
    </div>
  );
};
