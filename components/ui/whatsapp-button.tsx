"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./button";

const WhatsAppButton = () => {
  const handleClick = () => {
    // Your WhatsApp link here
    const whatsappUrl = "https://wa.link/oij5rd";
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      className="flex items-center bg-[#31AB21] text-white rounded-md hover:bg-[#3ecd2b] transition-colors duration-300"
    >
      <Image
        src={"/icons/whatsapp.svg"}
        alt="whatsapp"
        width={0}
        height={0}
        className="w-8 h-auto invert"
      />
      Message Us
    </Button>
  );
};

export default WhatsAppButton;
