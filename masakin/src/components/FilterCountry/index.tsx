"use client";
import React, { useState } from "react";

interface FilterProps {
  setFilter: (filter: string) => void;
}

const FilterCountry: React.FC<FilterProps> = ({ setFilter }) => {
  const tabs = [
    { name: "Semua", path: "" },
    { name: "Indonesia", path: "indonesia" },
    { name: "Italia", path: "italia" },
    { name: "Korea", path: "korea" },
    { name: "China", path: "china" },
    { name: "Thailand", path: "thailand" },
  ];

  const [activeTab, setActiveTab] = useState("");

  const fetchData = async (country: string) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        setFilter(country);
        setActiveTab(country);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleFilter = (country: string) => {
    fetchData(country);
  };

  return (
    <>
      <div className="flex flex-row items-center h-[51px] w-full min-w-[320px] pl-[32px] mb-[15px] overflow-x-auto no-scrollbar">
        {tabs?.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleFilter(tab.path)}
            className={`${
              activeTab === tab.path
                ? "text-white bg-[#7E9F10]"
                : "text-[#5E7809]"
            } w-fit h-[31px] py-[7px] px-[20px] text-[11px] font-[600] rounded-[10px]`}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default FilterCountry;
