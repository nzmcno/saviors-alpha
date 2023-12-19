import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-2">
          <div>
            <h5 className="text-xl font-bold mb-4">About</h5>
            <ul>
              <li className="mb-2">How it works</li>
              <li>Roadmap</li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-bold mb-4">Community</h5>
            <ul>
              <li className="mb-2">Twitter</li>
              <li>Discord</li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-bold mb-4">Legal</h5>
            <ul>
              <li className="mb-2">Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
