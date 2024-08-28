import Image from "next/image";
import React from "react";

export function Divider() {
  return (
    <div className="flex justify-center">
      <Image
        width={0}
        height={0}
        className="w-52 h-auto "
        src={"/icons/divider-top-hero.svg"}
        alt="dashboard"
      />
    </div>
  );
}
