import React from "react";
import Image from "next/image";
import Greet from "@/views/home/components/Greet";
import OutstandingProducts from "@/views/home/components/OutstandingProducts";

const Index = () => {
  return (
    <>
      <div className="h-[50vh] flex items-center justify-center relative gap-16">
        <div className="text-right words-wrapper">
          <Greet />
          <p className="text-2xl mt-20">
            Ở đây có gốm...
            <br /> và cả chuyện của "gốm".
          </p>
        </div>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={300}
          height={300}
          className="drop-shadow-2xl"
        />
      </div>
      <OutstandingProducts />
    </>
  );
};

export default Index;
