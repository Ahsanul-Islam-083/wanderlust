
'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import { FaUser, FaSignInAlt, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';

const Navbar = () => {

    const {data: session} = authClient.useSession()
    const user = session?.user

    const handleSignout = async () => {
        await authClient.signOut();
    }

    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href) => pathname === href;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    const leftLinks = [
        { href: '/', label: 'Home', },
        { href: '/destinations', label: 'Destinations', },
        { href: '/my-bookings', label: 'My Bookings', },
        { href: '/add-destination', label: 'Add Destination', },
    ];

    const rightLinks = [
        { href: '/profile', label: 'Profile', },
        { href: '/login', label: 'Login', },
        { href: '/signup', label: 'Sign Up', },
    ];

    // Shared class builders
    const desktopLinkClass = (href) =>
        `flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-150 whitespace-nowrap ${isActive(href)
            ? 'text-teal-600 bg-teal-50 font-semibold'
            : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'
        }`;

    const drawerLinkClass = (href) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-150 ${isActive(href)
            ? 'text-teal-600 bg-teal-50 font-semibold border-l-4 border-teal-500'
            : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
        }`;

    const drawerIconClass = (href) =>
        `text-lg shrink-0 ${isActive(href) ? 'text-teal-600' : 'text-teal-400'}`;

    return (
        <>
            <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2">

                    {/* Hamburger */}
                    <button
                        className="lg:hidden shrink-0 p-2 rounded-lg text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200 text-xl"
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <IoClose /> : <RxHamburgerMenu />}
                    </button>

                    {/* Left nav links — desktop */}
                    <ul className="hidden lg:flex items-center gap-1 shrink-0">
                        {leftLinks.map(({ href, label, icon }) => (
                            <li key={href}>
                                <Link href={href} className={desktopLinkClass(href)}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Logo */}
                    <div className="flex-1 flex justify-center lg:flex-none lg:mx-6">
                        <Link href="/" onClick={closeMenu} className="shrink-0">
                            <Image
                                src="/assets/Wanderlast.png"
                                alt="Wanderlast"
                                width={150}
                                height={48}
                            />
                        </Link>
                    </div>

                    {/* Right nav links — desktop */}
                    <ul className="hidden lg:flex items-center gap-1 shrink-0">
                        <li>
                            <Link href="/profile" className={desktopLinkClass('/profile')}>
                                <FaUser className="shrink-0" />
                                Profile
                            </Link>
                        </li>
                        {user ? <>
                            <li>
                                <Avatar>
                                    <Avatar.Image referrerPolicy='no-referrer' alt={user?.name} src={user?.image} />
                                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                                </Avatar>
                            </li>
                            <li>
                                <Button
                                    onClick={handleSignout}
                                    variant="danger-soft"
                                    className={'rounded-md'}
                                >
                                    <FaSignOutAlt className="rotate-180" size={15} />
                                    Logout
                                </Button>

                            </li>
                        </> : <>
                            <li>
                                <Link href="/login" className={desktopLinkClass('/login')}>
                                    <FaSignInAlt className="shrink-0" />
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/signup"
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-150 whitespace-nowrap shadow-sm ${isActive('/signup')
                                        ? 'bg-teal-700 text-white ring-2 ring-teal-400 ring-offset-1'
                                        : 'bg-teal-500 hover:bg-teal-600 text-white'
                                        }`}
                                >
                                    <FaUserPlus className="shrink-0" />
                                    Sign Up
                                </Link>
                            </li>
                        </>}
                    </ul>
                </div>
            </nav >

            {/* Overlay */}
            {
                menuOpen && (
                    <div
                        className="lg:hidden fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
                        onClick={closeMenu}
                    />
                )
            }

            {/* Slide-in Drawer */}
            <div
                className={`lg:hidden fixed top-0 left-0 h-full w-72 max-w-[85vw] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Drawer Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                    <Image
                        src="/assets/Wanderlast.png"
                        alt="Wanderlast"
                        width={120}
                        height={36}
                        className="h-8 w-auto object-contain"
                    />
                    <button
                        onClick={closeMenu}
                        className="p-2 rounded-lg text-gray-500 hover:text-teal-600 hover:bg-teal-50 transition-all"
                        aria-label="Close menu"
                    >
                        <IoClose className="text-xl" />
                    </button>
                </div>

                {/* Drawer Links */}
                <div className="overflow-y-auto h-[calc(100%-65px)] flex flex-col justify-between py-4">
                    <div>
                        <p className="px-5 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Navigate</p>
                        <ul className="flex flex-col gap-1 px-3">
                            {leftLinks.map(({ href, label, icon }) => (
                                <li key={href}>
                                    <Link href={href} onClick={closeMenu} className={drawerLinkClass(href)}>
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="my-4 mx-5 border-t border-gray-100" />

                        <p className="px-5 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Account</p>
                        <ul className="flex flex-col gap-1 px-3">
                            {
                                user ? <>
                                    <li className='flex justify-center'>
                                        <Avatar>
                                            <Avatar.Image
                                                referrerPolicy='no-referrer'
                                                alt={user?.name} src={user?.image} />
                                            <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                                        </Avatar>
                                    </li>
                                    <li>
                                        <Button
                                            onClick={handleSignout}
                                            variant="danger-soft"
                                            className={'w-full rounded-md'}
                                        >
                                            <FaSignOutAlt className="rotate-180" size={15} />
                                            Logout
                                        </Button>

                                    </li>
                                </> : <>
                                    {rightLinks.map(({ href, label, icon }) => (
                                        <li key={href}>
                                            <Link href={href} onClick={closeMenu} className={drawerLinkClass(href)}>
                                                <span className={drawerIconClass(href)}>{icon}</span>
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </>
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Navbar;