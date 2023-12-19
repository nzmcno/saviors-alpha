import React from "react";
import Image from "next/image";
type ButtonProps = {
  type: "button" | "submit" | "reset";
  title: string;
  icon?: string;
  variant?: "btn_dark" | "btn_light";
};

const Button = ({ type, title, variant }: ButtonProps) => {
  return (
    <button type={type} className={`flexCenter border-2 gap-3 ${variant}`}>
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
