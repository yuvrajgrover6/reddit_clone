import React from "react";

const Tabbar = ({ label, icon, index, onClick, activeIndex }: Props) => {
  const isActive = activeIndex === index;
  const bg = isActive ? "bg-buttonSecondary" : "bg-transparent";
  const hover = isActive ? "" : "hover:bg-[#f3f5f5]";
  return (
    <div
      onClick={onClick}
      className={`${bg} cursor-pointer flex flex-row items-center justify-between  px-5 py-2 h-10 rounded-md bg-buttonSecondary ${hover}`}
    >
      <div className="flex flex-row items-center justify-center gap-2">
        {icon}
        <span className="text-sm">{label}</span>
      </div>
    </div>
  );
};

export default Tabbar;

interface Props {
  label: string;
  icon?: React.ReactNode;
  index?: number;
  activeIndex?: number;
  onClick?: () => void;
}
