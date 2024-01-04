import React from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
const HeadingBar = ({ label, children }: Props) => {
  const hover = "hover:bg-[#f3f5f5]";
  const [active, setActive] = React.useState(true);

  return (
    <div className="flex flex-col">
      <div
        onClick={() => setActive(!active)}
        className={`cursor-pointer flex flex-row items-center justify-between  my-3  px-5 py-2 h-10 rounded-md ${hover}`}
      >
        <div className="flex flex-row items-center justify-center">
          <span className=" text-sm text-[#576f76]">{label}</span>
        </div>
        <div
          className={`transition-transform transform duration-500 ${
            active ? "rotate-180" : ""
          }`}
        >
          {<ExpandMore />}
        </div>
      </div>
      <div
        className={`transition-all duration-500 ${
          active ? "opacity-100" : "opacity-0"
        }`}
      >
        {active && <div className="w-full">{children}</div>}
      </div>
    </div>
  );
};

export default HeadingBar;

interface Props {
  label: string;
  index?: number;
  children?: React.ReactNode;
}
