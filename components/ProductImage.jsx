import React, { useState } from "react";
import Lightbox from "react-awesome-lightbox";
import Image from "next/image";

//mui
import { Dialog } from "@mui/material";

const ProductImage = ({ image, gallery, idx }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div
        className="overflow-hidden transition duration-500 ease-in-out rounded-lg cursor-pointer md:last-of-type:row-start-1 md:last-of-type:col-start-2 md:last-of-type:row-span-2 hover:scale-105"
        onClick={handleClickOpen}
      >
        <Image
          width={500}
          height={500}
          alt="product image"
          src={image.mobile}
          className="w-full md:hidden"
        />
        <Image
          width={500}
          height={500}
          alt="product image"
          src={image.tablet}
          className="hidden w-full md:block lg:hidden"
        />
        <Image
          width={500}
          height={500}
          alt="product image"
          src={image.desktop}
          className="hidden w-full h-full lg:block"
        />
      </div>

      <Dialog open={open} onClose={handleClose}>
        <Lightbox
          images={gallery.map((img) => img.desktop)}
          startIndex={idx}
          onClose={handleClose}
        />
      </Dialog>
    </>
  );
};

export default ProductImage;
