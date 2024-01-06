import React from "react";
import Spinner from "./Spinner";

const PrimaryButton = ({
  children,
  onClick,
  className,
  disabled,
  type = "button",
  isLoading,
  isSecondary,
  ...props
}: ButtonProps) => {
  const buttonColor = isSecondary ? "bg-buttonSecondary" : "bg-buttonPrimary";
  const textColor = isSecondary ? "text-black" : "text-white";
  const hoverColor = isSecondary ? "hover:bg-zinc-200" : "hover:bg-orange-700";
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${buttonColor} font-custom focus:outline-none ${textColor} ${hoverColor} ${className} disabled:opacity-50 disabled:cursor-not-allowed
        focus:ring-4 focus:ring-orange-700 font-bold  text-sm px-3 py-2  dark:focus:ring-orange-900 rounded-full`}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default PrimaryButton;

// prop interface
interface ButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  isSecondary?: boolean;
  isLoading?: boolean;
}
