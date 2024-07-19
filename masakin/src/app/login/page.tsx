"use client";

import InputForm from "@/components/InputForm";
import FormButton from "@/components/FormButton";
import RedTitleForm from "@/components/RedTitleForm";
import SocialIcon from "@/components/SocialIcon";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const baseUrl = "https://masakinprojectbe.vercel.app";

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    }
  };

  return (
    <main>
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
              <FormButton text="Login" type="submit" />
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
