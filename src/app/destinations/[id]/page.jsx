
import Image from 'next/image';
import Link from 'next/link';
import { LuMapPin, LuCalendarDays, LuArrowLeft, LuStar, LuCheck, LuTag } from 'react-icons/lu';
import { Button} from '@heroui/react';
import { EditModal } from '@/components/EditModal';
import { MdDelete } from 'react-icons/md';
import { DeleteAlert } from '@/components/DeleteAlert';

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`http://localhost:5000/destination/${id}`);
    const destination = await res.json();

    const {
        destinationName,
        country,
        category,
        price,
        duration,
        departureDate,
        imageUrl,
        description,
    } = destination;

    const image = Array.isArray(imageUrl) ? imageUrl[0] : imageUrl;

    const formattedDate = new Date(departureDate).toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
    });

    return (
        <div className="min-h-screen max-w-7xl mx-auto bg-white">

            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
                <Link
                    href="/destinations"
                    className="flex items-center gap-1.5 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                >
                    <LuArrowLeft className="text-base" />
                    Back to Destinations
                </Link>
                <div className="flex items-center gap-2">
                    <EditModal destination={destination} />
                    <DeleteAlert destination={destination} />
                </div>
            </div>

            <div className='md:m-4'>
                {/* Hero Image */}
                <div className="relative w-full h-56 sm:h-72 md:h-80 lg:h-96">
                    <Image
                        src={image}
                        alt={destinationName}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 flex flex-col lg:flex-row gap-8">

                    {/* Left Column */}
                    <div className="flex-1">

                        {/* Country & Category */}
                        <div className="flex items-center gap-3 text-gray-500 text-sm mb-2">
                            {country && (
                                <span className="flex items-center gap-1">
                                    <LuMapPin className="shrink-0" />
                                    {country}
                                </span>
                            )}
                            {category && (
                                <span className="flex items-center gap-1">
                                    <LuTag className="shrink-0" />
                                    {category}
                                </span>
                            )}
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                            {destinationName}
                        </h1>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                            {duration && (
                                <span className="flex items-center gap-1.5">
                                    <LuCalendarDays className="shrink-0" />
                                    {duration}
                                </span>
                            )}
                        </div>

                        {/* Description */}
                        {description && (
                            <section className="mb-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">Overview</h2>
                                <p className="text-gray-600 leading-relaxed">{description}</p>
                            </section>
                        )}
                    </div>

                    {/* Right Column — Booking Card */}
                    <div className="w-full lg:w-80 shrink-0">
                        <div className="border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-20">

                            <p className="text-sm text-gray-500 mb-1">Starting from</p>
                            {price && (
                                <>
                                    <p className="text-4xl font-bold text-cyan-500 mb-1">
                                        ${price.toLocaleString()}
                                    </p>
                                    <p className="text-sm text-gray-400 mb-5">per person</p>
                                </>
                            )}

                            {/* Departure Date */}
                            {departureDate && (
                                <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2.5 mb-4 text-sm text-gray-700">
                                    <LuCalendarDays className="shrink-0 text-gray-400" />
                                    {formattedDate}
                                </div>
                            )}

                            {/* Book Button */}
                            <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                                Book Now →
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DestinationDetailsPage;