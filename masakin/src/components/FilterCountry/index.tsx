"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const FilterCountry = () => {
  const currentPath = usePathname();

  const tabs = [
    { name: "Semua", url: "/home" },
    { name: "Indonesia", url: "/indonesia" },
    { name: "Italia", url: "/italia" },
    { name: "Korea", url: "/korea" },
    { name: "China", url: "/china" },
    { name: "Thailand", url: "/thailand" },
  ];

  return (
    <>
      <div className="flex flex-row items-center h-[51px] w-full min-w-[320px] pl-[32px] mb-[15px] overflow-x-auto no-scrollbar">
        {tabs?.map((tab, index) => (
          <Link key={index} href={tab.url} className={`${currentPath === tab.url ? "text-white bg-[#7E9F10]" : "text-[#5E7809]"} w-fit h-[31px] py-[7px] px-[20px] text-[11px] font-[600] rounded-[10px]`}>
            {tab.name}
          </Link>
        ))}
      </div>
    </>
  );
}

export default FilterCountry;