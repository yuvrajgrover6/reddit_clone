import React from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
const ExpTabbar = ({ icon, label, children }: Props) => {
  const hover = "hover:bg-[#f3f5f5]";
  const [active, setActive] = React.useState(false);

  return (
    <div className="flex flex-col">
      <div
        onClick={() => setActive(!active)}
        className={`cursor-pointer flex flex-row items-center justify-between    px-5 py-2 h-10 rounded-md ${hover}`}
      >
        <div className="flex flex-row items-center justify-center gap-2">
          {icon}
          <span className="text-sm">{label}</span>
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

export default ExpTabbar;

interface Props {
  icon: React.ReactNode;
  label: string;
  index?: number;
  children?: React.ReactNode;
}
