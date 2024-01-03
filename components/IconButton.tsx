import React from "react";
import Spinner from "./Spinner";

const IconButton = ({
  children,
  onClick,
  className,
  disabled,
  type = "button",
  isLoading,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className="hover:bg-buttonSecondary hover:rounded-full"
      style={{ width: 40, height: 40 }}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default IconButton;
interface ButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
}
