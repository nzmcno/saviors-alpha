import React, { FC, SVGProps } from "react";

interface LoginIconProps extends SVGProps<SVGSVGElement> {
  fill?: string;
}

const LoginIcon: FC<LoginIconProps> = ({ fill = "#6C7281", ...rest }) => {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M13 4H4v16h9V4zm-1.5 8l-4 4 1.5 1.5 5.5-5.5-5.5-5.5-1.5 1.5 4 4z"
        fill={fill}
      />
    </svg>
  );
};

export default LoginIcon;
