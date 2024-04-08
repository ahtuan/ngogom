import React from "react";
import Link from "next/link";

const Index = ({ size = "text-4xl" }) => {
  return (
    <Link href="/" className={`${size} font-[Mali]`}>
      {process.env.NEXT_PUBLIC_APP_NAME}
    </Link>
  );
};

export default Index;
