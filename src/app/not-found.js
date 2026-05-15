"use client"
import Link from "next/link";
import { FaCompass, FaHome, FaMapMarkedAlt } from "react-icons/fa";

const NotFound = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-6"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-3xl">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="bg-cyan-500/20 p-6 rounded-full border border-cyan-400 shadow-2xl">
                        <FaCompass className="text-6xl text-cyan-400 animate-spin-slow" />
                    </div>
                </div>

                {/* 404 */}
                <h1 className="text-8xl md:text-9xl font-extrabold text-white tracking-widest drop-shadow-lg">
                    404
                </h1>

                {/* Heading */}
                <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
                    Oops! You're Lost.
                </h2>

                {/* Description */}
                <p className="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed">
                    The destination you're looking for seems to have disappeared
                    from the map. Let's get you back to exploring amazing places.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
                    <Link href="/">
                        <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105">
                            <FaHome />
                            Back Home
                        </button>
                    </Link>
                    <Link href="/destinations">
                        <button className="flex items-center gap-2 border border-white/30 bg-white/10 hover:bg-white/20 transition-all duration-300 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105">
                            <FaMapMarkedAlt />
                            Explore Destinations
                        </button>
                    </Link>
                </div>

                {/* Footer Text */}
                <div className="mt-16 text-gray-400 text-sm tracking-[0.3em] uppercase">
                    Wanderlust • Explore Beyond Limits
                </div>
            </div>
        </div>
    );
};

export default NotFound;