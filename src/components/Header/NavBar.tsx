import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <ul className="flex gap-10 items-center">
      <li>
        <Link href="/">Trang Chủ</Link>
      </li>
      <li>
        <Link href="/">Sản phẩm</Link>
      </li>
      <li>
        <Link href="/about">{process.env.APP_NAME}?</Link>
      </li>
      <li>
        <Link href="/blog">Ngỏ</Link>
      </li>
    </ul>
  );
};

export default NavBar;
