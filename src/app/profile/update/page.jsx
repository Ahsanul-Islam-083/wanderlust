"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FiCheck, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import { useState } from "react";

const UpdateProfilePage = () => {
  const { data } = authClient.useSession();
  const user = data?.user;
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState(user?.image || "");

  const onSubmit = async (e) => {
    e.preventDefault();

    const name  = e.target.name.value;
    const image = e.target.image.value;

    const { error } = await authClient.updateUser({ name, image });

    if (!error) {
      toast.success("Profile updated successfully! 🎉");
      router.push("/profile");
    } else {
      toast.error(error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto px-3 sm:px-4 pt-10 sm:pt-16">
      <h1 className="text-xl sm:text-2xl font-bold text-black mb-6 sm:mb-8">
        Update Profile
      </h1>

      <Card className="w-full p-5 sm:p-8">

        {/* live avatar preview */}
        <div className="flex justify-center mb-6">
          <Avatar className="w-20 h-20 ring-4 ring-teal-100">
            <Avatar.Image
              alt={user?.name}
              src={imageUrl || user?.image}
              referrerPolicy="no-referrer"
            />
            <Avatar.Fallback className="text-xl bg-teal-500 text-white">
              {user?.name?.charAt(0)}
            </Avatar.Fallback>
          </Avatar>
        </div>

        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>

          <TextField
            isRequired
            name="name"
            type="text"
            className="w-full"
            defaultValue={user?.name}
          >
            <Label className="text-sm font-medium text-gray-700 mb-1 block">
              Full Name
            </Label>
            <Input
              placeholder="Your Name"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-teal-400 transition-colors"
            />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          <TextField
            isRequired
            name="image"
            type="text"
            className="w-full"
            defaultValue={user?.image}
            onChange={(val) => setImageUrl(val)}
          >
            <Label className="text-sm font-medium text-gray-700 mb-1 block">
              Profile Image URL
            </Label>
            <Input
              placeholder="https://example.com/photo.jpg"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-teal-400 transition-colors"
            />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          <Button
            type="submit"
            radius="full"
            className="bg-teal-500 text-white text-sm font-medium hover:bg-teal-600 w-full mt-2"
          >
            <FiCheck size={15} />
            Update Information
          </Button>
        </Form>

        <div className="flex justify-center mt-4 mb-2">
          <Link
            href="/profile"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-teal-600 hover:font-medium transition-colors"
          >
            <FiArrowLeft size={15} />
            Back to Profile
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default UpdateProfilePage;