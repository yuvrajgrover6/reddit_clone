"use client";

import React from "react";
import IconButton from "./IconButton";
import { useEffect } from "react";
const Dropdown = ({ children, className, icon }: DropdownProps) => {
  useEffect(() => {
    const dropdown = document.getElementById("dropdown");
    const handleClickOutside = (event: any) => {
      if (dropdown && !dropdown.contains(event.target)) {
        dropdown.classList.add("hidden");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <IconButton
        children={icon}
        onClick={() => {
          console.log("clicked");
          const dropdown = document.getElementById("dropdown");
          dropdown?.classList.toggle("hidden");
        }}
      />
      <div
        id="dropdown"
        className={` ${className} z-10 hidden  bg-white divide-y divide-gray-100 absolute right-6 top-14 shadow-xl w-64`}
      >
        <ul className="py-2 text-sm " aria-labelledby="dropdownDefaultButton">
          {children.map((child, index) => (
            <li key={index}>
              <div
                className=" px-4 py-2 hover:bg-gray-100 mb-2 flex gap-3"
                onClick={child.onClick}
              >
                {child.icon}
                {child.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;

interface DropdownProps {
  children: childrenProps[];
  className?: string;
  icon?: React.ReactNode;
}

interface childrenProps {
  label: React.ReactNode;
  icon?: React.ReactNode;
  onClick: (event: React.MouseEvent) => void;
}
