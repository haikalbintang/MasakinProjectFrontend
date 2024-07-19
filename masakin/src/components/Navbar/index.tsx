"use client"
import React from 'react';
import Link from 'next/link';
import NavHome from "../../../public/icon_NavHome";
import NavBookmark from "../../../public/icon_NavBookmark";
import NavMyRecipe from "../../../public/icon_NavMyRecipe";
import NavProfile from "../../../public/icon_NavProfile";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const currentPath = usePathname();

  const tabs = [
    { icon: <NavHome />, href: "/home" },
    { icon: <NavBookmark />, href: "/bookmark" },
    { icon: <NavMyRecipe />, href: "/myrecipe" },
    { icon: <NavProfile />, href: "/profile" },
  ];

  return (
    <>
      <nav className="fixed bottom-0 bg-white flex flex-row items-center h-[81px] w-[392px] min-w-[320px] px-[49px] justify-between border-t-[1px] grey-100 z-10">
        {tabs?.map((tab, index) => (
          <Link key={index} href={tab.href} className={`${currentPath === tab.href ? "stroke-[#129575]" : "stroke-[#B8BAB4]"} w-[24px] h-[24px] flex items-center`}>
            {tab.icon}
          </Link>
        ))}
      </nav >
    </>
  );
}

export default Navbar;