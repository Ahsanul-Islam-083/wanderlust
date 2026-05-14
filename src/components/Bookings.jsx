import Image from "next/image";
import { Button, Card } from "@heroui/react";
import { LuCalendarDays, LuMapPin } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import { BookingCancelAlert } from "./BookingCancelAlert";


const Bookings = ({ booking }) => {
    const {
        destinationName,
        imageUrl,
        departureDate,
        _id:bookingId,
        price,
    } = booking;

    const image = Array.isArray(imageUrl) ? imageUrl[0] : imageUrl;

    const formattedDate = new Date(departureDate).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <Card className="flex sm:flex-row items-center justify-between gap-4 m-3 sm:m-0 p-3 border border-gray-200 rounded-xl shadow-sm lg:min-w-3xl">

            {/* Image */}
            <div className="relative w-50 h-40 rounded-lg overflow-hidden shrink-0">
                <Image
                    src={image}
                    alt={destinationName}
                    fill
                    className="object-cover"
                    sizes="550px"
                />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-1">

                {/* Name */}
                <h3 className="text-base font-bold text-gray-900">{destinationName}</h3>

                {/* Meta */}
                <div className="flex flex-col gap-0.5 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5">
                        <LuCalendarDays size={13} className="shrink-0" />
                        Departure: {formattedDate}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <LuMapPin size={13} className="shrink-0" />
                        Booking ID: {booking._id}
                    </span>
                </div>

                {/* Price */}
                <p className="text-lg font-bold text-cyan-500">${price?.toLocaleString()}</p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 shrink-0 pr-2">
                <BookingCancelAlert bookingId={bookingId} />
                <Button
                    size="sm"
                    className="bg-cyan-500 text-white rounded-md"
                >
                    <LuEye size={15} />
                    View
                </Button>
            </div>

        </Card>
    );
};

export default Bookings;