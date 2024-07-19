"use client";

import { Formik, Field, ErrorMessage } from "formik";
import InputForm from "@/components/InputForm";
import FormButton from "@/components/FormButton";
import RedTitleForm from "@/components/RedTitleForm";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { setupInterceptors } from "@/utils/AxiosInterceptor";

const Register = () => {
  const initialValues = {
    username: "",
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    phone: Yup.string()
      .matches(/^\+?[0-9]+$/, "Phone number is not valid")
      .required("Phone is required"),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email address"
      )
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must contain at least 8 characters")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/,
        "Password must contain at least one letter, one number, and one special character"
      )
      .required("Password is required"),
  });

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setupInterceptors({ setShowPopup, setPopupMessage }, router);
  }, [router]);

  const handleRegister = async (values: typeof initialValues) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://masakinprojectbe.vercel.app/user/register",
        values
      );
      if (response.status === 201) {
        router.push("/login");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error("Registration failed:", error.response.data);
      } else {
        console.error("An unexpected error occurred:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="pb-[100px]">
      <div className="flex flex-col">
        <div className="flex flex-col mt-[97px] ml-[] justify-center items-center">
          <div>
            <h1 className="text-[33px] font-[700]">Welcome,</h1>
            <h6 className="text-[19px] font-[500]">Are you ready to cook?</h6>
          </div>
        </div>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >
        {({ values, handleChange, handleSubmit }) => {
          return (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center gap-6 mt-[50px]"
            >
              <div className="flex flex-col gap-6">
                <div>
                  <Field
                    component={InputForm}
                    id="username"
                    name="username"
                    label="Username"
                    type="text"
                    placeholder="Username"
                    value={values.username}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500 text-[14px] font-[500] h-[20px] w-full"
                  />
                </div>
                <div>
                  <Field
                    component={InputForm}
                    id="firstname"
                    name="firstname"
                    label="First Name"
                    type="text"
                    placeholder="First Name"
                    value={values.firstname}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="firstname"
                    component="div"
                    className="text-red-500 text-[14px] font-[500] h-[20px] w-full"
                  />
                </div>
                <div>
                  <Field
                    component={InputForm}
                    id="lastname"
                    name="lastname"
                    label="Last Name"
                    type="text"
                    placeholder="Last Name"
                    value={values.lastname}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="lastname"
                    component="div"
                    className="text-red-500 text-[14px] font-[500] h-[20px] w-full"
                  />
                </div>
                <div>
                  <Field
                    component={InputForm}
                    id="phone"
                    name="phone"
                    label="Phone"
                    type="text"
                    placeholder="Phone"
                    value={values.phone}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-[14px] font-[500] h-[20px] w-full"
                  />
                </div>
                <div>
                  <Field
                    component={InputForm}
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-[14px] font-[500] h-[20px] w-full"
                  />
                </div>
                <div>
                  <Field
                    component={InputForm}
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-[14px] font-[500] h-[20px] w-full"
                  />
                </div>
              </div>

              <div>
                <FormButton text={isLoading ? "Loading..." : "Register"} type="submit" disabled={isLoading} />
              </div>
            </form>
          );
        }}
      </Formik>

      <div className="flex justify-center items-center gap-2 mt-[20px]">
        <p className="text-[14px] font-[500]">Already have an account?</p>
        <Link href="/login">
          <RedTitleForm title="Login" />
        </Link>
      </div>
    </main>
  );
};

export default Register;