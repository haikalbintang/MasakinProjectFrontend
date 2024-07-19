import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function bookmarkPage() {
  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <Image
          src="/logoMasakin.svg"
          width={106}
          height={79}
          style={{
            width: "106px",
            height: "auto",
            marginBottom: "20px"
          }}
          alt="" />
        <h1 className='text-[33px] font-[700] text-[#DF1B4F]'>Coming Soon</h1>
      </main>
      <Navbar></Navbar>
    </>
  );
}