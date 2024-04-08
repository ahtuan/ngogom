import React from "react";
import Image from "next/image";
import Logo from "/public/images/logo.svg";
const Index = ({ className = "" }) => {
  return (
    <>
      <div className="h-64 bg-orange flex justify-center">
        <Image src={Logo} alt={"logo"} className="mx-auto" />
      </div>
      <p className="text-center text-gray-600 my-1.5">
        Created by CephasTools &copy;2024
      </p>
    </>
  );
};

export default Index;
