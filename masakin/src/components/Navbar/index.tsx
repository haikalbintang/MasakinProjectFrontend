"use client"

import Home from "@/app/page";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  // const router = useRouter()
  // const handleClick = () => {

  //   router.push("/login")

  // };

  return (
    <>
      <nav className="fixed bottom-0 bg-white flex flex-row items-center h-[81px] w-[392px] min-w-[320px] px-[49px] justify-between border-t-[1px] grey-100 z-10">
        <Image
          width={24}
          height={24}
          style={{
            width: '24px',
            height: '24px',
          }}
          src="/icon_NavHome.svg" alt="Home"
          onClick={() => window.location.href = "/home"} key="Home" />
        <Image
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
          onClick={() => window.location.href = "/profile"} key="Profile" />
      </nav>
    </>
  );
}

export default Navbar