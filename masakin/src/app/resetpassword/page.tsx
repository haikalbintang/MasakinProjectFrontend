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

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

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
        setPopupMessage("Password reset successful. Redirecting to login...");
        setShowPopup(true);
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        setPopupMessage(response.data.message);
        setShowPopup(true);
      }
    } catch (error) {
      setPopupMessage("An error occurred. Please try again.");
      setShowPopup(true);
      console.error(error);
    }
  };

  return (
    <main>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl font-bold">Notification</h2>
            <div className="flex flex-col gap-4">
              <p>{popupMessage}</p>
              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col mt-[97px] ml-[] justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-[33px] font-[700]">Reset Password</h1>
          <div className="flex flex-col">
            <h6 className="text-[15px] font-[500]">Enter your email and new password</h6>
            <h6 className="text-[15px] font-[500]">to reset your password</h6>
          </div>
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
    </main>
  );
};

export default ResetPasswordPage;