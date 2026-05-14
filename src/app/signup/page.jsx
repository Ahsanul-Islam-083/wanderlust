"use client"
import { useState } from "react";
import { Button, Card, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="my-10 flex flex-col items-center justify-center px-4">

      <div className="mb-6 text-center">
        <h1 className="text-3xl font-normal tracking-tight text-gray-800">Create Account</h1>
        <p className="text-sm text-gray-400 mt-1">Start your adventure with Wanderlust</p>
      </div>

      <Card className="w-full max-w-md rounded-xl shadow-sm border border-gray-200 bg-white p-8">
        <Form className="flex flex-col gap-5">

          <TextField
            isRequired
            name="fullName"
            className="flex flex-col gap-1"
            validate={(value) => {
              if (!value.trim()) return "Full name is required";
              return null;
            }}
          >
            <Label className="text-sm font-semibold text-gray-700">Full Name</Label>
            <div className="flex items-center border border-gray-200 rounded-lg px-3 gap-2">
              <FiUser className="text-gray-400 shrink-0" size={15} />
              <Input
                placeholder="Enter your name"
                className="flex-1 py-2 text-sm text-gray-700 placeholder:text-gray-400 outline-none border-none bg-transparent"
              />
            </div>
            <FieldError className="text-xs text-red-500 mt-0.5" />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            className="flex flex-col gap-1"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
                return "Please enter a valid email address";
              return null;
            }}
          >
            <Label className="text-sm font-semibold text-gray-700">Email Address</Label>
            <div className="flex items-center border border-gray-200 rounded-lg px-3 gap-2">
              <FiMail className="text-gray-400 shrink-0" size={15} />
              <Input
                placeholder="Enter your email"
                className="flex-1 py-2 text-sm text-gray-700 placeholder:text-gray-400 outline-none border-none bg-transparent"
              />
            </div>
            <FieldError className="text-xs text-red-500 mt-0.5" />
          </TextField>

          <TextField
            isRequired
            name="password"
            type={showPassword ? "text" : "password"}
            className="flex flex-col gap-1"
            validate={(value) => {
              if (value.length < 8) return "Password must be at least 8 characters";
              if (!/[A-Z]/.test(value)) return "Must contain at least one uppercase letter";
              if (!/[0-9]/.test(value)) return "Must contain at least one number";
              return null;
            }}
          >
            <Label className="text-sm font-semibold text-gray-700">Password</Label>
            <div className="flex items-center border border-gray-200 rounded-lg px-3 gap-2">
              <FiLock className="text-gray-400 shrink-0" size={15} />
              <Input
                placeholder="Create a password"
                className="flex-1 py-2 text-sm text-gray-700 placeholder:text-gray-400 outline-none border-none bg-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-gray-600 shrink-0"
              >
                {showPassword ? <FiEyeOff size={15} /> : <FiEye size={15} />}
              </button>
            </div>
            <FieldError className="text-xs text-red-500 mt-0.5" />
          </TextField>

          <TextField
            isRequired
            name="confirmPassword"
            type={showConfirm ? "text" : "password"}
            className="flex flex-col gap-1"
            validate={(value) => {
              const pw = document.querySelector("input[name='password']")?.value;
              if (value !== pw) return "Passwords do not match";
              return null;
            }}
          >
            <Label className="text-sm font-semibold text-gray-700">Confirm Password</Label>
            <div className="flex items-center border border-gray-200 rounded-lg px-3 gap-2">
              <FiLock className="text-gray-400 shrink-0" size={15} />
              <Input
                placeholder="Confirm your password"
                className="flex-1 py-2 text-sm text-gray-700 placeholder:text-gray-400 outline-none border-none bg-transparent"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="text-gray-400 hover:text-gray-600 shrink-0"
              >
                {showConfirm ? <FiEyeOff size={15} /> : <FiEye size={15} />}
              </button>
            </div>
            <FieldError className="text-xs text-red-500 mt-0.5" />
          </TextField>

          <Button
            type="submit"
            className="w-full bg-[#2AACBB] hover:bg-[#1D9E75] text-white font-semibold py-3 rounded-lg text-sm mt-1"
          >
            Create Account
          </Button>

          <div className="flex items-center gap-3 my-1">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">Or sign up with</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <Button
            type="button"
            variant="bordered"
            className="w-full border border-gray-200 rounded-lg py-3 text-sm text-gray-700 font-medium"
          >
            <FcGoogle size={18} />
            Sign Up With Google
          </Button>

          <p className="text-center text-sm text-gray-400 mt-1">
            Already have an account?{" "}
            <span className="text-[#2AACBB] font-semibold cursor-pointer hover:underline">
              Sign In
            </span>
          </p>

        </Form>
      </Card>
    </div>
  );
};

export default SignUpPage;