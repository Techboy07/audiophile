import React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

//mui
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <div className="grid gap-10 text-white padding-h bg-dark lg:grid-cols-2">
      <div className="flex flex-col items-center space-y-10 md:block">
        <div className="h-[4px] w-28 bg-primary"></div>
        <Link href="/" className="inline-block">
          <Image
            width={500}
            height={500}
            src="/assets/shared/desktop/logo.svg"
            alt="footer image"
          />
        </Link>
      </div>

      <div className="lg:pt-10 lg:flex lg:justify-end">
        <ul className="flex flex-col items-center justify-center space-y-5 text-sm tracking-widest uppercase md:justify-start md:flex-row md:space-x-5 md:space-y-0">
          <li>
            <Link href="/" className="uppercase hover:text-primary">
              home
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
      </div>

      <div>
        <Typography className="text-sm leading-relaxed tracking-wider text-center font-extralight md:text-left">
          Audiophile is an all in one stop to fulfill your audio needs. We &apos
          re a small team of music lovers and sound specialists who are devoted
          to helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </Typography>
      </div>

      <div className="hidden lg:flex lg:justify-end lg:items-end lg:space-x-3">
        <IoLogoFacebook className="cursor-pointer w-7 h-7 hover:text-primary" />
        <IoLogoTwitter className="cursor-pointer w-7 h-7 hover:text-primary" />
        <IoLogoInstagram className="cursor-pointer w-7 h-7 hover:text-primary" />
      </div>

      <div className="pb-10 space-y-10 md:space-y-0 md:flex lg:block">
        <div className="flex-grow">
          <Typography className="text-sm tracking-wider text-center font-extralight md:text-left">
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </Typography>
        </div>

        <div className="flex justify-center space-x-3 md:justify-end lg:hidden">
          <IoLogoFacebook className="w-7 h-7" />
          <IoLogoTwitter className="w-7 h-7" />
          <IoLogoInstagram className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
