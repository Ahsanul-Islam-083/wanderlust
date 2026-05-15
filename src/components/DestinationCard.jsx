import Image from "next/image";
import Link from "next/link";
import { Card } from "@heroui/react";
import { LuMapPin, LuCalendarDays } from "react-icons/lu";
import { FiArrowUpRight } from "react-icons/fi";

const DestinationCard = ({ destination }) => {
    const { _id, imageUrl, price, destinationName, duration, country } = destination;

    return (
        <Card className="w-full rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">

            {/* Image */}
            <div className="relative w-full h-48 sm:h-52 md:h-56">
                <Image
                    className="object-cover"
                    src={imageUrl}
                    alt={destinationName}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            </div>

            <Card.Content className="p-4 flex flex-col gap-2">
                <p className="flex items-center gap-1 text-gray-500 text-sm">
                    <LuMapPin className="shrink-0" />
                    <span>{country}</span>
                </p>
                <div className="flex grow items-center justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                        {destinationName}
                    </h3>
                    <p className="text-gray-900 font-bold text-sm sm:text-base shrink-0">
                        ${price}<span className="text-gray-400 font-normal text-xs">/Person</span>
                    </p>
                </div>
                <p className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <LuCalendarDays className="shrink-0" />
                    <span>{duration}</span>
                </p>
                <Link
                    href={`/destinations/${_id}`}
                    className="flex items-center gap-1 text-cyan-500 font-semibold text-sm uppercase tracking-wide underline underline-offset-2 w-fit mt-1 hover:text-cyan-600 transition-colors"
                >
                    Book Now <FiArrowUpRight className="text-base" />
                </Link>
            </Card.Content>

        </Card>
    );
};

export default DestinationCard;