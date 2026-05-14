"use client"
import { useState } from "react";
import { Button, Card, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        const { email, password, name, image, } = user;

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            name,
            image,
        });
        // console.log(error);

        if (data) {
            redirect("/")
        } else {
            toast.error(error.message)
        }

    };

    const handleGoogleSignin = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    }


    const inputClass = "w-full pl-9 pr-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 border border-gray-200 rounded-lg outline-none bg-white focus:border-[#2AACBB] transition-colors";

    return (
        <div className="my-10 flex flex-col items-center justify-center px-4">

            <div className="mb-6 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-gray-800">Welcome Back</h1>
                <p className="text-sm text-gray-400 mt-1">Resume your adventure with Wanderlust</p>
            </div>

            <Card className="w-full max-w-md rounded-xl shadow-sm border border-gray-200 bg-white p-8">
                <Form onSubmit={onSubmit} className="flex flex-col gap-5">

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
                        <div className="relative">
                            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={15} />
                            <Input
                                placeholder="Enter your email"
                                className={inputClass}
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
                        <div className="relative">
                            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={15} />
                            <Input
                                placeholder="Create a password"
                                className={`${inputClass} pr-9`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? <FiEyeOff size={15} /> : <FiEye size={15} />}
                            </button>
                        </div>
                        <FieldError className="text-xs text-red-500 mt-0.5" />
                    </TextField>

                    <Button
                        type="submit"
                        className="w-full bg-[#2AACBB] text-white font-semibold py-3 rounded-lg text-sm mt-1"
                    >
                        Sign In
                    </Button>

                    <div className="flex items-center gap-3 my-1">
                        <Separator className="flex-1" />
                        <span className="text-xs text-gray-400">Or sign up with</span>
                        <Separator className="flex-1" />
                    </div>

                </Form>

                <Button
                onClick={handleGoogleSignin}
                    type="button"
                    variant="bordered"
                    className="w-full border border-gray-200 rounded-lg py-3 text-sm text-gray-700 font-medium"
                >
                    <FcGoogle size={18} />
                    Sign Up With Google
                </Button>

                <p className="text-center text-sm text-gray-400 mt-1">
                    Don't have an account?{" "}
                    <Link href="/signup" className="text-[#2AACBB] font-semibold cursor-pointer hover:underline">
                        Sign Up
                    </Link>
                </p>
            </Card>
        </div>
    );
};

export default LoginPage