"use client"
import React from 'react'
import Link from 'next/link'
import NavHome from "../../../public/icon_NavHome"
import NavBookmark from "../../../public/icon_NavBookmark"
import NavMyRecipe from "../../../public/icon_NavMyRecipe"
import NavProfile from "../../../public/icon_NavProfile"
import { usePathname } from 'next/navigation'
import Home from "@/app/page";
import Image from "next/image";
import { useRouter } from "next/router";

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
        {/* <Link href={'/home'} >
          <Image
            width={24}
            height={24}
            style={{
              width: '24px',
              height: '24px',
            }}
            className={currentPath === "/home" ? "stroke-red-950" : "stroke-teal-50"}
            src="/icon_NavHome.svg" alt="Home"
            key="Home" />
        </Link> */}
        {tabs?.map((tab, index) => (
          <Link key={index} href={tab.href} className={`${currentPath === tab.href ? "stroke-[#129575]" : "stroke-[#B8BAB4]"} w-[24px] h-[24px] flex items-center`}>
            {tab.icon}
          </Link>
        ))}

        {/* <Image
          width={24}
          height={24}
          style={{
            width: '24px',
            height: '24px',
          }}
          src="/icon_NavBookmark.svg" alt="Bookmark"
          onClick={() => window.location.href = "/bookmark"} key="Bookmark" />
        <Image
          width={17}
          height={23.18}
          style={{
            width: '17px',
            height: '23.18px',
          }}
          src="/icon_NavMyRecipe.png" alt="My Recipe"
          onClick={() => window.location.href = "/myrecipe"} key="My Recipe" />
        <Image
          width={24}
          height={24}
          style={{
            width: '24px',
            height: '24px',
          }}
          src="/icon_NavProfile.svg" alt="Profile"
          onClick={() => window.location.href = "/profile"} key="Profile" /> */}
      </nav >
    </>
  );
}

export default Navbar;