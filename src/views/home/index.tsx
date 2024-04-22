import React from "react";
import Image from "next/image";
import Greet from "@/views/home/components/Greet";
import OutstandingProducts from "@/views/home/components/OutstandingProducts";
import Logo from "/public/images/logo.svg";

const Index = () => {
  return (
    <>
      <div className="h-[50vh] sm:h-[50vh] flex flex-col-reverse sm:flex-row items-center justify-center relative gap-16">
        <div className="words-wrapper w-full sm:w-[unset]">
          <Greet />
          <p className="text-lg sm:text-2xl mt-16 sm:mt-20 text-center sm:text-right">
            Ở đây có gốm...
            <br /> và cả chuyện của "gốm".
          </p>
        </div>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={300}
          height={300}
          className="drop-shadow-2xl w-1/2 sm:w-full max-w-[300px]"
        />
      </div>
      <OutstandingProducts className="mb-12" />
    </>
  );
};

export default Index;
