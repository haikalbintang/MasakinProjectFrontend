"use client"

import FormButton from "@/components/FormButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Home = () => {

  const router = useRouter();

  return (
    <>
      <div className="relative h-screen flex flex-col items-center gap-2">
        <div className="absolute inset-0 bg-[url('/assets/images/Splash-bg.png')] bg-no-repeat bg-cover">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <div className="flex justify-center items-center pt-[98px] relative z-10">
          <Image
            src="/assets/images/Splash-title.png"
            alt="Splash-bg"
            width={226.69}
            height={168.47}
          />
        </div>

        <div className="bg-[#9F1036] pt-[4px] px-[20px] pb-[4px] rounded-[20px] w-fit relative z-10">
          <p className=" text-[14px] text-white font-[500] flex justify-center items-center">
            Rasa yang dicari, temukan di Masakin
          </p>
        </div>

        <div className="mt-[275px] relative z-10">
          <div className="flex flex-col justify-center items-center text-white">
            <h1 className="text-[33px] font-[700]">Start Cooking!</h1>
            <h6 className="text-[19px] font-[500]">Explore curated recipes</h6>
            <h6 className="text-[19px] font-[500]">from all over the world!</h6>
          </div>
        </div>

        <div className="mt-[20px] z-10">
          <FormButton text="Sign In" onClick={() => router.push('/login')} />
        </div>
      </div>
    </>
  );
};

export default Home;
