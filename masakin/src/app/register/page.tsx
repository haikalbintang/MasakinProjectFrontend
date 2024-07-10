"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputForm from "@/components/InputForm";
import FormButton from "@/components/FormButton";
import RedTitleForm from "@/components/RedTitleForm";
import Link from "next/link";

const Register = () => {
  const initialValues = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email address"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character"
      ),
  });

  const handleSubmit = () => {
    console.log("Register");
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col mt-[97px] ml-[56px]">
          <div>
            <h1 className="text-[33px] font-[700]">Welcome,</h1>
            <h6 className="text-[19px] font-[500]">Are you ready to cook?</h6>
          </div>
        </div>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col justify-center items-center gap-6 mt-[50px]">
          <div className="flex flex-col gap-6">
            <InputForm label="Username" type="text" placeholder="Username" />
            <InputForm
              label="First Name"
              type="text"
              placeholder="First Name"
            />
            <InputForm label="Last Name" type="text" placeholder="Last Name" />
            <InputForm label="Email" type="email" placeholder="Email" />
            <InputForm
              label="Password"
              type="password"
              placeholder="Password"
            />
          </div>

          <div>
            <FormButton text="Register" type="submit" onClick={handleSubmit}/>
          </div>
        </Form>
      </Formik>

      <div className="flex justify-center items-center gap-2 mt-[20px]">
        <p className="text-[14px] font-[500]">Already have an account?</p>
        <Link href="/login">
          <RedTitleForm title="Login" />
        </Link>
      </div>
    </>
  );
};

export default Register;
