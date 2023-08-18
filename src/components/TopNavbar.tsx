import * as React from "react";

interface TopNavbarProps {
  // Add any props you need for the top navigation bar
}

const TopNavbar: React.FC<TopNavbarProps> = (props) => {
  return (
    <div className="bg-topNavbar-background py-2 px-4 flex justify-between items-center">
      {/* Add your top navbar content here */}
      <div className="text-topNavbar-text font-semibold">Logo</div>
      <nav className="space-x-4">
        <a
          href="#"
          className="text-topNavbar-text hover:text-topNavbar-hoverText"
        >
          Login
        </a>
        {/* Add more navigation links */}
      </nav>
    </div>
  );
};

export default TopNavbar;
