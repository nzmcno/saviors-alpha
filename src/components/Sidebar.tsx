import * as React from "react";
type Props = {};
const Sidebar: React.FC<Props> = () => {
  return (
    <div className="h-screen px-4 pt-4 bg-light flex justify-between flex-col w-80 ">
      <ul className="space-y-2">
        <li className="hover:bg-gray-700">Home</li>
        <li className="hover:bg-gray-700">About</li>
        <li className="hover:bg-gray-700">Services</li>
        {/* Add more navigation items */}
      </ul>
    </div>
  );
};
export default Sidebar;
