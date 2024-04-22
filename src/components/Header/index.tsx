import React from "react";
import NavBar from "@/components/Header/NavBar";
import Link from "next/link";
import { Logo } from "@/components";

const Index = () => {
  return (
    <nav className="p-4 sticky top-0 bg-beige/[0.9] z-10 mb-12">
      <div className="container mx-auto flex justify-between ">
        <div className="relative w-1/3">
          <div className="absolute">
            <Logo />
          </div>
        </div>
        <NavBar />
      </div>
    </nav>
  );
};

export default Index;
