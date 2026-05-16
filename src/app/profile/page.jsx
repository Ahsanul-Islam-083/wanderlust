"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card, Chip } from "@heroui/react";
import Link from "next/link";
import {
  FiEdit2,
  FiMail,
  FiGlobe,
  FiMapPin,
  FiHeart,
  FiCalendar,
} from "react-icons/fi";

const ProfilePage = () => {
  const { data } = authClient.useSession();
  const user = data?.user;
  console.log(user);
  

  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "2024";

  const stats = [
    { icon: <FiGlobe size={15} />,    label: "Countries", value: "8"  },
    { icon: <FiMapPin size={15} />,   label: "Trips",     value: "12" },
    { icon: <FiHeart size={15} />,    label: "Wishlist",  value: "24" },
    { icon: <FiCalendar size={15} />, label: "Bookings",  value: "5"  },
  ];

  return (
    <div className="w-full max-w-xl mx-auto px-3 sm:px-4 py-10 sm:py-16">
      <h1 className="text-xl sm:text-2xl font-bold text-black mb-6 sm:mb-8">
        My Profile
      </h1>

      <Card className="w-full p-5 sm:p-8 flex flex-col items-center gap-5 sm:gap-6">

        {/* avatar */}
        <Avatar className="w-20 h-20 sm:w-24 sm:h-24 ring-4 ring-teal-100">
          <Avatar.Image
            alt={user?.name}
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback className="text-lg sm:text-xl bg-teal-500 text-white">
            {user?.name?.charAt(0)}
          </Avatar.Fallback>
        </Avatar>

        {/* name + email */}
        <div className="text-center px-2">
          <h2 className="text-lg sm:text-xl font-bold text-black">{user?.name}</h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 flex items-center justify-center gap-1.5 flex-wrap">
            <FiMail size={13} className="text-teal-500 flex-shrink-0" />
            <span className="break-all">{user?.email}</span>
          </p>
          <Chip
            size="sm"
            className="mt-2 bg-teal-50 text-teal-600 border border-teal-200 font-medium text-xs"
          >
            Explorer Pro
          </Chip>
        </div>

        {/* stats */}
        <div className="grid grid-cols-4 w-full divide-x divide-gray-100 border border-gray-100 rounded-xl overflow-hidden">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center py-3 gap-0.5 hover:bg-teal-50 transition-colors"
            >
              <span className="text-teal-500">{s.icon}</span>
              <span className="text-base sm:text-lg font-bold text-black">{s.value}</span>
              <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wide hidden xs:block sm:block">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* member since */}
        <p className="text-xs text-gray-400 flex items-center gap-1.5">
          <FiCalendar size={12} className="text-teal-400 flex-shrink-0" />
          Member since {memberSince}
        </p>

        {/* action */}
        <Link href="/profile/update" className="w-full sm:w-auto">
          <Button
            radius="full"
            className="bg-teal-500 text-white text-sm font-medium hover:bg-teal-600 w-full sm:w-auto"
          >
            <FiEdit2 size={14} />
            Update Profile
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default ProfilePage;