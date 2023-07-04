import React from "react";
import { socialData } from "../data";

const Socials = () => {
  return (
    <div className="flex gap-x-[10px]">
      {socialData.map((item, index) => {
        return (
          <a
            className="border border-white/20 rounded-full w-[35px] h-[35px] flex justify-center items-center text-sm hover:text-accent transition-all"
            href={item.href}
            key={index}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
