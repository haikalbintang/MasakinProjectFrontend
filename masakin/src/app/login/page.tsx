"use client";

import InputForm from "@/components/InputForm";
import FormButton from "@/components/FormButton";
import RedTitleForm from "@/components/RedTitleForm";
import SocialIcon from "@/components/SocialIcon";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setupInterceptors } from "@/utils/AxiosInterceptor";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [showPopup, setShowPopup] = useState(false); // State untuk mengontrol tampilan popup
  const [popupMessage, setPopupMessage] = useState(""); // State untuk pesan popup
  const [isLoading, setIsLoading] = useState(false); // State untuk mengontrol loading

  const router = useRouter();

  const baseUrl = "https://masakinprojectbe.vercel.app";

  // Setup interceptors
  useEffect(() => {
    setupInterceptors({ setShowPopup, setPopupMessage }, router);
  }, [router]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true); // Mulai loading
    try {
      const response = await axios.post(`${baseUrl}/user/login`, {
        email: loginData.email,
        password: loginData.password,
      });
      console.log("response", response.data);
      const accessToken = response.data.access_token;
      if (accessToken) {
        localStorage.setItem("access_token", accessToken);
        router.push("/home");
      } else {
        console.error("Access token tidak ditemukan dalam respons");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); // Selesai loading
    }
  };

  return (
    <main>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl font-bold">Error</h2>
            <div className="flex flex-col gap-4">
              <p>{popupMessage}</p>
              <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => setShowPopup(false)}
              >
              Tutup
            </button>
              </div>
          </div>
        </div>
      )}
      <div className="flex flex-col mt-[97px] ml-[] justify-center items-center">
        <div className="">
          <h1 className="text-[33px] font-[700]">Welcome,</h1>
          <h6 className="text-[19px] font-[500]">Are you ready to cook?</h6>
        </div>
      </div>
      <div>
        <form onSubmit={handleLogin}>
          <div className="flex flex-col gap-6 items-center mt-[50px]">
            <InputForm
              label="Email"
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
            <div className="flex flex-col gap-4">
              <InputForm
                label="Password"
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
              <Link href="/resetpassword">
                <RedTitleForm title="Forgot password?" />
              </Link>
            </div>

            <div className="flex flex-col gap-6 items-center">
              <FormButton text={isLoading ? "Loading..." : "Login"} type="submit" disabled={isLoading} />
              <div className="flex items-center w-full">
                <hr className="flex-grow border-t border-gray-300" />
                <RedTitleForm title="Or Sign in With" />
                <hr className="flex-grow border-t border-gray-300" />
              </div>
            </div>
          </div>
        </form>

        <div className="flex justify-center items-center gap-6 mt-[20px] mb-[20px]">
          <SocialIcon src="/assets/icons/google.png" alt="Google icon" />
          <SocialIcon src="/assets/icons/facebook.png" alt="Facebook icon" />
        </div>

        <div className="flex justify-center items-center gap-2">
          <p className="text-[11px] font-[500]">Don't have an account?</p>
          <Link href="/register">
            <RedTitleForm title="Register"/>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;