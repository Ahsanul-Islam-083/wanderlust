"use client";
import React from "react";
import Link from "next/link";
import { FaExclamationTriangle, FaHome, FaRedo } from "react-icons/fa";

const ErrorPage = ({ error, reset }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Top Nav Bar */}
            <div className="w-full bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <Link
                    href="/destinations"
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-800 text-sm font-medium transition-colors"
                >
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Back to Destinations
                </Link>
            </div>

            {/* Main Error Content */}
            <div className="flex-1 flex items-center justify-center px-6 py-16">
                <div className="max-w-2xl w-full">
                    {/* Card */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                        {/* Top cyan accent bar */}
                        <div className="h-1.5 w-full bg-cyan-400" />

                        <div className="p-10 text-center">
                            {/* Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="bg-red-50 p-5 rounded-full border border-red-100">
                                    <FaExclamationTriangle className="text-4xl text-red-400" />
                                </div>
                            </div>

                            {/* Label */}
                            <p className="text-xs font-semibold tracking-widest text-cyan-500 uppercase mb-3">
                                Something went wrong
                            </p>

                            {/* Title */}
                            <h1 className="text-3xl font-bold text-gray-900 mb-3">
                                We hit a snag
                            </h1>

                            {/* Description */}
                            <p className="text-gray-500 text-base leading-relaxed mb-2">
                                An unexpected error occurred while loading this
                                destination. Our team has been notified and is
                                working on a fix.
                            </p>

                            {/* Error digest */}
                            {error?.digest && (
                                <p className="text-xs text-gray-400 font-mono mt-1 mb-6">
                                    Error ID:{" "}
                                    <span className="text-gray-500">
                                        {error.digest}
                                    </span>
                                </p>
                            )}

                            {/* Divider */}
                            <div className="border-t border-gray-100 my-8" />

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                {reset && (
                                    <button
                                        onClick={reset}
                                        className="flex items-center gap-2 bg-cyan-400 hover:bg-cyan-500 transition-all duration-200 text-white px-7 py-3 rounded-full font-semibold text-sm shadow-sm hover:shadow-md w-full sm:w-auto justify-center"
                                    >
                                        <FaRedo className="text-xs" />
                                        Try Again
                                    </button>
                                )}
                                <Link href="/" className="w-full sm:w-auto">
                                    <button className="flex items-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 transition-all duration-200 text-gray-700 px-7 py-3 rounded-full font-semibold text-sm w-full justify-center">
                                        <FaHome className="text-sm text-gray-400" />
                                        Back to Home
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Footer hint */}
                    <p className="text-center text-gray-400 text-xs mt-6 tracking-wide">
                        If the problem persists,{" "}
                        <Link
                            href="/contact"
                            className="text-cyan-500 hover:underline"
                        >
                            contact support
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;