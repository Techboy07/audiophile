import React from "react";
import { useRouter } from "next/router";
import { IoMenuOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

//components
import Cart from "./Cart";

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    // <div className=" bg-red-500">
    <div
      className={`${
        pathname === "/[category]/[id]" || pathname === "/checkout"
          ? "sticky h-16"
          : "absolute h-20"
      } top-0 z-50 w-full  text-white padding-h ${
        pathname === "/[category]/[id]" || pathname === "/checkout"
          ? "bg-dark"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center h-full space-x-10 lg:space-x-0">
        <div className="lg:hidden">
          <IoMenuOutline className="w-7 h-7" />
        </div>

        <div className="flex justify-center flex-grow md:justify-start lg:flex-none">
          <Link href="/" className="inline-block">
            <Image
              alt="nav image"
              width={500}
              height={500}
              src="/assets/shared/desktop/logo.svg"
              className="w-full"
            />
          </Link>
        </div>

        <ul className="items-center justify-center flex-grow hidden space-x-10 text-sm tracking-wider uppercase lg:flex">
          <li>
            <Link href="/" className="uppercase hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link href="/headphones" className="uppercase hover:text-primary">
              headphones
            </Link>
          </li>
          <li>
            <Link href="/speakers" className="uppercase hover:text-primary">
              speakers
            </Link>
          </li>
          <li>
            <Link href="/earphones" className="uppercase hover:text-primary">
              earphones
            </Link>
          </li>
        </ul>

        <Cart />
      </div>
      {(pathname === "/[category]" || pathname === "/") && (
        <div className="h-px bg-gray-800"></div>
      )}
    </div>
  );
};

export default Navbar;
