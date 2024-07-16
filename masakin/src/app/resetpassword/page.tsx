"use client";

import InputForm from "@/components/InputForm";
import FormButton from "@/components/FormButton";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ResetPasswordPage = () => {
  const [resetData, setResetData] = useState({
    email: "",
    newPassword: "",
  });

  const router = useRouter();
  const baseUrl = "https://masakinprojectbe.vercel.app";

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/user/resetpassword`, {
        email: resetData.email,
        newPassword: resetData.newPassword,
      });
      console.log("response", response.data);
      if (response.data.success) {
        router.push("/login");
      } else {
        console.error("Error: ", response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex flex-col mt-[97px] ml-[] justify-center items-center">
        <div className="">
          <h1 className="text-[33px] font-[700]">Reset Password</h1>
          <h6 className="text-[19px] font-[500]">Enter your email and new password to reset your password</h6>
        </div>
      </div>
      <div>
        <form onSubmit={handleResetPassword}>
          <div className="flex flex-col gap-6 items-center mt-[50px]">
            <InputForm
              id="email"
              name="email"
              label="Email"
              type="email"
              placeholder="Email"
              value={resetData.email}
              onChange={(e) => setResetData({ ...resetData, email: e.target.value })}
            />
            <InputForm
              id="newPassword"
              name="newPassword"
              label="New Password"
              type="password"
              placeholder="New Password"
              value={resetData.newPassword}
              onChange={(e) => setResetData({ ...resetData, newPassword: e.target.value })}
            />
            <div className="flex flex-col gap-6 items-center">
              <FormButton text="Reset Password" type="submit" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResetPasswordPage;