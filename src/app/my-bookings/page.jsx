import Bookings from '@/components/Bookings';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookingPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    });
    const user = session?.user;
    // console.log(user);

    const res = await fetch(`http://localhost:5000/booking/${user?.id}`,{cache: 'no-store'})

    const bookings = await res.json();
    console.log(bookings);


    return (
        <div className='max-w-7xl mx-auto pt-4 space-y-5'>
            <div>
                <h2 className='text-3xl font-semibold'>My Bookings</h2>
                <p className='text-gray-500'>Manage and view your upcoming travel plans</p>
            </div>
            <div className='flex flex-col gap-5'>
                {
                    bookings.map(booking => <Bookings key={booking._id} booking={booking} />)
                }
            </div>
        </div>
    );
};

export default MyBookingPage;