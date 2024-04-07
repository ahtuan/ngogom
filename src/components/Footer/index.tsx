import React from "react";
import { Logo } from "@/components";

const Index = ({ className = "" }) => {
  return (
    <div className="h-64 p-4 container mx-auto flex justify-center">
      <Logo size="text-4xl" />
    </div>
  );
};

export default Index;
