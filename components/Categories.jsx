import React from "react";
import { Fade } from "react-reveal";

import Image from "next/image";

//mui
import { Typography } from "@mui/material";

//components
import { TertiaryButton } from "./Buttons";

const categories = [
  {
    src: "/assets/shared/desktop/image-headphones.png",
    title: "headphones",
    link: "/headphones",
  },
  {
    src: "/assets/shared/desktop/image-speakers.png",
    title: "speakers",
    link: "/speakers",
  },
  {
    src: "/assets/shared/desktop/image-earphones.png",
    title: "earphones",
    link: "/earphones",
  },
];

const Categories = () => {
  return (
    <Fade left cascade distance="100px">
      <div className="grid gap-20 py-40 md:gap-10 padding-h md:grid-cols-3">
        {categories.map(({ src, title, link }, idx) => {
          return (
            <div className="relative flex flex-col items-center" key={idx}>
              <Image
                width={500}
                height={500}
                alt="category image"
                src={src}
                className={`absolute w-40  ${
                  title === "earphones" ? "-top-10" : "-top-12"
                }`}
              />

              <div className="flex flex-col items-center justify-center w-full px-10 pt-24 pb-10 rounded-lg bg-grey">
                <Typography className="font-bold tracking-wider uppercase">
                  {title}
                </Typography>

                <TertiaryButton link={link} />
              </div>
            </div>
          );
        })}
      </div>
    </Fade>
  );
};

export default Categories;
