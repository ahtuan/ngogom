"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PATH } from "@/contants/common";

type ItemType = {
  children: React.ReactNode;
  href: string;
  active?: boolean;
};
const Item: React.FC<ItemType> = ({ children, href, active }) => {
  return (
    <li className="hover:text-orange hover:underline hover:cursor-pointer hover:underline-offset-8 ">
      <Link
        href={href}
        className={active ? "font-bold underline underline-offset-8" : ""}
      >
        {children}
      </Link>
    </li>
  );
};

const NavBar = () => {
  const pathname = usePathname();
  return (
    <ul className="flex gap-10 items-center">
      <Item href={PATH.Home} active={pathname === PATH.Home}>
        Trang Chủ
      </Item>
      <Item href={PATH.About} active={pathname === PATH.About}>
        {process.env.NEXT_PUBLIC_APP_NAME}?
      </Item>
      <Item href={PATH.Blog} active={pathname === PATH.Blog}>
        Chuyện &quot;Gốm&quot;
      </Item>
    </ul>
  );
};

export default NavBar;
