"use client";

import React from "react";

const Greet = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setShow((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  });
  return (
    <div className="mt-[-1rem] font-bold text-4xl lg:text-5xl tracking-wider drop-shadow-lg  text-primary relative rotate-title">
      <p
        className={`${
          show ? "is-visible" : "is-hidden"
        } absolute right-[35%] sm:right-0`}
      >
        Xin chào!
      </p>
      <p
        className={`${
          !show ? "is-visible" : "is-hidden"
        } absolute right-[35%] sm:right-0`}
      >
        こんにちは!
      </p>
    </div>
  );
};

export default Greet;
