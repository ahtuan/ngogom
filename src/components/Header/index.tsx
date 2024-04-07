import React from "react";
import NavBar from "@/components/Header/NavBar";
import Link from "next/link";
import { Logo } from "@/components";

const Index = () => {
  return (
    <nav className=" container mx-auto flex justify-between p-4 ">
      <div className="relative w-1/3">
        <div className="absolute">
          <Logo />
        </div>
      </div>
      <NavBar />
    </nav>
  );
};

export default Index;
