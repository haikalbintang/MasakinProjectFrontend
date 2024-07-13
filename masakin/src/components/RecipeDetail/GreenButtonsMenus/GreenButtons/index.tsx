import { menuGreens } from "@/data/Detail/GreenButtons";

interface GreenButtonsProps {
  selectedMenu: string;
  setSelectedMenu: (menu: string) => void;
}

export default function GreenButtons({
  selectedMenu,
  setSelectedMenu,
}: GreenButtonsProps) {
  return (
    <div className="w-full flex gap-1">
      {menuGreens.map((menu) => (
        <div key={menu.menu} className="w-1/3">
          <button
            onClick={() => setSelectedMenu(menu.menu)}
            className={`${
              selectedMenu === menu.menu
                ? "bg-[#7E9F10] text-white"
                : "text-[#7E9F10] font-semibold"
            } w-full py-2 my-2 rounded-xl text-xs`}
          >
            {menu.text}
          </button>
        </div>
      ))}
    </div>
  );
}
