import Link from "next/link";
import React from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="border-b-2 border-white flexBetween max-container padding-container relative z-30 py-10 bg-black">
      <Link href="/">
        <Image
          src="/logo.svg"
          width={60}
          height={60}
          alt=""
          className="fill-white "
        />
      </Link>
      <ul className="hidden gap-12 lg:flex text-center">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className="regular-16 text-white flexCenter cursor-pointer transition-all hover:text-bold"
          >
            {link.label}

            {/* Doesnt work CHECK HERE IMAGE ANIMATION NEEDED
              <span className="mr-2">
                {" "}
                <Image
                  src={"/menu-line.svg"}
                  width={39}
                  height={50}
                  alt={""}
                  className={"fill-white"}
                />
              </span>
              */}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Link href="https://twitter.com/mbenft" className="mr-6 ">
          <Image src="/twitter.svg" width={30} height={30} alt="" />
        </Link>
        <Link href="https://twitter.com/mbenft" className="mr-6 ">
          <Image src="/discord.svg" width={30} height={30} alt="" />
        </Link>
        <Link href="#">
          {/* <button className="regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:text-bold">
            ???
            </button> */}
          <Button type="button" title="Connect Wallet" variant="btn_dark" />
        </Link>
      </div>
      <Image
        src="/hamburger.svg"
        width={50}
        height={50}
        alt=""
        className="inline-block cursor-pointer lg:hidden "
      />
    </nav>
  );
};

export default Navbar;
